import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const container = useRef();

  useGSAP(() => {
    gsap.from('.contact-container', {
      scrollTrigger: {
        trigger: '.contact-container',
        start: 'top 80%',
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });
  }, { scope: container });

  return (
    <section id="contact" className="section-container" ref={container}>
      <h2 className="section-title text-4xl md:text-5xl font-bold text-center mb-16">Get In <span className="gradient-text">Touch</span></h2>
      <div className="contact-container glass max-w-5xl mx-auto p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Left Column - Contact Info */}
        <div className="flex flex-col justify-between space-y-8">
          <div>
            <h3 className="text-3xl font-bold text-white mb-8">Let's Connect</h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href="mailto:adhisami2003@gmail.com" className="text-lg font-medium text-white hover:text-primary transition-colors">adhisami2003@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <FaPhone className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <a href="tel:+916383903961" className="text-lg font-medium text-white hover:text-primary transition-colors">+91 6383903961</a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-lg font-medium text-white">Chennai, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Social Profiles</p>
            <div className="flex gap-4">
              <a href="https://github.com/AdhithyaSaminathan07" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-glass-border flex items-center justify-center text-white hover:bg-primary hover:-translate-y-1 transition-all duration-300">
                <FaGithub className="text-xl" />
              </a>
              <a href="https://www.linkedin.com/in/adhithya-saminathan-2895bb299" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-glass-border flex items-center justify-center text-white hover:bg-[#0077b5] hover:-translate-y-1 transition-all duration-300">
                <FaLinkedin className="text-xl" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-glass-border flex items-center justify-center text-white hover:bg-[#1DA1F2] hover:-translate-y-1 transition-all duration-300">
                <FaTwitter className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - Email Contact Form */}
        <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-6">Email Contact</h3>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors resize-none"
            ></textarea>
            <button type="submit" className="btn btn-primary w-full mt-2">Send Message</button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
