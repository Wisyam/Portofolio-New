import React from 'react';

export interface NavLink {
  href: string;
  label: string;
}

export interface Project {
  title: string;
  category: string;
  imageUrl: string;
  problem: string;
  solution: string;
  result: string;
  tech: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

export interface Skill {
  name:string;
  icon: React.ReactNode;
}
