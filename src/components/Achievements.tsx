import React from 'react';
import { Award, Trophy, CheckCircle2, ShieldCheck } from 'lucide-react';
import { CV_DATA } from '../data/cvData';

export const Achievements: React.FC = () => {
  const { achievements } = CV_DATA;

  return (
    <section id="achievements" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-teal-700 font-semibold text-xs tracking-wider uppercase mb-2">
            <Trophy className="w-4 h-4 text-teal-600" />
            <span>Honors & National Qualifications</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Academic Achievements
          </h2>
          <p className="mt-3 text-base text-slate-600 font-sans leading-relaxed">
            National competitive examination outcomes in Mathematical Sciences as documented in the Curriculum Vitae.
          </p>
        </div>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((item) => (
            <div
              key={item.id}
              id={`achievement-card-${item.id}`}
              className="rounded-2xl bg-white p-7 border-2 border-slate-200 shadow-sm hover:shadow-md hover:border-teal-700/50 transition-all flex flex-col justify-between relative overflow-hidden"
            >
              {/* Top Accent Pill */}
              <div className="flex items-center justify-between gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-800 border border-teal-200">
                  <Award className="w-3.5 h-3.5 text-teal-600" />
                  {item.badge}
                </span>

                <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-slate-100 text-slate-700">
                  {item.year}
                </span>
              </div>

              {/* Title */}
              <div className="space-y-3">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 font-sans leading-relaxed">
                  {item.details}
                </p>
              </div>

              {/* Specific Score & Rank Highlights strictly from CV */}
              <div className="mt-6 pt-5 border-t border-slate-100 bg-slate-50/70 -mx-7 -mb-7 p-6 rounded-b-2xl">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-center">
                  
                  {item.rank && (
                    <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-2xs">
                      <span className="text-[10px] uppercase font-semibold text-slate-500 block">
                        Rank
                      </span>
                      <span className="font-serif text-base font-bold text-slate-900">
                        {item.rank.replace('All India Rank: ', 'AIR ').replace('Rank: ', '')}
                      </span>
                    </div>
                  )}

                  {item.percentile && (
                    <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-2xs">
                      <span className="text-[10px] uppercase font-semibold text-slate-500 block">
                        Percentile
                      </span>
                      <span className="font-serif text-base font-bold text-teal-700">
                        {item.percentile}
                      </span>
                    </div>
                  )}

                  {item.score && (
                    <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-2xs col-span-2 sm:col-span-1">
                      <span className="text-[10px] uppercase font-semibold text-slate-500 block">
                        Score
                      </span>
                      <span className="font-serif text-base font-bold text-slate-900">
                        {item.score.replace('GATE score: ', '')}
                      </span>
                    </div>
                  )}

                </div>

                <div className="mt-3 flex items-center justify-center gap-1.5 text-xs text-slate-500 font-sans">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                  <span>Verified National Mathematical Sciences Credentials</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
