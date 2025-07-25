
import style from "./nav.module.css"
import ThemeSelector from "../ThemeSelector"

const EasyReadNav = () => {
    

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

export default EasyReadNav