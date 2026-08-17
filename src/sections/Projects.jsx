import { FiArrowUpRight, FiGithub } from 'react-icons/fi';
import { githubUrl, myProjects } from '../constants/index.js';

const Projects = () => (
    <section className="section-shell scroll-mt-24" id="projects" aria-labelledby="projects-heading">
        <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h2 id="projects-heading">Projects built to solve real problems.</h2>
        </div>

        <div className="projects-grid">
            {myProjects.map(({ title, desc, href, liveLink, logo, category, tags }) => (
                <article className="project-card" key={title}>
                    <a
                        className="project-card-link"
                        href={liveLink || href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${title} in a new tab`}
                    />
                    <div className="project-card-top">
                        <div className="project-logo-wrap">
                            <img src={logo} alt="" className="project-logo" />
                        </div>
                        <span className="project-label">Featured project</span>
                    </div>
                    <div className="project-content">
                        <h3>{title}</h3>
                        <p>{desc}</p>
                    </div>
                    {category && (
                        <ul className="category-tag-list" aria-label={`${title} category`}>
                            {category.map((cat) => <li key={cat}>{cat}</li>)}
                        </ul>
                    )}
                    <ul className="tag-list" aria-label={`${title} technologies`}>
                        {tags.map((tag) => <li key={tag}>{tag}</li>)}
                    </ul>
                    <div className="project-actions">
                        <a href={href} target="_blank" rel="noreferrer" aria-label={`View ${title} source code on GitHub`}>
                            <FiGithub aria-hidden="true" />
                            Code
                        </a>
                        {liveLink && (
                            <a href={liveLink} target="_blank" rel="noreferrer" aria-label={`Open live ${title} project`}>
                                <FiArrowUpRight aria-hidden="true" />
                                Live project
                            </a>
                        )}
                    </div>
                </article>
            ))}
        </div>
        <div className="projects-more">
            <a href={githubUrl} target="_blank" rel="noreferrer">
                <FiGithub aria-hidden="true" />
                View more projects on GitHub
                <FiArrowUpRight aria-hidden="true" />
            </a>
        </div>
    </section>
);

export default Projects;
