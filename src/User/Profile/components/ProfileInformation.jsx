import {
    Button, Divider, Grid, IconButton, InputLabel, Stack, TextField, Typography,
    Dialog, DialogActions, DialogContent,
    DialogTitle,
    Box, Slider
} from '@mui/material'
import PreLoader from '../../../components/common/PreLoader';
import { useSelector } from 'react-redux';
import { FaCamera } from "react-icons/fa";
import { useRef, useState } from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5';
import Cropper from 'react-easy-crop'

import { Cancel } from '@mui/icons-material';
import CropIcon from '@mui/icons-material/Crop';

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


    // const { setAlert, setLoading } = useAuth();
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [rotation, setRotation] = useState(0);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

    const cropComplete = (croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels);
    };

    const cropImage = async () => {
        // setLoading(true);
        try {
            const { file, url } = await getCroppedImg(
                photoURL,
                croppedAreaPixels,
                rotation
            );
            setPhotoURL(url);
            setFile(file);
            setOpenCrop(false);
        } catch (error) {
            // setAlert({
            //     isAlert: true,
            //     severity: 'error',
            //     message: error.message,
            //     timeout: 5000,
            //     location: 'modal',
            // });
            console.log(error);
        }

        // setLoading(false);
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
                                Crop Profile Photo
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
                            <DialogContent
                                dividers
                                sx={{
                                    background: '#333',
                                    position: 'relative',
                                    height: 400,
                                    width: 'auto',
                                    minWidth: { sm: 500 },
                                }}>



                                <Stack sx={{
                                    width: '150px',
                                    height: '150px',
                                    margin: '0 auto',
                                    borderRadius: 4,
                                    marginTop: '10%'
                                }}>
                                    <Cropper
                                        image={image}
                                        crop={crop}
                                        zoom={zoom}
                                        rotation={rotation}
                                        aspect={1}
                                        onZoomChange={setZoom}
                                        onRotationChange={setRotation}
                                        onCropChange={setCrop}
                                        onCropComplete={cropComplete}
                                    />
                                </Stack>

                            </DialogContent>
                            <Divider />
                            <DialogActions sx={{ flexDirection: 'column', mx: 3, my: 2 }}>
                                <Box sx={{ width: '100%', mb: 1 }}>
                                    <Box>
                                        <Typography>Zoom: {zoomPercent(zoom)}</Typography>
                                        <Slider
                                            valueLabelDisplay="auto"
                                            valueLabelFormat={zoomPercent}
                                            min={1}
                                            max={3}
                                            variant="red"
                                            step={0.1}
                                            value={zoom}
                                            onChange={(e, zoom) => setZoom(zoom)}
                                        />
                                    </Box>
                                    <Box>
                                        <Typography>Rotation: {rotation + '°'}</Typography>
                                        <Slider
                                            valueLabelDisplay="auto"
                                            min={0}
                                            max={360}
                                            value={rotation}
                                            onChange={(e, rotation) => setRotation(rotation)}
                                        />
                                    </Box>
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        gap: 2,
                                        flexWrap: 'wrap',

                                    }}
                                >
                                    <Button
                                        variant="contained"
                                        startIcon={<Cancel />}
                                        sx={{ float: 'right' }}
                                        onClick={() => setOpenCrop(false)}
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                     sx={{ float: 'right' }}
                                        variant="contained"
                                        startIcon={<CropIcon />}
                                        onClick={cropImage}
                                    >
                                        Crop
                                    </Button>
                                </Box>
                            </DialogActions>
                        </Dialog>
                    </>
                )}
        </>
    );
};

export default ProfileInformation;

const zoomPercent = (value) => {
    return `${Math.round(value * 100)}%`;
};
