import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';

import {
    Grid, Stack, Skeleton, Card, Typography, CardHeader, Button, Container, Box
} from "@mui/material";

// import ConnectionInformation from '../../components/common/ConnectionInformation';
import ConnectionCard from './components/ConnectionCard';
import { sendRequest } from '../../services/ConnectionService';
// import { AuthContext } from '../../contexts/AuthContext';
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate } from 'react-router-dom';
import { getUserList } from '../../services/CommonServices';
import { useSelector } from 'react-redux';
import ConnectionInformation from '../../components/ConnectionInformation';

// import React, { useCallback, useState } from 'react';
import { createRoot } from 'react-dom/client';
import InfiniteScroll from 'react-infinite-scroller';


async function fetchIssues(url) {
    // const response = await fetch(url, {
    //     method: 'GET',
    //     headers: new Headers({
    //         Accept: 'application/vnd.github.v3+json'
    //     })
    // });

    // const links = parseLinkHeader(response.headers.get('Link'));
    // const issues = await response.json();

    // return {
    //     links,
    //     issues
    // };
}


const MyNetwork = () => {
    const { profileData } = useSelector((state) => state.profile);
    const navigate = useNavigate();
    // const { user } = useContext(AuthContext);
    const user = null;
    const loginUserId = profileData?._id;
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
                const response = await getUserList({ page, pageSize });
                if (!response.status) {
                    return false;
                }
                const { data } = response;
                data.data.forEach(obj => obj.isLoading = false);
                setState(prevState => ({
                    ...prevState,
                    data: data.data,
                    users: [...prevState.users, ...data.data],
                    loading: false
                }));
            } catch (error) {
                console.log("error==>", error);
            } finally {
                setState(prevState => ({ ...prevState, loading: false }));
            }
        };
        if (!observer.current) { // Check if API call has not been made yet
            userSearching();
            observer.current = true;
        }
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
    const handleUserConnection = async (userId, index) => {
        try {
            setState(prevState => {
                const updatedUsers = [...prevState.users];
                updatedUsers[index] = { ...updatedUsers[index], isLoading: true };
                return { ...prevState, users: updatedUsers };
            });
            const userInfo = {
                _id: null,
                requester: loginUserId,
                recipient: userId,
                status: "pending",
                createdAt: new Date(),
                updatedAt: new Date(),
                __v: 0
            }
            setState(prevState => {
                const updatedUsers = [...prevState.users];
                updatedUsers[index] = { ...updatedUsers[index], isLoading: true };
                return { ...prevState, users: updatedUsers };
            });

            const response = await sendRequest({ receiverId: userId });
            if (response.status) {
                setState(prevState => {
                    const updatedUsers = [...prevState.users];
                    const updatedUser = { ...updatedUsers[index], isLoading: false };
                    updatedUser.friendRequestsReceived = [
                        ...updatedUser.friendRequestsReceived,
                        userInfo
                    ];
                    updatedUsers[index] = updatedUser;
                    return {
                        ...prevState,
                        users: updatedUsers
                    };
                });
            }
        } catch (error) {
            console.log("error==>", error);
        }
    }
    console.log("users======>", users);












    const [items, setItems] = useState([]);
    const [nextPageUrl, setNextPageUrl] = useState(
        'https://api.github.com/repos/facebook/react/issues'
    );
    const [fetching, setFetching] = useState(false);

    const fetchItems = useCallback(
        async () => {
            return false;
            if (fetching) {
                return;
            }

            setFetching(true);

            try {
                const { issues, links } = await fetchIssues(nextPageUrl);

                setItems([...items, ...issues]);

                if (links.next) {
                    setNextPageUrl(links.next.url);
                } else {
                    setNextPageUrl(null);
                }
            } finally {
                setFetching(false);
            }
        },
        [items, fetching, nextPageUrl]
    );

    const hasMoreItems = !!nextPageUrl;


    const loader = (
        <div key="loader" className="loader">
            Loading ...
        </div>
    );
    return (
        <Container sx={{ marginTop: 1 }} maxWidth="xl">
            <Box py={5} display={`flex`} flexDirection={`column`} alignItems={`center`}>
                <Grid container spacing={3} my={2} justifyContent="center">
                    <Grid item xs={12} sm={6} md={4}>
                        <ConnectionInformation setState={setState} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={8}>
                        <InfiniteScroll
                            loadMore={fetchItems}
                            hasMore={hasMoreItems}
                            loader={loader}
                        >
                            <ul>
                                {items.map(item => (
                                    <li key={item.id}>
                                        <a href={item.url} target="_blank" rel="noopener">
                                            {item.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </InfiniteScroll>
                        {/* <Grid container spacing={3}>
                            <Grid item xs={12} sm={6} md={12}>
                                <Card>
                                    <CardHeader
                                        title={<Typography variant="h6" component="h6">Invitations</Typography>}
                                        action={<Button variant="contained" startIcon={<SettingsIcon />} onClick={() => navigate('/invitation-manager')}> Manage</Button>} // include the header action here
                                    />
                                </Card>
                            </Grid>
                            <ConnectionCard users={users} handleUserConnection={handleUserConnection} />
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

                        </Grid> */}

                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}
export default MyNetwork;