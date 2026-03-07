import React from 'react';
import * as Icons from '@/components/icons/index';
import { Project, Testimonial, Skill, NavLink } from '@/types/index';

export const navLinks: NavLink[] = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export const projectsData: Project[] = [
  {
    title: 'Diesnatalis Management System',
    category: 'Frontend & Backend Developer (Sep 2023 - Present)',
    imageUrl: '/images/project-1.jpg',
    problem: 'Manajemen keuangan acara sekolah membutuhkan proses yang rapi dan mudah dipantau.',
    solution:
      'Merancang UI/UX untuk kasir dan admin, lalu membangun website full-stack untuk operasional dan monitoring keuangan acara Diesnatalis SMK Telkom Malang.',
    result:
      'Aplikasi dipakai sebagai support operasional event dengan proses maintenance dan koordinasi rutin sebelum hari pemakaian.',
    tech: ['React', 'Next.js', 'Node.js', 'UI/UX Design', 'Production Maintenance'],
  },
  {
    title: 'Mobigo Car Rental Platform',
    category: 'Project Experience (Mar 2024 - Apr 2024)',
    imageUrl: '/images/project-1.jpg',
    problem: 'Pengelolaan kendaraan sewa, transaksi, dan user admin masih belum terpusat.',
    solution:
      'Membangun aplikasi web rental mobil end-to-end: autentikasi, transaksi sewa, dashboard admin, relasi database, dan flow backend documentation.',
    result:
      'Platform responsif selesai dan digunakan sebagai project team delivery dengan kontribusi lintas role sekaligus mentoring tim.',
    tech: ['Next.js', 'Tailwind CSS', 'Express.js', 'Database Design', 'Team Mentoring'],
  },
  {
    title: 'Backend Development Internship - PT Lanius Inovasi Indonesia',
    category: 'Backend Intern (Nov 2024 - Apr 2025)',
    imageUrl: '/images/project-1.jpg',
    problem: 'Tim membutuhkan struktur data backend yang konsisten dan proses integrasi yang stabil.',
    solution:
      'Membangun query Hopscotch, membantu pembuatan tabel database backend, serta mendukung proses integrasi dan pengujian data sesuai standar internal perusahaan.',
    result:
      'Mendukung performa dan stabilitas database yang dipakai untuk deployment produksi.',
    tech: ['Hopscotch DB', 'Backend Development', 'Data Integration', 'Data Testing'],
  },
  {
    title: 'Full-stack Web Development - Apique Group',
    category: 'Full-stack Developer (Jun 2025 - Present)',
    imageUrl: '/images/project-1.jpg',
    problem: 'Aplikasi bisnis membutuhkan pengembangan berkelanjutan yang scalable dan maintainable.',
    solution:
      'Mengembangkan dan memelihara aplikasi full-stack menggunakan React/Next.js dan Laravel, berkolaborasi dengan tim desain untuk implementasi UI/UX responsif.',
    result:
      'Fitur web dikembangkan dengan fokus kualitas rekayasa perangkat lunak, stabilitas, dan kebutuhan klien.',
    tech: ['React', 'Next.js', 'Laravel', 'UI/UX Collaboration', 'Software Engineering'],
  },
  {
    title: 'Game Server and 3D Product Ecosystem',
    category: 'Freelance / Self Employed (Jul 2020 - 2025)',
    imageUrl: '/images/project-1.jpg',
    problem: 'Komunitas game membutuhkan server private yang stabil serta aset 3D yang siap pakai.',
    solution:
      'Mengembangkan private game server, membuat fitur gameplay dan balancing, menjalankan bug hunting, serta mendesain dan menjual 3D model menggunakan Blender.',
    result:
      'Membangun ekosistem produk digital dari sisi server operation, pengalaman pemain, dan monetisasi aset 3D.',
    tech: ['Game Server', 'Bug Hunting', 'Blender', 'Digital Marketing', 'Load Balancing Basics'],
  },
];

export const achievementsData: Testimonial[] = [
  {
    quote: 'Completed the React Developer program focused on modern component patterns and practical web application architecture.',
    name: 'React Developer',
    title: 'Dicoding.com (September 2023)',
  },
  {
    quote: 'Completed backend-focused training covering data structure standards and production-ready workflow in team environment.',
    name: 'Backend Dev Training',
    title: 'LaniusMV (April 2025)',
  },
  {
    quote: 'Finished foundational web development training for semantic HTML and best practices in modern web structure.',
    name: 'Belajar Dasar HTML',
    title: 'Course Certificate',
  },
  {
    quote: 'Completed JavaScript DOM learning path for interactive UI behavior and dynamic content manipulation.',
    name: 'Belajar JavaScript DOM',
    title: 'Course Certificate',
  },
  {
    quote: 'Completed asynchronous JavaScript training covering async flow, promises, and real-world integration patterns.',
    name: 'Belajar JavaScript Asynchronous',
    title: 'Course Certificate',
  },
  {
    quote: 'Completed introductory computer programming course as a foundation for structured software development.',
    name: 'Mengenal Pemrograman Komputer',
    title: 'Course Certificate',
  },
];

export const skillsData: Skill[] = [
  { name: 'React', icon: React.createElement(Icons.ReactIcon) },
  { name: 'Next.js', icon: React.createElement(Icons.NextJSIcon) },
  { name: 'Node.js', icon: React.createElement(Icons.NodeJSIcon) },
  { name: 'Express.js', icon: React.createElement(Icons.ExpressJSIcon) },
  { name: 'Tailwind CSS', icon: React.createElement(Icons.TailwindCSSIcon) },
  { name: 'JavaScript', icon: React.createElement(Icons.JavaScriptIcon) },
  { name: 'TypeScript', icon: React.createElement(Icons.TypeScriptIcon) },
  { name: 'MySQL', icon: React.createElement(Icons.MySQLIcon) },
  { name: 'Hopscotch DB', icon: React.createElement(Icons.HopscotchDBIcon) },
  { name: 'Figma', icon: React.createElement(Icons.FigmaIcon) },
  { name: 'GitHub', icon: React.createElement(Icons.GitHubIcon, { className: 'w-full h-full' }) },
  { name: 'AI Assistant Workflow', icon: React.createElement(Icons.ProblemSolvingIcon) },
];
