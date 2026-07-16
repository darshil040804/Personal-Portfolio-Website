import { createElement } from 'react';
import { technologyCategories } from '../constants/index.js';

const TechStack = () => (
    <section className="section-shell scroll-mt-24" id="tech-stack" aria-labelledby="tech-heading">
        <div className="section-heading section-heading-compact">
            <p className="eyebrow">Technical toolkit</p>
            <h2 id="tech-heading">Tech Stack</h2>
            <p>Technologies I use to build, ship, and maintain modern applications.</p>
        </div>

        <div className="tech-category-grid">
            {technologyCategories.map(({ category, technologies }) => (
                <article className="tech-category" key={category}>
                    <header className="tech-category-header">
                        <h3>{category}</h3>
                    </header>
                    <ul className="tech-list" aria-label={`${category} technologies`}>
                        {technologies.map(({ name, icon, color }) => (
                            <li className="tech-item" key={name}>
                                {createElement(icon, { 'aria-hidden': true, style: { color } })}
                                <span>{name}</span>
                            </li>
                        ))}
                    </ul>
                </article>
            ))}
        </div>
    </section>
);

export default TechStack;
