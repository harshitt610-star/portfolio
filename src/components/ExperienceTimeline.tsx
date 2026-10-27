import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Calendar, CheckCircle2, Award } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="section-padding" style={{ position: 'relative', zIndex: 10 }}>
      <div className="cosmic-container">
        {/* Section Header */}
        <div style={{ maxWidth: '780px', marginBottom: '3.5rem' }}>
          <span className="section-label">05 / Professional Timeline</span>
          <h2 className="section-title">
            Industry Stations & <span className="text-gradient-gold">Milestones</span>
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Demonstrated track record of shipping commercial simulation tools, scalable microservices, and achieving national-level examination credentials.
          </p>
        </div>

        {/* Experience Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '4rem' }}>
          {PORTFOLIO_DATA.experiences.map((exp, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover"
              style={{
                borderRadius: '24px',
                padding: '2.5rem',
                position: 'relative'
              }}
            >
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.25rem' }}>
                <div>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-chip)',
                      fontWeight: 600,
                      color: 'var(--gold)',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '9999px',
                      background: 'rgba(216, 181, 107, 0.12)',
                      border: '1px solid rgba(216, 181, 107, 0.25)',
                      display: 'inline-block',
                      marginBottom: '0.5rem'
                    }}
                  >
                    {exp.type}
                  </span>
                  <h3 className="font-heading" style={{ fontSize: '1.45rem', fontWeight: 700, color: 'var(--text)' }}>
                    {exp.role}
                  </h3>
                  <span style={{ fontSize: '1rem', color: '#34d399', fontWeight: 500 }}>
                    {exp.company}
                  </span>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--muted)',
                    fontSize: '0.85rem',
                    fontFamily: 'var(--font-chip)'
                  }}
                >
                  <Calendar size={15} color="var(--gold)" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {exp.points.map((pt, pIdx) => (
                  <li
                    key={pIdx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      color: 'var(--muted)',
                      fontSize: '0.92rem',
                      lineHeight: 1.6
                    }}
                  >
                    <CheckCircle2 size={16} color="var(--gold)" style={{ flexShrink: 0, marginTop: '4px' }} />
                    <span style={{ color: 'var(--text)' }}>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications & Badges */}
        <div>
          <h3
            className="font-heading"
            style={{
              fontSize: '1.3rem',
              fontWeight: 700,
              color: 'var(--gold-light)',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <Award size={20} color="var(--gold)" /> Verified Certifications & Honors
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.25rem'
            }}
          >
            {PORTFOLIO_DATA.certifications.map((cert, idx) => (
              <div
                key={idx}
                className="glass-panel"
                style={{
                  borderRadius: '16px',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: '1px solid rgba(216, 181, 107, 0.2)'
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: '0.7rem',
                      fontFamily: 'var(--font-chip)',
                      color: '#34d399',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em'
                    }}
                  >
                    {cert.badge}
                  </span>
                  <h4
                    className="font-heading"
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      color: 'var(--text)',
                      marginTop: '0.4rem',
                      marginBottom: '0.5rem'
                    }}
                  >
                    {cert.title}
                  </h4>
                  <p style={{ color: 'var(--muted)', fontSize: '0.82rem' }}>
                    {cert.issuer}
                  </p>
                </div>
                <div style={{ marginTop: '1rem', fontSize: '0.75rem', color: 'var(--gold)' }}>
                  {cert.year}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
