// components/ThemeSelector.tsx
'use client';
import { Theme, useTheme } from './ThemeContext';
import Styles from "./themeSelector.module.css"
import themeIcon from "../../../public/icons8-theme-50.png"
import Image from "next/image";
import { useEffect, useState } from 'react';

const themes = ['light', 'dark', 'persona'] as const;

export default function ThemeSelector() {
  const { setTheme } = useTheme();
  const [ showThemes, setShowThemes ] = useState(false)

  const handleShowThemes = () => {
      setShowThemes(!showThemes)
  } 



  return (
    <div className={Styles.theme_selection}>
      <Image onClick={handleShowThemes} className={Styles.theme_image} src={themeIcon} alt="" />
      <button title='Persona' onClick={() => setTheme("persona")} className={`${Styles.theme_option} ${Styles.persona} ${showThemes ? Styles.visible : ""}`}></button>
      <button title='dark' onClick={() => setTheme("dark")} className={`${Styles.theme_option} ${Styles.dark} ${showThemes ? Styles.visible1 : ""}`}></button>
      <button title='light' onClick={() => setTheme("light")} className={`${Styles.theme_option} ${Styles.light} ${showThemes ? Styles.visible2 : ""}`}></button>
    </div>
  );
}
