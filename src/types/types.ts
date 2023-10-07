import { ReactNode } from "react";

type ColorMode = 'light' | 'dark';

export type ColorModeContextType = {
  colorMode: ColorMode;
  toggleColorMode: () => void;
}

export type ColorModeProviderProps = {
  children: ReactNode;
}

export type ColorTheme = {
  background: string;
  text: string;
  accent: string;
}