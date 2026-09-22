import React from 'react';
import { Calendar, MapPin, Presentation, Building2 } from 'lucide-react';
import { CV_DATA } from '../data/cvData';

export const SeminarsAndWorkshops: React.FC = () => {
  const { seminars } = CV_DATA;

  return (
    <section id="seminars" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-teal-700 font-semibold text-xs tracking-wider uppercase mb-2">
            <Presentation className="w-4 h-4 text-teal-600" />
            <span>Academic Events</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Seminars & Workshops Attended
          </h2>
          <p className="mt-3 text-base text-slate-600 font-sans leading-relaxed">
            National workshops, advanced numerical analysis training, and international mathematical webinars attended as part of ongoing scientific engagement.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {seminars.map((item) => (
            <div
              key={item.id}
              id={`seminar-card-${item.id}`}
              className="rounded-xl bg-slate-50 p-6 border border-slate-200 shadow-xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Event Type & Year */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-teal-100 text-teal-800 border border-teal-200">
                    {item.type}
                  </span>
                  <span className="font-mono text-xs font-semibold text-slate-500">
                    {item.year}
                  </span>
                </div>

                {/* Event Title */}
                <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                  {item.title}
                </h3>
              </div>

              {/* Organizer & Dates Info */}
              <div className="mt-6 pt-4 border-t border-slate-200 space-y-2 text-xs text-slate-600">
                <div className="flex items-start gap-2">
                  <Building2 className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                  <span className="text-slate-800 font-medium">{item.organizer}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-slate-500 shrink-0" />
                  <span>Dates: {item.dates}</span>
                </div>

                {item.location && (
                  <div className="flex items-center gap-2 text-slate-500">
                    <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>{item.location}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
