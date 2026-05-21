import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code, Menu, X, Terminal, Zap } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'planificador', label: 'Planificador' },
    { id: 'contacto', label: 'Contacto' },
  ];

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="app-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cyber-bg/85 backdrop-blur-md border-b border-cyber-border py-4 shadow-[0_4px_30px_rgba(5,5,12,0.5)]'
          : 'bg-transparent py-6 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection('inicio')}
          className="flex items-center gap-2 group cursor-pointer focus:outline-none"
        >
          <div className="flex items-center text-white font-mono font-bold text-sm tracking-tighter select-none">
            &lt;<Zap className="w-3.5 h-3.5 text-brand-neon fill-brand-neon animate-pulse mx-[1px]" />&gt;
          </div>
          <span className="font-space font-black text-lg tracking-wider text-white flex items-center gap-0.5">
            BLITZ
            <span className="text-brand-neon">CORE</span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-neon shadow-[0_0_8px_#00FF00] ml-1 self-center animate-pulse" />
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-black/40 border border-white/10 rounded-none p-1 px-1.5">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2.5 font-space text-[10px] font-black uppercase tracking-widest transition-colors duration-300 rounded-none focus:outline-none cursor-pointer ${
                  isActive ? 'text-black' : 'text-gray-400 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavBackground"
                    transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                    className="absolute inset-0 bg-brand-neon rounded-none"
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-2 font-mono text-[10px] text-zinc-400 uppercase tracking-widest bg-zinc-900/45 border border-white/10 py-1.5 px-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-neon" />
            <span>DISPONIBLE / 2026</span>
          </div>
          <button
            onClick={() => scrollToSection('planificador')}
            className="group relative px-5 py-3 rounded-none font-space font-black text-[10px] uppercase tracking-widest text-black bg-white select-none overflow-hidden transition-all duration-300 cursor-pointer hover:bg-brand-neon"
          >
            Cotizar App
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer focus:outline-none rounded-lg border border-cyber-border bg-cyber-surface/40"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cyber-bg/95 border-b border-cyber-border overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left py-3 font-space font-black uppercase tracking-wider text-xl border-b border-white/5 transition-colors duration-200 cursor-pointer ${
                    activeSection === item.id ? 'text-brand-neon' : 'text-zinc-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center justify-between mt-4">
                <span className="font-mono text-xs text-zinc-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-neon" />
                  Listo para cotizar
                </span>
                <button
                  onClick={() => scrollToSection('planificador')}
                  className="px-5 py-3 rounded-none bg-brand-neon text-black font-space font-black text-xs uppercase tracking-widest cursor-pointer"
                >
                  Cotizar Proyecto
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
