import style from "./nav.module.css"
import SpecialLettering from "./lettering"


const Nav = () => {

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
            <a href="/" className={style.link}>
                <SpecialLettering word="Resume"/>
                <div className={style.bar}></div>
            </a>
        </nav>
    )
}

export default Nav