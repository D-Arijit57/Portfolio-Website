import React from 'react';
import { Code, Database, Globe, Smartphone, Cloud, GitBranch } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code size={32} />,
      title: 'Frontend Development',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'JavaScript']
    },
    {
      icon: <Database size={32} />,
      title: 'Backend Development',
      skills: ['Node.js', 'Python', 'Express.js', 'REST APIs']
    },
    {
      icon: <Database size={32} />,
      title: 'Databases',
      skills: ['MongoDB', 'MySQL', 'Firebase']
    },
    {
      icon: <Cloud size={32} />,
      title: 'Cloud & DevOps',
      skills: ['AWS', 'CI/CD', 'Netlify']
    },
    {
      icon: <GitBranch size={32} />,
      title: 'Tools & Others',
      skills: ['Git', 'GitHub', 'Figma']
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Mobile Development',
      skills: ['Flutter', 'Dart', 'Android']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            I work with a diverse range of technologies to build robust, scalable applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="text-blue-400">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-gray-700/50 rounded-lg px-4 py-2 text-gray-300 hover:bg-blue-500/20 hover:text-blue-300 transition-all duration-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;