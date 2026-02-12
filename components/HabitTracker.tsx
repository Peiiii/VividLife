
import React, { useState } from 'react';
import { CheckCircle2, Circle, Flame, Target, Info } from 'lucide-react';
import { Habit } from '../types';

const INITIAL_HABITS: Habit[] = [
  { id: '1', name: '30 分钟 Zone 2 训练', category: '运动', completed: true, impact: 9 },
  { id: '2', name: '间歇性禁食 (16:8)', category: '营养', completed: false, impact: 8 },
  { id: '3', name: '冷暴露 (3 分钟冷水浴)', category: '运动', completed: false, impact: 6 },
  { id: '4', name: '7 小时以上深度睡眠', category: '睡眠', completed: true, impact: 10 },
  { id: '5', name: '15 分钟正念冥想', category: '正念', completed: false, impact: 7 },
  { id: '6', name: '营养补剂摄入 (NMN/白藜芦醇)', category: '营养', completed: false, impact: 7 },
];

const HabitTracker: React.FC = () => {
  const [habits, setHabits] = useState(INITIAL_HABITS);

  const toggleHabit = (id: string) => {
    setHabits(habits.map(h => h.id === id ? { ...h, completed: !h.completed } : h));
  };

  const progress = Math.round((habits.filter(h => h.completed).length / habits.length) * 100);

  return (
    <div className="space-y-8 animate-in slide-in-from-right duration-500">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-800">每日长寿方案</h2>
              <p className="text-slate-500">追踪那些能延长您健康年限的习惯。</p>
            </div>
            <div className="bg-orange-50 text-orange-600 px-4 py-2 rounded-full flex items-center gap-2 font-bold border border-orange-100">
              <Flame className="w-5 h-5" /> 12 天连击
            </div>
          </div>

          <div className="space-y-4">
            {habits.map(habit => (
              <div 
                key={habit.id}
                onClick={() => toggleHabit(habit.id)}
                className={`flex items-center justify-between p-4 rounded-2xl border transition-all cursor-pointer ${
                  habit.completed 
                  ? 'bg-indigo-50 border-indigo-200' 
                  : 'bg-white border-slate-100 hover:border-indigo-200'
                }`}
              >
                <div className="flex items-center gap-4">
                  {habit.completed ? (
                    <CheckCircle2 className="w-6 h-6 text-indigo-600" />
                  ) : (
                    <Circle className="w-6 h-6 text-slate-300" />
                  )}
                  <div>
                    <h4 className={`font-semibold ${habit.completed ? 'text-indigo-900' : 'text-slate-700'}`}>
                      {habit.name}
                    </h4>
                    <span className="text-xs text-slate-400 uppercase tracking-wider font-bold">{habit.category}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1 bg-white px-3 py-1 rounded-full border border-slate-100 text-xs font-bold text-slate-600">
                    影响指数: <span className="text-indigo-600">{habit.impact}/10</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-indigo-600 p-8 rounded-3xl text-white shadow-lg shadow-indigo-200">
            <h3 className="text-xl font-bold mb-2">今日进度</h3>
            <p className="text-indigo-100 text-sm mb-6">您的表现优于同年龄段 85% 的用户。</p>
            
            <div className="relative h-40 w-40 mx-auto">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="80" cy="80" r="70"
                  fill="transparent"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="12"
                />
                <circle
                  cx="80" cy="80" r="70"
                  fill="transparent"
                  stroke="white"
                  strokeWidth="12"
                  strokeDasharray={440}
                  strokeDashoffset={440 - (440 * progress) / 100}
                  strokeLinecap="round"
                  className="transition-all duration-1000 ease-out"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-bold">{progress}%</span>
                <span className="text-xs uppercase opacity-80">目标完成</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            <div className="flex items-center gap-2 mb-4 text-slate-800 font-bold">
              <Info className="w-5 h-5 text-indigo-500" />
              您知道吗？
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              每周坚持 150 分钟 Zone 2 有氧运动（达到最大心率的 60-70%）是降低全因死亡率最显著的习惯。
            </p>
            <button className="mt-4 text-indigo-600 text-sm font-bold hover:underline">了解背后的科学 →</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HabitTracker;
