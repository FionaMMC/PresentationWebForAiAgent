import { ReactNode } from "react";

export interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  delay?: number;
}

export interface StepProps {
  number: string;
  title: string;
  description: string;
  date?: string;
  details?: string[];
  isLast?: boolean;
}
