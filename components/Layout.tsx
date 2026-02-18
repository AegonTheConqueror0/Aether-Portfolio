
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';
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
    <div className="min-h-screen flex flex-col relative transition-colors duration-700">
      {/* HUD Accents */}
      <div className="fixed top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-indigo-600 to-transparent z-[60]"></div>
      <div className="fixed top-0 bottom-0 left-0 w-[1px] bg-black/5 dark:bg-white/5 z-10 hidden xl:block"></div>
      <div className="fixed top-0 bottom-0 right-0 w-[1px] bg-black/5 dark:bg-white/5 z-10 hidden xl:block"></div>

      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 px-6 md:px-16 py-10 flex justify-between items-center ${
          isScrolled ? 'bg-white/95 dark:bg-navy-950/95 backdrop-blur-2xl border-b border-black/5 dark:border-white/5 py-6' : 'bg-transparent'
        }`}
      >
        <Link to="/" className="group flex items-center gap-4">
          <div className="relative w-10 h-10 border border-black/10 dark:border-white/10 flex items-center justify-center rotate-45 group-hover:rotate-[225deg] transition-all duration-1000 ease-in-out bg-white dark:bg-slate-900 shadow-xl group-hover:shadow-indigo-500/20 group-hover:border-indigo-500">
            <div className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rotate-45 group-hover:scale-150 transition-transform"></div>
            {/* Corner Dots */}
            <div className="absolute top-0 left-0 w-1 h-1 bg-indigo-500"></div>
            <div className="absolute bottom-0 right-0 w-1 h-1 bg-indigo-500"></div>
          </div>
          <div className="flex flex-col -gap-1">
            <span className="text-xl font-serif font-black tracking-tighter uppercase text-black dark:text-white leading-none">Aether</span>
            <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-indigo-600 dark:text-indigo-400 uppercase leading-none">Protocol</span>
          </div>
        </Link>
        
        <div className="flex items-center gap-16">
          <nav className="hidden lg:flex gap-12">
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item.path} 
                to={item.path}
                className={`text-[10px] font-mono tracking-[0.3em] uppercase transition-all duration-500 relative group ${
                  location.pathname === item.path ? 'text-indigo-600 dark:text-indigo-400 font-bold' : 'text-zinc-400 hover:text-black dark:hover:text-white'
                }`}
              >
                <span className="absolute -left-4 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-500">{'>'}</span>
                {item.label}
                <span className={`absolute -bottom-2 left-0 h-[2px] bg-indigo-600 transition-all duration-700 ${
                  location.pathname === item.path ? 'w-full' : 'w-0'
                }`} />
              </Link>
            ))}
          </nav>

          <button 
            onClick={onToggleTheme}
            className="font-mono text-[9px] tracking-[0.2em] uppercase border border-zinc-200 dark:border-white/10 px-6 py-2.5 hover:bg-zinc-100 dark:hover:bg-white/5 transition-all text-zinc-500 dark:text-slate-400 group relative overflow-hidden"
          >
            <span className="relative z-10">ENG_MODE: {theme.toUpperCase()}</span>
            <div className="absolute inset-0 bg-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0"></div>
            <span className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 text-white transition-opacity duration-500">TOGGLE_BIT</span>
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
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="px-6 md:px-16 py-20 border-t border-black/5 dark:border-white/5 flex flex-col lg:flex-row justify-between items-end text-zinc-500 dark:text-slate-500 font-mono text-[10px] uppercase tracking-[0.2em] gap-10">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-black dark:text-white font-bold">NodeCluster: ROJAS_01_SECURE</span>
          </div>
          <div className="max-w-xs leading-relaxed opacity-60">
            Aether Protocol represents a standard of engineering excellence, merging academic theory with market deployment.
          </div>
          <div className="text-[11px] font-bold text-black dark:text-white mt-4 tracking-tighter">© 2024 AETHER PROTOCOL — INDEPENDENT STRATEGIC DEV</div>
        </div>
        
        <div className="flex flex-col items-end gap-6">
          <div className="flex gap-12 border-b border-black/5 dark:border-white/5 pb-4 w-full justify-end">
            <a href="https://github.com/AegonTheConqueror0" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">Ext:Github</a>
            <a href="mailto:edgardorojas03@gmail.com" className="hover:text-indigo-600 transition-colors">Ext:Email</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Ext:LinkedIn</a>
          </div>
          <div className="text-right opacity-40 text-[8px]">
            HCDC FACULTY VERIFIED // MIT ACADEMIC REPOSITORY // FULL-STACK PROTOCOL
          </div>
        </div>
      </footer>
    </div>
  );
};
