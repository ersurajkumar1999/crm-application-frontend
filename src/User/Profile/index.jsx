import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import {
    Box, Container, Grid, Paper, Stack, Typography,
    Card, Tabs, useMediaQuery, Tab
} from "@mui/material";
import EditProfileSection from './components/EditProfileSection';
import PostSection from './components/PostSection';
import AccountSettingSection from './components/AccountSettingSection';
import ProfileInformation from './components/ProfileInformation';
const Profile = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const handleTabChange = (event, newValue) => setSelectedTab(newValue);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    
    return (
        <>
            <Container sx={{ marginTop: 1 }} maxWidth="xl">
                <Box py={5} display={`flex`} flexDirection={`column`} alignItems={`center`}>
                    <Grid container spacing={3} my={2} justifyContent="center">
                        <Grid item xs={12} sm={6} md={4}>
                            <Paper sx={{ padding: 2, borderRadius: 2 }} >
                                <Stack spacing={3}>
                                    <ProfileInformation />
                                </Stack>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} md={8}>
                            <Card>
                                <Tabs
                                    value={selectedTab}
                                    onChange={handleTabChange}
                                    aria-label="profile tabs"
                                    variant={isSmallScreen ? "scrollable" : "fullWidth"}
                                >
                                    <Tab label="Edit Profile" style={{ color: selectedTab === 0 ? 'green' : 'black' }} />
                                    <Tab label="Account Settings" style={{ color: selectedTab === 1 ? 'green' : 'black' }} />
                                    <Tab label="Post" style={{ color: selectedTab === 2 ? 'green' : 'black' }} />
                                </Tabs>
                            </Card>
                            <Card sx={{ marginTop: '10px' }}>
                                {
                                    selectedTab == 0 && <EditProfileSection />
                                }
                                {
                                    selectedTab == 1 && <AccountSettingSection />
                                }
                                {
                                    selectedTab == 2 && <PostSection />
                                }
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}
export default Profile;