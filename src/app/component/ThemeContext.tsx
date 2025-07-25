'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type Theme = 'persona' | 'light' | 'dark'

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)


export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<Theme>('persona')

    useEffect(() => {
        const stored = localStorage.getItem('theme') as Theme;
        if (stored) setTheme(stored);
        document.documentElement.setAttribute('data-theme', stored || 'persona')
    }, [])

    useEffect(() => {
        document.body.classList.remove('theme-dark', 'theme-light', 'theme-persona');
        document.body.classList.add(`theme-${theme}`);
        localStorage.setItem('theme', theme)
    }, [theme])


    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};


export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used inside ThemeProvider');
  return context;
};