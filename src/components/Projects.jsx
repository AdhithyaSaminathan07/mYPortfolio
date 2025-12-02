import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
        const container = useRef();
        const projects = [
                {
                        title: 'E-commerce Dashboard',
                        description: 'A comprehensive dashboard for e-commerce analytics with real-time data visualization.',
                        tags: ['React', 'TypeScript', 'Chart.js', 'Firebase'],
                        github: '#',
                        demo: '#'
                },
                {
                        title: 'Task Management App',
                        description: 'A productivity application for managing tasks and team collaboration.',
                        tags: ['React', 'Redux', 'Node.js', 'MongoDB'],
                        github: '#',
                        demo: '#'
                },
                {
                        title: 'Weather Forecast App',
                        description: 'A responsive weather application with location-based forecasts and interactive maps.',
                        tags: ['React', 'API Integration', 'CSS Modules', 'Geolocation'],
                        github: '#',
                        demo: '#'
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
                        <h2 className="section-title-projects text-4xl md:text-5xl font-bold text-center mb-16">Projects</h2>
                        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {projects.map((project, index) => (
                                        <div key={index} className="project-card glass p-8 shadow-lg text-left flex flex-col items-start hover:-translate-y-2 hover:border-primary transition-all duration-300">
                                                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                                                <p className="text-gray-300 mb-6 text-base leading-relaxed">{project.description}</p>

                                                <div className="flex flex-wrap gap-2 mb-8">
                                                        {project.tags.map(tag => (
                                                                <span key={tag} className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-md">{tag}</span>
                                                        ))}
                                                </div>

                                                <div className="flex gap-4 mt-auto w-full">
                                                        <a href={project.github} className="px-6 py-2 rounded-md border border-glass-border text-white font-semibold hover:bg-white/10 transition-colors">GitHub</a>
                                                        <a href={project.demo} className="px-6 py-2 rounded-md bg-primary text-white font-semibold hover:bg-secondary transition-colors">Live Demo</a>
                                                </div>
                                        </div>
                                ))}
                        </div>
                </section>
        );
};

export default Projects;
