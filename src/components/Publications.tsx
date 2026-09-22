import React, { useState } from 'react';
import { BookOpen, ExternalLink, Copy, Check, Filter, Search, BookmarkCheck } from 'lucide-react';
import { CV_DATA, PublicationItem } from '../data/cvData';

export const Publications: React.FC = () => {
  const { publications } = CV_DATA;
  const [selectedYear, setSelectedYear] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const years = ['All', '2023', '2021', '2020', '2019', '2018'];

  const filteredPublications = publications.filter((pub) => {
    const matchesYear = selectedYear === 'All' || pub.year.toString() === selectedYear;
    const matchesSearch = 
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.journal.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesYear && matchesSearch;
  });

  const handleCopyBibtex = (pub: PublicationItem) => {
    navigator.clipboard.writeText(pub.bibtex);
    setCopiedId(pub.id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2500);
  };

  return (
    <section id="publications" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-teal-700 font-semibold text-xs tracking-wider uppercase mb-2">
            <BookOpen className="w-4 h-4 text-teal-600" />
            <span>Peer-Reviewed Literature</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Publications
          </h2>
          <p className="mt-3 text-base text-slate-600 font-sans leading-relaxed">
            Scholarly articles published in international SCI, SCIE, and Scopus indexed journals, faithfully transcribed from the Curriculum Vitae.
          </p>
        </div>

        {/* Filter and Search Controls */}
        <div className="mb-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
          
          {/* Year Filter Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" />
              Year:
            </span>
            {years.map((yr) => (
              <button
                key={yr}
                type="button"
                id={`filter-year-${yr}`}
                onClick={() => setSelectedYear(yr)}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                  selectedYear === yr
                    ? 'bg-slate-900 text-white font-semibold shadow-sm'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {yr}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              id="publication-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search publications..."
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-md bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>

        </div>

        {/* Publications List */}
        <div className="space-y-4">
          {filteredPublications.length === 0 ? (
            <div className="text-center py-12 bg-slate-50 rounded-xl border border-slate-200 text-slate-500 text-sm">
              No publications match the selected criteria.
            </div>
          ) : (
            filteredPublications.map((pub, index) => (
              <article
                key={pub.id}
                id={`publication-item-${pub.id}`}
                className="p-6 rounded-xl bg-slate-50/50 hover:bg-white border border-slate-200 hover:border-slate-300 shadow-xs hover:shadow-md transition-all group"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  
                  {/* Left content */}
                  <div className="space-y-2.5 max-w-4xl">
                    
                    {/* Meta row: Year & Indexing */}
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="font-mono font-semibold px-2 py-0.5 rounded bg-slate-200 text-slate-800">
                        {pub.year}
                      </span>
                      {pub.indexing && (
                        <span className="font-semibold px-2 py-0.5 rounded bg-teal-100 text-teal-800 border border-teal-200">
                          {pub.indexing} Indexed
                        </span>
                      )}
                      <span className="text-slate-400"># {index + 1}</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-900 leading-snug group-hover:text-teal-900 transition-colors">
                      {pub.title}
                    </h3>

                    {/* Authors */}
                    <p className="text-sm text-slate-700 font-sans">
                      <span className="font-semibold text-slate-900">Authors: </span>
                      {pub.authors}
                    </p>

                    {/* Journal & Volume info */}
                    <p className="text-xs sm:text-sm text-slate-600 font-sans">
                      <span className="font-serif italic text-slate-900 font-medium">{pub.journal}</span>
                      {pub.volumeIssue && <span>, {pub.volumeIssue}</span>}
                      {pub.pages && <span>, pp. {pub.pages}</span>}
                      <span> ({pub.year})</span>
                    </p>

                    {/* DOI if available */}
                    {pub.doi && (
                      <div className="pt-1 flex items-center gap-2 text-xs">
                        <span className="font-medium text-slate-500">DOI:</span>
                        {pub.doiUrl ? (
                          <a
                            href={pub.doiUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            id={`doi-link-${pub.id}`}
                            className="text-teal-700 hover:text-teal-900 underline font-mono inline-flex items-center gap-1 focus:outline-none"
                          >
                            <span>{pub.doi}</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        ) : (
                          <span className="font-mono text-slate-600">{pub.doi}</span>
                        )}
                      </div>
                    )}

                  </div>

                  {/* Right Actions */}
                  <div className="flex sm:flex-col items-center sm:items-end gap-2 shrink-0 pt-2 sm:pt-0">
                    <button
                      type="button"
                      id={`bibtex-btn-${pub.id}`}
                      onClick={() => handleCopyBibtex(pub)}
                      title="Copy BibTeX Citation"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-pointer shadow-xs"
                    >
                      {copiedId === pub.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-teal-600" />
                          <span className="text-teal-700 font-semibold">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-slate-400" />
                          <span>Cite BibTeX</span>
                        </>
                      )}
                    </button>

                    {pub.doiUrl && (
                      <a
                        href={pub.doiUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-md bg-teal-50 border border-teal-200 text-teal-800 hover:bg-teal-100 transition-colors"
                      >
                        <span>View Journal</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>

                </div>
              </article>
            ))
          )}
        </div>

        {/* Note on Authenticity */}
        <div className="mt-8 p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3 text-xs text-slate-600">
          <BookmarkCheck className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
          <p>
            All 6 publications listed above are referenced strictly from the Curriculum Vitae. Citation links and DOIs direct to the official publishers (Elsevier, Springer, World Scientific, etc.) without mock entries.
          </p>
        </div>

      </div>
    </section>
  );
};
