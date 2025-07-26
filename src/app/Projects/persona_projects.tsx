'use client'

import Styles from "./page.module.css"
import RotationLetters from "./RotationLetters";

const PersonaProjects = () => {
    return (

         <div className={Styles.page}>
      <div className={Styles.character}>
        <a href="https://github.com/DustinMeyer1010/URMC-HUB" target="_blank">
            <div className={`${Styles.project_container} ${Styles.urmc_hub}`}>
                <div className={Styles.circle}>
                <div  className={Styles.innerCircle}>
                    
                </div>
            </div>
            <div className={Styles.project}></div>
                <div className={Styles.text}>
                
                <RotationLetters letter="URMC-HUB"></RotationLetters>
                </div>
                <div className={Styles.text1}>GITHUB</div>
            </div>
        </a>
        <a href="https://github.com/DustinMeyer1010/personal-website" target="_blank">
            <div className={`${Styles.project_container} ${Styles.personal_website}`}>
            <div className={Styles.circle}>
                <div  className={Styles.innerCircle}>

                </div>
            </div>
            <div className={Styles.project}></div>
                <div className={Styles.text}>
                
                <RotationLetters letter="WEBSITE"></RotationLetters>
                </div>
                <div className={Styles.text1}>GITHUB</div>
            </div>
        </a>
        <a href="https://github.com/DustinMeyer1010/pokedex" target="_blank"> 
            <div className={`${Styles.project_container} ${Styles.pokedex} ${Styles.mirror}`}>
            <div className={Styles.circle}>
                <div  className={Styles.innerCircle}>

                </div>
            </div>
            <div className={Styles.project}></div>
                <div className={`${Styles.text} ${Styles.mirror}`} >
                
                <RotationLetters letter="POKEDEX"></RotationLetters>
                </div>
                <div className={`${Styles.text1} ${Styles.mirror}`}>GITHUB</div>
            </div>
        </a>
        
      </div>
      
    </div>
    )
}

export default PersonaProjects