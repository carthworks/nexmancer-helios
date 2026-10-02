'use client';

import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { CombustionTech } from '../components/CombustionTech';
import { VirtualController } from '../components/VirtualController';
import { InteractiveBlueprint } from '../components/InteractiveBlueprint';
import { SavingsCalculator } from '../components/SavingsCalculator';
import { Applications } from '../components/Applications';
import { SpecsTable } from '../components/SpecsTable';
import { FaqSection } from '../components/FaqSection';
import { Footer } from '../components/Footer';
import { PrototypeModal } from '../components/PrototypeModal';

export default function Home() {
  const [prototypeModalOpen, setPrototypeModalOpen] = useState(false);

  const handleOpenModal = () => {
    setPrototypeModalOpen(true);
  };

  const handleCloseModal = () => {
    setPrototypeModalOpen(false);
  };

  return (
    <main id="top" className="min-h-screen bg-[#090c0f] text-neutral-100 selection:bg-orange-500 selection:text-black">
      {/* Navigation */}
      <Navbar onOpenPrototypeModal={handleOpenModal} />

      {/* Hero Section */}
      <Hero onOpenPrototypeModal={handleOpenModal} />

      {/* Technology & Combustion Dynamics */}
      <CombustionTech />

      {/* Interactive Virtual Telemetry Console */}
      <VirtualController />

      {/* Full 4K Engineering Blueprint & Component Matrix */}
      <InteractiveBlueprint />

      {/* Savings, Deforestation & Carbon Impact Calculator */}
      <SavingsCalculator onOpenPrototypeModal={handleOpenModal} />

      {/* Real-World Field Applications */}
      <Applications onOpenPrototypeModal={handleOpenModal} />

      {/* Full Technical Specifications & Comparative Benchmark */}
      <SpecsTable onOpenPrototypeModal={handleOpenModal} />

      {/* Frequently Asked Questions */}
      <FaqSection />

      {/* Footer */}
      <Footer onOpenPrototypeModal={handleOpenModal} />

      {/* Global Interactive Prototype Request Modal */}
      <PrototypeModal isOpen={prototypeModalOpen} onClose={handleCloseModal} />
    </main>
  );
}
