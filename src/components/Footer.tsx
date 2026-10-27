import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        padding: '3rem 0',
        backgroundColor: 'rgba(6, 17, 15, 0.95)',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div
        className="cosmic-container"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1.5rem'
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
            <div
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #d8b56b 0%, #0d4a3b 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontSize: '0.75rem',
                color: '#06110f'
              }}
            >
              HT
            </div>
            <span className="font-heading" style={{ fontWeight: 700, fontSize: '0.95rem', letterSpacing: '0.04em' }}>
              HARSHIT TIWARI
            </span>
          </div>
          <p style={{ color: 'var(--muted)', fontSize: '0.8rem' }}>
            Designed & Engineered with React, TypeScript & Three.js.
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a
            href={PORTFOLIO_DATA.personal.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            style={{
              color: 'var(--muted)',
              transition: 'color 0.2s ease',
              display: 'flex',
              alignItems: 'center'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
          >
            <GithubIcon size={18} />
          </a>

          <a
            href={PORTFOLIO_DATA.personal.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            style={{
              color: 'var(--muted)',
              transition: 'color 0.2s ease',
              display: 'flex',
              alignItems: 'center'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
          >
            <LinkedinIcon size={18} />
          </a>

          <a
            href={`mailto:${PORTFOLIO_DATA.personal.email}`}
            aria-label="Email"
            style={{
              color: 'var(--muted)',
              transition: 'color 0.2s ease',
              display: 'flex',
              alignItems: 'center'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
          >
            <Mail size={18} />
          </a>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'rgba(216, 181, 107, 0.1)',
              border: '1px solid var(--border)',
              color: 'var(--gold)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease',
              marginLeft: '0.5rem'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--gold)';
              e.currentTarget.style.color = '#06110f';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(216, 181, 107, 0.1)';
              e.currentTarget.style.color = 'var(--gold)';
            }}
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};
