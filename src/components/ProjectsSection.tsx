import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./SectionHeader";

interface Project {
  name: string;
  ext: string;
  description: string;
  tech: string[];
  demo?: string;
  repo?: string;
}

const projects: Project[] = [
  {
    name: "mobigo-rental",
    ext: ".tsx",
    description: "Aplikasi web rental mobil fullstack dengan sistem autentikasi, transaksi sewa, dashboard admin, dan tampilan responsif. Berperan sebagai Frontend, Backend, dan UI/UX Designer.",
    tech: ["Next.js", "Tailwind CSS", "Express.js", "MySQL"],
    demo: "#",
    repo: "#",
  },
  {
    name: "diesnatalis-app",
    ext: ".tsx",
    description: "Website fullstack untuk Diesnatalis SMK Telkom Malang. Sistem manajemen keuangan untuk kasir/admin dengan UI/UX custom dan maintenance production.",
    tech: ["React", "Node.js", "Express.js", "MySQL"],
    demo: "#",
    repo: "#",
  },
  {
    name: "game-server",
    ext: ".lua",
    description: "Pengembangan private game server dengan fitur lengkap, load balancing sederhana, port forwarding, dan UI menggunakan React & Tailwind.",
    tech: ["Lua", "React", "Tailwind", "Networking"],
    repo: "#",
  },
  {
    name: "3d-model-store",
    ext: ".blend",
    description: "Toko online 3D model dengan digital marketing, rekrutmen tim, dan game server test untuk client experience langsung pada 3D model.",
    tech: ["Blender", "Digital Marketing", "Game Dev"],
    demo: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen px-4 sm:px-6 py-12 sm:py-20">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          lineNum="048"
          comment="// project showcase"
          title="$ ls ~/projects"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {projects.map((project, i) => (
            <ScrollReveal key={project.name} delay={i * 100}>
              <div className="bg-bg-secondary border border-border rounded-lg overflow-hidden transition-all hover:border-accent-blue hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(88,166,255,0.1)] group">
                {/* File Header */}
                <div className="px-4 py-3 bg-bg-tertiary border-b border-border flex items-center gap-2 text-xs">
                  <span className="text-accent-blue">&#9782;</span>
                  <span className="text-text-primary">{project.name}</span>
                  <span className="text-text-muted">{project.ext}</span>
                  <span className="ml-auto text-text-muted opacity-0 group-hover:opacity-100 transition-opacity">
                    modified
                  </span>
                </div>

                {/* Code Preview Body */}
                <div className="p-5">
                  <p className="text-text-secondary text-xs leading-relaxed mb-4">
                    <span className="text-text-muted">{"// "}</span>
                    {project.description}
                  </p>

                  <div className="text-xs font-[family-name:var(--font-mono)] space-y-1 text-text-muted">
                    <div>
                      <span className="text-accent-purple">const </span>
                      <span className="text-accent-cyan">project</span>
                      <span className="text-text-primary"> = </span>
                      <span className="text-accent-yellow">{"{"}</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-accent-cyan">name</span>
                      <span className="text-text-primary">: </span>
                      <span className="text-accent-orange">{'"'}{project.name}{'"'}</span>
                      <span className="text-text-primary">,</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-accent-cyan">stack</span>
                      <span className="text-text-primary">: [</span>
                      {project.tech.map((t, j) => (
                        <span key={t}>
                          <span className="text-accent-green">{'"'}{t}{'"'}</span>
                          {j < project.tech.length - 1 && <span className="text-text-primary">, </span>}
                        </span>
                      ))}
                      <span className="text-text-primary">]</span>
                    </div>
                    <div>
                      <span className="text-accent-yellow">{"}"}</span>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="px-4 py-3 border-t border-border flex gap-2 flex-wrap">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[10px] border border-border rounded text-accent-cyan bg-accent-cyan/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="px-4 py-2 border-t border-border flex gap-4 text-xs">
                  {project.demo && (
                    <a href={project.demo} className="text-accent-green hover:underline py-1.5 inline-block">
                      $ open demo
                    </a>
                  )}
                  {project.repo && (
                    <a href={project.repo} className="text-accent-green hover:underline py-1.5 inline-block">
                      $ git clone
                    </a>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
