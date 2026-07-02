import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export default function ProjectCard({ project, index }) {
  const isDone = project.status === 'Done';
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="glass-card rounded-2xl p-6 md:p-8 group hover:shadow-lg hover:shadow-[#2563EB]/5 transition-all duration-500"
    >
      {/* Status + tech */}
      <div className="flex items-start justify-between mb-4">
        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${isDone ? 'text-emerald-400 bg-emerald-400/10' : 'text-amber-400 bg-amber-400/10'}`}>
          {isDone ? 'Done' : 'In Progress'}
        </span>
        <div className="flex items-center gap-3">
          {project.techStack.map(tech => (
            <span key={tech} className="text-[10px] text-[#2563EB] bg-[#2563EB]/5 px-2 py-0.5 rounded">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Title */}
      <h3 className="font-heading font-bold text-xl md:text-2xl text-[#F1F5F9] mb-3 group-hover:text-[#2563EB] transition-colors">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">
        {project.description}
      </p>

      {/* Links */}
      <div className="flex flex-wrap gap-3">
        {project.links.map(link => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs text-[#F1F5F9] hover:text-[#2563EB] transition-colors border border-[#94A3B8]/20 hover:border-[#2563EB] rounded-lg px-4 py-2"
          >
            {link.type === 'github' ? <Github size={13} /> : <ExternalLink size={13} />}
            {link.label}
          </a>
        ))}
      </div>
    </motion.div>
  );
}