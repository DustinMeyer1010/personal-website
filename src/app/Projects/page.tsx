'use client'

import Styles from "./page.module.css"
import RotationLetters from "./RotationLetters";


export default function Projects() {


  return (
    <div className={Styles.page}>
      Project Page
      <div className={Styles.character}>
        <div className={Styles.test}></div>
        <div className={Styles.project_container}>
          <div className={Styles.circle}></div>
          <div className={Styles.project}></div>
            <div className={Styles.text}>
              
              <RotationLetters letter="URMC-HUB"></RotationLetters>
            </div>
            <div className={Styles.text1}>GITHUB</div>
        </div>
        
      </div>
    </div>
  );
}