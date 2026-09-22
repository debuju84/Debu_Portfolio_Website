import React from 'react';
import { Compass, Waves, TrendingUp, Shield, Activity, Split } from 'lucide-react';
import { CV_DATA } from '../data/cvData';

export const Research: React.FC = () => {
  const { researchArea } = CV_DATA;

  // Icon selector mapping
  const getTopicIcon = (iconName: string) => {
    switch (iconName) {
      case 'bifurcation':
        return <Split className="w-5 h-5 text-teal-600" />;
      case 'marine-reserve':
        return <Waves className="w-5 h-5 text-teal-600" />;
      case 'ecosystem':
        return <Activity className="w-5 h-5 text-teal-600" />;
      case 'phase-portrait':
        return <Shield className="w-5 h-5 text-teal-600" />;
      case 'sustainable-yield':
        return <TrendingUp className="w-5 h-5 text-teal-600" />;
      default:
        return <Compass className="w-5 h-5 text-teal-600" />;
    }
  };

  return (
    <section id="research" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-teal-700 font-semibold text-xs tracking-wider uppercase mb-2">
            <Compass className="w-4 h-4 text-teal-600" />
            <span>Research Profile</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Mathematical Biology & Non-Linear Dynamics
          </h2>
          <p className="mt-3 text-base text-slate-600 font-sans leading-relaxed">
            Analytical and numerical investigation of ecological systems, multi-species interactions, bio-economic harvesting, and marine protected areas.
          </p>
        </div>

        {/* Core Research Area Banner */}
        <div className="mb-10 p-6 sm:p-8 rounded-2xl bg-slate-900 text-white shadow-lg border border-slate-800 relative overflow-hidden">
          {/* Subtle SVG Wave / Phase Background */}
          <div className="absolute -right-10 -bottom-10 w-96 h-96 opacity-10 pointer-events-none">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#2dd4bf" d="M47.5,-57.2C59.9,-46.3,67.3,-30.9,69.5,-15C71.7,0.9,68.7,17.4,60.8,31.7C52.9,46,40.1,58.2,24.8,64.7C9.5,71.2,-8.3,72.1,-24.4,66.7C-40.5,61.4,-54.9,49.8,-63.9,35C-72.9,20.2,-76.5,2.1,-72.6,-13.9C-68.7,-30,-57.4,-44,-43.3,-54.5C-29.3,-65.1,-12.6,-72.2,2.8,-75.5C18.2,-78.9,35.1,-68.2,47.5,-57.2Z" transform="translate(100 100)" />
            </svg>
          </div>

          <div className="relative max-w-3xl space-y-4">
            <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-teal-950 text-teal-300 border border-teal-800 uppercase tracking-wider">
              Broad Research Area
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {researchArea.broadArea}
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
              Focuses on non-linear ordinary differential equation systems modeling predator-prey dynamics, infection propagation, prey refuges, invasive species impacts, and marine fishery bio-economics. Mathematical tools emphasize local and global stability, Lyapunov functionals, limit cycles, and Hopf and Bogdanov-Takens bifurcation phenomena.
            </p>
          </div>

          {/* Research Keywords Grid strictly from CV */}
          <div className="relative mt-6 pt-6 border-t border-slate-800">
            <p className="text-xs uppercase tracking-wider text-teal-400 font-semibold mb-3">
              CV Research Keywords & Topics
            </p>
            <div className="flex flex-wrap gap-2">
              {researchArea.keywords.map((kw, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800/90 text-slate-200 border border-slate-700/80 shadow-sm"
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Structured Topic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchArea.topics.map((topic) => (
            <div
              key={topic.id}
              id={`research-card-${topic.id}`}
              className="rounded-xl bg-white p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-start"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center">
                  {getTopicIcon(topic.modelIcon)}
                </div>

                <h4 className="font-serif text-lg font-bold text-slate-900 tracking-tight">
                  {topic.title}
                </h4>

                <p className="text-sm text-slate-600 leading-relaxed font-sans">
                  {topic.summary}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
