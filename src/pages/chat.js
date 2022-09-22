import { ChatList, MessageList, Layout } from '../components';
import { Routes, Route, useParams } from 'react-router-dom';

export const ChatPage = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout chats={<ChatList />} messages={<h1 style={{ color: '#fff', padding: '5px' }}>Выберите чат-комнату ...</h1>} />} />
                <Route path=':roomId' element={<Layout chats={<ChatList />} messages={<MessageList />} />} />
            </Routes>
        </>
        
    );
};