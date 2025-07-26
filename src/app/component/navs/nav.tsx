'use client'

import { useTheme } from "../ThemeContext"
import { themeClassMap } from "../themeclassmap"
import { useEffect, useState } from "react"
import PersonaNav from "../persona/persona_nav"
import DarkNav from "./easyReadNav"
import EasyReadNav from "./easyReadNav"
import ThemeSelector from "../ThemeSelector"


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
      case "theme-dark": return <EasyReadNav></EasyReadNav>
      default: return <ThemeSelector></ThemeSelector>
    }

}

export default Nav