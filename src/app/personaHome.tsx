import { useEffect, useState } from "react";
import Styles from "./styles/personaHome.module.css"
import SentMessage from "./component/sent_message";
import ReceivedMessage from "./component/received_message";

const interviewerLines = [
  "Well, well… looks like we've found our next wildcard. Tell me, what kind of skills do you bring to the table? Are you the kind of Phantom Thief who can code his way out of any Palace?",
  "Hah! Bold words. But tell me this… do you just follow the code, or can you bend it to your will?",
  "Not bad, Joker. But what about teamwork? Can you fight alongside a crew, or are you just a lone wolf in the Metaverse?",
  "Hmph… looks like you've got style and substance. Welcome to the team, Phantom Coder. Let's change the hearts of bad software everywhere!",
];

const dustinLines = [
  "Heh, you could say I've stolen a lot of knowledge. I'm fluent in Go, TypeScript, JavaScript, and Python, and I build full-stack web apps using frameworks like React and Next.js. I also design RESTful APIs, backend systems, and front-end interfaces that feel as smooth as Joker's All-Out Attack!",
  "I've got a Bachelor's in Computer Science with a minor in Cybersecurity, so I don't just code — I understand algorithms, data structures, and secure software design. I've even built and maintained tools like URMC-HUB, helping real organizations manage their workflows efficiently. You could say I'm the navigator you can always rely on.",
  "Teamwork's part of my code. I've got experience tutoring, helping others debug, and working with cross-functional teams, so communication is my support skill. Whether it's pair programming, code reviews, or explaining complex CS concepts clearly, I make sure everyone levels up together.",
];


const Persona = () => {



  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

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
      </div>
      <div style={{width: "75%", display: "flex", flexDirection: "column", gap: "20px"}}>
        <h1>Chat Logs</h1>
        
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