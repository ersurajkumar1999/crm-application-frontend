import { Avatar, Box, Card, CardHeader, Divider, Grid, IconButton, Menu, MenuItem, Stack, TextField, Typography, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import MessageHistory from './MessageHistory';
import { MdAddCall, MdOutlineStarBorder, MdSend } from 'react-icons/md';
import { FaVideo } from 'react-icons/fa';
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useTheme } from '@emotion/react';
import { IoArrowBackSharp } from 'react-icons/io5';

const ChatWindow = ({ activeUser }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const handleMenuClick = (event) => setAnchorEl(event.currentTarget);
    const handleMenuClose = () => setAnchorEl(null);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    console.log("isMobile==>", isMobile);
    console.log("activeUser==>", activeUser);
    return (
        <Grid item xs={12} sm={6} md={8} >
            <Grid container spacing={3}>
                <Grid item xs={12} md={12}>
                    {activeUser ? (
                        <Card variant="outlined">
                            <CardHeader
                                title={
                                    <>
                                        <IconButton sx={{ height: '50px', width: '50px', flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                                            <Typography startIcon={<IoArrowBackSharp />} ><IoArrowBackSharp fontSize={'25'} /> </Typography>
                                        </IconButton>
                                        <IconButton >
                                            <Avatar />
                                        </IconButton>
                                        <Stack sx={{ fontSize: '10px' }}>
                                            <Typography variant="h6" fontWeight={'bold'}>
                                                John Doe
                                            </Typography>
                                            <Typography variant="body1" >
                                                Last seen 22h ago
                                            </Typography>
                                        </Stack>
                                    </>
                                }
                                action={
                                    <>
                                        <IconButton >
                                            <FaVideo />
                                        </IconButton>
                                        <IconButton >
                                            <MdOutlineStarBorder />
                                        </IconButton>
                                        <IconButton >
                                            <MdAddCall />
                                        </IconButton>
                                        <IconButton aria-label="settings" onClick={handleMenuClick}>
                                            <HiOutlineDotsVertical />
                                        </IconButton>
                                        <Menu
                                            anchorEl={anchorEl}
                                            open={Boolean(anchorEl)}
                                            onClose={handleMenuClose}
                                        >
                                            <MenuItem >View Profile</MenuItem>
                                            <MenuItem >Clear Chat</MenuItem>
                                            <MenuItem >Block </MenuItem>
                                        </Menu>
                                    </>
                                }

                            />
                            <Divider />
                            <MessageHistory />

                            <Divider />

                            <Box sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
                                <TextField
                                    fullWidth
                                    color='secondary'
                                    variant="outlined"
                                    placeholder="Type your message..."

                                />
                                <IconButton aria-label="send message" sx={{ ml: 1 }}>
                                    <MdSend />
                                </IconButton>
                            </Box>
                        </Card>) : (
                        <>
                            {
                                !isMobile && <Typography variant="h3" style={{ textAlign: 'center', marginTop: "20%" }}>
                                    <Card variant="outlined">
                                        User Not selected
                                    </Card>
                                </Typography>

                            }
                        </>
                    )}

                </Grid>
            </Grid>
        </Grid>
    )
}

export default ChatWindow