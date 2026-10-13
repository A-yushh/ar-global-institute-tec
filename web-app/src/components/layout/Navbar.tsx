// Responsive TopAppBar / Navbar Component with Tailwind CSS v4 in TypeScript
import { memo, useCallback } from 'react';
import type { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaGraduationCap, FaBars, FaTimes, FaSignOutAlt, FaUserCircle } from 'react-icons/fa';
import { APP_NAME, NAV_LINKS } from '../../utils/constants';
import type { NavLinkItem } from '../../utils/constants';
import {
  openAuthModal,
  toggleMobileMenu,
  selectIsMobileMenuOpen,
  selectActiveNavSection,
  setActiveNavSection,
  showToast,
} from '../../store/slices/uiSlice';
import { selectUser, selectIsAuthenticated, signOutThunk } from '../../store/slices/authSlice';
import type { AppDispatch } from '../../store/store';
import Button from '../common/Button';

export const Navbar = memo(function Navbar() {
  const dispatch = useDispatch<AppDispatch>();
  const isMobileOpen = useSelector(selectIsMobileMenuOpen);
  const activeSection = useSelector(selectActiveNavSection);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const user = useSelector(selectUser);

  const handleOpenAuth = useCallback(() => {
    dispatch(openAuthModal({ view: 'signin' }));
    dispatch(toggleMobileMenu(false));
  }, [dispatch]);

  const handleSignOut = useCallback(async () => {
    await dispatch(signOutThunk());
    dispatch(
      showToast({
        message: 'You have signed out successfully.',
        type: 'info',
      })
    );
  }, [dispatch]);

  const handleNavClick = useCallback(
    (e: MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
      e.preventDefault();
      dispatch(setActiveNavSection(id));
      dispatch(toggleMobileMenu(false));

      const targetEl = document.querySelector(href);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    },
    [dispatch]
  );

  const handleToggleMenu = useCallback(() => {
    dispatch(toggleMobileMenu());
  }, [dispatch]);

  return (
    <header className="sticky top-0 left-0 right-0 z-[1000] bg-white border-b border-border-light shadow-xs transition-all duration-200">
      <div className="max-w-[1240px] mx-auto px-5 h-[72px] flex items-center justify-between gap-5">
        {/* Brand / Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 no-underline cursor-pointer"
          onClick={(e) => handleNavClick(e, '#hero', 'hero')}
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white text-xl shadow-md" aria-hidden="true">
            <FaGraduationCap />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-lg font-extrabold text-text-primary tracking-tight leading-tight">{APP_NAME}</span>
            <span className="text-[11px] font-bold text-primary uppercase tracking-wider">Institute of Excellence</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main Navigation" className="hidden lg:block">
          <ul className="flex items-center gap-6 list-none m-0 p-0">
            {NAV_LINKS.map((link: NavLinkItem) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className={`no-underline text-sm font-semibold transition-colors duration-150 relative py-2 flex items-center gap-1.5 ${
                      isActive ? 'text-primary' : 'text-text-secondary hover:text-primary'
                    }`}
                    onClick={(e) => handleNavClick(e, link.href, link.id)}
                  >
                    {link.label}
                    {link.badge && (
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-primary-pale text-primary border border-primary/20">
                        {link.badge}
                      </span>
                    )}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-primary rounded-full" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right CTA / Profile */}
        <div className="flex items-center gap-3">
          {isAuthenticated && user ? (
            <div className="flex items-center gap-2.5 bg-bg-light px-3 py-1 rounded-full border border-border-light">
              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-8 h-8 rounded-full object-cover border-2 border-primary"
                  loading="lazy"
                />
              ) : (
                <FaUserCircle size={24} className="text-primary" />
              )}
              <span className="text-sm font-semibold text-text-primary">{user.name}</span>
              <Button
                variant="text"
                size="sm"
                onClick={handleSignOut}
                title="Sign Out"
                aria-label="Sign Out"
              >
                <FaSignOutAlt />
              </Button>
            </div>
          ) : (
            <Button
              variant="primary"
              size="md"
              onClick={handleOpenAuth}
            >
              Sign In / Sign Up
            </Button>
          )}

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="lg:hidden bg-transparent border-none text-2xl text-text-primary cursor-pointer p-1.5 rounded-md flex items-center justify-center"
            onClick={handleToggleMenu}
            aria-label={isMobileOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileOpen && (
        <div className="lg:hidden absolute top-[72px] left-0 right-0 bg-white border-b border-border-light shadow-xl px-5 py-6 flex flex-col gap-3.5 animate-in slide-in-from-top-2 duration-150">
          {NAV_LINKS.map((link: NavLinkItem) => (
            <a
              key={link.id}
              href={link.href}
              className="text-base font-semibold text-text-primary py-2.5 border-b border-bg-light flex items-center justify-between"
              onClick={(e) => handleNavClick(e, link.href, link.id)}
            >
              <span>{link.label}</span>
              {link.badge && (
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-primary-pale text-primary border border-primary/20">
                  {link.badge}
                </span>
              )}
            </a>
          ))}

          <div className="flex flex-col gap-2.5 mt-2.5">
            {isAuthenticated && user ? (
              <Button variant="outline" size="md" fullWidth onClick={handleSignOut}>
                Sign Out ({user.name})
              </Button>
            ) : (
              <Button variant="primary" size="md" fullWidth onClick={handleOpenAuth}>
                Sign In / Sign Up
              </Button>
            )}
          </div>
        </div>
      )}
    </header>
  );
});

export default Navbar;
