import React from 'react';
import {
    Grid, Typography, Box, Accordion,
    AccordionSummary, AccordionDetails, Button, Paper, InputLabel, TextField, CircularProgress
} from "@mui/material";
import { TbLayoutNavbarCollapse } from "react-icons/tb";
import { useFormik } from "formik";
import { socialMediaSchema } from '../../../schemas/FormSchemas';

const SocialMediaInformation = ({ expanded, handlePanelChange }) => {
    // const initialValues = {
    //     facebook: "",
    //     youTube: "",
    //     instagram: "",
    //     twitter: "",
    //     linkedIn: "",
    //     threads: "",
    //     snapChat: "",
    //     telegram: "",
    //     gitHub: ""
    // };
    const initialValues = {
        facebook: {
            platform: "facebook",
            link: "",
            visibility: ""
        },
        youTube: {
            platform: "youTube",
            link: "",
            visibility: ""
        },
        instagram: {
            platform: "instagram",
            link: "",
            visibility: ""
        },
        twitter: {
            platform: "twitter",
            link: "",
            visibility: ""
        },
        linkedIn: {
            platform: "linkedIn",
            link: "",
            visibility: ""
        },
        threads: {
            platform: "threads",
            link: "",
            visibility: ""
        },
        snapChat: {
            platform: "snapChat",
            link: "",
            visibility: ""
        },
        telegram: {
            platform: "telegram",
            link: "",
            visibility: ""
        },
        gitHub: {
            platform: "gitHub",
            link: "",
            visibility: ""
        }
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
            } catch (error) {
                console.error("Error checking username existence:", error);
            } finally {
                // setSubmitting(false);
            }
        },
    });
    return (
        <Accordion elevation={1} sx={{ mb: 2 }} expanded={expanded === 'panel2'} onChange={handlePanelChange('panel2')}>
            <AccordionSummary sx={{ borderBottom: 1, borderColor: 'divider' }}
                expandIcon={<TbLayoutNavbarCollapse fontSize='20px' />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <Typography variant="h6">Social Media Information</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: '#f5f5f5' }}>
                <Paper elevation={3}>
                    <Box sx={{ padding: 5 }} component="form" onSubmit={handleSubmit} noValidate>
                        <Grid container spacing={2}>
                            {Object.keys(initialValues).map((platform) => (
                                <Grid item xs={12} key={platform}>
                                    <InputLabel htmlFor={platform}>{platform.charAt(0).toUpperCase() + platform.slice(1)} Link</InputLabel>
                                    <TextField
                                        id={platform}
                                        variant="outlined"
                                        fullWidth
                                        size="small"
                                        color="secondary"
                                        placeholder={`${platform.charAt(0).toUpperCase() + platform.slice(1)} Link`}
                                        name={`${platform}.link`} // Update the name attribute to include the link property
                                        value={values[platform]?.link || ""} // Access the link property of the platform object
                                        onBlur={handleBlur}
                                        onChange={handleChange} // Use handleChange to update the form values
                                        disabled={isSubmitting}
                                    />
                                </Grid>
                            ))}
                            {/* <Grid item xs={12}>
                                <InputLabel htmlFor="facebook">Facebook Link</InputLabel>
                                <TextField
                                    id="facebook"
                                    variant="outlined"
                                    fullWidth
                                    size="small"
                                    placeholder='Facebook Link'
                                    color='secondary'
                                    name="facebook"
                                    value={values.facebook}
                                    onBlur={handleBlur} // Trigger username check on blur
                                    onChange={handleChange}
                                    disabled={isSubmitting}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <InputLabel htmlFor="youTube">YouTube Link</InputLabel>
                                <TextField
                                    id="youTube"
                                    variant="outlined"
                                    fullWidth
                                    size="small"
                                    color='secondary'
                                    name="youTube"
                                    placeholder='YouTube Link'
                                    value={values.youTube}
                                    onBlur={handleBlur} // Trigger username check on blur
                                    onChange={handleChange}
                                    disabled={isSubmitting}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <InputLabel htmlFor="instagram">Instagram Link</InputLabel>
                                <TextField
                                    id="instagram"
                                    variant="outlined"
                                    fullWidth
                                    size="small"
                                    color='secondary'
                                    placeholder='Instagram Link'
                                    name="instagram"
                                    value={values.instagram}
                                    onBlur={handleBlur} // Trigger username check on blur
                                    onChange={handleChange}
                                    disabled={isSubmitting}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <InputLabel htmlFor="facebook">Twitter Link</InputLabel>
                                <TextField
                                    id="twitter"
                                    variant="outlined"
                                    fullWidth
                                    size="small"
                                    placeholder='Twitter Link'
                                    color='secondary'
                                    name="twitter"
                                    value={values.twitter}
                                    onBlur={handleBlur} // Trigger username check on blur
                                    onChange={handleChange}
                                    disabled={isSubmitting}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <InputLabel htmlFor="linkedIn">LinkedIn Link</InputLabel>
                                <TextField
                                    id="linkedIn"
                                    variant="outlined"
                                    fullWidth
                                    size="small"
                                    color='secondary'
                                    name="linkedIn"
                                    placeholder='LinkedIn Link'
                                    value={values.linkedIn}
                                    onBlur={handleBlur} // Trigger username check on blur
                                    onChange={handleChange}
                                    disabled={isSubmitting}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <InputLabel htmlFor="threads">Threads Link</InputLabel>
                                <TextField
                                    id="threads"
                                    variant="outlined"
                                    fullWidth
                                    size="small"
                                    color='secondary'
                                    placeholder='Threads Link'
                                    name="threads"
                                    value={values.threads}
                                    onBlur={handleBlur} // Trigger username check on blur
                                    onChange={handleChange}
                                    disabled={isSubmitting}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <InputLabel htmlFor="snapChat">SnapChat Link</InputLabel>
                                <TextField
                                    id="snapChat"
                                    variant="outlined"
                                    fullWidth
                                    size="small"
                                    color='secondary'
                                    name="snapChat"
                                    placeholder='SnapChat Link'
                                    value={values.snapChat}
                                    onBlur={handleBlur} // Trigger username check on blur
                                    onChange={handleChange}
                                    disabled={isSubmitting}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <InputLabel htmlFor="telegram">Telegram Link</InputLabel>
                                <TextField
                                    id="telegram"
                                    variant="outlined"
                                    fullWidth
                                    size="small"
                                    color='secondary'
                                    placeholder='Telegram Link'
                                    name="telegram"
                                    value={values.telegram}
                                    onBlur={handleBlur} // Trigger username check on blur
                                    onChange={handleChange}
                                    disabled={isSubmitting}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <InputLabel htmlFor="gitHub">GitHub Link</InputLabel>
                                <TextField
                                    id="gitHub"
                                    variant="outlined"
                                    fullWidth
                                    size="small"
                                    color='secondary'
                                    name="gitHub"
                                    placeholder='GitHub Link'
                                    value={values.gitHub}
                                    onBlur={handleBlur} // Trigger username check on blur
                                    onChange={handleChange}
                                    disabled={isSubmitting}
                                />
                            </Grid> */}

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

export default SocialMediaInformation;