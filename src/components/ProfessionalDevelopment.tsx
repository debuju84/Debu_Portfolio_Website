import React from 'react';
import { BookOpen, Calendar, Building, CheckCircle2, Sparkles } from 'lucide-react';
import { CV_DATA } from '../data/cvData';

export const ProfessionalDevelopment: React.FC = () => {
  const { professionalDevelopment } = CV_DATA;

  return (
    <section id="professional-dev" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-teal-700 font-semibold text-xs tracking-wider uppercase mb-2">
            <BookOpen className="w-4 h-4 text-teal-600" />
            <span>Faculty Empowerment</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Professional Development Activities
          </h2>
          <p className="mt-3 text-base text-slate-600 font-sans leading-relaxed">
            Faculty Development Programmes (FDPs), UGC orientation courses, Outcome Based Education (OBE) training, and institutional academic organization.
          </p>
        </div>

        {/* List / Cards */}
        <div className="space-y-4">
          {professionalDevelopment.map((item) => {
            const isOrganizer = item.role === 'Organised';
            return (
              <div
                key={item.id}
                id={`pd-item-${item.id}`}
                className={`p-6 rounded-xl border transition-all ${
                  isOrganizer
                    ? 'bg-white border-teal-200 shadow-sm ring-1 ring-teal-100'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-2xs'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  
                  <div className="space-y-2 max-w-4xl">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                        isOrganizer
                          ? 'bg-teal-700 text-white'
                          : 'bg-slate-100 text-slate-700 border border-slate-200'
                      }`}>
                        {item.role}
                      </span>

                      <span className="font-mono text-xs font-semibold text-slate-500">
                        {item.year}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg font-bold text-slate-900 leading-snug">
                      {item.title}
                    </h3>

                    {item.description && (
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                        {item.description}
                      </p>
                    )}

                    <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-y-1 sm:gap-x-6 text-xs text-slate-500">
                      <div className="flex items-start gap-1.5">
                        <Building className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                        <span className="text-slate-700 font-medium">Organizer / Host: {item.organizer}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span>Dates: {item.dates}</span>
                      </div>
                    </div>
                  </div>

                  <div className="hidden sm:flex items-center shrink-0 pt-1">
                    <CheckCircle2 className={`w-5 h-5 ${isOrganizer ? 'text-teal-600' : 'text-slate-400'}`} />
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
