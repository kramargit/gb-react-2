import styles from './message.module.css';
import { format } from 'date-fns';

export const Message = ({elem}) => {
    return(
        <h1 className={`${styles.message} ${ elem.author === 'Я' ? styles.my : styles.notmy}`}>
                {elem.author}: <span className={styles.text}>{elem.text}</span><p>{format(elem?.date, 'yyyy-MM-dd HH:mm:ss')}</p>
        </h1>
    );
};