// components/ThemeWrapper.tsx
'use client';

import { useParams, usePathname } from 'next/navigation';
import { useTheme } from './ThemeContext';
import { themeClassMap } from './themeclassmap';
import { useEffect } from 'react';



export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  const className = themeClassMap[theme] ?? 'theme-persona';

  const pathname = usePathname()

  useEffect(() => {
    document.body.className = className; 
    if (pathname === "/Projects") document.body.classList.add("bg-Projects");
  }, [pathname]);


  return <div className={`${className}`}>{children}</div>;
}
