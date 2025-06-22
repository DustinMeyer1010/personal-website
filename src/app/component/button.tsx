import style from "./button.module.css"

const Button = () => {
    return (
        <div className={style.container}>
            <button className={style.button}>Press Me</button>
            <div className={style.background}></div>
        </div>
    )
}


export default Button