
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, Loader2 } from 'lucide-react';
import { getLongevityAdvice } from '../services/geminiService';
import { Message } from '../types';
import { marked } from 'marked';

const AIAdvisor: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: '你好！我是你的 **VividLife AI 顾问**。今天我该如何协助你优化健康寿命？\n\n你可以试着问我：\n* 如何通过营养补剂激活自噬？\n* 我的年龄段适合怎样的 Zone 2 训练强度？\n* 深度睡眠的优化方案。' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // 配置 marked 选项（可选）
  useEffect(() => {
    marked.setOptions({
      breaks: true,
      gfm: true,
    });
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const response = await getLongevityAdvice(messages, userMsg);
      setMessages(prev => [...prev, { role: 'model', text: response || "抱歉，我无法处理该请求。请稍后再试。" }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "连接 AI 服务出错。请检查您的 API 密钥。" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-160px)] bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden animate-in zoom-in duration-300">
      <div className="p-6 border-b border-slate-50 bg-slate-50/50 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-100 p-2 rounded-lg">
            <Bot className="text-indigo-600 w-6 h-6" />
          </div>
          <div>
            <h2 className="font-bold text-slate-800">长寿顾问</h2>
            <p className="text-xs text-green-600 font-medium">在线 • 基于科学的指导</p>
          </div>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-white rounded-full border border-slate-100 text-xs font-medium text-slate-500">
          <Sparkles className="w-3 h-3 text-amber-400" />
          由 Gemini 3 Pro 提供支持
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex max-w-[85%] gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`p-2 rounded-lg h-fit ${msg.role === 'user' ? 'bg-indigo-600' : 'bg-slate-100'}`}>
                {msg.role === 'user' ? <User className="text-white w-4 h-4" /> : <Bot className="text-slate-600 w-4 h-4" />}
              </div>
              <div className={`p-4 rounded-2xl text-sm leading-relaxed ${
                msg.role === 'user' 
                ? 'bg-indigo-600 text-white rounded-tr-none' 
                : 'bg-slate-50 text-slate-700 rounded-tl-none border border-slate-100'
              }`}>
                {msg.role === 'user' ? (
                  <p>{msg.text}</p>
                ) : (
                  <div 
                    className="markdown-content"
                    dangerouslySetInnerHTML={{ __html: marked.parse(msg.text) }} 
                  />
                )}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-slate-50 p-4 rounded-2xl rounded-tl-none border border-slate-100 flex items-center gap-2">
              <Loader2 className="w-4 h-4 text-indigo-600 animate-spin" />
              <span className="text-sm text-slate-500 font-medium">正在检索科学文献并生成方案...</span>
            </div>
          </div>
        )}
      </div>

      <div className="p-6 border-t border-slate-50">
        <div className="flex gap-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="咨询补剂、Zone 2 运动或 NAD+ 相关问题..."
            className="flex-1 bg-slate-50 border-none rounded-2xl px-6 py-4 text-slate-700 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
          />
          <button
            onClick={handleSend}
            disabled={isLoading}
            className="bg-indigo-600 text-white p-4 rounded-2xl hover:bg-indigo-700 transition-colors disabled:opacity-50 flex items-center justify-center min-w-[56px]"
          >
            {isLoading ? <Loader2 className="w-6 h-6 animate-spin" /> : <Send className="w-6 h-6" />}
          </button>
        </div>
        <p className="text-[10px] text-slate-400 mt-3 text-center uppercase tracking-widest font-semibold">
          AI 生成内容 • 非医疗建议 • 基于最新长寿科学
        </p>
      </div>
    </div>
  );
};

export default AIAdvisor;
