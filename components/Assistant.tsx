
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { askAssistant } from '../geminiService';
import { Message } from '../types';

export const Assistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: '[SYSTEM]: CONNECTION ESTABLISHED. ARCHIVE LOADED. READY FOR INPUT.' }
  ]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim() || loading) return;

    const userMsg: Message = { role: 'user', content: query };
    setMessages(prev => [...prev, userMsg]);
    setQuery('');
    setLoading(true);

    const res = await askAssistant(query, messages);
    
    const assistantMsg: Message = { role: 'assistant', content: res || '[ERROR]: NO RESPONSE FROM ENGINE.' };
    setMessages(prev => [...prev, assistantMsg]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-10 right-10 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="mb-6 w-80 md:w-96 bg-[#0a0a0a] border border-zinc-800 shadow-[0_0_50px_rgba(79,70,229,0.2)] rounded-lg overflow-hidden flex flex-col h-[450px]"
          >
            {/* Terminal Header */}
            <div className="bg-zinc-900 px-4 py-3 flex justify-between items-center border-b border-zinc-800 shrink-0">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/40"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/40"></div>
              </div>
              <h3 className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500">Core.Zenith_Assistant</h3>
              <button onClick={() => setIsOpen(false)} className="text-zinc-500 hover:text-white transition-colors">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>
            
            {/* Messages Display */}
            <div ref={scrollRef} className="flex-grow overflow-y-auto p-5 font-mono text-[11px] leading-relaxed text-zinc-300 custom-scrollbar space-y-4">
              {messages.map((msg, idx) => (
                <div key={idx} className={msg.role === 'user' ? 'text-zinc-400' : 'text-zinc-100'}>
                  <span className={`font-bold mr-2 ${msg.role === 'user' ? 'text-zinc-600' : 'text-indigo-400'}`}>
                    {msg.role === 'user' ? 'C:\\USER>' : 'AZ_KERNEL>'}
                  </span>
                  {msg.content}
                </div>
              ))}
              
              {loading && (
                <div className="text-indigo-500 animate-pulse font-bold">
                  [CALCULATING RESPONSE...]
                </div>
              )}
            </div>

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="p-4 bg-zinc-900/50 border-t border-zinc-800 flex flex-col gap-3 shrink-0">
              <div className="flex items-center gap-2">
                <span className="text-indigo-500 font-mono text-[10px]">EXECUTE:</span>
                <input 
                  type="text" 
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Query kernel..."
                  className="flex-grow bg-transparent border-none text-[11px] font-mono text-white focus:outline-none placeholder:text-zinc-700"
                />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[9px] text-zinc-600 font-mono uppercase">Link: Active // Buffer: 100%</span>
                <button 
                  type="submit"
                  disabled={loading}
                  className="bg-indigo-600 text-white px-4 py-1 rounded text-[10px] font-mono uppercase font-bold hover:bg-indigo-500 transition-colors disabled:opacity-20"
                >
                  Confirm
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-black border border-zinc-800 rounded-lg flex items-center justify-center text-white shadow-2xl relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-indigo-500/10 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" />
        <div className="relative">
          <svg className={`w-6 h-6 transition-colors duration-300 ${isOpen ? 'text-indigo-400' : 'text-zinc-500 group-hover:text-indigo-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {messages.length > 1 && !isOpen && (
             <span className="absolute -top-1 -right-1 w-2 h-2 bg-indigo-500 rounded-full animate-ping" />
          )}
        </div>
      </motion.button>
    </div>
  );
};
