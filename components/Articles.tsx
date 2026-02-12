
import React, { useState } from 'react';
import { Clock, User, ChevronRight, ArrowLeft, Bookmark, Share2, Sparkles, Quote } from 'lucide-react';
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
      <div className="bg-white min-h-screen rounded-[2.5rem] shadow-sm overflow-hidden animate-in fade-in duration-700">
        <div className="sticky top-0 bg-white/60 backdrop-blur-xl border-b border-stone-50 p-6 flex items-center justify-between z-10">
          <button 
            onClick={() => setSelectedArticle(null)}
            className="group flex items-center gap-2 text-stone-400 hover:text-[#5F7161] transition-all"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> 
            <span className="text-sm font-medium">返回探索</span>
          </button>
          <div className="flex gap-4">
            <button className="p-2.5 text-stone-300 hover:text-[#5F7161] hover:bg-stone-50 rounded-full transition-all"><Bookmark className="w-5 h-5" /></button>
            <button className="p-2.5 text-stone-300 hover:text-[#5F7161] hover:bg-stone-50 rounded-full transition-all"><Share2 className="w-5 h-5" /></button>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-8 py-16">
          <header className="mb-16">
            <div className="flex justify-center mb-8">
              <span className="px-4 py-1.5 bg-[#F4F1DE] text-[#5F7161] rounded-full text-[10px] font-bold uppercase tracking-[0.2em]">
                {selectedArticle.category}
              </span>
            </div>
            <h1 className="serif text-5xl font-bold text-stone-900 text-center leading-[1.2] mb-10">
              {selectedArticle.title}
            </h1>
            <div className="flex items-center justify-center gap-8 text-stone-400 text-xs font-medium tracking-wide">
              <span className="flex items-center gap-2"><User className="w-3.5 h-3.5" /> {selectedArticle.author}</span>
              <span className="flex items-center gap-2"><Clock className="w-3.5 h-3.5" /> {selectedArticle.readTime}</span>
              <span>{selectedArticle.date}</span>
            </div>
          </header>

          <div className="relative group mb-20">
             <img 
               src={selectedArticle.image} 
               alt={selectedArticle.title} 
               className="w-full h-[500px] object-cover rounded-[2rem] shadow-2xl shadow-stone-200 group-hover:scale-[1.01] transition-transform duration-700"
             />
             <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl hidden md:block max-w-xs">
                <Quote className="text-stone-100 w-12 h-12 absolute -top-2 -left-2" />
                <p className="text-stone-500 italic text-sm relative z-10 leading-relaxed">
                   "{selectedArticle.summary}"
                </p>
             </div>
          </div>

          <div className="flex items-start gap-6 bg-[#FDFBF7] p-8 rounded-3xl border border-stone-100 mb-16">
             <div className="bg-[#5F7161] p-3 rounded-2xl text-white shadow-lg">
                <Sparkles className="w-5 h-5" />
             </div>
             <div>
                <h4 className="serif font-bold text-stone-800 text-lg mb-2">AI 导读：核心洞察</h4>
                <p className="text-stone-500 text-sm leading-relaxed">{selectedArticle.summary}</p>
             </div>
          </div>

          <article 
            className="markdown-content prose prose-stone lg:prose-xl max-w-none text-stone-700"
            dangerouslySetInnerHTML={{ __html: marked.parse(selectedArticle.content) }}
          />

          <div className="mt-24 pt-10 border-t border-stone-100">
             <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {selectedArticle.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold text-stone-400 uppercase tracking-widest px-3 py-1 bg-stone-50 rounded-full border border-stone-100">
                      #{tag}
                    </span>
                  ))}
                </div>
                <button className="serif text-stone-900 font-bold hover:text-[#5F7161] transition-colors">分享此份宁静 →</button>
             </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-6 duration-1000">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h1 className="serif text-5xl font-bold text-stone-900 tracking-tight">探索身心的平衡</h1>
        <p className="text-stone-500 text-lg font-light leading-relaxed">在自然的律动中寻回生活的本真，通过科学的视角重新认识你的身体。</p>
      </div>

      <div className="flex justify-center">
        <div className="flex gap-2 p-1.5 bg-white/50 backdrop-blur-md rounded-[2rem] border border-stone-100 shadow-sm overflow-x-auto">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-2.5 rounded-full text-xs font-bold transition-all duration-500 whitespace-nowrap tracking-widest uppercase ${
                activeCategory === cat 
                ? 'bg-[#5F7161] text-white shadow-xl shadow-[#5F7161]/30' 
                : 'text-stone-400 hover:text-stone-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-4">
        {filteredArticles.map((article, index) => (
          <div 
            key={article.id}
            onClick={() => setSelectedArticle(article)}
            className={`group cursor-pointer ${index % 2 !== 0 ? 'md:mt-12' : ''}`}
          >
            <div className="relative overflow-hidden rounded-[2.5rem] aspect-[4/5] mb-8 shadow-2xl shadow-stone-200/50">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] cubic-bezier(0.2, 0, 0.2, 1)"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute top-8 left-8">
                <span className="bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black text-stone-800 uppercase tracking-[0.2em] shadow-lg">
                  {article.category}
                </span>
              </div>
            </div>
            
            <div className="px-4 space-y-4">
              <div className="flex items-center gap-4 text-stone-400 text-[10px] font-bold uppercase tracking-widest">
                <span>{article.readTime}</span>
                <span className="w-1 h-1 bg-stone-300 rounded-full" />
                <span>{article.date}</span>
              </div>
              
              <h3 className="serif text-3xl font-bold text-stone-800 leading-tight group-hover:text-[#5F7161] transition-colors duration-500">
                {article.title}
              </h3>
              
              <p className="text-stone-500 text-sm leading-loose line-clamp-2 font-light">
                {article.summary}
              </p>
              
              <div className="pt-4 flex items-center gap-2 text-stone-900 font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                阅读全文 <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
