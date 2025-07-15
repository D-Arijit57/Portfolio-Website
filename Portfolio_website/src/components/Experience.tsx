import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Developer',
      company: 'Project Exhibition I',
      location: 'Bhopal, Madhya Pradesh',
      period: 'Aug 2023 - Oct 2023',
      description: [
        'Helped developing an AR app using Unity to innovatively showcase and advertise various products',
        ' Increased the performance of the project through optimization and effective team co-ordination',
        'Led and managed a multidisciplinary team ensuring cohesive collaborative and successful achievement of project goals',
      ]
    },
    {
      title: 'Software Developer',
      company: 'EPICS Project',
      location: 'Bhopal, Madhya Pradesh',
      period: 'Aug 2024 - Apr 2025',
      description: [
        'Helped developing an augmented reality educational app that provides interactive, real-time assistance to students for resolving academic doubts',
        'Integrated smart AR features to enhance learning engagement and deliver personalized support through intuitive visualizations',
      ]
    },
    {
      title: 'Software Developer',
      company: 'Canara Bank Hackathon',
      location: 'Bhopal, Madhya Pradesh',
      period: 'Jun 2025 - Aug 2025',
      description: [
        'Built an android app "RakshaChakra" for authentication using behavioral biometrics for secure mobile banking',
        'Implemented ML-driven fraud detection to identify anomalies in real-time',
        'Designed seamless integration for enhanced security without compromising user experience',
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            My journey as a software developer across different companies and roles
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-400 transform md:-translate-x-0.5"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:space-x-8`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-blue-400 rounded-full transform -translate-x-2 md:-translate-x-2 border-4 border-gray-900 z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-center space-x-2 mb-3">
                      <Briefcase className="text-blue-400" size={20} />
                      <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-blue-400 font-medium">{exp.company}</p>
                      <div className="flex items-center space-x-4 mt-2 text-gray-400 text-sm">
                        <div className="flex items-center space-x-1">
                          <Calendar size={14} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-300 text-sm leading-relaxed flex items-start">
                          <span className="text-blue-400 mr-2 mt-1.5 w-1 h-1 bg-blue-400 rounded-full flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;