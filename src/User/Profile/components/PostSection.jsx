import React from 'react'
import {
    Grid, Typography, CardHeader, CardContent
} from "@mui/material";
const PostSection = () => {
    return (
        <Grid container spacing={3}  >
            <Grid item xs={12} sm={12} md={12}>
                <CardHeader
                    title={<Typography variant="h6" component="h6">Post Information</Typography>}
                />
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Word of t he DayWord of the DayWord of the DayWord of the DayWord ohe DayWord of the DayWord of the DayWord of the DayWord of the DayWord of the DayWord of the DayWord of the Day
                    </Typography>
                    
                </CardContent>

            </Grid>
        </Grid>
    )
}

export default PostSection