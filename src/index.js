import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Header } from './components';
import { ProfilePage, ChatPage } from './pages';
import { store } from './store'
import styles from './index.module.css';
import './global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <Provider store={store}>
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
    </Provider>          
  </React.Fragment>
);