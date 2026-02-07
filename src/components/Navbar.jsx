import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const navRef = useRef(null);
  const itemRefs = useRef({});

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  // Handle Scroll for Transparency and Active Section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple Scroll Spy
      const sections = navLinks.map(link => link.name);
      let current = '';

      for (const section of sections) {
        const element = document.getElementById(section.toLowerCase());
        if (element) {
          const rect = element.getBoundingClientRect();
          // If top of section is within middle of viewport
          // We check if the top is close to the middle OR if the section covers the middle
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = section;
          }
        }
      }
      if (current && current !== activeSection) {
        setActiveSection(current);
      } else if (window.scrollY < 100) {
        setActiveSection('Home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  // Update Indicator Position
  useEffect(() => {
    const activeItem = itemRefs.current[activeSection];
    if (activeItem) {
      setIndicatorStyle({
        left: activeItem.offsetLeft,
        width: activeItem.offsetWidth,
        opacity: 1
      });
    }
  }, [activeSection, isOpen]); // Update when active section or open state changes

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[95%] md:w-auto`}>
      {/* Desktop / Tablet Pill Container */}
      <div className={`
                relative flex items-center justify-between p-1.5 rounded-full border border-white/10
                ${scrolled || isOpen ? 'bg-black/60 backdrop-blur-xl shadow-lg shadow-primary/10' : 'bg-black/40 backdrop-blur-md'}
                transition-all duration-500
            `}>

        {/* Avatar Area */}
        <div className="flex items-center gap-3 pl-2 pr-4">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/20 bg-white/5 shrink-0">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Adhithya"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex relative items-center bg-white/5 rounded-full p-1" ref={navRef}>
          {/* The Sliding Indicator */}
          <div
            className="absolute h-full top-0 bg-primary rounded-full transition-all duration-300 ease-out shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)]"
            style={{
              left: `${indicatorStyle.left}px`,
              width: `${indicatorStyle.width}px`,
              opacity: indicatorStyle.opacity
            }}
          />

          {navLinks.map((link) => (
            <a
              key={link.name}
              ref={el => itemRefs.current[link.name] = el}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                setActiveSection(link.name);
                const el = document.querySelector(link.href);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`
                                relative z-10 px-5 py-2 text-sm font-medium rounded-full transition-colors duration-200
                                ${activeSection === link.name ? 'text-white' : 'text-gray-400 hover:text-white'}
                            `}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle (Right side on mobile) */}
        <div className="md:hidden pr-2">
          <button
            className="p-2 text-white/80 hover:text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 flex flex-col items-end gap-1.5">
              <span className={`h-0.5 bg-current transition-all duration-300 ${isOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`} />
              <span className={`h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-4'}`} />
              <span className={`h-0.5 bg-current transition-all duration-300 ${isOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`
                absolute top-full left-0 w-full mt-4 p-2 rounded-2xl bg-black/90 backdrop-blur-xl border border-white/10
                flex flex-col gap-1 origin-top transition-all duration-300 overflow-hidden
                ${isOpen ? 'max-h-96 opacity-100 visible' : 'max-h-0 opacity-0 invisible'}
            `}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => {
              setIsOpen(false);
              setActiveSection(link.name);
            }}
            className={`
                            text-lg font-medium text-center py-3 rounded-xl transition-all
                            ${activeSection === link.name ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-gray-300 hover:bg-white/5'}
                        `}
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
