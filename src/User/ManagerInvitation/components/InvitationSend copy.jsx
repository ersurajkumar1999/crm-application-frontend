import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
    Box, List, ListItem, ListItemAvatar, ListItemText,
    Avatar, Grid, Divider, Button, Stack, Skeleton,
} from '@mui/material';

import { Link } from 'react-router-dom';

import { CalculateDateTime } from '../../../helpers/CalculateDateTime';
import { getMySendConnections } from '../../../services/ConnectionService';
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
                const { data } = await getMySendConnections({ page, pageSize });
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

    console.log("users==>", users);
    return (
        <Box sx={{ flexGrow: 1, width: '100%' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <List>
                        {users.length > 0 && users.map((user) => (
                            <>
                                <Divider />
                                <ListItem
                                    secondaryAction={
                                        <Button sx={{ width: '100%', backgroundColor: '#a4a4a4', float: 'right' }} variant="contained" > Withdraw</Button>
                                    }
                                >
                                    <ListItemAvatar>
                                        <Link to="/profile">
                                            <Avatar>
                                                <Avatar />
                                            </Avatar>
                                        </Link>
                                    </ListItemAvatar>
                                    <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <ListItemText
                                            primary={user.recipient.username || user.recipient.username}
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