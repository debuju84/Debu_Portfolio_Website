import React from 'react';
import { Target, BookOpenCheck, ShieldCheck, CheckCircle2, Download, FileText } from 'lucide-react';
import { CV_DATA } from '../data/cvData';

export const About: React.FC = () => {
  const { profile, researchArea } = CV_DATA;

  return (
    <section id="about" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-teal-700 font-semibold text-xs tracking-wider uppercase mb-2">
            <span className="w-6 h-0.5 bg-teal-600 inline-block"></span>
            <span>Faculty Profile</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            About Dr. Debabrata Das
          </h2>
          <p className="mt-3 text-base text-slate-600 font-sans leading-relaxed">
            Academic profile, educational vision, and core mathematical trajectory rooted in research and collegiate instruction.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Main Narrative based directly on CV */}
          <div className="lg:col-span-7 space-y-6 text-slate-700 text-base leading-relaxed">
            
            {/* Career Objective Banner - Preserving CV statement */}
            <div className="p-5 rounded-xl bg-slate-50 border-l-4 border-teal-600 border-t border-r border-b border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 text-teal-800 font-semibold text-xs uppercase tracking-wider mb-2">
                <Target className="w-4 h-4 text-teal-600" />
                <span>Career Objective (as stated in CV)</span>
              </div>
              <blockquote className="font-serif text-slate-800 italic text-base sm:text-lg leading-relaxed">
                "{profile.careerObjective}"
              </blockquote>
            </div>

            {/* Academic Profile Narrative strictly based on CV */}
            <div className="space-y-4">
              <p>
                Dr. Debabrata Das is an Assistant Professor (Grade I) in the Department of Mathematics at B. P. Poddar Institute of Management and Technology, Kolkata, where he has been serving in a full-time, permanent capacity since 6th August 2008.
              </p>
              <p>
                He holds a Ph.D. in Bio-Mathematics from the Indian Institute of Engineering Science and Technology (IIEST), Shibpur, awarded on 25th January 2021 under the doctoral supervision of Professor Tapan Kumar Kar. His doctoral thesis, titled <strong className="font-semibold text-slate-900">"Modelling Some Aspects of The Population Dynamics Relevant to The Management of Marine Fisheries,"</strong> addresses crucial challenges at the intersection of non-linear differential systems, ecological balance, and bio-economic marine management.
              </p>
              <p>
                Dr. Das completed both his Bachelor of Science (B.Sc.) and Master of Science (M.Sc.) degrees in Mathematics from Jadavpur University, Kolkata, followed by success in national competitive examinations including GATE-2009 (All India Rank 379) and the CSIR-UGC NET for Lectureship in Mathematical Sciences.
              </p>
              <p>
                Alongside his regular teaching and research duties, Dr. Das has served the higher education ecosystem in West Bengal as a Guest Faculty in the Department of Applied Optics and Photonics at the University of Calcutta (2020), an Examiner for Maulana Abul Kalam Azad University of Technology (2010), and a Moderator at St. Xavier’s University Kolkata (2022).
              </p>
            </div>

            {/* Declaration Quote */}
            <div className="pt-2 flex items-start gap-2.5 text-xs text-slate-500 italic bg-slate-50 p-3 rounded-lg border border-slate-200">
              <ShieldCheck className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <span>
                <strong>Authoritative Source:</strong> "{profile.declaration}" — Curriculum Vitae. All information presented on this portfolio is derived directly and strictly from Dr. Das's verified CV.
              </span>
            </div>
          </div>

          {/* Quick Pillars Sidebar */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 shadow-sm space-y-5">
              <h3 className="font-serif text-lg font-bold text-slate-900 border-b border-slate-200 pb-3 flex items-center gap-2">
                <BookOpenCheck className="w-5 h-5 text-teal-600" />
                <span>Academic Summary</span>
              </h3>

              <ul className="space-y-3.5 text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">Primary Institution</span>
                    <span>B. P. Poddar Institute of Management and Technology (BPPIMT), Kolkata</span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">Doctoral Institution</span>
                    <span>IIEST Shibpur (Bio-Mathematics, Awarded Jan 2021)</span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">Alumni Alma Mater</span>
                    <span>Jadavpur University (B.Sc. & M.Sc. in Mathematics)</span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">Research Domain</span>
                    <span>{researchArea.broadArea} (Fisheries, Stability, Bifurcations)</span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">National Qualifications</span>
                    <span>CSIR-UGC NET (Lectureship), GATE-2009 (AIR 379)</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Quick stats / Highlights strictly from CV */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-slate-900 text-white text-center">
                <span className="font-serif text-2xl font-bold text-teal-300">2008</span>
                <p className="text-xs text-slate-300 mt-1">Faculty Appointment at BPPIMT</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-900 text-white text-center">
                <span className="font-serif text-2xl font-bold text-teal-300">6</span>
                <p className="text-xs text-slate-300 mt-1">Peer-Reviewed SCI/Scopus Papers</p>
              </div>
            </div>

            {/* Official CV Download Banner (Enabled when enableCvDownloadAndPreview is true) */}
            {profile.enableCvDownloadAndPreview && (
              <div className="p-4 rounded-xl bg-teal-50 border border-teal-200/80 flex items-center justify-between gap-3 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center shrink-0 text-teal-700">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Curriculum Vitae (PDF)</p>
                    <p className="text-[11px] text-teal-800">Official document • 3 pages • 286 KB</p>
                  </div>
                </div>
                <a
                  href={profile.cvDownloadPath}
                  download="Curriculum_Vitae_Dr_Debabrata_Das.pdf"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-700 hover:bg-teal-600 text-white text-xs font-semibold shadow-xs transition-colors shrink-0 cursor-pointer"
                  title="Download full PDF"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </a>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
};
