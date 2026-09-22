import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, ExternalLink, Send, Building, Download, FileText } from 'lucide-react';
import { CV_DATA } from '../data/cvData';

interface ContactProps {
  onOpenPlaceholderModal: (linkName: string, placeholderKey: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenPlaceholderModal }) => {
  const { profile } = CV_DATA;
  const [copiedEmailKey, setCopiedEmailKey] = useState<string | null>(null);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Email drafting state
  const [targetEmail, setTargetEmail] = useState(profile.institutionalEmail || profile.email);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [senderName, setSenderName] = useState('');

  const handleCopyEmail = (emailStr: string, key: string) => {
    navigator.clipboard.writeText(emailStr);
    setCopiedEmailKey(key);
    setTimeout(() => setCopiedEmailKey(null), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(profile.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSendMailto = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${targetEmail}?subject=${encodeURIComponent(
      subject || 'Academic Inquiry / Collaboration'
    )}&body=${encodeURIComponent(
      `Dear Dr. Das,\n\n${message}\n\nSincerely,\n${senderName}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-teal-700 font-semibold text-xs tracking-wider uppercase mb-2">
            <Mail className="w-4 h-4 text-teal-600" />
            <span>Academic Correspondence</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Contact Dr. Debabrata Das
          </h2>
          <p className="mt-3 text-base text-slate-600 font-sans leading-relaxed">
            For academic inquiries, mathematical biology research discussions, guest lecture invitations, or student mentoring.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Official Contact Info from CV */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Primary Details Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <h3 className="font-serif text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                Official Directory Details
              </h3>

              <div className="space-y-5 text-sm">
                
                {/* Email - Selected Element */}
                <div 
                  id="contact-emails-container"
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-teal-300/80 transition-all shadow-2xs space-y-3"
                >
                  <div className="flex items-center justify-between border-b border-slate-200/80 pb-2.5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-200 flex items-center justify-center shrink-0">
                        <Mail className="w-4 h-4 text-teal-700" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                          Official Email Addresses
                        </span>
                        <span className="text-[11px] text-slate-500 font-sans block">
                          Institutional faculty address & direct correspondence
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-teal-100 text-teal-800 border border-teal-200">
                      2 Verified
                    </span>
                  </div>

                  {/* 1. Institutional Email (BPPIMT) */}
                  <div className="p-3 rounded-lg bg-white border border-teal-200/80 hover:border-teal-400 transition-all flex items-start justify-between gap-3 shadow-2xs">
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-1.5 mb-1">
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-teal-700 text-white shadow-2xs">
                          Institutional (BPPIMT)
                        </span>
                        <span className="text-[11px] text-teal-900 font-medium">
                          Department of Mathematics
                        </span>
                      </div>
                      <a
                        href={`mailto:${profile.institutionalEmail}`}
                        id="contact-institutional-email-link"
                        className="text-sm sm:text-base font-semibold text-slate-900 hover:text-teal-700 font-mono break-all transition-colors block"
                        title="Send email to debabrata.das@bppimt.ac.in"
                      >
                        {profile.institutionalEmail}
                      </a>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopyEmail(profile.institutionalEmail, 'institutional')}
                      title="Copy institutional email address"
                      className="p-2 rounded-md hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer shrink-0"
                    >
                      {copiedEmailKey === 'institutional' ? (
                        <div className="flex items-center gap-1 text-teal-600 font-sans text-xs font-semibold">
                          <Check className="w-4 h-4" />
                          <span className="text-[11px]">Copied</span>
                        </div>
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* 2. Direct / CV Listed Email */}
                  <div className="p-3 rounded-lg bg-white border border-slate-200 hover:border-slate-300 transition-all flex items-start justify-between gap-3 shadow-2xs">
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-1.5 mb-1">
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                          Direct / Listed in CV
                        </span>
                        <span className="text-[11px] text-slate-500">
                          Primary Research Contact
                        </span>
                      </div>
                      <a
                        href={`mailto:${profile.email}`}
                        id="contact-email-link"
                        className="text-sm sm:text-base font-semibold text-slate-900 hover:text-teal-700 font-mono break-all transition-colors block"
                        title="Send email to debuju84@gmail.com"
                      >
                        {profile.email}
                      </a>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopyEmail(profile.email, 'personal')}
                      title="Copy direct email address"
                      className="p-2 rounded-md hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer shrink-0"
                    >
                      {copiedEmailKey === 'personal' ? (
                        <div className="flex items-center gap-1 text-teal-600 font-sans text-xs font-semibold">
                          <Check className="w-4 h-4" />
                          <span className="text-[11px]">Copied</span>
                        </div>
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start justify-between gap-4 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-teal-50 border border-teal-200 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-teal-700" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                        Telephone
                      </span>
                      <a
                        href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`}
                        id="contact-phone-link"
                        className="text-base font-semibold text-slate-900 hover:text-teal-700 font-mono"
                      >
                        {profile.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyPhone}
                    title="Copy Phone"
                    className="p-2 rounded-md hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-teal-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-9 h-9 rounded-lg bg-teal-50 border border-teal-200 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-teal-700" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                      Residential / Postal Address
                    </span>
                    <p className="text-slate-800 font-medium">
                      {profile.address}
                    </p>
                  </div>
                </div>

                {/* Institutional Office */}
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-9 h-9 rounded-lg bg-teal-50 border border-teal-200 flex items-center justify-center shrink-0">
                    <Building className="w-4 h-4 text-teal-700" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                      Academic Department & Office
                    </span>
                    <p className="text-slate-800 font-medium">
                      {profile.department}
                    </p>
                    <p className="text-xs text-slate-600">
                      {profile.institution}
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* External Profile Links Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
              <h4 className="font-serif text-base font-bold text-slate-900">
                Academic & Professional Links
              </h4>
              <p className="text-xs text-slate-500 font-sans">
                URLs not specified in the original CV are configured with clearly marked placeholders ready for future linking:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                {/* Google Scholar */}
                {profile.links.googleScholar.url ? (
                  <a
                    href={profile.links.googleScholar.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-teal-200 hover:border-teal-500 bg-teal-50/50 hover:bg-teal-50 text-left transition-all cursor-pointer group flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900 group-hover:text-teal-900 block">
                        Google Scholar
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-teal-600 group-hover:text-teal-800" />
                    </div>
                    <span className="text-[10px] text-teal-700 font-medium block mt-1">
                      Verified Profile
                    </span>
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => onOpenPlaceholderModal("Google Scholar", profile.links.googleScholar.placeholderKey)}
                    className="p-3 rounded-xl border border-slate-200 hover:border-teal-500 bg-slate-50 hover:bg-teal-50/50 text-left transition-all cursor-pointer group"
                  >
                    <span className="text-xs font-bold text-slate-900 group-hover:text-teal-900 block">
                      Google Scholar
                    </span>
                    <span className="text-[10px] text-amber-700 font-mono block mt-1">
                      [Placeholder]
                    </span>
                  </button>
                )}

                {/* LinkedIn */}
                {profile.links.linkedin.url ? (
                  <a
                    href={profile.links.linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-teal-200 hover:border-teal-500 bg-teal-50/50 hover:bg-teal-50 text-left transition-all cursor-pointer group flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900 group-hover:text-teal-900 block">
                        LinkedIn
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-teal-600 group-hover:text-teal-800" />
                    </div>
                    <span className="text-[10px] text-teal-700 font-medium block mt-1">
                      Verified Profile
                    </span>
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => onOpenPlaceholderModal("LinkedIn", profile.links.linkedin.placeholderKey)}
                    className="p-3 rounded-xl border border-slate-200 hover:border-teal-500 bg-slate-50 hover:bg-teal-50/50 text-left transition-all cursor-pointer group"
                  >
                    <span className="text-xs font-bold text-slate-900 group-hover:text-teal-900 block">
                      LinkedIn
                    </span>
                    <span className="text-[10px] text-amber-700 font-mono block mt-1">
                      [Placeholder]
                    </span>
                  </button>
                )}

                {/* Personal Webpage */}
                {profile.links.webpage.url ? (
                  <a
                    href={profile.links.webpage.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-teal-200 hover:border-teal-500 bg-teal-50/50 hover:bg-teal-50 text-left transition-all cursor-pointer group flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900 group-hover:text-teal-900 block">
                        Personal Webpage
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-teal-600 group-hover:text-teal-800" />
                    </div>
                    <span className="text-[10px] text-teal-700 font-medium block mt-1">
                      External Link
                    </span>
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => onOpenPlaceholderModal("Personal Webpage", profile.links.webpage.placeholderKey)}
                    className="p-3 rounded-xl border border-slate-200 hover:border-teal-500 bg-slate-50 hover:bg-teal-50/50 text-left transition-all cursor-pointer group"
                  >
                    <span className="text-xs font-bold text-slate-900 group-hover:text-teal-900 block">
                      Personal Webpage
                    </span>
                    <span className="text-[10px] text-amber-700 font-mono block mt-1">
                      [Placeholder]
                    </span>
                  </button>
                )}
              </div>
            </div>

            {/* Official CV Download Card (Enabled when enableCvDownloadAndPreview is true) */}
            {profile.enableCvDownloadAndPreview && (
              <div className="bg-gradient-to-r from-teal-900 to-slate-900 text-white rounded-2xl p-5 border border-teal-800/60 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center shrink-0 text-teal-300">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm text-white">Official Curriculum Vitae</h4>
                    <p className="text-xs text-slate-300">Signed verified document • 3 pages • 286 KB</p>
                  </div>
                </div>
                <a
                  href={profile.cvDownloadPath}
                  download="Curriculum_Vitae_Dr_Debabrata_Das.pdf"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-500 text-white font-semibold text-xs transition-colors shadow-sm cursor-pointer shrink-0 w-full sm:w-auto"
                  title="Download Dr. Debabrata Das CV"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download CV</span>
                </a>
              </div>
            )}

          </div>

          {/* Direct Email Composition Helper */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm h-full flex flex-col justify-between">
              
              <div>
                <h3 className="font-serif text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                  Compose Email to Dr. Das
                </h3>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed font-sans">
                  Prepare your message below. Clicking "Send Message" opens your default mail application pre-addressed to <strong className="text-teal-800 font-mono">{targetEmail}</strong>.
                </p>

                {/* Recipient Selection Toggle */}
                <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Send to Email Address:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <button
                      type="button"
                      onClick={() => setTargetEmail(profile.institutionalEmail)}
                      className={`p-2 rounded-lg text-left transition-all cursor-pointer border flex flex-col justify-between ${
                        targetEmail === profile.institutionalEmail
                          ? 'bg-teal-50 border-teal-500 text-teal-900 shadow-2xs font-semibold'
                          : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800">Institutional</span>
                        {targetEmail === profile.institutionalEmail && <Check className="w-3.5 h-3.5 text-teal-700" />}
                      </div>
                      <span className="font-mono text-xs truncate mt-0.5">{profile.institutionalEmail}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setTargetEmail(profile.email)}
                      className={`p-2 rounded-lg text-left transition-all cursor-pointer border flex flex-col justify-between ${
                        targetEmail === profile.email
                          ? 'bg-teal-50 border-teal-500 text-teal-900 shadow-2xs font-semibold'
                          : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700">Direct / CV</span>
                        {targetEmail === profile.email && <Check className="w-3.5 h-3.5 text-teal-700" />}
                      </div>
                      <span className="font-mono text-xs truncate mt-0.5">{profile.email}</span>
                    </button>
                  </div>
                </div>

                <form onSubmit={handleSendMailto} className="mt-4 space-y-4">
                  <div>
                    <label htmlFor="senderName" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Your Name & Affiliation
                    </label>
                    <input
                      type="text"
                      id="senderName"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="Prof. / Dr. / Student Name, Institution"
                      className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="e.g., Research Collaboration / Mathematical Biology Inquiry"
                      className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Write your academic inquiry or discussion topic..."
                      className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    id="submit-contact-email-btn"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-teal-300" />
                    <span>Open Email Client & Send</span>
                  </button>
                </form>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-center text-xs text-slate-400 font-sans">
                Direct institutional mailbox: debuju84@gmail.com
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
