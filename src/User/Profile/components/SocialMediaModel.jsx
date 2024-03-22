import React from 'react'
import {
    Dialog, DialogActions, DialogContent,
    DialogTitle, Button, Divider, Grid, IconButton, InputLabel, Stack, TextField, FormControl, Select, MenuItem, FormLabel, FormControlLabel, FormHelperText
} from '@mui/material';
import { IoCloseCircleOutline } from 'react-icons/io5';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

const SocialMediaModel = (props) => {
    const { errors, open, handleClose,
        handleChange, handleSubmit, handleBlur,
        touched, isSubmitting, values, platforms } = props;
    return (
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
                        <InputLabel id="platform-label">Select social media type</InputLabel>
                        <FormControl fullWidth>
                            <Select
                                id="platform"
                                value={values.platform} // Assuming this is the selected value from your form
                                onChange={handleChange}
                                onBlur={handleBlur}
                                color='secondary'
                                name="platform"
                                helperText={(touched.platform && errors.platform)}
                                error={touched.platform && !!errors.platform} // Check if the field is touched and has an error
                            >
                                <MenuItem value="" selected disabled>Select</MenuItem>
                                {
                                    platforms.map((platform) =>(
                                        <MenuItem value={platform}>{platform}</MenuItem>
                                    ))
                                }
                            </Select>
                            {touched.platform && errors.platform && (
                                <FormHelperText>{errors.platform}</FormHelperText>
                            )}
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <InputLabel htmlFor="link">Link here</InputLabel>
                        <TextField
                            id="link"
                            variant="outlined"
                            fullWidth
                            size="small"
                            placeholder='Link here'
                            color='secondary'
                            name="link"
                            value={values.link}
                            onBlur={handleBlur} // Trigger username check on blur
                            onChange={handleChange}
                            error={touched.link && (!!errors.link)}
                            helperText={(touched.link && errors.link)}
                            disabled={isSubmitting}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <InputLabel htmlFor="visibility">Select type</InputLabel>
                        <FormControl fullWidth>
                            <RadioGroup
                                row
                                name="visibility"
                                id='visibility'
                                value={values.visibility} // Assuming visibility is the field name
                                onChange={handleChange}
                                onBlur={handleBlur}
                            >
                                <FormControlLabel value="public" control={<Radio color='secondary' />} label="Public" />
                                <FormControlLabel value="private" control={<Radio color='secondary' />} label="Private" />
                                <FormControlLabel value="other" control={<Radio color='secondary' />} label="other" disabled />
                            </RadioGroup>
                            {touched.visibility && !values.visibility && (
                                <FormHelperText error={touched.visibility && !values.visibility}>Please select visibility</FormHelperText>
                            )}
                        </FormControl>
                    </Grid>
                </Grid>
            </DialogContent>
            <Divider />
            <DialogActions>
                <Button onClick={handleClose} variant="contained">Cancel</Button>
                <Button onClick={handleSubmit} autoFocus variant="contained">
                    Create
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default SocialMediaModel