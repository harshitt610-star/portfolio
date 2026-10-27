import React from 'react';
import { Code2, Layers, Cpu } from 'lucide-react';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: <Cpu size={24} color="var(--gold)" />,
      title: 'Interactive Simulators & AST Parsers',
      desc: 'At Valorix Studio, I architected a custom MicroPython tokenizer and AST interpreter in TypeScript to simulate RP2040 chip execution inside the browser, with 40+ dynamic SVG hardware models.'
    },
    {
      icon: <Layers size={24} color="#34d399" />,
      title: 'Modular Monolith Monorepos',
      desc: 'Author of enterprise TypeScript architectures like Children’s Digital Library, orchestrating Express APIs, React Vite dashboards, and Expo apps using shared Zod contracts and Vitest test coverage.'
    },
    {
      icon: <Code2 size={24} color="#38bdf8" />,
      title: 'Production MERN & AI Solutions',
      desc: 'Shipped production platforms like FARMIX (AI smart precision agriculture with meteorological telemetry) and GateHub (GATE CSE portal with admin access control and PDF readers).'
    }
  ];

  const metrics = [
    { num: '6+', label: 'Months at Valorix Studio' },
    { num: '40+', label: 'SVG Component Models Built' },
    { num: '3+', label: 'Full-Stack MERN Platforms Shipped' },
    { num: '8.5', label: 'B.Tech CSE SGPA (GATE 2026)' }
  ];

  return (
    <section id="about" className="section-padding" style={{ position: 'relative', zIndex: 10 }}>
      <div className="cosmic-container">
        {/* Section Header */}
        <div style={{ maxWidth: '780px', marginBottom: '3.5rem' }}>
          <span className="section-label">01 / About My Engineering</span>
          <h2 className="section-title">
            More Than Just Interfaces.{' '}
            <span className="text-gradient-gold">Systems Built with Architectural Precision.</span>
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: 1.7 }}>
            I do not build fragile templates or generic CRUD clones. My focus lies at the intersection of
            complex client-side state engines (React Flow, AST interpreters) and resilient backend microservices.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
            marginBottom: '4rem'
          }}
        >
          {pillars.map((p, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover"
              style={{
                borderRadius: '16px',
                padding: '2rem'
              }}
            >
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  background: 'rgba(216, 181, 107, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                  border: '1px solid rgba(216, 181, 107, 0.2)'
                }}
              >
                {p.icon}
              </div>
              <h3
                className="font-heading"
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  marginBottom: '0.75rem',
                  color: 'var(--text)'
                }}
              >
                {p.title}
              </h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.65 }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Quantifiable Highlights Strip */}
        <div
          className="glass-panel"
          style={{
            borderRadius: '20px',
            padding: '2.5rem 2rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '2rem',
            textAlign: 'center',
            borderColor: 'rgba(216, 181, 107, 0.25)'
          }}
        >
          {metrics.map((m, idx) => (
            <div key={idx}>
              <div
                className="font-heading"
                style={{
                  fontSize: 'clamp(2.4rem, 4vw, 3.2rem)',
                  fontWeight: 700,
                  color: 'var(--gold)'
                }}
              >
                {m.num}
              </div>
              <div
                style={{
                  color: 'var(--muted)',
                  fontSize: '0.85rem',
                  marginTop: '0.25rem',
                  letterSpacing: '0.04em'
                }}
              >
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
