// Sign In Form with Formik + Yup and Tailwind CSS v4 in TypeScript
import { memo, useState, useCallback } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { FaEye, FaEyeSlash, FaEnvelope, FaLock } from 'react-icons/fa';
import { signInValidationSchema } from '../../utils/validationSchemas';
import { signInThunk, selectAuthLoading } from '../../store/slices/authSlice';
import { showToast, closeAuthModal } from '../../store/slices/uiSlice';
import type { AppDispatch } from '../../store/store';
import TextInput from '../common/TextInput';
import Button from '../common/Button';
import Checkbox from '../common/Checkbox';

export interface SignInFormProps {
  onSwitchToSignUp: () => void;
  onSwitchToForgot: () => void;
}

export const SignInForm = memo(function SignInForm({
  onSwitchToSignUp,
  onSwitchToForgot,
}: SignInFormProps) {
  const dispatch = useDispatch<AppDispatch>();
  const isLoading = useSelector(selectAuthLoading);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  const formik = useFormik({
    initialValues: {
      identifier: '',
      password: '',
      rememberMe: true,
    },
    validationSchema: signInValidationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const resultAction = await dispatch(signInThunk(values));
        if (signInThunk.fulfilled.match(resultAction)) {
          dispatch(
            showToast({
              message: `Welcome back, ${resultAction.payload.user.name}! Successfully signed in.`,
              type: 'success',
            })
          );
          dispatch(closeAuthModal());
        } else {
          dispatch(
            showToast({
              message: (resultAction.payload as string) || 'Invalid credentials',
              type: 'error',
            })
          );
        }
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <form className="flex flex-col gap-4 w-full" onSubmit={formik.handleSubmit} noValidate>
      <TextInput
        name="identifier"
        label="Email or Mobile Number"
        placeholder="e.g. rahul@example.com or 9876543210"
        value={formik.values.identifier}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.identifier}
        touched={formik.touched.identifier}
        required
        startIcon={<FaEnvelope size={14} />}
        autoComplete="username"
      />

      <TextInput
        name="password"
        label="Password"
        type={showPassword ? 'text' : 'password'}
        placeholder="Enter your password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.password}
        touched={formik.touched.password}
        required
        startIcon={<FaLock size={14} />}
        endIcon={showPassword ? <FaEyeSlash size={15} /> : <FaEye size={15} />}
        onEndIconClick={togglePasswordVisibility}
        autoComplete="current-password"
      />

      <div className="flex items-center justify-between -mt-1">
        <Checkbox
          name="rememberMe"
          label="Remember me"
          checked={formik.values.rememberMe}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <button
          type="button"
          className="bg-transparent border-none text-primary text-sm font-semibold cursor-pointer p-0 underline hover:text-primary-dark transition-colors"
          onClick={onSwitchToForgot}
        >
          Forgot password?
        </button>
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        fullWidth
        isLoading={isLoading || formik.isSubmitting}
      >
        Sign In to Portal
      </Button>

      <p className="mt-2 text-center text-sm text-text-secondary m-0">
        Don’t have an account yet?{' '}
        <strong className="text-primary cursor-pointer hover:underline" onClick={onSwitchToSignUp} role="button" tabIndex={0}>
          Create an account
        </strong>
      </p>
    </form>
  );
});

export default SignInForm;
