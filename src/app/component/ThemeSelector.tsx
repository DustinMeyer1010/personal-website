// components/ThemeSelector.tsx
'use client';
import { useTheme } from './ThemeContext';
import Styles from "./themeSelector.module.css"
import ThemeIconDark from "../../../public/ThemeIocn-Dark.png"
import ThemeIconLight from "../../../public/ThemeIconLight.png"
import Image from "next/image";
import { useEffect, useState } from 'react';
import { themeClassMap } from './themeclassmap';

export default function ThemeSelector() {
  const { setTheme } = useTheme();
  const [ showThemes, setShowThemes ] = useState(false)

    const { theme } = useTheme();


    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) return null; // Avoid SSR mismatch

    const className = themeClassMap[theme] ?? 'theme-persona';


  const handleShowThemes = () => {
      setShowThemes(!showThemes)
  } 





  return (
    <div className={Styles.theme_selection}>
      <Image onClick={handleShowThemes} className={Styles.theme_image} src={className == "theme-dark" ? ThemeIconLight : ThemeIconDark } alt="" />
      <button title='Persona' onClick={() => setTheme("persona")} className={`${Styles.theme_option} ${Styles.persona} ${showThemes ? Styles.visible : ""}`}></button>
      <button title='dark' onClick={() => setTheme("dark")} className={`${Styles.theme_option} ${Styles.dark} ${showThemes ? Styles.visible1 : ""}`}></button>
      <button title='light' onClick={() => setTheme("light")} className={`${Styles.theme_option} ${Styles.light} ${showThemes ? Styles.visible2 : ""}`}></button>
    </div>
  );
}
