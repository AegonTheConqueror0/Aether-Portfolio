
import { Project, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'System.Protocol', path: '/' },
  { label: 'System.Laboratory', path: '/about' },
  { label: 'System.Interface', path: '/connect' }
];

export const SERVICES = [
  {
    id: 'web-dev',
    title: 'High-Fidelity Web',
    stack: ['Next.js', 'Javascript', 'Tailwind', 'HTML5'],
    description: 'Bespoke enterprise applications architected for speed and SEO dominance. I build the core systems that drive global traffic.',
    icon: 'code'
  },
  {
    id: 'mobile-dev',
    title: 'Rapid Deployment',
    stack: ['Bubble.io', 'PWA', 'No-Code Hybrid'],
    description: 'Accelerate your time-to-market. Specialized in Bubble.io for high-velocity MVPs and robust mobile-first experiences.',
    icon: 'smartphone'
  },
  {
    id: 'ui-ux',
    title: 'Visual Identity',
    stack: ['Figma', 'Photoshop', 'Canva', 'UX Design'],
    description: 'Where psychology meets aesthetics. Human-centric design systems built to retain users and elevate brand authority.',
    icon: 'layers'
  },
  {
    id: 'digital-marketing',
    title: 'Content Strategy',
    stack: ['Premiere Pro', 'Lightroom', 'Digital Marketing'],
    description: 'Cinematic storytelling and data-driven marketing. We produce the visual assets that turn viewers into loyal clients.',
    icon: 'trending-up'
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Aether OS Portal',
    category: 'Next.js / Enterprise',
    description: 'A modular institutional gateway designed for zero-latency data synchronization and faculty-level precision.',
    imageUrl: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: '2',
    title: 'Vortex Marketplace',
    category: 'Bubble.io / Mobile',
    description: 'A multi-vendor mobile ecosystem deployed via rapid protocol, handling complex relational logic and secure payments.',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop'
  }
];

export const TECH_ARSENAL = [
  { name: 'Next.js', logo: 'https://cdn.worldvectorlogo.com/logos/next-js.svg' },
  { name: 'Bubble', logo: 'https://cdn.worldvectorlogo.com/logos/bubble-1.svg' },
  { name: 'Figma', logo: 'https://cdn.worldvectorlogo.com/logos/figma-1.svg' },
  { name: 'Photoshop', logo: 'https://cdn.worldvectorlogo.com/logos/adobe-photoshop-2.svg' },
  { name: 'VS Code', logo: 'https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg' },
  { name: 'Premiere', logo: 'https://cdn.worldvectorlogo.com/logos/adobe-premiere-pro-cc.svg' },
  { name: 'Lightroom', logo: 'https://cdn.worldvectorlogo.com/logos/adobe-lightroom-cc.svg' },
  { name: 'Canva', logo: 'https://cdn.worldvectorlogo.com/logos/canva-1.svg' },
  { name: 'Javascript', logo: 'https://cdn.worldvectorlogo.com/logos/logo-javascript.svg' },
  { name: 'HTML5', logo: 'https://cdn.worldvectorlogo.com/logos/html-1.svg' }
];

export const BIO_DATA = `
  [PROTOCOL IDENTITY]
  BRAND: AETHER PROTOCOL
  LEAD: Edgardo, Jr. B. Rojas
  STATUS: Independent Strategic Developer
  
  [CORE SPECIALTIES]
  - Systems Architecture (Next.js, Bubble.io)
  - Visual Design (Adobe Suite, Figma)
  - Content Production (Premiere Pro, Lightroom)
  - Digital Growth (Marketing Strategy)
  
  [MARKETING VALUE]
  1. The Faculty Seal: "I teach the code that others try to write." (Faculty at HCDC).
  2. Hybrid Agility: Rapid Bubble.io prototypes or enterprise-scale Next.js deployment.
  3. Integrated Visuals: High-end graphics and video marketing included in the development protocol.
  
  [AVAILABILITY]
  Selective commissions only. Focused on high-impact projects that require a surgical technical approach.
`;
