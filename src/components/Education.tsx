export function Education() {
  return (
    <section id="education">
      <div className="wrap">
        <div className="reveal">
          <div className="sec-eyebrow">05 — Education</div>
          <h2 className="sec-title">Education</h2>
        </div>
        <div className="edu-card reveal">
          <div className="edu-ic">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/>
            </svg>
          </div>
          <div>
            <h3>BS Computer Science</h3>
            <div className="meta mono">GCUF Faisalabad · Aug 2019 — Aug 2023</div>
            <div className="meta mono" style={{ marginTop: '6px', color: 'var(--accent)' }}>CGPA: 3.49</div>
            <div style={{ marginTop: '14px' }}>
              <div style={{ fontSize: '13px', color: 'var(--fg-subtle)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700, marginBottom: '8px' }}>Final Year Project</div>
              <div style={{ fontSize: '14.5px', fontWeight: 700, marginBottom: '4px' }}>Property Dealing Website</div>
              <div style={{ fontSize: '13.5px', color: 'var(--fg-muted)' }}>A full-stack real estate platform enabling users to buy, sell, and rent properties — featuring property listings, search filters, agent profiles, and inquiry management.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

