import React from 'react';
import { Github, Linkedin, Mail, MessageCircle, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Mail,
      href: `mailto:${personalInfo.email}`,
      label: 'Email'
    },
    {
      icon: Linkedin,
      href: personalInfo.linkedin,
      label: 'LinkedIn'
    },
    {
      icon: MessageCircle,
      href: `https://wa.me/${personalInfo.whatsapp.replace('+', '')}`,
      label: 'WhatsApp'
    },
    {
      icon: Github,
      href: '#',
      label: 'GitHub'
    }
  ];

  const footerLinks = [
    {
      title: 'Navigation',
      links: [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' }
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Web Development', href: '#services' },
        { name: 'UI/UX Design', href: '#services' },
        { name: 'Brand Design', href: '#services' },
        { name: 'Performance Optimization', href: '#services' }
      ]
    },
    {
      title: 'Technologies',
      links: [
        { name: 'Laravel & PHP', href: '#about' },
        { name: 'React & JavaScript', href: '#about' },
        { name: 'TailwindCSS', href: '#about' },
        { name: 'MySQL Database', href: '#about' }
      ]
    }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Brand & Description */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  <span className="text-white">Ibrahim</span>
                  <span className="text-[#00ff88]">.</span>
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Full Stack Web Developer specializing in creating innovative web solutions 
                  that solve problems and drive success.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="p-3 bg-gray-800 hover:bg-[#00ff88] text-gray-400 hover:text-black rounded-xl transition-all duration-300 hover:scale-110"
                    >
                      <IconComponent size={20} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Footer Links */}
            {footerLinks.map((section, index) => (
              <div key={index} className="space-y-6">
                <h4 className="text-lg font-semibold text-white">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-gray-400 hover:text-[#00ff88] transition-colors duration-200"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-center md:text-left">
              <p>
                © {currentYear} <span className="text-[#00ff88] font-medium">Ibrahim Tabash</span>. 
                All rights reserved. Built with ❤️ using React & TailwindCSS.
              </p>
            </div>

            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="group p-3 bg-gray-800 hover:bg-[#00ff88] text-gray-400 hover:text-black rounded-xl transition-all duration-300 hover:scale-110"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Additional Info */}
          <div className="mt-6 pt-6 border-t border-gray-800 text-center">
            <p className="text-sm text-gray-500">
              Currently available for freelance opportunities. 
              <button
                onClick={() => scrollToSection('#contact')}
                className="text-[#00ff88] hover:underline ml-1"
              >
                Let's work together!
              </button>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;