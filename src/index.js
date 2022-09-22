import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components';
import { ProfilePage, ChatPage } from './pages';
import styles from './index.module.css';
import './global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
      <BrowserRouter>
        <div className={styles.rootWrap}>
          <Header />
          <Routes>
            <Route path="/" element={<h1>Главная страница</h1>} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/chat/*" element={<ChatPage />} />
            <Route path="*" element={<h1>404</h1>} />
          </Routes>
        </div>
      </BrowserRouter>    
  </React.Fragment>
);