// MainLayout Shell in TypeScript
import { memo } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import AuthModal from '../auth/AuthModal';
import Toast from '../common/Toast';

export const MainLayout = memo(function MainLayout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%' }}>
      <Navbar />
      <main style={{ flex: 1, width: '100%' }}>
        <Outlet />
      </main>
      <Footer />
      <AuthModal />
      <Toast />
    </div>
  );
});

export default MainLayout;
