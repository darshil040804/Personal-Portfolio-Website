export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Emily Johnson',
        position: 'Marketing Director at GreenLeaf',
        img: 'assets/review1.png',
        review:
            'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
        id: 2,
        name: 'Mark Rogers',
        position: 'Founder of TechGear Shop',
        img: 'assets/review2.png',
        review:
            'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
        id: 3,
        name: 'John Dohsas',
        position: 'Project Manager at UrbanTech ',
        img: 'assets/review3.png',
        review:
            'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
        id: 4,
        name: 'Ether Smith',
        position: 'CEO of BrightStar Enterprises',
        img: 'assets/review4.png',
        review:
            'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
];

export const myProjects = [
    {
        title: 'Personal Portfolio Website',
        desc: 'Built as a modern personal portfolio website with React.js, HTML, CSS, and JavaScript—featuring a fixed navigation bar with smooth anchor links, viewport-spanning sections (About, Work, Work Experience, Contact Me), immersive 3D visuals powered by Three.js, and EmailJS-driven contact form functionality—the site is designed to showcase projects and professional experience with responsive, interactive performance.',
        subdesc:
            '',
        href: 'https://github.com/darshil040804/Personal-Portfolio-Website',
        texture: '/textures/project/project1.mp4',
        logo: '/assets/logo_circle.png',
        logoStyle: {
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'Html5',
                path: '/assets/html.png',
            },
            {
                id: 4,
                name: 'css',
                path: '/assets/css.png',
            },
            {
                id: 5,
                name: 'JavaScript',
                path: '/assets/javascript.png',
            },
            {
                id: 6,
                name: 'ThreeJs',
                path: '/assets/threejs.png',
            }
        ],
    },
    {
            title: 'SpartanMind - Game App',
        desc: 'Spartanmind is a C++-powered variant of the classic Mastermind game—challenge yourself to guess a hidden word in as few attempts as possible—featuring a polished GUI built with WxWidgets and rapid UI prototyping via wxBuilder, UML design and workflow management in Visual Paradigm, documentation via DoxyWizard, and full GitLab version control to ensure maintainability and seamless collaboration.',
        subdesc:
            '',
        href: '',
        texture: '/textures/project/project2.mp4',
        logo: '/assets/project-logo2.png',
        logoStyle: {
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'C++',
                path: '/assets/cpp.png',
            },
            {
                id: 2,
                name: 'Vpp',
                path: 'assets/vpp.png',
            },
            {
                id: 3,
                name: 'wxWidgets',
                path: '/assets/wxWidgets.png',
            },
            {
                id: 4,
                name: 'Git',
                path: '/assets/git.png',
            },
        ],
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.055,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.0, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'MSU - IPF',
        pos: 'Student Software Developer',
        duration: 'January 2025 - Present',
        title: "Built Java based REST APIs for web and mobile applications and used Postman to test them. Leveraged Gitlab for version control, resolving Jira tickets related to bug fixes and system optimization, improving daily usability for 700+ IPF employees",
        icon: '/assets/msu-ipf-logo.png',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'MSU - IPF',
        pos: 'Student InfoTech Assistant'   ,
        duration: 'February 2024 - Present',
        title: "Provided Technical support to over 1000 employees, thereby reducing downtime. Created technical documentation in a shared knowledge base for recurring IT issues, cutting IT dependencies by 25%",
        icon: '/assets/msu-ipf-logo.png',
        animation: 'clapping',
    },
    {
        id: 3,
        name: 'Michigan State University',
        pos: 'Resident Assistant',
        duration: 'August 2023 - Present',
        title: "Planned and executed monthly events for 900+ residents, by collaborating with campus partners. Leveraged active listening and clear communication to foster trust and resolve conflicts among residents",
        icon: '/assets/msu-logo.png',
        animation: 'salute',
    },
];