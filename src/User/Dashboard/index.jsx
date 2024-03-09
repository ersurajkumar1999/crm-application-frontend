import React from 'react';
import { Box, Button, AppBar, Toolbar, Container, Grid, Paper, Stack, Typography } from "@mui/material";
const Dashboard = () => {

    return (
        <>
            <Container sx={{ marginTop: 1 }} maxWidth="xl">
                <Box py={5} display={`flex`} flexDirection={`column`} alignItems={`center`}>
                    <Grid container spacing={3} my={2} justifyContent="center">
                        <Grid item xs={12} sm={6} md={3}>
                            <Paper
                                sx={{
                                    padding: 3,
                                    borderRadius: 4,
                                    height: '100%'
                                }}
                            >
                                <Stack spacing={3}>
                                    <Typography variant="h6" fontWeight={600}>Social Media Free</Typography>
                                    <Typography variant="body2">Today: 10</Typography>
                                </Stack>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Paper
                                sx={{
                                    padding: 3,
                                    borderRadius: 4,
                                    height: '100%'
                                }}
                            >
                                <Stack spacing={3}>
                                    <Typography variant="h6" fontWeight={600}>Social Media Free</Typography>
                                    <Typography variant="body2">Today: 10</Typography>
                                </Stack>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Paper
                                sx={{
                                    padding: 3,
                                    borderRadius: 4,
                                    height: '100%'
                                }}
                            >
                                <Stack spacing={3}>
                                    <Typography variant="h6" fontWeight={600}>Social Media Free</Typography>
                                    <Typography variant="body2">Today: 10</Typography>
                                </Stack>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Paper
                                sx={{
                                    padding: 3,
                                    borderRadius: 4,
                                    height: '100%'
                                }}
                            >
                                <Stack spacing={3}>
                                    <Typography variant="h6" fontWeight={600}>Social Media Free</Typography>
                                    <Typography variant="body2">Today: 10</Typography>
                                </Stack>
                            </Paper>
                        </Grid>
                    </Grid>
                     <Grid container spacing={3} my={2} justifyContent="center">
                        <Grid item xs={12} sm={6} md={3}>
                            <Paper
                                sx={{
                                    padding: 3,
                                    borderRadius: 4,
                                    height: '100%'
                                }}
                            >
                                <Stack spacing={3}>
                                    <Typography variant="h6" fontWeight={600}>Social Media Free</Typography>
                                    <Typography variant="body2">Today: 10</Typography>
                                </Stack>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Paper
                                sx={{
                                    padding: 3,
                                    borderRadius: 4,
                                    height: '100%'
                                }}
                            >
                                <Stack spacing={3}>
                                    <Typography variant="h6" fontWeight={600}>Social Media Free</Typography>
                                    <Typography variant="body2">Today: 10</Typography>
                                </Stack>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Paper
                                sx={{
                                    padding: 3,
                                    borderRadius: 4,
                                    height: '100%'
                                }}
                            >
                                <Stack spacing={3}>
                                    <Typography variant="h6" fontWeight={600}>Social Media Free</Typography>
                                    <Typography variant="body2">Today: 10</Typography>
                                </Stack>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Paper
                                sx={{
                                    padding: 3,
                                    borderRadius: 4,
                                    height: '100%'
                                }}
                            >
                                <Stack spacing={3}>
                                    <Typography variant="h6" fontWeight={600}>Social Media Free</Typography>
                                    <Typography variant="body2">Today: 10</Typography>
                                </Stack>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}
export default Dashboard;