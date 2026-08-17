const impactMetrics = [
    { value: '2+', label: 'Years of professional experience' },
    { value: '1,000+', label: 'University employees supported directly' },
    { value: '25%', label: 'Reduction in recurring IT dependencies' },
];

const About = () => (
    <section className="section-shell scroll-mt-24" id="about" aria-labelledby="about-heading">
        <div className="section-heading">
            <p className="eyebrow">About me</p>
            <h2 id="about-heading">Engineering useful systems for the people who rely on them.</h2>
        </div>

        <div className="about-impact-layout">
            <div className="about-impact-copy">
                <p>
                    At Michigan State University, I work where software engineering meets day-to-day operations.
                    I turn recurring support needs into maintainable APIs, clearer workflows, and documentation
                    that helps teams move with less friction.
                </p>
                <p>
                    I bring a service mindset to engineering: listen closely, find the underlying problem, communicate
                    decisions clearly, and leave every system easier to use and maintain than I found it.
                </p>
            </div> 

            <dl className="impact-metrics" aria-label="Michigan State University impact">
                {impactMetrics.map(({ value, label }) => (
                    <div key={label}>
                        <dd>{value}</dd>
                        <dt>{label}</dt>
                    </div>
                ))}
            </dl>
        </div>
    </section>
);

export default About;
