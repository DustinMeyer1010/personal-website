'use client'

import { useTheme } from "../ThemeContext"
import { themeClassMap } from "../themeclassmap"
import { useEffect, useState } from "react"
import PersonaNav from "./personaNav"
import DarkNav from "./easyReadNav"
import EasyReadNav from "./easyReadNav"


const Nav = () => {

    const { theme } = useTheme();


    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) return null; // Avoid SSR mismatch

    const className = themeClassMap[theme] ?? 'theme-persona';

    switch (className) {
      case "theme-persona": return <PersonaNav></PersonaNav>
      default: return <EasyReadNav></EasyReadNav>
    }

}

export default Nav