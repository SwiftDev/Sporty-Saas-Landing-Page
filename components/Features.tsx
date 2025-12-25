
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, BarChart3, Clock, Users, Smartphone } from 'lucide-react';

const features = [
  {
    icon: <BarChart3 className="w-6 h-6 text-lime-400" />,
    title: "Deep Analytics",
    description: "Granular data extraction from every rep. Find the hidden patterns in your performance metrics."
  },
  {
    icon: <Zap className="w-6 h-6 text-blue-400" />,
    title: "AI Coaching",
    description: "Personalized training adjustments based on your biological output and fatigue markers."
  },
  {
    icon: <Shield className="w-6 h-6 text-purple-400" />,
    title: "Risk Analysis",
    description: "Predictive injury prevention algorithms that keep you in the peak training zone safely."
  },
  {
    icon: <Clock className="w-6 h-6 text-orange-400" />,
    title: "Smart Sync",
    description: "Seamless integration with wearable hardware. Your biometrics, synchronized instantly."
  },
  {
    icon: <Smartphone className="w-6 h-6 text-emerald-400" />,
    title: "Ecosystem Integration",
    description: "Connect WHOOP, Oura, Garmin, and Strava. One unified source of athletic truth."
  },
  {
    icon: <Users className="w-6 h-6 text-pink-400" />,
    title: "Global Squads",
    description: "Train with the best. Share benchmarks, join elite teams, and climb global leaderboards."
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-32 bg-[#020617] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-black text-lime-500 uppercase tracking-[0.4em] mb-6"
          >
            Capabilities
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl lg:text-7xl font-black tracking-tighter leading-[0.9]"
          >
            PRECISION <br />
            <span className="text-slate-700">FOR THE 1%.</span>
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group p-10 rounded-[2.5rem] glass hover:bg-white/[0.06] transition-all duration-500 border-white/5 hover:border-lime-500/40 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-lime-500/5 blur-3xl group-hover:bg-lime-500/10 transition-colors" />
              <div className="mb-8 p-4 w-fit rounded-2xl bg-white/[0.04] group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 italic tracking-tight">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed font-medium">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
