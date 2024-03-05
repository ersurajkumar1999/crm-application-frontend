import { Container, Grid, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <Paper
            sx={{
                width: '100%'
            }}
        >
            <Container  sx={{ mt: 5 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6} sm={3} md={3}>
                        <Typography variant="h6" fontWeight={'600'}>Features</Typography>

                        <Stack spacing={2} my={3}>
                            <Link to={"#"}>List One</Link>
                            <Link to={"#"}>List Two</Link>
                            <Link to={"#"}>List Three</Link>
                            <Link to={"#"}>List Four</Link>
                            <Link to={"#"}>List Five</Link>
                            <Link to={"#"}>List Six</Link>
                        </Stack>
                    </Grid>

                    <Grid item xs={6} sm={3} md={3}>
                        <Typography variant="h6" fontWeight={'600'}>Explore</Typography>

                        <Stack spacing={2} my={3}>
                            <Link to={"#"}>List One</Link>
                            <Link to={"#"}>List Two</Link>
                            <Link to={"#"}>List Three</Link>
                            <Link to={"#"}>List Four</Link>
                            <Link to={"#"}>List Five</Link>
                            <Link to={"#"}>List Six</Link>
                        </Stack>
                    </Grid>

                    <Grid item xs={6} sm={3} md={3}>
                        <Typography variant="h6" fontWeight={'600'}>Community</Typography>

                        <Stack spacing={2} my={3}>
                            <Link to={"#"}>List One</Link>
                            <Link to={"#"}>List Two</Link>
                            <Link to={"#"}>List Three</Link>
                            <Link to={"#"}>List Four</Link>
                            <Link to={"#"}>List Five</Link>
                            <Link to={"#"}>List Six</Link>
                        </Stack>
                    </Grid>

                    <Grid item xs={6} sm={3} md={3}>
                        <Typography variant="h6" fontWeight={'600'}>Download</Typography>
                        <Stack spacing={2} my={3}>
                            <Link to={"#"}>List One</Link>
                            <Link to={"#"}>List Two</Link>
                            <Link to={"#"}>List Three</Link>
                            <Link to={"#"}>List Four</Link>
                            <Link to={"#"}>List Five</Link>
                            <Link to={"#"}>List Six</Link>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Paper>
    )
}

export default Footer
