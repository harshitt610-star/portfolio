import React, { useEffect } from 'react';
import type { ProjectPlanet } from '../data/portfolioData';
import { GithubIcon } from './Icons';
import { X, ExternalLink, CheckCircle, Cpu, Sparkles } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectPlanet | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        backgroundColor: 'rgba(6, 17, 15, 0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)'
      }}
      onClick={onClose}
    >
      <div
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '680px',
          borderRadius: '24px',
          padding: '2.5rem',
          position: 'relative',
          borderColor: project.color ? `${project.color}55` : 'var(--border)',
          boxShadow: `0 20px 60px 0 rgba(0, 0, 0, 0.7), 0 0 40px 0 ${project.color}22`,
          maxHeight: '90vh',
          overflowY: 'auto'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'rgba(216, 181, 107, 0.1)',
            border: '1px solid var(--border)',
            color: 'var(--muted)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--text)';
            e.currentTarget.style.borderColor = 'var(--gold)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--muted)';
            e.currentTarget.style.borderColor = 'var(--border)';
          }}
        >
          <X size={20} />
        </button>

        {/* Header Metadata */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
          <span
            style={{
              padding: '0.3rem 0.8rem',
              borderRadius: '9999px',
              fontSize: '0.75rem',
              fontFamily: 'var(--font-chip)',
              fontWeight: 600,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              background: `${project.color}22`,
              color: project.color,
              border: `1px solid ${project.color}55`
            }}
          >
            Planet #{project.id} · {project.category}
          </span>
          {project.isCollab && (
            <span
              style={{
                padding: '0.3rem 0.8rem',
                borderRadius: '9999px',
                fontSize: '0.72rem',
                fontFamily: 'var(--font-chip)',
                fontWeight: 600,
                background: 'rgba(216, 181, 107, 0.15)',
                color: 'var(--gold)',
                border: '1px solid rgba(216, 181, 107, 0.3)'
              }}
            >
              Valorix Commercial
            </span>
          )}
        </div>

        {/* Title */}
        <h3
          className="font-heading"
          style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.2rem)',
            fontWeight: 700,
            marginBottom: '0.5rem',
            color: 'var(--text)'
          }}
        >
          {project.name}
        </h3>
        <p style={{ color: 'var(--gold-light)', fontSize: '0.95rem', marginBottom: '1.25rem' }}>
          {project.tagline}
        </p>

        {/* Role Pill */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.4rem 0.9rem',
            borderRadius: '8px',
            background: 'rgba(17, 25, 22, 0.8)',
            border: '1px solid var(--border)',
            fontSize: '0.8rem',
            color: 'var(--muted)',
            marginBottom: '1.5rem'
          }}
        >
          <Cpu size={14} color="var(--gold)" />
          <span>{project.role}</span>
        </div>

        {/* Description */}
        <p style={{ color: 'var(--muted)', lineHeight: 1.7, fontSize: '0.95rem', marginBottom: '1.75rem' }}>
          {project.description}
        </p>

        {/* Architectural Highlights */}
        <div style={{ marginBottom: '1.75rem' }}>
          <h4
            className="font-heading"
            style={{
              fontSize: '0.9rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--gold)',
              marginBottom: '0.75rem'
            }}
          >
            Engineering Highlights:
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {project.highlights.map((h, idx) => (
              <li
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.65rem',
                  fontSize: '0.88rem',
                  color: 'var(--text)',
                  lineHeight: 1.5
                }}
              >
                <CheckCircle size={16} color="#10b981" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Pills */}
        <div style={{ marginBottom: '2rem' }}>
          <h4
            className="font-heading"
            style={{
              fontSize: '0.85rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--muted)',
              marginBottom: '0.75rem'
            }}
          >
            Technologies & Tools:
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {project.tech.map((t, idx) => (
              <span
                key={idx}
                style={{
                  padding: '0.35rem 0.75rem',
                  borderRadius: '6px',
                  background: 'rgba(216, 181, 107, 0.1)',
                  border: '1px solid rgba(216, 181, 107, 0.2)',
                  fontSize: '0.78rem',
                  fontFamily: 'var(--font-chip)',
                  color: 'var(--text)'
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold-primary"
              style={{ fontSize: '0.85rem', padding: '0.65rem 1.3rem' }}
            >
              Open Live App <ExternalLink size={16} />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-secondary"
              style={{ fontSize: '0.85rem', padding: '0.65rem 1.3rem' }}
            >
              View GitHub Repo <GithubIcon size={16} />
            </a>
          )}
          {!project.liveUrl && !project.githubUrl && (
            <div
              style={{
                fontSize: '0.82rem',
                color: 'var(--muted)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <Sparkles size={16} color="var(--gold)" />
              <span>Commercial production property at Valorix Studio</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
