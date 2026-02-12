
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

export interface Article {
  id: string;
  title: string;
  summary: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
}

export enum NavigationTab {
  Overview = 'overview',
  AIAdvisor = 'advisor',
  Tracker = 'tracker',
  Articles = 'articles',
  Insights = 'insights'
}
