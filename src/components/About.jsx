import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGraduationCap, FaBriefcase, FaCode } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
        const container = useRef();

        useGSAP(() => {
                gsap.from('.section-title', {
                        scrollTrigger: {
                                trigger: '.section-title',
                                start: 'top 80%',
                        },
                        y: 50,
                        opacity: 0,
                        duration: 1,
                        ease: 'power3.out'
                });

                gsap.from('.left-column > div', {
                        scrollTrigger: {
                                trigger: '.left-column',
                                start: 'top 80%',
                        },
                        y: 50,
                        opacity: 0,
                        duration: 0.8,
                        stagger: 0.2,
                        ease: 'power3.out'
                });

                gsap.from('.right-column', {
                        scrollTrigger: {
                                trigger: '.right-column',
                                start: 'top 80%',
                        },
                        x: 50,
                        opacity: 0,
                        duration: 1,
                        ease: 'power3.out',
                        delay: 0.2
                });
        }, { scope: container });

        return (
                <section id="about" className="section-container" ref={container}>
                        <h2 className="section-title text-4xl md:text-5xl font-bold text-center mb-16">About <span className="gradient-text">Me</span></h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
                                {/* Left Column: Text + Info Cards + Education */}
                                <div className="left-column flex flex-col gap-6">
                                        {/* Intro Text */}
                                        <div className="about-text glass p-8">
                                                <p className="mb-6 text-gray-300 text-lg">
                                                        👋 Hi, I’m Adhithya — Full-Stack Developer
                                                </p>
                                                <p className="mb-6 text-gray-300 text-lg">
                                                        I’m a passionate Full-Stack Developer who loves building fast, scalable, and modern web applications.
                                                        I specialize in crafting smooth user experiences on the frontend and powerful, secure logic on the backend.
                                                </p>
                                                <p className="text-gray-300 text-lg">
                                                        With experience in JavaScript, React, Next.js, Node.js, MongoDB, and modern development tools,
                                                        I enjoy turning ideas into fully functional products. Recently, I built Billzzy Lite, a complete PWA billing system
                                                        with inventory management, payment integration, and powerful automation — all inside a mobile-friendly browser app.
                                                </p>
                                        </div>

                                        {/* 3 Info Cards */}
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                                <div className="glass p-4 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
                                                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-lg mb-2 shadow-lg">
                                                                <FaGraduationCap />
                                                        </div>
                                                        <h3 className="text-sm font-bold text-white">Education</h3>
                                                        <p className="text-primary text-xs font-semibold">BE CSE</p>
                                                        <p className="text-gray-400 text-xs">CGPA: 7.64</p>
                                                </div>

                                                <div className="glass p-4 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
                                                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-lg mb-2 shadow-lg">
                                                                <FaBriefcase />
                                                        </div>
                                                        <h3 className="text-sm font-bold text-white">Experience</h3>
                                                        <p className="text-primary text-xs font-semibold">Tech Vaseegrah</p>
                                                        <p className="text-gray-400 text-xs">Junior MERN</p>
                                                </div>

                                                <div className="glass p-4 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
                                                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-lg mb-2 shadow-lg">
                                                                <FaCode />
                                                        </div>
                                                        <h3 className="text-sm font-bold text-white">Focus</h3>
                                                        <p className="text-primary text-xs font-semibold">Full Stack</p>
                                                        <p className="text-gray-400 text-xs">Web Dev</p>
                                                </div>
                                        </div>

                                        {/* Educational Background Card */}
                                        <div className="education-card glass p-6 rounded-2xl">
                                                <h3 className="text-xl font-bold text-white mb-4">Educational Background</h3>
                                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                                                        <div>
                                                                <h4 className="text-lg font-bold text-purple-400">Bachelor of Engineering</h4>
                                                                <p className="text-sm text-white">Computer Science and Engineering</p>
                                                                <p className="text-xs text-gray-400">Arasu Engineering College, Kumbakonam</p>
                                                        </div>
                                                        <div className="text-left sm:text-right mt-2 sm:mt-0">
                                                                <p className="text-xs text-gray-400">2020 - 2024</p>
                                                                <p className="text-sm font-bold text-white">CGPA: <span className="text-purple-400">7.64</span></p>
                                                        </div>
                                                </div>
                                        </div>
                                </div>

                                {/* Right Column: Image */}
                                <div className="right-column flex justify-center lg:sticky lg:top-24">
                                        <div className="glass p-4 w-full max-w-md aspect-square flex items-center justify-center">
                                                <img src="https://placehold.co/400x400/1a1a1a/646cff?text=Adhithya" alt="Adhithya" className="w-full h-full object-cover rounded-lg" />
                                        </div>
                                </div>
                        </div>
                </section>
        );
};

export default About;
