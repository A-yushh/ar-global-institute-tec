// IT Company Division Teaser & Coming Soon Section with Tailwind CSS v4 in TypeScript
import { memo } from 'react';
import type { ReactNode } from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import {
  FaServer,
  FaBrain,
  FaUsersCog,
  FaCodeBranch,
  FaBell,
} from 'react-icons/fa';
import { IT_COMPANY_TEASER } from '../../utils/mockData';
import type { ITPillar } from '../../utils/mockData';
import { notifyMeValidationSchema } from '../../utils/validationSchemas';
import batchService from '../../apiServices/batchService';
import { showToast } from '../../store/slices/uiSlice';
import type { AppDispatch } from '../../store/store';
import Button from '../common/Button';

const ICON_MAP: Record<string, ReactNode> = {
  FaServer: <FaServer />,
  FaBrain: <FaBrain />,
  FaUsersCog: <FaUsersCog />,
  FaCodeBranch: <FaCodeBranch />,
};

export const ComingSoonSection = memo(function ComingSoonSection() {
  const dispatch = useDispatch<AppDispatch>();

  const formik = useFormik<{ email: string }>({
    initialValues: {
      email: '',
    },
    validationSchema: notifyMeValidationSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        const res = await batchService.registerITNotification(values.email);
        dispatch(
          showToast({
            message: res.message,
            type: 'success',
          })
        );
        resetForm();
      } catch {
        dispatch(
          showToast({
            message: 'Unable to register notification right now.',
            type: 'error',
          })
        );
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <section id="it-division" className="bg-bg-white pt-20 pb-24 px-5">
      <div className="max-w-[1240px] mx-auto">
        <div className="bg-gradient-to-br from-bg-dark to-[#171026] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden border border-primary/30">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/50 text-primary-lighter text-xs font-bold tracking-wider uppercase mb-5">
              <span className="w-2 h-2 rounded-full bg-primary-light animate-ping" aria-hidden="true" />
              <span>{IT_COMPANY_TEASER.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black leading-tight m-0 mb-4 tracking-tight">
              Introducing{' '}
              <span className="bg-gradient-to-r from-primary-lighter to-white bg-clip-text text-transparent">
                A. R. Global Technologies
              </span>
            </h2>

            <p className="text-base sm:text-lg text-text-light leading-relaxed max-w-3xl mx-auto mb-9 m-0">
              {IT_COMPANY_TEASER.description}
            </p>
          </div>

          {/* 4 Technical Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10 text-left">
            {IT_COMPANY_TEASER.upcomingPillars.map((p: ITPillar, idx: number) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col gap-2.5 hover:bg-white/10 hover:border-primary/40 transition-all duration-150">
                <div className="w-10 h-10 rounded-xl bg-primary/25 text-primary-lighter flex items-center justify-center text-lg">
                  {ICON_MAP[p.icon] || <FaServer />}
                </div>
                <h3 className="text-base font-bold text-white m-0">{p.title}</h3>
                <p className="text-xs text-text-light leading-relaxed m-0">{p.description}</p>
              </div>
            ))}
          </div>

          {/* Formik "Notify Me" Form */}
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col items-center gap-3 max-w-lg mx-auto"
            noValidate
          >
            <div className="flex flex-col sm:flex-row gap-2.5 w-full">
              <input
                id="notify-email"
                name="email"
                type="email"
                placeholder="Enter email to get launch invitation & early access"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="flex-1 px-4.5 py-3 rounded-lg border border-white/20 bg-white/10 text-white text-sm outline-none font-sans focus:border-primary-lighter focus:ring-3 focus:ring-primary/30"
                aria-label="Email for launch notification"
              />
              <Button
                type="submit"
                variant="primary"
                size="md"
                isLoading={formik.isSubmitting}
                startIcon={<FaBell />}
              >
                Notify Me
              </Button>
            </div>

            {formik.touched.email && formik.errors.email && (
              <p className="text-xs text-error-light self-start m-0" role="alert">
                {formik.errors.email}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
});

export default ComingSoonSection;
