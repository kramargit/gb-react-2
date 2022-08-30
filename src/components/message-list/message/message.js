import styles from './message.module.css';

export const Message = ({elem}) => {
    return(
        <h1 className={`${styles.message} ${ elem.author === 'Я' ? styles.my : styles.notmy}`}>
                {elem.author}: <span className={styles.text}>{elem.text}</span>
        </h1>
    );
};