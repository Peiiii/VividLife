
import React, { useState } from 'react';
import { CheckCircle2, Circle, Flame, Target, Info, Sparkles } from 'lucide-react';
import { Habit } from '../types';

const INITIAL_HABITS: Habit[] = [
  { id: '1', name: 'Zone 2 呼吸训练', category: '运动', completed: true, impact: 9 },
  { id: '2', name: '大地食疗 (Clean Eating)', category: '营养', completed: false, impact: 8 },
  { id: '3', name: '晨间阳光摄入', category: '运动', completed: false, impact: 6 },
  { id: '4', name: '月光下的深度修复', category: '睡眠', completed: true, impact: 10 },
  { id: '5', name: '晚间数字排毒', category: '正念', completed: false, impact: 7 },
  { id: '6', name: '草本微量元素', category: '营养', completed: false, impact: 7 },
];

const HabitTracker: React.FC = () => {
  const [habits, setHabits] = useState(INITIAL_HABITS);

  const toggleHabit = (id: string) => {
    setHabits(habits.map(h => h.id === id ? { ...h, completed: !h.completed } : h));
  };

  const progress = Math.round((habits.filter(h => h.completed).length / habits.length) * 100);

  return (
    <div className="space-y-12 animate-in slide-in-from-right-12 duration-1000">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
          <div className="flex justify-between items-end">
             <div className="space-y-2">
                <h2 className="serif text-4xl font-bold text-stone-900">生活修行</h2>
                <p className="text-stone-400 font-light">每一个微小的习惯，都是对未来健康的投票。</p>
             </div>
             <div className="px-6 py-2 bg-[#F4F1DE] text-[#5F7161] rounded-full text-xs font-bold tracking-widest uppercase flex items-center gap-2">
                <Flame className="w-4 h-4" /> 12 日连贯
             </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {habits.map(habit => (
              <div 
                key={habit.id}
                onClick={() => toggleHabit(habit.id)}
                className={`flex items-center justify-between p-6 rounded-3xl border transition-all duration-500 cursor-pointer ${
                  habit.completed 
                  ? 'bg-[#5F7161]/5 border-[#5F7161]/20' 
                  : 'bg-white border-stone-100 hover:border-[#5F7161]/30 hover:shadow-lg shadow-stone-100'
                }`}
              >
                <div className="flex items-center gap-6">
                  {habit.completed ? (
                    <div className="bg-[#5F7161] p-1 rounded-full"><CheckCircle2 className="w-6 h-6 text-white" /></div>
                  ) : (
                    <Circle className="w-7 h-7 text-stone-200" />
                  )}
                  <div>
                    <h4 className={`serif text-lg font-bold ${habit.completed ? 'text-[#5F7161]' : 'text-stone-700'}`}>
                      {habit.name}
                    </h4>
                    <span className="text-[10px] text-stone-300 uppercase tracking-[0.2em] font-bold">{habit.category}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-bold text-stone-300 tracking-tighter uppercase">影响指数</span>
                  <div className="w-12 h-12 rounded-full border-2 border-stone-100 flex items-center justify-center text-stone-500 font-black text-xs">
                     {habit.impact}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-10">
          <div className="bg-[#FDFBF7] p-10 rounded-[2.5rem] border border-stone-100 shadow-sm text-center relative overflow-hidden">
            <div className="relative z-10 space-y-6">
               <h3 className="serif text-2xl font-bold text-stone-800">今日修行进度</h3>
               <div className="relative h-48 w-48 mx-auto flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="96" cy="96" r="88"
                      fill="transparent"
                      stroke="#F4F1DE"
                      strokeWidth="12"
                    />
                    <circle
                      cx="96" cy="96" r="88"
                      fill="transparent"
                      stroke="#5F7161"
                      strokeWidth="12"
                      strokeDasharray={553}
                      strokeDashoffset={553 - (553 * progress) / 100}
                      strokeLinecap="round"
                      className="transition-all duration-[1.5s] ease-out"
                    />
                  </svg>
                  <div className="absolute flex flex-col items-center">
                    <span className="serif text-5xl font-bold text-stone-800">{progress}%</span>
                    <span className="text-[10px] uppercase text-stone-400 font-bold tracking-widest mt-1">达成</span>
                  </div>
               </div>
               <p className="text-stone-400 text-sm italic font-light">“坚持就是对身体最温柔的承诺。”</p>
            </div>
          </div>

          <div className="bg-[#5F7161] p-10 rounded-[2.5rem] text-white shadow-xl shadow-[#5F7161]/20">
             <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-6 h-6 text-white/50" />
                <h4 className="serif text-xl font-bold">灵感时刻</h4>
             </div>
             <p className="text-sm leading-relaxed text-white/80 mb-6 italic">
               “如果你在森林里呆了足够长的时间，你就会开始听到那些关于生命的、细碎的真理。”
             </p>
             <button className="w-full py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all">
               阅读更多科学笔记
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HabitTracker;
