import { useState, useEffect, useRef, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { Input, InputAdornment } from '@mui/material';
import {Send} from '@mui/icons-material';
import styled from '@emotion/styled';
import {Message} from './message';
import styles from './message-list.module.css';

const InputStyles = styled(Input)({
    width: "100%",
    height: "50px",
    fontSize: "20px",
    border: "4px solid #4db6ac",
    outline: "none",
    padding: "0 0 0 19px",
    boxSizing: "border-box"
  });
  
  const SendStyles = styled(Send)`
  width: 35px;
  height: 35px;
  border: none;
  cursor: pointer;
  `

export function MessageList() {

    const { roomId } = useParams(); 

    const [messageList, setMessageList] = useState({
        'Классическая литература': [
            {
                author: 'Федор Михайлович',
                text: 'Добро пожаловать!!!',
                date: new Date()
            },
            {
                author: 'Николай Васильевич',
                text: 'Здравствуйте!',
                date: new Date()
            },
            {
                author: 'Федор Михайлович',
                text: 'Как у вас дела?',
                date: new Date()
            },
            {
                author: 'Николай Васильевич',
                text: 'Хорошо все, а у вас?',
                date: new Date()
            },
            {
                author: 'Федор Михайлович',
                text: 'Да, потихоньку',
                date: new Date()
            }
        ],
        'Фэнтези': [
            {
                author: 'Гарри',
                text: 'Экспекта патронус',
                date: new Date()
            },
            {
                author: 'Том',
                text: 'Ав вада кеда ва',
                date: new Date()
            },
            {
                author: 'Рон',
                text: 'Люмус максима',
                date: new Date()
            },
            {
                author: 'Гермиона',
                text: 'Ой, мальчики .... Пойду почитаю ...',
                date: new Date()
            }
        ],
        'Соловьев': [
            {
                author: 'Владимир Соловьев',
                text: 'Разбомбить к чертям СРАНОЕ НАТО!',
                date: new Date()
            },
            {
                author: 'Владимир Жириновский',
                text: 'Да-да! А еще расстрелять всех актеров-проституток!!!',
                date: new Date()
            },
            {
                author: 'Василь Вакаров',
                text: 'Подождите, подождите ... Это чтоже получается, это что моя страна погрязла в нацисткой идеологии? И прислуживает Америке и странам НАТО? Дааааа неееее, мы не такие ....',
                date: new Date()
            },
            {
                author: 'Маргарита Симонян',
                text: 'Мальчики, послушайте какой я сегоднгя стих прочитала!!',
                date: new Date()
            }
        ],
        'BBC News': [
            {
                author: 'Джо Байден',
                text: 'Русские виноваты в том, что сейчас творится в Европе и на Украине. И кто-то отложил очень большую какашку в лотке для кота, это тоже скорее всего сделали русские. Нужно срочно усилить санкции против русских!!!',
                date: new Date()
            },
            {
                author: 'Анжела Бербок',
                text: 'Дорогие мои, будем экономить на мытье, питье, еде и тепле! Главное чтобы русские проиграли!! :)',
                date: new Date()
            },
            {
                author: 'Жозеф Борель',
                text: 'Русские СДАФАЙТЕСЬ!',
                date: new Date()
            },
            {
                author: 'Литва',
                text: 'Надо срочно ввести санкции против русских!',
                date: new Date()
            }
        ]
    });

    const ref = useRef();

    useEffect(() => {
        if(ref.current) {
            ref.current.scrollTo(0, ref.current.scrollHeight);
        }
    },[messageList]);

    const pushMesssage = useCallback((text, author='Я') => {
        if (text) {
            setMessageList((state) => ({
                ...state, 
                [roomId]: [
                ...(state[roomId] ?? []),
                {author, text, date: new Date()}
            ],
        }));
        if(author === 'Я'){
            setTypeText('')
        }            
        }        
    },[roomId]);

    useEffect(() => {
        const messages = messageList[roomId] ?? [];
        const tail = messages[messages.length - 1];

        let timerId = null;

        if(messages.length && tail?.author === 'Я') { 
            console.log(123);           
            timerId = setTimeout(() => {
                pushMesssage(getBotAnswer(tail.text), 'Левитан') 
            }, 1500);
        }
        
        return () => {
            clearInterval(timerId);
        };
    },[messageList, pushMesssage, roomId]);

    const getBotAnswer = (message) => {
        const answers = {
            0: '0000',
            1: '1111'
        };

        return answers[message] || 'К сожалению я не могу ответить на ваш вопрос';
    };

    let [typeText, setTypeText] = useState('');

    const handlePressEnter = ({code}) => {
      if(code === 'Enter' || code === 'NumpadEnter') {
        pushMesssage(typeText);
      }
    };

    const messages = messageList[roomId] ?? [];

    return(
        <div ref={ref} className={styles.messageList}>
            {messages.map((elem, index) =>
                <Message elem={elem} key={index} />
            )}
            
            <InputStyles
             fullWidth={true}
             onKeyDown={handlePressEnter}
             type="text"
             value={typeText}
             placeholder='Введите текст'
             onChange={({target}) => {setTypeText(target.value)}}
             endAdornment={<InputAdornment position="end">
                {typeText && <SendStyles onClick={() => pushMesssage(typeText)} />}
             </InputAdornment>                   
             }
             />
        </div>
    );
};