
export interface Habit {
  id: string;
  name: string;
  category: '营养' | '运动' | '睡眠' | '正念' | '社交';
  completed: boolean;
  impact: number; // 1-10 对长寿的影响
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface HealthMetric {
  date: string;
  biologicalAge: number;
  chronologicalAge: number;
  sleepScore: number;
  activityMinutes: number;
}

export enum NavigationTab {
  Overview = 'overview',
  AIAdvisor = 'advisor',
  Tracker = 'tracker',
  Insights = 'insights'
}
