import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 py-6 ${scrolled ? 'bg-bg-dark/80 backdrop-blur-md py-4 shadow-lg' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-white">Adhithya.</a>

        <div className={`md:flex gap-8 items-center ${isOpen ? 'absolute top-full left-0 w-full bg-bg-dark/95 backdrop-blur-xl flex flex-col py-8 gap-6 shadow-xl border-b border-primary/20' : 'hidden'}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-medium relative group hover:text-primary transition-colors duration-300 text-lg md:text-base"
            >
              {link.name}
              <span className="absolute bottom-[-5px] left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <div className="md:hidden flex flex-col gap-1.5 cursor-pointer z-50 p-2" onClick={() => setIsOpen(!isOpen)}>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
