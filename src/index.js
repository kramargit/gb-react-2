import React from 'react';
import ReactDOM from 'react-dom/client';
import {Message} from './components/message/message';
import {Title} from './components/title/title';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Title title={'Левитан'} />
    <Message />
  </>
);