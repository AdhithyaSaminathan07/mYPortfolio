import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = () => {
  const container = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to('.hero-title', {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out'
    })
      .to('.hero-subtitle', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.5')
      .to('.hero-text', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.5')
      .to('.hero-btn', {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.2,
        ease: 'power3.out'
      }, '-=0.5');

    gsap.to('.circle-1', {
      y: -30,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    gsap.to('.circle-2', {
      y: 30,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 1
    });
  }, { scope: container });

  return (
    <section id="home" className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between relative overflow-hidden pt-20 section-container" ref={container}>
      <div className="z-10 max-w-xl text-center md:text-left mt-10 md:mt-0">
        <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 opacity-0 translate-y-10">
          I am <span className="gradient-text">Adhithya</span>
        </h1>
        <h2 className="hero-subtitle text-2xl md:text-4xl text-gray-300 mb-6 opacity-0 translate-y-10">Full Stack Developer</h2>
        <p className="hero-text text-base md:text-lg text-gray-400 mb-8 max-w-lg mx-auto md:mx-0 opacity-0 translate-y-10">
          I'm a passionate Full-Stack Developer crafting modern, responsive, and user-friendly web applications.
        </p>
        <div className="flex gap-4 justify-center md:justify-start">
          <a href="#projects" className="hero-btn btn btn-primary opacity-0 translate-y-10">View Work</a>
          <a href="#contact" className="hero-btn btn glass hover:bg-glass-border opacity-0 translate-y-10">Contact Me</a>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full z-0 pointer-events-none opacity-20 md:opacity-30">
        <div className="circle-1 absolute w-64 h-64 md:w-96 md:h-96 bg-primary rounded-full blur-[80px] opacity-40 top-[10%] right-[10%]"></div>
        <div className="circle-2 absolute w-48 h-48 md:w-72 md:h-72 bg-accent rounded-full blur-[80px] opacity-40 bottom-[20%] right-[20%]"></div>
      </div>
    </section>
  );
};

export default Hero;
