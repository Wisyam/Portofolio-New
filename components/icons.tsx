import React from 'react';

const iconProps = {
  className: "w-full h-full",
  viewBox: "0 0 128 128",
  fill: "currentColor"
};

interface SocialIconProps {
  className?: string;
}

export const GitHubIcon: React.FC<SocialIconProps> = ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
);

export const LinkedInIcon: React.FC<SocialIconProps> = ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
);


export const JavaScriptIcon: React.FC = () => (
  <svg {...iconProps} xmlns="http://www.w3.org/2000/svg">
    <path fill="#F7DF1E" d="M0 0h128v128H0z" />
    <path d="M41.4 103.3h12.5V81.2c0-3.9.6-6.8 1.9-8.7 1.3-1.9 3.5-2.8 6.7-2.8 3.5 0 6.1 1.2 7.8 3.5 1.7 2.3 2.5 5.7 2.5 10.1v19.9H85.3V80.5c0-4.7-.7-8.3-2.1-10.9-1.4-2.6-3.8-4.8-7.2-6.5-3.4-1.7-7.4-2.5-12-2.5-6.5 0-11.8 1.8-15.8 5.3s-6 8.2-6 14.1v23.2zM91.3 75.8c1.3 2.3 2 5.1 2 8.5v19H106V83.6c0-6.9-1.8-12.4-5.3-16.4-3.5-4-8.5-6-14.8-6-4.9 0-9.2 1.3-12.9 4s-5.5 6.3-5.5 10.9c0 4.1 1.3 7.5 4 10.3s6 4.1 10.1 4.1c3.5 0 6.5-1 8.9-3.1z" />
  </svg>
);

export const TypeScriptIcon: React.FC = () => (
  <svg {...iconProps} xmlns="http://www.w3.org/2000/svg">
    <path fill="#3178C6" d="M0 0h128v128H0z" />
    <path fill="#FFF" d="M25.7 25.7h76.6v76.6H25.7z" />
    <path fill="#3178C6" d="M91.3 75.8c1.3 2.3 2 5.1 2 8.5v19H106V83.6c0-6.9-1.8-12.4-5.3-16.4-3.5-4-8.5-6-14.8-6-4.9 0-9.2 1.3-12.9 4s-5.5 6.3-5.5 10.9c0 4.1 1.3 7.5 4 10.3s6 4.1 10.1 4.1c3.5 0 6.5-1 8.9-3.1zM59.4 48.4H47v53.9h12.4V78.6h17.3v-12H59.4z" />
  </svg>
);

export const ReactIcon: React.FC = () => (
  <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348">
    <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
    <g stroke="currentColor" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
);

export const NodeJSIcon: React.FC = () => (
  <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
    <path fill="currentColor" d="M128 0a128 128 0 1 0 128 128A128 128 0 0 0 128 0Z"/>
    <path fill="#212D2D" d="m142.6 153.5 14.8-25.7 14.9 25.7h29.2L167.3 90h-29.7l-34.2 59.3-10-17.3h-25.1L128 206.5l59.5-102.7h-29.2l-15.7 27.2-15.7-27.2H97.7l44.9 77.7 24.9-42.2-24.9-43.1h29.7l14.8 25.7Z"/>
  </svg>
);

export const PythonIcon: React.FC = () => (
    <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.246 17.59c-3.313 0-6-2.687-6-6v-3.313h6c3.313 0 6-2.687 6-6v-1.127C5.698 1.15 0 6.848 0 13.59c0 3.313 2.687 6 6 6h1.127c0-2.072.84-3.945 2.206-5.313a7.465 7.465 0 0 1-2.087-1.277zm-.492-16.44C15.067 1.15 17.754 3.837 17.754 7.15c0 2.072-.84 3.945-2.206 5.313a7.465 7.465 0 0 1 2.087 1.277c3.313 0 6 2.687 6 6v3.313h-6c-3.313 0-6 2.687-6 6v1.127C18.302 22.85 24 17.152 24 10.41c0-3.313-2.687-6-6-6H16.873c0 2.072-.84 3.945-2.206 5.313a7.465 7.465 0 0 1-2.087-1.277z"/>
    </svg>
);

export const GoIcon: React.FC = () => (
  <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" fill="currentColor">
    <path d="M96 16a80 80 0 1 0 0 160A80 80 0 0 0 96 16Zm-30.9 92.5a20.4 20.4 0 0 1-20.4 20.4H22V63.1h22.7a20.4 20.4 0 0 1 20.4 20.4v25Zm93-20.4v-4.8h-34.3v40.7h4.8V92.9h29.5Z" />
    <path d="M148.1 63.1h-4.8v15.2h-22v4.8h22v10h-24.8v4.8h24.8v10.1h-22v4.8h22v15.2h4.8V63.1Z" />
  </svg>
);


export const PostgreSQLIcon: React.FC = () => (
    <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15V7h2v10h-2zm-3-2V9h2v8H8zm6-10v12h2V7h-2z"/>
        <path fill="#212D2D" d="M11 7h2v10h-2zm-3 2h2v8H8zm6-2h2v12h-2z"/>
    </svg>
);

export const MongoDBIcon: React.FC = () => (
  <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path fill="currentColor" d="M12,2A10,10,0,0,0,2,12a10,10,0,0,0,10,10,10,10,0,0,0,10-10A10,10,0,0,0,12,2Zm3.42,14.33c-1.39,1.16-3.71.55-3.71.55a4.83,4.83,0,0,1-2.28-2.65S9.2,12.78,9,12.11a5.4,5.4,0,0,1,1.16-4.52s2.84-2.2,5.68-.82c0,0-2.3,4.88-2.3,6.18s2.86,2.54,1.88,3.38Z"/>
    <path fill="#212D2D" d="M11.72,14.23s2.32.61,3.71-.55c-1,.84-1.88-3.38-1.88-3.38s2.3-1.3,2.3-6.18c-2.84-1.38-5.68.82-5.68.82a5.4,5.4,0,0,0-1.16,4.52c.2,0.67.43,2.12.43,2.12A4.83,4.83,0,0,0,11.72,14.23Z"/>
  </svg>
);

export const DockerIcon: React.FC = () => (
  <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path fill="currentColor" d="M22.1 9.4c-1-1.8-2.6-3.4-4.5-4.5-1.9-1-4-1.5-6.1-1.5H3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h9.2c2.1 0 4.2-.5 6.1-1.5 1.9-1 3.5-2.6 4.5-4.5.9-1.9 1.2-4 1.2-6.1.1-2.1-.3-4.2-1.2-6.1zM10 13H8v-2h2v2zm3 0h-2v-2h2v2zm3 0h-2v-2h2v2zm-6-3H8V8h2v2zm3 0h-2V8h2v2zm3 0h-2V8h2v2z"/>
    <path fill="#212D2D" d="M8 8h2v2H8zm3 0h2v2h-2zm3 0h2v2h-2zm-6 3h2v2H8zm3 0h2v2h-2zm3 0h2v2h-2z"/>
  </svg>
);

export const AWSIcon: React.FC = () => (
  <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path fill="currentColor" d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M17.2,16.5c-1.3,1.3-3.2,2.1-5.2,2.1s-3.9-0.8-5.2-2.1c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0c0.9,0.9,2.2,1.5,3.7,1.5s2.8-0.5,3.7-1.5c0.4-0.4,1-0.4,1.4,0S17.6,16.1,17.2,16.5z M18.5,12.5c-0.3-1.9-1.3-3.6-2.8-4.8c-0.4-0.3-0.9-0.2-1.2,0.2c-0.3,0.4-0.2,0.9,0.2,1.2c1.1,0.9,1.9,2.1,2.1,3.4c0.1,0.5,0.5,0.8,1,0.8C18.2,13.3,18.5,12.9,18.5,12.5z M8.3,7.7C6.8,8.9,5.8,10.6,5.5,12.5c0,0.5,0.4,1,0.9,1c0.5,0,0.9-0.4,1-0.8c0.2-1.4,1-2.6,2.1-3.4c0.4-0.3,0.5-0.9,0.2-1.2C9.2,7.5,8.7,7.4,8.3,7.7z"/>
  </svg>
);

export const GraphQLIcon: React.FC = () => (
    <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12,2.3L2.8,6.8v9.4l9.2,4.5l9.2-4.5V6.8L12,2.3z M12,20.4l-7.7-3.7V8.3L12,4.6v15.8z"/>
        <circle cx="12" cy="12" r="2.5" fill="currentColor"/>
        <path fill="currentColor" d="M4.3,8.3l7.7,3.7v-2l-5.7-2.7L4.3,8.3z M12,14l7.7-3.7l-2-1l-5.7,2.7V14z M12,5.6l5.7,2.7l-5.7,2.7V5.6z M6.3,13l5.7,2.7v-2L6.3,11V13z"/>
    </svg>
);

export const TailwindCSSIcon: React.FC = () => (
    <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M17.2,10.2c-0.2,0-0.5,0.1-0.7,0.3l-4.5,4.5c-0.4,0.4-1,0.4-1.4,0L6.8,11.2c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l3.8,3.8c1.2,1.2,3.1,1.2,4.2,0l4.5-4.5c0.4-0.4,0.4-1,0-1.4C17.7,10.3,17.5,10.2,17.2,10.2z"/>
    </svg>
);

// NEW ICONS
export const NextJSIcon: React.FC = () => (
    <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
      <circle cx="64" cy="64" r="64" fill="black"/>
      <path fill="url(#a)" d="M109.5 118.5c-11 0-19.5-8.5-19.5-19.5V47L40.5 118.5H21.5V30h19v71.5L90.5 30h19Z"/>
      <defs>
        <linearGradient id="a" x1="65" y1="30" x2="65" y2="118.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff"/>
          <stop offset="1" stopColor="#fff" stopOpacity="0"/>
        </linearGradient>
      </defs>
    </svg>
);

export const ExpressJSIcon: React.FC = () => (
  <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="14" fontWeight="bold" fill="currentColor">Ex</text>
  </svg>
);

export const MySQLIcon: React.FC = () => (
  <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path fill="#00758F" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 14.5v-3.5L8 11.5v-3l2.5 1.5v-3L15 9.25V12l-2.5 1.5v3l-2.5-1.5z"/>
    <path fill="#F29111" d="M10.5 13v3.5l2.5 1.5-2.5-1.5v-3.5L15 12V9.25L12.5 7v3l-2.5-1.5v3z"/>
  </svg>
);

export const SequelizeIcon: React.FC = () => (
    <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 13.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5c1.19 0 2.25.6 2.87 1.5h-2.37v2h4.5v-4.5h-2c-.89-1.63-2.61-2.5-4.37-2.5-2.76 0-5 2.24-5 5s2.24 5 5 5c1.45 0 2.75-.63 3.69-1.61L16.2 16c-1.11 1.05-2.63 1.5-4.2 1.5z"/>
    </svg>
);

export const FigmaIcon: React.FC = () => (
    <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path fill="#F24E1E" d="M12 16.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5V16.5z"/>
      <path fill="#FF7262" d="M8.5 13c0-1.93 1.57-3.5 3.5-3.5V6c-3.87 0-7 3.13-7 7s3.13 7 7 7v-3.5c-1.93 0-3.5-1.57-3.5-3.5z"/>
      <path fill="#A259FF" d="M8.5 6v7c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5V6h-7z"/>
      <path fill="#1ABCFE" d="M15.5 13c0 1.93-1.57 3.5-3.5 3.5v3.5c3.87 0 7-3.13 7-7s-3.13-7-7-7v3.5c1.93 0 3.5 1.57 3.5 3.5z"/>
      <path fill="#0ACF83" d="M15.5 6v3.5c1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5h3.5c1.93 0 3.5-1.57 3.5-3.5S20.93 6 19 6h-3.5z"/>
    </svg>
);

export const TrelloIcon: React.FC = () => (
    <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <rect width="20" height="20" x="2" y="2" fill="#0079BF" rx="3"/>
      <rect width="7" height="12" x="5" y="6" fill="#fff" rx="1.5"/>
      <rect width="7" height="7" x="14" y="6" fill="#fff" rx="1.5"/>
    </svg>
);

export const HopscotchDBIcon: React.FC = () => (
    <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-12h2v2h-2v-2zm0 4h2v6h-2v-6z"/>
    </svg>
);

export const ProblemSolvingIcon: React.FC = () => (
    <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
    </svg>
);