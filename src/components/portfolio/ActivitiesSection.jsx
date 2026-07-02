import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Monitor, Gamepad2, Wrench, Newspaper, Users, Megaphone } from 'lucide-react';

const ACTIVITIES = [
  {
    icon: Monitor,
    grade: 'Grade 6',
    title: 'Tech Team',
    tag: 'Technical',
    description: "Helped manage and organize the school\u2019s Chromebook inventory. Assisted in maintaining educational technology resources, including LEGO robotics kits with Bluetooth connectivity used for STEM learning.",
  },
  {
    icon: Gamepad2,
    grade: 'Grade 6',
    title: 'Gaming and Coding Club',
    tag: 'Technical',
    description: 'Learned basic programming and game development, sparking my passion for technology and creative problem-solving.',
  },
  {
    icon: Wrench,
    grade: 'Grade 7',
    title: 'STEAM Club',
    tag: 'Creative',
    description: 'Participated in building projects and problem-solving activities, fostering creativity and teamwork.',
  },
  {
    icon: Newspaper,
    grade: 'Grade 8',
    title: 'Newspaper Club',
    tag: 'Leadership',
    description: 'Designer and one of the owners \u2014 responsible for creating content and sharing news across the school as part of the school newspaper.',
  },
  {
    icon: Users,
    grade: 'Grade 8',
    title: 'ASA (Asian Student Association)',
    tag: 'Leadership',
    description: 'Participate in cultural events and promote diversity at Sir William Gage.',
  },
  {
    icon: Megaphone,
    grade: 'Grade 8',
    title: 'Gator News',
    tag: 'Leadership',
    description: "The school\u2019s announcement platform where I help share important news and updates to keep the community informed at Sir William Gage.",
  },
];

const TAG_COLORS = {
  Technical: 'text-[#2563EB] bg-[#2563EB]/10 border-[#2563EB]/20',
  Creative: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  Leadership: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
};

export default function ActivitiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="activities" className="py-24 md:py-32 px-6 md:px-12 lg:px-[12vw]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mono-label mb-6 flex items-center gap-3"
        >
          <div className="w-8 h-px bg-[#2563EB]" />
          Activities
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-heading font-bold text-3xl md:text-4xl text-[#F1F5F9] tracking-tight mb-4"
        >
          Clubs & Activities
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#94A3B8] text-base md:text-lg max-w-2xl mb-12"
        >
          Some of the clubs and activities that have shaped my experience outside of coding.
        </motion.p>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-[#94A3B8]/15" />

          <div className="space-y-6">
            {ACTIVITIES.map((activity, i) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="relative pl-12 md:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 md:left-4.5 top-6 w-3 h-3 rounded-full border-2 border-[#2563EB] bg-[#0B1220]" />

                <div className="glass-card rounded-xl p-6 group hover:shadow-md transition-all duration-300">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-[#2563EB]/10 flex items-center justify-center">
                      <activity.icon size={15} className="text-[#2563EB]" />
                    </div>
                    <span className="text-xs text-[#94A3B8]">{activity.grade}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full border ${TAG_COLORS[activity.tag]}`}>
                      {activity.tag}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#F1F5F9] mb-2">{activity.title}</h3>
                  <p className="text-[#94A3B8] text-sm leading-relaxed">{activity.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}