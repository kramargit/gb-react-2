import styles from './title.module.css';

export function Title({title}) {
    return <div>
        <p className={styles.title}>{title}</p>
    </div>
}