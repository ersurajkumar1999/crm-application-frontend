import React from 'react'
import {
    Grid, Typography, Box, Accordion,
    AccordionSummary, AccordionDetails, Button, Paper, InputLabel, TextField, CircularProgress
} from "@mui/material";
import { TbLayoutNavbarCollapse } from "react-icons/tb";
import { useFormik } from "formik";
import { editProfileSchema } from '../../../schemas/FormSchemas';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../../../services/CommonServices';
import { setProfileData } from '../../../store/slices/profileSlice';
import { ToastErrorMessage, ToastSuccessMessage } from '../../../components/common/ToastMessageService';

const PersonalInformation = ({ expanded, handlePanelChange }) => {

    const { profileData } = useSelector((state) => state.profile);
    const dispatch = useDispatch();
    const initialValues = {
        firstName: profileData?.profile?.firstName || null,
        lastName: profileData?.profile?.lastName || null,
        displayName: profileData?.profile?.displayName || null,
    };
    const {
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        touched, isSubmitting,
        values
    } = useFormik({
        initialValues,
        validationSchema: editProfileSchema,
        onSubmit: async (values, { setSubmitting }) => {
            const data = {
                firstName: values.firstName,
                lastName: values.lastName,
                displayName: values.displayName
            };
            try {
                setSubmitting(true);
                const response = await updateProfile(data);
                if (!response.status) {
                    ToastErrorMessage(response.data.message);
                }
                if (!response.data.status) {
                    ToastErrorMessage(response.data.message);
                }
                ToastSuccessMessage(response?.data?.message);
                dispatch(setProfileData(response?.data?.data ?? null))
            } catch (error) {
                ToastErrorMessage(error);
            } finally {
                setSubmitting(false);
            }
        },
    });


    return (
        <Accordion elevation={1} sx={{ mb: 2 }} expanded={expanded === 'panel1'} onChange={handlePanelChange('panel1')}>
            <AccordionSummary sx={{ borderBottom: 1, borderColor: 'divider' }}
                expandIcon={<TbLayoutNavbarCollapse fontSize='20px' />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <Typography variant="h6">Personal Information</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: '#f5f5f5' }}>
                <Paper elevation={3}>
                    <Box sx={{ padding: 5 }} component="form" onSubmit={handleSubmit} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <InputLabel htmlFor="firstName">First Name</InputLabel>
                                <TextField
                                    id="firstName"
                                    variant="outlined"
                                    fullWidth
                                    size="small"
                                    placeholder='First Name'
                                    color='secondary'
                                    name="firstName"
                                    value={values.firstName}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    error={touched.firstName && !!errors.firstName}
                                    helperText={touched.firstName && errors.firstName}
                                    disabled={isSubmitting}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <InputLabel htmlFor="lastName">Last Name</InputLabel>
                                <TextField
                                    id="lastName"
                                    variant="outlined"
                                    placeholder='Last Name'
                                    fullWidth
                                    size="small"
                                    color='secondary'
                                    name="lastName"
                                    onBlur={handleBlur}
                                    value={values.lastName}
                                    onChange={handleChange}
                                    error={touched.lastName && !!errors.lastName}
                                    helperText={touched.lastName && errors.lastName}
                                    disabled={isSubmitting}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <InputLabel htmlFor="displayName">Display Name</InputLabel>
                                <TextField
                                    id="displayName"
                                    variant="outlined"
                                    fullWidth
                                    size="small"
                                    placeholder='Display Name'
                                    color='secondary'
                                    name="displayName"
                                    onBlur={handleBlur}
                                    value={values.displayName}
                                    onChange={handleChange}
                                    error={touched.displayName && !!errors.displayName}
                                    helperText={touched.displayName && errors.displayName}
                                    disabled={isSubmitting}
                                />
                            </Grid>
                            <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? <CircularProgress size={24} /> : 'Submit'}
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
            </AccordionDetails>
        </Accordion>
    )
}

export default PersonalInformation