
import { GoogleGenAI, Type, GenerateContentResponse } from "@google/genai";
import { Message } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getLongevityAdvice = async (history: Message[], userInput: string) => {
  const model = 'gemini-3-flash-preview';
  
  const systemInstruction = `
    你是一位世界级的长寿顾问和健康寿命专家 VividLife AI。
    你的使命是帮助用户通过科学依据的建议过上更长寿、更健康的生活。
    建议领域包括：营养（自噬、地中海饮食、NAD+前体）、运动（Zone 2 有氧、力量训练、最大摄氧量 VO2 max）、
    睡眠优化（昼夜节律、温度）和心理健康（适当压力、社交关系）。
    
    必须始终包含免责声明：“我是一个 AI，不是医生。在做出重大改变之前，请咨询医疗专业人士。”
    回复应保持鼓励性、专业性且以数据为驱动。使用 Markdown 进行格式化。请始终使用中文回复。
  `;

  const chat = ai.chats.create({
    model: model,
    config: {
      systemInstruction,
    },
  });

  const response = await chat.sendMessage({ message: userInput });
  return response.text;
};

export const generateHealthPlan = async (userData: any) => {
  const model = 'gemini-3-flash-preview';
  const prompt = `基于以下用户信息生成个性化长寿计划：${JSON.stringify(userData)}。
  重点关注“四大支柱”：运动、营养、睡眠和压力管理。请使用中文生成内容。`;

  const response = await ai.models.generateContent({
    model: model,
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          summary: { type: Type.STRING, description: "计划摘要" },
          pillars: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                title: { type: Type.STRING, description: "领域标题" },
                recommendations: { type: Type.ARRAY, items: { type: Type.STRING }, description: "建议列表" },
                priority: { type: Type.STRING, description: "优先级" }
              }
            }
          },
          targetBiomarkers: { type: Type.ARRAY, items: { type: Type.STRING }, description: "目标生物标志物" }
        }
      }
    }
  });

  return JSON.parse(response.text);
};
