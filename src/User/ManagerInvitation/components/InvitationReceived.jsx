import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
    Box, List, ListItem, ListItemAvatar, ListItemText,
    Avatar, IconButton, Grid, Divider, Stack, Skeleton
} from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import { Link } from 'react-router-dom';
import { CalculateDateTime } from '../../../helpers/CalculateDateTime';
import { acceptRequest, getMyReceivedConnections } from '../../../services/ConnectionService';


const InvitationReceived = () => {

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
        const userSearching = async () => {
            setState(prevState => ({
                ...prevState,
                loading: true
            }));

            try {
                const { data } = await getMyReceivedConnections({ page, pageSize });
                console.log("data==>", data);
                setState(prevState => ({
                    ...prevState,
                    data: data.data,
                    users: [...prevState.users, ...data.data],
                    loading: false
                }));
            } catch (error) {
                setState(prevState => ({
                    ...prevState,
                    loading: false
                }));
            }
        };

        userSearching();
    }, [page, pageSize]);

    const lastUserElementRef = useCallback((node) => {
        if (loading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && data.length > 0) {
                setState((prevState) => ({
                    ...prevState,
                    page: prevState.page + 1
                }));
            }
        });
        if (node) observer.current.observe(node);
    }, [loading, data.length]);

    const InvitationAccept = async (userId, index) => {
        try {
            
            const response = await acceptRequest({ friendId: userId });
            if (response.status) {
                console.log("response==>",response);
            }
        } catch (error) {
            console.log("error==>", error);
        }
        console.log("handleUserConnection", userId);
    }
    return (
        <Box sx={{ flexGrow: 1, width: '100%' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <List>
                        {users.length > 0 && users.map((user) => (
                            <>
                                <Divider />
                                <ListItem key={user._id}
                                    secondaryAction={
                                        <>
                                            <IconButton edge="end" aria-label="delete"
                                                sx={{
                                                    background: 'rgba(98, 62, 9, 0.6)',
                                                    color: 'white',
                                                    '&:hover': {
                                                        backgroundColor: '#865e2b'
                                                    },
                                                    margin: '4px',
                                                    padding: '8px'
                                                }}>
                                                <CloseIcon />
                                            </IconButton>
                                            <IconButton edge="end" aria-label="delete"
                                                onClick={() => InvitationAccept(user.requester._id)}
                                                sx={{
                                                    background: 'rgba(98, 62, 9, 0.6)',
                                                    color: 'white',
                                                    '&:hover': {
                                                        backgroundColor: '#865e2b',
                                                    },
                                                    margin: '4px',
                                                    padding: '8px'
                                                }}
                                            >
                                                <DoneIcon />
                                            </IconButton>
                                        </>

                                    }
                                >
                                    <ListItemAvatar>
                                        <Link to="/profile">
                                            <Avatar>
                                                <FolderIcon />
                                            </Avatar>
                                        </Link>
                                    </ListItemAvatar>
                                    <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <ListItemText
                                            primary={user.requester.profile.firstName || user.requester.username}
                                            secondary={CalculateDateTime(user.updatedAt)}
                                        />
                                    </Link>
                                </ListItem>
                            </>
                        ))}
                    </List>
                    <Grid item xs={12} ref={lastUserElementRef}>
                        {
                            loading && (
                                <Stack spacing={1}>
                                    <Skeleton variant="text" width="100%" sx={{ fontSize: '1rem' }} />
                                    <Skeleton variant="circular" width={70} height={70} />
                                    <Skeleton variant="rectangular" width="100%" height={60} />
                                    <Skeleton variant="rounded" width="100%" height={60} />
                                </Stack>
                            )
                        }
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}
export default InvitationReceived;