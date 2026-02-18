
import React from 'react';
import { PROJECTS, SERVICES, TECH_ARSENAL } from '../constants.tsx';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const ServiceCard: React.FC<{ service: any, idx: number }> = ({ service, idx }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);
  const springX = useSpring(rotateX, { damping: 20, stiffness: 150 });
  const springY = useSpring(rotateY, { damping: 20, stiffness: 150 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - (rect.left + rect.width / 2));
        y.set(e.clientY - (rect.top + rect.height / 2));
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      className="perspective-1000 group cursor-pointer"
    >
      <motion.div
        style={{ rotateX: springX, rotateY: springY }}
        className="h-full bg-white dark:bg-slate-900 border border-black/10 dark:border-white/10 p-10 hover:border-indigo-500/50 transition-all duration-500 shadow-2xl group-hover:shadow-indigo-500/20 relative overflow-hidden"
      >
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/5 rounded-full group-hover:bg-indigo-500/20 transition-all duration-700 blur-3xl"></div>
        
        <div className="w-14 h-14 bg-indigo-600/10 dark:bg-indigo-500/20 flex items-center justify-center mb-10 border border-indigo-500/20 group-hover:bg-indigo-600 transition-colors relative overflow-hidden">
          <div className="text-indigo-600 dark:text-indigo-400 group-hover:text-white transition-colors relative z-10">
            {service.id === 'web-dev' && <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>}
            {service.id === 'mobile-dev' && <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>}
            {service.id === 'ui-ux' && <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>}
            {service.id === 'digital-marketing' && <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>}
          </div>
        </div>

        <h3 className="text-3xl font-serif font-black mb-6 text-black dark:text-white leading-tight tracking-tighter uppercase">{service.title}</h3>
        <p className="text-zinc-500 dark:text-slate-400 text-sm mb-10 leading-relaxed font-light">
          {service.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {service.stack.map((item: string) => (
            <span key={item} className="font-mono text-[9px] uppercase tracking-[0.2em] px-3 py-1 bg-zinc-50 dark:bg-slate-800 text-zinc-500 dark:text-slate-400 border border-black/5 dark:border-white/5">
              {item}
            </span>
          ))}
        </div>
        
        <div className="mt-8 pt-8 border-t border-black/5 dark:border-white/5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 duration-500">
           <span className="font-mono text-[10px] text-indigo-500 uppercase tracking-widest font-black italic">Initialize_Protocol</span>
           <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const Home: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto overflow-hidden">
      {/* Hero Section */}
      <section className="mb-32 md:mb-56 relative">
        <div className="flex items-center gap-6 mb-10">
          <div className="h-[3px] w-16 bg-indigo-600"></div>
          <span className="font-mono text-[12px] tracking-[0.6em] uppercase text-indigo-600 dark:text-indigo-400 font-black">Independent Protocol // Selective Engagements</span>
        </div>
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-8xl md:text-[12rem] font-serif font-black leading-[0.8] mb-20 tracking-tighter text-black dark:text-white"
        >
          Architecting <br />
          <span className="italic text-zinc-300 dark:text-indigo-300/10 font-normal">Oblique Solutions.</span>
        </motion.h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-7">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-2xl md:text-4xl text-zinc-600 dark:text-slate-400 leading-tight font-light mb-16"
            >
              AETHER PROTOCOL is a boutique laboratory for high-fidelity code and cinematic brand strategy. We specialize in <span className="text-black dark:text-white font-bold underline decoration-indigo-500 underline-offset-8">Next.js performance</span> and <span className="text-black dark:text-white font-bold underline decoration-indigo-500 underline-offset-8">Bubble.io velocity</span>.
            </motion.p>
            <div className="flex flex-wrap gap-8">
               <button className="group relative bg-black dark:bg-white text-white dark:text-black font-mono text-xs tracking-[0.3em] px-12 py-6 uppercase overflow-hidden border border-black/10 dark:border-white/10">
                 <span className="relative z-10 group-hover:text-white transition-colors">Launch_Protocol_V1</span>
                 <div className="absolute inset-0 bg-indigo-600 translate-x-full group-hover:translate-x-0 transition-transform duration-500 z-0"></div>
               </button>
               <button className="border-b-2 border-black/10 dark:border-white/10 text-black dark:text-white font-mono text-xs tracking-[0.3em] px-2 py-4 uppercase hover:border-indigo-500 transition-all">
                 [ View_Archives ]
               </button>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-end items-end">
             <div className="font-mono text-[11px] text-zinc-400 dark:text-slate-500 text-right space-y-4 uppercase tracking-[0.3em] border-r-4 border-indigo-600 pr-10">
                <div>
                  <p className="text-black dark:text-white font-black">Lead: Edgardo Rojas</p>
                  <p>HCDC Faculty Verified</p>
                </div>
                <div>
                  <p className="text-black dark:text-white font-black">Specialties</p>
                  <p>Next.js // Bubble // Adobe</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 3D Services Deck */}
      <section className="mb-64">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div>
            <h2 className="text-6xl md:text-8xl font-serif font-black text-black dark:text-white tracking-tighter uppercase">Protocol Services</h2>
            <div className="h-1 w-32 bg-indigo-600 mt-4"></div>
          </div>
          <div className="font-mono text-xs text-indigo-500 uppercase tracking-[0.4em] flex items-center gap-6">
            <span className="w-16 h-[1px] bg-indigo-500/30"></span>
            Scalable Tech & Brand Systems
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {SERVICES.map((service, idx) => (
            <ServiceCard key={service.id} service={service} idx={idx} />
          ))}
        </div>
      </section>

      {/* Laboratory Arsenal (Logos) */}
      <section className="mb-64 pt-32 border-t border-black/5 dark:border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          <div className="lg:col-span-5">
            <h3 className="text-xs font-mono text-indigo-600 dark:text-indigo-400 uppercase tracking-[0.6em] font-black mb-12">The Laboratory Arsenal</h3>
            <p className="text-5xl font-serif italic text-black dark:text-white leading-[1.1] mb-12 tracking-tighter">
              Curated precision. We only utilize the industry-leading standards for our protocol.
            </p>
            <div className="space-y-6">
               {[
                 { t: 'Strategic Next.js Architecture', d: 'Enterprise-tier scalability and performance.' },
                 { t: 'Bubble.io Velocity Protocol', d: 'Lightning-fast MVP deployment and market testing.' },
                 { t: 'Cinematic Adobe Production', d: 'Premium visual storytelling for digital marketing.' }
               ].map(item => (
                 <div key={item.t} className="group cursor-default">
                    <h5 className="font-mono text-sm font-black text-black dark:text-white group-hover:text-indigo-500 transition-colors uppercase tracking-widest">{item.t}</h5>
                    <p className="text-xs text-zinc-500 font-light mt-1">{item.d}</p>
                 </div>
               ))}
            </div>
          </div>
          <div className="lg:col-span-7">
             <div className="grid grid-cols-3 md:grid-cols-4 gap-12">
               {TECH_ARSENAL.map((tech) => (
                 <motion.div 
                   whileHover={{ y: -8, scale: 1.05 }}
                   key={tech.name} 
                   className="flex flex-col items-center justify-center gap-6 group"
                 >
                   <div className="w-20 h-20 bg-white dark:bg-slate-900 border border-black/5 dark:border-white/5 flex items-center justify-center p-4 grayscale group-hover:grayscale-0 transition-all duration-700 shadow-lg group-hover:shadow-indigo-500/10 group-hover:border-indigo-500/30">
                     <img src={tech.logo} alt={tech.name} className="w-full h-full object-contain" />
                   </div>
                   <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-zinc-400 dark:text-slate-600 group-hover:text-black dark:group-hover:text-white transition-colors">
                     {tech.name}
                   </span>
                 </motion.div>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-56 text-center mb-32 relative overflow-hidden group bg-zinc-950">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale pointer-events-none"></div>
        <div className="absolute inset-0 bg-indigo-950/60 backdrop-blur-[4px]"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-6xl md:text-9xl font-serif italic mb-20 text-white tracking-tighter">Enter the Protocol.</h2>
          <div className="flex flex-col md:flex-row justify-center gap-10 items-center">
             <button className="bg-white text-black font-mono text-sm tracking-[0.4em] px-16 py-8 uppercase hover:bg-indigo-600 hover:text-white transition-all shadow-2xl hover:scale-105 active:scale-95">
                Initialize_Project
             </button>
             <button className="text-white border-b border-white/30 font-mono text-sm tracking-[0.4em] pb-2 uppercase hover:text-indigo-400 hover:border-indigo-400 transition-colors">
                Schedule_Audit
             </button>
          </div>
        </div>
      </section>
    </div>
  );
};
