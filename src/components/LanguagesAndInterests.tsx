import React from 'react';
import { Globe2, Heart, BookOpen, Music, Activity } from 'lucide-react';
import { CV_DATA } from '../data/cvData';

export const LanguagesAndInterests: React.FC = () => {
  const { languages, interests } = CV_DATA;

  const renderInterestIcon = (iconName: string) => {
    switch (iconName) {
      case 'volleyball':
      case 'football':
        return <Activity className="w-5 h-5 text-teal-600" />;
      case 'book':
        return <BookOpen className="w-5 h-5 text-teal-600" />;
      case 'music':
        return <Music className="w-5 h-5 text-teal-600" />;
      default:
        return <Heart className="w-5 h-5 text-teal-600" />;
    }
  };

  return (
    <section id="languages-interests" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          
          {/* Languages Block */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 text-teal-700 font-semibold text-xs tracking-wider uppercase mb-2">
                <Globe2 className="w-4 h-4 text-teal-600" />
                <span>Linguistic Proficiency</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Languages
              </h2>
              <p className="mt-2 text-sm text-slate-600 font-sans">
                Languages known and proficiency levels documented in the Curriculum Vitae.
              </p>
            </div>

            <div className="space-y-3">
              {languages.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between shadow-2xs"
                >
                  <div>
                    <h3 className="font-serif font-bold text-slate-900 text-base">
                      {item.language}
                    </h3>
                    <p className="text-xs text-slate-600 font-sans mt-0.5">
                      {item.proficiency}
                    </p>
                  </div>

                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-white text-slate-700 border border-slate-200 shadow-2xs">
                    {item.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Personal Interests Block */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 text-teal-700 font-semibold text-xs tracking-wider uppercase mb-2">
                <Heart className="w-4 h-4 text-teal-600" />
                <span>Recreation & Literature</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Personal Interests
              </h2>
              <p className="mt-2 text-sm text-slate-600 font-sans">
                Extracurricular pursuits and cultural interests stated in the CV.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {interests.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3.5 shadow-2xs hover:border-teal-200 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0">
                    {renderInterestIcon(item.icon)}
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-slate-900 text-sm">
                      {item.name}
                    </h3>
                    <span className="text-[11px] text-slate-500 font-sans block">
                      {item.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
