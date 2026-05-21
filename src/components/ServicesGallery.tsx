import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Globe, Smartphone, TrendingUp, Cpu, 
  Check, Clock, DollarSign, ArrowUpRight, 
  Terminal, Search, GitBranch, ArrowRight
} from 'lucide-react';
import { SERVICES } from '../data';
import { Service } from '../types';

export default function ServicesGallery() {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('web');

  const selectedService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];

  // Map icon names as dynamic React nodes
  const renderServiceIcon = (iconName: string, className = "w-6 h-6") => {
    switch (iconName) {
      case 'Globe':
        return <Globe className={className} />;
      case 'Smartphone':
        return <Smartphone className={className} />;
      case 'TrendingUp':
        return <TrendingUp className={className} />;
      case 'Cpu':
        return <Cpu className={className} />;
      default:
        return <Globe className={className} />;
    }
  };

  const handleScrollToPlanner = () => {
    const planner = document.getElementById('planificador');
    if (planner) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = planner.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="servicios" className="relative py-28 border-t border-white/10 bg-[#0A0A0A] overflow-hidden">
      {/* Decorative items */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-none bg-brand-neon/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-none bg-brand-neon/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-left">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 bg-brand-neon" />
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">// GALERÍA DE CAPACIDADES</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tighter text-white leading-none">
              Nuestros <br className="hidden sm:inline" />
              <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.45)' }}>
                SERVICIOS TÉCNICOS
              </span>
            </h2>
          </div>
          <div className="max-w-md text-left md:text-right">
            <p className="font-space text-sm text-zinc-400 leading-relaxed">
              No hacemos plantillas ni soluciones genéricas. Cada proyecto se aborda como una pieza única de ingeniería web, optimizada, rápida y escalable.
            </p>
          </div>
        </div>

        {/* Layout Grid: Interactive Left Column vs Living Details Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Desktop Switcher Rows */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {SERVICES.map((service, index) => {
              const isSelected = selectedServiceId === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`group relative text-left p-6 rounded-none border transition-all duration-300 focus:outline-none cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#121212] border-brand-neon shadow-[0_10px_30px_rgba(0,255,0,0.06)]'
                      : 'bg-[#121212]/30 border-white/10 hover:border-brand-neon/50 hover:bg-[#121212]/50'
                  }`}
                >
                  <div className="flex items-center gap-5">
                    {/* Index */}
                    <span className="font-mono text-xs text-zinc-500 block">
                      // 0{index + 1}
                    </span>
                    {/* Icon container */}
                    <div className={`w-12 h-12 rounded-none flex items-center justify-center transition-all duration-300 ${
                      isSelected 
                        ? 'bg-brand-neon/20 text-brand-neon border border-brand-neon/40' 
                        : 'bg-[#0A0A0A] text-zinc-400 group-hover:text-white border border-white/10'
                    }`}>
                      {renderServiceIcon(service.iconName, "w-5 h-5")}
                    </div>
                    {/* Title & brief */}
                    <div>
                      <h3 className={`font-space font-bold text-lg transition-colors duration-200 ${
                        isSelected ? 'text-white' : 'text-gray-300 group-hover:text-white'
                      }`}>
                        {service.title}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1 line-clamp-1">
                        {service.shortDesc}
                      </p>
                    </div>
                  </div>

                  {/* Desktop forward indicator arrow */}
                  <div className={`hidden sm:flex w-8 h-8 rounded-none border items-center justify-center transition-all duration-300 ${
                    isSelected 
                      ? 'border-brand-neon/45 text-brand-neon bg-[#0A0A0A] rotate-45' 
                      : 'border-white/10 text-zinc-500 group-hover:text-white'
                  }`}>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Immersive & Morphing Details Workspace Card */}
          <div className="lg:col-span-7 h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedServiceId}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="bg-[#121212] border border-white/15 rounded-none p-6 md:p-8 relative overflow-hidden text-left"
              >
                {/* Background ambient lighting matches the active gradient */}
                <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-tr from-brand-neon/5 to-transparent blur-3xl pointer-events-none" />

                {/* Card Title Header with custom gradient backing */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-none bg-brand-neon text-black font-bold shadow-[0_0_20px_rgba(0,255,0,0.15)]`}>
                      {renderServiceIcon(selectedService.iconName, "w-6 h-6")}
                    </div>
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#71717a] block">// SOLUCIÓN EXCLUSIVA</span>
                      <h4 className="font-space font-black text-2xl text-white">
                        {selectedService.title}
                      </h4>
                    </div>
                  </div>

                  {/* Standard estimates */}
                  <div className="bg-[#0A0A0A]/80 border border-white/10 p-3 rounded-none flex items-center gap-4">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-brand-neon" />
                      <span className="font-mono text-xs text-zinc-300">{selectedService.duration}</span>
                    </div>
                    <div className="h-4 w-[1px] bg-white/10" />
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4 text-brand-neon" />
                      <span className="font-space font-bold text-xs text-brand-neon">Desde {selectedService.basePrice}€</span>
                    </div>
                  </div>
                </div>

                {/* Descriptive body text */}
                <p className="font-space text-sm text-zinc-300 mt-6 leading-relaxed text-left">
                  {selectedService.description}
                </p>

                {/* Sub-features list */}
                <div className="mt-8">
                  <h5 className="font-mono text-[11px] font-bold text-brand-neon tracking-widest uppercase mb-4 text-left">
                    // CARACTERÍSTICAS TÉCNICAS CLAVE:
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-left">
                    {selectedService.features.map((feat, index) => (
                      <div key={index} className="flex items-start gap-2.5">
                        <div className="mt-1 w-4 h-4 bg-brand-neon/10 border border-brand-neon/30 rounded-none flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-brand-neon" />
                        </div>
                        <span className="font-space text-xs text-zinc-300 leading-tight">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dynamic live simulation box based on service selection */}
                <div className="mt-8 border border-white/10 bg-black/50 rounded-none p-4 flex flex-col justify-center overflow-hidden">
                  <div className="flex items-center gap-2 border-b border-white/10 pb-2.5 mb-4 justify-between">
                    <span className="font-mono text-[10px] text-zinc-400 flex items-center gap-1.5 uppercase">
                      <Terminal className="w-3.5 h-3.5 text-brand-neon" />
                      Simulación interactiva
                    </span>
                    <span className="w-2 h-2 rounded-full bg-brand-neon" />
                  </div>

                  <AnimatePresence mode="wait">
                    {selectedService.id === 'web' && (
                      <motion.div
                        key="web-sim"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="space-y-3.5 py-2"
                      >
                        <div className="flex items-center gap-2 justify-between">
                          <span className="font-mono text-xs text-brand-neon">App.tsx (Raíz Virtual)</span>
                          <span className="font-mono text-[10px] text-zinc-500 font-bold">React v19 // SPA</span>
                        </div>
                        
                        {/* Nested nodes structure simulating a component render tree */}
                        <div className="flex flex-col gap-2 pl-3 border-l border-brand-neon/40">
                          <div className="bg-brand-neon/10 border border-brand-neon/35 p-2 rounded-none text-left">
                            <span className="font-mono text-[11px] text-brand-neon">&lt;DisruptiveHero /&gt;</span>
                            <div className="h-1.5 w-full bg-white/5 mt-1.5 rounded-none overflow-hidden">
                              <motion.div animate={{ width: ['0%', '100%', '0%'] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="h-full bg-brand-neon" />
                            </div>
                          </div>
                          
                          <div className="bg-white/5 border border-white/15 p-2 rounded-none text-left">
                            <span className="font-mono text-[11px] text-white">&lt;DynamicGrid columns={'{4}'} /&gt;</span>
                            <div className="flex gap-1.5 mt-1.5">
                              {[1, 2, 3, 4].map((i) => (
                                <motion.div key={i} animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }} className="h-3.5 w-full bg-brand-neon" />
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {selectedService.id === 'apps' && (
                      <motion.div
                        key="apps-sim"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex justify-center py-2"
                      >
                        {/* Mock phone bezel */}
                        <div className="w-56 h-36 bg-[#0A0A0A] border border-white/20 rounded-none relative p-3 flex flex-col justify-between overflow-hidden shadow-2xl">
                          <div className="flex items-center justify-between text-[10px] text-zinc-500 font-mono">
                            <span>12:00</span>
                            <span className="text-brand-neon">WIFI OK</span>
                          </div>
                          
                          <div className="flex-1 flex items-center justify-center">
                            <div className="text-center">
                              <motion.div 
                                animate={{ rotate: 360 }} 
                                transition={{ ease: 'linear', duration: 12, repeat: Infinity }} 
                                className="w-8 h-8 rounded-none border border-dashed border-brand-neon mx-auto flex items-center justify-center text-xs"
                              >
                                📱
                              </motion.div>
                              <span className="font-space text-[10px] text-white mt-1.5 block uppercase tracking-wider font-bold">Sincronización Híbrida</span>
                            </div>
                          </div>

                          <div className="w-16 h-1 bg-white/10 mx-auto" />
                        </div>
                      </motion.div>
                    )}

                    {selectedService.id === 'seo' && (
                      <motion.div
                        key="seo-sim"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="space-y-4 py-2"
                      >
                        <div className="flex items-center gap-2 bg-[#0A0A0A] border border-white/10 rounded-none p-2.5">
                          <Search className="w-4 h-4 text-brand-neon shrink-0" />
                          <input 
                            type="text" 
                            disabled 
                            value="desarrollo web disruptivo madrid" 
                            className="bg-transparent text-xs w-full text-brand-neon font-mono focus:outline-none" 
                          />
                        </div>
                        <div className="flex gap-4 justify-between items-center px-2">
                          <div className="text-left">
                            <span className="font-mono text-[9px] text-zinc-500 uppercase block font-bold">Posición en Google</span>
                            <span className="font-space text-xl font-black text-brand-neon flex items-center gap-1">#1 <span className="text-xs font-normal text-zinc-500">de 1.4M</span></span>
                          </div>
                          <div className="h-6 w-[1px] bg-white/10" />
                          <div className="text-left">
                            <span className="font-mono text-[9px] text-zinc-500 uppercase block font-bold">Tráfico Orgánico</span>
                            <motion.span animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity }} className="font-space text-lg font-black text-white flex items-center gap-1">+240%📈</motion.span>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {selectedService.id === 'consulting' && (
                      <motion.div
                        key="consult-sim"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="py-1"
                      >
                        <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-3.5">
                          <span>Kubernetes Pipeline</span>
                          <span className="text-brand-neon font-bold">DESPLIEGUE OK</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2.5">
                          <div className="bg-black/80 border border-white/10 p-2 rounded-none text-center">
                            <GitBranch className="w-4 h-4 text-brand-neon mx-auto mb-1" />
                            <span className="font-mono text-[9px] text-zinc-400">CI/CD Check</span>
                          </div>
                          <div className="bg-black/80 border border-white/10 p-2 rounded-none text-center">
                            <Cpu className="w-4 h-4 text-white mx-auto mb-1" />
                            <span className="font-mono text-[9px] text-zinc-400">Carga Balance</span>
                          </div>
                          <div className="bg-black/80 border border-white/10 p-2 rounded-none text-center">
                            <Globe className="w-4 h-4 text-brand-neon mx-auto mb-1" />
                            <span className="font-mono text-[9px] text-zinc-400">AWS CDN Live</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Final step action trigger inside details card */}
                <div className="mt-8 flex justify-end">
                  <button
                    onClick={handleScrollToPlanner}
                    className="group border border-white/20 hover:border-brand-neon bg-[#0A0A0A] hover:bg-black text-white font-space font-bold uppercase tracking-widest text-[11px] px-6 py-3.5 rounded-none transition-all duration-300 flex items-center gap-2 cursor-pointer"
                  >
                    Cotizar este servicio
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
