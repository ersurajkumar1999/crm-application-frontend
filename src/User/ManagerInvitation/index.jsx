import { Box, Button, Card, CardContent, CardHeader, Container, Grid, Paper, Stack, Tab, Tabs, Typography, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import { useTheme } from '@mui/material/styles';
import ReceivedInvitation from './components/ReceivedInvitation';
import SendInvitation from './components/SendInvitation';
const ManagerInvitation = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const handleTabChange = (event, newValue) => setSelectedTab(newValue);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <>
            <Container sx={{ marginTop: 1 }} maxWidth="xl">
                <Box py={5} display={`flex`} flexDirection={`column`} alignItems={`center`}>
                    <Grid container spacing={3} my={2} justifyContent="center">
                        <Grid item xs={12} sm={6} md={8}>
                            <Paper sx={{ borderRadius: 2 }} >
                                <CardHeader
                                    title={<Typography variant="h6" component="h6">Manage invitations</Typography>}
                                />
                            </Paper>
                            <Paper sx={{ marginTop: 2, borderRadius: 2 }} >
                                <Grid container >
                                    <Grid item xs={12} sm={6} md={12}>
                                        <Card>
                                            <Tabs
                                                value={selectedTab}
                                                onChange={handleTabChange}
                                                aria-label="profile tabs"
                                                variant={isSmallScreen ? "fullWidth" : "standard"}
                                            >
                                                <Tab label="Received" style={{ color: selectedTab === 0 ? 'green' : 'black' }} />
                                                <Tab label="Send" style={{ color: selectedTab === 1 ? 'green' : 'black' }} />
                                            </Tabs>
                                        </Card>
                                        <Card sx={{ marginTop: '10px' }}>
                                            {
                                                selectedTab == 0 && <ReceivedInvitation />
                                            }
                                            {
                                                selectedTab == 1 && <SendInvitation />
                                            }
                                        </Card>
                                    </Grid>
                                </Grid>
                            </Paper>

                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Paper sx={{ borderRadius: 2 }} >
                                <CardHeader
                                    title={<Typography variant="h6" component="h6">Invitations</Typography>}
                                />
                            </Paper>
                            <Paper sx={{ marginTop: 2, borderRadius: 2 }} >

                                <Grid container spacing={3} my={2} justifyContent="center">
                                    dsfdsf
                                </Grid>
                            </Paper>

                        </Grid>
                    </Grid>
                </Box>
            </Container>


        </>
    )
}

export default ManagerInvitation