import React, { useState } from 'react';
import { X, Download, FileText, CheckCircle2, ExternalLink, Eye, ChevronDown } from 'lucide-react';
import { CV_DATA } from '../data/cvData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const [showPreview, setShowPreview] = useState(false);
  if (!isOpen) return null;

  const { profile } = CV_DATA;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div 
        id="cv-download-dialog"
        className={`bg-white rounded-2xl w-full p-5 sm:p-6 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-150 transition-all ${
          showPreview ? 'max-w-4xl max-h-[92vh] flex flex-col' : 'max-w-lg'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4 pr-10">
          <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center shrink-0">
            <FileText className="w-6 h-6 text-teal-700" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-900">
                Curriculum Vitae
              </h3>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-teal-100 text-teal-800 border border-teal-200">
                Official PDF
              </span>
            </div>
            <p className="text-xs text-slate-500 font-sans mt-0.5">
              {profile.fullName} • Department of Mathematics, BPPIMT
            </p>
          </div>
        </div>

        {/* Document Stats Box */}
        <div className="my-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs text-slate-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 font-medium text-slate-900">
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
              <span>Document: <code className="font-mono text-teal-800">Curriculum_Vitae.pdf</code></span>
            </div>
            <span className="text-slate-500 font-mono text-[11px]">3 Pages • 286 KB</span>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed">
            Contains comprehensive academic qualifications, research publications in SCI/Scopus journals, PhD thesis details, GATE/CSIR-NET qualifications, and workshop history.
          </p>
        </div>

        {/* Optional Embedded PDF Viewer */}
        {showPreview && (
          <div className="my-3 flex-1 min-h-[400px] sm:min-h-[500px] rounded-xl border border-slate-200 overflow-hidden bg-slate-100">
            <iframe
              src={`${profile.cvDownloadPath}#toolbar=1`}
              className="w-full h-full min-h-[400px] sm:min-h-[500px]"
              title={`${profile.fullName} - Curriculum Vitae`}
            />
          </div>
        )}

        {/* Actions Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 pt-3 mt-2 border-t border-slate-100">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setShowPreview(!showPreview)}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-teal-700 hover:bg-teal-50 border border-slate-200 rounded-lg transition-colors cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>{showPreview ? 'Hide Document Preview' : 'Preview Document in Window'}</span>
            </button>

            <a
              href={profile.cvDownloadPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-teal-700 hover:bg-teal-50 border border-slate-200 rounded-lg transition-colors cursor-pointer"
              title="Open full PDF in new browser tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open in New Tab</span>
            </a>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-3.5 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            >
              Close
            </button>

            <a
              href={profile.cvDownloadPath}
              download="Curriculum_Vitae_Dr_Debabrata_Das.pdf"
              id="modal-confirm-download-cv-btn"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-500 text-white font-semibold text-xs shadow-md transition-all cursor-pointer"
              title="Download official PDF to your device"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
