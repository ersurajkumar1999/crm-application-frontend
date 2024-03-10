import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import {
    Box, Container, Grid, Paper, Stack,
    Card, Tabs, useMediaQuery, Tab
} from "@mui/material";
import ProfileInformation from './components/ProfileInformation';
const Feed = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const handleTabChange = (event, newValue) => setSelectedTab(newValue);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
            <Container sx={{ marginTop: 1 }} maxWidth="xl">
                <Box py={5} display={`flex`} flexDirection={`column`} alignItems={`center`}>
                    <Grid container spacing={3} my={2} justifyContent="center">
                        <Grid item xs={12} sm={6} md={3}>
                            <Paper sx={{ padding: 1, borderRadius: 1 }} >
                                <Stack spacing={1}>
                                    <ProfileInformation />
                                </Stack>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <Paper sx={{ padding: 1, borderRadius: 1 }} >
                                <Stack spacing={1}>
                                   sadsda
                                </Stack>
                            </Paper>
                            <Paper sx={{ padding: 1, borderRadius: 1 }} >
                                <Stack spacing={1}>
                                    jhgxc
                                </Stack>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Paper sx={{ padding: 1, borderRadius: 1 }} >
                                <Stack spacing={1}>
                                    <ProfileInformation />
                                </Stack>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}
export default Feed;