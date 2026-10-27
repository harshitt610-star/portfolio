import React from 'react';
import { StarfieldCanvas } from './components/StarfieldCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { SolarOrbit } from './components/SolarOrbit';
import { BentoSkills } from './components/BentoSkills';
import { CollabSection } from './components/CollabSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ContactGate } from './components/ContactGate';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: 'var(--bg)' }}>
      {/* 3D WebGL Background Starfield Engine */}
      <StarfieldCanvas />

      {/* Foreground UI Components */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <SolarOrbit />
          <BentoSkills />
          <CollabSection />
          <ExperienceTimeline />
          <ContactGate />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
