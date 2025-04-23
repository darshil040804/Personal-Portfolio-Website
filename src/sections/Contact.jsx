import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {

    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email:'',
        message:''
    })

    const handleChange = ({target: {name, value}}) => {
        setForm({...form, [name]: value})
    }

    // service_uwhhe8t

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);

        try{
        emailjs.send('service_uwhhe8t', 'template_0yp04aa',
            {
                from_name: form.name,
                to_name: 'Darshil',
                from_email: form.email,
                to_email: 'darshil.desai.040804@gmail.com',
                message: form.message
            }, '_h2GC9sGHbbG58RJR')

            setLoading(false);

            alert('Your message has been sent!')

            setForm({
                name:'',
                email:'',
                message:''
            })

        } catch (error){
            setLoading(false);

            console.log(error);

            alert('Something went wrong!')
        }

    }

    return (
        <section className="c-space my-20" id="contact">
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img src="/assets/terminal.png" alt="Terminal-Background" className="absolute inset-0 min-h-screen"/>
                <div className="contact-container">
                    <h3 className="head-text">Let's Talk</h3>
                    <p className="text-lg text-white-600 mt-3">
                        Let's talk
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                        <label className="space-y-3">
                            <span className="field-label">
                                Full Name
                            </span>
                            <input
                                type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="field-input"
                            placeholder="Jackson Paul"/>
                        </label>
                        <label className="space-y-3">
                            <span className="field-label">
                                Email
                            </span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="jackson@gmail.com"/>
                        </label>
                        <label className="space-y-3">
                            <span className="field-label">
                                Your Message
                            </span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="field-input"
                                placeholder="Hi, I have a job for you ..."/>
                        </label>
                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                            <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Contact
