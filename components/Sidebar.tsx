
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
    <aside className="fixed left-0 top-0 h-screen w-20 md:w-64 bg-white/80 backdrop-blur-xl border-r border-stone-100 flex flex-col z-50 transition-all duration-300">
      <div className="p-8 flex items-center gap-3">
        <div className="bg-[#5F7161] p-2 rounded-full shadow-inner">
          <Leaf className="text-white w-5 h-5" />
        </div>
        <span className="serif font-bold text-xl text-[#3E3232] hidden md:block tracking-wider">VividLife</span>
      </div>

      <nav className="flex-1 mt-4 px-4 space-y-3">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 ${
              activeTab === item.id
                ? 'bg-[#5F7161] text-white shadow-lg shadow-[#5F7161]/20'
                : 'text-stone-400 hover:text-[#5F7161] hover:bg-stone-50'
            }`}
          >
            <item.icon className={`w-5 h-5 shrink-0 ${activeTab === item.id ? 'stroke-[2.5px]' : 'stroke-[1.5px]'}`} />
            <span className="hidden md:block text-sm font-medium tracking-wide">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-6">
        <div className="flex items-center gap-3 p-3 rounded-2xl bg-stone-50/50 border border-stone-100">
          <div className="w-8 h-8 rounded-full overflow-hidden bg-stone-200">
            <img src="https://picsum.photos/80/80?random=1" alt="Avatar" className="w-full h-full object-cover opacity-80" />
          </div>
          <div className="hidden md:block overflow-hidden">
            <p className="text-xs font-bold text-stone-700 truncate">林间漫步者</p>
            <p className="text-[10px] text-stone-400 uppercase tracking-tighter">探索自然律动</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
