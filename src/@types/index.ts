import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
  isKeyDataExist?: boolean;
}
export interface HeaderProps {
  isKeyDataExist?: boolean;
}

export interface RootState {
  theme: {
    mode: "light" | "dark";
  };

}

export interface ThemeState {
  mode: "light" | "dark";
}

export interface FeedbackSectionProps {
  title: string;
  points: Array<string>;
}

export interface ImprovementSectionProps {
  title: string;
  points: Array<{ description: string }>;
  color: string;
  severity: "error" | "success";
}

export interface ATSScoreProps {
  ATSScore: number;
}

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface HighlightCardProps {
  feature: Feature;
}
