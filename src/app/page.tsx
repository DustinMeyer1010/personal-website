'use client'
import { useEffect, useState } from "react";
import Persona from "./personaHome";
import { useTheme } from "./component/ThemeContext";
import { themeClassMap } from "./component/themeclassmap";

export default function Home() {
  const { theme } = useTheme();
const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) return null;

    const className = themeClassMap[theme] ?? 'theme-persona';

    switch (className) {
      case "theme-persona": return <Persona></Persona>
      case "theme-dark": return <div>Dark Theme</div>
      case "theme-light": return <div>Light Theme</div>
      default: return <div>Dark Theme</div>
    }
}
