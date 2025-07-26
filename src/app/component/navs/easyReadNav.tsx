
import style from "./nav.module.css"
import ThemeSelector from "../ThemeSelector"
import Link from "next/link"

const EasyReadNav = () => {
    

    return (
        <nav className={style.nav}>
            <Link href="/" className={style.link}>
                Home
            </Link>
            <Link href="/Projects" className={style.link}>
                Projects
            </Link>
            <Link href="/Resume" className={style.link}>
                Resume
            </Link>
            <ThemeSelector></ThemeSelector>
        </nav>
    )
}

export default EasyReadNav