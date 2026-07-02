import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Rocket } from 'lucide-react';

const GOALS = [
  {
    icon: Target,
    title: 'Learn Popular Coding Languages',
    description: 'I aim to master JavaScript, Python, and other widely-used programming languages to build a strong foundation in software development.',
  },
  {
    icon: Rocket,
    title: 'Become a Software Engineer',
    description: 'My ultimate goal is to become a skilled software engineer, creating innovative solutions and contributing to the tech industry.',
  },
];

export default function GoalsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="goals" className="py-24 md:py-32 px-6 md:px-12 lg:px-[12vw]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mono-label mb-6 flex items-center gap-3"
        >
          <div className="w-8 h-px bg-[#2563EB]" />
          Goals
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-heading font-bold text-3xl md:text-4xl text-[#F1F5F9] tracking-tight mb-4"
        >
          Future Goals
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#94A3B8] text-base md:text-lg max-w-2xl mb-12"
        >
          Where I'm heading, the missions on my roadmap.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {GOALS.map((goal, i) => (
            <motion.div
              key={goal.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="glass-card rounded-2xl p-8 relative overflow-hidden group"
            >
              {/* Accent line */}
              <div className="absolute top-0 left-0 w-1 h-full bg-[#2563EB] rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#2563EB]/10 flex items-center justify-center">
                  <goal.icon size={18} className="text-[#2563EB]" />
                </div>
                <span className="mono-label text-[#2563EB]">Goal {i + 1}</span>
              </div>

              <h3 className="font-heading font-bold text-xl text-[#F1F5F9] mb-3">{goal.title}</h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed">{goal.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}