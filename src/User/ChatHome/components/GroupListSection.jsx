import {
    Avatar, Box, Button, Card, CardContent, Divider, Grid, IconButton, InputLabel, List, ListItem,
    ListItemAvatar, ListItemButton, ListItemText, Paper, Stack, TextField
} from '@mui/material'
import React, { useState } from 'react'
import SearchSection from './SearchSection';
import { CiCamera } from "react-icons/ci";

import {
    Dialog, DialogActions, DialogContent,
    DialogTitle
} from '@mui/material';
import { IoCloseCircleOutline } from 'react-icons/io5';
import UserChatListSection from './UserChatListSection';
import { FaCamera } from 'react-icons/fa';

const GroupListSection = () => {

    // const profileImage = "https://ik.imagekit.io/hydlcbl5qlg/public/misc/ew0pzkUKnYUMr6ukvIyjrcgztGyCjEicw1jETe9n.jpg";
    const users = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const [selectedIndex, setSelectedIndex] = useState(0);
    const handleListItemClick = () => {
        console.log("handleListItemClick");
    }

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const [profileImage, setProfileImage] = useState("https://ik.imagekit.io/hydlcbl5qlg/public/misc/ew0pzkUKnYUMr6ukvIyjrcgztGyCjEicw1jETe9n.jpg");

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    return (
        <Card>
            <CardContent>
                <SearchSection title={"Search Group"} isGroup={true} handleClickOpen={handleClickOpen} />
                <Box sx={{ width: '100%', mt: 2, maxWidth: '100%', height: '400px', overflow: 'auto', bgcolor: 'background.paper' }}>
                    <List component="nav" aria-label="main mailbox folders" >
                        <Divider />
                        {
                            users.map((user, index) => (
                                <>
                                    <ListItemButton

                                        key={user}
                                        selected={selectedIndex === index}
                                        onClick={(event) => handleListItemClick(event, index)}
                                    >
                                        <ListItemAvatar>
                                            <Avatar alt="Remy Sharp" src="https://avatars.githubusercontent.com/u/146355358?v=4" />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={"Hello"}
                                            secondary={
                                                <>
                                                    {'this is last msg'}
                                                    <ListItem disableGutters secondaryAction={"1 day ago"} ></ListItem>
                                                </>
                                            }
                                        />
                                    </ListItemButton>
                                    <Divider />
                                </>
                            ))
                        }
                    </List>
                </Box>
            </CardContent>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
               
            >
                <DialogTitle sx={{ m: 0, p: 2, fontWeight: 'bold' }} id="customized-dialog-title">
                    Create A Group
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <IoCloseCircleOutline />
                </IconButton>
                <Divider />
                <DialogContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Stack sx={{
                                width: '150px',
                                height: '150px',
                                margin: '0 auto',
                                borderRadius: 4,
                                marginTop: '10%'
                            }}>
                                <img
                                    style={{
                                        borderRadius: '50%',
                                        height: '100%',
                                        width: '100%',
                                        marginTop: '-50%',
                                        border: '10px solid white'
                                    }}
                                    src={profileImage}
                                    alt="Profile"
                                />
                                <Button
                                    variant="contained"
                                    color="primary"
                                    component="label"
                                    htmlFor="upload-image"
                                    sx={{
                                        boxShadow: 'none',
                                        marginTop: '-40px',
                                        marginLeft: '50%',
                                        textAlign: 'center',
                                        backgroundColor: 'transparent', // Set background color to transparent
                                        '&:hover': {
                                            boxShadow: 'none', // Override box shadow on hover
                                            backgroundColor: 'transparent' // Set background color to transparent on hover
                                        }
                                    }}
                                    startIcon={<FaCamera />}
                                >

                                    <input
                                        type="file"
                                        id="upload-image"
                                        accept="image/*"
                                        capture="camera"
                                        style={{ display: 'none' }}
                                        onChange={handleImageChange}
                                    />
                                </Button>

                            </Stack>
                        </Grid>
                        <Grid item xs={12}>
                            <InputLabel htmlFor="oldPassword">Group Name</InputLabel>
                            <TextField
                                id="oldPassword"
                                variant="outlined"
                                fullWidth
                                size="small"
                                placeholder='Group Name'
                                color='secondary'
                                name="oldPassword"
                                value={''}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <InputLabel htmlFor="newPassword">Add Users</InputLabel>
                            <UserChatListSection />
                        </Grid>
                    </Grid>
                </DialogContent>
                <Divider />
                <DialogActions>
                    <Button onClick={handleClose} variant="contained">Cancel</Button>
                    <Button onClick={handleClose} autoFocus variant="contained">
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
        </Card>
    )
}

export default GroupListSection