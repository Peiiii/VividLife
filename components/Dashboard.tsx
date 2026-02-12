
import React from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area 
} from 'recharts';
import { TrendingDown, Activity, Moon, Utensils, HeartPulse, Sparkles, ArrowUpRight } from 'lucide-react';

const mockData = [
  { name: '周一', bioAge: 34.2, sleep: 7.5, steps: 8000 },
  { name: '周二', bioAge: 34.1, sleep: 8.2, steps: 12000 },
  { name: '周三', bioAge: 34.1, sleep: 6.8, steps: 6000 },
  { name: '周四', bioAge: 34.0, sleep: 7.9, steps: 15000 },
  { name: '周五', bioAge: 33.9, sleep: 8.5, steps: 11000 },
  { name: '周六', bioAge: 33.8, sleep: 9.0, steps: 9000 },
  { name: '周日', bioAge: 33.8, sleep: 8.2, steps: 7500 },
];

const StatCard = ({ title, value, unit, change, icon: Icon, color, vividColor }: any) => (
  <div className="bg-white p-10 rounded-[3rem] border border-stone-100 shadow-xl shadow-stone-200/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
    <div className="flex justify-between items-start mb-10">
      <div className={`p-5 rounded-[1.5rem] ${color} shadow-lg shadow-black/5 group-hover:scale-110 transition-transform`}>
        <Icon className="w-8 h-8 text-white" />
      </div>
      <div className="flex flex-col items-end">
        <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full bg-opacity-10 ${vividColor}`}>
          <span className="text-xs font-black tracking-tight">{change}</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
        <span className="text-stone-400 text-[10px] font-black uppercase tracking-widest mt-2">VS Last Week</span>
      </div>
    </div>
    <h3 className="text-stone-500 text-[11px] font-black uppercase tracking-[0.25em] mb-3">{title}</h3>
    <div className="flex items-baseline gap-2">
      <span className="serif text-5xl font-bold text-stone-900 tracking-tight">{value}</span>
      <span className="text-stone-500 text-sm font-bold">{unit}</span>
    </div>
  </div>
);

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-16 animate-in fade-in duration-1000">
      <header className="flex flex-col md:flex-row justify-between items-end gap-10 border-b border-stone-200 pb-12">
        <div className="space-y-4">
          <h1 className="serif text-5xl font-bold text-stone-900 tracking-tight">健康节律</h1>
          <p className="text-stone-600 text-lg font-medium">身体是一场精密的律动，聆听它的每一次回响。</p>
        </div>
        <div className="flex gap-4">
           <div className="px-8 py-3.5 bg-white rounded-2xl border border-stone-200 text-[11px] font-black text-stone-900 shadow-lg tracking-widest uppercase">
             上次同步 · 10:20 AM
           </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <StatCard title="估算生物年龄" value="33.8" unit="岁" change="-0.4" icon={HeartPulse} color="bg-[#4A614D]" vividColor="text-[#4A614D] bg-[#4A614D]" />
        <StatCard title="平均深度睡眠" value="88" unit="%" change="+12%" icon={Moon} color="bg-[#506D84]" vividColor="text-[#506D84] bg-[#506D84]" />
        <StatCard title="每日平均活力" value="9,420" unit="步" change="+8%" icon={Activity} color="bg-[#859669]" vividColor="text-[#859669] bg-[#859669]" />
        <StatCard title="细胞自噬评分" value="优" unit="" change="稳定" icon={Utensils} color="bg-[#2D3748]" vividColor="text-[#2D3748] bg-[#2D3748]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 bg-white p-12 rounded-[3.5rem] border border-stone-100 shadow-2xl shadow-stone-200/30">
          <div className="flex justify-between items-center mb-12">
             <h3 className="serif text-3xl font-bold text-stone-900 tracking-tight">生物年龄趋势</h3>
             <div className="flex gap-6">
                <span className="flex items-center gap-3 text-[11px] font-black text-stone-900 tracking-widest uppercase">
                   <span className="w-3.5 h-3.5 rounded-full bg-[#4A614D] shadow-lg shadow-[#4A614D]/30"></span> 实测轨迹
                </span>
             </div>
          </div>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={mockData}>
                <defs>
                  <linearGradient id="colorAge" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4A614D" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#4A614D" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="8 8" vertical={false} stroke="#F1F5F9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748B', fontSize: 12, fontWeight: 800}} dy={20} />
                <YAxis domain={['dataMin - 0.2', 'dataMax + 0.2']} hide />
                <Tooltip 
                  cursor={{ stroke: '#4A614D', strokeWidth: 2, strokeDasharray: '4 4' }}
                  contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)', padding: '20px', backgroundColor: '#fff' }}
                />
                <Area name="生物年龄" type="monotone" dataKey="bioAge" stroke="#4A614D" strokeWidth={5} fillOpacity={1} fill="url(#colorAge)" dot={{r: 8, fill: '#4A614D', strokeWidth: 4, stroke: '#fff', shadow: '0 4px 6px rgba(0,0,0,0.1)'}} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-[#4A614D] p-12 rounded-[3.5rem] text-white shadow-[0_35px_60px_-15px_rgba(74,97,77,0.4)] relative overflow-hidden flex flex-col justify-between">
          <Sparkles className="absolute -top-10 -right-10 w-48 h-48 text-white/5 rotate-12" />
          
          <div className="relative z-10">
            <h3 className="serif text-3xl font-bold mb-10 tracking-tight leading-tight">AI 健康洞察 · 智者低语</h3>
            <div className="space-y-8">
               <div className="p-7 bg-white/10 rounded-[2rem] backdrop-blur-xl border border-white/10 group hover:bg-white/15 transition-all">
                  <p className="text-[10px] font-black uppercase tracking-widest mb-3 text-white/60">压力平衡建议</p>
                  <p className="text-base leading-relaxed font-medium">您的 HRV 指标在周三出现波动，建议在明晨增加 10 分钟的 4-7-8 呼吸法。</p>
               </div>
               <div className="p-7 bg-white/10 rounded-[2rem] backdrop-blur-xl border border-white/10 group hover:bg-white/15 transition-all">
                  <p className="text-[10px] font-black uppercase tracking-widest mb-3 text-white/60">代谢恢复</p>
                  <p className="text-base leading-relaxed font-medium">昨晚 10 PM 后的零食摄入影响了基础体温。尝试将最后一次进食提前 1 小时。</p>
               </div>
            </div>
          </div>

          <button className="relative z-10 w-full py-5 bg-white text-[#4A614D] rounded-[1.5rem] font-black text-sm uppercase tracking-[0.25em] shadow-2xl hover:bg-stone-50 transition-all mt-10">
             查看完整分析报告
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
