
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import AIAdvisor from './components/AIAdvisor';
import HabitTracker from './components/HabitTracker';
import Articles from './components/Articles';
import { NavigationTab } from './types';
import { Bell, Search, Sun } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<NavigationTab>(NavigationTab.Articles);

  const renderContent = () => {
    switch (activeTab) {
      case NavigationTab.Overview:
        return <Dashboard />;
      case NavigationTab.AIAdvisor:
        return <AIAdvisor />;
      case NavigationTab.Tracker:
        return <HabitTracker />;
      case NavigationTab.Articles:
        return <Articles />;
      case NavigationTab.Insights:
        return (
          <div className="flex flex-col items-center justify-center h-96 text-center space-y-6">
            <div className="bg-stone-100 p-8 rounded-full">
              <Search className="w-16 h-16 text-stone-300" />
            </div>
            <div className="space-y-2">
              <h2 className="serif text-3xl font-bold text-stone-800">深度数据洞察</h2>
              <p className="text-stone-400 max-w-md mx-auto">连接您的生理数据终端，让我们从数据的律动中解读生命的奥秘。</p>
            </div>
            <button className="bg-[#5F7161] text-white px-10 py-4 rounded-full font-bold shadow-xl shadow-[#5F7161]/20 hover:scale-105 transition-all tracking-widest uppercase text-xs">
              开启设备同步
            </button>
          </div>
        );
      default:
        return <Articles />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] flex">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 ml-20 md:ml-64 p-6 md:p-12 transition-all">
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          <div className="flex items-center gap-4">
             <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-stone-100 flex items-center justify-center text-[#EAB308]">
                <Sun className="w-6 h-6 animate-pulse" />
             </div>
             <div>
                <h4 className="serif font-bold text-stone-800 text-lg">清晨愉快</h4>
                <p className="text-stone-400 text-xs font-medium">今天的空气质量：极佳 · 建议户外冥想</p>
             </div>
          </div>
          
          <div className="flex items-center gap-6 w-full md:w-auto">
            <div className="relative group flex-1 md:flex-none">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-300 w-4 h-4 group-focus-within:text-[#5F7161] transition-colors" />
              <input 
                type="text" 
                placeholder="寻觅灵感或科学..." 
                className="w-full md:w-64 pl-12 pr-6 py-3 bg-white/50 border border-stone-100 rounded-full shadow-sm focus:bg-white focus:ring-2 focus:ring-[#5F7161]/10 focus:border-[#5F7161] outline-none transition-all text-sm placeholder:text-stone-300"
              />
            </div>
            <button className="p-3.5 bg-white rounded-full border border-stone-100 text-stone-400 hover:text-[#5F7161] hover:shadow-lg transition-all relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-3.5 right-3.5 w-1.5 h-1.5 bg-[#5F7161] rounded-full ring-2 ring-white"></span>
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="max-w-7xl mx-auto pb-32">
          {renderContent()}
        </div>
      </main>
      
      {/* Floating Disclaimer */}
      <footer className="fixed bottom-0 left-20 md:left-64 right-0 p-4 bg-white/30 backdrop-blur-md border-t border-stone-100 z-40 text-[9px] text-stone-400 text-center uppercase tracking-[0.3em] font-medium">
        尊重自然律动 · 科学实证生活 · VividLife 悦活长寿 (Beta)
      </footer>
    </div>
  );
};

export default App;
