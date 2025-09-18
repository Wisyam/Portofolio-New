import React from 'react';
// Fix: Updated import path to resolve module ambiguity.
import * as Icons from '@/components/icons/index';
// Fix: Updated import path to resolve module ambiguity.
import { Project, Testimonial, Skill, NavLink } from '@/types/index';

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
        imageUrl: '/images/project-1.jpg',
        problem: '',
        solution: 'Fullstack web untuk manajemen keuangan acara Diesnatalis SMK Telkom Malang. Fitur: UI/UX kasir/admin, koordinasi dengan pembimbing, deploy ke production.',
        result: '',
        tech: ['React', 'Node.js', 'UI/UX Design', 'Production Deploy']
    },
    {
        title: 'Mobigo Car Rental App',
        category: 'Web Application (2024)',
        imageUrl: '/images/project-2.jpg',
        problem: '',
        solution: 'Aplikasi rental mobil berbasis web. Peran: Frontend, Backend, UI/UX Designer, dan mentor tim. Fitur: autentikasi, transaksi sewa, dashboard admin.',
        result: '',
        tech: ['Next.js', 'Tailwind CSS', 'Express.js', 'Team Mentorship']
    },
    {
        title: 'Backend Intern – PT Lanius Inovasi',
        category: 'Backend Development (2024 – 2025)',
        imageUrl: '/images/project-3.jpg',
        problem: '',
        solution: 'Membuat query Hopscotch DB, tabel backend, integrasi & testing. Mendukung tim untuk stabilitas sistem produksi.',
        result: '',
        tech: ['Hopscotch DB', 'Backend', 'Integration', 'Testing']
    },
    {
        title: 'Game Development & Server Projects',
        category: 'Game Development (2020 – 2025)',
        imageUrl: '/images/project-4.jpg',
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

// Fix: Replaced JSX with React.createElement to be valid in a .ts file.
export const skillsData: Skill[] = [
    { name: 'React', icon: React.createElement(Icons.ReactIcon) },
    { name: 'Next.js', icon: React.createElement(Icons.NextJSIcon) },
    { name: 'Tailwind CSS', icon: React.createElement(Icons.TailwindCSSIcon) },
    { name: 'Node.js', icon: React.createElement(Icons.NodeJSIcon) },
    { name: 'Express.js', icon: React.createElement(Icons.ExpressJSIcon) },
    { name: 'MySQL', icon: React.createElement(Icons.MySQLIcon) },
    { name: 'Sequelize', icon: React.createElement(Icons.SequelizeIcon) },
    { name: 'GitHub', icon: React.createElement(Icons.GitHubIcon, { className: "w-full h-full" }) },
    { name: 'Figma', icon: React.createElement(Icons.FigmaIcon) },
    { name: 'Trello', icon: React.createElement(Icons.TrelloIcon) },
    { name: 'Hopscotch DB', icon: React.createElement(Icons.HopscotchDBIcon) },
    { name: 'AI Problem Solving', icon: React.createElement(Icons.ProblemSolvingIcon) },
];