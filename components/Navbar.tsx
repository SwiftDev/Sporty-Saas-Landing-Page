
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'py-4' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`glass rounded-2xl md:rounded-full px-6 flex justify-between items-center h-16 transition-all duration-500 ${isScrolled ? 'bg-slate-950/90 shadow-2xl' : 'bg-transparent border-transparent'}`}>
          <div className="flex items-center gap-3">
            <div className="bg-lime-500 p-2 rounded-xl shadow-[0_0_20px_rgba(132,204,22,0.4)]">
              <Activity className="w-5 h-5 text-black" />
            </div>
            <span className="text-2xl font-black tracking-tighter italic">SPORTY</span>
          </div>
          
          <div className="hidden md:flex items-center gap-10">
            {['Features', 'Insights', 'Testimonials', 'Pricing'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 hover:text-white transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-lime-500 transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden sm:block text-xs font-black uppercase tracking-widest text-white px-4 hover:text-lime-400 transition-colors">
              LOG IN
            </button>
            <button className="bg-white text-black text-xs font-black uppercase tracking-widest px-8 py-3 rounded-full hover:bg-lime-400 hover:scale-105 transition-all shadow-xl active:scale-95">
              GET STARTED
            </button>
            <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-slate-400" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-4 right-4 glass rounded-3xl p-8 z-[101] md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-6 items-center">
              {['Features', 'Insights', 'Testimonials', 'Pricing'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-black uppercase tracking-[0.1em] text-white hover:text-lime-500 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
