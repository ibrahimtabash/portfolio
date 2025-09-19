import React, { useState } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight, Filter } from 'lucide-react';
import { projects } from '../data/mock';

const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(projects.map(p => p.category))];
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % filteredProjects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  const currentProjectData = filteredProjects[currentProject];

  return (
    <section id="projects" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="text-[#00ff88]">Work</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00ff88] to-transparent mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore my latest projects showcasing innovative solutions and cutting-edge development.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setFilter(category);
                setCurrentProject(0);
              }}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-[#00ff88] text-black'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Project */}
        {currentProjectData && (
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Project Image */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88]/20 to-transparent rounded-2xl blur-xl scale-105"></div>
                <div className="relative overflow-hidden rounded-2xl border border-gray-700 hover:border-[#00ff88]/50 transition-colors">
                  <img
                    src={currentProjectData.image}
                    alt={currentProjectData.title}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center px-3 py-1 bg-[#00ff88]/10 border border-[#00ff88]/20 rounded-full text-[#00ff88] text-sm font-medium mb-4">
                    {currentProjectData.category}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {currentProjectData.title}
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {currentProjectData.description}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-[#00ff88] mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentProjectData.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-800 text-gray-300 rounded-lg text-sm border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-lg font-semibold text-[#00ff88] mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {currentProjectData.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#00ff88] rounded-full"></div>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 px-6 py-3 bg-[#00ff88] text-black font-bold rounded-xl hover:bg-[#00ff88]/90 transition-all duration-300 hover:scale-105">
                    <ExternalLink size={20} />
                    Live Demo
                  </button>
                  <button className="flex items-center gap-2 px-6 py-3 border-2 border-[#00ff88]/30 text-white font-bold rounded-xl hover:border-[#00ff88] hover:bg-[#00ff88]/10 transition-all duration-300">
                    <Github size={20} />
                    Source Code
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-12">
              <button
                onClick={prevProject}
                disabled={filteredProjects.length <= 1}
                className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-xl hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft size={20} />
                Previous
              </button>

              <div className="flex gap-2">
                {filteredProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProject(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentProject ? 'bg-[#00ff88]' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextProject}
                disabled={filteredProjects.length <= 1}
                className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-xl hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        )}

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              onClick={() => setCurrentProject(index)}
              className={`group cursor-pointer transition-all duration-300 ${
                index === currentProject ? 'scale-105' : 'hover:scale-105'
              }`}
            >
              <div className="bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-[#00ff88]/50 transition-colors">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      project.status === 'Completed' 
                        ? 'bg-[#00ff88] text-black' 
                        : 'bg-yellow-500 text-black'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                  <p className="text-gray-400 text-sm mb-3">{project.category}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description.slice(0, 100)}...
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;