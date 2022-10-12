import React from 'react';
import Cookies from 'js-cookie';

interface ThemeContextType {
  theme: string;
  toggleTheme?: () => void;
}

export const defaultContext: ThemeContextType = {
  theme: Cookies.get('theme') || 'dark',
};

export const ThemeContext =
  React.createContext<ThemeContextType>(defaultContext);
