import React, { useState, useEffect } from 'react';
import { Menu, X, Download, GraduationCap, BookOpen, User, Briefcase, Award, Phone, Compass, FileText, Mail } from 'lucide-react';
import { CV_DATA } from '../data/cvData';

interface NavbarProps {
  onOpenCvModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCvModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = [
        'home',
        'about',
        'education',
        'experience',
        'research',
        'publications',
        'achievements',
        'professional-dev',
        'contact'
      ];

      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home', icon: User },
    { name: 'About', href: '#about', id: 'about', icon: User },
    { name: 'Education', href: '#education', id: 'education', icon: GraduationCap },
    { name: 'Experience', href: '#experience', id: 'experience', icon: Briefcase },
    { name: 'Research', href: '#research', id: 'research', icon: Compass },
    { name: 'Publications', href: '#publications', id: 'publications', icon: BookOpen },
    { name: 'Achievements', href: '#achievements', id: 'achievements', icon: Award },
    { name: 'Dev & Workshops', href: '#professional-dev', id: 'professional-dev', icon: BookOpen },
    { name: 'Contact', href: '#contact', id: 'contact', icon: Phone },
  ];

  return (
    <header 
      id="main-navigation-header"
      className={`sticky top-0 z-40 transition-all duration-200 ${
        scrolled 
          ? 'bg-slate-900/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-800 text-white' 
          : 'bg-slate-900 py-4 border-b border-slate-800 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Name */}
        <a 
          href="#home" 
          id="navbar-brand-link"
          className="flex flex-col group text-left focus:outline-none"
        >
          <span className="font-serif font-semibold text-lg sm:text-xl text-white tracking-tight group-hover:text-teal-300 transition-colors">
            {CV_DATA.profile.fullName}
          </span>
          <span className="text-xs text-slate-400 font-sans tracking-normal line-clamp-1">
            Department of Mathematics • BPPIMT
          </span>
        </a>

        {/* Desktop Nav */}
        <nav id="desktop-nav-menu" aria-label="Main Navigation" className="hidden xl:flex items-center space-x-1 lg:space-x-1.5 text-sm font-medium">
          {navLinks.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.name}
                href={item.href}
                id={`nav-link-${item.id}`}
                className={`px-3 py-1.5 rounded-md text-xs lg:text-[13px] transition-colors ${
                  isActive
                    ? 'text-teal-300 bg-slate-800/80 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center space-x-2 sm:space-x-2.5">
          {CV_DATA.profile.enableCvDownloadAndPreview ? (
            <>
              <a
                href={CV_DATA.profile.cvDownloadPath}
                download="Curriculum_Vitae_Dr_Debabrata_Das.pdf"
                id="navbar-download-cv-btn"
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-md bg-teal-600 hover:bg-teal-500 text-white transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-slate-900 cursor-pointer"
                title="Download Official Curriculum Vitae PDF (286 KB)"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download CV</span>
              </a>

              <button
                type="button"
                id="navbar-preview-cv-btn"
                onClick={onOpenCvModal}
                className="hidden sm:inline-flex items-center gap-1 text-xs font-medium px-2 py-1.5 rounded-md text-slate-300 hover:text-white hover:bg-slate-800 transition-all cursor-pointer"
                title="Preview CV Document"
              >
                <FileText className="w-3.5 h-3.5 text-teal-400" />
                <span>Preview</span>
              </button>
            </>
          ) : (
            <a
              href="#contact"
              id="navbar-contact-btn"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 transition-all cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              <span>Contact</span>
            </a>
          )}

          {/* Mobile hamburger */}
          <button
            type="button"
            id="mobile-menu-toggle-btn"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="xl:hidden p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-400 cursor-pointer"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div 
          id="mobile-nav-dropdown"
          className="xl:hidden border-t border-slate-800 bg-slate-900 px-4 pt-3 pb-5 space-y-1.5 shadow-xl"
        >
          {navLinks.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.name}
                href={item.href}
                id={`mobile-nav-link-${item.id}`}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-2.5 px-3 py-2 rounded-md text-sm transition-colors ${
                  isActive
                    ? 'text-teal-300 bg-slate-800 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <item.icon className="w-4 h-4 text-slate-400" />
                {item.name}
              </a>
            );
          })}

          {/* Mobile CV Download Action */}
          {CV_DATA.profile.enableCvDownloadAndPreview ? (
            <div className="pt-2 border-t border-slate-800 flex items-center gap-2">
              <a
                href={CV_DATA.profile.cvDownloadPath}
                download="Curriculum_Vitae_Dr_Debabrata_Das.pdf"
                onClick={() => setIsOpen(false)}
                className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-md bg-teal-600 text-white text-xs font-semibold shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>Download CV (PDF)</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  onOpenCvModal();
                }}
                className="py-2 px-3 rounded-md bg-slate-800 text-slate-200 hover:text-white text-xs font-medium border border-slate-700"
              >
                Preview
              </button>
            </div>
          ) : (
            <div className="pt-2 border-t border-slate-800">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-md bg-slate-800 text-slate-200 hover:text-white text-xs font-semibold border border-slate-700"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Contact Dr. Das</span>
              </a>
            </div>
          )}
        </div>
      )}
    </header>
  );
};
