
import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row gap-20 md:gap-32 mb-48">
        <div className="md:w-1/3">
          <div className="sticky top-48 space-y-16">
            <div>
              <h2 className="text-[10px] font-mono font-black uppercase tracking-[0.5em] text-indigo-600 mb-10 flex items-center gap-4">
                <span className="w-4 h-[2px] bg-indigo-600"></span>
                The Standard
              </h2>
              <div className="font-serif text-6xl italic leading-none text-black dark:text-white tracking-tighter">
                Logic <br />Meets <br />Cinema.
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-10 border-t border-black/10 dark:border-white/10 pt-10">
              <div>
                <h4 className="text-[10px] font-mono font-black uppercase text-zinc-400 mb-2">Core_Mode</h4>
                <p className="text-sm text-black dark:text-white font-bold">Independent</p>
              </div>
              <div>
                <h4 className="text-[10px] font-mono font-black uppercase text-zinc-400 mb-2">Execution</h4>
                <p className="text-sm text-black dark:text-white font-bold">Surgical</p>
              </div>
              <div>
                <h4 className="text-[10px] font-mono font-black uppercase text-zinc-400 mb-2">Authority</h4>
                <p className="text-sm text-indigo-600 dark:text-indigo-400 font-bold italic underline">HCDC Faculty</p>
              </div>
              <div>
                <h4 className="text-[10px] font-mono font-black uppercase text-zinc-400 mb-2">Network</h4>
                <p className="text-sm text-black dark:text-white font-bold">Global_Node</p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-2/3 space-y-32">
          <section>
            <h3 className="text-[10px] font-mono text-zinc-400 dark:text-slate-500 uppercase tracking-[0.4em] mb-12 flex items-center gap-4">
              01 // THE AETHER PHILOSOPHY
            </h3>
            <div className="text-3xl md:text-4xl font-light text-zinc-600 dark:text-slate-400 leading-tight space-y-10 tracking-tight">
              <p>
                AETHER PROTOCOL isn't just a development studio; it is a <span className="font-black text-black dark:text-white italic">technical standard</span>. 
              </p>
              <p>
                Founded by Edgardo Rojas, an IT Faculty member at Holy Cross of Davao College and MIT student, the protocol was built on a simple premise: <span className="text-indigo-600 font-black">Development should be as high-performance as it is visually arresting.</span>
              </p>
              <p className="text-lg leading-relaxed opacity-60">
                We believe in the "Dual-Track" approach. High-complexity enterprise systems should be built with the performance of Next.js, while market-ready MVPs should be launched with the velocity of Bubble.io. We don't just build; we optimize.
              </p>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <h3 className="text-[10px] font-mono text-zinc-400 dark:text-slate-500 uppercase tracking-[0.4em] mb-12 flex items-center gap-4">
                02 // CAPABILITY INDEX
              </h3>
              <div className="space-y-8">
                {[
                  { name: 'System Architecture (Next.js)', level: '98%' },
                  { name: 'Rapid Prototyping (Bubble)', level: '96%' },
                  { name: 'UI/UX Heuristics (Figma)', level: '94%' },
                  { name: 'Visual Branding (Adobe CC)', level: '92%' },
                  { name: 'Digital Strategy & Marketing', level: '89%' }
                ].map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between font-mono text-[10px] font-black uppercase mb-3">
                      <span className="text-black dark:text-white tracking-widest">{skill.name}</span>
                      <span className="text-indigo-600">{skill.level}</span>
                    </div>
                    <div className="h-[3px] w-full bg-zinc-100 dark:bg-slate-800/50 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full bg-indigo-600" 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-zinc-50 dark:bg-slate-900/40 p-12 rounded-none border border-black/5 dark:border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-600/5 -translate-y-12 translate-x-12 rotate-45 group-hover:bg-indigo-600/10 transition-colors"></div>
              <h3 className="text-xs font-mono text-indigo-600 dark:text-indigo-400 uppercase tracking-[0.4em] font-black mb-10 italic underline underline-offset-4">03 // THE LABORATORY</h3>
              <p className="text-[11px] text-zinc-500 dark:text-slate-400 font-mono mb-10 leading-relaxed uppercase tracking-widest">
                Our protocol utilizes a premium suite of digital tools to ensure every pixel and every line of code is surgical.
              </p>
              <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                {[
                  'VS Code', 'Photoshop', 'Lightroom', 'Figma', 
                  'Premiere Pro', 'Canva Pro', 'Bubble.io', 'Next.js'
                ].map((tech) => (
                  <div key={tech} className="flex items-center gap-3 text-black dark:text-white font-mono text-[10px] font-black tracking-widest uppercase">
                    <div className="w-1.5 h-1.5 bg-indigo-600 rotate-45"></div>
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
