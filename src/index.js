import React from 'react';
import ReactDOM from 'react-dom/client';
import {Message} from './components/message/message';
import {Title} from './components/title/title';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Title title={'ЛевитанЧат'}/>
    <Message send={'Добро пожаловать!!!'} user={'Федор Михайлович'} />
    <Message send={'Здравствуйте!'} user={'Николай Васильевич'} />
    <Message send={'Как у вас дела?'} user={'Федор Михайлович'} />
    <Message send={'Хорошо все, а у вас?'} user={'Николай Васильевич' }/>
    <Message send={'Да потихоньку'} user={'Федор Михайлович'} />
  </React.StrictMode>
);