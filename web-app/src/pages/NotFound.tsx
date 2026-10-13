// NotFound 404 Page in TypeScript
import { memo } from 'react';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle, FaHome } from 'react-icons/fa';
import Button from '../components/common/Button';

export const NotFound = memo(function NotFound() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '65vh',
        padding: '40px 20px',
        textAlign: 'center',
        gap: '18px',
      }}
    >
      <div
        style={{
          width: '72px',
          height: '72px',
          borderRadius: '50%',
          backgroundColor: 'var(--color-primary-pale)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--color-primary)',
          fontSize: '2rem',
        }}
      >
        <FaExclamationTriangle />
      </div>

      <h1
        style={{
          fontSize: '2.5rem',
          fontWeight: 800,
          color: 'var(--color-text-primary)',
          margin: 0,
        }}
      >
        404 - Page Not Found
      </h1>

      <p
        style={{
          fontSize: '1.05rem',
          color: 'var(--color-text-secondary)',
          maxWidth: '460px',
          lineHeight: 1.6,
          margin: 0,
        }}
      >
        The page you are looking for does not exist or has been relocated to another section of the institute portal.
      </p>

      <Link to="/" style={{ textDecoration: 'none', marginTop: '12px' }}>
        <Button variant="primary" size="lg" startIcon={<FaHome />}>
          Return to Home Page
        </Button>
      </Link>
    </div>
  );
});

export default NotFound;
