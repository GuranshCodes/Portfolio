import React from 'react';
import ScrollProgress from '@/components/portfolio/ScrollProgress';
import Navbar from '@/components/portfolio/Navbar';
import HeroSection from '@/components/portfolio/HeroSection';
import AboutSection from '@/components/portfolio/AboutSection';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import SkillsSection from '@/components/portfolio/SkillsSection';
import GoalsSection from '@/components/portfolio/GoalsSection';
import ActivitiesSection from '@/components/portfolio/ActivitiesSection';
import ContactFooter from '@/components/portfolio/ContactFooter';
import aboutImage from '../../177470905.png';

const baseUrl = import.meta.env.BASE_URL || '/';
const HERO_IMAGE = `${baseUrl}images/unnamed.png`;
const PROJECTS_IMAGE = `${baseUrl}images/projects-illustration.svg`;
const ABOUT_IMAGE = aboutImage;

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B1220] text-[#F1F5F9] antialiased">
      <ScrollProgress />
      <Navbar />
      <HeroSection heroImage={HERO_IMAGE} />
      <AboutSection aboutImage={ABOUT_IMAGE} />
      <ProjectsSection projectsImage={PROJECTS_IMAGE} />
      <SkillsSection />
      <GoalsSection />
      <ActivitiesSection />
      <ContactFooter />
    </div>
  );
}