import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ProjectCard from '@/components/portfolio/ProjectCard';

const PROJECTS = [
  {
    title: 'Excel Calculator',
    description:
      'A custom Excel calculator for my dad that converts kilograms to pounds. Streamlines invoice creation with instant conversions, saving time and reducing errors in manual calculations.',
    techStack: ['EXCEL', 'VBA'],
    status: 'Done',
    links: [
      {
        label: 'View on GitHub',
        url: 'https://github.com/GSDhaliwal05/Excel-Formulas',
        type: 'github',
      },
    ],
  },
  {
    title: 'Health Website',
    description:
      'A health-focused informational website created for a school project. Provides valuable information on nutrition, exercise, and wellness tips, designed to educate and promote healthy living among students.',
    techStack: ['HTML', 'CSS', 'JS'],
    status: 'Done',
    links: [
      {
        label: 'View on GitHub',
        url: 'https://github.com/GSDhaliwal05/Health-Website-7OB',
        type: 'github',
      },
    ],
  },
  {
    title: 'Math Website',
    description:
      'An interactive mathematics learning platform with step-by-step tutorials, practice problems, and interactive quizzes. Built to make learning math engaging and accessible for all ages.',
    techStack: ['HTML', 'CSS', 'JS'],
    status: 'Done',
    links: [
      {
        label: 'View on GitHub',
        url: 'https://github.com/GSDhaliwal05/Math-Website-7OB',
        type: 'github',
      },
    ],
  },
  {
    title: 'Portfolio Website',
    description:
      "The site you're viewing right now, built to showcase my projects, skills, and experience as a developer. Features responsive design and smooth animations.",
    techStack: ['REACT', 'CSS', 'JS'],
    status: 'In Progress',
    links: [
      {
        label: 'View on GitHub',
        url: 'https://github.com/GSDhaliwal05/Portfolio',
        type: 'github',
      },
    ],
  },
  {
    title: 'Gator Swamp',
    description:
      'A Grade 7 business and math project where I built a presentation and a simple Wix website for Gator Swamp.',
    techStack: ['WIX', 'SLIDES'],
    status: 'Done',
    links: [
      {
        label: 'View Website',
        url: 'https://861250.wixsite.com/snackverse',
        type: 'external',
      },
      {
        label: 'View Presentation',
        url: 'https://www.canva.com/design/DAGjs3_hTO8/w7swFZ7ZHHRGgP0a8ohErg/edit',
        type: 'external',
      },
      {
        label: 'Feedback Form',
        url: 'https://docs.google.com/forms/d/e/1FAIpQLScIucCYBvLkhfvc_VUpwREamRru_iHaJhqvcJs6FN3vbOPhig/viewform?usp=header',
        type: 'external',
      },
    ],
  },
  {
    title: 'Taxes Website',
    description:
      'An interactive quiz built to help students test and reinforce their understanding of key financial literacy concepts in a fun, engaging way.',
    techStack: ['WEB'],
    status: 'Done',
    links: [
      {
        label: 'View Website',
        url: 'https://taxes.classresources.ca',
        type: 'external',
      },
    ],
  },
  {
    title: 'Calculations Website',
    description:
      'An engaging, interactive quiz that allows students to practice and deepen their knowledge of core financial literacy topics through a fun learning experience.',
    techStack: ['WEB'],
    status: 'Done',
    links: [
      {
        label: 'View Website',
        url: 'https://calculations.classresources.ca',
        type: 'external',
      },
    ],
  },
];

/**
 * @param {{ projectsImage?: string }} props
 */
export default function ProjectsSection({ projectsImage = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  });

  const projectsBannerSrc = `${projectsImage}?v=2`;

  return (
    <section
      id="projects"
      ref={ref}
      className="py-24 md:py-32 px-6 md:px-12 lg:px-[12vw] relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mono-label mb-6 flex items-center gap-3"
        >
          <div className="w-8 h-px bg-[#2563EB]" />
          Projects
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-heading font-bold text-3xl md:text-4xl text-[#F1F5F9] tracking-tight mb-4"
        >
          My Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#94A3B8] text-base md:text-lg max-w-2xl mb-12"
        >
          A look at some of the things I have built and worked on so far.
        </motion.p>

        {/* Banner image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="rounded-2xl overflow-hidden mb-12 max-h-48 md:max-h-64"
        >
          <img
            src={projectsBannerSrc}
            alt="Abstract 3D glass shapes representing code and logic"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
