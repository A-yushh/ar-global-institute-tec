// Sign Up Form with Formik + Yup and Tailwind CSS v4 in TypeScript
import { memo, useState, useCallback } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { FaUser, FaEnvelope, FaPhone, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { signUpValidationSchema } from '../../utils/validationSchemas';
import { signUpThunk, selectAuthLoading } from '../../store/slices/authSlice';
import { showToast, closeAuthModal } from '../../store/slices/uiSlice';
import { CLASS_OPTIONS, GENDER_OPTIONS } from '../../utils/constants';
import type { AppDispatch } from '../../store/store';
import TextInput from '../common/TextInput';
import Dropdown from '../common/Dropdown';
import DatePicker from '../common/DatePicker';
import RadioGroup from '../common/RadioGroup';
import Checkbox from '../common/Checkbox';
import Button from '../common/Button';

export interface SignUpFormProps {
  onSwitchToSignIn: () => void;
}

export const SignUpForm = memo(function SignUpForm({ onSwitchToSignIn }: SignUpFormProps) {
  const dispatch = useDispatch<AppDispatch>();
  const isLoading = useSelector(selectAuthLoading);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

  const togglePassword = useCallback(() => setShowPassword((p) => !p), []);
  const toggleConfirmPassword = useCallback(() => setShowConfirmPassword((p) => !p), []);

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      mobile: '',
      studentClass: '',
      dob: null as Date | null,
      gender: '',
      password: '',
      confirmPassword: '',
      terms: false,
    },
    validationSchema: signUpValidationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const resultAction = await dispatch(signUpThunk(values));
        if (signUpThunk.fulfilled.match(resultAction)) {
          dispatch(
            showToast({
              message: `Welcome, ${resultAction.payload.user.name}! Your student registration is complete.`,
              type: 'success',
            })
          );
          dispatch(closeAuthModal());
        } else {
          dispatch(
            showToast({
              message: (resultAction.payload as string) || 'Registration failed. Please try again.',
              type: 'error',
            })
          );
        }
      } finally {
        setSubmitting(false);
      }
    },
  });

  const handleDobChange = useCallback(
    (date: Date | null) => {
      formik.setFieldValue('dob', date);
      formik.setFieldTouched('dob', true, false);
    },
    [formik]
  );

  return (
    <form className="flex flex-col gap-4 w-full" onSubmit={formik.handleSubmit} noValidate>
      <TextInput
        name="fullName"
        label="Full Name"
        placeholder="e.g. Priya Sharma"
        value={formik.values.fullName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.fullName}
        touched={formik.touched.fullName}
        required
        startIcon={<FaUser size={14} />}
        autoComplete="name"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <TextInput
          name="email"
          label="Email Address"
          type="email"
          placeholder="priya@example.com"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.email}
          touched={formik.touched.email}
          required
          startIcon={<FaEnvelope size={14} />}
          autoComplete="email"
        />

        <TextInput
          name="mobile"
          label="Mobile Number"
          type="tel"
          placeholder="10-digit mobile"
          value={formik.values.mobile}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.mobile}
          touched={formik.touched.mobile}
          required
          startIcon={<FaPhone size={14} />}
          autoComplete="tel"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Dropdown
          name="studentClass"
          label="Target Class / Stream"
          options={CLASS_OPTIONS}
          value={formik.values.studentClass}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.studentClass}
          touched={formik.touched.studentClass}
          placeholder="Select Class or JEE Target"
          required
        />

        <DatePicker
          name="dob"
          label="Date of Birth"
          value={formik.values.dob}
          onChange={handleDobChange}
          onBlur={formik.handleBlur}
          error={formik.errors.dob as string | undefined}
          touched={formik.touched.dob}
          placeholder="Select Date of Birth"
          required
        />
      </div>

      <RadioGroup
        name="gender"
        label="Gender"
        options={GENDER_OPTIONS}
        value={formik.values.gender}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.gender}
        touched={formik.touched.gender}
        required
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <TextInput
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          placeholder="Min 6 chars (alphanumeric)"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.password}
          touched={formik.touched.password}
          required
          startIcon={<FaLock size={14} />}
          endIcon={showPassword ? <FaEyeSlash size={15} /> : <FaEye size={15} />}
          onEndIconClick={togglePassword}
          autoComplete="new-password"
        />

        <TextInput
          name="confirmPassword"
          label="Confirm Password"
          type={showConfirmPassword ? 'text' : 'password'}
          placeholder="Re-enter password"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.confirmPassword}
          touched={formik.touched.confirmPassword}
          required
          startIcon={<FaLock size={14} />}
          endIcon={showConfirmPassword ? <FaEyeSlash size={15} /> : <FaEye size={15} />}
          onEndIconClick={toggleConfirmPassword}
          autoComplete="new-password"
        />
      </div>

      <Checkbox
        name="terms"
        checked={formik.values.terms}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.terms}
        touched={formik.touched.terms}
      >
        <span className="text-xs text-text-muted">
          I agree to the{' '}
          <span className="text-primary underline">Terms of Service</span>, Privacy Policy, and Student Code of Conduct.
        </span>
      </Checkbox>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        fullWidth
        isLoading={isLoading || formik.isSubmitting}
      >
        Register & Create Student Account
      </Button>

      <p className="mt-2 text-center text-sm text-text-secondary m-0">
        Already enrolled with us?{' '}
        <strong className="text-primary cursor-pointer hover:underline" onClick={onSwitchToSignIn} role="button" tabIndex={0}>
          Sign in here
        </strong>
      </p>
    </form>
  );
});

export default SignUpForm;
