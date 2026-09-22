import React from 'react';
import { ArrowUp, ExternalLink, ShieldCheck, Download } from 'lucide-react';
import { CV_DATA } from '../data/cvData';

interface FooterProps {
  onOpenPlaceholderModal: (linkName: string, placeholderKey: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPlaceholderModal }) => {
  const { profile } = CV_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="portfolio-footer" className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          
          {/* Faculty Affiliation Details */}
          <div className="md:col-span-7 space-y-2">
            <h3 className="font-serif text-xl font-bold text-white tracking-tight">
              {profile.fullName}
            </h3>
            <p className="text-sm text-teal-300 font-medium">
              {profile.title}
            </p>
            <p className="text-sm text-slate-400">
              {profile.department}
            </p>
            <p className="text-sm text-slate-400">
              {profile.institution}
            </p>
            <p className="text-xs text-slate-500 pt-2 font-mono">
              {profile.address} • Phone: {profile.phone}
            </p>
          </div>

          {/* Quick Academic Profile Links */}
          <div className="md:col-span-5 flex flex-col md:items-end space-y-4">
            <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">
              Profiles & Academic Networks
            </span>

            <div className="flex flex-wrap items-center gap-3 text-sm">
              {profile.links.googleScholar.url ? (
                <a
                  href={profile.links.googleScholar.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-teal-300 transition-colors inline-flex items-center gap-1 cursor-pointer"
                  title="Google Scholar"
                >
                  <span>Google Scholar</span>
                  <ExternalLink className="w-3 h-3 text-teal-400" />
                </a>
              ) : (
                <button
                  type="button"
                  onClick={() => onOpenPlaceholderModal("Google Scholar", profile.links.googleScholar.placeholderKey)}
                  className="text-slate-300 hover:text-teal-300 transition-colors inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Google Scholar</span>
                  <span className="text-[10px] text-amber-400 font-mono">[Placeholder]</span>
                </button>
              )}

              <span className="text-slate-700">•</span>

              {profile.links.linkedin.url ? (
                <a
                  href={profile.links.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-teal-300 transition-colors inline-flex items-center gap-1 cursor-pointer"
                  title="LinkedIn"
                >
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 text-teal-400" />
                </a>
              ) : (
                <button
                  type="button"
                  onClick={() => onOpenPlaceholderModal("LinkedIn", profile.links.linkedin.placeholderKey)}
                  className="text-slate-300 hover:text-teal-300 transition-colors inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>LinkedIn</span>
                  <span className="text-[10px] text-amber-400 font-mono">[Placeholder]</span>
                </button>
              )}

              <span className="text-slate-700">•</span>

              {profile.links.webpage.url ? (
                <a
                  href={profile.links.webpage.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-teal-300 transition-colors inline-flex items-center gap-1 cursor-pointer"
                  title="Personal Webpage"
                >
                  <span>Personal Webpage</span>
                  <ExternalLink className="w-3 h-3 text-teal-400" />
                </a>
              ) : (
                <button
                  type="button"
                  onClick={() => onOpenPlaceholderModal("Personal Webpage", profile.links.webpage.placeholderKey)}
                  className="text-slate-300 hover:text-teal-300 transition-colors inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Personal Webpage</span>
                  <span className="text-[10px] text-amber-400 font-mono">[Placeholder]</span>
                </button>
              )}

              <span className="text-slate-700">•</span>

              <a
                href={profile.cvDownloadPath}
                download="Curriculum_Vitae_Dr_Debabrata_Das.pdf"
                className="text-teal-300 hover:text-white transition-colors inline-flex items-center gap-1 font-medium cursor-pointer"
                title="Download Official Curriculum Vitae PDF"
              >
                <Download className="w-3.5 h-3.5 text-teal-400" />
                <span>Download CV</span>
              </a>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors pt-2 cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to top</span>
            </button>
          </div>

        </div>

        {/* Bottom copyright & CV declaration banner */}
        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {profile.fullName}. Academic portfolio built strictly from verified Curriculum Vitae.
          </p>
          <div className="flex items-center gap-1 text-[11px] text-slate-500 italic">
            <ShieldCheck className="w-3.5 h-3.5 text-slate-600" />
            <span>"{profile.declaration}"</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
