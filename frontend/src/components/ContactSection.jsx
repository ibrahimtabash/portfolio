import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { personalInfo, contactFormFields } from '../data/mock';

const ContactSection = () => {
  const [formData, setFormData] = useState(contactFormFields);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Message sent successfully! I\'ll get back to you soon.');
      setFormData(contactFormFields);
      setIsSubmitting(false);
      
      setTimeout(() => setSubmitMessage(''), 5000);
    }, 1000);
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hi Ibrahim, I\'d like to discuss a project with you.');
    window.open(`https://wa.me/${personalInfo.whatsapp.replace('+', '')}?text=${message}`, '_blank');
  };

  const handleEmailClick = () => {
    window.open(`mailto:${personalInfo.email}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's <span className="text-[#00ff88]">Connect</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00ff88] to-transparent mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to bring your project to life? Let's discuss how we can work together to create something amazing.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                I'm always excited to work on new projects and collaborate with amazing people. 
                Whether you have a question, want to start a project, or just want to say hello, 
                I'd love to hear from you!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-gray-900/50 rounded-xl hover:bg-gray-800/50 transition-colors">
                <div className="p-3 bg-[#00ff88]/10 rounded-lg">
                  <Mail size={24} className="text-[#00ff88]" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <button
                    onClick={handleEmailClick}
                    className="text-white font-medium hover:text-[#00ff88] transition-colors"
                  >
                    {personalInfo.email}
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-gray-900/50 rounded-xl hover:bg-gray-800/50 transition-colors">
                <div className="p-3 bg-[#00ff88]/10 rounded-lg">
                  <MessageCircle size={24} className="text-[#00ff88]" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">WhatsApp</p>
                  <button
                    onClick={handleWhatsAppClick}
                    className="text-white font-medium hover:text-[#00ff88] transition-colors"
                  >
                    {personalInfo.whatsapp}
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-gray-900/50 rounded-xl hover:bg-gray-800/50 transition-colors">
                <div className="p-3 bg-[#00ff88]/10 rounded-lg">
                  <MapPin size={24} className="text-[#00ff88]" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white font-medium">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={handleWhatsAppClick}
                className="w-full sm:w-auto px-8 py-4 bg-[#00ff88] text-black font-bold rounded-xl hover:bg-[#00ff88]/90 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                Chat on WhatsApp
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            
            {submitMessage && (
              <div className="mb-6 p-4 bg-[#00ff88]/10 border border-[#00ff88]/20 rounded-xl">
                <p className="text-[#00ff88] font-medium">{submitMessage}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-[#00ff88] focus:ring-2 focus:ring-[#00ff88]/20 transition-colors"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-[#00ff88] focus:ring-2 focus:ring-[#00ff88]/20 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-[#00ff88] focus:ring-2 focus:ring-[#00ff88]/20 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-[#00ff88] text-black font-bold rounded-xl hover:bg-[#00ff88]/90 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;