import React from 'react';
import ReactDOM from 'react-dom/client';
import { Layout } from './components';
import styles from './index.module.css';
import './global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    {/* <div className={styles.rootWrap}>
      <Header />
      <ChatList />
      <MessageList />
    </div>       */}
    <Layout chats={} message={} />
  </React.Fragment>
);