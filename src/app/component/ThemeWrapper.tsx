// components/ThemeWrapper.tsx
'use client';

import { useTheme } from './ThemeContext';
import { themeClassMap } from './themeclassmap';



export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  const className = themeClassMap[theme] ?? 'theme-persona';

  return <div className={`${className}`}>{children}</div>;
}
