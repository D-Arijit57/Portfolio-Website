import React from 'react';
import { User, Heart, Coffee, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <User className="text-blue-400" size={28} />
              <h3 className="text-2xl font-semibold text-white">Who I Am</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate software developer with a strong background in modern web technologies. 
              I love creating efficient, scalable solutions that solve real-world problems and deliver exceptional 
              user experiences.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              With expertise in both frontend and backend development, I enjoy working across the entire technology 
              stack to bring ideas to life. I'm always eager to learn new technologies and take on challenging 
              projects that push my boundaries.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4 bg-gray-700/50 rounded-lg backdrop-blur-sm">
                <Coffee className="text-blue-400 mx-auto mb-2" size={32} />
                <p className="text-white font-semibold">Coffee Driven</p>
                <p className="text-gray-400 text-sm">Fueled by caffeine</p>
              </div>
              <div className="text-center p-4 bg-gray-700/50 rounded-lg backdrop-blur-sm">
                <Heart className="text-blue-400 mx-auto mb-2" size={32} />
                <p className="text-white font-semibold">Problem Solver</p>
                <p className="text-gray-400 text-sm">Love complex challenges</p>
              </div>
              <div className="text-center p-4 bg-gray-700/50 rounded-lg backdrop-blur-sm">
                <Lightbulb className="text-blue-400 mx-auto mb-2" size={32} />
                <p className="text-white font-semibold">Innovator</p>
                <p className="text-gray-400 text-sm">Always learning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;