import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Code, FolderGit2 } from 'lucide-react';

const stats = [
  { icon: Code, label: 'Years of Experience', value: '3+' },
  { icon: FolderGit2, label: 'Projects Completed', value: '5+' },
];

const skills = ['HTML', 'CSS', 'JavaScript', 'Python'];

export default function AboutSection({ aboutImage }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 lg:px-[12vw]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mono-label mb-12 flex items-center gap-3"
        >
          <div className="w-8 h-px bg-[#2563EB]" />
          About
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={aboutImage}
                alt="Minimalist desk workspace with notebook and pen"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="mt-4 flex items-center gap-2">
              <Calendar size={12} className="text-[#94A3B8]" />
              <span className="text-xs text-[#94A3B8]">Born March 5, 2012</span>
            </div>
          </motion.div>

          {/* Content column */}
          <div className="lg:col-span-7 space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-heading font-bold text-3xl md:text-4xl text-[#F1F5F9] tracking-tight"
            >
              Building things that matter,<br />
              <span className="text-[#2563EB]">one project at a time.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[#94A3B8] text-base md:text-lg leading-relaxed"
            >
              I am a Grade 9 student learning web development and building small projects that help me improve my skills. I like making simple, useful websites and sharing what I learn with others.
            </motion.p>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-2"
            >
              {skills.map(skill => (
                <span
                  key={skill}
                  className="font-mono text-xs px-3 py-1.5 rounded-full border border-[#2563EB]/20 text-[#2563EB] bg-[#2563EB]/5"
                >
                  {skill}
                </span>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 gap-6 pt-4"
            >
              {stats.map(stat => (
                <div key={stat.label} className="glass-card rounded-xl p-5">
                  <stat.icon size={18} className="text-[#2563EB] mb-3" />
                  <div className="font-heading font-black text-3xl text-[#F1F5F9]">{stat.value}</div>
                  <div className="mono-label mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}