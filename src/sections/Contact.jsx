import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FiArrowUpRight, FiMail } from 'react-icons/fi';

const initialForm = { name: '', email: '', message: '' };

const Contact = () => {
    const formRef = useRef(null);
    const [form, setForm] = useState(initialForm);
    const [status, setStatus] = useState({ type: 'idle', message: '' });

    const handleChange = ({ target: { name, value } }) => {
        setForm((current) => ({ ...current, [name]: value }));
        if (status.type !== 'idle') setStatus({ type: 'idle', message: '' });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (status.type === 'loading') return;

        setStatus({ type: 'loading', message: 'Sending your message…' });
        try {
            await emailjs.send(
                'service_uwhhe8t',
                'template_0yp04aa',
                {
                    from_name: form.name,
                    to_name: 'Darshil',
                    from_email: form.email,
                    to_email: 'darshil.desai.040804@gmail.com',
                    message: form.message,
                },
                '_h2GC9sGHbbG58RJR',
            );
            setForm(initialForm);
            setStatus({ type: 'success', message: 'Thanks! Your message has been sent.' });
        } catch (error) {
            console.error('EmailJS submission failed:', error);
            const needsReconnect = error?.status === 412 && error?.text?.includes('Invalid grant');
            setStatus({
                type: 'error',
                message: needsReconnect
                    ? 'The contact form is temporarily unavailable. Please email me directly while I reconnect it.'
                    : 'Something went wrong. Please try again or email me directly.',
            });
        }
    };

    const isLoading = status.type === 'loading';

    return (
        <section className="section-shell contact-section scroll-mt-24" id="contact" aria-labelledby="contact-heading">
            <div className="contact-intro">
                <p className="eyebrow">Get in touch</p>
                <h2 id="contact-heading">Have a project or opportunity in mind?</h2>
                <a className="email-link" href="mailto:darshil.desai.040804@gmail.com">
                    <FiMail aria-hidden="true" />
                    darshil.desai.040804@gmail.com
                </a>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                <div className="field-group">
                    <label htmlFor="name">
                        Full name
                        <span className="required-marker" aria-hidden="true">*</span>
                        <span className="sr-only"> required</span>
                    </label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        autoComplete="name"
                        required
                        placeholder="Your name"
                    />
                </div>
                <div className="field-group">
                    <label htmlFor="email">
                        Email address
                        <span className="required-marker" aria-hidden="true">*</span>
                        <span className="sr-only"> required</span>
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        autoComplete="email"
                        required
                        placeholder="you@example.com"
                    />
                </div>
                <div className="field-group">
                    <label htmlFor="message">
                        Message
                        <span className="required-marker" aria-hidden="true">*</span>
                        <span className="sr-only"> required</span>
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        placeholder="Tell me a little about what you have in mind…"
                    />
                </div>
                <button className="primary-button submit-button" type="submit" disabled={isLoading}>
                    {isLoading ? 'Sending…' : 'Send message'}
                    {!isLoading && <FiArrowUpRight aria-hidden="true" />}
                </button>
                <p
                    className={`form-status form-status-${status.type}`}
                    role="status"
                    aria-live="polite"
                >
                    {status.message}
                </p>
            </form>
        </section>
    );
};

export default Contact;
