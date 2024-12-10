// @flow strict

import * as React from 'react';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { BiCodeAlt } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';
import Image from 'next/image';

function ProjectCard({ project }) {
  return (
    <div className="relative bg-gradient-to-br from-[#0d1224] via-[#0f1629] to-[#0d1224] rounded-xl p-6 lg:p-8 group">
      {/* Gradient Border */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 via-pink-500/20 to-violet-500/20 rounded-xl -z-10 blur-xl group-hover:blur-2xl transition-all duration-500"></div>
      
      {/* Card Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <div className="flex space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-400 animate-pulse"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-400 animate-pulse delay-75"></div>
            <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse delay-150"></div>
          </div>
          <div>
            <h3 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent group-hover:from-pink-500 group-hover:to-violet-500 transition-all duration-300">
              {project.name}
            </h3>
            <p className="text-gray-400 text-sm mt-1">{project.role}</p>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="space-y-6">
        {/* Description */}
        <div className="relative">
          <div className="absolute -left-4 top-0 h-full w-1 bg-gradient-to-b from-violet-500/40 to-pink-500/40 rounded-full"></div>
          <p className="text-gray-300 leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
            {project.description}
          </p>
        </div>

        {/* Technologies */}
        <div className="space-y-2">
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm text-white bg-gradient-to-r from-violet-500/10 to-pink-500/10 rounded-full border border-violet-500/20 hover:border-pink-500/40 transition-colors duration-300"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Project Links */}
        <div className="flex items-center justify-end space-x-4 pt-4">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-pink-500 transition-colors duration-300 group/link"
            >
              <span className="text-sm font-medium">Live Demo</span>
              <HiOutlineExternalLink className="w-5 h-5 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" />
            </a>
          )}
          {project.code && (
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-violet-500 transition-colors duration-300 group/link"
            >
              <span className="text-sm font-medium">View Code</span>
              <FaGithub className="w-5 h-5 group-hover/link:rotate-12 transition-transform duration-300" />
            </a>
          )}
        </div>
      </div>

      {/* Hover Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>
    </div>
  );
}

export default ProjectCard;