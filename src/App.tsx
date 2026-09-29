import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
// import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  useEffect(() => {
    // Scroll reveal
    const revealEls = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => io.observe(el));

    // Active nav link on scroll
    const sections = ['about', 'experience', 'skills', 'projects', 'education', 'contact'].map(id => document.getElementById(id));
    const navObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const link = document.querySelector('.nav-links a[href="#' + entry.target.id + '"]');
        if (link) {
          if (entry.isIntersecting) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        }
      });
    }, { rootMargin: '-40% 0px -50% 0px' });
    sections.forEach(s => s && navObs.observe(s));

    // Timeline fill on scroll
    const updateTimeline = () => {
      const timelineEl = document.getElementById('timeline');
      const timelineFill = document.getElementById('timelineFill');
      if (!timelineEl || !timelineFill) return;

      const rect = timelineEl.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height;
      const visible = Math.min(Math.max(vh * 0.75 - rect.top, 0), total);
      timelineFill.style.height = visible + 'px';
    };

    window.addEventListener('scroll', updateTimeline);
    window.addEventListener('resize', updateTimeline);
    // Initial call
    setTimeout(updateTimeline, 100);

    return () => {
      window.removeEventListener('scroll', updateTimeline);
      window.removeEventListener('resize', updateTimeline);
      revealEls.forEach(el => io.unobserve(el));
      sections.forEach(s => s && navObs.unobserve(s));
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      {/* <Education /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
