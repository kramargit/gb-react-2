import styles from './layout.module.css';

export const Layout = ({ chats, messages }) => {
    return (
      <div className={styles.layout}>
        <div className={styles.chatlist}>{chats}</div>
        <div className={styles.messagelist}>{messages}</div>
      </div> 
    );
  };