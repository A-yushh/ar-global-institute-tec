// Forgot Password Form with Formik + Yup and Tailwind CSS v4 in TypeScript
import { memo, useState } from 'react';
import { useFormik } from 'formik';
import { FaEnvelope, FaCheckCircle } from 'react-icons/fa';
import { forgotPasswordValidationSchema } from '../../utils/validationSchemas';
import authService from '../../apiServices/authService';
import TextInput from '../common/TextInput';
import Button from '../common/Button';

export interface ForgotPasswordFormProps {
  onSwitchToSignIn: () => void;
}

export const ForgotPasswordForm = memo(function ForgotPasswordForm({
  onSwitchToSignIn,
}: ForgotPasswordFormProps) {
  const [successInfo, setSuccessInfo] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      identifier: '',
    },
    validationSchema: forgotPasswordValidationSchema,
    onSubmit: async (values) => {
      try {
        setIsSubmitting(true);
        const res = await authService.forgotPassword(values);
        setSuccessInfo(res.message);
      } catch {
        setSuccessInfo('Unable to send reset instructions at this moment. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  if (successInfo) {
    return (
      <div className="p-5 rounded-2xl bg-success-bg border border-success-border text-success-dark text-center flex flex-col gap-3 items-center">
        <FaCheckCircle className="text-3xl text-success" />
        <h4 className="text-base font-bold m-0">Reset Instructions Dispatched</h4>
        <p className="text-sm m-0 leading-relaxed">{successInfo}</p>
        <Button variant="primary" size="md" onClick={onSwitchToSignIn}>
          Back to Sign In
        </Button>
      </div>
    );
  }

  return (
    <form className="flex flex-col gap-4 w-full text-left" onSubmit={formik.handleSubmit} noValidate>
      <p className="m-0 text-text-secondary text-sm leading-relaxed">
        Enter your registered email address or mobile number. We will send you an OTP / secure link to reset your account password.
      </p>

      <TextInput
        name="identifier"
        label="Registered Email or Mobile"
        placeholder="e.g. priya@example.com or 9876543210"
        value={formik.values.identifier}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.identifier}
        touched={formik.touched.identifier}
        required
        startIcon={<FaEnvelope size={14} />}
        autoComplete="email"
      />

      <Button
        type="submit"
        variant="primary"
        size="lg"
        fullWidth
        isLoading={isSubmitting}
      >
        Send Reset Link
      </Button>

      <p className="mt-2 text-center text-sm text-text-secondary m-0">
        Remembered your password?{' '}
        <strong className="text-primary cursor-pointer hover:underline" onClick={onSwitchToSignIn} role="button" tabIndex={0}>
          Back to Sign In
        </strong>
      </p>
    </form>
  );
});

export default ForgotPasswordForm;
