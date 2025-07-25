'use client'

import style from "./nav.module.css"
import SpecialLettering from "./lettering"
import ThemeSelector from "./ThemeSelector"
import { useTheme } from "./ThemeContext"
import { themeClassMap } from "./themeclassmap"
import { useEffect, useState } from "react"


const Nav = () => {
    const { theme } = useTheme();


    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) return null; // Avoid SSR mismatch

    const className = themeClassMap[theme] ?? 'theme-persona';

    if (className == "theme-persona") {
        return (
            <nav className={style.nav}>

                <a href="/" className={style.link}>
                    <SpecialLettering word="Home"/>
                    <div className={style.bar}></div>
                </a>
                <a href="/Projects" className={style.link}>
                    <SpecialLettering word="Projects"/>
                    <div className={style.bar}></div>
                </a>
                <a href="/Resume" className={style.link}>
                    <SpecialLettering word="Resume"/>
                    <div className={style.bar}></div>
                </a>
                <ThemeSelector></ThemeSelector>
            </nav>
        )
    }

    return (
        <nav className={style.nav}>
            <a href="/" className={style.link}>
                Home
            </a>
            <a href="/Projects" className={style.link}>
                Projects
            </a>
            <a href="/Resume" className={style.link}>
                Resume
            </a>
            <ThemeSelector></ThemeSelector>
        </nav>
    )
}

export default Nav