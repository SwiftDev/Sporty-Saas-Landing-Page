
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DashboardPreview from './components/DashboardPreview';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative selection:bg-lime-500 selection:text-black">
      <div className="fixed inset-0 hero-gradient pointer-events-none" />
      <Navbar />
      <main>
        <Hero />
        <DashboardPreview />
        <Features />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;
