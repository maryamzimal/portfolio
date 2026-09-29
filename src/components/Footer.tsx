export function Footer() {
  return (
    <footer>
      <div className="wrap foot-row">
        <div className="foot-left">© {new Date().getFullYear()} Muhammad Taimoor Jham — Software Engineer, MERN Stack Developer</div>
        <div className="foot-socials">
          <a href="mailto:taimoort137@gmail.com" aria-label="Email">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/>
            </svg>
          </a>
          <a href="https://linkedin.com/in/taimoor-tariq-5510262ba" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
