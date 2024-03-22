import {
    Grid, Card, Typography, CardHeader, Box,
    Tab,
    Container
} from "@mui/material";
import { TabContext, TabList, TabPanel, } from '@mui/lab';
import { useState } from "react";
import InvitationReceived from "./components/InvitationReceived";
import InvitationSend from "./components/InvitationSend";
const headerSX = {
    '& .MuiCardHeader-action': { mr: 0 }
};
const ManagerInvitation = () => {
    const [value, setValue] = useState('1');
    return (
        <Container sx={{ marginTop: 1 }} maxWidth="xl">
            <Box py={5} display={`flex`} flexDirection={`column`} alignItems={`center`}>
                <Grid container spacing={3} my={2} justifyContent="center">
                    <Grid item xs={12} sm={6} md={8}>
                        <Card>
                            <CardHeader
                                sx={headerSX}
                                title={<Typography variant="h6" component="h6"> Manage invitations</Typography>}
                            />
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={8}>
                        <Card>
                            <Box sx={{ width: '100%', typography: 'body1' }}>
                                <TabContext value={value}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: 1, borderColor: 'divider' }}>
                                        <TabList onChange={(event, newValue) => setValue(newValue)} textColor="secondary" indicatorColor="secondary" aria-label="lab API tabs example">
                                            <Tab label={"Received"} value="1" />
                                            <Tab label={"Sent"} value="2" />
                                        </TabList>
                                    </Box>
                                    <TabPanel value="1"><InvitationReceived /></TabPanel>
                                    <TabPanel value="2"><InvitationSend /></TabPanel>
                                </TabContext>
                            </Box>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}
export default ManagerInvitation;