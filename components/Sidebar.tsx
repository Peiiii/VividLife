
import React from 'react';
import { LayoutDashboard, MessageSquare, ListCheck, BarChart3, Leaf, BookOpen, Compass } from 'lucide-react';
import { NavigationTab } from '../types';

interface SidebarProps {
  activeTab: NavigationTab;
  setActiveTab: (tab: NavigationTab) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: NavigationTab.Articles, label: '悦读科普', icon: BookOpen },
    { id: NavigationTab.Overview, label: '健康总览', icon: LayoutDashboard },
    { id: NavigationTab.AIAdvisor, label: '心灵顾问', icon: Compass },
    { id: NavigationTab.Tracker, label: '生活修行', icon: ListCheck },
    { id: NavigationTab.Insights, label: '深度分析', icon: BarChart3 },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-20 md:w-64 bg-white/90 backdrop-blur-2xl border-r border-stone-200 flex flex-col z-50 transition-all duration-300">
      <div className="p-8 flex items-center gap-3">
        <div className="bg-[#4A614D] p-2.5 rounded-2xl shadow-lg shadow-[#4A614D]/20">
          <Leaf className="text-white w-5 h-5" />
        </div>
        <span className="serif font-bold text-2xl text-[#1A1616] hidden md:block tracking-tight">VividLife</span>
      </div>

      <nav className="flex-1 mt-6 px-4 space-y-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 group ${
              activeTab === item.id
                ? 'bg-[#4A614D] text-white shadow-xl shadow-[#4A614D]/30'
                : 'text-stone-500 hover:text-[#4A614D] hover:bg-stone-50'
            }`}
          >
            <item.icon className={`w-5 h-5 shrink-0 transition-transform group-hover:scale-110 ${activeTab === item.id ? 'stroke-[2.5px]' : 'stroke-[2px]'}`} />
            <span className={`hidden md:block text-sm font-semibold tracking-wide ${activeTab === item.id ? 'opacity-100' : 'opacity-80'}`}>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-6">
        <div className="flex items-center gap-3 p-4 rounded-2xl bg-stone-50 border border-stone-200 shadow-sm">
          <div className="w-10 h-10 rounded-xl overflow-hidden ring-2 ring-white shadow-sm">
            <img src="https://picsum.photos/100/100?random=1" alt="Avatar" className="w-full h-full object-cover" />
          </div>
          <div className="hidden md:block overflow-hidden">
            <p className="text-sm font-bold text-stone-900 truncate">林间漫步者</p>
            <p className="text-[10px] text-[#4A614D] font-black uppercase tracking-widest mt-0.5">Level 12</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
