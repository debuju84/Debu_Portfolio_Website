import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Research } from './components/Research';
import { Publications } from './components/Publications';
import { Achievements } from './components/Achievements';
import { SeminarsAndWorkshops } from './components/SeminarsAndWorkshops';
import { ProfessionalDevelopment } from './components/ProfessionalDevelopment';
import { LanguagesAndInterests } from './components/LanguagesAndInterests';
import { Contact } from './components/Contact';
import { MissingItemsGuide } from './components/MissingItemsGuide';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';
import { PlaceholderModal } from './components/PlaceholderModal';

export default function App() {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [placeholderModalState, setPlaceholderModalState] = useState<{
    isOpen: boolean;
    linkName: string;
    placeholderKey: string;
  }>({
    isOpen: false,
    linkName: '',
    placeholderKey: '',
  });

  const handleOpenPlaceholderModal = (linkName: string, placeholderKey: string) => {
    setPlaceholderModalState({
      isOpen: true,
      linkName,
      placeholderKey,
    });
  };

  const handleClosePlaceholderModal = () => {
    setPlaceholderModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenCvModal={() => setIsCvModalOpen(true)} />

      {/* Main Portfolio Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenCvModal={() => setIsCvModalOpen(true)}
          onOpenPlaceholderModal={handleOpenPlaceholderModal}
        />

        {/* About Section */}
        <About />

        {/* Education Timeline */}
        <Education />

        {/* Professional Experience */}
        <Experience />

        {/* Research Profile & Keywords */}
        <Research />

        {/* Publications (Peer-Reviewed SCI/Scopus) */}
        <Publications />

        {/* National Achievements (GATE & NET) */}
        <Achievements />

        {/* Seminars & Workshops Attended */}
        <SeminarsAndWorkshops />

        {/* Professional Development & FDPs */}
        <ProfessionalDevelopment />

        {/* Languages & Extracurricular Interests */}
        <LanguagesAndInterests />

        {/* Official Contact & Academic Inquiries */}
        <Contact onOpenPlaceholderModal={handleOpenPlaceholderModal} />

        {/* Checklist for Missing Information / Assets */}
        <MissingItemsGuide />
      </main>

      {/* Footer */}
      <Footer onOpenPlaceholderModal={handleOpenPlaceholderModal} />

      {/* CV Download / Info Modal */}
      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />

      {/* Placeholder Details Dialog */}
      <PlaceholderModal
        isOpen={placeholderModalState.isOpen}
        linkName={placeholderModalState.linkName}
        placeholderKey={placeholderModalState.placeholderKey}
        onClose={handleClosePlaceholderModal}
      />
    </div>
  );
}
