import SpecialLettering from "../lettering";
import ThemeSelector from "../ThemeSelector";
import style from "./nav.module.css"


const PersonaNav = () => {



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

export default PersonaNav