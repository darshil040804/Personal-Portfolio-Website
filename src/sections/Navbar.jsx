import { useEffect, useState } from 'react';
import { FiFileText, FiGithub, FiLinkedin } from 'react-icons/fi';
import { githubUrl, linkedinUrl, navLinks, resumeUrl, transcriptUrl } from '../constants/index.js';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navigateToSection = (event, href) => {
        if (
            event.defaultPrevented ||
            event.button !== 0 ||
            event.metaKey ||
            event.ctrlKey ||
            event.shiftKey ||
            event.altKey
        ) {
            return;
        }

        const target = document.querySelector(href);
        if (!target) return;

        event.preventDefault();
        setIsOpen(false);
        target.classList.add('is-visible');

        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        window.history.pushState(null, '', href);
        target.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' });
    };

    useEffect(() => {
        const closeOnEscape = (event) => {
            if (event.key === 'Escape') setIsOpen(false);
        };
        window.addEventListener('keydown', closeOnEscape);
        return () => window.removeEventListener('keydown', closeOnEscape);
    }, []);

    return (
        <header className="site-header">
            <nav className="nav-shell" aria-label="Primary navigation">
                <a
                    href="#home"
                    className="brand"
                    aria-label="Darshil Desai, home"
                    onClick={(event) => navigateToSection(event, '#home')}
                >
                    Darshil.
                </a>
                <button
                    className="menu-button"
                    type="button"
                    aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
                    aria-expanded={isOpen}
                    aria-controls="primary-menu"
                    onClick={() => setIsOpen((open) => !open)}
                >
                    <span />
                    <span />
                </button>
                <ul id="primary-menu" className={`nav-links ${isOpen ? 'nav-links-open' : ''}`}>
                    {navLinks.map(({ id, href, name }) => (
                        <li key={id}>
                            <a href={href} onClick={(event) => navigateToSection(event, href)}>{name}</a>
                        </li>
                    ))}
                    <li>
                        {resumeUrl ? (
                            <a className="nav-resume-link" href={resumeUrl}>
                                <FiFileText aria-hidden="true" />
                                Résumé
                            </a>
                        ) : (
                            <span className="nav-resume-placeholder" aria-label="Résumé link coming soon">
                                <FiFileText aria-hidden="true" />
                                Résumé
                            </span>
                        )}
                    </li>
                    <li>
                        {transcriptUrl ? (
                            <a className="nav-resume-link" href={transcriptUrl}>
                                <FiFileText aria-hidden="true" />
                                Transcript
                            </a>
                        ) : (
                            <span className="nav-resume-placeholder" aria-label="Transcript link coming soon">
                                <FiFileText aria-hidden="true" />
                                Transcript
                            </span>
                        )}
                    </li>
                    <li>
                        <a
                            className="nav-social-link"
                            href={linkedinUrl}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn profile"
                            title="LinkedIn"
                        >
                            <FiLinkedin aria-hidden="true" />
                            <span className="nav-social-label">LinkedIn</span>
                        </a>
                    </li>
                    <li>
                        <a
                            className="nav-social-link"
                            href={githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub profile"
                            title="GitHub"
                        >
                            <FiGithub aria-hidden="true" />
                            <span className="nav-social-label">GitHub</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
