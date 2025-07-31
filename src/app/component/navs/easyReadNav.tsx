
import style from "./nav.module.css"
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
        </nav>
    )
}

export default EasyReadNav