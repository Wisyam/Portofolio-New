import { Skill } from '@/types';
import AnimatedSection from './AnimatedSection';

const Skills: React.FC<{ skills: Skill[] }> = ({ skills }) => (
    <section id="skills" className="py-24 bg-brand-bg-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
                <h2 className="text-4xl font-bold text-center text-brand-text-heading font-sans mb-12">My Tech Stack</h2>
            </AnimatedSection>
            <AnimatedSection>
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8 text-center">
                    {skills.map((skill, index) => (
                        <div key={index} className="flex flex-col items-center group">
                            <div className="text-brand-text-light w-16 h-16 transition-transform duration-300 group-hover:scale-110 group-hover:text-brand-accent group-hover:drop-shadow-[0_0_8px_rgba(143,155,147,0.5)]">
                                {skill.icon}
                            </div>
                            <p className="mt-2 text-sm text-brand-text-light/80 font-medium">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </AnimatedSection>
        </div>
    </section>
);

export default Skills;
