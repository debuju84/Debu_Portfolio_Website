import React from 'react';
import { Briefcase, Building, Calendar, CheckCircle, Award } from 'lucide-react';
import { CV_DATA } from '../data/cvData';

export const Experience: React.FC = () => {
  const { experience } = CV_DATA;

  return (
    <section id="experience" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-teal-700 font-semibold text-xs tracking-wider uppercase mb-2">
            <Briefcase className="w-4 h-4 text-teal-600" />
            <span>Academic Appointments & Responsibilities</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Professional Experience
          </h2>
          <p className="mt-3 text-base text-slate-600 font-sans leading-relaxed">
            Faculty positions, guest lectureships, and official university evaluation roles held in West Bengal.
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experience.map((item) => {
            const isPrimary = item.roleType === 'faculty';
            return (
              <div
                key={item.id}
                id={`experience-card-${item.id}`}
                className={`rounded-xl p-6 transition-all flex flex-col justify-between ${
                  isPrimary
                    ? 'bg-slate-900 text-white shadow-md border border-slate-800 md:col-span-2'
                    : 'bg-slate-50 border border-slate-200 text-slate-800 shadow-sm hover:border-slate-300'
                }`}
              >
                <div className="space-y-4">
                  {/* Top Bar: Period & Role badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded font-mono ${
                      isPrimary 
                        ? 'bg-slate-800 text-teal-300 border border-slate-700' 
                        : 'bg-white text-slate-700 border border-slate-200'
                    }`}>
                      <Calendar className="w-3 h-3 text-slate-400" />
                      {item.period}
                    </span>

                    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                      isPrimary 
                        ? 'bg-teal-950 text-teal-300 border border-teal-800' 
                        : item.roleType === 'guest'
                          ? 'bg-blue-100 text-blue-800 border border-blue-200'
                          : 'bg-slate-200 text-slate-800'
                    }`}>
                      {isPrimary ? 'Full-time Permanent Faculty' : item.roleType === 'guest' ? 'Guest Lectureship' : 'University Academic Duty'}
                    </span>
                  </div>

                  {/* Position Title */}
                  <div>
                    <h3 className={`font-serif text-xl sm:text-2xl font-bold tracking-tight ${
                      isPrimary ? 'text-white' : 'text-slate-900'
                    }`}>
                      {item.position}
                    </h3>
                    
                    {item.department && (
                      <p className={`text-sm font-medium mt-0.5 ${
                        isPrimary ? 'text-teal-300' : 'text-teal-700'
                      }`}>
                        {item.department}
                      </p>
                    )}
                  </div>

                  {/* Institution */}
                  <div className="flex items-start gap-2 text-sm">
                    <Building className={`w-4 h-4 shrink-0 mt-0.5 ${
                      isPrimary ? 'text-slate-400' : 'text-slate-500'
                    }`} />
                    <span className={`font-medium ${isPrimary ? 'text-slate-200' : 'text-slate-700'}`}>
                      {item.institution}
                    </span>
                  </div>
                </div>

                {/* Additional Details strictly from CV */}
                {isPrimary && (
                  <div className="mt-6 pt-4 border-t border-slate-800/90 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                      <span>Date of Joining: <strong className="text-white">{item.joiningDate}</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                      <span>Employment Type: <strong className="text-white">{item.employmentType}</strong></span>
                    </div>
                  </div>
                )}

                {item.roleType === 'academic_duty' && (
                  <div className="mt-4 pt-3 border-t border-slate-200 text-xs text-slate-500 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>Official academic examination and evaluation assessment for university degree curriculum.</span>
                  </div>
                )}

                {item.roleType === 'guest' && (
                  <div className="mt-4 pt-3 border-t border-slate-200 text-xs text-slate-500 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>Specialized postgraduate/departmental guest instruction in applied mathematical foundations.</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
