import * as Yup from 'yup';

export const loginSchema = Yup.object({
  email: Yup.string().email().required('Please enter your email'),
  password: Yup.string().min(6).required('Please enter your password'),
  rememberMe: Yup.boolean(), // Add Yup boolean schema for rememberMe field
});

export const signUpSchema = Yup.object({
  firstName: Yup.string().min(2).max(50).required('Please enter your first name'),
  lastName: Yup.string().min(2).max(50).required('Please enter your last name'),
  email: Yup.string().email().required('Please enter your email'),
  password: Yup.string().min(6).required('Please enter your password'),
  allowExtraEmails: Yup.boolean().oneOf([true], 'You must agree to receive emails').required('You must agree to receive emails'),
});

export const forgotPasswordSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
});

export const forgotPasswordFormSchema = Yup.object({
  password: Yup.string().min(6).required('Please enter your password'),
});

export const changePasswordSchema = Yup.object({
  current_password: Yup.string().min(6).required('Please enter your current password'),
  password: Yup.string().min(6).required('Please enter your new password')
});

export const editProfileSchema = Yup.object({
  name: Yup.string().min(2).max(50).required('Please enter your name'),
  // email: Yup.string().min(10).email().required('Please enter your email'),
  mobile: Yup.string().matches(/^[0-9]{10}$/, 'Mobile number is not valid').required('Please enter your mobile number'),
});