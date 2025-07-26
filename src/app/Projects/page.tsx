'use client'

import { useEffect, useState } from "react";
import { useTheme } from "../component/ThemeContext";
import { themeClassMap } from "../component/themeclassmap";
import PersonaProjects from "./persona_projects";


export default function Projects() {
    const { theme } = useTheme();


    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) return null; // Avoid SSR mismatch

    const className = themeClassMap[theme] ?? 'theme-persona';

    switch (className) {
      case "theme-persona": return <PersonaProjects></PersonaProjects>
      case "theme-dark": return <div></div>
      default: return <div></div>
    }
}