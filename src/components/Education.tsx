import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar, UserCheck, FileText } from 'lucide-react';
import { CV_DATA } from '../data/cvData';

export const Education: React.FC = () => {
  const { education } = CV_DATA;

  return (
    <section id="education" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-teal-700 font-semibold text-xs tracking-wider uppercase mb-2">
            <GraduationCap className="w-4 h-4 text-teal-600" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Educational Trajectory
          </h2>
          <p className="mt-3 text-base text-slate-600 font-sans leading-relaxed">
            Formal degrees and academic performance strictly documented from secondary schooling to doctoral research.
          </p>
        </div>

        {/* Chronological Timeline */}
        <div className="relative border-l-2 border-slate-300 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
          
          {education.map((item) => {
            return (
              <div 
                key={item.id} 
                id={`education-item-${item.id}`}
                className="relative group"
              >
                {/* Timeline Marker Node */}
                <div className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                  item.isDoctorate 
                    ? 'bg-teal-600 border-teal-700 text-white shadow-md' 
                    : 'bg-white border-slate-400 text-slate-600 group-hover:border-teal-600 group-hover:text-teal-600'
                }`}>
                  {item.isDoctorate ? (
                    <Award className="w-3.5 h-3.5" />
                  ) : (
                    <span className="w-2 h-2 rounded-full bg-slate-400 group-hover:bg-teal-600"></span>
                  )}
                </div>

                {/* Card */}
                <div className={`rounded-xl p-5 sm:p-6 transition-all ${
                  item.isDoctorate 
                    ? 'bg-white border-2 border-teal-700/70 shadow-md ring-4 ring-teal-50/70' 
                    : 'bg-white border border-slate-200 shadow-sm hover:border-slate-300'
                }`}>
                  
                  {/* Top row: Year & Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 text-slate-700 font-mono">
                      <Calendar className="w-3 h-3 text-slate-500" />
                      {item.year}
                    </span>

                    {item.percentage && (
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                        Percentage of Marks: <strong className="text-slate-900">{item.percentage}</strong>
                      </span>
                    )}

                    {item.isDoctorate && (
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800 border border-teal-200">
                        Doctor of Philosophy
                      </span>
                    )}
                  </div>

                  {/* Degree Name */}
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    {item.degree}
                  </h3>

                  {/* Institution */}
                  <p className="text-base text-slate-700 font-sans font-medium mt-1">
                    {item.institution}
                  </p>

                  {/* Special Ph.D. Spotlight (Supervisor & Thesis) */}
                  {item.isDoctorate && (
                    <div className="mt-5 pt-4 border-t border-teal-100 bg-slate-50/80 -mx-5 sm:-mx-6 -mb-5 sm:-mb-6 p-5 sm:p-6 rounded-b-xl space-y-3">
                      
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-800">
                        <Award className="w-4 h-4 text-teal-700" />
                        <span>Awarded: {item.awardDate}</span>
                      </div>

                      <div className="space-y-2 text-sm text-slate-800">
                        <div className="flex items-start gap-2">
                          <UserCheck className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold text-slate-900">Doctoral Supervisor: </span>
                            <span className="text-slate-700">{item.supervisor}</span>
                          </div>
                        </div>

                        <div className="flex items-start gap-2">
                          <FileText className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold text-slate-900 block sm:inline">Thesis Title: </span>
                            <span className="font-serif italic text-slate-800">
                              "{item.thesisTitle}"
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="text-xs text-slate-600 font-sans pt-1">
                        Discipline: <strong>Bio-Mathematics</strong> • Research on deterministic population models & marine fishery bio-economics.
                      </div>
                    </div>
                  )}

                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
