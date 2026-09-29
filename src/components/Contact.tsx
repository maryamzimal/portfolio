export function Contact() {
  return (
    <section id="contact" className="section-div">
      <div className="wrap">
        <div className="reveal">
          <div className="sec-eyebrow">06 — Contact</div>
          <h2 className="sec-title">Let's build something meaningful.</h2>
          <p className="sec-desc">Have a role or a project in mind? I'd love to hear about it.</p>
        </div>
        <div className="contact-grid">
          <div className="reveal">
            <div className="contact-item">
              <div className="ic">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/>
                </svg>
              </div>
              <div><div className="label">Email</div><div className="val">taimoort137@gmail.com</div></div>
            </div>
            <div className="contact-item">
              <div className="ic">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.4 2.1L8 9.9a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2Z"/>
                </svg>
              </div>
              <div><div className="label">Phone</div><div className="val">0305 6461938</div></div>
            </div>
            <div className="contact-item">
              <div className="ic">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                </svg>
              </div>
              <div><div className="label">LinkedIn</div><div className="val">linkedin.com/in/taimoor-tariq-5510262ba</div></div>
            </div>
            <div className="contact-item" style={{ borderBottom: 'none' }}>
              <div className="ic">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div><div className="label">Location</div><div className="val">Faisalabad, Pakistan</div></div>
            </div>
          </div>
          <div className="reveal">
            <form id="contactForm" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="form-field"><label htmlFor="name">Name</label><input id="name" type="text" placeholder="Your name" /></div>
                <div className="form-field"><label htmlFor="email">Email</label><input id="email" type="email" placeholder="you@example.com" /></div>
              </div>
              <div className="form-field"><label htmlFor="subject">Subject</label><input id="subject" type="text" placeholder="What's this about?" /></div>
              <div className="form-field"><label htmlFor="message">Message</label><textarea id="message" rows={5} placeholder="Tell me about the opportunity or project..."></textarea></div>
              <button type="submit" className="btn btn-accent" style={{ width: '100%', justifyContent: 'center' }}>Send Message</button>
              <p className="note">Design preview only — this form isn't wired to an email backend yet.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
