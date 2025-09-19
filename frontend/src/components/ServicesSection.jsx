import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Code, Palette, Zap, Settings } from 'lucide-react';
import { services } from '../data/mock';

const ServicesSection = () => {
  const [expandedService, setExpandedService] = useState(null);

  const serviceIcons = {
    1: Code,
    2: Palette,
    3: Zap,
    4: Settings
  };

  const toggleService = (serviceId) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="text-[#00ff88]">Services</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00ff88] to-transparent mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I offer comprehensive web development and design services to help bring your digital vision to life.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {services.map((service) => {
            const IconComponent = serviceIcons[service.id];
            const isExpanded = expandedService === service.id;
            
            return (
              <div 
                key={service.id}
                className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden hover:border-[#00ff88]/30 transition-all duration-300"
              >
                <button
                  onClick={() => toggleService(service.id)}
                  className="w-full p-8 flex items-center justify-between text-left hover:bg-gray-800/30 transition-colors"
                >
                  <div className="flex items-center space-x-6">
                    <div className="p-4 bg-[#00ff88]/10 rounded-xl">
                      <IconComponent size={32} className="text-[#00ff88]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                      <p className="text-gray-400 text-lg">{service.description}</p>
                    </div>
                  </div>
                  <div className="text-[#00ff88]">
                    {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-8 pb-8 border-t border-gray-800">
                    <div className="pt-6">
                      <h4 className="text-lg font-semibold text-[#00ff88] mb-4">What's Included:</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {service.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-[#00ff88] rounded-full"></div>
                            <span className="text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-transparent border-2 border-[#00ff88] text-[#00ff88] font-bold rounded-xl hover:bg-[#00ff88] hover:text-black transition-all duration-300 hover:scale-105">
            Get a Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;