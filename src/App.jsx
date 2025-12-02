import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="text-center py-8 text-gray-500 text-sm border-t border-glass-border mt-16">
        <p>© {new Date().getFullYear()} Adhithya. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
