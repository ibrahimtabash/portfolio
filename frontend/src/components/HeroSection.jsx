import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { personalInfo } from '../data/mock';

const HeroSection = () => {
  const handleContactClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${personalInfo.whatsapp.replace('+', '')}`, '_blank');
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#00ff88]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#00ff88]/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#00ff88]/2 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 lg:order-1">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-[#00ff88]/10 border border-[#00ff88]/20 rounded-full">
                <span className="text-[#00ff88] text-sm font-medium">
                  Available for freelance work
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">Creative</span>
                <br />
                <span className="text-[#00ff88] relative">
                  Designer
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#00ff88] to-transparent"></div>
                </span>
                <br />
                <span className="text-white">& Developer</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed">
                I build designs that{' '}
                <span className="text-[#00ff88] font-semibold">solve problems</span>,{' '}
                <span className="text-[#00ff88] font-semibold">inspire action</span>, and{' '}
                <span className="text-[#00ff88] font-semibold">drive success</span>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleContactClick}
                className="group px-8 py-4 bg-[#00ff88] text-black font-bold rounded-xl hover:bg-[#00ff88]/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#00ff88]/25 flex items-center justify-center gap-2"
              >
                Contact Me
                <ArrowRight 
                  size={20} 
                  className="group-hover:translate-x-1 transition-transform duration-300" 
                />
              </button>
              
              <button className="group px-8 py-4 border-2 border-[#00ff88]/30 text-white font-bold rounded-xl hover:border-[#00ff88] hover:bg-[#00ff88]/10 transition-all duration-300 flex items-center justify-center gap-2">
                Download CV
                <Download 
                  size={20} 
                  className="group-hover:translate-y-1 transition-transform duration-300" 
                />
              </button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#00ff88]">50+</div>
                <div className="text-sm text-gray-400">Projects Done</div>
              </div>
              <div className="w-px h-12 bg-gray-700"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#00ff88]">2+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="w-px h-12 bg-gray-700"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#00ff88]">25+</div>
                <div className="text-sm text-gray-400">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:order-2">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88]/30 to-[#00ff88]/10 rounded-3xl blur-xl scale-110"></div>
              
              {/* Image Container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden border-4 border-[#00ff88]/50 shadow-2xl">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#00ff88] rounded-full animate-bounce delay-300"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#00ff88]/70 rounded-full animate-bounce delay-700"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;