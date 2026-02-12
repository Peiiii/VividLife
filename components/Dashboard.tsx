
import React from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area 
} from 'recharts';
import { TrendingDown, Activity, Moon, Utensils, HeartPulse, Sparkles } from 'lucide-react';

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
  <div className="bg-white p-8 rounded-[2rem] border border-stone-50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
    <div className="flex justify-between items-start mb-6">
      <div className={`p-4 rounded-2xl ${color} shadow-lg shadow-black/5`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div className="flex flex-col items-end">
        <span className="text-[#5F7161] text-xs font-black tracking-tighter flex items-center gap-1">
          {change} <TrendingDown className="w-3 h-3" />
        </span>
        <span className="text-stone-300 text-[10px] font-bold uppercase tracking-tighter mt-1">周环比</span>
      </div>
    </div>
    <h3 className="text-stone-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-2">{title}</h3>
    <div className="flex items-baseline gap-1">
      <span className="serif text-4xl font-bold text-stone-800">{value}</span>
      <span className="text-stone-400 text-xs font-medium">{unit}</span>
    </div>
  </div>
);

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <header className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-stone-100 pb-10">
        <div className="space-y-2">
          <h1 className="serif text-4xl font-bold text-stone-900">健康节律</h1>
          <p className="text-stone-400 font-light">聆听你身体的细微跳动。</p>
        </div>
        <div className="flex gap-4">
           <div className="px-6 py-3 bg-white rounded-full border border-stone-100 text-xs font-bold text-stone-600 shadow-sm">
             上次同步：2024.06.01 10:20
           </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <StatCard title="估算生物年龄" value="33.8" unit="岁" change="-0.4" icon={HeartPulse} color="bg-[#5F7161]" />
        <StatCard title="平均深度睡眠" value="88" unit="%" change="+12%" icon={Moon} color="bg-[#6D8299]" />
        <StatCard title="每日平均活力" value="9,420" unit="步" change="+8%" icon={Activity} color="bg-[#859669]" />
        <StatCard title="细胞自噬评分" value="优" unit="" change="稳定" icon={Utensils} color="bg-stone-800" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 bg-white p-10 rounded-[2.5rem] border border-stone-50 shadow-sm">
          <div className="flex justify-between items-center mb-10">
             <h3 className="serif text-2xl font-bold text-stone-800">生物年龄演变</h3>
             <div className="flex gap-4">
                <span className="flex items-center gap-2 text-[10px] font-bold text-stone-400 tracking-widest uppercase">
                   <span className="w-3 h-3 rounded-full bg-[#5F7161]/20"></span> 实测数据
                </span>
             </div>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={mockData}>
                <defs>
                  <linearGradient id="colorAge" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#5F7161" stopOpacity={0.15}/>
                    <stop offset="95%" stopColor="#5F7161" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="6 6" vertical={false} stroke="#F1F1F1" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#A1A1A1', fontSize: 10, fontWeight: 700}} />
                <YAxis domain={['dataMin - 0.2', 'dataMax + 0.2']} hide />
                <Tooltip 
                  cursor={{ stroke: '#5F7161', strokeWidth: 1 }}
                  contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)', padding: '15px' }}
                />
                <Area name="生物年龄" type="monotone" dataKey="bioAge" stroke="#5F7161" strokeWidth={4} fillOpacity={1} fill="url(#colorAge)" dot={{r: 6, fill: '#5F7161', strokeWidth: 3, stroke: '#fff'}} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-[#5F7161] p-10 rounded-[2.5rem] text-white shadow-2xl shadow-[#5F7161]/30 relative overflow-hidden">
          <Sparkles className="absolute -top-6 -right-6 w-32 h-32 text-white/10 rotate-12" />
          <h3 className="serif text-2xl font-bold mb-6 relative z-10">AI 健康洞察</h3>
          <div className="space-y-6 relative z-10">
             <div className="p-5 bg-white/10 rounded-2xl backdrop-blur-md border border-white/10">
                <p className="text-xs font-bold uppercase tracking-widest mb-2 text-white/60">本周建议</p>
                <p className="text-sm leading-relaxed">您的皮质醇水平在周三达到峰值，建议在周四增加 15 分钟的呼吸练习以平衡压力。</p>
             </div>
             <div className="p-5 bg-white/10 rounded-2xl backdrop-blur-md border border-white/10">
                <p className="text-xs font-bold uppercase tracking-widest mb-2 text-white/60">深度睡眠</p>
                <p className="text-sm leading-relaxed">保持 18°C 的室温让您的深度睡眠比例提升了 22%。继续保持这项环境优化。</p>
             </div>
             <button className="w-full py-4 bg-white text-[#5F7161] rounded-2xl font-bold text-xs uppercase tracking-[0.2em] shadow-xl hover:bg-stone-50 transition-all">
                查看完整报告
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
