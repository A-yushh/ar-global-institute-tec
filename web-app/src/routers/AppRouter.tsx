// AppRouter in TypeScript with lazy-loaded routes and Suspense fallback
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

const Home = lazy(() => import('../pages/Home'));
const NotFound = lazy(() => import('../pages/NotFound'));

const PageLoader = () => (
  <div className="min-h-screen w-full flex flex-col items-center justify-center gap-4 bg-white">
    <div className="w-11 h-11 rounded-full border-4 border-primary-pale border-t-primary animate-spin" />
    <p className="text-text-secondary font-semibold text-sm sm:text-base tracking-wide">
      Loading A. R. Global Institute...
    </p>
  </div>
);

export const AppRouter = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
