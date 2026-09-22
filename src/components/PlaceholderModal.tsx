import React, { useState } from 'react';
import { X, ExternalLink, Copy, Check, Info, Code } from 'lucide-react';

interface PlaceholderModalProps {
  isOpen: boolean;
  linkName: string;
  placeholderKey: string;
  onClose: () => void;
}

export const PlaceholderModal: React.FC<PlaceholderModalProps> = ({
  isOpen,
  linkName,
  placeholderKey,
  onClose
}) => {
  if (!isOpen) return null;

  const [copied, setCopied] = useState(false);

  const copyKey = () => {
    navigator.clipboard.writeText(placeholderKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs"
      onClick={onClose}
    >
      <div 
        id="placeholder-details-dialog"
        className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
            <Info className="w-5 h-5 text-amber-700" />
          </div>
          <div>
            <h3 className="font-serif text-lg font-bold text-slate-900">
              {linkName}
            </h3>
            <span className="text-[11px] text-amber-700 font-semibold px-2 py-0.5 rounded bg-amber-100/70">
              Placeholder Configured
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-3 text-xs sm:text-sm text-slate-600">
          <p>
            Dr. Debabrata Das's Curriculum Vitae includes a header link for <strong>{linkName}</strong>, but the text document does not include the exact external URL.
          </p>
          <p>
            In accordance with the strict academic accuracy mandate, we have not invented a URL. Instead, a clean placeholder has been established.
          </p>

          <div className="p-3 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-between gap-2">
            <code className="text-xs font-mono text-slate-800 font-semibold truncate">
              {placeholderKey}
            </code>
            <button
              type="button"
              onClick={copyKey}
              className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 cursor-pointer shrink-0"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-teal-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          <p className="text-[11px] text-slate-500 pt-1">
            To link your actual account, simply replace this placeholder in <code>src/data/cvData.ts</code> under <code>profile.links</code>.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-5 pt-3 border-t border-slate-100 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
          >
            Understood
          </button>
        </div>

      </div>
    </div>
  );
};
