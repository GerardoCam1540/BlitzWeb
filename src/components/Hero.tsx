import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Sparkles, Cpu, Code, ArrowRight } from 'lucide-react';
import { INSTANT_CODE_SAMPLES } from '../data';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('tsx');
  const [typingIndex, setTypingIndex] = useState(0);
  const [typedCode, setTypedCode] = useState('');
  const [clickCount, setClickCount] = useState(0);
  const [hoverAccent, setHoverAccent] = useState('#00FF00'); // Neon green default

  // Fetch active tab code object
  const currentSample = INSTANT_CODE_SAMPLES.find((s) => s.language === activeTab) || INSTANT_CODE_SAMPLES[0];

  // Simulated code typewriter effect for active tab changes
  useEffect(() => {
    setTypedCode('');
    setTypingIndex(0);
  }, [activeTab]);

  useEffect(() => {
    if (typingIndex < currentSample.code.length) {
      const timer = setTimeout(() => {
        setTypedCode((prev) => prev + currentSample.code[typingIndex]);
        setTypingIndex((prev) => prev + 1);
      }, 3); // Super fast typewriter
      return () => clearTimeout(timer);
    }
  }, [typingIndex, currentSample]);

  // Tech items for marquee
  const techItems = [
    { name: 'NEXT.JS', color: 'text-white' },
    { name: 'REACT 19', color: 'text-[#00FF00]' },
    { name: 'TYPESCRIPT', color: 'text-[#00FF00]' },
    { name: 'TAILWIND V4', color: 'text-white' },
    { name: 'DOCKER', color: 'text-[#00FF00]' },
    { name: 'ASTRO', color: 'text-white' },
    { name: 'AWS EDGE', color: 'text-[#00FF00]' },
    { name: 'PYTHON', color: 'text-white' },
    { name: 'SEO TECHNICAL', color: 'text-[#00FF00]' },
  ];

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
    <section id="inicio" className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden">
      {/* Dynamic Interactive Background Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(189,147,249,0.1)_0%,transparent_50%)]" 
          style={{ '--brand-color': hoverAccent } as any}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(139,92,246,0.12)_0%,transparent_60%)]" />
        
        {/* Glowing floating ambient shapes */}
        <motion.div
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -60, 40, 0],
            rotate: [0, 180, 270, 360],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-gradient-to-tr from-brand-purple/5 to-transparent blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -30, 20, 0],
            y: [0, 50, -40, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-brand-blue/5 to-brand-pink/5 blur-3xl"
        />

        {/* Digital Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(20,23,46,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(20,23,46,0.2)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left: Experimental Copy */}
        <div className="lg:col-span-7 flex flex-col gap-8 text-left">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="self-start flex items-center gap-2 bg-brand-neon/5 border border-brand-neon/20 rounded-full py-1.5 px-3.5"
          >
            <Sparkles className="w-4 h-4 text-brand-neon animate-spin" style={{ animationDuration: '6s' }} />
            <span className="font-mono text-xs font-semibold tracking-wider text-brand-neon uppercase">
              REDEFINIENDO EL DESARROLLO DIGITAL
            </span>
          </motion.div>

          {/* Heading with Inter Display font */}
          <div className="relative">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display font-black text-6xl sm:text-7xl md:text-8xl lg:text-[110px] leading-[0.85] tracking-tighter uppercase text-white flex flex-col items-start gap-1"
            >
              <span className="flex items-center gap-2 flex-wrap">
                BLITZCORE
                <span className="inline-block w-4 h-4 rounded-full bg-brand-neon shadow-[0_0_20px_#00FF00] animate-pulse" />
              </span>
              <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.45)' }}>
                DIGITAL
              </span>
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-space text-lg text-gray-300 max-w-xl font-normal leading-relaxed"
          >
            Desarrollo web inmersivo, apps disruptivas y consultoría de alto nivel. Fusionamos ingeniería robusta con interfaces que rompen el molde tradicional.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <button
              onClick={handleScrollToPlanner}
              className="group flex items-center gap-3 bg-white text-black hover:bg-brand-neon hover:shadow-[0_0_25px_rgba(0,255,0,0.35)] font-space font-black tracking-widest text-xs uppercase px-8 py-4.5 rounded-none transition-all duration-300 cursor-pointer"
            >
              Iniciar mi cotización
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>

            <button
              onClick={() => {
                const gallery = document.getElementById('servicios');
                if (gallery) {
                  const offset = 80;
                  const bodyRect = document.body.getBoundingClientRect().top;
                  const elementRect = gallery.getBoundingClientRect().top;
                  const elementPosition = elementRect - bodyRect;
                  const offsetPosition = elementPosition - offset;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              }}
              className="group border border-white/20 hover:border-brand-neon bg-zinc-900/40 hover:bg-[#121212] text-zinc-100 font-space font-bold uppercase tracking-wider text-xs px-8 py-4.5 rounded-none transition-all duration-300 cursor-pointer"
            >
              Explorar servicios
            </button>
          </motion.div>
        </div>

        {/* Right: Disruptive Interactive Console UI */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="lg:col-span-5 h-[480px] rounded-2xl bg-cyber-surface border border-cyber-border flex flex-col shadow-[0_25px_50px_-12px_rgba(5,5,12,0.8)] overflow-hidden relative group/console"
        >
          {/* Glass glare effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent pointer-events-none" />

          {/* Console Header */}
          <div className="bg-[#05050c]/90 border-b border-cyber-border px-4 py-3.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-brand-pink/60 block" />
              <span className="w-3 h-3 rounded-full bg-brand-purple/60 block" />
              <span className="w-3 h-3 rounded-full bg-brand-blue/60 block" />
            </div>
            <div className="flex items-center gap-1.5 bg-cyber-border/40 py-1 px-3.5 rounded-md border border-white/[0.03]">
              <Terminal className="w-3.5 h-3.5 text-brand-purple" />
              <span className="font-mono text-xs text-gray-300">workspace_terminal</span>
            </div>
            <div className="w-12" />
          </div>

          {/* IDE Subheader / Tab selector */}
          <div className="bg-[#05050c]/50 flex items-center border-b border-cyber-border/80 px-2 overflow-x-auto no-scrollbar">
            {INSTANT_CODE_SAMPLES.map((sample) => (
              <button
                key={sample.language}
                onClick={() => {
                  setActiveTab(sample.language);
                  if (sample.language === 'tsx') setHoverAccent('#bd93f9');
                  if (sample.language === 'css') setHoverAccent('#ff79c6');
                  if (sample.language === 'rust') setHoverAccent('#50fa7b');
                  if (sample.language === 'json') setHoverAccent('#8be9fd');
                }}
                className={`flex items-center gap-1.5 px-4 py-2.5 font-mono text-xs border-b-2 tracking-wide transition-all duration-300 focus:outline-none cursor-pointer ${
                  activeTab === sample.language
                    ? 'border-brand-neon text-brand-neon bg-cyber-surface/60'
                    : 'border-transparent text-gray-400 hover:text-gray-200'
                }`}
              >
                <Code className="w-3.5 h-3.5" />
                {sample.title}
              </button>
            ))}
          </div>

          {/* Console Body Workspace */}
          <div className="flex-1 p-6 font-mono text-sm overflow-y-auto bg-black/40 text-left relative scrollbar-thin">
            {/* Ambient inner box shadow glow */}
            <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-cyber-surface/20 to-transparent pointer-events-none" />

            <pre className="text-gray-300 text-xs sm:text-sm leading-relaxed whitespace-pre-wrap select-all selection:bg-brand-purple/30">
              <code className="block">
                {typedCode}
                {typingIndex < currentSample.code.length && (
                  <span className="w-2 h-4 ml-0.5 inline-block bg-white text-white animate-pulse">|</span>
                )}
              </code>
            </pre>
          </div>

          {/* Interactive Live Playground overlay based on selected code */}
          <div className="bg-[#05050c]/80 border-t border-cyber-border p-4.5 flex items-center justify-between">
            <span className="font-mono text-xs text-gray-400 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-[#50fa7b]" />
              ESTADO: COMPILADO
            </span>

            <AnimatePresence mode="wait">
              {activeTab === 'tsx' && (
                <motion.button
                  key="tsx-btn"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  onClick={() => setClickCount(prev => prev + 1)}
                  className="font-mono text-xs font-semibold px-4 py-2 rounded-lg bg-brand-neon/10 border border-brand-neon hover:bg-brand-neon hover:text-black text-brand-neon transition-all duration-300 flex items-center gap-1.5 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 animate-spin text-brand-neon group-hover:text-black" style={{ animationDuration: '4s' }} />
                  Renderizar ({clickCount})
                </motion.button>
              )}

              {activeTab === 'css' && (
                <motion.div
                  key="css-pallet"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  className="flex gap-2"
                >
                  {['#bd93f9', '#ff79c6', '#8be9fd', '#50fa7b', '#ffb86c'].map((c) => (
                    <button
                      key={c}
                      onClick={() => setHoverAccent(c)}
                      className={`w-5 h-5 rounded-full border transition-transform duration-200 cursor-pointer hover:scale-125 ${
                        hoverAccent === c ? 'border-white scale-110' : 'border-transparent'
                      }`}
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </motion.div>
              )}

              {activeTab === 'rust' && (
                <motion.div
                  key="rust-metric"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-emerald-950/40 border border-[#50fa7b]/40 py-1.5 px-3 rounded-lg flex items-center gap-1.5"
                >
                  <span className="font-mono text-[10px] text-[#50fa7b] font-bold">FPS: 60 // CPU: 2%</span>
                </motion.div>
              )}

              {activeTab === 'json' && (
                <motion.div
                  key="json-metric"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex items-center gap-1.5"
                >
                  <span className="font-mono text-[11px] text-[#50fa7b] font-bold bg-[#50fa7b]/10 border border-[#50fa7b]/20 px-2 py-0.5 rounded">
                    Lighthouse: 100/100
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Technology Ticker / Infinite Marquee at base of Hero */}
      <div className="w-full mt-24 border-y border-cyber-border bg-cyber-surface/20 py-5 overflow-hidden flex relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-cyber-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-cyber-bg to-transparent z-10 pointer-events-none" />

        {/* Marquee Tickers - duplicating lists to create seamless endless slide */}
        <div className="flex gap-20 animate-[marquee_25s_linear_infinite] whitespace-nowrap min-w-full shrink-0">
          {[...techItems, ...techItems, ...techItems].map((tech, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <span className={`font-display text-lg font-black tracking-widest ${tech.color}`}>
                {tech.name}
              </span>
              <span className="text-brand-indigo/35 font-light text-base">//</span>
            </div>
          ))}
        </div>
      </div>

      {/* Styled animation script inline since custom animations are imported directly via inline CSS */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
}
