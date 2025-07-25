// components/ThemeSelector.tsx
'use client';
import { useTheme } from './ThemeContext';

const themes = ['light', 'dark', 'persona'] as const;

export default function ThemeSelector() {
  const { theme, setTheme } = useTheme();

  return (
    <select value={theme} onChange={(e) => setTheme(e.target.value as typeof theme)}>
      {themes.map((t) => (
        <option key={t} value={t}>
          {t}
        </option>
      ))}
    </select>
  );
}