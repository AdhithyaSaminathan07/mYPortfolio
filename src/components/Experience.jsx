import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
    const container = useRef();

    const experiences = [
        {
            id: 1,
            role: 'MERN Stack Developer',
            company: 'Tech Vaseegrah',
            period: '2024 - Present',
            description: 'Developing robust and scalable web applications using MongoDB, Express.js, React, and Node.js. Collaborating with cross-functional teams to deliver high-quality software solutions.'
        }
    ];

    useGSAP(() => {
        gsap.to('.section-title-exp', {
            scrollTrigger: {
                trigger: '.section-title-exp',
                start: 'top 85%',
            },
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out'
        });

        gsap.to('.experience-card', {
            scrollTrigger: {
                trigger: '.experience-container',
                start: 'top 85%',
            },
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out'
        });
    }, { scope: container });

    return (
        <section id="experience" className="section-container" ref={container}>
            <h2 className="section-title-exp text-4xl md:text-5xl font-bold text-center mb-16 opacity-0 translate-y-10">Work <span className="gradient-text">Experience</span></h2>

            <div className="experience-container max-w-4xl mx-auto flex flex-col gap-6">
                {experiences.map((exp) => (
                    <div key={exp.id} className="experience-card glass p-8 hover:border-primary transition-all duration-300 transform hover:-translate-y-1 opacity-0 translate-y-10">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                                <h4 className="text-gray-400 text-lg">{exp.company}</h4>
                            </div>
                            <span className="text-primary font-semibold mt-2 md:mt-0 bg-primary/10 px-4 py-1 rounded-full w-fit">{exp.period}</span>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                            {exp.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
