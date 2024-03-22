import { Avatar, Box, Card, CardContent, Divider, Grid, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, TextField, Typography } from '@mui/material'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import SearchSection from './SearchSection';
import { useSelector } from 'react-redux';
import { fetchAllChats } from '../../../services/ChatService';
import PreLoader from '../../../components/common/PreLoader';
import { getAllPost } from '../../../services/CommonServices';

const UserChatListSection = () => {
    const { profileData } = useSelector((state) => state.profile);
    // const users = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const [selectedIndex, setSelectedIndex] = useState(0);
    const handleListItemClick = () => {
        console.log("handleListItemClick");
    }
    const [state, setState] = useState({
        users: [],
        data: [],
        loading: true,
        page: 1,
        pageSize: 15,
    });
    const { users, data, loading, page, pageSize } = state;
    const observer = useRef(null);
    useEffect(() => {
        const getPost = async () => {
            setState(prevState => ({ ...prevState, loading: true }));
            try {
                const { data } = await fetchAllChats({ page, pageSize });
                setState(prevState => ({
                    ...prevState,
                    data: data.data,
                    users: [...prevState.users, ...data.data],
                    loading: false
                }));
            } catch (error) {
                setState(prevState => ({ ...prevState, loading: false }));
            }
        };
        if (!observer.current) { // Check if API call has not been made yet
            getPost();
            observer.current = true;
        }
    }, [page, pageSize]);

    const lastUserElementRef = useCallback((node) => {
        if (loading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && data.length > 0) {
                setState((prevState) => ({ ...prevState, page: prevState.page + 1 }));
            }
        });
        if (node) observer.current.observe(node);
    }, [loading, data.length]);

    console.log("users==>", users);
    return (
        <Card>
            <CardContent>
                <SearchSection title={"Search People"} />
                <Box sx={{ width: '100%', mt: 2, maxWidth: '100%', height: '400px', overflow: 'auto', bgcolor: 'background.paper' }}>
                    <List component="nav" aria-label="main mailbox folders" >
                        <Divider />
                        {
                            users.map((user, index) => (
                                <>
                                    <ListItemButton

                                        key={index}
                                        selected={selectedIndex === index}
                                        onClick={(event) => handleListItemClick(event, index)}
                                    >
                                        <ListItemAvatar>
                                            <Avatar alt="Remy Sharp" src="https://avatars.githubusercontent.com/u/146355358?v=4" />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={"Hello"}
                                            secondary={
                                                <>
                                                    {'this is last msg'}
                                                    <ListItem disableGutters secondaryAction={"1 day ago"} ></ListItem>
                                                </>
                                            }
                                        />
                                    </ListItemButton>
                                    <Divider />
                                </>
                            ))
                        }
                        <Grid item xs={12} md={12} >
                            {loading && <PreLoader />}
                        </Grid>
                    </List>
                </Box>
            </CardContent>
        </Card>
    )
}

export default UserChatListSection