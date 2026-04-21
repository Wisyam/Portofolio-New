import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./SectionHeader";

interface Education {
  version: string;
  title: string;
  institution: string;
  date: string;
  description: string;
  type: "major" | "minor" | "patch";
}

const educations: Education[] = [
  {
    version: "v3.0.0",
    title: "S1 Teknik Informatika",
    institution: "Universitas Ciputra Surabaya",
    date: "Feb 2026 - Sekarang",
    description: "Menempuh pendidikan sarjana Teknik Informatika dengan fokus pada software engineering dan pengembangan web modern.",
    type: "major",
  },
  {
    version: "v2.0.0",
    title: "Software Engineer & Network Engineer",
    institution: "SMK Telkom Malang",
    date: "2022 - 2025",
    description: "Jurusan Software Engineer dan Network Engineer. Membangun fondasi kuat dalam pemrograman, jaringan, dan pengembangan perangkat lunak.",
    type: "major",
  },
  {
    version: "v2.3.1",
    title: "React Developer Certificate",
    institution: "Dicoding.com",
    date: "September 2023",
    description: "Sertifikasi pengembangan aplikasi web menggunakan React, termasuk state management, component lifecycle, dan best practices.",
    type: "patch",
  },
  {
    version: "v2.5.0",
    title: "Backend Dev Certificate",
    institution: "LaniusMV",
    date: "April 2025",
    description: "Sertifikasi backend development mencakup API design, database management, dan server-side programming.",
    type: "minor",
  },
  {
    version: "v2.1.0",
    title: "Web Development Fundamentals",
    institution: "Dicoding.com",
    date: "2023",
    description: "Sertifikat Belajar Dasar HTML, Dasar Pemrograman Web, JavaScript DOM, dan JavaScript Asynchronous.",
    type: "minor",
  },
];

function getTypeLabel(type: Education["type"]) {
  switch (type) {
    case "major":
      return { label: "MAJOR", color: "text-accent-green border-accent-green" };
    case "minor":
      return { label: "MINOR", color: "text-accent-blue border-accent-blue" };
    case "patch":
      return { label: "PATCH", color: "text-accent-yellow border-accent-yellow" };
  }
}

export default function EducationSection() {
  return (
    <section id="education" className="min-h-screen px-4 sm:px-6 py-12 sm:py-20">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          lineNum="096"
          comment="// education & certifications"
          title="$ cat CHANGELOG.md"
        />

        <div className="space-y-4">
          {educations.map((edu, i) => {
            const typeInfo = getTypeLabel(edu.type);
            return (
              <ScrollReveal key={edu.version} delay={i * 100}>
                <div className="bg-bg-secondary border border-border rounded-lg p-5">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="font-[family-name:var(--font-pixel)] text-xs text-accent-green">
                      {edu.version}
                    </span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 border rounded ${typeInfo.color}`}
                    >
                      {typeInfo.label}
                    </span>
                    <span className="text-text-muted text-[11px] ml-auto">
                      {edu.date}
                    </span>
                  </div>

                  <h3 className="text-text-primary font-medium text-sm mt-3">
                    {edu.title}
                  </h3>
                  <p className="text-accent-blue text-xs mt-1">
                    {edu.institution}
                  </p>
                  <p className="text-text-secondary text-xs mt-2 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
