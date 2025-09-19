import React from 'react';
import { Code, Zap, Target, Users } from 'lucide-react';
import { personalInfo, skills } from '../data/mock';

const AboutSection = () => {
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const stats = [
    { icon: Code, label: 'Projects Completed', value: '50+' },
    { icon: Zap, label: 'Years of Experience', value: '2+' },
    { icon: Target, label: 'Success Rate', value: '98%' },
    { icon: Users, label: 'Happy Clients', value: '25+' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About <span className="text-[#00ff88]">Me</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#00ff88] to-transparent mb-8"></div>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed">
              {personalInfo.bio}
            </p>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">What I Do</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-[#00ff88]/30 transition-colors">
                      <div className="p-3 bg-[#00ff88]/10 rounded-lg">
                        <IconComponent size={24} className="text-[#00ff88]" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-[#00ff88]">{stat.value}</div>
                        <div className="text-sm text-gray-400">{stat.label}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white">Technical Skills</h3>
            
            {Object.entries(groupedSkills).map(([category, categorySkills]) => (
              <div key={category} className="space-y-4">
                <h4 className="text-lg font-semibold text-[#00ff88]">{category}</h4>
                <div className="space-y-3">
                  {categorySkills.map((skill) => (
                    <div key={skill.id} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-[#00ff88] text-sm font-bold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-[#00ff88] to-[#00ff88]/70 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;