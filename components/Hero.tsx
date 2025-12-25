
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ChevronRight, Play, Flame, Target, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  // Explicitly typing variants to avoid inference issues with Framer Motion
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  // Explicitly typing variants and casting the ease array to handle strict Easing types
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1] as any 
      } 
    },
  };

  return (
    <section className="relative pt-32 pb-16 lg:pt-52 lg:pb-32 px-4 overflow-visible">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] pointer-events-none opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-lime-500/10 rounded-full blur-[120px] light-leak" />
        <div className="absolute bottom-[20%] right-[-5%] w-[30%] h-[30%] bg-blue-500/10 rounded-full blur-[100px] light-leak" />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Floating elements with subtle drift */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-0 left-4 md:left-20 pointer-events-none hidden sm:block"
        >
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="glass p-4 rounded-2xl flex items-center gap-4 shadow-2xl"
          >
            <div className="bg-orange-500/20 p-2 rounded-xl">
              <Flame className="w-6 h-6 text-orange-500" />
            </div>
            <div className="text-left">
              <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Daily Burn</div>
              <div className="text-lg font-black italic">1,240 <span className="text-[10px] font-medium text-slate-500">KCAL</span></div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute top-24 right-4 md:right-20 pointer-events-none hidden sm:block"
        >
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="glass p-4 rounded-2xl flex items-center gap-4 shadow-2xl"
          >
            <div className="bg-lime-500/20 p-2 rounded-xl">
              <Target className="w-6 h-6 text-lime-500" />
            </div>
            <div className="text-left">
              <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Weekly Goal</div>
              <div className="text-lg font-black italic">98% <span className="text-[10px] font-medium text-slate-500 italic">READY</span></div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-white/[0.03] border border-white/10 px-4 py-2 rounded-full mb-10 backdrop-blur-sm"
          >
            <Zap className="w-3.5 h-3.5 text-lime-400 fill-lime-400" />
            <span className="text-xs font-bold text-slate-200 uppercase tracking-[0.2em]">Next-Gen Athlete OS</span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-6xl lg:text-[100px] font-black tracking-tighter mb-8 leading-[0.9] text-white"
          >
            TRAIN LIKE A <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-lime-300 via-lime-500 to-emerald-600">PRO ATHLETE</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-12 font-medium leading-relaxed"
          >
            Precision tracking meets elite-level analytics. Stop guessing. Start dominating. 
            Sporty transforms your raw data into a competitive advantage.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button className="group relative overflow-hidden bg-lime-500 text-black px-10 py-5 rounded-full font-black text-lg flex items-center gap-3 hover:bg-white transition-all duration-300 shadow-[0_20px_50px_rgba(132,204,22,0.2)]">
              <span className="relative z-10">JOIN THE ELITE</span>
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-lime-400 to-lime-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <button className="group flex items-center gap-4 px-10 py-5 rounded-full font-bold text-lg text-white hover:bg-white/5 transition-all border border-white/5">
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-white/5 group-hover:bg-lime-500 group-hover:border-lime-500 transition-all">
                <Play className="w-4 h-4 fill-white group-hover:fill-black" />
              </div>
              SEE HOW IT WORKS
            </button>
          </motion.div>
        </motion.div>

        {/* Brand Reel */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-28"
        >
          <div className="text-[10px] font-black text-slate-600 uppercase tracking-[0.4em] mb-10">Trusted by Professional Squads</div>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
            {['HYROX', 'IRONMAN', 'CROSSFIT', 'REDBULL', 'NIKE'].map((brand) => (
              <span key={brand} className="text-2xl font-black italic tracking-tighter cursor-default hover:text-white transition-colors">
                {brand}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
