export function Projects() {
  return (
    <section id="projects" className="section-div">
      <div className="wrap">
        <div className="reveal">
          <div className="sec-eyebrow">04 — Projects</div>
          <h2 className="sec-title">Featured Projects</h2>
          <p className="sec-desc">Real-world applications I've contributed to, plus foundational projects that shaped my skills.</p>
        </div>
        <div className="proj-grid">
          <div className="proj-card reveal">
            <span className="cat">HRMS</span>
            <h3>Human Resource Management System</h3>
            <p>Managed employee records and HR-related information through the HRMS system.</p>
            <ul className="proj-feat">
              <li>Employee attendance & leave management</li>
              <li>Payroll-related data handling</li>
              <li>Report generation for HR operations</li>
            </ul>
            <span className="proj-arrow">
              Built at HawkLogix 
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </span>
          </div>
          <div className="proj-card reveal">
            <span className="cat">Healthcare</span>
            <h3>EHR360.AI</h3>
            <p>Worked with the EHR360.AI platform to manage and organize electronic health record information.</p>
            <ul className="proj-feat">
              <li>Patient & healthcare data maintenance</li>
              <li>Data entry and record updates</li>
              <li>Efficient retrieval of digital health records</li>
            </ul>
            <span className="proj-arrow">
              Built at HawkLogix 
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </span>
          </div>
        </div>
        <div className="proj-grid small">
          <div className="proj-card small reveal">
            <span className="cat">POS</span>
            <h3>Point of Sale System</h3>
            <p>Managed sales transactions including order processing, billing, payments and receipt generation.</p>
            <span className="proj-arrow">
              Built at HawkLogix 
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </span>
          </div>
          <div className="proj-card small reveal">
            <span className="cat">JavaScript</span>
            <h3>Blog Website</h3>
            <p>Responsive blog website with layouts for posts, categories and related content.</p>
            <span className="proj-arrow">
              Personal project 
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </span>
          </div>
          <div className="proj-card small reveal">
            <span className="cat">HTML / CSS / Bootstrap</span>
            <h3>Startup Landing Page</h3>
            <p>Modern, responsive landing page with company info, services, features and call-to-action sections.</p>
            <span className="proj-arrow">
              Personal project 
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </span>
          </div>
          <div className="proj-card small reveal">
            <span className="cat">JavaScript</span>
            <h3>To-Do List Application</h3>
            <p>Task management app with add, edit, delete and mark-complete functionality.</p>
            <span className="proj-arrow">
              Personal project 
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </span>
          </div>
          <div className="proj-card small reveal">
            <span className="cat">JavaScript</span>
            <h3>Calculator</h3>
            <p>Functional calculator handling addition, subtraction, multiplication and division with a clean UI.</p>
            <span className="proj-arrow">
              Personal project 
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
