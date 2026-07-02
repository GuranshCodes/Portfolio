import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FileCode2, Braces, Palette, Terminal } from 'lucide-react';

const SKILLS = [
  { name: 'Python', icon: Terminal, description: 'Scripting & automation' },
  { name: 'JavaScript', icon: Braces, description: 'Interactive web apps' },
  { name: 'HTML', icon: FileCode2, description: 'Page structure & markup' },
  { name: 'CSS', icon: Palette, description: 'Styling & layout' },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 md:py-32 px-6 md:px-12 lg:px-[12vw]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mono-label mb-6 flex items-center gap-3"
        >
          <div className="w-8 h-px bg-[#2563EB]" />
          Skills
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-heading font-bold text-3xl md:text-4xl text-[#F1F5F9] tracking-tight mb-4"
        >
          Technical Skills
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#94A3B8] text-base md:text-lg max-w-2xl mb-12"
        >
          The languages and tools I use to bring my ideas to life.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#2563EB]/10 flex items-center justify-center mb-4">
                <skill.icon size={22} className="text-[#2563EB]" />
              </div>
              <h3 className="font-heading font-semibold text-[#F1F5F9] mb-1">{skill.name}</h3>
              <p className="text-[#94A3B8] text-xs">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}