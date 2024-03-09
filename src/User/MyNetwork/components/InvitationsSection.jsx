import { Button, Card, CardContent, CardHeader, Grid, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import ConnectionCard from './ConnectionCard'
import { IoIosSettings } from "react-icons/io";

const InvitationsSection = () => {
   
    return (
        <>
            <Grid item xs={12} sm={6} md={8}>
                <Paper sx={{ borderRadius: 2 }} >
                    <CardHeader
                        title={<Typography variant="h6" component="h6">Invitations</Typography>}
                        action={<Button variant="contained"  startIcon={<IoIosSettings />}>Manage</Button>} // include the header action here
                    />
                </Paper>
                <Paper sx={{ marginTop: 2, borderRadius: 2 }} >
                   
                    <Grid container spacing={3} my={2} justifyContent="center">
                        <ConnectionCard />
                    </Grid>
                </Paper>

            </Grid>
        </>
    )
}

export default InvitationsSection