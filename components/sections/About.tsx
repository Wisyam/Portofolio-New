import Image from 'next/image';
import { Skill } from '@/types/index';
import AnimatedSection from '@/components/common/AnimatedSection';

interface AboutProps {
  skills: Skill[];
}

const About: React.FC<AboutProps> = ({ skills }) => (
  <section id="about" className="py-24 bg-brand-bg-secondary">
    <AnimatedSection className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-3 gap-12 items-center">
        <div className="md:col-span-1">
          <Image src="/images/portrait.jpg" alt="Wisyam Zain Amanullah" width={500} height={500} className="rounded-lg shadow-lg w-full h-auto object-cover" />
        </div>
        <div className="md:col-span-2">
          <h2 className="text-4xl font-bold text-brand-text-heading font-sans mb-6">About Me</h2>
          <p className="text-lg text-brand-text-light font-sans leading-relaxed mb-6">
            I am a Full-stack Developer from Malang, Indonesia, currently working at Apique Group and actively studying Informatics Engineering (S1) at Universitas Ciputra Surabaya. I have hands-on experience across frontend, backend, UI/UX, and production maintenance through academic, internship, and freelance projects.
          </p>
          <p className="text-base text-brand-text-light/90 font-sans leading-relaxed mb-6">
            My focus is delivering scalable and high-quality web solutions with practical collaboration, clear system structure, and fast iteration for real business and community use cases.
          </p>
          <div className="flex flex-wrap gap-3">
            {skills.slice(0, 8).map((skill) => (
              <div key={skill.name} className="flex items-center space-x-2 bg-brand-border/50 p-2 rounded-md transition-all duration-300 hover:shadow-glow hover:border-brand-accent/50 border border-transparent">
                <div className="w-6 h-6 text-brand-accent">{skill.icon}</div>
                <span className="text-brand-text-light text-sm font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  </section>
);

export default About;
