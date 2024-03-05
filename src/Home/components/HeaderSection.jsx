import React from 'react'
import {
  Typography, Grid,CardContent, Card
} from '@mui/material';
const HeaderSection = ({ name }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12} md={12}>
        <Card sx={{marginTop:'10px'}}>
          <CardContent>
            <Typography variant="h5" component="h2">
              Card
            </Typography>
            <Typography color="textSecondary">
              This is the content of card 2.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default HeaderSection