
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../constants.tsx';
import { motion, AnimatePresence } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, theme, onToggleTheme }) => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative transition-colors duration-700 bg-[#fcfcfc] dark:bg-[#050505]">
      {/* Decorative HUD Elements */}
      <div className="fixed top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-600/30 to-transparent z-[60]"></div>
      
      {/* Left Vertical Info Bar */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-12 items-center z-40 opacity-30">
        <div className="h-32 w-[1px] bg-zinc-400 dark:bg-zinc-800"></div>
        <div className="font-mono text-[9px] rotate-180 [writing-mode:vertical-lr] uppercase tracking-[0.5em] text-zinc-500">
          Uplink: Synchronized // Node: 01
        </div>
        <div className="h-32 w-[1px] bg-zinc-400 dark:bg-zinc-800"></div>
      </div>

      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 px-6 md:px-16 py-10 flex justify-between items-center ${
          isScrolled ? 'bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-black/5 dark:border-white/5 py-6' : 'bg-transparent'
        }`}
      >
        <Link to="/" className="group flex items-center gap-4">
          <div className="relative w-8 h-8 border border-black/10 dark:border-white/10 flex items-center justify-center rotate-45 group-hover:rotate-[225deg] transition-all duration-1000 ease-in-out">
            <div className="w-1.5 h-1.5 bg-indigo-600 dark:bg-indigo-400 rotate-45 group-hover:scale-125 transition-transform"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-serif font-black tracking-tighter uppercase text-black dark:text-white leading-none">Aether</span>
            <span className="text-[8px] font-mono font-bold tracking-[0.4em] text-indigo-600 dark:text-indigo-400 uppercase leading-none mt-1">Protocol</span>
          </div>
        </Link>
        
        <div className="flex items-center gap-16">
          <nav className="hidden lg:flex gap-12">
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item.path} 
                to={item.path}
                className={`text-[9px] font-mono tracking-[0.3em] uppercase transition-all duration-500 relative group ${
                  location.pathname === item.path ? 'text-indigo-600 dark:text-indigo-400 font-bold' : 'text-zinc-400 hover:text-black dark:hover:text-white'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-2 left-0 h-[1.5px] bg-indigo-600 transition-all duration-700 ${
                  location.pathname === item.path ? 'w-full' : 'w-0'
                }`} />
              </Link>
            ))}
          </nav>

          <button 
            onClick={onToggleTheme}
            className="font-mono text-[8px] tracking-[0.2em] uppercase border border-zinc-200 dark:border-white/5 px-5 py-2 hover:bg-zinc-100 dark:hover:bg-white/5 transition-all text-zinc-500 dark:text-zinc-500 group relative"
          >
            [ {theme} ]
          </button>
        </div>
      </header>

      <main className="flex-grow pt-48 pb-24 px-6 md:px-16 relative z-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="px-6 md:px-16 py-20 border-t border-black/5 dark:border-white/5 flex flex-col lg:flex-row justify-between items-end text-zinc-400 dark:text-zinc-600 font-mono text-[9px] uppercase tracking-[0.2em] gap-10">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
            <span className="text-zinc-600 dark:text-zinc-400 font-bold">Protocol Status: Optimal</span>
          </div>
          <div className="max-w-xs leading-relaxed">
            Independent development laboratory specialized in high-performance web systems and rapid market deployment.
          </div>
          <div className="text-black dark:text-white mt-4 tracking-tighter font-bold">© 2024 AETHER PROTOCOL</div>
        </div>
        
        <div className="flex flex-col items-end gap-6">
          <div className="flex gap-10 border-b border-black/5 dark:border-white/5 pb-4 w-full justify-end">
            <a href="https://github.com/AegonTheConqueror0" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">Github</a>
            <a href="mailto:edgardorojas03@gmail.com" className="hover:text-indigo-600 transition-colors">Email</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">LinkedIn</a>
          </div>
          <div className="text-right opacity-30 text-[7px] tracking-[0.4em]">
            HCDC FACULTY // MIT_LAYER_VERIFIED
          </div>
        </div>
      </footer>
    </div>
  );
};
