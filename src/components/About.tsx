export function About() {
  return (
    <>
      <section className="stats-strip">
        <div className="wrap">
          <div className="stats-row">
            <div className="stat reveal"><span className="num">2</span><span className="lbl">Professional Roles</span></div>
            <div className="stat reveal"><span className="num">2023</span><span className="lbl">CS Graduate, GCUF</span></div>
            <div className="stat reveal"><span className="num">MERN</span><span className="lbl">Primary Stack</span></div>
            <div className="stat reveal"><span className="num">7+</span><span className="lbl">Applications Built</span></div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="wrap">
          <div className="reveal">
            <div className="sec-eyebrow">01 — About</div>
            <h2 className="sec-title">About Me</h2>
          </div>
          <div className="about-grid">
            <div className="about-text reveal">
              <p>As a MERN Stack Developer, I bring a strong foundation in programming and a track record of contributing to the success of software projects. I focus on building scalable, efficient and user-friendly web applications.</p>
              <p>I'm experienced across the full stack — from responsive, accessible interfaces built with React and Tailwind CSS, to Node.js backends backed by PostgreSQL and MongoDB — and I have a talent for troubleshooting and implementing effective solutions.</p>
              <p>Based in Faisalabad, Pakistan, I currently work as a Full Stack Developer at HawkLogix, Lahore, contributing to products including an HRMS, EHR360.AI and a POS system.</p>
            </div>
            <div className="reveal">
              <div className="work-card">
                <h4>Frontend</h4>
                <div className="work-tags">
                  <span className="tag">React.js</span><span className="tag">JavaScript</span><span className="tag">Tailwind CSS</span><span className="tag">Bootstrap</span><span className="tag">HTML5 / CSS3</span>
                </div>
              </div>
              <div className="work-card">
                <h4>Backend</h4>
                <div className="work-tags">
                  <span className="tag">Node.js</span>
                </div>
              </div>
              <div className="work-card">
                <h4>Database</h4>
                <div className="work-tags">
                  <span className="tag">PostgreSQL</span><span className="tag">MongoDB</span>
                </div>
              </div>
              <div className="work-card">
                <h4>Tools & Other</h4>
                <div className="work-tags">
                  <span className="tag">Git</span><span className="tag">Graphic Designing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
