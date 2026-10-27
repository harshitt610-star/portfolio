import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import type { ProjectPlanet } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { Eye, Compass, Layers } from 'lucide-react';

export const SolarOrbit: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectPlanet | null>(null);
  const [hoveredProject, setHoveredProject] = useState<ProjectPlanet | null>(null);
  const [viewMode, setViewMode] = useState<'orbit' | 'grid'>('orbit');

  const projects = PORTFOLIO_DATA.planets;

  return (
    <section id="universe" className="section-padding" style={{ position: 'relative', zIndex: 10, overflow: 'hidden' }}>
      <div className="cosmic-container">
        {/* Section Header */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-label">02 / Selected Works & Systems</span>
          <h2 className="section-title">
            Projects In My <span className="text-gradient-gold">Universe</span>
          </h2>
          <p style={{ color: 'var(--muted)', maxWidth: '640px', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Each orbiting celestial body represents a production engineering milestone. Click any planet to inspect its
            architecture, live deployment, or GitHub source.
          </p>

          {/* View Toggle */}
          <div
            style={{
              marginTop: '1.75rem',
              display: 'inline-flex',
              padding: '0.35rem',
              borderRadius: '9999px',
              background: 'rgba(17, 25, 22, 0.8)',
              border: '1px solid var(--border)',
              gap: '0.35rem'
            }}
          >
            <button
              onClick={() => setViewMode('orbit')}
              style={{
                padding: '0.5rem 1.25rem',
                borderRadius: '9999px',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.8rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                transition: 'all 0.3s ease',
                backgroundColor: viewMode === 'orbit' ? 'var(--gold)' : 'transparent',
                color: viewMode === 'orbit' ? '#06110f' : 'var(--muted)'
              }}
            >
              <Compass size={15} /> Orbit Universe
            </button>
            <button
              onClick={() => setViewMode('grid')}
              style={{
                padding: '0.5rem 1.25rem',
                borderRadius: '9999px',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.8rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                transition: 'all 0.3s ease',
                backgroundColor: viewMode === 'grid' ? 'var(--gold)' : 'transparent',
                color: viewMode === 'grid' ? '#06110f' : 'var(--muted)'
              }}
            >
              <Layers size={15} /> Grid Catalog
            </button>
          </div>
        </div>

        {/* View Mode 1: 3D Celestial Solar Orbit */}
        {viewMode === 'orbit' && (
          <div
            style={{
              position: 'relative',
              width: '100%',
              minHeight: '740px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem 0'
            }}
          >
            {/* Ambient Nebula Glow Behind Sun */}
            <div
              style={{
                position: 'absolute',
                width: '450px',
                height: '450px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(216, 181, 107, 0.22) 0%, rgba(13, 74, 59, 0.15) 50%, transparent 70%)',
                filter: 'blur(50px)',
                pointerEvents: 'none'
              }}
            />

            {/* Central Star Core (Harshit / Origin) */}
            <div
              className="animate-core"
              style={{
                position: 'relative',
                zIndex: 20,
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                background: 'radial-gradient(circle at 35% 35%, #fff 0%, #f0d99d 30%, #d8b56b 70%, #996515 100%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#06110f',
                cursor: 'default',
                userSelect: 'none'
              }}
            >
              <span className="font-heading" style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.08em' }}>
                ORIGIN
              </span>
              <span style={{ fontSize: '0.62rem', fontFamily: 'var(--font-chip)', fontWeight: 700 }}>HARSHIT</span>
            </div>

            {/* Elliptical Orbital Rings & Planets */}
            {projects.map((proj, idx) => {
              // Calculate geometric positioning angle
              const total = projects.length;
              const angleDeg = (idx / total) * 360 + 20;
              const angleRad = (angleDeg * Math.PI) / 180;
              
              // Elliptical coordinates (scale Y slightly for 3D orbital perspective)
              const x = Math.cos(angleRad) * proj.orbitRadius;
              const y = Math.sin(angleRad) * (proj.orbitRadius * 0.72);

              const isHovered = hoveredProject?.id === proj.id;

              return (
                <React.Fragment key={proj.id}>
                  {/* Concentric Dashed Orbit Track */}
                  <div
                    style={{
                      position: 'absolute',
                      width: `${proj.orbitRadius * 2}px`,
                      height: `${proj.orbitRadius * 2 * 0.72}px`,
                      borderRadius: '50%',
                      border: '1px dashed rgba(216, 181, 107, 0.16)',
                      pointerEvents: 'none',
                      zIndex: 5
                    }}
                  />

                  {/* Orbiting Planet Button */}
                  <div
                    style={{
                      position: 'absolute',
                      transform: `translate(${x}px, ${y}px)`,
                      zIndex: isHovered ? 35 : 15,
                      transition: 'transform 0.4s var(--ease-cine)'
                    }}
                  >
                    <button
                      onClick={() => setSelectedProject(proj)}
                      onMouseEnter={() => setHoveredProject(proj)}
                      onMouseLeave={() => setHoveredProject(null)}
                      style={{
                        width: `${proj.size}px`,
                        height: `${proj.size}px`,
                        borderRadius: '50%',
                        background: `radial-gradient(circle at 30% 30%, #ffffff 0%, ${proj.color} 50%, #000000 100%)`,
                        border: isHovered ? '2px solid #ffffff' : `1px solid ${proj.color}88`,
                        boxShadow: isHovered
                          ? `0 0 35px ${proj.color}, 0 0 70px ${proj.color}66`
                          : `0 0 16px ${proj.color}44`,
                        cursor: 'pointer',
                        transform: isHovered ? 'scale(1.3)' : 'scale(1)',
                        transition: 'all 0.35s var(--ease-cine)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#06110f',
                        position: 'relative'
                      }}
                      aria-label={`Inspect ${proj.name}`}
                    >
                      <span
                        className="font-heading"
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 800,
                          color: '#fff',
                          textShadow: '0 1px 3px rgba(0,0,0,0.8)'
                        }}
                      >
                        #{proj.id}
                      </span>
                    </button>

                    {/* Planet Name Label Underneath */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '105%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        whiteSpace: 'nowrap',
                        pointerEvents: 'none',
                        textAlign: 'center',
                        marginTop: '4px'
                      }}
                    >
                      <span
                        className="font-heading"
                        style={{
                          fontSize: '0.8rem',
                          fontWeight: 700,
                          color: isHovered ? 'var(--gold-light)' : 'var(--text)',
                          textShadow: '0 2px 8px rgba(0,0,0,0.9)',
                          display: 'block'
                        }}
                      >
                        {proj.name}
                      </span>
                      <span
                        style={{
                          fontSize: '0.65rem',
                          color: 'var(--muted)',
                          fontFamily: 'var(--font-chip)',
                          display: 'block'
                        }}
                      >
                        {proj.category}
                      </span>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        )}

        {/* View Mode 2: Responsive Bento Grid Catalog */}
        {viewMode === 'grid' && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1.75rem'
            }}
          >
            {projects.map((proj) => (
              <div
                key={proj.id}
                className="glass-panel glass-panel-hover"
                style={{
                  borderRadius: '20px',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  borderColor: `${proj.color}33`
                }}
                onClick={() => setSelectedProject(proj)}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontFamily: 'var(--font-chip)',
                        fontWeight: 600,
                        color: proj.color,
                        padding: '0.25rem 0.65rem',
                        borderRadius: '9999px',
                        background: `${proj.color}18`,
                        border: `1px solid ${proj.color}44`
                      }}
                    >
                      Planet #{proj.id} · {proj.category}
                    </span>
                    <div
                      style={{
                        width: '18px',
                        height: '18px',
                        borderRadius: '50%',
                        backgroundColor: proj.color,
                        boxShadow: `0 0 10px ${proj.color}`
                      }}
                    />
                  </div>

                  <h3 className="font-heading" style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                    {proj.name}
                  </h3>
                  <p style={{ color: 'var(--gold-light)', fontSize: '0.88rem', marginBottom: '0.85rem' }}>
                    {proj.tagline}
                  </p>
                  <p style={{ color: 'var(--muted)', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {proj.description}
                  </p>
                </div>

                <div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                    {proj.tech.slice(0, 4).map((t, idx) => (
                      <span
                        key={idx}
                        style={{
                          fontSize: '0.72rem',
                          padding: '0.2rem 0.55rem',
                          borderRadius: '4px',
                          background: 'rgba(216, 181, 107, 0.08)',
                          color: 'var(--text)',
                          border: '1px solid rgba(216, 181, 107, 0.15)'
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    className="btn-gold-primary"
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      fontSize: '0.82rem',
                      padding: '0.65rem 1rem'
                    }}
                  >
                    <Eye size={15} /> Inspect Architecture
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal Drawer for Selected Planet */}
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      </div>
    </section>
  );
};
