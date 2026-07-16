import { FiCalendar, FiMapPin } from 'react-icons/fi';
import { workExperiences } from '../constants/index.js';

const Experience = () => (
    <section className="section-shell scroll-mt-24" id="experience" aria-labelledby="experience-heading">
        <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h2 id="experience-heading">Growing through three roles at Michigan State.</h2>
        </div>

        <div className="experience-organization">
            <header className="organization-header">
                <div className="organization-logo">
                    <img src="/assets/msu-logo.png" alt="Michigan State University Spartan logo" />
                </div>
                <div className="organization-identity">
                    <span>Employer</span>
                    <h3>Michigan State University</h3>
                    <p>
                        <FiMapPin aria-hidden="true" />
                        East Lansing, MI
                    </p>
                </div>
                <span className="organization-role-count">3 roles</span>
            </header>

            <ol className="role-list">
                {workExperiences.map(({ id, pos, duration, title }) => (
                    <li className="role-item" key={id}>
                        <span className="role-marker" aria-hidden="true" />
                        <article>
                            <div className="role-heading">
                                <div>
                                    <h4>{pos}</h4>
                                </div>
                                <span className="role-date">
                                    <FiCalendar aria-hidden="true" />
                                    {duration}
                                </span>
                            </div>
                            <p className="role-description">{title}</p>
                        </article>
                    </li>
                ))}
            </ol>
        </div>
    </section>
);

export default Experience;
