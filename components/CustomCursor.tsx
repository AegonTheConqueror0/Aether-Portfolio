
import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDark, setIsDark] = useState(true);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 250 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('group');
      
      setIsHovered(!!isInteractive);
    };

    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    checkTheme();

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      observer.disconnect();
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* The trailing ring / targeting system */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-indigo-500/30 rounded-full pointer-events-none z-[9999] flex items-center justify-center"
        style={{
          translateX: springX,
          translateY: springY,
          x: '-50%',
          y: '-50%',
        }}
        animate={{
          width: isHovered ? 64 : 40,
          height: isHovered ? 64 : 40,
          borderColor: isHovered ? (isDark ? 'rgba(99, 102, 241, 0.8)' : 'rgba(79, 70, 229, 0.8)') : (isDark ? 'rgba(99, 102, 241, 0.3)' : 'rgba(79, 70, 229, 0.3)'),
          rotate: isHovered ? 90 : 0
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 200 }}
      >
        {/* Targeting Brackets */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-indigo-500"></div>
          <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-indigo-500"></div>
          <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-indigo-500"></div>
          <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-indigo-500"></div>
        </div>

        {/* Hover Label */}
        {isHovered && (
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-mono text-[8px] text-indigo-500 uppercase font-bold absolute -bottom-6"
          >
            Execute_Link
          </motion.span>
        )}
      </motion.div>

      {/* The precise center dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none z-[9999]"
        style={{
          translateX: cursorX,
          translateY: cursorY,
          x: '-50%',
          y: '-50%',
        }}
        animate={{
          scale: isHovered ? 2.5 : 1,
          backgroundColor: isHovered ? (isDark ? '#6366f1' : '#4f46e5') : (isDark ? '#ffffff' : '#020617'),
        }}
      />
    </>
  );
};
