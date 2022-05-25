import styles from './message.module.css';
import {useState, useEffect} from 'react';

export function Message() {
    const [messageList, setMessageList] = useState([
        {
            author: 'Федор Михайлович',
            text: 'Добро пожаловать!!!'
        },
        {
            author: 'Николай Васильевич',
            text: 'Здравствуйте!'
        },
        {
            author: 'Федор Михайлович',
            text: 'Как у вас дела?'
        },
        {
            author: 'Николай Васильевич',
            text: 'Хорошо все, а у вас?'
        },
        {
            author: 'Федор Михайлович',
            text: 'Да, потихоньку'
        }
    ]);

    useEffect(() => {
        const tail = messageList[messageList.length - 1];
        
        if (tail.author === 'Левитан') {
            return;
        }

        setMessageList((state) => [...state, {author: 'Левитан', text: 'Рад приветствовать вас на нашей платформе'}]);
    },[messageList])

    let [typeText, setTypeText] = useState('');

    const pushMesssage = () => {
        setMessageList((state) => [...state, {author: 'Я', text: typeText}]);
    };

    return(
        <div>
            {messageList.map(elem =>
                <h1 className={`${styles.message} ' ' ${ elem.author === 'Я' ? styles.my : styles.notmy}`}>
                    {elem.author}: <span className={styles.text}>{elem.text}</span>
                </h1>
            )}
                <input className={styles.typeText} type="text" placeholder='введите текст' onChange={({target}) => {setTypeText(target.value)}} />
                <button className={styles.sendTypeText} onClick={() => pushMesssage()} ></button>
        </div>
    );
};