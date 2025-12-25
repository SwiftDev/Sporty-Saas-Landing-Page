
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Alex Rivera",
    role: "Olympic Decathlete",
    text: "The progress tracker is fantastic. It's motivating to see how much I've improved over time. The app has a great mix of high-level stats and granular data.",
    rating: 5.0,
    img: "https://picsum.photos/seed/p1/200/200"
  },
  {
    name: "Sarah Jenkins",
    role: "CrossFit Coach",
    text: "Sporty changed the way my athletes interact with their training. The UI is clean, fast, and the recovery insights are scarily accurate.",
    rating: 4.9,
    img: "https://picsum.photos/seed/p2/200/200"
  },
  {
    name: "Marcus Thorne",
    role: "Ironman Competitor",
    text: "Finally a tool that understands multi-sport dynamics. Integrating my swim, bike, and run data with my gym work is a game changer.",
    rating: 5.0,
    img: "https://picsum.photos/seed/p3/200/200"
  },
  {
    name: "Liam Chen",
    role: "Powerlifter",
    text: "The RPE tracking and volume calculations are spot on. It's simple enough to use mid-set but powerful enough for deep post-workout review.",
    rating: 4.8,
    img: "https://picsum.photos/seed/p4/200/200"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 px-4 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4">Our trusted <span className="bg-lime-500 text-black px-2 py-0.5 rounded">Athletes</span></h2>
          <p className="text-slate-400">Our mission is to empower peak human performance through data.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-slate-950 border border-white/5 p-8 rounded-[2rem] flex flex-col justify-between hover:translate-y-[-8px] transition-transform duration-300">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-lime-500 text-lime-500" />
                    <span className="text-sm font-bold text-white">{t.rating}</span>
                  </div>
                </div>
                <p className="text-slate-400 italic mb-8 leading-relaxed">"{t.text}"</p>
              </div>
              <div className="flex items-center gap-4">
                <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full border border-white/10" />
                <div>
                  <div className="text-sm font-bold text-white">{t.name}</div>
                  <div className="text-xs text-slate-500 font-medium">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
