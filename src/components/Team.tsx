import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp, Terminal, User, Code, Cpu, ExternalLink, Linkedin, Github } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  specialty: string;
  codeSnippet: string;
  github?: string;
  linkedin?: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'brayian',
    name: 'Ing. Brayian Ramirez',
    role: 'Co-Fundador & IA Specialist',
    bio: 'Ingeniero en Informática y Desarrollador Full Stack con especialización en Inteligencia Artificial. Como co-fundador de Blitzcore, proveo desarrollo de soluciones tecnológicas innovadoras, combinando el poder de la IA con arquitectura web escalable para transformar ideas en productos digitales de alto impacto.',
    avatar: 'BR',
    specialty: 'Inteligencia Artificial // Next.js // Python',
    codeSnippet: 'const brain = new NeuralNetwork();\nbrain.train(data);\nconst solution = brain.predict(idea);',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 'samuel',
    name: 'Samuel Mielgo',
    role: 'Co-Fundador & Frontend Engineer',
    bio: 'Ingeniero de Software especializado en Frontend y Experiencia de Usuario. Apasionado por la creación de interfaces interactivas ultra rápidas, micro-animaciones fluidas y el diseño de sistemas visuales disruptivos y modernos para la web del futuro.',
    avatar: 'SM',
    specialty: 'UI/UX // Framer Motion // React 19',
    codeSnippet: 'const ui = new UserInterface();\nui.enableAesthetics({ premium: true });\nui.render();',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 'gerardo',
    name: 'Gerardo Camejo',
    role: 'Co-Fundador & Cloud Architect',
    bio: 'Arquitecto Cloud y especialista en DevOps. Enfocado en la optimización de servidores, automatización de despliegues globales (CI/CD) y seguridad de infraestructura crítica para garantizar una escala masiva sin pérdida de rendimiento.',
    avatar: 'GC',
    specialty: 'Docker // AWS // Kubernetes // CI-CD',
    codeSnippet: 'docker run -d --name blitz-prod -p 443:443 \\\n  --restart always \\\n  blitzcore/web:latest',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com'
  }
];

export default function Team() {
  const [activeMemberId, setActiveMemberId] = useState<string | null>('brayian');

  const toggleMember = (id: string) => {
    if (activeMemberId === id) {
      // Toggle off to close it or keep at least one open
      setActiveMemberId(null);
    } else {
      setActiveMemberId(id);
    }
  };

  return (
    <section id="equipo" className="relative py-28 border-t border-white/10 bg-[#0A0A0A] overflow-hidden">
      {/* Decorative cyber grids/ambient glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 rounded-none bg-brand-neon/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-80 h-80 rounded-none bg-brand-neon/5 blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-left">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 bg-brand-neon" />
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">// NÚCLEO OPERATIVO</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tighter text-white leading-none">
              Nuestro <br className="hidden sm:inline" />
              <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.45)' }}>
                EQUIPO DE INGENIERÍA
              </span>
            </h2>
          </div>
          <div className="max-w-md text-left md:text-right">
            <p className="font-space text-sm text-zinc-400 leading-relaxed">
              Mentes técnicas dedicadas a construir el futuro de la web. Selecciona un perfil para desplegar su ficha técnica y áreas de especialización.
            </p>
          </div>
        </div>

        {/* Accordion / Cards List */}
        <div className="flex flex-col gap-4 max-w-4xl mx-auto">
          {TEAM_MEMBERS.map((member, index) => {
            const isOpen = activeMemberId === member.id;
            
            return (
              <div
                key={member.id}
                className={`border transition-all duration-300 rounded-none ${
                  isOpen
                    ? 'border-brand-neon bg-cyber-surface shadow-[0_0_30px_rgba(0,255,0,0.06)]'
                    : 'border-white/10 bg-cyber-surface/40 hover:border-brand-neon/40'
                }`}
              >
                {/* Accordion Header / Card Selection button */}
                <button
                  onClick={() => toggleMember(member.id)}
                  className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-4 md:gap-6">
                    {/* Index */}
                    <span className="font-mono text-xs text-zinc-500 hidden sm:inline">
                      // 0{index + 1}
                    </span>
                    
                    {/* Avatar Initials block */}
                    <div className={`w-12 h-12 flex items-center justify-center font-mono font-bold text-sm transition-all duration-300 ${
                      isOpen
                        ? 'bg-brand-neon text-black shadow-[0_0_15px_rgba(0,255,0,0.3)]'
                        : 'bg-black/60 text-zinc-400 border border-white/10'
                    }`}>
                      {member.avatar}
                    </div>

                    <div>
                      {/* Name with pulsing tag if open */}
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className={`font-space font-black text-lg md:text-xl transition-colors duration-200 ${
                          isOpen ? 'text-white' : 'text-zinc-300'
                        }`}>
                          {member.name}
                        </h3>
                        {isOpen && (
                          <span className="px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest bg-brand-neon/10 text-brand-neon border border-brand-neon/20">
                            Activo
                          </span>
                        )}
                      </div>
                      <p className="font-mono text-xs text-zinc-500 mt-0.5">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* Expand icon */}
                  <div className={`w-8 h-8 flex items-center justify-center border transition-all duration-300 ${
                    isOpen
                      ? 'border-brand-neon text-brand-neon bg-black'
                      : 'border-white/10 text-zinc-500'
                  }`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {/* Accordion Content / Details */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-8 md:px-8 md:pb-10 pt-2 border-t border-white/5 flex flex-col lg:flex-row gap-8 text-left">
                        {/* Main Info */}
                        <div className="flex-1 space-y-6">
                          <div>
                            <span className="font-mono text-[10px] uppercase tracking-widest text-[#71717a] block mb-2">
                              // PERFIL PROFESIONAL
                            </span>
                            <p className="font-space text-sm text-zinc-300 leading-relaxed">
                              {member.bio}
                            </p>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Specialty */}
                            <div className="bg-black/45 border border-white/5 p-4">
                              <span className="font-mono text-[9px] uppercase tracking-widest text-brand-neon block mb-1">
                                [ TECNOLOGÍAS CLAVE ]
                              </span>
                              <span className="font-space font-bold text-xs text-zinc-300">
                                {member.specialty}
                              </span>
                            </div>
                            
                            {/* Role Scope */}
                            <div className="bg-black/45 border border-white/5 p-4">
                              <span className="font-mono text-[9px] uppercase tracking-widest text-brand-neon block mb-1">
                                [ RESPONSABILIDAD ]
                              </span>
                              <span className="font-space font-bold text-xs text-zinc-300">
                                Garantía de Calidad e Innovación Disruptiva
                              </span>
                            </div>
                          </div>

                          {/* Social links */}
                          <div className="flex items-center gap-3 pt-2">
                            {member.linkedin && (
                              <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 border border-white/10 hover:border-brand-neon bg-[#0A0A0A] px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-zinc-400 hover:text-white transition-all duration-300 focus:outline-none"
                              >
                                <Linkedin className="w-3.5 h-3.5 text-brand-neon" />
                                LinkedIn
                              </a>
                            )}
                            {member.github && (
                              <a
                                href={member.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 border border-white/10 hover:border-brand-neon bg-[#0A0A0A] px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-zinc-400 hover:text-white transition-all duration-300 focus:outline-none"
                              >
                                <Github className="w-3.5 h-3.5 text-brand-neon" />
                                GitHub
                              </a>
                            )}
                          </div>
                        </div>

                        {/* Interactive code-workspace box representing their daily activity */}
                        <div className="w-full lg:w-80 shrink-0">
                          <div className="border border-white/10 bg-black/60 p-4 font-mono text-[11px] h-full flex flex-col justify-between">
                            <div>
                              <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-4">
                                <span className="text-zinc-500 flex items-center gap-1.5 uppercase font-bold text-[9px]">
                                  <Terminal className="w-3 h-3 text-brand-neon" />
                                  blitzcore-terminal
                                </span>
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-neon animate-pulse" />
                              </div>
                              <pre className="text-zinc-300 text-left overflow-x-auto whitespace-pre-wrap font-mono leading-relaxed">
                                <code>{member.codeSnippet}</code>
                              </pre>
                            </div>
                            <div className="text-right text-[9px] text-zinc-600 mt-4 font-bold uppercase tracking-wider">
                              // BLITZCORE // SYSTEM_SYS_INIT_OK
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
