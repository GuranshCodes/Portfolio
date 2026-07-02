import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function HeroSection({ heroImage }) {
  const [time, setTime] = useState('');
  const containerRef = useRef(null);

  useEffect(() => {
    const tick = () => {
      const now = new Date().toLocaleTimeString('en-US', {
        timeZone: 'America/Toronto',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setTime(now);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const statusItems = [
    { label: 'Location', value: 'Brampton, ON' },
    { label: 'Grade', value: 'Grade 9 Student' },
    { label: 'Experience', value: '3+ Years' },
    { label: 'Local Time', value: time },
  ];

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6 md:px-12 lg:px-[12vw] pt-16"
    >
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#2563EB]/5 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Top metadata */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mono-label mb-8"
        >
          Welcome to my portfolio
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Text */}
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="font-heading font-black text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] tracking-[-0.03em] text-[#F1F5F9] mb-6"
            >
              Hi, I'm <span className="text-[#2563EB]">Guransh</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-[#94A3B8] text-lg md:text-xl max-w-lg leading-relaxed mb-10"
            >
              Grade 9 student & aspiring software engineer with 3+ years of experience building websites and teaching others to code.
            </motion.p>

            {/* Quick facts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="glass-card rounded-2xl p-5 max-w-md grid grid-cols-2 gap-4"
            >
              {statusItems.map(item => (
                <div key={item.label}>
                  <div className="mono-label mb-0.5">{item.label}</div>
                  <div className="text-[#F1F5F9] font-semibold text-sm">{item.value}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#2563EB]/10">
              <img
                src={heroImage}
                alt="Developer workspace with mechanical keyboard in cool tones"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/20 to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="mono-label">SCROLL</span>
          <ArrowDown size={14} className="text-[#2563EB] animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}