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

const HERO_IMAGE = 'https://media.db.com/images/public/6a465b1f44f7b3679234639c/cfe4090b0_generated_39d39997.png';
const PROJECTS_IMAGE = 'https://media.db.com/images/public/6a465b1f44f7b3679234639c/842436cd3_generated_9872ea13.png';
const ABOUT_IMAGE = 'https://media.db.com/images/public/6a465b1f44f7b3679234639c/7e1ebb59a_generated_beb2ad34.png';

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