export function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="reveal">
          <div className="sec-eyebrow">03 — Skills</div>
          <h2 className="sec-title">Skills & Technologies</h2>
        </div>
        <div className="skills-grid">
          <div className="skill-cat reveal">
            <div className="skill-cat-head">
              <div className="ic">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                </svg>
              </div>
              <h4>Frontend</h4>
            </div>
            <div className="chip-row">
              <span className="chip">HTML5</span><span className="chip">CSS3</span><span className="chip">Bootstrap</span><span className="chip">Tailwind CSS</span><span className="chip">JavaScript</span><span className="chip">jQuery</span><span className="chip">React.js</span>
            </div>
          </div>
          <div className="skill-cat reveal">
            <div className="skill-cat-head">
              <div className="ic">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 17V7l8-4 8 4v10l-8 4-8-4Z"/><path d="M4 7l8 4 8-4"/><path d="M12 11v10"/>
                </svg>
              </div>
              <h4>Backend</h4>
            </div>
            <div className="chip-row">
              <span className="chip">Node.js</span>
            </div>
          </div>
          <div className="skill-cat reveal">
            <div className="skill-cat-head">
              <div className="ic">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>
                </svg>
              </div>
              <h4>Database</h4>
            </div>
            <div className="chip-row">
              <span className="chip">PostgreSQL</span><span className="chip">MongoDB</span>
            </div>
          </div>
          <div className="skill-cat reveal">
            <div className="skill-cat-head">
              <div className="ic">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/>
                </svg>
              </div>
              <h4>Tools & Other</h4>
            </div>
            <div className="chip-row">
              <span className="chip">Git</span><span className="chip">Graphic Designing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
