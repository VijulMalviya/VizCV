import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
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
