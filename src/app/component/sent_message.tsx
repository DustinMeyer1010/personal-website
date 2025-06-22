import styles from "./sent_message.module.css"

type Message = {
    value: string
}

const SentMessage: React.FC<Message> = ( { value } ) => {

    return (
        <div className={styles.chat}>
          <div className={styles.inner_chat}>
            {value}
          </div>
          <div className={styles.inner_chat_shadow}></div>
        </div>
    )
}

export default SentMessage