import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiNextdotjs, SiVite } from 'react-icons/si';

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
    const container = useRef();
    const skills = [
        { name: 'React', icon: <FaReact color="#61DAFB" /> },
        { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
        { name: 'Next.js', icon: <SiNextdotjs color="#ffffff" /> },
        { name: 'Node.js', icon: <FaNodeJs color="#339933" /> },
        { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
        { name: 'HTML5', icon: <FaHtml5 color="#E34F26" /> },
        { name: 'CSS3', icon: <FaCss3Alt color="#1572B6" /> },
        { name: 'Vite', icon: <SiVite color="#646CFF" /> },
        { name: 'Git', icon: <FaGitAlt color="#F05032" /> }
    ];

    useGSAP(() => {
        gsap.from('.section-title-stack', {
            scrollTrigger: {
                trigger: '.section-title-stack',
                start: 'top 80%',
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });

        gsap.from('.skill-item', {
            scrollTrigger: {
                trigger: '.skills-grid',
                start: 'top 85%',
            },
            y: 20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: 'back.out(1.7)'
        });
    }, { scope: container });

    return (
        <section id="tech-stack" className="section-container" ref={container}>
            <h2 className="section-title-stack text-4xl md:text-5xl font-bold text-center mb-16">Tech <span className="gradient-text">Stack</span></h2>
            <div className="skills-grid flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
                {skills.map(skill => (
                    <div key={skill.name} className="skill-item flex flex-col items-center gap-3 group hover:-translate-y-2 transition-transform duration-300" title={skill.name}>
                        <div className="text-5xl p-6 rounded-2xl bg-glass-bg border border-glass-border flex items-center justify-center transition-all duration-300 group-hover:bg-white/10 group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(100,108,255,0.4)]">
                            {skill.icon}
                        </div>
                        <span className="text-base font-medium text-gray-300 group-hover:text-white transition-colors">{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechStack;
