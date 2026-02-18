
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  link?: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
