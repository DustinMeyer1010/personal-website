import styles from "./page.module.css";
import Button from "./component/button"

export default function Home() {
  return (
    <div className={styles.page} >
      {/*<Button></Button>*/}
      <div className={styles.info_box}> 
          <h1 className={styles.title}>Dustin Meyer</h1>
      </div>
      <div>
        <h1>Chat Logs</h1>
        <div className={styles.chat}>
          <div className={styles.inner_chat}>
            Please tell me what your tech stack looks like?
             jdasklhklsdaj flkj oljasdl;kf jaslkdjf aslkdjf las;kjflask jflkasjflkas jflkjflk sdlkfj aslk j
          </div>
          <div className={styles.inner_chat_shadow}></div>
        </div>
        
      </div>
    </div>
  );
}
