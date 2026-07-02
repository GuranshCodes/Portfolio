import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Mail, Github, MapPin, Check, Copy } from 'lucide-react';

export default function ContactFooter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [time, setTime] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const tick = () => {
      const now = new Date().toLocaleTimeString('en-US', {
        timeZone: 'America/Toronto',
        hour12: true,
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

  const copyGitHub = async () => {
    await navigator.clipboard.writeText('https://github.com/GuranshCodes');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="py-24 md:py-32 px-6 md:px-12 lg:px-[12vw] border-t border-[#94A3B8]/10" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mono-label mb-6 flex items-center gap-3"
        >
          <div className="w-8 h-px bg-[#2563EB]" />
          Contact
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-heading font-bold text-3xl md:text-5xl text-[#F1F5F9] tracking-tight mb-12"
        >
          Let's connect.
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* School Email */}
          <motion.a
            href="mailto:861250@pdsb.net"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-xl p-5 group hover:shadow-md transition-all"
          >
            <Mail size={18} className="text-[#2563EB] mb-3" />
            <div className="mono-label mb-1">School Email</div>
            <div className="text-sm text-[#F1F5F9] group-hover:text-[#2563EB] transition-colors break-all">
              861250@pdsb.net
            </div>
          </motion.a>

          {/* Personal Email */}
          <motion.a
            href="mailto:guranshd007@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card rounded-xl p-5 group hover:shadow-md transition-all"
          >
            <Mail size={18} className="text-[#2563EB] mb-3" />
            <div className="mono-label mb-1">Personal Email</div>
            <div className="text-sm text-[#F1F5F9] group-hover:text-[#2563EB] transition-colors break-all">
              guranshd007@gmail.com
            </div>
          </motion.a>

          {/* GitHub */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card rounded-xl p-5 group hover:shadow-md transition-all cursor-pointer"
            onClick={copyGitHub}
          >
            <Github size={18} className="text-[#2563EB] mb-3" />
            <div className="mono-label mb-1">GitHub</div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-[#F1F5F9] group-hover:text-[#2563EB] transition-colors">
                GuranshCodes
              </span>
              {copied ? (
                <span className="flex items-center gap-1 text-emerald-400 text-[10px]">
                  <Check size={12} /> Connected
                </span>
              ) : (
                <Copy size={12} className="text-[#94A3B8] opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="glass-card rounded-xl p-5"
          >
            <MapPin size={18} className="text-[#2563EB] mb-3" />
            <div className="mono-label mb-1">Location</div>
            <div className="text-sm text-[#F1F5F9]">Brampton, Ontario</div>
            <div className="text-xs text-[#94A3B8] mt-1">{time}</div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-[#94A3B8]/10">
          <span className="text-xs text-[#94A3B8]">
            © 2026 Guransh. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/GuranshCodes"
              target="_blank"
              rel="noopener noreferrer"
              className="mono-label hover:text-[#2563EB] transition-colors"
            >
              GitHub
            </a>
            <a
              href="mailto:guranshd007@gmail.com"
              className="mono-label hover:text-[#2563EB] transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}