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

export const editProfileSchema = Yup.object({
  firstName: Yup.string().min(2).max(50).required('Please enter your first name'),
  lastName: Yup.string().min(2).max(50).required('Please enter your last name'),
  // displayName: Yup.string().optional(),
  // about: Yup.string().optional(),
  // gender: Yup.string().optional(),
  // dateOfBirth: Yup.string().optional(),
  // mobile: Yup.string().matches(/^[0-9]{10}$/, 'Mobile number is not valid').required('Please enter your mobile number'),
});


export const userNameSchema = Yup.object({
  userName: Yup.string().min(3).max(30).required("Please enter your user name!"),
});

export const changePasswordSchema = Yup.object({
  oldPassword: Yup.string().min(6).max(30).required('Please enter your current password'),
  newPassword: Yup.string().min(6).max(30).required('Please enter your new password'),
  confirmPassword: Yup.string().oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
    .required('Please confirm your new password'),
});
