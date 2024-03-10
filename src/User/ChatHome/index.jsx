import React from 'react';
import {
    Grid, Container, Box
} from "@mui/material";
import ChatWindow from './components/ChatWindow';
import ChatUserInformationSection from './components/ChatUserInformationSection';


const ChatHome = () => {
    const activeUser = true;
    return (
        <Container sx={{ marginTop: 1 }} maxWidth="xl">
            <Box py={5} display={`flex`} flexDirection={`column`} alignItems={`center`}>
                <Grid container spacing={3} my={2} justifyContent="center">
                    <ChatUserInformationSection activeUser={activeUser} />
                    <ChatWindow activeUser={activeUser} />
                </Grid>
            </Box>
        </Container>
    );
}
export default ChatHome;
