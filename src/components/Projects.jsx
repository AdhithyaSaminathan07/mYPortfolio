import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
        const container = useRef();
        const projects = [
                {
                        title: 'Billzzy Lite (PWA)',
                        description: 'A smart mobile billing system (PWA) with WhatsApp billing, dynamic UPI QR payments, and inventory management.',
                        tags: ['Next.js', 'PWA', 'MongoDB', 'AWS', 'Google OAuth'],
                        github: '#',
                        demo: 'https://lite.billzzy.com/',
                        image: '/project-billzzy.png',
                        color: 'neon-pink',
                        shadow: 'shadow-neon-pink'
                },
                {
                        title: 'Techvaseegrah',
                        description: 'A comprehensive corporate landing page featuring service showcases, case studies, and a blog, built with modern web technologies.',
                        tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Shadcn UI'],
                        github: '#',
                        demo: 'https://www.techvaseegrah.com/',
                        image: '/project-tech.png',
                        color: 'neon-blue',
                        shadow: 'shadow-neon-blue'
                },
                {
                        title: 'Billzzy – Advanced Billing Application',
                        description: 'An advanced billing application for small businesses featuring POS integration, multi-warehouse inventory, invoice management, online payments, and real-time analytics.',
                        tags: ['Next.js', 'TypeScript', 'MongoDB', 'Prisma', 'Tailwind CSS', 'Shadcn UI'],
                        github: '#',
                        demo: 'https://billzzy.com/',
                        image: '/project-billzzy-billing-system.png',
                        color: 'neon-purple',
                        shadow: 'shadow-neon-purple'
                }
        ];

        useGSAP(() => {
                gsap.from('.section-title-projects', {
                        scrollTrigger: {
                                trigger: '.section-title-projects',
                                start: 'top 85%',
                        },
                        y: 50,
                        opacity: 0,
                        duration: 1,
                        ease: 'power3.out'
                });

                gsap.from('.project-card', {
                        scrollTrigger: {
                                trigger: '.projects-grid',
                                start: 'top 85%',
                        },
                        y: 50,
                        opacity: 0,
                        duration: 0.8,
                        stagger: 0.2,
                        ease: 'power3.out',
                        clearProps: 'all'
                });
        }, { scope: container });

        return (
                <section id="projects" className="section-container" ref={container}>
                        <div className="text-center mb-16">
                                <h2 className="section-title-projects text-4xl md:text-5xl font-bold mb-4">
                                        Featured <span className="gradient-text">Projects</span>
                                </h2>
                                <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
                        </div>

                        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {projects.map((project, index) => (
                                        <div key={index} className={`project-card glass-card p-6 md:p-8 flex flex-col items-start group hover:${project.shadow} border-t border-white/10`}>
                                                <div className="relative w-full h-56 mb-8 flex items-center justify-center overflow-hidden rounded-2xl bg-black/20">
                                                        <div className={`absolute inset-0 bg-${project.color}/20 blur-[50px] group-hover:blur-[60px] transition-all duration-500 opacity-50`}></div>
                                                        <img
                                                                src={project.image}
                                                                alt={project.title}
                                                                className="w-4/5 h-4/5 object-contain relative z-10 transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 drop-shadow-2xl"
                                                        />
                                                </div>

                                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                                                        {project.title}
                                                </h3>
                                                <p className="text-gray-400 mb-6 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-300 transition-colors">
                                                        {project.description}
                                                </p>

                                                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                                                        {project.tags.map(tag => (
                                                                <span key={tag} className={`text-xs font-medium text-${project.color} bg-${project.color}/10 border border-${project.color}/20 px-3 py-1 rounded-full`}>
                                                                        {tag}
                                                                </span>
                                                        ))}
                                                </div>

                                                <div className="flex gap-4 w-full">
                                                        <a href={project.github} className="flex-1 text-center px-4 py-2 rounded-lg border border-white/10 text-white font-medium hover:bg-white/5 hover:border-white/30 transition-all duration-300 btn-glow">
                                                                GitHub
                                                        </a>
                                                        <a href={project.demo} className={`flex-1 text-center px-4 py-2 rounded-lg bg-${project.color}/20 text-${project.color} border border-${project.color}/50 font-medium hover:bg-${project.color}/30 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(var(--${project.color}-rgb),0.4)] btn-shine`}>
                                                                Live Demo
                                                        </a>
                                                </div>
                                        </div>
                                ))}
                        </div>
                </section>
        );
};

export default Projects;
