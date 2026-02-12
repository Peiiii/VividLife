
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import AIAdvisor from './components/AIAdvisor';
import HabitTracker from './components/HabitTracker';
import Articles from './components/Articles';
import { NavigationTab } from './types';
import { Bell, Search, Sun, MapPin } from 'lucide-react';

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
          <div className="flex flex-col items-center justify-center h-[500px] text-center space-y-10 animate-in fade-in duration-1000">
            <div className="bg-stone-100 p-12 rounded-[3rem] shadow-inner">
              <Search className="w-20 h-20 text-stone-300" />
            </div>
            <div className="space-y-4">
              <h2 className="serif text-5xl font-bold text-stone-900 tracking-tight">深度数据洞察</h2>
              <p className="text-stone-600 text-lg font-medium max-w-lg mx-auto leading-relaxed">连接您的生理数据终端，让我们从数据的律动中解读生命的奥秘。</p>
            </div>
            <button className="bg-[#4A614D] text-white px-12 py-5 rounded-full font-black shadow-2xl shadow-[#4A614D]/40 hover:scale-105 transition-all tracking-widest uppercase text-xs">
              开启设备同步轨迹
            </button>
          </div>
        );
      default:
        return <Articles />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FEFDFB] flex">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 ml-20 md:ml-64 p-8 md:p-16 transition-all relative overflow-hidden">
        {/* Subtle background flair for vividness */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#4A614D]/5 blur-[150px] -z-10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-500/5 blur-[120px] -z-10 rounded-full -translate-x-1/2 translate-y-1/2"></div>

        {/* Header Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-20 gap-10">
          <div className="flex items-center gap-6 group">
             <div className="w-14 h-14 bg-white rounded-[1.25rem] shadow-xl border border-stone-100 flex items-center justify-center text-amber-500 transition-transform group-hover:scale-110">
                <Sun className="w-7 h-7 animate-[pulse_3s_infinite]" />
             </div>
             <div>
                <h4 className="serif font-bold text-stone-900 text-2xl tracking-tight">晨间愉悦</h4>
                <div className="flex items-center gap-2 text-stone-500 text-[11px] font-black uppercase tracking-widest mt-1">
                   <MapPin className="w-3.5 h-3.5 text-[#4A614D]" /> 杭州 · 空气极佳 · 建议开启户外仪式
                </div>
             </div>
          </div>
          
          <div className="flex items-center gap-6 w-full md:w-auto">
            <div className="relative group flex-1 md:flex-none">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-stone-400 w-5 h-5 group-focus-within:text-[#4A614D] transition-colors" />
              <input 
                type="text" 
                placeholder="寻觅灵感、科学或宁静..." 
                className="w-full md:w-80 pl-14 pr-8 py-4 bg-white/70 border border-stone-200 rounded-full shadow-lg focus:bg-white focus:ring-4 focus:ring-[#4A614D]/5 focus:border-[#4A614D] outline-none transition-all text-sm font-medium placeholder:text-stone-400"
              />
            </div>
            <button className="p-4 bg-white rounded-full border border-stone-200 text-stone-500 hover:text-[#4A614D] hover:shadow-2xl transition-all relative shadow-lg">
              <Bell className="w-6 h-6" />
              <span className="absolute top-4 right-4 w-2 h-2 bg-[#4A614D] rounded-full ring-4 ring-white"></span>
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="max-w-7xl mx-auto pb-40">
          {renderContent()}
        </div>
      </main>
      
      {/* Floating Disclaimer */}
      <footer className="fixed bottom-0 left-20 md:left-64 right-0 p-5 bg-white/40 backdrop-blur-2xl border-t border-stone-100 z-40 text-[10px] text-stone-500 text-center uppercase tracking-[0.4em] font-black">
        尊重自然律动 · 追求极致健康寿命 · VividLife 悦活长寿 (Beta 1.4)
      </footer>
    </div>
  );
};

export default App;
