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
  firstName: Yup.string().min(2).max(20).required('Please enter your first name'),
  lastName: Yup.string().min(2).max(20).required('Please enter your last name'),
  displayName: Yup.string().optional(),
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

export const addressInformationSchema = Yup.object({
  country: Yup.string().min(6).max(30).required('Please select country!'),
  state: Yup.string().min(6).max(30).required('Please select state'),
  city: Yup.string().min(6).max(30).required('Please select city'),
  address1: Yup.string().min(6).max(30).required('Please enter your address line 1'),
  address2: Yup.string().optional(),
  pinCode: Yup.string().min(6).max(6).required('Please enter your pin code'),
});
// export const socialMediaSchema = Yup.object({
//   facebook: Yup.string().optional(),
//   youTube: Yup.string().optional(),
//   instagram: Yup.string().optional(),
//   twitter: Yup.string().optional(),
//   linkedIn: Yup.string().optional(),
//   threads: Yup.string().optional(),
//   snapChat: Yup.string().optional(),
//   telegram: Yup.string().optional(),
//   gitHub: Yup.string().optional(),
// });

export const socialMediaSchema = Yup.object().shape({
  facebook: Yup.object().shape({
    platform: Yup.string().default("facebook"),
    link: Yup.string().optional(),
    visibility: Yup.string().default("public")
  }),
  youTube: Yup.object().shape({
    platform: Yup.string().default("youTube"),
    link: Yup.string().optional(),
    visibility: Yup.string().default("public")
  }),
  instagram: Yup.object().shape({
    platform: Yup.string().default("instagram"),
    link: Yup.string().optional(),
    visibility: Yup.string().default("public")
  }),
  twitter: Yup.object().shape({
    platform: Yup.string().default("twitter"),
    link: Yup.string().optional(),
    visibility: Yup.string().default("public")
  }),
  linkedIn: Yup.object().shape({
    platform: Yup.string().default("linkedIn"),
    link: Yup.string().optional(),
    visibility: Yup.string().default("public")
  }),
  threads: Yup.object().shape({
    platform: Yup.string().default("threads"),
    link: Yup.string().optional(),
    visibility: Yup.string().default("public")
  }),
  snapChat: Yup.object().shape({
    platform: Yup.string().default("snapChat"),
    link: Yup.string().optional(),
    visibility: Yup.string().default("public")
  }),
  telegram: Yup.object().shape({
    platform: Yup.string().default("telegram"),
    link: Yup.string().optional(),
    visibility: Yup.string().default("public")
  }),
  gitHub: Yup.object().shape({
    platform: Yup.string().default("gitHub"),
    link: Yup.string().optional(),
    visibility: Yup.string().default("public")
  })
});
