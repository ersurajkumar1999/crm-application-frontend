import {
    Button, Divider, Grid, IconButton, InputLabel, Stack, TextField, Typography,
    Dialog, DialogActions, DialogContent,
    DialogTitle
} from '@mui/material'
import PreLoader from '../../../components/common/PreLoader';
import { useSelector } from 'react-redux';
import { FaCamera } from "react-icons/fa";
import { useRef, useState } from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5';

const ProfileInformation = () => {
    const { profileData, isLoading } = useSelector((state) => state.profile);
    const bannerImage = "https://ik.imagekit.io/hydlcbl5qlg/public/misc/KsrVAKsM9bH38aMVNsuSX5Fn8Gx7ym5ZOgYtfE8n.jpg";
    // const profileImage = "https://ik.imagekit.io/hydlcbl5qlg/public/misc/ew0pzkUKnYUMr6ukvIyjrcgztGyCjEicw1jETe9n.jpg";
    const [profileImage, setProfileImage] = useState("https://ik.imagekit.io/hydlcbl5qlg/public/misc/ew0pzkUKnYUMr6ukvIyjrcgztGyCjEicw1jETe9n.jpg");
    const [image, setImage] = useState(null);
    const inputFileRef = useRef(null); // Add ref for file input

    const handleProfileImageChange = (event) => {
        console.log("handleProfileImageChange==>");
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            handleClickOpen();
            setImage(imageUrl);
        }
    };

    const handleClickCameraIcon = () => {
        inputFileRef.current.click(); // Trigger file input click
    };

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            {isLoading ?
                <PreLoader />
                : (
                    <>
                        <Grid item xs={12} sm={6} md={12}>
                            <Stack sx={{
                                height: '200px',
                                width: '100%'
                            }}>
                                <img height={'100%'} width={'100%'} src={bannerImage} alt="" />
                                {/* <Button variant="contained" > <FaCamera color='black' /></Button> */}
                            </Stack>
                            <Stack sx={{
                                // height: '150px',
                                width: '150px',
                                margin: '0 auto',
                                borderRadius: 4
                            }}>
                                <img style={{
                                    borderRadius: '50%',
                                    height: '100%',
                                    width: '100%',
                                    marginTop: '-50%',
                                    border: '10px solid white'
                                }} src={profileImage} alt="" />
                            </Stack>
                            <Stack sx={{
                                // height: '150px',
                                width: '0px',
                                margin: '0 auto',
                                borderRadius: 4
                            }}>
                                <input
                                    ref={inputFileRef}
                                    accept="image/*"
                                    style={{ display: 'none' }}
                                    id="profile-image-input"
                                    type="file"
                                    onChange={handleProfileImageChange}
                                />
                                {/* <label htmlFor="profile-image-input">
                                <img
                                    style={{
                                        borderRadius: '50%',
                                        height: '100%',
                                        width: '100%',
                                        marginTop: '-50%',
                                        border: '10px solid white',
                                        cursor: 'pointer'
                                    }}
                                    src={profileImage}
                                    alt=""
                                />
                            </label> */}
                                <FaCamera
                                    onClick={handleClickCameraIcon}
                                    style={{
                                        marginTop: '-30px',
                                        marginLeft: '20px',
                                        fontSize: '20px',
                                        cursor: 'pointer',
                                    }}
                                />
                            </Stack>
                        </Grid>
                        <Divider />
                        <Grid item xs={12} sm={6} md={12}>
                            <Stack >
                                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{profileData?.profile?.firstName} {profileData?.profile?.lastName}</Typography>
                                <Typography variant="body1">{profileData?.profile?.about ?? 'N/A'}</Typography>
                            </Stack>
                        </Grid>
                        <Divider />
                        <Grid item xs={12} sm={6} md={12}>
                            <Stack >
                                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>BIO</Typography>
                                <Typography >At BYO Shami Inn in Manali, guests can choose from deluxe rooms and superior double rooms.
                                    Each room offers either a mountain view or a city view.</Typography>
                            </Stack>
                        </Grid>
                        <Divider />
                        <Grid item xs={12} sm={6} md={12}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Social Information</Typography>
                            <Stack >
                                <Typography >At BYO Shami Inn in Manali, guests can choose from deluxe rooms and superior double rooms.
                                    Each room offers either a mountain view or a city view.</Typography>
                            </Stack>
                        </Grid>
                        <Divider />
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
                                                src={image}
                                                alt="Profile"
                                            />
                                           

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
                    </>
                )}
        </>
    );
};

export default ProfileInformation;
