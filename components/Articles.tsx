
import React, { useState } from 'react';
import { Clock, User, ChevronRight, ArrowLeft, Bookmark, Share2, Sparkles, Quote, ExternalLink } from 'lucide-react';
import { Article } from '../types';
import { marked } from 'marked';

const MOCK_ARTICLES: Article[] = [
  {
    id: '1',
    title: '身心平衡：如何在快节奏生活中找到内在宁静',
    summary: '现代生活如同永不停歇的钟摆。我们探索如何通过简单的呼吸与认知重塑，在纷扰中构筑一方心灵净土。',
    content: `
# 寻回内在的宁静：身心平衡的艺术

在每一个被截止日期和通知提醒填满的日子里，我们往往忘记了最基本的生存本能——**深呼吸**。

### 为什么我们感到疲惫？
并不是工作本身消耗了我们，而是我们失去了“切换状态”的能力。神经系统长期处于“战斗或逃跑”模式，导致皮质醇水平居高不下。

> “心如止水，乱则不明。” 宁静不是躲避风暴，而是在风暴中心保持定力。

### 三个立竿见影的习惯
1. **数字排毒 (Digital Detox)**：每天日落后，给自己一小时的无屏幕时间。
2. **正念呼吸**：仅仅三分钟的腹式呼吸，就能有效激活副交感神经。
3. **触碰自然**：赤脚踩在草地上，或抚摸一片叶子，这种“接地”感能迅速平复焦虑。

### 结语
长寿不仅是岁月的叠加，更是生命质量的延展。一个平和的心境，是所有养生法的根基。
    `,
    author: '予心',
    date: '2024-06-01',
    readTime: '6 分钟',
    category: '心理健康',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop',
    tags: ['冥想', '减压', '生活哲学']
  },
  {
    id: '2',
    title: '晨间阳光与昼夜节律：最简单的长寿秘诀',
    summary: '你起床后的前三十分钟决定了你的生物钟质量。了解光线如何调节你的褪黑素与精力水平。',
    content: `
# 阳光：大自然赐予的最廉价补剂

光线不仅让我们看见世界，它更是一把无形的钥匙，校准着我们体内的**生物钟 (Circadian Rhythm)**。

### 晨间光照的魔力
当你醒来后迎接第一缕自然光时，视网膜会向大脑的视交叉上核（SCN）发送信号，停止分泌褪黑素并开始释放皮质醇。这不仅让你迅速清醒，更预设了你 14 小时后的睡眠深度。

### 实践指南
*   **时间窗**：起床后 30-60 分钟内。
*   **时长**：晴天 10 分钟，阴天 20-30 分钟。
*   **切记**：不要隔着窗户玻璃，直接走到户外。

线粒体也会在特定光谱下表现得更加活跃。如果你想追求极致的健康寿命，请不要拒绝阳光。
    `,
    author: '科普君',
    date: '2024-05-28',
    readTime: '4 分钟',
    category: '自然疗法',
    image: 'https://images.unsplash.com/photo-1470252649358-96752a7831e5?q=80&w=1000&auto=format&fit=crop',
    tags: ['睡眠', '生物钟', '光照疗法']
  },
  {
    id: '3',
    title: '森林康养：为什么树木能治愈我们的身体？',
    summary: '芬多精 (Phytoncides) 是树木释放的天然挥发物，研究表明它能显著增强人类的 NK 细胞活性。',
    content: `
# 森林浴：深呼吸中的免疫革命

在森林中漫步，你呼吸到的不仅是氧气，还有树木分泌的化学物质。

### 什么是森林浴？
起源于日本的“森林浴”(Shinrin-yoku)，意为沐浴在森林的气氛中。这不仅仅是散步，而是一种全感官的参与。

### 科学证据
研究发现，在森林中停留两小时，血液中的天然杀伤细胞（NK 细胞）活性会提升 50% 以上，这种效应可以持续一周。

> “在自然中，每一分钟都有奇迹在发生。”

放下手机，去听风吹过树梢的声音，去看光影在青苔上的跳跃。你的身体比你更懂得如何自我修复。
    `,
    author: '生态学者',
    date: '2024-05-25',
    readTime: '8 分钟',
    category: '生态健康',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1000&auto=format&fit=crop',
    tags: ['森林浴', '免疫力', '自然健康']
  }
];

const Articles: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [activeCategory, setActiveCategory] = useState('全部');

  const categories = ['全部', '心理健康', '自然疗法', '生态健康', '营养科学'];

  const filteredArticles = activeCategory === '全部' 
    ? MOCK_ARTICLES 
    : MOCK_ARTICLES.filter(a => a.category === activeCategory);

  if (selectedArticle) {
    return (
      <div className="bg-white min-h-screen rounded-[3rem] shadow-2xl shadow-stone-200/50 overflow-hidden animate-in fade-in duration-700">
        <div className="sticky top-0 bg-white/80 backdrop-blur-xl border-b border-stone-100 p-6 flex items-center justify-between z-10">
          <button 
            onClick={() => setSelectedArticle(null)}
            className="group flex items-center gap-3 text-stone-600 hover:text-[#4A614D] transition-all"
          >
            <div className="bg-stone-50 p-2 rounded-xl group-hover:bg-[#4A614D]/10 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </div>
            <span className="text-sm font-bold tracking-wide">回到探索</span>
          </button>
          <div className="flex gap-4">
            <button className="p-3 text-stone-400 hover:text-[#4A614D] bg-stone-50 rounded-2xl transition-all"><Bookmark className="w-5 h-5" /></button>
            <button className="p-3 text-stone-400 hover:text-[#4A614D] bg-stone-50 rounded-2xl transition-all"><Share2 className="w-5 h-5" /></button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-8 py-20">
          <header className="mb-20">
            <div className="flex justify-center mb-10">
              <span className="px-5 py-2 bg-[#F4F1DE] text-[#4A614D] rounded-2xl text-[11px] font-black uppercase tracking-[0.25em] shadow-sm">
                {selectedArticle.category}
              </span>
            </div>
            <h1 className="serif text-6xl font-bold text-stone-900 text-center leading-[1.15] mb-12 tracking-tight">
              {selectedArticle.title}
            </h1>
            <div className="flex items-center justify-center gap-10 text-stone-600 text-sm font-semibold">
              <span className="flex items-center gap-2.5"><User className="w-4 h-4 text-[#4A614D]" /> {selectedArticle.author}</span>
              <span className="flex items-center gap-2.5"><Clock className="w-4 h-4 text-[#4A614D]" /> {selectedArticle.readTime}</span>
              <span className="opacity-60">{selectedArticle.date}</span>
            </div>
          </header>

          <div className="relative group mb-24 px-4 md:px-0">
             <div className="absolute inset-0 bg-[#4A614D]/5 -rotate-1 rounded-[3rem] scale-105 blur-2xl"></div>
             <img 
               src={selectedArticle.image} 
               alt={selectedArticle.title} 
               className="relative w-full h-[600px] object-cover rounded-[3rem] shadow-2xl transition-transform duration-1000 group-hover:scale-[1.01]"
             />
             <div className="absolute -bottom-10 -right-6 bg-white p-8 rounded-[2.5rem] shadow-2xl hidden lg:block max-w-sm border border-stone-50">
                <Quote className="text-[#4A614D]/10 w-16 h-16 absolute -top-4 -left-4" />
                <p className="text-stone-700 italic text-base relative z-10 leading-relaxed font-medium">
                   "{selectedArticle.summary}"
                </p>
             </div>
          </div>

          <div className="flex items-start gap-8 bg-[#FDFBF7] p-10 rounded-[3rem] border border-stone-200/50 mb-20 shadow-inner">
             <div className="bg-[#4A614D] p-4 rounded-2xl text-white shadow-xl shadow-[#4A614D]/30 shrink-0">
                <Sparkles className="w-6 h-6" />
             </div>
             <div>
                <h4 className="serif font-bold text-stone-900 text-xl mb-3 tracking-tight">AI 导读 · 核心洞察</h4>
                <p className="text-stone-600 text-lg leading-relaxed font-medium">{selectedArticle.summary}</p>
             </div>
          </div>

          <article 
            className="markdown-content prose prose-stone lg:prose-xl max-w-none text-stone-800"
            dangerouslySetInnerHTML={{ __html: marked.parse(selectedArticle.content) }}
          />

          <div className="mt-24 pt-12 border-t border-stone-100">
             <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex flex-wrap gap-3">
                  {selectedArticle.tags.map(tag => (
                    <span key={tag} className="text-[11px] font-black text-stone-500 uppercase tracking-widest px-5 py-2 bg-stone-50 rounded-xl border border-stone-100 hover:border-[#4A614D] transition-colors cursor-default">
                      #{tag}
                    </span>
                  ))}
                </div>
                <button className="serif text-stone-900 font-black text-lg hover:text-[#4A614D] transition-all flex items-center gap-3 group">
                  分享此份宁静 <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </button>
             </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <div className="text-center max-w-3xl mx-auto space-y-6">
        <h1 className="serif text-6xl font-bold text-stone-900 tracking-tight leading-tight">探索身心的平衡</h1>
        <p className="text-stone-600 text-xl font-medium leading-relaxed max-w-2xl mx-auto">
          在自然的律动中寻回生活的本真，<br/>让科学引领你走向更深邃的健康。
        </p>
      </div>

      <div className="flex justify-center">
        <div className="flex gap-2 p-2 bg-white/70 backdrop-blur-xl rounded-[2.5rem] border border-stone-200 shadow-xl overflow-x-auto">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-10 py-3.5 rounded-full text-[11px] font-black transition-all duration-500 whitespace-nowrap tracking-widest uppercase ${
                activeCategory === cat 
                ? 'bg-[#4A614D] text-white shadow-2xl shadow-[#4A614D]/40' 
                : 'text-stone-500 hover:text-stone-800 hover:bg-stone-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 px-4">
        {filteredArticles.map((article, index) => (
          <div 
            key={article.id}
            onClick={() => setSelectedArticle(article)}
            className={`group cursor-pointer flex flex-col ${index % 2 !== 0 ? 'md:mt-16' : ''}`}
          >
            <div className="relative overflow-hidden rounded-[3rem] aspect-[4/5] mb-10 shadow-2xl shadow-stone-300/40">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
              />
              <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-stone-900/0 transition-colors" />
              <div className="absolute top-10 left-10">
                <span className="bg-white/95 backdrop-blur-md px-5 py-2 rounded-2xl text-[11px] font-black text-stone-900 uppercase tracking-[0.2em] shadow-2xl border border-white/20">
                  {article.category}
                </span>
              </div>
            </div>
            
            <div className="px-6 space-y-5">
              <div className="flex items-center gap-5 text-stone-500 text-[11px] font-black uppercase tracking-widest">
                <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {article.readTime}</span>
                <span className="w-1.5 h-1.5 bg-[#4A614D] rounded-full" />
                <span>{article.date}</span>
              </div>
              
              <h3 className="serif text-4xl font-bold text-stone-900 leading-[1.15] group-hover:text-[#4A614D] transition-colors duration-500 tracking-tight">
                {article.title}
              </h3>
              
              <p className="text-stone-600 text-lg leading-relaxed line-clamp-2 font-medium">
                {article.summary}
              </p>
              
              <div className="pt-4 flex items-center gap-3 text-stone-900 font-black text-sm uppercase tracking-widest group-hover:gap-6 transition-all group-hover:text-[#4A614D]">
                阅读全文 <ChevronRight className="w-5 h-5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
