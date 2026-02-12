
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, Loader2, Compass } from 'lucide-react';
import { getLongevityAdvice } from '../services/geminiService';
import { Message } from '../types';
import { marked } from 'marked';

const AIAdvisor: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: '你好，远行者。我是你的 **VividLife 心灵顾问**。\n\n让我们在这里探讨那些关于生命质量、自然律动与长寿的奥秘。你可以向我咨询任何关于身心平衡的科学建议。' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    marked.setOptions({ breaks: true, gfm: true });
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
      setMessages(prev => [...prev, { role: 'model', text: response || "我的思绪有些迷离，请再试一次。" }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "连接自然的通道暂时受阻，请检查网络。" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-200px)] bg-white rounded-[2.5rem] border border-stone-50 shadow-sm overflow-hidden animate-in zoom-in duration-700">
      <div className="p-8 border-b border-stone-50 bg-[#FDFBF7]/50 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-[#5F7161] p-3 rounded-2xl shadow-lg shadow-[#5F7161]/20">
            <Compass className="text-white w-6 h-6" />
          </div>
          <div>
            <h2 className="serif text-xl font-bold text-stone-800">心灵顾问</h2>
            <p className="text-[10px] text-[#5F7161] font-bold uppercase tracking-widest">正在感应自然律动...</p>
          </div>
        </div>
        <div className="px-4 py-2 bg-white rounded-full border border-stone-100 flex items-center gap-2">
           <Sparkles className="w-4 h-4 text-stone-300" />
           <span className="text-[10px] font-bold text-stone-400 tracking-tighter uppercase">Gemini 3 Pro Intelligence</span>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-10 space-y-10 scroll-smooth bg-[url('https://www.transparenttextures.com/patterns/p6.png')]">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex max-w-[80%] gap-6 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`w-10 h-10 rounded-2xl shrink-0 flex items-center justify-center shadow-md ${msg.role === 'user' ? 'bg-[#5F7161] text-white' : 'bg-stone-50 text-stone-400'}`}>
                {msg.role === 'user' ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
              </div>
              <div className={`p-8 rounded-[2rem] text-base leading-relaxed ${
                msg.role === 'user' 
                ? 'bg-[#5F7161] text-white shadow-xl shadow-[#5F7161]/20 rounded-tr-none' 
                : 'bg-white text-stone-700 shadow-sm border border-stone-100 rounded-tl-none'
              }`}>
                {msg.role === 'user' ? (
                  <p className="font-medium tracking-wide">{msg.text}</p>
                ) : (
                  <div 
                    className="markdown-content prose prose-stone"
                    dangerouslySetInnerHTML={{ __html: marked.parse(msg.text) }} 
                  />
                )}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white p-6 rounded-[2rem] rounded-tl-none border border-stone-100 flex items-center gap-4 shadow-sm animate-pulse">
              <Loader2 className="w-5 h-5 text-[#5F7161] animate-spin" />
              <span className="text-sm text-stone-400 font-medium">正在检索科学研究并整理思绪...</span>
            </div>
          </div>
        )}
      </div>

      <div className="p-10 border-t border-stone-50 bg-white">
        <div className="flex gap-4 relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="在这里倾诉或咨询关于生命的奥秘..."
            className="flex-1 bg-stone-50/50 border border-stone-100 rounded-full px-10 py-5 text-stone-700 focus:bg-white focus:ring-4 focus:ring-[#5F7161]/5 focus:border-[#5F7161] outline-none transition-all text-sm placeholder:text-stone-300 shadow-inner"
          />
          <button
            onClick={handleSend}
            disabled={isLoading}
            className="bg-[#5F7161] text-white p-5 rounded-full hover:scale-105 transition-all disabled:opacity-50 shadow-xl shadow-[#5F7161]/30 flex items-center justify-center min-w-[64px]"
          >
            <Send className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAdvisor;
