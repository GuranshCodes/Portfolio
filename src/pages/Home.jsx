const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

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

const HERO_IMAGE = '/images/hero-illustration.svg';
const PROJECTS_IMAGE = '/images/projects-illustration.svg';
const ABOUT_IMAGE = '/images/about-illustration.svg';

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