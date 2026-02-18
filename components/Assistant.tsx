
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { askAssistant } from '../geminiService.ts';
import { Message } from '../types.ts';

export const Assistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: '[AETHER_CORE]: CONNECTION SECURE. NODE_01 LOADED. AWAITING TRANSMISSION.' }
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
    
    const assistantMsg: Message = { role: 'assistant', content: res || '[AETHER_CORE]: ERROR_UPLINK_TIMEOUT.' };
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
            className="mb-6 w-80 md:w-96 bg-[#0a0a0a] border border-zinc-800 shadow-[0_0_80px_rgba(79,70,229,0.3)] rounded-sm overflow-hidden flex flex-col h-[480px]"
          >
            {/* Terminal Header */}
            <div className="bg-zinc-900/50 px-5 py-4 flex justify-between items-center border-b border-zinc-800 shrink-0">
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-zinc-700"></div>
              </div>
              <h3 className="text-[9px] font-mono font-black uppercase tracking-[0.4em] text-zinc-500">Aether_Core_Kernel</h3>
              <button onClick={() => setIsOpen(false)} className="text-zinc-600 hover:text-white transition-colors">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>
            
            {/* Messages Display */}
            <div ref={scrollRef} className="flex-grow overflow-y-auto p-6 font-mono text-[11px] leading-relaxed text-zinc-400 custom-scrollbar space-y-6">
              {messages.map((msg, idx) => (
                <div key={idx} className={msg.role === 'user' ? 'text-zinc-500 italic' : 'text-zinc-100'}>
                  <div className={`font-black mb-1 flex items-center gap-2 ${msg.role === 'user' ? 'text-zinc-700' : 'text-indigo-400'}`}>
                    {msg.role === 'user' ? '[U_ACCESS]>' : '[A_CORE] >>'}
                  </div>
                  <div className="pl-4 border-l border-zinc-800/50">{msg.content}</div>
                </div>
              ))}
              
              {loading && (
                <div className="text-indigo-500 animate-pulse font-black tracking-widest text-[9px]">
                  [CALCULATING_RESPONSE...]
                </div>
              )}
            </div>

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="p-5 bg-black/50 border-t border-zinc-800 flex flex-col gap-4 shrink-0">
              <div className="flex items-center gap-3">
                <span className="text-indigo-600 font-mono text-[10px] font-black tracking-widest">CMD:</span>
                <input 
                  type="text" 
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Enter protocol query..."
                  className="flex-grow bg-transparent border-none text-[11px] font-mono text-white focus:outline-none placeholder:text-zinc-800"
                />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[8px] text-zinc-700 font-mono uppercase tracking-widest">Link: Stable // Latency: 0ms</span>
                <button 
                  type="submit"
                  disabled={loading}
                  className="bg-indigo-600 text-white px-6 py-2 rounded-sm text-[9px] font-mono uppercase font-black tracking-widest hover:bg-indigo-500 transition-colors disabled:opacity-20"
                >
                  Confirm_Exec
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
        className="w-16 h-16 bg-black border border-zinc-800 flex items-center justify-center text-white shadow-2xl relative overflow-hidden group rounded-sm"
      >
        <div className="absolute inset-0 bg-indigo-600/10 scale-0 group-hover:scale-100 transition-transform duration-700 rounded-full" />
        <div className="relative">
          <svg className={`w-6 h-6 transition-all duration-500 ${isOpen ? 'text-indigo-400 rotate-180' : 'text-zinc-600 group-hover:text-indigo-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {messages.length > 1 && !isOpen && (
             <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-indigo-600 rounded-full animate-ping" />
          )}
        </div>
      </motion.button>
    </div>
  );
};
