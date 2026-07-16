import { FaAws, FaJava } from 'react-icons/fa';
import { RiOpenaiFill, RiPaletteLine } from 'react-icons/ri';
import {
    SiAngular,
    SiCplusplus,
    SiClaude,
    SiDjango,
    SiDocker,
    SiFastapi,
    SiFlask,
    SiGit,
    SiGooglecloud,
    SiGraphql,
    SiJavascript,
    SiMongodb,
    SiMysql,
    SiNextdotjs,
    SiNodedotjs,
    SiPostgresql,
    SiPython,
    SiReact,
    SiRedis,
    SiSpringboot,
    SiSupabase,
    SiTerraform,
    SiTypescript,
} from 'react-icons/si';

export const navLinks = [
    { id: 1, name: 'Home', href: '#home' },
    { id: 2, name: 'About', href: '#about' },
    { id: 3, name: 'Tech Stack', href: '#tech-stack' },
    { id: 4, name: 'Projects', href: '#projects' },
    { id: 5, name: 'Experience', href: '#experience' },
    { id: 6, name: 'Contact', href: '#contact' },
];

export const githubUrl = 'https://github.com/darshil040804';
export const linkedinUrl = 'https://www.linkedin.com/in/darshil04/';

export const documentDefinitions = {
    resume: {
        title: 'Résumé',
        description: 'Darshil Desai’s software engineering résumé',
        pdfUrl: '/documents/Darshil-Desai-Resume.pdf',
        fileName: 'Darshil-Desai-Resume.pdf',
    },
    transcript: {
        title: 'Official Transcript',
        description: 'Darshil Desai’s official Michigan State University transcript',
        pdfUrl: '/documents/Darshil-Desai-Transcript.pdf',
        fileName: 'Darshil-Desai-Transcript.pdf',
    },
};

export const resumeUrl = '/?document=resume';
export const transcriptUrl = '/?document=transcript';

export const technologyCategories = [
    {
        category: 'Languages',
        technologies: [
            { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
            { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
            { name: 'Python', icon: SiPython, color: '#3776AB' },
            { name: 'Java', icon: FaJava, color: '#F89820' },
            { name: 'C++', icon: SiCplusplus, color: '#659AD2' },
        ],
    },
    {
        category: 'Frontend',
        technologies: [
            { name: 'React', icon: SiReact, color: '#61DAFB' },
            { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
            { name: 'Angular', icon: SiAngular, color: '#DD0031' },
        ],
    },
    {
        category: 'Backend & APIs',
        technologies: [
            { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
            { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
            { name: 'Django', icon: SiDjango, color: '#44B78B' },
            { name: 'Flask', icon: SiFlask, color: '#FFFFFF' },
            { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
            { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
        ],
    },
    {
        category: 'Data',
        technologies: [
            { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
            { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
            { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
            { name: 'Supabase', icon: SiSupabase, color: '#3FCF8E' },
            { name: 'Redis', icon: SiRedis, color: '#FF4438' },
        ],
    },
    {
        category: 'Cloud & DevOps',
        technologies: [
            { name: 'AWS', icon: FaAws, color: '#FF9900' },
            { name: 'Google Cloud Platform', icon: SiGooglecloud, color: '#4285F4' },
            { name: 'Docker', icon: SiDocker, color: '#2496ED' },
            { name: 'Terraform', icon: SiTerraform, color: '#844FBA' },
            { name: 'Git', icon: SiGit, color: '#F05032' },
        ],
    },
    {
        category: 'AI Tools',
        technologies: [
            { name: 'Codex', icon: RiOpenaiFill, color: '#FFFFFF' },
            { name: 'Claude Code', icon: SiClaude, color: '#D97757' },
            { name: 'Claude Design', icon: RiPaletteLine, color: '#B4A9FF' },
        ],
    },
];

export const myProjects = [
    {
        title: 'JobLens AI',
        desc: 'An AI-powered resume analysis tool that compares resumes with job descriptions, calculates resume and ATS scores, and provides practical optimization feedback.',
        href: 'https://github.com/darshil040804/JobLens-AI',
        liveLink: 'https://job-lens-ai.vercel.app/',
        logo: '/assets/project-logo4.png',
        tags: ['React', 'Tailwind CSS', 'JavaScript', 'PuterJS'],
    },
    {
        title: 'Movie Hub',
        desc: 'A responsive movie discovery app with TMDB search, Appwrite-backed search analytics, debounced requests, and a dynamic list of trending titles.',
        href: 'https://github.com/darshil040804/Movie-Hub',
        liveLink: 'https://movie-hub-guc4.vercel.app/',
        logo: '/assets/project-logo3.png',
        tags: ['React', 'JavaScript', 'Tailwind CSS', 'Appwrite'],
    },
];

export const workExperiences = [
    {
        id: 1,
        name: 'Michigan State University',
        pos: 'Software Engineering Intern',
        duration: 'Jan 2025 — Present',
        location: 'East Lansing, MI',
        title: 'Built Java-based REST APIs for web and mobile applications and tested them with Postman. Resolved GitLab and Jira work related to bug fixes and system optimization, improving daily usability for 700+ employees.',
    },
    {
        id: 2,
        name: 'Michigan State University',
        pos: 'Student Information Technologist',
        duration: 'Feb 2024 — Present',
        location: 'East Lansing, MI',
        title: 'Provided technical support to more than 1,000 employees and created shared knowledge-base documentation for recurring issues, reducing IT dependencies by 25%.',
    },
    {
        id: 3,
        name: 'Michigan State University',
        pos: 'Resident Assistant',
        duration: 'Aug 2023 — May 2026',
        location: 'East Lansing, MI',
        title: 'Planned and delivered monthly events for 900+ residents while collaborating with campus partners. Used active listening and clear communication to resolve conflicts and foster trust.',
    },
];
