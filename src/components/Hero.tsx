import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowRight, Cpu, Terminal, Award } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '6rem',
        paddingBottom: '4rem',
        overflow: 'hidden'
      }}
    >
      {/* Background Ambient Mist Gradients */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(13, 74, 59, 0.4) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          animation: 'awaken-drift 14s infinite ease-in-out'
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '15%',
          right: '15%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(216, 181, 107, 0.2) 0%, transparent 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
          animation: 'awaken-drift 18s infinite ease-in-out reverse'
        }}
      />

      <div className="cosmic-container" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Narrative & Values */}
          <div>
            {/* Status Pill */}
            <div className="status-pill" style={{ marginBottom: '1.5rem' }}>
              <span className="pulse-dot"></span>
              {PORTFOLIO_DATA.personal.statusText}
            </div>

            {/* Main Typographic Headline */}
            <h1
              className="font-heading"
              style={{
                fontSize: 'clamp(2.5rem, 5.2vw, 4.4rem)',
                fontWeight: 700,
                lineHeight: 1.08,
                letterSpacing: '-0.02em',
                marginBottom: '1.25rem'
              }}
            >
              Building <span className="text-gradient-gold">Component-Driven</span> React Systems &{' '}
              <span className="text-gradient-emerald">Hardware Simulators</span>.
            </h1>

            {/* Narrative Summary */}
            <p
              style={{
                fontSize: 'clamp(1rem, 1.2vw, 1.15rem)',
                color: 'var(--muted)',
                lineHeight: 1.7,
                maxWidth: '560px',
                marginBottom: '2rem'
              }}
            >
              I bridge modern frontend web engineering with high-performance browser simulations.
              Crafting custom AST tokenizers, interactive React Flow circuit visualizers, and scalable MERN microservices.
            </p>

            {/* Key Milestone Tag */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                background: 'rgba(216, 181, 107, 0.1)',
                border: '1px solid rgba(216, 181, 107, 0.25)',
                marginBottom: '2.5rem',
                fontSize: '0.85rem',
                color: 'var(--gold-light)'
              }}
            >
              <Award size={18} color="var(--gold)" />
              <span style={{ fontWeight: 600 }}>{PORTFOLIO_DATA.personal.credentials.gate}</span>
              <span style={{ color: 'var(--muted)' }}>• SGPA 8.5/10</span>
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <a href="#universe" className="btn-gold-primary">
                Explore My Universe <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn-ghost-secondary">
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right Column: The Circuit Portal Ring */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div
              style={{
                position: 'relative',
                width: 'min(80vw, 420px)',
                height: 'min(80vw, 420px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {/* Outer Pulsing Wave Ripple */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-20px',
                  borderRadius: '50%',
                  border: '1px solid rgba(216, 181, 107, 0.35)',
                  animation: 'hp-ripple 4s infinite cubic-bezier(0.2, 0.8, 0.4, 1)'
                }}
              />

              {/* Concentric Rotating Outer Ring */}
              <div
                className="animate-spin-slow"
                style={{
                  position: 'absolute',
                  inset: '0px',
                  borderRadius: '50%',
                  border: '2px dashed rgba(216, 181, 107, 0.4)',
                  boxShadow: '0 0 35px rgba(216, 181, 107, 0.15)'
                }}
              />

              {/* Concentric Rotating Inner Ring (Counter Clockwise) */}
              <div
                className="animate-spin-reverse-slow"
                style={{
                  position: 'absolute',
                  inset: '25px',
                  borderRadius: '50%',
                  border: '1px dotted rgba(52, 211, 153, 0.5)'
                }}
              />

              {/* Portal Core Disc with Breathing Aura */}
              <div
                className="animate-breathe"
                style={{
                  position: 'relative',
                  width: '74%',
                  height: '74%',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle at 40% 40%, #0d4a3b 0%, #06110f 85%)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(216, 181, 107, 0.5)',
                  padding: '1.5rem',
                  textAlign: 'center'
                }}
              >
                {/* Circuit Icon Glyph */}
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '16px',
                    background: 'rgba(216, 181, 107, 0.15)',
                    border: '1px solid var(--gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem',
                    boxShadow: '0 0 20px rgba(216, 181, 107, 0.3)'
                  }}
                >
                  <Cpu size={32} color="var(--gold)" />
                </div>

                <span
                  className="font-heading"
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    color: 'var(--text)'
                  }}
                >
                  CIRCUIT STUDIO
                </span>
                <span
                  style={{
                    fontSize: '0.75rem',
                    color: '#34d399',
                    fontFamily: 'var(--font-chip)',
                    marginTop: '0.25rem',
                    letterSpacing: '0.06em'
                  }}
                >
                  AST & HARDWARE ENGINE
                </span>

                {/* Subtext info chip */}
                <div
                  style={{
                    marginTop: '1rem',
                    fontSize: '0.7rem',
                    color: 'var(--muted)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  <Terminal size={12} color="var(--gold)" />
                  <span>React Flow · RP2040</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
