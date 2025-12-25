
import React from 'react';
import { motion } from 'framer-motion';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const data = [
  { name: 'Mon', value: 400 },
  { name: 'Tue', value: 300 },
  { name: 'Wed', value: 600 },
  { name: 'Thu', value: 800 },
  { name: 'Fri', value: 500 },
  { name: 'Sat', value: 900 },
  { name: 'Sun', value: 700 },
];

const DashboardPreview: React.FC = () => {
  return (
    <section id="dashboard" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative glass rounded-[3rem] p-6 md:p-12 shadow-[0_30px_100px_rgba(0,0,0,0.5)] border border-white/5"
        >
          {/* Dashboard Header UI */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div>
              <h3 className="text-3xl font-black mb-2 tracking-tight">Performance Overview</h3>
              <p className="text-slate-500 text-sm font-medium">Real-time biometric synthesis</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="px-5 py-2.5 bg-lime-500/10 text-lime-500 rounded-2xl border border-lime-500/20 text-xs font-black uppercase tracking-widest">
                LIVE SYNC
              </div>
              <div className="px-5 py-2.5 glass rounded-2xl text-xs font-black uppercase tracking-widest text-slate-300">
                LATEST 7D
              </div>
            </div>
          </div>

          {/* Chart Section */}
          <div className="h-[450px] w-full mb-12">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#84cc16" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#84cc16" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  stroke="#475569" 
                  fontSize={12} 
                  tickLine={false} 
                  axisLine={false} 
                  dy={15}
                />
                <YAxis 
                  stroke="#475569" 
                  fontSize={12} 
                  tickLine={false} 
                  axisLine={false} 
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#0f172a', 
                    border: '1px solid rgba(255,255,255,0.1)', 
                    borderRadius: '16px',
                    padding: '12px'
                  }}
                  itemStyle={{ color: '#84cc16', fontWeight: '900', fontSize: '14px' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#84cc16" 
                  strokeWidth={4}
                  fillOpacity={1} 
                  fill="url(#colorValue)" 
                  animationDuration={2500}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Avg Heart Rate', val: '142 bpm', trend: '+2%' },
              { label: 'Training Load', val: 'Optimum', trend: 'Elite' },
              { label: 'Sleep Recovery', val: '88%', trend: '+12%' },
              { label: 'Fatigue Index', val: 'Low', trend: 'Ready' },
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 hover:bg-white/[0.05] hover:border-lime-500/20 transition-all cursor-default"
              >
                <div className="text-slate-500 text-[10px] font-black mb-3 uppercase tracking-widest">{stat.label}</div>
                <div className="text-2xl font-black mb-1 italic">{stat.val}</div>
                <div className="text-[10px] font-black text-lime-500 bg-lime-500/10 w-fit px-2 py-0.5 rounded-full uppercase tracking-tighter">
                  {stat.trend}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardPreview;
