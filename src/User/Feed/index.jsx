import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import {
    Box, Container, Grid, Paper, Skeleton, Stack,
    useMediaQuery,
} from "@mui/material";

import ProfileInformation from './components/ProfileInformation';
import PostCardInformation from './components/PostCardInformation';
import PostStartSection from './components/PostStartSection';
import { getAllPost } from '../../services/ApiService';

const Feed = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const [state, setState] = useState({
        posts: [],
        data: [],
        loading: true,
        page: 1,
        pageSize: 15,
    });
    const { posts, data, loading, page, pageSize } = state;
    const observer = useRef(null);

    useEffect(() => {
        const getPost = async () => {
            setState(prevState => ({ ...prevState, loading: true }));
            try {
                const { data } = await getAllPost({ page, pageSize });
                setState(prevState => ({
                    ...prevState,
                    data: data.data,
                    posts: [...prevState.posts, ...data.data],
                    loading: false
                }));
            } catch (error) {
                setState(prevState => ({ ...prevState, loading: false }));
            }
        };
        getPost();
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

    return (
        <Container sx={{ marginTop: 1 }} maxWidth="xl">
            <Box py={5} display={`flex`} flexDirection={`column`} alignItems={`center`}>
                <Grid container spacing={3} my={2} justifyContent="center">
                    <Grid item xs={12} sm={6} md={3}>
                        <Paper sx={{ padding: 1, borderRadius: 1 }} >
                            <Stack spacing={1}>
                                ProfileInformation
                            </Stack>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={5}>
                        <PostStartSection />
                        <Stack spacing={1} sx={{ paddingTop: 1 }}>
                            <PostCardInformation posts={posts} />
                        </Stack>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Paper sx={{ padding: 1, borderRadius: 1 }} >
                            <Stack spacing={1}>
                                ProfileInformation
                            </Stack>
                        </Paper>
                    </Grid>
                </Grid>
                {/* Observe the last element for intersection here */}
                <Grid item xs={12} md={12} ref={lastUserElementRef}>
                    {loading && (
                        <Stack spacing={1}>
                            <Skeleton variant="text" width="100%" sx={{ fontSize: '1rem' }} />
                            <Skeleton variant="circular" width={70} height={70} />
                            <Skeleton variant="rectangular" width="100%" height={60} />
                            <Skeleton variant="rounded" width="100%" height={60} />
                        </Stack>
                    )}
                </Grid>
            </Box>
        </Container>
    )
}

export default Feed;
