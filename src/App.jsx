import { lazy, Suspense, useEffect } from 'react';
import Navbar from './sections/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import TechStack from './sections/TechStack.jsx';
import Projects from './sections/Projects.jsx';
import Experience from './sections/Experience.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './sections/Footer.jsx';
import BackToTop from './components/BackToTop.jsx';
import { documentDefinitions } from './constants/index.js';

const DocumentViewer = lazy(() => import('./components/DocumentViewer.jsx'));

const App = () => {
    const documentKey = new URLSearchParams(window.location.search).get('document');
    const activeDocument = documentDefinitions[documentKey];

    useEffect(() => {
        let observer;
        let scrollFrame;
        let layoutTimer;

        const scrollToHash = () => {
            const section = window.location.hash
                ? document.getElementById(window.location.hash.slice(1))
                : null;
            if (!section) return;

            section.classList.add('is-visible');
            section.scrollIntoView({ behavior: 'auto', block: 'start' });
            scrollFrame = window.requestAnimationFrame(() => {
                section.scrollIntoView({ behavior: 'auto', block: 'start' });
            });
            layoutTimer = window.setTimeout(() => {
                section.scrollIntoView({ behavior: 'auto', block: 'start' });
            }, 250);
        };

        scrollToHash();
        window.addEventListener('hashchange', scrollToHash);

        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!reducedMotion && 'IntersectionObserver' in window) {
            const sections = document.querySelectorAll('.section-shell');
            document.documentElement.classList.add('reveal-enabled');

            observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('is-visible');
                            observer.unobserve(entry.target);
                        }
                    });
                },
                { threshold: 0.08, rootMargin: '0px 0px -8% 0px' },
            );

            sections.forEach((section) => observer.observe(section));
        }

        return () => {
            if (scrollFrame) window.cancelAnimationFrame(scrollFrame);
            if (layoutTimer) window.clearTimeout(layoutTimer);
            window.removeEventListener('hashchange', scrollToHash);
            observer?.disconnect();
            document.documentElement.classList.remove('reveal-enabled');
        };
    }, []);

    if (activeDocument) {
        return (
            <Suspense fallback={<main className="document-loading">Loading document viewer…</main>}>
                <DocumentViewer document={activeDocument} />
            </Suspense>
        );
    }

    return (
        <>
            <a className="skip-link" href="#main-content">Skip to main content</a>
            <Navbar />
            <main id="main-content">
                <Hero />
                <About />
                <TechStack />
                <Projects />
                <Experience />
                <Contact />
            </main>
            <Footer />
            <BackToTop />
        </>
    );
};

export default App;
