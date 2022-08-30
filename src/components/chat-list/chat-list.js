import * as React from 'react';
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

    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);
    const [chatListing, setChatListing] = React.useState([
        {
            name: 'Классическая литература',
            id: 1
        },
        {
            name: 'Фэнтези',
            id: 2
        },
        {
            name: 'Соловьев',
            id: 3
        },
        {
            name: 'BBC News',
            id: 4
        }
    ]);

    return(
        <div className={styles.chatList}>
          <Box sx={{ flexGrow: 1, maxWidth: 752 }}>        
            <Grid item xs={12} md={6}>
              <Demo>
                <List dense={dense}>
                  {/* {generate(
                    <ListItem>
                      <ListItemIcon>
                        <FolderIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="Single-line item"
                        secondary={secondary ? 'Secondary text' : null}
                      />
                    </ListItem>,
                  )} */}
                    {chatListing.map((elem) => {
                        return <ListItem key={elem.id}>
                                    <ListItemIcon>
                                      <ForumIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                      primary={elem.name}
                                      secondary={secondary ? 'Secondary text' : null}
                                />
                                </ListItem>
                    })}
                </List>
              </Demo>
            </Grid>
          </Box>
        </div>
    );
};