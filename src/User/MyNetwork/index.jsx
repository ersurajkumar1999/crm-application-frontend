import React from 'react';
import {
    Box, Container, Grid,
} from "@mui/material";
import MyNetworkInformation from './components/MyNetworkInformation';
import InvitationsSection from './components/InvitationsSection';
const Profile = () => {

    return (
        <>
            <Container sx={{ marginTop: 1 }} maxWidth="xl">
                <Box py={5} display={`flex`} flexDirection={`column`} alignItems={`center`}>
                    <Grid container spacing={3} my={2} justifyContent="center">
                        <MyNetworkInformation />
                        <InvitationsSection />
                    </Grid>
                </Box>
            </Container>
        </>
    )
}
export default Profile;