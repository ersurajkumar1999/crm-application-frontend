import React, { useState } from 'react';
import {
    Grid, Typography, Box, Accordion,
    AccordionSummary, AccordionDetails, Button, Paper, InputLabel, TextField
} from "@mui/material";
import { TbLayoutNavbarCollapse } from "react-icons/tb";
import { useFormik } from "formik";
import { userNameSchema } from '../../../schemas/FormSchemas';
import { checkUsernameExists } from '../../../services/ApiService';

const CheckUserName = ({ expanded, handlePanelChange }) => {
    const initialValues = {
        userName: "",
    };
    const [usernameExists, setUsernameExists] = useState(false); // State to track if username exists

    const {
        errors,
        handleChange,
        handleSubmit,
        touched, isSubmitting,
        values, resetForm
    } = useFormik({
        initialValues,
        validationSchema: userNameSchema,
        onSubmit: async (values, { setSubmitting }) => {
            try {
                setSubmitting(true);
                if (!usernameExists) {
                    // Username does not exist, proceed with form submission
                    const data = {
                        userName: values.userName,
                    };
                    console.log("data==>", data);
                    // You can now proceed with further form submission logic
                }
            } catch (error) {
                console.error("Error checking username existence:", error);
            } finally {
                setSubmitting(false);
            }
        },
    });

    const handleUsernameBlur = async () => {
        try {
            const response = await checkUsernameExists({ userName: values.userName });
            setUsernameExists(response?.data?.data ?? false);
        } catch (error) {
            console.error("Error checking username existence:", error);
        }
    };

    return (

        <Accordion elevation={1} expanded={expanded === 'panel1'} onChange={handlePanelChange('panel1')} sx={{ mb: 2 }}>
            <AccordionSummary sx={{ borderBottom: 1, borderColor: 'divider' }}
                expandIcon={<TbLayoutNavbarCollapse fontSize='20px' />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <Typography variant="h6">User Name Information</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: '#f5f5f5' }}>
                <Paper elevation={3}>
                    <Box sx={{ padding: 5 }} component="form" onSubmit={handleSubmit} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <InputLabel htmlFor="userName">Check User Name</InputLabel>
                                <TextField
                                    id="userName"
                                    variant="outlined"
                                    fullWidth
                                    size="small"
                                    color='secondary'
                                    name="userName"
                                    value={values.userName}
                                    onChange={handleChange}
                                    error={touched.userName && (!!errors.userName || usernameExists)}
                                    helperText={(touched.userName && errors.userName) || (usernameExists ? <span style={{ color: 'red' }}>Username already exists</span> : (values.userName) ? <span style={{ color: 'green' }}>Username available</span> : '')}
                                    disabled={isSubmitting}
                                    onBlur={handleUsernameBlur} // Trigger username check on blur

                                />
                            </Grid>
                            <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
                                <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
            </AccordionDetails>
        </Accordion>
    )
}

export default CheckUserName;