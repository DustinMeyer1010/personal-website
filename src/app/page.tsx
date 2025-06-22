import styles from "./page.module.css";
import Button from "./component/button"
import SentMessage from "./component/sent_message";
import ReceivedMessage from "./component/received_message";

export default function Home() {
  return (
    <div className={styles.page} >
      {/*<Button></Button>*/}
      <div className={styles.info_box}> 
          <h1 className={styles.title}>Dustin Meyer</h1>
      </div>
      <div style={{width: "75%", display: "flex", flexDirection: "column", gap: "20px"}}>
        <h1>Chat Logs</h1>
        <SentMessage value="Let's Go"/>
        <ReceivedMessage value="Very Nice"/>
        <SentMessage value="That Shadow looked tough. If we keep rushing in like this, someone's gonna get hurt!"/>
        <ReceivedMessage value="I've analyzed the pattern of their patrols. If we time it right, we can sneak past without triggering an alarm. But one wrong move and it's over."/>
        <SentMessage value="...!"/>
        <SentMessage value="I've analyzed the pattern of their patrols. If we time it right, we can sneak past without triggering an alarm. But one wrong move and it's over."/>
      </div>
    </div>
  );
}
