import styles from './message.module.css';

export function Message({send, user}) {
    return <div>
        <h1 className={styles.message}>{user}: <span className={styles.text}>{send}</span></h1>
    </div>
}