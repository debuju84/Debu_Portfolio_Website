import React, { useState, useEffect, useRef } from 'react';
import { Download, Compass, BookOpen, Mail, ExternalLink, GraduationCap, MapPin, AlertCircle, Camera, Upload, Check, RefreshCw, FileText } from 'lucide-react';
import { CV_DATA } from '../data/cvData';

interface HeroProps {
  onOpenCvModal: () => void;
  onOpenPlaceholderModal: (linkName: string, placeholderKey: string) => void;
}

const PHOTO_CANDIDATES = [
  '/assets/profile.png',
  '/assets/profile.jpg',
  '/assets/profile.jpeg',
  '/assets/profile.webp',
  '/profile.png',
  '/profile.jpg'
];

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal, onOpenPlaceholderModal }) => {
  const [photoCandidateIndex, setPhotoCandidateIndex] = useState(0);
  const [customPhotoDataUrl, setCustomPhotoDataUrl] = useState<string | null>(null);
  const [imgError, setImgError] = useState(false);
  const [showUploadTip, setShowUploadTip] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { profile } = CV_DATA;

  // Load custom photo from localStorage if user uploaded one in session
  useEffect(() => {
    try {
      const savedPhoto = localStorage.getItem('dr_das_profile_photo');
      if (savedPhoto) {
        setCustomPhotoDataUrl(savedPhoto);
      }
    } catch {
      // ignore storage errors
    }
  }, []);

  const handleImgError = () => {
    if (!customPhotoDataUrl && photoCandidateIndex < PHOTO_CANDIDATES.length - 1) {
      setPhotoCandidateIndex(prev => prev + 1);
    } else {
      setImgError(true);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setCustomPhotoDataUrl(result);
          setImgError(false);
          try {
            localStorage.setItem('dr_das_profile_photo', result);
          } catch {
            // ignore storage limit
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetPhoto = () => {
    try {
      localStorage.removeItem('dr_das_profile_photo');
    } catch {}
    setCustomPhotoDataUrl(null);
    setPhotoCandidateIndex(0);
    setImgError(false);
  };

  const activePhotoSrc = customPhotoDataUrl || PHOTO_CANDIDATES[photoCandidateIndex];

  return (
    <section 
      id="home" 
      className="relative bg-[#D7D6CF] text-[#18181B] overflow-hidden pt-12 pb-16 lg:pt-18 lg:pb-24 border-b border-[#BFBEB6]"
    >
      {/* Subtle Architectural Pattern */}
      <div 
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.035] pointer-events-none select-none overflow-hidden"
      >
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="math-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#18181B" strokeWidth="0.8" strokeDasharray="3 3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#math-grid)" />
          {/* Phase plane trajectories motif in warm charcoal */}
          <path d="M 150 450 Q 300 200 650 350 T 1100 200" fill="none" stroke="#18181B" strokeWidth="1.4" strokeOpacity="0.4" />
          <path d="M 180 500 Q 320 280 650 400 T 1100 300" fill="none" stroke="#3D3C37" strokeWidth="1.2" strokeOpacity="0.35" />
          <circle cx="650" cy="350" r="4" fill="#18181B" fillOpacity="0.4" />
          <circle cx="650" cy="400" r="3" fill="#3D3C37" fillOpacity="0.35" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Main Info Column */}
          <div className="lg:col-span-8 text-left space-y-6">
            
            {/* Academic Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#C8C7BE] text-[#18181B] border border-[#B5B4AA] shadow-2xs">
                <GraduationCap className="w-3.5 h-3.5 text-[#18181B]" />
                Ph.D. in Bio-Mathematics (IIEST Shibpur)
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-[#ECEBE5] text-[#3D3C37] border border-[#C5C4BA] shadow-2xs">
                <MapPin className="w-3 h-3 text-[#5A5953]" />
                Kolkata, India
              </span>
            </div>

            {/* Name & Academic Rank */}
            <div className="space-y-2">
              <p className="text-sm sm:text-base font-serif text-[#4A4943] tracking-wide">
                Faculty Portfolio & Academic Profile
              </p>
              <h1 
                id="hero-name-heading" 
                className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#111111]"
              >
                {profile.fullName}
              </h1>
              <p className="text-xl sm:text-2xl font-sans text-[#2A2925] font-semibold tracking-tight">
                {profile.title}
              </p>
              <p className="text-base sm:text-lg text-[#4E4D46] font-sans leading-relaxed">
                {profile.institution}
              </p>
            </div>

            {/* Thematic Emphasis from CV */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#E2E1DA]/85 border border-[#C2C1B8] shadow-xs space-y-1">
              <p className="text-xs uppercase tracking-wider text-[#18181B] font-bold mb-1">
                Core Research Focus
              </p>
              <p className="text-sm sm:text-base font-serif italic text-[#252421] leading-relaxed">
                "{profile.thematicEmphasis}"
              </p>
            </div>

            {/* Prominent Action Buttons Styled like Reference Theme */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              {/* Primary Pill Button with Arrow Icon like the reference image */}
              <a
                href="#research"
                id="hero-view-research-btn"
                className="group inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#18181B] hover:bg-black text-white font-medium text-sm transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#18181B]"
              >
                <span>VIEW RESEARCH</span>
                <span className="w-6 h-6 rounded-full bg-white text-[#18181B] flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                  <Compass className="w-3.5 h-3.5 text-[#18181B]" />
                </span>
              </a>

              <a
                href="#publications"
                id="hero-publications-btn"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#ECEBE5] hover:bg-white text-[#18181B] font-medium text-sm border border-[#BFBEB6] shadow-2xs transition-all focus:outline-none focus:ring-2 focus:ring-[#18181B]"
              >
                <BookOpen className="w-4 h-4 text-[#4A4943]" />
                <span>Publications</span>
              </a>

              {profile.enableCvDownloadAndPreview && (
                <>
                  <a
                    href={profile.cvDownloadPath}
                    download="Curriculum_Vitae_Dr_Debabrata_Das.pdf"
                    id="hero-download-cv-btn"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#2E2D29] hover:bg-[#18181B] text-white font-medium text-sm transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#18181B] cursor-pointer"
                    title="Download Official Curriculum Vitae PDF (286 KB)"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download CV</span>
                  </a>

                  <button
                    type="button"
                    id="hero-preview-cv-btn"
                    onClick={onOpenCvModal}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#ECEBE5] hover:bg-white text-[#18181B] font-medium text-sm border border-[#BFBEB6] shadow-2xs transition-all focus:outline-none focus:ring-2 focus:ring-[#18181B] cursor-pointer"
                    title="Preview Curriculum Vitae document"
                  >
                    <FileText className="w-4 h-4 text-[#18181B]" />
                    <span>Preview CV</span>
                  </button>
                </>
              )}

              <a
                href="#contact"
                id="hero-contact-btn"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-transparent hover:bg-[#C9C8C0] text-[#2A2925] font-medium text-sm border border-transparent hover:border-[#BFBEB6] transition-all"
              >
                <Mail className="w-4 h-4 text-[#5A5953]" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Profile / Social Links */}
            <div className="pt-2 border-t border-[#BFBEB6] flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#4E4D46]">
              <span className="text-[#18181B] font-semibold">Academic Profiles:</span>

              {/* Google Scholar Link */}
              {profile.links.googleScholar.url ? (
                <a
                  href={profile.links.googleScholar.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-google-scholar-link"
                  className="inline-flex items-center gap-1 text-[#18181B] hover:text-black transition-colors py-1 cursor-pointer font-semibold underline decoration-[#8E8D86] hover:decoration-[#18181B] underline-offset-4"
                  title="View Dr. Debabrata Das on Google Scholar"
                >
                  <span>Google Scholar</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#5A5953]" />
                </a>
              ) : (
                <button
                  type="button"
                  onClick={() => onOpenPlaceholderModal("Google Scholar", profile.links.googleScholar.placeholderKey)}
                  id="hero-google-scholar-link"
                  className="inline-flex items-center gap-1 text-[#5A5953] hover:text-[#18181B] transition-colors py-1 cursor-pointer"
                  title="Google Scholar link placeholder"
                >
                  <span className="underline decoration-[#A5A49D] underline-offset-4">Google Scholar</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#C7C6BD] text-[#18181B] border border-[#B5B4AA]">
                    Placeholder
                  </span>
                </button>
              )}

              {/* LinkedIn Link */}
              {profile.links.linkedin.url ? (
                <a
                  href={profile.links.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-linkedin-link"
                  className="inline-flex items-center gap-1 text-[#18181B] hover:text-black transition-colors py-1 cursor-pointer font-semibold underline decoration-[#8E8D86] hover:decoration-[#18181B] underline-offset-4"
                  title="View Dr. Debabrata Das on LinkedIn"
                >
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#5A5953]" />
                </a>
              ) : (
                <button
                  type="button"
                  onClick={() => onOpenPlaceholderModal("LinkedIn", profile.links.linkedin.placeholderKey)}
                  id="hero-linkedin-link"
                  className="inline-flex items-center gap-1 text-[#5A5953] hover:text-[#18181B] transition-colors py-1 cursor-pointer"
                  title="LinkedIn link placeholder"
                >
                  <span className="underline decoration-[#A5A49D] underline-offset-4">LinkedIn</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#C7C6BD] text-[#18181B] border border-[#B5B4AA]">
                    Placeholder
                  </span>
                </button>
              )}

              {/* Personal Webpage Link */}
              {profile.links.webpage.url ? (
                <a
                  href={profile.links.webpage.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-webpage-link"
                  className="inline-flex items-center gap-1 text-[#18181B] hover:text-black transition-colors py-1 cursor-pointer font-semibold underline decoration-[#8E8D86] hover:decoration-[#18181B] underline-offset-4"
                  title="Visit Personal Webpage"
                >
                  <span>Personal Webpage</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#5A5953]" />
                </a>
              ) : (
                <button
                  type="button"
                  onClick={() => onOpenPlaceholderModal("Personal Webpage", profile.links.webpage.placeholderKey)}
                  id="hero-webpage-link"
                  className="inline-flex items-center gap-1 text-[#5A5953] hover:text-[#18181B] transition-colors py-1 cursor-pointer"
                  title="Personal Webpage link placeholder"
                >
                  <span className="underline decoration-[#A5A49D] underline-offset-4">Personal Webpage</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#C7C6BD] text-[#18181B] border border-[#B5B4AA]">
                    Placeholder
                  </span>
                </button>
              )}
            </div>
          </div>

          {/* Portrait / Academic Card Column Styled with Arch Frame from reference */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <div 
              id="hero-profile-card"
              className="w-full max-w-sm rounded-3xl bg-[#E2E1DA]/90 border border-[#C2C1B8] p-5 sm:p-6 shadow-sm text-center space-y-4"
            >
              {/* Photo with Architectural Arch silhouette (curved arch bottom like reference) */}
              <div 
                className="relative mx-auto w-52 h-64 sm:w-56 sm:h-72 rounded-t-2xl rounded-b-[88px] overflow-hidden bg-[#C6C5BC] border-2 border-[#B8B7AE] flex flex-col items-center justify-center group shadow-xs"
              >
                {/* Hidden file input for quick direct preview */}
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept="image/*"
                  className="hidden"
                />

                {!imgError ? (
                  <>
                    <img
                      src={activePhotoSrc}
                      alt={profile.fullName}
                      onError={handleImgError}
                      className="w-full h-full object-cover object-top"
                      referrerPolicy="no-referrer"
                    />
                    {/* Hover controls for user */}
                    <div className="absolute inset-0 bg-[#18181B]/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-3 gap-2 backdrop-blur-xs">
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="px-3.5 py-1.5 rounded-full bg-[#18181B] hover:bg-black text-white text-xs font-medium flex items-center gap-1.5 shadow-md cursor-pointer transition-colors border border-white/20"
                      >
                        <Camera className="w-3.5 h-3.5" />
                        <span>Update Photo</span>
                      </button>
                      {customPhotoDataUrl && (
                        <button
                          type="button"
                          onClick={handleResetPhoto}
                          className="text-[10px] text-white/90 hover:text-white underline cursor-pointer"
                        >
                          Reset to default
                        </button>
                      )}
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-b from-[#D2D1C9] to-[#C0BFB5] text-[#18181B]">
                    <div className="w-16 h-16 rounded-full bg-[#ECEBE5] border-2 border-[#A8A79E] flex items-center justify-center font-serif text-xl font-bold text-[#18181B] shadow-2xs mb-2">
                      DD
                    </div>
                    <p className="font-serif font-semibold text-sm text-[#18181B]">{profile.fullName}</p>
                    <p className="text-[11px] text-[#4A4943] font-mono mt-0.5">Mathematical Biology</p>
                    
                    {/* Interactive photo selector button */}
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="mt-3 px-3 py-1.5 rounded-full bg-[#18181B] hover:bg-black text-white text-[11px] font-medium flex items-center gap-1.5 shadow cursor-pointer transition-colors"
                      title="Select photo from your device"
                    >
                      <Upload className="w-3 h-3" />
                      <span>Select Photo</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Quick Photo Upload & Path Helper */}
              <div className="flex items-center justify-center gap-2 text-[11px] text-[#5A5953]">
                <button
                  type="button"
                  onClick={() => setShowUploadTip(!showUploadTip)}
                  className="inline-flex items-center gap-1 text-[#5A5953] hover:text-[#18181B] transition-colors cursor-pointer"
                >
                  <Camera className="w-3 h-3 text-[#18181B]" />
                  <span>Photo Source: <code className="font-mono text-[#18181B] bg-[#D7D6CF] px-1 py-0.5 rounded border border-[#BFBEB6]">/assets/profile.png</code></span>
                </button>
              </div>

              {showUploadTip && (
                <div className="text-left bg-[#ECEBE5] border border-[#BFBEB6] rounded-2xl p-3 text-xs text-[#18181B] space-y-1.5 animate-fadeIn shadow-2xs">
                  <p className="font-semibold text-[#18181B] flex items-center gap-1">
                    <Check className="w-3.5 h-3.5 text-[#18181B]" /> How to set your photo:
                  </p>
                  <ol className="list-decimal list-inside space-y-1 text-[#4A4943] text-[11px]">
                    <li>Click <strong>Select Photo</strong> above to preview it instantly in your browser session.</li>
                    <li>For permanent repository storage, save your file to <code className="bg-white px-1 py-0.5 rounded text-[#18181B] border border-[#C5C4BA]">/public/assets/profile.png</code> using the left file explorer.</li>
                  </ol>
                </div>
              )}

              {/* Concise Quick Bio Card */}
              <div className="text-left bg-[#ECEBE5]/90 rounded-2xl p-3.5 border border-[#C5C4BA] space-y-1.5 text-xs text-[#4A4943]">
                <div className="flex justify-between items-center text-[#4A4943] border-b border-[#BFBEB6]/80 pb-1.5">
                  <span className="font-medium text-[#18181B]">Department</span>
                  <span className="font-semibold text-[#18181B]">Mathematics</span>
                </div>
                <div className="flex justify-between items-center text-[#4A4943] border-b border-[#BFBEB6]/80 pb-1.5">
                  <span className="font-medium text-[#18181B]">Faculty Since</span>
                  <span className="font-semibold text-[#18181B]">6 August 2008</span>
                </div>
                <div className="flex justify-between items-center text-[#4A4943]">
                  <span className="font-medium text-[#18181B]">Doctoral Field</span>
                  <span className="text-[#18181B] font-bold">Bio-Mathematics</span>
                </div>
              </div>

              <div className="text-[11px] text-[#5A5953] text-center font-sans">
                Permanent Full-time Faculty • IIEST Shibpur Ph.D.
              </div>
            </div>
          </div>

        </div>

        {/* 4 Academic Pillars bottom strip inspired by the reference image's 4-column footer */}
        <div className="mt-12 pt-8 border-t border-[#BFBEB6] grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div className="pr-4 md:border-r border-[#BFBEB6]">
            <p className="font-sans font-extrabold text-xs tracking-wider uppercase text-[#111111] mb-1">
              MATHEMATICAL BIOLOGY
            </p>
            <p className="text-xs text-[#5A5953] leading-relaxed">
              Bio-economic predator-prey systems & marine reserve conservation.
            </p>
          </div>
          <div className="pr-4 md:border-r border-[#BFBEB6]">
            <p className="font-sans font-extrabold text-xs tracking-wider uppercase text-[#111111] mb-1">
              17+ YEARS FACULTY
            </p>
            <p className="text-xs text-[#5A5953] leading-relaxed">
              Teaching Engineering & Applied Mathematics at BPPIMT since 2008.
            </p>
          </div>
          <div className="pr-4 md:border-r border-[#BFBEB6]">
            <p className="font-sans font-extrabold text-xs tracking-wider uppercase text-[#111111] mb-1">
              6 RESEARCH PAPERS
            </p>
            <p className="text-xs text-[#5A5953] leading-relaxed">
              Published in Elsevier, Springer, & international peer-reviewed journals.
            </p>
          </div>
          <div className="pr-2">
            <p className="font-sans font-extrabold text-xs tracking-wider uppercase text-[#111111] mb-1">
              IIEST SHIBPUR PH.D.
            </p>
            <p className="text-xs text-[#5A5953] leading-relaxed">
              Doctoral research supervised by Prof. T.K. Kar on harvest management.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
