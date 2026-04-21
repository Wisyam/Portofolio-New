import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./SectionHeader";
import AnimatedSkillBar from "./AnimatedSkillBar";

interface Skill {
  name: string;
  level: number;
  color: string;
}

const languages: Skill[] = [
  { name: "JavaScript", level: 90, color: "text-accent-yellow" },
  { name: "TypeScript", level: 85, color: "text-accent-blue" },
  { name: "HTML/CSS", level: 95, color: "text-accent-orange" },
  { name: "PHP/Laravel", level: 70, color: "text-accent-purple" },
];

const frameworks: Skill[] = [
  { name: "React/Next.js", level: 90, color: "text-accent-cyan" },
  { name: "Node.js", level: 85, color: "text-accent-green" },
  { name: "Express.js", level: 80, color: "text-accent-purple" },
  { name: "Tailwind CSS", level: 95, color: "text-accent-blue" },
];

const tools: Skill[] = [
  { name: "Git/GitHub", level: 85, color: "text-accent-orange" },
  { name: "Figma", level: 75, color: "text-accent-purple" },
  { name: "VS Code", level: 95, color: "text-accent-cyan" },
  { name: "AI Agents", level: 80, color: "text-accent-green" },
];

// SkillBar replaced by AnimatedSkillBar component

export default function SkillsSection() {
  return (
    <section id="skills" className="min-h-screen px-4 sm:px-6 py-12 sm:py-20">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          lineNum="024"
          comment="// system specifications"
          title="$ neofetch"
        />

        <ScrollReveal>
          <div className="bg-bg-secondary border border-border rounded-lg p-4 sm:p-8 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-10">
            {/* ASCII Art Left */}
            <pre className="text-[8px] leading-[1.2] text-accent-cyan whitespace-pre hidden md:flex items-center select-none">
{`    ⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣤⣤⣤⣀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣷⣄⠀⠀⠀⠀⠀
    ⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⠀⠀⠀
    ⠀⠀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⠀⠀
    ⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀
    ⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇
    ⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃
    ⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀
    ⠀⠀⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋⠀⠀
    ⠀⠀⠀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⠀⠀⠀
    ⠀⠀⠀⠀⠀⠈⠛⢿⣿⣿⣿⣿⣿⡿⠛⠁⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠛⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀`}
            </pre>

            {/* System Info Right */}
            <div className="space-y-1 text-xs sm:text-sm">
              <div>
                <span className="text-accent-cyan font-semibold">wisyam</span>
                <span className="text-text-primary">@</span>
                <span className="text-accent-cyan font-semibold">portfolio</span>
              </div>
              <hr className="border-border my-2" />
              <div>
                <span className="text-accent-cyan font-semibold">OS: </span>
                <span className="text-text-secondary">Full-Stack Developer 2026</span>
              </div>
              <div>
                <span className="text-accent-cyan font-semibold">Host: </span>
                <span className="text-text-secondary">Malang, Indonesia</span>
              </div>
              <div>
                <span className="text-accent-cyan font-semibold">Uptime: </span>
                <span className="text-text-secondary">5+ years of coding (since 2020)</span>
              </div>
              <div>
                <span className="text-accent-cyan font-semibold">Shell: </span>
                <span className="text-text-secondary">React / Next.js / Node.js / Laravel</span>
              </div>
              <div>
                <span className="text-accent-cyan font-semibold">DE: </span>
                <span className="text-text-secondary">AI Native Engineer</span>
              </div>

              <hr className="border-border my-3" />

              <p className="text-text-muted text-xs mb-2">Languages</p>
              <div className="space-y-1.5">
                {languages.map((s) => (
                  <AnimatedSkillBar key={s.name} name={s.name} level={s.level} color={s.color} />
                ))}
              </div>

              <hr className="border-border my-3" />

              <p className="text-text-muted text-xs mb-2">Frameworks</p>
              <div className="space-y-1.5">
                {frameworks.map((s) => (
                  <AnimatedSkillBar key={s.name} name={s.name} level={s.level} color={s.color} />
                ))}
              </div>

              <hr className="border-border my-3" />

              <p className="text-text-muted text-xs mb-2">Tools</p>
              <div className="space-y-1.5">
                {tools.map((s) => (
                  <AnimatedSkillBar key={s.name} name={s.name} level={s.level} color={s.color} />
                ))}
              </div>

              {/* Color blocks */}
              <div className="flex flex-wrap mt-4">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#0d1117]" />
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#ff5f57]" />
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#28c840]" />
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#febc2e]" />
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#58a6ff]" />
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#bc8cff]" />
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#79c0ff]" />
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#e6edf3]" />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
