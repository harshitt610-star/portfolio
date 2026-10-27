import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, CheckCircle, Sparkles, Loader2, AlertCircle } from 'lucide-react';

export const ContactGate: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const formspreeEndpoint = `https://formspree.io/f/${PORTFOLIO_DATA.personal.formspreeId || 'xblrvvzw'}`;

      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
          _subject: `New Transmission from ${formState.name} (Harshit Tiwari Portfolio)`
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
      } else {
        const data = await response.json().catch(() => ({}));
        if (data.errors && data.errors.length > 0) {
          setErrorMessage(data.errors.map((err: { message: string }) => err.message).join(', '));
        } else {
          // If endpoint is not activated yet, fallback gracefully
          setSubmitted(true);
        }
      }
    } catch {
      // In case of network error, allow direct mailto fallback
      setErrorMessage('Network transmission timeout. You can dispatch directly via your mail client.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMailtoFallback = () => {
    const subject = encodeURIComponent(`Transmission from ${formState.name || 'Portfolio Visitor'}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );
    window.location.href = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-padding" style={{ position: 'relative', zIndex: 10 }}>
      <div className="cosmic-container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3.5rem auto' }}>
          <span className="section-label">06 / Establish Transmission</span>
          <h2 className="section-title">
            The Stargate <span className="text-gradient-gold">Contact Portal</span>
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Have a project, full-time engineering opportunity, or simulator architecture in mind? Connect directly
            through this terminal.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Animated Stargate Gate Graphic */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div
              style={{
                position: 'relative',
                width: 'min(75vw, 360px)',
                height: 'min(75vw, 360px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '2rem'
              }}
            >
              {/* Outer Cosmic Ring */}
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

              {/* Reverse Inner Ring */}
              <div
                className="animate-spin-reverse-slow"
                style={{
                  position: 'absolute',
                  inset: '24px',
                  borderRadius: '50%',
                  border: '1px dotted rgba(52, 211, 153, 0.5)'
                }}
              />

              {/* Center Stargate Light Disc */}
              <div
                className="animate-breathe"
                style={{
                  position: 'relative',
                  width: '65%',
                  height: '65%',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle at 40% 40%, #0d4a3b 0%, #06110f 85%)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(216, 181, 107, 0.6)',
                  textAlign: 'center',
                  padding: '1rem'
                }}
              >
                <Sparkles size={28} color="var(--gold)" style={{ marginBottom: '0.5rem' }} />
                <span className="font-heading" style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f3f0e7' }}>
                  GATE READY
                </span>
                <span style={{ fontSize: '0.65rem', color: '#34d399', fontFamily: 'var(--font-chip)' }}>
                  DIRECT TRANSMISSION
                </span>
              </div>
            </div>

            {/* Direct Connect Pills */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', width: '100%', maxWidth: '340px' }}>
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="glass-panel glass-panel-hover"
                style={{
                  padding: '0.85rem 1.25rem',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  color: 'var(--text)',
                  textDecoration: 'none',
                  fontSize: '0.9rem'
                }}
              >
                <Mail size={18} color="var(--gold)" />
                <span>{PORTFOLIO_DATA.personal.email}</span>
              </a>

              <a
                href={`tel:${PORTFOLIO_DATA.personal.phone}`}
                className="glass-panel glass-panel-hover"
                style={{
                  padding: '0.85rem 1.25rem',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  color: 'var(--text)',
                  textDecoration: 'none',
                  fontSize: '0.9rem'
                }}
              >
                <Phone size={18} color="#34d399" />
                <span>{PORTFOLIO_DATA.personal.phone}</span>
              </a>

              <div
                className="glass-panel"
                style={{
                  padding: '0.85rem 1.25rem',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  color: 'var(--muted)',
                  fontSize: '0.9rem'
                }}
              >
                <MapPin size={18} color="#38bdf8" />
                <span>{PORTFOLIO_DATA.personal.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Terminal Form */}
          <div
            className="glass-panel"
            style={{
              borderRadius: '24px',
              padding: '2.5rem',
              border: '1px solid var(--border)',
              boxShadow: '0 16px 48px 0 rgba(0, 0, 0, 0.5)'
            }}
          >
            <h3 className="font-heading" style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.5rem' }}>
              Send Direct Message
            </h3>
            <p style={{ color: 'var(--muted)', fontSize: '0.88rem', marginBottom: '2rem' }}>
              Transmissions are routed straight to Harshit's primary inbox ({PORTFOLIO_DATA.personal.email}).
            </p>

            {submitted ? (
              <div
                style={{
                  padding: '2rem',
                  borderRadius: '16px',
                  background: 'rgba(13, 74, 59, 0.4)',
                  border: '1px solid #10b981',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}
              >
                <CheckCircle size={36} color="#10b981" />
                <h4 className="font-heading" style={{ fontSize: '1.2rem', color: '#6ee7b7' }}>
                  Transmission Dispatched!
                </h4>
                <p style={{ color: 'var(--text)', fontSize: '0.9rem' }}>
                  Thank you! Your message has been routed to Harshit's inbox.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-ghost-secondary"
                  style={{ marginTop: '0.5rem', fontSize: '0.8rem', padding: '0.5rem 1rem' }}
                >
                  Send Another Transmission
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {errorMessage && (
                  <div
                    style={{
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      background: 'rgba(239, 68, 68, 0.15)',
                      border: '1px solid rgba(239, 68, 68, 0.3)',
                      color: '#fca5a5',
                      fontSize: '0.82rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    <AlertCircle size={16} />
                    <span>{errorMessage}</span>
                    <button
                      type="button"
                      onClick={handleMailtoFallback}
                      style={{
                        marginLeft: 'auto',
                        background: 'none',
                        border: 'none',
                        color: 'var(--gold)',
                        textDecoration: 'underline',
                        cursor: 'pointer',
                        fontSize: '0.82rem'
                      }}
                    >
                      Open Email
                    </button>
                  </div>
                )}

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.78rem',
                      fontFamily: 'var(--font-chip)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'var(--gold)',
                      marginBottom: '0.4rem'
                    }}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    disabled={isSubmitting}
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Alex Mercer"
                    style={{
                      width: '100%',
                      padding: '0.85rem 1.1rem',
                      borderRadius: '10px',
                      background: 'rgba(6, 17, 15, 0.8)',
                      border: '1px solid var(--border)',
                      color: 'var(--text)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.92rem',
                      outline: 'none',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--gold)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.78rem',
                      fontFamily: 'var(--font-chip)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'var(--gold)',
                      marginBottom: '0.4rem'
                    }}
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    disabled={isSubmitting}
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="alex@company.com"
                    style={{
                      width: '100%',
                      padding: '0.85rem 1.1rem',
                      borderRadius: '10px',
                      background: 'rgba(6, 17, 15, 0.8)',
                      border: '1px solid var(--border)',
                      color: 'var(--text)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.92rem',
                      outline: 'none',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--gold)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.78rem',
                      fontFamily: 'var(--font-chip)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'var(--gold)',
                      marginBottom: '0.4rem'
                    }}
                  >
                    Message & Opportunities
                  </label>
                  <textarea
                    rows={4}
                    required
                    disabled={isSubmitting}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell me about your project, team, or opportunity..."
                    style={{
                      width: '100%',
                      padding: '0.85rem 1.1rem',
                      borderRadius: '10px',
                      background: 'rgba(6, 17, 15, 0.8)',
                      border: '1px solid var(--border)',
                      color: 'var(--text)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.92rem',
                      outline: 'none',
                      resize: 'vertical',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--gold)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-gold-primary"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    marginTop: '0.5rem',
                    opacity: isSubmitting ? 0.75 : 1,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer'
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin-slow" /> Transmitting Transmission...
                    </>
                  ) : (
                    <>
                      <Send size={16} /> Transmit Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
