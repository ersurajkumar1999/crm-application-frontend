import {
    CircularProgress, Avatar, Button, CssBaseline,Container,
    TextField,FormControlLabel, Checkbox, Grid, Box, Typography
} from '@mui/material';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useFormik } from 'formik';
import { signUpSchema } from '../../schemas/FormSchemas'; // Import your validation schema here
import { userSignUp } from '../../services/ApiService';
import { useDispatch, useSelector } from 'react-redux';
import { setErrorMessage, setSuccessMessage } from '../../store/slices/alertMessageSlice';
import { ErrorMessage, SuccessMessage } from "../../components/common/alertMessages";
import { Link } from 'react-router-dom';
function SignupPage() {
    const dispatch = useDispatch();
    const { success, error } = useSelector((state) => state.alert);

    const initialValues = {
        firstName: 'Dev',
        lastName: 'suraj',
        email: 'devsuraj@gmail.com',
        password: 'devsuraj@',
        allowExtraEmails: false,
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
        validationSchema: signUpSchema,
        onSubmit: async (values, { setSubmitting }) => {
            const data = {
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                password: values.password,
                allowExtraEmails: values.allowExtraEmails
            };
            try {
                setSubmitting(true);
                const response = await userSignUp(data);
                if (response.status) {
                    resetForm();
                    dispatch(setSuccessMessage(response.data.message));
                } else {
                    console.log("response==>", response.data.message);
                    dispatch(setErrorMessage(response.data.message));
                }
            } catch (error) {
                dispatch(setErrorMessage(error));
            } finally {
                setSubmitting(false);
            }
        },
    });

    return (
        <Container component="main" maxWidth="sm">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    boxShadow: 3,
                    borderRadius: 2,
                    px: 4,
                    py: 6,
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                {success && <SuccessMessage />}
                {error && <ErrorMessage />}
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                color="secondary"
                                autoFocus
                                onBlur={handleBlur}
                                onChange={handleChange}
                                inputProps={{}}
                                disabled={isSubmitting}
                                value={values.firstName}
                                error={touched.firstName && !!errors.firstName}
                                helperText={touched.firstName && errors.firstName}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="family-name"
                                color="secondary"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                inputProps={{}}
                                disabled={isSubmitting}
                                value={values.lastName}
                                error={touched.lastName && !!errors.lastName}
                                helperText={touched.lastName && errors.lastName}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                type="email"
                                label="Email Address"
                                name="email"
                                color="secondary"
                                autoComplete="email"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                inputProps={{}}
                                disabled={isSubmitting}
                                value={values.email}
                                error={touched.email && !!errors.email}
                                helperText={touched.email && errors.email}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                color="secondary"
                                autoComplete="new-password"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                inputProps={{}}
                                disabled={isSubmitting}
                                value={values.password}
                                error={touched.password && !!errors.password}
                                helperText={touched.password && errors.password}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        disabled={isSubmitting}
                                        name="allowExtraEmails"
                                        color="secondary"
                                        required // Add required attribute
                                        checked={values.allowExtraEmails} // Ensure the checked state is controlled
                                        onChange={handleChange} // Handle change to update form values
                                    />
                                }
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                            {touched.allowExtraEmails && errors.allowExtraEmails && (
                                <Typography variant="body2" color="error">
                                    {errors.allowExtraEmails}
                                </Typography>
                            )}
                        </Grid>
                    </Grid>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        disabled={isSubmitting} // Disable button while submitting
                    >
                        {isSubmitting ? <CircularProgress size={24} /> : 'Sign Up'} {/* Show loader when submitting */}
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link to="/auth/login" component={Link} variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    )
}

export default SignupPage;
