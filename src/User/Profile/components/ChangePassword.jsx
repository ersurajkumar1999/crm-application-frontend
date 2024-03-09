import React, { useRef, useState } from 'react';
import {
    Grid, Typography, Box, Accordion,
    AccordionSummary, AccordionDetails, Button, Paper, InputLabel, TextField, CircularProgress
} from "@mui/material";
import { TbLayoutNavbarCollapse } from "react-icons/tb";
import { useFormik } from "formik";
import { changePasswordSchema } from '../../../schemas/FormSchemas';

const ChangePassword = ({ expanded, handlePanelChange }) => {
    const accordionDetailsRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);
    const initialValues = {
        oldPassword: "",
        newPassword: "",
        confirmPassword: ""
    };
    const {
        errors,
        handleChange,
        handleSubmit, handleBlur,
        touched, isSubmitting,
        values, resetForm
    } = useFormik({
        initialValues,
        validationSchema: changePasswordSchema,
        onSubmit: async (values, { setSubmitting }) => {
            setSubmitting(true);
            try {
                console.log("values==>onSubmit", values);
            } catch (error) {
                console.error("Error checking username existence:", error);
            } finally {
                // setSubmitting(false);
            }
        },
    });
    return (
        <Accordion elevation={1} sx={{ mb: 2 }} expanded={expanded === 'panel3'} onChange={handlePanelChange('panel3')}>
            <AccordionSummary sx={{ borderBottom: 1, borderColor: 'divider' }}
                expandIcon={<TbLayoutNavbarCollapse fontSize='20px' />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <Typography variant="h6">Change Password</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: '#f5f5f5' }}>
                <Paper elevation={3}>
                    <Box sx={{ padding: 5 }} component="form" onSubmit={handleSubmit} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <InputLabel htmlFor="oldPassword">Old Password</InputLabel>
                                <TextField
                                    id="oldPassword"
                                    variant="outlined"
                                    fullWidth
                                    size="small"
                                    placeholder='Old Password'
                                    color='secondary'
                                    name="oldPassword"
                                    value={values.oldPassword}
                                    onBlur={handleBlur} // Trigger username check on blur
                                    onChange={handleChange}
                                    error={touched.oldPassword && (!!errors.oldPassword)}
                                    helperText={(touched.oldPassword && errors.oldPassword)}
                                    disabled={isSubmitting}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <InputLabel htmlFor="newPassword">New Password</InputLabel>
                                <TextField
                                    id="newPassword"
                                    variant="outlined"
                                    fullWidth
                                    size="small"
                                    color='secondary'
                                    name="newPassword"
                                    placeholder='New Password'
                                    value={values.newPassword}
                                    onBlur={handleBlur} // Trigger username check on blur
                                    onChange={handleChange}
                                    error={touched.newPassword && (!!errors.newPassword)}
                                    helperText={(touched.newPassword && errors.newPassword)}
                                    disabled={isSubmitting}

                                />
                            </Grid>
                            <Grid item xs={12}>
                                <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
                                <TextField
                                    id="confirmPassword"
                                    variant="outlined"
                                    fullWidth
                                    size="small"
                                    color='secondary'
                                    placeholder='Confirm Password'
                                    name="confirmPassword"
                                    value={values.confirmPassword}
                                    onBlur={handleBlur} // Trigger username check on blur
                                    onChange={handleChange}
                                    error={touched.confirmPassword && (!!errors.confirmPassword)}
                                    helperText={(touched.confirmPassword && errors.confirmPassword)}
                                    disabled={isSubmitting}

                                />
                            </Grid>
                            <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? <CircularProgress size={24} color="inherit" /> : 'Submit'}
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
            </AccordionDetails>
        </Accordion>
    )
}

export default ChangePassword;
