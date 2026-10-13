// Yup Validation Schemas for Formik Forms with TypeScript
import * as Yup from 'yup';

const phoneOrEmailRegex = /^(?:\d{10}|[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})$/;
const phoneRegex = /^[6-9]\d{9}$/;

export const signInValidationSchema = Yup.object().shape({
  identifier: Yup.string()
    .required('Please enter your email address or 10-digit mobile number')
    .test('is-valid-identifier', 'Enter a valid email address or 10-digit mobile number', (value) => {
      if (!value) return false;
      return phoneOrEmailRegex.test(value.trim());
    }),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters long'),
  rememberMe: Yup.boolean().default(false),
});

export const signUpValidationSchema = Yup.object().shape({
  fullName: Yup.string()
    .trim()
    .required('Full Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name cannot exceed 50 characters'),
  email: Yup.string()
    .trim()
    .email('Please enter a valid email address')
    .required('Email address is required'),
  mobile: Yup.string()
    .trim()
    .required('Mobile number is required')
    .matches(phoneRegex, 'Enter a valid 10-digit Indian mobile number (e.g., 9876543210)'),
  studentClass: Yup.string()
    .required('Please select your current class or target exam'),
  dob: Yup.date()
    .nullable()
    .required('Date of Birth is required')
    .max(new Date(), 'Date of Birth cannot be in the future'),
  gender: Yup.string()
    .required('Please select your gender'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .matches(/[A-Za-z]/, 'Password must contain at least one letter')
    .matches(/[0-9]/, 'Password must contain at least one number'),
  confirmPassword: Yup.string()
    .required('Please confirm your password')
    .oneOf([Yup.ref('password')], 'Passwords must match'),
  terms: Yup.boolean()
    .oneOf([true], 'You must accept the terms & conditions to register'),
});

export const forgotPasswordValidationSchema = Yup.object().shape({
  identifier: Yup.string()
    .required('Please enter your registered email address or mobile number')
    .test('is-valid-identifier', 'Enter a valid email address or 10-digit mobile number', (value) => {
      if (!value) return false;
      return phoneOrEmailRegex.test(value.trim());
    }),
});

export const notifyMeValidationSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email('Please enter a valid email address')
    .required('Email is required to get notified'),
});
