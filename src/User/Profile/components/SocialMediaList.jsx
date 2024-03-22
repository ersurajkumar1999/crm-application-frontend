import * as React from 'react';

import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import {
    Box, List, CardHeader, ListItem, ListItemAvatar, ListItemText, Avatar,
    IconButton, Grid, Typography
} from '@mui/material';
import { IoMdAdd } from "react-icons/io";
import SocialMediaModel from './SocialMediaModel';
import { socialMediaSchema } from '../../../schemas/FormSchemas';
import { useFormik } from 'formik';
import { getProfile, updateSocialMedia } from '../../../services/CommonServices';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setProfileData } from '../../../store/slices/profileSlice';
import { CalculateDateTime } from '../../../helpers/CalculateDateTime';
function generate(element) {
    return [0, 1, 2].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

export default function SocialMediaList() {
    const dispatch = useDispatch();
    const { profileData } = useSelector((state) => state.profile);
    console.log("profileDataprofileData==>", profileData);
    const headerSX = {
        '& .MuiCardHeader-action': { mr: 0 }
    };
    const handleSocialMediaLink = () => {
        handleClickOpen();
        console.log("handleSocialMediaLink==>");
    }
    const [open, setOpen] = React.useState(false);


    const platforms = [
        "Facebook", "Instagram", "Twitter", "LinkedIn", // Social Networking
        "YouTube", // Video Sharing
        "Threads", "Snapchat", "Telegram", 'Pinterest',// Messaging
        "GitHub" // Software Development Collaboration
    ];
    const initialValues = {
        id: null,
        platform: "platform",
        link: "link",
        visibility: "visibility"
    };
    const {
        errors,
        handleChange,
        handleSubmit, handleBlur,
        touched, isSubmitting,
        values, resetForm
    } = useFormik({
        initialValues,
        validationSchema: socialMediaSchema,
        onSubmit: async (values, { setSubmitting }) => {
            setSubmitting(true);
            try {
                console.log("values==>onSubmit", values);
                const response = await updateSocialMedia(values);
                if (response.status) {
                    getProfileData();
                }
                handleClose()
                console.log("response==>", response);
            } catch (error) {
                console.error("Error checking username existence:", error);
            } finally {
                // setSubmitting(false);
            }
        },
    });
    const getProfileData = async () => {
        dispatch(setLoading(true));
        try {
            const response = await getProfile();
            if (response.status) {
                dispatch(setProfileData(response?.data?.data ?? null))
            }
        } catch (error) {
            console.log("Error getting profile", error);
        }
        dispatch(setLoading(false));
    }

    const handleClickOpen = () => { resetForm(); setOpen(true) };
    const handleClose = () => { resetForm(); setOpen(false) };
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                    <CardHeader
                        sx={headerSX}
                        title={<Typography variant="h6" component="h6">Invitations</Typography>}
                        action={<IconButton edge="end" aria-label="delete"
                            sx={{
                                margin: '4px',
                                padding: '8px'
                            }}
                            onClick={handleSocialMediaLink}
                        >
                            <IoMdAdd />
                        </IconButton>}
                    />
                    <List>
                        {
                            profileData?.socials.length > 0 && profileData?.socials.map((social) => (
                                <ListItem key={social._id}
                                    secondaryAction={
                                        <>
                                            <IconButton edge="end" aria-label="delete"
                                                sx={{
                                                    margin: '4px',
                                                    padding: '8px'
                                                }}>
                                                <DeleteIcon />
                                            </IconButton>
                                            <IconButton edge="end" aria-label="delete"
                                                onClick={() => InvitationAccept(user.requester._id)}
                                                sx={{
                                                    margin: '4px',
                                                    padding: '8px'
                                                }}
                                            >
                                                <DeleteIcon />
                                            </IconButton>
                                        </>
                                    }
                                >
                                    <ListItemAvatar>
                                        <Avatar>
                                            <FolderIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={social.platform}
                                        secondary={'Updated: ' + CalculateDateTime(social.updatedAt)}
                                    />
                                </ListItem>
                            ))
                        }
                    </List>
                    <SocialMediaModel
                        handleClose={handleClose}
                        open={open}
                        errors={errors}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        handleBlur={handleBlur}
                        touched={touched}
                        isSubmitting={isSubmitting}
                        values={values}
                        platforms={platforms}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}