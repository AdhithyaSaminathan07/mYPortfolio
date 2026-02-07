import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

const CodingAnimation = () => {
    const container = useRef();
    const codeRef = useRef();
    const cursorRef = useRef();

    const codeSnippet = `const developer = {
  name: "Adhithya",
  role: "Full Stack Dev",
  skills: [
    "React", "Node.js",
    "Next.js", "GSAP"
  ],
  hardWorker: true,
  problemSolver: true,
  hireable: function() {
    return this.hardWorker && this.problemSolver;
  }
};`;

    useGSAP(() => {
        const tl = gsap.timeline();
        const codeLines = codeSnippet.split('\n');
        let fullText = "";

        // Initial state
        gsap.set(codeRef.current, { text: "" });

        // Typing animation
        tl.to(codeRef.current, {
            duration: 4,
            text: {
                value: codeSnippet,
                delimiter: ""
            },
            ease: "none",
        });

        // Blinking cursor
        gsap.to(cursorRef.current, {
            opacity: 0,
            repeat: -1,
            yoyo: true,
            duration: 0.5,
            ease: "power2.inOut"
        });

        // Floating animation for the container
        gsap.to(container.current, {
            y: -15,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

    }, { scope: container });

    return (
        <div ref={container} className="w-full max-w-md mx-auto md:mr-0 glass rounded-xl overflow-hidden shadow-2xl border border-glass-border transform hover:scale-[1.02] transition-transform duration-300">
            {/* Window Header */}
            <div className="bg-white/5 px-4 py-3 flex items-center gap-2 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <div className="ml-4 text-xs text-gray-400 font-mono">developer.js</div>
            </div>

            {/* Code Area */}
            <div className="p-6 bg-black/40 font-mono text-sm md:text-base overflow-hidden min-h-[300px]">
                <pre className="text-gray-300">
                    <code ref={codeRef} className="language-javascript block whitespace-pre-wrap"></code>
                    <span ref={cursorRef} className="inline-block w-2 h-5 bg-primary ml-1 align-middle"></span>
                </pre>
            </div>
        </div>
    );
};

export default CodingAnimation;
