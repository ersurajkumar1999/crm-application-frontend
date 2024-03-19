import React from 'react'
import {
    Grid, Typography, Box, Accordion,
    AccordionSummary, AccordionDetails, Button, Paper, InputLabel, TextField, CircularProgress, Autocomplete
} from "@mui/material";

import { TbLayoutNavbarCollapse } from "react-icons/tb";
import { useFormik } from "formik";
import { addressInformationSchema } from '../../../schemas/FormSchemas';

const AddressInformation = ({ expanded, handlePanelChange }) => {

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
        validationSchema: addressInformationSchema,
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
    const top100Films = [
        { label: 'The Shawshank Redemption', year: 1994 },
        { label: 'The Godfather', year: 1972 },
        { label: 'The Godfather: Part II', year: 1974 },
        { label: 'The Dark Knight', year: 2008 },
        { label: '12 Angry Men', year: 1957 },
        { label: "Schindler's List", year: 1993 },
        { label: 'Pulp Fiction', year: 1994 },
    ];
    return (
        <Accordion elevation={1} sx={{ mb: 2 }} expanded={expanded === 'panel3'} onChange={handlePanelChange('panel3')}>
            <AccordionSummary sx={{ borderBottom: 1, borderColor: 'divider' }}
                expandIcon={<TbLayoutNavbarCollapse fontSize='20px' />}
                aria-controls="panel2-content"
                id="panel2-header"
            >
                <Typography variant="h6">Address Information</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: '#f5f5f5' }}>
                <Paper elevation={3}>
                    <Box sx={{ padding: 5 }} component="form" onSubmit={handleSubmit} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <InputLabel htmlFor="oldPassword">Country</InputLabel>
                                <Autocomplete
                                    disablePortal
                                    fullWidth
                                    id="combo-box-demo"
                                    variant="outlined"
                                    size="small"
                                    color='secondary'
                                    options={top100Films}
                                    renderInput={(params) => <TextField color='secondary' {...params} />}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <InputLabel htmlFor="newPassword">State</InputLabel>
                                <Autocomplete
                                    disablePortal
                                    fullWidth
                                    id="combo-box-demo"
                                    variant="outlined"
                                    size="small"
                                    color='secondary'
                                    options={top100Films}
                                    renderInput={(params) => <TextField color='secondary' {...params} />}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <InputLabel htmlFor="confirmPassword">City</InputLabel>
                                <Autocomplete
                                    disablePortal
                                    fullWidth
                                    id="combo-box-demo"
                                    variant="outlined"
                                    size="small"
                                    color='secondary'
                                    options={top100Films}
                                    renderInput={(params) => <TextField color='secondary' {...params} />}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <InputLabel htmlFor="address1">Address Line 1</InputLabel>
                                <TextField
                                    id="address1"
                                    variant="outlined"
                                    fullWidth
                                    size="small"
                                    color='secondary'
                                    name="address1"
                                    placeholder='Address Line 1'
                                    value={values.address1}
                                    onBlur={handleBlur} // Trigger username check on blur
                                    onChange={handleChange}
                                    error={touched.address1 && (!!errors.address1)}
                                    helperText={(touched.address1 && errors.address1)}
                                    disabled={isSubmitting}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <InputLabel htmlFor="address2">Address Line 2</InputLabel>
                                <TextField
                                    id="address2"
                                    variant="outlined"
                                    fullWidth
                                    size="small"
                                    color='secondary'
                                    name="address2"
                                    placeholder='Address Line 2'
                                    value={values.address2}
                                    onBlur={handleBlur} // Trigger username check on blur
                                    onChange={handleChange}
                                    error={touched.address2 && (!!errors.address2)}
                                    helperText={(touched.address2 && errors.address2)}
                                    disabled={isSubmitting}

                                />
                            </Grid>
                            <Grid item xs={12}>
                                <InputLabel htmlFor="pinCode">Pin Code</InputLabel>
                                <TextField
                                    id="pinCode"
                                    variant="outlined"
                                    fullWidth
                                    size="small"
                                    color='secondary'
                                    name="pinCode"
                                    placeholder='Pin Code'
                                    value={values.pinCode}
                                    onBlur={handleBlur} // Trigger username check on blur
                                    onChange={handleChange}
                                    error={touched.pinCode && (!!errors.pinCode)}
                                    helperText={(touched.pinCode && errors.pinCode)}
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

export default AddressInformation