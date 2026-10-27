import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GitBranch, ShieldCheck, Building2 } from 'lucide-react';

export const CollabSection: React.FC = () => {
  const collab = PORTFOLIO_DATA.collabOrganization;

  return (
    <section id="collab" className="section-padding" style={{ position: 'relative', zIndex: 10 }}>
      <div className="cosmic-container">
        {/* Section Header */}
        <div style={{ maxWidth: '820px', marginBottom: '3.5rem' }}>
          <span className="section-label">04 / Enterprise Collaboration</span>
          <h2 className="section-title">
            Commercial Team Work at <span className="text-gradient-gold">Valorix Studio</span>
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Beyond solo engineering, I collaborate within multi-repo enterprise architectures. Here is the Qubinex
            Hospitality Suite developed under organization <code style={{ color: 'var(--gold)', background: 'rgba(216,181,107,0.1)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>hrmanager-lab</code>.
          </p>
        </div>

        {/* Collab Banner Card */}
        <div
          className="glass-panel"
          style={{
            borderRadius: '24px',
            padding: '2.5rem',
            border: '1px solid rgba(216, 181, 107, 0.3)',
            boxShadow: '0 12px 48px 0 rgba(0, 0, 0, 0.5), 0 0 35px 0 rgba(216, 181, 107, 0.08)',
            marginBottom: '2.5rem'
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'rgba(216, 181, 107, 0.15)',
                  border: '1px solid var(--gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Building2 size={22} color="var(--gold)" />
              </div>
              <div>
                <h3 className="font-heading" style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text)' }}>
                  {collab.title}
                </h3>
                <span style={{ fontSize: '0.8rem', color: '#34d399', fontFamily: 'var(--font-chip)' }}>
                  Organization: {collab.orgName}
                </span>
              </div>
            </div>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.4rem 0.9rem',
                borderRadius: '9999px',
                background: 'rgba(13, 74, 59, 0.5)',
                border: '1px solid #10b981',
                fontSize: '0.78rem',
                color: '#6ee7b7'
              }}
            >
              <ShieldCheck size={14} /> Verified Team Production
            </div>
          </div>

          <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: '900px', marginBottom: '2rem' }}>
            {collab.description}
          </p>

          {/* 4 Collaborative Repositories Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.25rem'
            }}
          >
            {collab.repositories.map((repo, idx) => (
              <div
                key={idx}
                style={{
                  padding: '1.5rem',
                  borderRadius: '16px',
                  background: 'rgba(6, 17, 15, 0.7)',
                  border: '1px solid rgba(216, 181, 107, 0.15)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.3s ease'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <GitBranch size={16} color="var(--gold)" />
                    <span className="font-heading" style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text)' }}>
                      {repo.name}
                    </span>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--gold-light)', display: 'block', marginBottom: '0.65rem' }}>
                    {repo.role}
                  </span>
                  <p style={{ color: 'var(--muted)', fontSize: '0.82rem', lineHeight: 1.5, marginBottom: '1rem' }}>
                    {repo.description}
                  </p>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                  {repo.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        padding: '0.2rem 0.5rem',
                        borderRadius: '4px',
                        background: 'rgba(216, 181, 107, 0.08)',
                        fontSize: '0.7rem',
                        fontFamily: 'var(--font-chip)',
                        color: 'var(--muted)'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
