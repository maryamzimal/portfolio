export function Hero() {
  return (
    <section id="hero" style={{ overflow: 'hidden' }}>
      <div className="grid-bg"></div>
      <div className="orb"></div>
      <div className="wrap" style={{ position: 'relative' }}>
        <div className="hero-grid">
          <div>
            <span className="eyebrow"><span className="dot"></span>SOFTWARE ENGINEER • MERN STACK DEVELOPER</span>
            <h1 className="hero-h">Hi, I'm Muhammad<br/><span className="accent-text">Taimoor Jham.</span></h1>
            <p className="hero-sub">A MERN Stack Developer with a strong foundation in building scalable, efficient and user-friendly web applications — currently shipping full-stack products at HawkLogix, Lahore.</p>
            <div className="hero-ctas">
              <a href="/Resume.pdf" download="Muhammad_Taimoor_Jham_Resume.pdf" className="btn btn-accent">Download Resume</a>
              <a href="#contact" className="btn btn-ghost">Let's Connect</a>
            </div>
          </div>
          <div className="hero-visual">
            <div style={{ position: 'relative', width: 'min(400px, 90vw)' }}>
              <div className="code-glow"></div>
              <div className="code-window">
                <div className="code-head">
                  <span className="code-dot r"></span><span className="code-dot y"></span><span className="code-dot g"></span>
                  <span className="code-tab">developer.js</span>
                </div>
                <div className="code-body">
                  <span className="ln">1</span><span className="c-key">const</span> <span className="c-var">developer</span> <span className="c-punc">=</span> {'{'}<br/>
                  <span className="ln">2</span>&nbsp;&nbsp;<span className="c-prop">name</span><span className="c-punc">:</span> <span className="c-str">'Taimoor Jham'</span>,<br/>
                  <span className="ln">3</span>&nbsp;&nbsp;<span className="c-prop">role</span><span className="c-punc">:</span> <span className="c-str">'MERN Stack Developer'</span>,<br/>
                  <span className="ln">4</span>&nbsp;&nbsp;<span className="c-prop">stack</span><span className="c-punc">:</span> [<span className="c-str">'React'</span>, <span className="c-str">'Node'</span>, <span className="c-str">'Mongo'</span>],<br/>
                  <span className="ln">5</span>&nbsp;&nbsp;<span className="c-prop">based</span><span className="c-punc">:</span> <span className="c-str">'Faisalabad, PK'</span>,<br/>
                  <span className="ln">6</span>&nbsp;&nbsp;<span className="c-prop">available</span><span className="c-punc">:</span> <span className="c-bool">true</span>,<br/>
                  <span className="ln">7</span>{'}'};<span className="cursor-blink"></span>
                </div>
              </div>
              <div className="float-badge badge-1">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                </svg>React.js
              </div>
              <div className="float-badge badge-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 17V7l8-4 8 4v10l-8 4-8-4Z"/>
                </svg>Node.js
              </div>
              <div className="float-badge badge-3">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/>
                </svg>MongoDB
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
