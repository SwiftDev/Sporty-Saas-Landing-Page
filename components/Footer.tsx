
import React from 'react';
import { Activity, Twitter, Instagram, Github, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-lime-500 p-1.5 rounded-lg">
                <Activity className="w-6 h-6 text-black" />
              </div>
              <span className="text-xl font-extrabold tracking-tighter">SPORTY</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              The ultimate performance OS for the modern athlete. Track, analyze, and transcend.
            </p>
            <div className="flex gap-4">
              <Twitter className="w-5 h-5 text-slate-500 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-slate-500 hover:text-white cursor-pointer transition-colors" />
              <Github className="w-5 h-5 text-slate-500 hover:text-white cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-slate-500 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {[
            { title: "Product", links: ["Features", "Dashboard", "Integrations", "Pricing"] },
            { title: "Company", links: ["About Us", "Careers", "News", "Partner"] },
            { title: "Resources", links: ["Blog", "Community", "Help Center", "Privacy"] }
          ].map((col, i) => (
            <div key={i}>
              <h4 className="text-white font-bold mb-6">{col.title}</h4>
              <ul className="space-y-4">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a href="#" className="text-slate-500 hover:text-lime-400 text-sm transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-xs">© 2025 Sporty Technologies Inc. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="text-slate-600 hover:text-white text-xs">Terms of Service</a>
            <a href="#" className="text-slate-600 hover:text-white text-xs">Privacy Policy</a>
            <a href="#" className="text-slate-600 hover:text-white text-xs">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
