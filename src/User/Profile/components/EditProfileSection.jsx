import React from 'react'
import {
    Grid, Typography, CardContent, Box, Accordion,
    AccordionSummary, AccordionDetails, Button, Container, Paper, InputLabel, TextField
} from "@mui/material";
import { TbLayoutNavbarCollapse } from "react-icons/tb";
import { useFormik } from "formik";
import { editProfileSchema } from '../../../schemas/FormSchemas';
const EditProfileSection = () => {
    const initialValues = {
        firstName: "",
        lastName: "",
    };
    const {
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        touched, isSubmitting,
        values, resetForm
    } = useFormik({
        initialValues,
        validationSchema: editProfileSchema,
        onSubmit: async (values, { setSubmitting }) => {
            const data = {
                firstName: values.firstName,
                lastName: values.lastName,
            };
            console.log("data==>", data);
            // try {
            //     setSubmitting(true);
            //     const response = await userLogin(data);
            //     console.log("response==>", response);
            // } catch (error) {
            //     dispatch(setError(error))
            // } finally {
            //     setSubmitting(false);
            // }
        },
    });


    return (
        <Grid container spacing={3}  >
            <Grid item xs={12} sm={12} md={12}>
                <CardContent>
                    <Accordion elevation={1} sx={{ mb: 2 }}>
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
                                        {/* <Grid item xs={12}>
                                            <InputLabel htmlFor="email">Email</InputLabel>
                                            <TextField
                                                id="email"
                                                variant="outlined"
                                                fullWidth
                                                color='secondary'
                                                name="email"
                                                size="small"
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                        </Grid> */}
                                        <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
                                            <Button type="submit" variant="contained" color="primary">
                                                Submit
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Paper>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion elevation={1} sx={{ mb: 2 }}>
                        <AccordionSummary sx={{ borderBottom: 1, borderColor: 'divider' }}
                            expandIcon={<TbLayoutNavbarCollapse fontSize='20px' />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                            <Typography variant="h6">Personal Information</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ backgroundColor: '#f5f5f5' }}>
                            <Box sx={{ m: 2 }}>
                                <Container >
                                    <Grid container spacing={2}>
                                        hiii
                                    </Grid>
                                    <Grid container spacing={2} sx={{ marginTop: 2 }}>
                                        helllll
                                    </Grid>
                                </Container>
                            </Box>
                        </AccordionDetails>
                    </Accordion>

                </CardContent>

            </Grid>
        </Grid>
    )
}

export default EditProfileSection