import { Grid, Paper, Stack } from '@mui/material'
import React from 'react'

const MyNetworkInformation = () => {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ padding: 2, borderRadius: 2 }} >
                <Stack spacing={3}>
                    <div>MyNetworkInformation</div>
                </Stack>
            </Paper>
        </Grid>
    )
}

export default MyNetworkInformation