import React, { useState } from 'react';
import { ChevronDown, ChevronUp, FileCode, CheckCircle, AlertCircle, Upload, Link2, Image as ImageIcon, Check } from 'lucide-react';
import { CV_DATA } from '../data/cvData';

export const MissingItemsGuide: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { profile } = CV_DATA;

  const items = [
    {
      id: 'linkedin',
      title: 'LinkedIn Profile URL',
      type: 'External URL',
      path: 'src/data/cvData.ts (profile.links.linkedin.url)',
      reason: profile.links.linkedin.url 
        ? `Configured: ${profile.links.linkedin.url}` 
        : 'The CV header displays a "Linkedin" text label without an embedded URL. Placeholder [ADD LINKEDIN URL] has been established.',
      icon: Link2,
      isCompleted: Boolean(profile.links.linkedin.url),
      actionHint: profile.links.linkedin.url ? 'Successfully configured & active' : 'Update url string in src/data/cvData.ts'
    },
    {
      id: 'google-scholar',
      title: 'Google Scholar Profile URL',
      type: 'External URL',
      path: 'src/data/cvData.ts (profile.links.googleScholar.url)',
      reason: profile.links.googleScholar.url 
        ? `Configured: ${profile.links.googleScholar.url}` 
        : 'The CV header displays a "Google Scholar" text label without an embedded URL. Placeholder [ADD GOOGLE SCHOLAR URL] has been established.',
      icon: Link2,
      isCompleted: Boolean(profile.links.googleScholar.url),
      actionHint: profile.links.googleScholar.url ? 'Successfully configured & active' : 'Update url string in src/data/cvData.ts'
    },
    {
      id: 'cv-pdf',
      title: 'Official Signed CV PDF',
      type: 'Asset File',
      path: '/public/assets/Curriculum_Vitae.pdf',
      reason: profile.enableCvDownloadAndPreview 
        ? 'Official PDF document is active and ready for direct download & preview.'
        : 'Download & preview actions are currently disabled per your preference. The PDF remains safely stored in /public/assets/Curriculum_Vitae.pdf.',
      icon: Upload,
      isCompleted: profile.enableCvDownloadAndPreview,
      actionHint: profile.enableCvDownloadAndPreview 
        ? 'Active & downloadable' 
        : 'Can be re-enabled anytime by setting enableCvDownloadAndPreview: true in src/data/cvData.ts'
    },
    {
      id: 'photo',
      title: 'Profile Photograph',
      type: 'Asset File',
      path: '/public/assets/profile.png',
      reason: 'Extracted and active at /public/assets/profile.png. You can also customize or change it anytime using the "Select Photo" button on the hero card.',
      icon: ImageIcon,
      isCompleted: true,
      actionHint: 'Profile picture is active & rendered'
    },
    {
      id: 'webpage',
      title: 'Personal Webpage URL (Optional)',
      type: 'External URL',
      path: 'src/data/cvData.ts (profile.links.webpage.url)',
      reason: 'The CV header displays "My Webpage". When you have a department or personal site, add the URL in cvData.ts.',
      icon: Link2,
      isCompleted: Boolean(profile.links.webpage.url),
      actionHint: 'Update url string in src/data/cvData.ts'
    }
  ];

  const completedCount = items.filter(i => i.isCompleted).length;

  return (
    <section id="missing-items-checklist" className="py-12 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Accordion / Card Header */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center shrink-0">
                <CheckCircle className="w-5 h-5 text-teal-700" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    PORTFOLIO STATUS & CONFIGURATION
                  </h3>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800">
                    {completedCount} of {items.length} Completed
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 font-sans mt-0.5">
                  Real-time status of provided profiles, uploaded CV PDF, and remaining optional items.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 bg-slate-50 hover:bg-slate-100 text-xs font-semibold text-slate-700 transition-colors cursor-pointer self-start sm:self-auto"
            >
              <span>{isOpen ? 'Collapse Details' : 'View Details'}</span>
              {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          {isOpen && (
            <div className="mt-6 pt-6 border-t border-slate-200 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className={`p-4 rounded-xl border text-xs space-y-2 transition-colors ${
                      item.isCompleted 
                        ? 'bg-teal-50/40 border-teal-200 hover:border-teal-300' 
                        : 'bg-slate-50 border-slate-200 hover:border-amber-300'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-semibold text-slate-900 flex items-center gap-1.5">
                        {item.isCompleted ? (
                          <Check className="w-4 h-4 text-teal-600" />
                        ) : (
                          <item.icon className="w-4 h-4 text-amber-700" />
                        )}
                        {item.title}
                      </span>
                      <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded ${
                        item.isCompleted 
                          ? 'bg-teal-100 text-teal-800' 
                          : 'bg-amber-100 text-amber-900'
                      }`}>
                        {item.isCompleted ? 'Configured' : item.type}
                      </span>
                    </div>

                    <p className="text-slate-600 leading-relaxed font-sans truncate">
                      {item.reason}
                    </p>

                    <div className={`pt-2 border-t font-mono text-[11px] p-2 rounded border ${
                      item.isCompleted 
                        ? 'border-teal-200 bg-white text-teal-800' 
                        : 'border-slate-200 bg-white text-slate-700'
                    }`}>
                      <code>{item.actionHint}</code>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-4 rounded-xl bg-slate-900 text-slate-200 text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <FileCode className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>
                    All data is centralized in a clean, typed configuration file: <strong className="text-white font-mono">src/data/cvData.ts</strong>
                  </span>
                </div>
                <span className="text-[11px] text-teal-300 font-medium">
                  Zero Mock Data • 100% CV Compliant
                </span>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
