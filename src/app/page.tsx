'use client'
import Styles from "./page.module.css";
import Button from "./component/button"
import SentMessage from "./component/sent_message";
import ReceivedMessage from "./component/received_message";
import { useEffect, useState } from "react";

export default function Home() {

  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY < 300) {
        setActiveSection(0);
      } else if (scrollY < 600) {
        setActiveSection(1);
      } else if (scrollY < 900) {
        setActiveSection(2);
      } else {
        setActiveSection(3);
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
        
      <div className={`${Styles.left_message} ${activeSection >= 0 ? Styles.visible : ''}`}>
        <SentMessage value="Let's Go"/>
      </div>
      <div className={`${Styles.right_message} ${activeSection >= 1 ? Styles.visible : ''}`}>
                <ReceivedMessage value="Very Nice"/>
      </div>
      <div className={`${Styles.left_message} ${activeSection >= 2 ? Styles.visible : ''}`}>
        <SentMessage value="Let's Go"/>
      </div>
      <div className={`${Styles.right_message} ${activeSection >= 3 ? Styles.visible : ''}`}>
         <ReceivedMessage value="Very Nice"/>
      </div>


        
        <ReceivedMessage value="Very Nice"/>
        <SentMessage value="That Shadow looked tough. If we keep rushing in like this, someone's gonna get hurt!"/>
        <ReceivedMessage value="I've analyzed the pattern of their patrols. If we time it right, we can sneak past without triggering an alarm. But one wrong move and it's over."/>
        <SentMessage value="...!"/>
        <SentMessage value="I've analyzed the pattern of their patrols. If we time it right, we can sneak past without triggering an alarm. But one wrong move and it's over."/>
      </div>
    </div>
  );
}
