'use client';
import React, { useState, useEffect } from 'react';
import { Testimonial } from '@/types';
import AnimatedSection from './AnimatedSection';

const useTypewriter = (text: string, speed = 30, start = true) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    if (!start) return;
    setDisplayText(''); // Reset on text or start change
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(prev => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed, start]);

  return displayText;
};

const Achievements: React.FC<{ achievements: Testimonial[] }> = ({ achievements }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);
    const currentQuote = useTypewriter(achievements[currentIndex].quote, 30, isTyping);

    useEffect(() => {
        setIsTyping(false); 
        const transitionTimer = setTimeout(() => setIsTyping(true), 100); 

        const slideTimer = setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % achievements.length);
        }, 8000); 

        return () => {
          clearTimeout(transitionTimer);
          clearTimeout(slideTimer);
        }
    }, [currentIndex, achievements.length]);

    return (
        <section id="achievements" className="py-24 bg-brand-bg-secondary">
             <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection>
                    <h2 className="text-4xl font-bold text-center text-brand-text-heading font-sans mb-12">Certifications & Achievements</h2>
                </AnimatedSection>
                <AnimatedSection>
                    <div className="bg-brand-bg-dark p-8 rounded-lg border-l-4 border-brand-accent shadow-lg min-h-[220px]">
                        <p className="text-lg font-sans text-brand-text-light mb-4 min-h-[96px]">"{currentQuote}"</p>
                        <footer className="text-right">
                            <p className="font-bold text-brand-text-light/90 font-sans">{achievements[currentIndex].name}</p>
                            <p className="text-sm text-brand-accent/80">{achievements[currentIndex].title}</p>
                        </footer>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default Achievements;
