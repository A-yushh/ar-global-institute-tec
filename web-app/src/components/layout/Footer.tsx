// Footer Component with Tailwind CSS v4 in TypeScript
import { memo } from 'react';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaTelegramPlane,
} from 'react-icons/fa';
import { APP_NAME, CONTACT_INFO } from '../../utils/constants';

export const Footer = memo(function Footer() {
  return (
    <footer className="bg-bg-dark text-white pt-16 pb-6 px-5 border-t border-bg-dark-alt">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-12 text-left">
          {/* Brand Info */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-extrabold text-white m-0">{APP_NAME}</h3>
            <p className="text-sm text-text-light leading-relaxed m-0 max-w-xs">
              Empowering students to achieve extraordinary academic results through IITian mentorship, structured pedagogy, and cutting-edge digital learning platforms.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-bg-dark-alt text-white flex items-center justify-center text-base hover:bg-primary hover:-translate-y-0.5 transition-all" aria-label="YouTube">
                <FaYoutube />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-bg-dark-alt text-white flex items-center justify-center text-base hover:bg-primary hover:-translate-y-0.5 transition-all" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-bg-dark-alt text-white flex items-center justify-center text-base hover:bg-primary hover:-translate-y-0.5 transition-all" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-bg-dark-alt text-white flex items-center justify-center text-base hover:bg-primary hover:-translate-y-0.5 transition-all" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-bg-dark-alt text-white flex items-center justify-center text-base hover:bg-primary hover:-translate-y-0.5 transition-all" aria-label="Telegram">
                <FaTelegramPlane />
              </a>
            </div>
          </div>

          {/* Academic Wings */}
          <div className="flex flex-col gap-3.5">
            <h4 className="text-base font-bold text-white m-0 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-7 after:h-[2px] after:bg-primary">
              Academic Wings
            </h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
              <li><a href="#batches" className="text-sm text-text-light hover:text-primary-lighter transition-colors">Class 6th - 8th Foundation</a></li>
              <li><a href="#batches" className="text-sm text-text-light hover:text-primary-lighter transition-colors">Class 9th - 10th Boards & NTSE</a></li>
              <li><a href="#batches" className="text-sm text-text-light hover:text-primary-lighter transition-colors">Class 11th - 12th Science Stream</a></li>
              <li><a href="#batches" className="text-sm text-text-light hover:text-primary-lighter transition-colors">JEE Mains Target Batches</a></li>
              <li><a href="#batches" className="text-sm text-text-light hover:text-primary-lighter transition-colors">JEE Advanced Elite Program</a></li>
            </ul>
          </div>

          {/* Student Hub */}
          <div className="flex flex-col gap-3.5">
            <h4 className="text-base font-bold text-white m-0 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-7 after:h-[2px] after:bg-primary">
              Student Hub
            </h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
              <li><a href="#activities" className="text-sm text-text-light hover:text-primary-lighter transition-colors">All-India Test Series (CBT)</a></li>
              <li><a href="#activities" className="text-sm text-text-light hover:text-primary-lighter transition-colors">Gamified Learning Arena</a></li>
              <li><a href="#activities" className="text-sm text-text-light hover:text-primary-lighter transition-colors">24x7 Doubt Clearance</a></li>
              <li><a href="#why-us" className="text-sm text-text-light hover:text-primary-lighter transition-colors">Pedagogy & Faculty Pool</a></li>
              <li><a href="#it-division" className="text-sm text-text-light hover:text-primary-lighter transition-colors">IT Division (Coming Soon)</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-3.5">
            <h4 className="text-base font-bold text-white m-0 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-7 after:h-[2px] after:bg-primary">
              Contact & Support
            </h4>
            <div className="flex items-start gap-2.5 text-sm text-text-light leading-relaxed">
              <FaPhoneAlt className="text-primary-lighter mt-1 shrink-0" />
              <span>{CONTACT_INFO.phone}</span>
            </div>
            <div className="flex items-start gap-2.5 text-sm text-text-light leading-relaxed">
              <FaEnvelope className="text-primary-lighter mt-1 shrink-0" />
              <span>{CONTACT_INFO.email}</span>
            </div>
            <div className="flex items-start gap-2.5 text-sm text-text-light leading-relaxed">
              <FaMapMarkerAlt className="text-primary-lighter mt-1 shrink-0" />
              <span>{CONTACT_INFO.address}</span>
            </div>
            <div className="text-xs text-text-muted mt-1">
              Support Hours: {CONTACT_INFO.supportHours}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-bg-dark-alt flex flex-wrap items-center justify-between gap-3 text-xs text-text-muted">
          <div>
            © {new Date().getFullYear()} {APP_NAME}. All rights reserved.
          </div>
          <div className="flex gap-5">
            <a href="#hero" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#hero" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#hero" className="hover:text-white transition-colors">Refund Policy</a>
            <a href="#hero" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
