
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import AIAdvisor from './components/AIAdvisor';
import HabitTracker from './components/HabitTracker';
import { NavigationTab } from './types';
import { Bell, Search } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<NavigationTab>(NavigationTab.Overview);

  const renderContent = () => {
    switch (activeTab) {
      case NavigationTab.Overview:
        return <Dashboard />;
      case NavigationTab.AIAdvisor:
        return <AIAdvisor />;
      case NavigationTab.Tracker:
        return <HabitTracker />;
      case NavigationTab.Insights:
        return (
          <div className="flex flex-col items-center justify-center h-96 text-center space-y-4">
            <div className="bg-slate-100 p-6 rounded-full">
              <Search className="w-12 h-12 text-slate-400" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800">高级生物洞察</h2>
            <p className="text-slate-500 max-w-md">连接您的 CGM（持续血糖监测仪）或 Oura 智能戒指，解锁深层长寿趋势。</p>
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-indigo-100">连接设备</button>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 ml-20 md:ml-64 p-4 md:p-8">
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="搜索健康文章..." 
              className="w-full pl-12 pr-4 py-3 bg-white rounded-2xl border-none shadow-sm focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>
          
          <div className="flex items-center gap-4 w-full md:w-auto">
            <button className="p-3 bg-white rounded-2xl shadow-sm text-slate-500 hover:text-indigo-600 relative">
              <Bell className="w-6 h-6" />
              <span className="absolute top-3 right-3 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="flex-1 md:flex-none">
              <button className="w-full bg-indigo-600 text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all">
                快速扫描
              </button>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="max-w-7xl mx-auto">
          {renderContent()}
        </div>
      </main>
      
      {/* Floating Disclaimer for Longevity Content */}
      <footer className="fixed bottom-0 left-20 md:left-64 right-0 p-2 bg-white/50 backdrop-blur-sm border-t border-slate-200 z-40 text-[10px] text-slate-400 text-center uppercase tracking-tighter">
        基于科学的长寿协议 • 请咨询您的医师 • VividLife Beta v1.2
      </footer>
    </div>
  );
};

export default App;
