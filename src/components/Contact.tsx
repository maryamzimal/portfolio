import { useState } from 'react';

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      subject: (form.elements.namedItem('subject') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (err) {
      setStatus('error');
    }
  };

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
            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-field"><label htmlFor="name">Name</label><input id="name" name="name" type="text" placeholder="Your name" required /></div>
                <div className="form-field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" placeholder="you@example.com" required /></div>
              </div>
              <div className="form-field"><label htmlFor="subject">Subject</label><input id="subject" name="subject" type="text" placeholder="What's this about?" required /></div>
              <div className="form-field"><label htmlFor="message">Message</label><textarea id="message" name="message" rows={5} placeholder="Tell me about the opportunity or project..." required></textarea></div>
              <button type="submit" className="btn btn-accent" style={{ width: '100%', justifyContent: 'center' }} disabled={status === 'loading'}>
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'success' && <p className="note" style={{ color: '#4caf50' }}>Message sent successfully!</p>}
              {status === 'error' && <p className="note" style={{ color: '#f44336' }}>Failed to send message. Please try again.</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
