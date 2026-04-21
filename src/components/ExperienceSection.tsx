"use client";

import { useEffect, useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./SectionHeader";

interface Experience {
  hash: string;
  title: string;
  company: string;
  date: string;
  description: string;
  branch: string;
  branchColor: string;
}

const experiences: Experience[] = [
  {
    hash: "f1a2b3c",
    title: "Full-Stack Developer",
    company: "Apique Group, Malang",
    date: "Jun 2025 - Present",
    description: "Bertanggung jawab penuh atas pengembangan dan pemeliharaan aplikasi web full-stack menggunakan React/Next.js dan Laravel. Berkoordinasi dengan tim desain untuk mengimplementasikan fitur UI/UX yang responsif dan sesuai standar bisnis.",
    branch: "main",
    branchColor: "bg-accent-green",
  },
  {
    hash: "d4e5f6g",
    title: "Backend Intern",
    company: "PT Lanius Inovasi Indonesia, Malang",
    date: "Nov 2024 - Apr 2025",
    description: "Berkontribusi dalam pengembangan backend system bersama tim teknis internal. Membuat dan mengelola query, membantu pembuatan tabel database yang di-deploy ke server produksi, serta mendukung proses integrasi dan pengujian data.",
    branch: "feature/intern",
    branchColor: "bg-accent-blue",
  },
  {
    hash: "h7i8j9k",
    title: "Frontend & Backend Developer",
    company: "Diesnatalis SMK Telkom Malang",
    date: "Sep 2023 - 2024",
    description: "Mendesain UI/UX dan mengembangkan website fullstack untuk Diesnatalis yang bertujuan mempermudah manajemen keuangan. Koordinasi dan maintenance dengan guru pembimbing untuk aplikasi production.",
    branch: "feature/diesnatalis",
    branchColor: "bg-accent-purple",
  },
  {
    hash: "l0m1n2o",
    title: "Fullstack Dev, UI/UX & Mentor",
    company: "Mobigo Project, Malang",
    date: "Mar 2024 - Apr 2024",
    description: "Membuat aplikasi web rental mobil dengan sistem autentikasi, transaksi sewa, dan dashboard admin. Berperan sebagai Frontend, Backend, UI/UX Designer, serta memandu anggota tim dari desain hingga deployment.",
    branch: "feature/mobigo",
    branchColor: "bg-accent-cyan",
  },
  {
    hash: "p3q4r5s",
    title: "Freelance / Self Employed",
    company: "Game Dev, 3D Store, Server Admin",
    date: "Jul 2020 - 2025",
    description: "Game server development, 3D model store owner dengan digital marketing, game server administrator & bug hunter. Mengembangkan fitur game, mengelola toko online, dan melakukan pengawasan langsung di dalam game.",
    branch: "feature/freelance",
    branchColor: "bg-accent-yellow",
  },
];

function PulseDot({ color, delay }: { color: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative shrink-0 mt-1.5 z-10">
      {/* Pulse ring */}
      <div
        className={`absolute inset-0 w-3 h-3 rounded-full ${color} transition-all duration-700`}
        style={{
          opacity: visible ? 0.4 : 0,
          transform: visible ? "scale(2.5)" : "scale(1)",
          transitionDelay: `${delay}ms`,
        }}
      />
      {/* Core dot */}
      <div
        className={`w-3 h-3 rounded-full ${color} border-2 border-bg-primary relative transition-all duration-500`}
        style={{
          boxShadow: visible ? `0 0 12px rgba(0,255,65,0.5)` : "none",
          transitionDelay: `${delay}ms`,
        }}
      />
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="min-h-screen px-4 sm:px-6 py-12 sm:py-20">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          lineNum="072"
          comment="// work history"
          title="$ git log --oneline"
        />

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <ScrollReveal key={exp.hash} delay={i * 150}>
              <div className="flex gap-2 sm:gap-4 py-4 sm:py-5 border-b border-border relative">
                {/* Glowing Timeline line */}
                <div
                  className="absolute left-[36px] sm:left-[52px] top-0 bottom-0 w-0.5"
                  style={{
                    background: "linear-gradient(180deg, #00ff41 0%, #30363d 50%, #00ff41 100%)",
                    boxShadow: "0 0 8px rgba(0,255,65,0.2)",
                  }}
                />

                {/* Hash */}
                <div className="text-accent-yellow text-[10px] sm:text-xs font-semibold min-w-[48px] sm:min-w-[70px] pt-1 shrink-0">
                  {exp.hash}
                </div>

                {/* Pulse Dot */}
                <PulseDot color={exp.branchColor} delay={i * 200} />

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-text-primary font-medium text-xs sm:text-sm">
                      {exp.title}
                    </span>
                    <span className="text-accent-blue text-xs">
                      @ {exp.company}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-text-muted text-[11px]">
                      {exp.date}
                    </span>
                    <span className="text-[10px] px-1.5 py-0.5 border border-border rounded text-accent-cyan">
                      {exp.branch}
                    </span>
                  </div>
                  <p className="text-text-secondary text-xs mt-2 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
