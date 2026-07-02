import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Goals', href: '#goals' },
  { label: 'Activities', href: '#activities' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#0B1220]/80 backdrop-blur-xl border-b border-[#94A3B8]/10' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
          <a href="#hero" className="font-heading text-lg tracking-tight text-[#F1F5F9] font-bold">
            Guransh<span className="text-[#2563EB]">.</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map(item => (
              <a
                key={item.label}
                href={item.href}
                className="mono-label hover:text-[#2563EB] transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden p-2 text-[#F1F5F9] hover:text-[#2563EB] transition-colors"
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      {/* Full-screen mobile overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[999] bg-[#0B1220]/95 backdrop-blur-[30px] flex flex-col items-center justify-center">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-5 right-6 p-2 text-[#F1F5F9] hover:text-[#2563EB] transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
          <div className="flex flex-col items-center gap-8">
            {NAV_ITEMS.map(item => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-3xl font-heading font-bold text-[#F1F5F9] hover:text-[#2563EB] transition-colors tracking-tight"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}