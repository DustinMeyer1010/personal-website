import Link from "next/link";
import SpecialLettering from "../lettering";
import ThemeSelector from "../ThemeSelector";
import style from "./nav.module.css"


const PersonaNav = () => {



    return (
        <nav className={style.nav}>
            <Link href="/" className={style.link}>
                <SpecialLettering word="Home"/>
                <div className={style.bar}></div>
            </Link>
            <Link href="/Projects" className={style.link}>
                <SpecialLettering word="Projects"/>
                <div className={style.bar}></div>
            </Link>
            <Link href="/Resume" className={style.link}>
                <SpecialLettering word="Resume"/>
                <div className={style.bar}></div>
            </Link>
            <ThemeSelector></ThemeSelector>
        </nav>
    )



}

export default PersonaNav