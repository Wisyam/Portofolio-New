import { Project, Testimonial, Skill, NavLink } from '@/lib/types';
import * as Icons from '@/components/icons';

export const navLinks: NavLink[] = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
];

export const projectsData: Project[] = [
    {
        title: 'Diesnatalis Management System',
        category: 'Fullstack Web App (2023 – Present)',
        imageUrl: 'https://picsum.photos/800/600?random=1',
        problem: '',
        solution: 'Fullstack web untuk manajemen keuangan acara Diesnatalis SMK Telkom Malang. Fitur: UI/UX kasir/admin, koordinasi dengan pembimbing, deploy ke production.',
        result: '',
        tech: ['React', 'Node.js', 'UI/UX Design', 'Production Deploy']
    },
    {
        title: 'Mobigo Car Rental App',
        category: 'Web Application (2024)',
        imageUrl: 'https://picsum.photos/800/600?random=2',
        problem: '',
        solution: 'Aplikasi rental mobil berbasis web. Peran: Frontend, Backend, UI/UX Designer, dan mentor tim. Fitur: autentikasi, transaksi sewa, dashboard admin.',
        result: '',
        tech: ['Next.js', 'Tailwind CSS', 'Express.js', 'Team Mentorship']
    },
    {
        title: 'Backend Intern – PT Lanius Inovasi',
        category: 'Backend Development (2024 – 2025)',
        imageUrl: 'https://picsum.photos/800/600?random=3',
        problem: '',
        solution: 'Membuat query Hopscotch DB, tabel backend, integrasi & testing. Mendukung tim untuk stabilitas sistem produksi.',
        result: '',
        tech: ['Hopscotch DB', 'Backend', 'Integration', 'Testing']
    },
    {
        title: 'Game Development & Server Projects',
        category: 'Game Development (2020 – 2025)',
        imageUrl: 'https://picsum.photos/800/600?random=4',
        problem: '',
        solution: 'Membuat sistem dasar game, mengembangkan server privat, balancing gameplay, serta membuat dan menjual 3D model dengan Blender.',
        result: '',
        tech: ['Game Logic', 'Server Management', 'Blender', '3D Modeling']
    }
];

export const achievementsData: Testimonial[] = [
    {
        quote: "Completed the React Developer learning path, mastering fundamental and advanced concepts of React for building modern web applications.",
        name: 'React Developer Certification',
        title: 'Dicoding (2023)'
    },
    {
        quote: "Underwent intensive training focused on backend development principles and practices within a professional environment.",
        name: 'Backend Developer Training',
        title: 'LaniusMV (2025)'
    },
    {
        quote: "Finished a comprehensive course covering the full stack of web development technologies from front-end to back-end.",
        name: 'Course Fullstack Developer',
        title: 'CODEPOLITAN (2025)'
    }
];

export const skillsData: Skill[] = [
    { name: 'React', icon: <Icons.ReactIcon /> },
    { name: 'Next.js', icon: <Icons.NextJSIcon /> },
    { name: 'Tailwind CSS', icon: <Icons.TailwindCSSIcon /> },
    { name: 'Node.js', icon: <Icons.NodeJSIcon /> },
    { name: 'Express.js', icon: <Icons.ExpressJSIcon /> },
    { name: 'MySQL', icon: <Icons.MySQLIcon /> },
    { name: 'Sequelize', icon: <Icons.SequelizeIcon /> },
    { name: 'GitHub', icon: <Icons.GitHubIcon /> },
    { name: 'Figma', icon: <Icons.FigmaIcon /> },
    { name: 'Trello', icon: <Icons.TrelloIcon /> },
    { name: 'Hopscotch DB', icon: <Icons.HopscotchDBIcon />},
    { name: 'AI Problem Solving', icon: <Icons.ProblemSolvingIcon /> },
];
