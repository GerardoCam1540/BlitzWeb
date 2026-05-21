export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  iconName: string;
  color: string;
  features: string[];
  duration: string;
  basePrice: number;
}

export interface Technology {
  name: string;
  icon: string;
  category: string;
  color: string;
}

export interface ProjectConfig {
  services: string[];
  features: string[];
  urgency: 'normal' | 'fast' | 'express';
  scale: number; // 1 to 5 index for project size
}
