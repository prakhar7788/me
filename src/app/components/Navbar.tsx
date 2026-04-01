import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map(l => l.href.slice(1));
      for (const id of sections.slice().reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed top-0 left-0 right-0 z-[100]"
        style={{
          background: scrolled ? 'rgba(6,6,15,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : 'none',
          transition: 'background 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease',
        }}
      >
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => scrollTo('#home')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '1.25rem',
              fontWeight: 700,
              color: '#e2e8f0',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              letterSpacing: '-0.02em',
            }}
          >
            prakhar<span style={{ color: '#8b5cf6' }}>.</span>
          </motion.button>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}
              >
                <button
                  onClick={() => scrollTo(link.href)}
                  className="relative px-4 py-2 group"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.88rem',
                    fontWeight: 400,
                    color: activeSection === link.href.slice(1) ? '#e2e8f0' : '#94a3b8',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'color 0.2s ease',
                    letterSpacing: '0.01em',
                  }}
                >
                  {link.label}
                  <motion.span
                    className="absolute bottom-1 left-4 right-4 h-px"
                    style={{ background: 'linear-gradient(90deg, #8b5cf6, #22d3ee)' }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: activeSection === link.href.slice(1) ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  />
                </button>
              </motion.li>
            ))}
          </ul>

          {/* Resume button */}
          <motion.a
            href="#"
            className="hidden md:flex items-center gap-2 px-4 py-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.85rem',
              fontWeight: 500,
              color: '#8b5cf6',
              border: '1px solid rgba(139,92,246,0.4)',
              borderRadius: '8px',
              textDecoration: 'none',
              transition: 'border-color 0.2s, background 0.2s',
              letterSpacing: '0.02em',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(139,92,246,0.1)';
              (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(139,92,246,0.7)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
              (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(139,92,246,0.4)';
            }}
          >
            Resume
          </motion.a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(v => !v)}
            style={{ color: '#e2e8f0', background: 'none', border: 'none', cursor: 'pointer' }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-[99] md:hidden flex flex-col"
            style={{ background: 'rgba(6,6,15,0.97)', backdropFilter: 'blur(20px)' }}
          >
            <div className="flex items-center justify-between px-6 py-4">
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: '#e2e8f0',
                }}
              >
                prakhar<span style={{ color: '#8b5cf6' }}>.</span>
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                style={{ color: '#94a3b8', background: 'none', border: 'none', cursor: 'pointer' }}
              >
                <X size={24} />
              </button>
            </div>

            <ul className="flex flex-col items-center justify-center flex-1 gap-8">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                >
                  <button
                    onClick={() => scrollTo(link.href)}
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '1.75rem',
                      fontWeight: 600,
                      color: '#e2e8f0',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
