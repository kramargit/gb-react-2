import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import styles from './chat-list.module.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import ForumIcon from '@mui/icons-material/Forum';

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  height: '91vh',
}));

export function ChatList() {

    const navigate = useNavigate();

    useEffect(() => {
      const listener = ({ code }) => {
        if (code === 'Escape') {
          navigate('/chat');
        }
      };

      document.addEventListener('keydown', listener);

      return () => document.removeEventListener('keydown', listener);
    }, [navigate]);

    const { roomId } = useParams();


    const [chatListing, setChatListing] = useState([
        {
            name: 'Классическая литература',
            lastMessage: 'author: last message'
        },
        {
            name: 'Фэнтези',
            lastMessage: 'author: last message'
        },
        {
            name: 'Соловьев',
            lastMessage: 'author: last message'
        },
        {
            name: 'BBC News',
            lastMessage: 'author: last message'
        }
    ]);

    return(
        <div className={styles.chatList}>
          <Box sx={{ flexGrow: 1, maxWidth: 752 }}>        
            <Grid item xs={12} md={6}>
              <Demo>
                <List>
                    {chatListing.map((elem) => {
                        return <Link key={elem.name} to={`/chat/${elem.name}`}>
                                      <ListItem selected={ roomId === elem.name }>
                                          <ListItemIcon>
                                            <ForumIcon />
                                          </ListItemIcon>
                                          <ListItemText
                                            primary={elem.name}
                                            secondary={elem.lastMessage}
                                          />
                                      </ListItem>
                                </Link>
                    })}
                </List>
              </Demo>
            </Grid>
          </Box>
        </div>
    );
};