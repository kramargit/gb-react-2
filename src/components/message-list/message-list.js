import { useState, useEffect, useRef } from 'react';
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

    const ref = useRef();

    useEffect(() => {
        ref.current?.focus();
    });

    useEffect(() => {
        if (messageList.length === 5) {
            return;
        }

        const tail = messageList[messageList.length - 1];

        if (tail.author === 'Левитан') {
            return;
        }

        let timerId = null;
        timerId = setTimeout(() => {setMessageList((state) => [...state, {author: 'Левитан', text: 'Рад приветствовать вас на нашей платформе'}])},
         1500)

        return () => {
            clearInterval(timerId);
        };
    },[messageList]);

    let [typeText, setTypeText] = useState('');

    const pushMesssage = () => {
        if (typeText) {
            setMessageList((state) => [...state, {author: 'Я', text: typeText}]);
            setTypeText('')
        }        
    };

    const handlePressEnter = ({code}) => {
      if(code === 'Enter' || code === 'NumpadEnter') {
        pushMesssage();
      }
    };

    return(
        <div className={styles.messageList}>
            {messageList.map((elem, index) =>
                <Message elem={elem} key={index} />
            )}
            
            <InputStyles
             fullWidth={true}
             inputRef={ref}
             onKeyDown={handlePressEnter}
             type="text"
             value={typeText}
             placeholder='Введите текст'
             onChange={({target}) => {setTypeText(target.value)}}
             endAdornment={<InputAdornment position="end">
                {typeText && <SendStyles onClick={() => pushMesssage()} />}
             </InputAdornment>                   
             }
             />
        </div>
    );
};