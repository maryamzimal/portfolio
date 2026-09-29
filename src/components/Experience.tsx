export function Experience() {
  return (
    <section id="experience" className="section-div">
      <div className="wrap">
        <div className="reveal">
          <div className="sec-eyebrow">02 — Experience</div>
          <h2 className="sec-title">Professional Experience</h2>
          <p className="sec-desc">A track record of shipping production web applications across two engineering roles.</p>
        </div>
        <div className="timeline" id="timeline">
          <div className="timeline-fill" id="timelineFill"></div>
          <div className="exp-item reveal">
            <div className="exp-dot"></div>
            <div className="exp-role">Full Stack Developer</div>
            <div className="exp-meta">
              <span className="company">HawkLogix</span>
              <span>Lahore</span>
              <span className="mono">May 2025 — Present</span>
            </div>
            <ul className="exp-list">
              <li>Designed and developed a fully responsive portfolio website using React, Tailwind CSS, PostgreSQL and Node.js, ensuring compatibility across mobile, tablet and desktop devices.</li>
              <li>Worked on a Human Resource Management System (HRMS).</li>
              <li>Worked on EHR360.AI, an electronic health record platform.</li>
              <li>Worked on a POS (Point of Sale) system.</li>
            </ul>
          </div>
          <div className="exp-item reveal">
            <div className="exp-dot"></div>
            <div className="exp-role">Front End Developer</div>
            <div className="exp-meta">
              <span className="company">RockTech Digital</span>
              <span>Lahore</span>
              <span className="mono">May 2024 — Jan 2025</span>
            </div>
            <ul className="exp-list">
              <li>Designed and developed a fully responsive portfolio website using HTML, CSS and Bootstrap, ensuring compatibility across mobile, tablet and desktop devices.</li>
              <li>Developed a dynamic To-Do List application using JavaScript with add, delete and update functionality.</li>
              <li>Developed an e-commerce product page using JavaScript, including dynamic filtering, sorting and cart management.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
