import { Button, Card, CardContent, Grid, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { IoMdAddCircle } from 'react-icons/io';
import { IoPersonAddSharp } from "react-icons/io5";


const ConnectionCard = () => {
    const users = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12]
    const bannerImage = "https://ik.imagekit.io/hydlcbl5qlg/public/misc/KsrVAKsM9bH38aMVNsuSX5Fn8Gx7ym5ZOgYtfE8n.jpg";
    const profileImage = "https://ik.imagekit.io/hydlcbl5qlg/public/misc/ew0pzkUKnYUMr6ukvIyjrcgztGyCjEicw1jETe9n.jpg";
    return (
        <>
            {
                users.map((user) => (
                    <Grid key={user} item xs={6} sm={6} md={4}>
                        <Card sx={{ padding: 0 }}>
                            <CardContent>
                                <Stack sx={{
                                    height: '100px',
                                    width: '100%',
                                    padding: 0
                                }}>
                                    <img height={'100%'} width={'100%'} src={bannerImage} alt="" />
                                </Stack>
                                <Stack sx={{
                                    width: '150px',
                                    margin: '0 auto',
                                    borderRadius: 4
                                }}>
                                    <img style={{
                                        borderRadius: '50%',
                                        height: '100px',
                                        width: '100px',
                                        border: '5px solid white',
                                        margin: '0 auto',
                                        marginTop: '-50px'
                                    }} src={profileImage} alt="" />
                                </Stack>
                                <Stack >
                                    <Typography variant='h6' textAlign={'center'} fontWeight={'bold'}>hello janm</Typography>
                                    <Typography variant='body1' textAlign={'center'}>hello janm</Typography>
                                </Stack>
                                <Stack sx={{ marginTop: 2 }}>
                                    <Button variant="contained"  startIcon={<IoPersonAddSharp />}>Connect</Button>
                                    <Button variant="contained" sx={{marginTop:'10px'}} startIcon={<IoMdAddCircle  />}>Follow</Button>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                ))
            }
        </>

    )
}

export default ConnectionCard