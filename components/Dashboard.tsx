
import React from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area 
} from 'recharts';
import { TrendingDown, Activity, Moon, Utensils, HeartPulse } from 'lucide-react';

const mockData = [
  { name: '周一', bioAge: 34.2, sleep: 7.5, steps: 8000 },
  { name: '周二', bioAge: 34.1, sleep: 8.2, steps: 12000 },
  { name: '周三', bioAge: 34.1, sleep: 6.8, steps: 6000 },
  { name: '周四', bioAge: 34.0, sleep: 7.9, steps: 15000 },
  { name: '周五', bioAge: 33.9, sleep: 8.5, steps: 11000 },
  { name: '周六', bioAge: 33.8, sleep: 9.0, steps: 9000 },
  { name: '周日', bioAge: 33.8, sleep: 8.2, steps: 7500 },
];

const StatCard = ({ title, value, unit, change, icon: Icon, color }: any) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 rounded-xl ${color}`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <span className="text-green-500 text-sm font-medium flex items-center gap-1">
        <TrendingDown className="w-4 h-4" /> {change}
      </span>
    </div>
    <h3 className="text-slate-500 text-sm font-medium">{title}</h3>
    <div className="flex items-baseline gap-1 mt-1">
      <span className="text-2xl font-bold text-slate-800">{value}</span>
      <span className="text-slate-400 text-sm">{unit}</span>
    </div>
  </div>
);

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header>
        <h1 className="text-3xl font-bold text-slate-800">健康总览</h1>
        <p className="text-slate-500 mt-1">生物识别数据更新于 4 小时前。</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="生物年龄" value="33.8" unit="岁" change="-0.4" icon={HeartPulse} color="bg-rose-500" />
        <StatCard title="睡眠质量" value="88" unit="%" change="+12%" icon={Moon} color="bg-indigo-500" />
        <StatCard title="每日步数" value="9,420" unit="" change="+8%" icon={Activity} color="bg-blue-500" />
        <StatCard title="自噬状态" value="中等" unit="" change="已优化" icon={Utensils} color="bg-emerald-500" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
          <h3 className="text-xl font-bold text-slate-800 mb-6">生物年龄趋势</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={mockData}>
                <defs>
                  <linearGradient id="colorAge" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#f43f5e" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <YAxis domain={['dataMin - 0.5', 'dataMax + 0.5']} hide />
                <Tooltip 
                  labelFormatter={(label) => `${label}`}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                />
                <Area name="生物年龄" type="monotone" dataKey="bioAge" stroke="#f43f5e" strokeWidth={3} fillOpacity={1} fill="url(#colorAge)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
          <h3 className="text-xl font-bold text-slate-800 mb-6">活动水平</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <YAxis hide />
                <Tooltip labelFormatter={(label) => `${label}`} />
                <Line name="步数" type="monotone" dataKey="steps" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4, fill: '#3b82f6' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
