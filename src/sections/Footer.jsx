import { createElement } from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const socialLinks = [
    { name: 'Email', href: 'mailto:darshil.desai.040804@gmail.com', icon: FiMail },
    { name: 'GitHub', href: 'https://github.com/darshil040804', icon: FiGithub },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/darshil04/', icon: FiLinkedin },
];

const Footer = () => (
    <footer className="site-footer">
        <p>© {new Date().getFullYear()} Darshil Desai</p>
        <ul aria-label="Social links">
            {socialLinks.map(({ name, href, icon }) => (
                <li key={name}>
                    <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noreferrer' : undefined}
                        aria-label={name}
                    >
                        {createElement(icon, { 'aria-hidden': true })}
                    </a>
                </li>
            ))}
        </ul>
        <a href="#home">Back to top ↑</a>
    </footer>
);

export default Footer;
