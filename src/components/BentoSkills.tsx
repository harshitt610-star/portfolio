import React, { useRef } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Cpu, Server, Code, Award, CheckCircle2 } from 'lucide-react';

interface BentoCardProps {
  item: typeof PORTFOLIO_DATA.bentoSkills[0];
  icon: React.ReactNode;
}

const BentoCard: React.FC<BentoCardProps> = ({ item, icon }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="glass-panel glass-panel-hover"
      style={{
        borderRadius: '24px',
        padding: '2.5rem',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      {/* Spotlight Radial Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(216, 181, 107, 0.12), transparent 40%)',
          pointerEvents: 'none',
          transition: 'opacity 0.3s ease'
        }}
      />

      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              background: 'rgba(216, 181, 107, 0.15)',
              border: '1px solid var(--border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {icon}
          </div>
          <div>
            <h3 className="font-heading" style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text)' }}>
              {item.title}
            </h3>
            <span style={{ fontSize: '0.78rem', color: 'var(--gold)', fontFamily: 'var(--font-chip)' }}>
              {item.subtitle}
            </span>
          </div>
        </div>

        <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.75rem' }}>
          {item.highlight}
        </p>
      </div>

      <div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {item.skills.map((skill, idx) => (
            <span
              key={idx}
              style={{
                padding: '0.4rem 0.8rem',
                borderRadius: '8px',
                background: 'rgba(17, 25, 22, 0.7)',
                border: '1px solid var(--border)',
                fontSize: '0.8rem',
                color: 'var(--text)',
                fontFamily: 'var(--font-chip)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}
            >
              <CheckCircle2 size={12} color="#10b981" />
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export const BentoSkills: React.FC = () => {
  const icons = [
    <Code size={22} color="var(--gold)" />,
    <Server size={22} color="#34d399" />,
    <Cpu size={22} color="#f59e0b" />,
    <Award size={22} color="#38bdf8" />
  ];

  return (
    <section id="skills" className="section-padding" style={{ position: 'relative', zIndex: 10 }}>
      <div className="cosmic-container">
        {/* Section Header */}
        <div style={{ maxWidth: '780px', marginBottom: '3.5rem' }}>
          <span className="section-label">03 / Technical Expertise</span>
          <h2 className="section-title">
            Engineering <span className="text-gradient-gold">Command Center</span>
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Hover across the tiles to inspect my specialized toolchains, from browser-level AST interpreters to
            distributed MongoDB data pipelines.
          </p>
        </div>

        {/* 4-Tile Bento Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {PORTFOLIO_DATA.bentoSkills.map((item, idx) => (
            <BentoCard key={item.id} item={item} icon={icons[idx]} />
          ))}
        </div>
      </div>
    </section>
  );
};
