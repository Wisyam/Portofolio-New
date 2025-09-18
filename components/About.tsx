import { Skill } from '@/types';
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';

const About: React.FC<{ skills: Skill[] }> = ({ skills }) => (
    <section id="about" className="py-24 bg-brand-bg-secondary">
      <AnimatedSection className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-1">
            <Image 
                src="https://picsum.photos/seed/portrait/500/500?grayscale" 
                alt="Wisyam Zain Amanullah" 
                width={500}
                height={500}
                className="rounded-lg shadow-lg w-full h-auto object-cover" 
            />
          </div>
          <div className="md:col-span-2">
            <h2 className="text-4xl font-bold text-brand-text-heading font-sans mb-6">About Me</h2>
            <p className="text-lg text-brand-text-light font-sans leading-relaxed mb-6">
              Fullstack Developer asal Malang. Berpengalaman di frontend, backend, dan UI/UX. Aktif sebagai Fullstack Developer serta pernah magang sebagai Backend Intern di PT Lanius Inovasi Indonesia. Terbiasa menggunakan AI (seperti ChatGPT) untuk mempercepat problem-solving.
            </p>
            <div className="flex flex-wrap gap-3">
              {skills.slice(0, 6).map((skill) => (
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
