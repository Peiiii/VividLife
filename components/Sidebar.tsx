
import React from 'react';
import { LayoutDashboard, MessageSquare, ListCheck, BarChart3, HeartPulse } from 'lucide-react';
import { NavigationTab } from '../types';

interface SidebarProps {
  activeTab: NavigationTab;
  setActiveTab: (tab: NavigationTab) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: NavigationTab.Overview, label: '健康总览', icon: LayoutDashboard },
    { id: NavigationTab.AIAdvisor, label: '智能顾问', icon: MessageSquare },
    { id: NavigationTab.Tracker, label: '每日追踪', icon: ListCheck },
    { id: NavigationTab.Insights, label: '深度洞察', icon: BarChart3 },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-20 md:w-64 bg-white border-r border-slate-200 flex flex-col z-50 transition-all duration-300">
      <div className="p-6 flex items-center gap-3">
        <div className="bg-indigo-600 p-2 rounded-xl">
          <HeartPulse className="text-white w-6 h-6" />
        </div>
        <span className="font-bold text-xl text-slate-800 hidden md:block">VividLife</span>
      </div>

      <nav className="flex-1 mt-6 px-4 space-y-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center gap-4 p-3 rounded-xl transition-all ${
              activeTab === item.id
                ? 'bg-indigo-50 text-indigo-600 font-semibold'
                : 'text-slate-500 hover:bg-slate-50'
            }`}
          >
            <item.icon className="w-6 h-6 shrink-0" />
            <span className="hidden md:block">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-100">
        <div className="flex items-center gap-3 p-2 rounded-lg bg-slate-50">
          <img src="https://picsum.photos/40/40" alt="Avatar" className="w-8 h-8 rounded-full border border-slate-200" />
          <div className="hidden md:block overflow-hidden">
            <p className="text-sm font-medium text-slate-800 truncate">张小悦</p>
            <p className="text-xs text-slate-500 truncate">高级会员</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
