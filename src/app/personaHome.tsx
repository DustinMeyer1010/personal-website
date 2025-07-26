import { useEffect, useState } from "react";
import Styles from "./styles/personaHome.module.css"
import SentMessage from "./component/sent_message";
import ReceivedMessage from "./component/received_message";
import ArrowDown from "../../public/arrowdown.png"
import Image from "next/image";


const interviewerLines = [
  "Looks like we’ve found a wildcard. What skills do you bring? Can you code your way out of a Palace?",
  "Bold words. But can you bend the code to your will?",
  "Teamwork matters too. Can you fight alongside a crew?",
  "Impressive... Style and skill. Welcome to the team, Phantom Coder!",
];

const dustinLines = [
  "I’m fluent in Go, TypeScript, JavaScript, and Python, building full‑stack apps with React and Next.js. I design REST APIs and smooth UIs like Joker’s All‑Out Attack.",
  "I’ve got a CS degree with a Cybersecurity minor, strong in algorithms and software design. I even built tools like URMC‑HUB for real organizations.",
  "I thrive on teamwork—tutoring, debugging, and collaborating are my support skills. I make sure the whole squad levels up together.",
];

const personalInfo = "In a world driven by technology, every line of code is a step toward shaping the future. Creativity fuels innovation, and knowledge unlocks endless possibilities. With passion and determination, we can build experiences that inspire, connect, and transform the way we live. The journey is just as important as the destination—so take the leap, learn, and create something extraordinary."



const Persona = () => {



  const [activeSection, setActiveSection] = useState(0);
  const [removeChatNotification, setRemoveChatNotficiation] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 150) {
        setRemoveChatNotficiation(true)
      }
      else {
        setRemoveChatNotficiation(false)
      }

      console.log(removeChatNotification)


      if (scrollY < 300) {
        setActiveSection(0);
      } else if (scrollY < 500) {
        setActiveSection(1);
      } else if (scrollY < 700) {
        setActiveSection(2);
      }else if (scrollY < 900) {
        setActiveSection(3);
      }else if (scrollY < 1100) {
        setActiveSection(4);
      }else if (scrollY < 1300) {
        setActiveSection(5);
      }else if (scrollY < 1500) {
        setActiveSection(6);
      }
      else {
        setActiveSection(7)

      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);




    return (
            <div className={`${Styles.page}` } >
      <div className={Styles.info_box}> 
          <h1 className={Styles.title}>Dustin Meyer</h1>
          <p>Full stack developer skilled in Go, React, and TypeScript. Building web apps that solve real problems with clean, efficient code.</p>
      </div>
      <div style={{width: "75%", display: "flex", flexDirection: "column", gap: "20px"}}>
        <h1 className={`${Styles.title_chat} ${removeChatNotification ? Styles.remove : ""}`}>Log History<br/><Image src={ArrowDown} alt=""></Image></h1>
        
        
      <div className={`${Styles.left_message} ${activeSection >= 1 ? Styles.visible : ''}`}>

        <div className={Styles.column}>
          <div className={Styles.picture_left}></div>
          <div className={Styles.name_left}>Interviewer</div>
        </div>

        <SentMessage value={interviewerLines[0]}/>
      </div>
      <div className={`${Styles.right_message} ${activeSection >= 2 ? Styles.visible : ''}`}>
        <ReceivedMessage value={dustinLines[0]}/>
        <div className={Styles.column_right}>
          <div className={Styles.picture_right}></div>
            <div className={Styles.name_right}>Dustin Meyer</div>
          </div>
      </div>
      <div className={`${Styles.left_message} ${activeSection >= 3 ? Styles.visible : ''}`}>
          <div className={Styles.column}>
          <div className={Styles.picture_left}></div>
          <div className={Styles.name_left}>Interviewer</div>
        </div>
        <SentMessage value={interviewerLines[1]}/>
      </div>
      <div className={`${Styles.right_message} ${activeSection >= 4 ? Styles.visible : ''}`}>
        
         <ReceivedMessage value={dustinLines[1]}/>
                 <div className={Styles.column_right}>
          <div className={Styles.picture_right}></div>
            <div className={Styles.name_right}>Dustin Meyer</div>
          </div>
      </div>
      <div className={`${Styles.left_message} ${activeSection >= 5 ? Styles.visible : ''}`}>
                <div className={Styles.column}>
          <div className={Styles.picture_left}></div>
          <div className={Styles.name_left}>Interviewer</div>
        </div>
          <SentMessage value={interviewerLines[2]}/>
      </div>
            <div className={`${Styles.right_message} ${activeSection >= 6 ? Styles.visible : ''}`}>
        
         <ReceivedMessage value={dustinLines[2]}/>
                 <div className={Styles.column_right}>
          <div className={Styles.picture_right}></div>
            <div className={Styles.name_right}>Dustin Meyer</div>
          </div>
      </div>
        <div className={`${Styles.left_message} ${activeSection >= 7 ? Styles.visible : ''}`}>
        <div className={Styles.column}>
          <div className={Styles.picture_left}></div>
          <div className={Styles.name_left}>Interviewer</div>
        </div>
          <SentMessage value={interviewerLines[3]}/>
      </div>
      
      </div>
    </div>
    )
}

export default Persona