import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import {
    Box, Container, Grid, Paper, Stack,
    Card, Tabs, useMediaQuery, Tab
} from "@mui/material";
import EditProfileSection from './components/EditProfileSection';
import PostSection from './components/PostSection';
import AccountSettingSection from './components/AccountSettingSection';
import ProfileInformation from './components/ProfileInformation';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../../services/CommonServices';
import { setLoading, setProfileData } from '../../store/slices/profileSlice';

const Profile = () => {
    // Inside your component
    const dispatch = useDispatch();
    const {profileData} = useSelector((state) => state.profile);
    const [selectedTab, setSelectedTab] = useState(0);
    const handleTabChange = (event, newValue) => setSelectedTab(newValue);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(()=>{
        if(!profileData){
            const getProfileData = async () => {
                dispatch(setLoading(true));
                try {
                    const response = await getProfile();
                    if(response.status){
                        dispatch(setProfileData(response?.data?.data??null))
                    }
                } catch (error) {
                    console.log("Error getting profile", error);
                }
                dispatch(setLoading(false));
            }
            getProfileData();
        }
    },[profileData])
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