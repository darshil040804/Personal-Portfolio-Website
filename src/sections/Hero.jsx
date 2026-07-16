import { FiArrowDownRight, FiFileText, FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi';
import { githubUrl, linkedinUrl, resumeUrl, transcriptUrl } from '../constants/index.js';

const Hero = () => (
    <section className="hero-section" id="home" aria-labelledby="hero-heading">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-system-map" aria-hidden="true">
            <span className="system-caption">FULL_STACK / SYSTEM</span>
            <span className="system-node node-interface">01 · INTERFACE</span>
            <span className="system-node node-api">02 · API</span>
            <span className="system-node node-data">03 · DATA</span>
            <span className="system-node node-cloud">04 · CLOUD</span>
            <span className="system-line line-interface-api" />
            <span className="system-line line-api-data" />
            <span className="system-line line-api-cloud" />
            <span className="system-pulse pulse-one" />
            <span className="system-pulse pulse-two" />
            <span className="system-note">request → validate → persist → deploy</span>
        </div>
        <div className="hero-content">
            <div className="hero-status">
                <span className="availability-dot" aria-hidden="true" />
                Open to software engineering opportunities
            </div>
            <p className="eyebrow">Darshil Desai · East Lansing, Michigan</p>
            <h1 id="hero-heading">
                Software engineer building <span>complete digital products.</span>
            </h1>
            <p className="hero-summary">
                I design and develop dependable full-stack applications, from intuitive interfaces to scalable APIs,
                data systems, and cloud infrastructure.
            </p>
            <div className="hero-actions">
                <a className="primary-button" href="#projects">
                    Explore my work
                    <FiArrowDownRight aria-hidden="true" />
                </a>
                <a className="secondary-button" href="mailto:darshil.desai.040804@gmail.com">
                    <FiMail aria-hidden="true" />
                    Email me
                </a>
            </div>
            <div className="hero-resource-actions" aria-label="Professional links">
                {resumeUrl ? (
                    <a className="resource-button" href={resumeUrl}>
                        <FiFileText aria-hidden="true" />
                        Résumé
                    </a>
                ) : (
                    <button
                        className="resource-button resume-placeholder"
                        type="button"
                        disabled
                        title="Résumé link coming soon"
                    >
                        <FiFileText aria-hidden="true" />
                        Résumé coming soon
                    </button>
                )}
                {transcriptUrl ? (
                    <a className="resource-button" href={transcriptUrl}>
                        <FiFileText aria-hidden="true" />
                        Transcript
                    </a>
                ) : (
                    <button className="resource-button resume-placeholder" type="button" disabled>
                        <FiFileText aria-hidden="true" />
                        Transcript coming soon
                    </button>
                )}
                <a
                    className="resource-button resource-button-social"
                    href={linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                >
                    <FiLinkedin aria-hidden="true" />
                    LinkedIn
                </a>
                <a
                    className="resource-button resource-button-social"
                    href={githubUrl}
                    target="_blank"
                    rel="noreferrer"
                >
                    <FiGithub aria-hidden="true" />
                    GitHub
                </a>
            </div>
        </div>

        <aside className="hero-snapshot" aria-label="Professional summary">
            <div className="snapshot-heading">
                <span>At a glance</span>
            </div>
            <div className="snapshot-section">
                <h3>Education</h3>
                <div className="snapshot-detail">
                    <div className="snapshot-icon">
                        <img src="/assets/msu-logo.png" alt="Michigan State University Spartan logo" />
                    </div>
                    <div className="snapshot-copy">
                        <strong>Michigan State University</strong>
                        <p>Bachelor of Science in Computer Science</p>
                        <b>GPA 4.0</b>
                        {transcriptUrl ? (
                            <a className="snapshot-document-link" href={transcriptUrl}>
                                <FiFileText aria-hidden="true" />
                                View transcript
                            </a>
                        ) : (
                            <button className="snapshot-document-link" type="button" disabled>
                                <FiFileText aria-hidden="true" />
                                Transcript coming soon
                            </button>
                        )}
                    </div>
                </div>
            </div>
            <div className="snapshot-section">
                <h3>Mobility</h3>
                <div className="snapshot-detail">
                    <div className="snapshot-icon snapshot-icon-location">
                        <FiMapPin aria-hidden="true" />
                    </div>
                    <div className="snapshot-copy">
                        <strong>Open to working remotely or to relocate anywhere within the USA</strong>
                    </div>
                </div>
            </div>
            <div className="snapshot-focus">
                <h3>Primary focus</h3>
                <strong>Software Engineering</strong>
                <strong>Full-Stack Development</strong>
            </div>
        </aside>
    </section>
);

export default Hero;
