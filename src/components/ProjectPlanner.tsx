import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Plus, Check, Sliders, Calendar, DollarSign, 
  Sparkles, Layers, RefreshCw, Send, Settings, ArrowRight, Code
} from 'lucide-react';
import { SERVICES, FEATURE_CATALOG } from '../data';

interface ProjectPlannerProps {
  onPlanExport: (budgetDetails: {
    servicesSelected: string[];
    featuresSelected: string[];
    urgency: string;
    scaleLabel: string;
    totalCost: number;
    daysEstimated: number;
    summaryText: string;
  }) => void;
}

export default function ProjectPlanner({ onPlanExport }: ProjectPlannerProps) {
  // State variables
  const [selectedServices, setSelectedServices] = useState<string[]>(['web']);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [urgency, setUrgency] = useState<'normal' | 'fast' | 'express'>('normal');
  const [projectScale, setProjectScale] = useState<number>(2); // 1 = Simple, 2 = Medium, 3 = High, 4 = Enterprise, 5 = Global

  // Calculated estimates
  const [cost, setCost] = useState(0);
  const [days, setDays] = useState(0);
  const [exportSuccess, setExportSuccess] = useState(false);

  // Project scale descriptions
  const scaleLabels = [
    { title: 'MVP / Startup Inicial', desc: 'Diseño enfocado a tracción rápida y validación ágil.' },
    { title: 'Plataforma Corporativa Estándar', desc: 'Sistemas robustos con micro-interacciones de alta gama.' },
    { title: 'Arquitectura Profesional Avanzada', desc: 'Infraestructura de alto tráfico, seguridad bancaria e integraciones complejas.' },
    { title: 'Ecosistema de Nivel Enterprise', desc: 'Multi-módulos integrados, analíticas avanzadas, optimización SEO mundial.' },
    { title: 'Estructura Robusta Global / Cloud', desc: 'Cargas distribuidas en microservicios, CDN multinivel y escalabilidad ilimitada.' },
  ];

  // Recalculate totals
  useEffect(() => {
    // 1. Calculate services cost
    let base = 0;
    let baseTime = 0;

    selectedServices.forEach((serviceId) => {
      const match = SERVICES.find((s) => s.id === serviceId);
      if (match) {
        base += match.basePrice;
        // Parse minimum weeks from string like "4-8 semanas" -> 4 weeks = 28 days
        const weeksMatches = match.duration.match(/^(\d+)/);
        const weeks = weeksMatches ? parseInt(weeksMatches[1]) : 4;
        baseTime = Math.max(baseTime, weeks * 7);
      }
    });

    // 2. Add features costs
    let featuresCost = 0;
    selectedFeatures.forEach((featId) => {
      const match = FEATURE_CATALOG.find((f) => f.id === featId);
      if (match) {
        featuresCost += match.cost;
        baseTime += 3; // add 3 days per feature
      }
    });

    let total = base + featuresCost;
    let totalTime = baseTime;

    // 3. Multiplier according to Scale of project
    // Scale 1: x0.8, Scale 2: x1.0, Scale 3: x1.4, Scale 4: x1.8, Scale 5: x2.4
    const scaleMultipliers = [0.8, 1.0, 1.4, 1.8, 2.4];
    const mult = scaleMultipliers[projectScale - 1] || 1.0;
    total = Math.round(total * mult);
    totalTime = Math.round(totalTime * mult);

    // 4. Urgency adjustments
    if (urgency === 'fast') {
      total = Math.round(total * 1.2); // +20% cost
      totalTime = Math.round(totalTime * 0.75); // -25% duration
    } else if (urgency === 'express') {
      total = Math.round(total * 1.45); // +45% cost
      totalTime = Math.round(totalTime * 0.55); // -45% duration
    }

    setCost(total);
    setDays(totalTime);
  }, [selectedServices, selectedFeatures, urgency, projectScale]);

  const toggleService = (id: string) => {
    setSelectedServices((prev) => {
      if (prev.includes(id)) {
        if (prev.length === 1) return prev; // Cannot deselect last service
        return prev.filter((s) => s !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const handleExport = () => {
    const scaleTitle = scaleLabels[projectScale - 1]?.title || 'Estándar';
    const servicesNames = selectedServices
      .map((s) => SERVICES.find((srv) => srv.id === s)?.title)
      .filter(Boolean)
      .join(', ');
    const featuresNames = selectedFeatures
      .map((f) => FEATURE_CATALOG.find((feat) => feat.id === f)?.name)
      .filter(Boolean)
      .join(', ');

    const summaryText = `Hola BlitzCore, he configurado una cotización estimada en su módulo interactivo:
- Servicios Solicitados: ${servicesNames || 'Ninguno'}
- Escala del Proyecto: ${scaleTitle}
- Características Extra: ${featuresNames || 'Ninguna'}
- Nivel de Urgencia: ${urgency.toUpperCase()}
- Presupuesto Estimado: ${cost}€
- Tiempo de Entrega Calculado: ${days} días aprox.

Me gustaría agendar una reunión para repasar esta estructura y dar inicio.`;

    onPlanExport({
      servicesSelected: selectedServices,
      featuresSelected: selectedFeatures,
      urgency,
      scaleLabel: scaleTitle,
      totalCost: cost,
      daysEstimated: days,
      summaryText,
    });

    setExportSuccess(true);
    setTimeout(() => {
      setExportSuccess(false);
      // Smooth scroll to contact form with timeout for optimal experience
      const contactFormElement = document.getElementById('contacto');
      if (contactFormElement) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = contactFormElement.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }, 1200);
  };

  return (
    <section id="planificador" className="relative py-28 border-t border-white/10 bg-[#0A0A0A] overflow-hidden flex flex-col justify-center">
      {/* Visual background lines */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,255,0,0.06)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 bg-brand-neon" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#71717a]">// PRESUPUESTO EN VIVO</span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tighter text-white leading-none">
            Configura tu <br />
            <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.45)' }}>
              PRESUPUESTO EN VIVO
            </span>
          </h2>
          <p className="font-space text-sm text-zinc-400 mt-4 max-w-xl leading-relaxed">
            Nuestra calculadora predictiva estima precios base y tiempos de entrega combinando requerimientos técnicos, urgencia y complejidad de código.
          </p>
        </div>

        {/* Master Content: Selectors (Left/Span 8) vs Tracker Widget (Right/Span 4) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Selectors Module */}
          <div className="lg:col-span-8 flex flex-col gap-10">

            {/* Step 1: Services Selection */}
            <div className="bg-[#121212]/40 border border-white/10 rounded-none p-6 text-left">
              <div className="flex items-center gap-2 mb-5">
                <span className="font-mono text-xs text-brand-neon font-bold px-2 py-0.5 rounded-none bg-brand-neon/10 border border-brand-neon/20">01</span>
                <span className="font-space font-bold uppercase tracking-wider text-zinc-300 text-xs">Selecciona Servicios Core</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {SERVICES.map((s) => {
                  const isSelected = selectedServices.includes(s.id);
                  return (
                    <button
                      key={s.id}
                      onClick={() => toggleService(s.id)}
                      className={`group p-4 rounded-none border text-center transition-all duration-300 focus:outline-none flex flex-col items-center justify-between gap-3 h-36 cursor-pointer ${
                        isSelected
                          ? 'border-brand-neon bg-brand-neon/5 text-white shadow-[0_0_15px_rgba(0,255,0,0.1)] bg-opacity-80'
                          : 'border-white/10 bg-black/30 text-zinc-400 hover:border-zinc-600 hover:text-white'
                      }`}
                    >
                      <span className="font-mono text-[9px] text-zinc-500">// 0{SERVICES.indexOf(s) + 1}</span>
                      <div className={`p-2.5 rounded-none transition-transform duration-300 group-hover:scale-110 ${
                        isSelected ? 'bg-brand-neon text-black' : 'bg-black group-hover:bg-[#121212]'
                      }`}>
                        {s.id === 'web' && <Code className="w-4 h-4" />}
                        {s.id === 'apps' && <Layers className="w-4 h-4" />}
                        {s.id === 'seo' && <Sparkles className="w-4 h-4" />}
                        {s.id === 'consulting' && <Settings className="w-4 h-4" />}
                      </div>
                      <span className="font-space font-bold uppercase tracking-wider text-[10px] leading-none shrink-0">{s.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Extra Features */}
            <div className="bg-[#121212]/40 border border-white/10 rounded-none p-6 text-left">
              <div className="flex items-center gap-2 mb-5">
                <span className="font-mono text-xs text-brand-neon font-bold px-2 py-0.5 rounded-none bg-brand-neon/10 border border-brand-neon/20">02</span>
                <span className="font-space font-bold uppercase tracking-wider text-zinc-300 text-xs">Añade Funcionalidades Específicas</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {FEATURE_CATALOG.map((f) => {
                  const isSelected = selectedFeatures.includes(f.id);
                  return (
                    <button
                      key={f.id}
                      onClick={() => toggleFeature(f.id)}
                      className={`p-4 rounded-none border text-left transition-all duration-300 focus:outline-none flex items-center justify-between gap-4 cursor-pointer hover:bg-black/40 ${
                        isSelected
                          ? 'border-brand-neon bg-brand-neon/5 text-white shadow-[0_0_15px_rgba(0,255,0,0.08)]'
                          : 'border-white/10 bg-black/30 text-zinc-400 hover:border-zinc-500 hover:text-white'
                      }`}
                    >
                      <div className="flex-1">
                        <span className="font-space font-bold text-sm text-zinc-200 block transition-colors duration-200 group-hover:text-white">{f.name}</span>
                        <span className="text-[11px] text-zinc-500 block leading-tight mt-1">{f.description}</span>
                      </div>
                      
                      <div className="flex items-center gap-3 shrink-0">
                        <span className="font-mono text-xs text-brand-neon font-semibold">+{f.cost}€</span>
                        <div className={`w-5 h-5 rounded-none border flex items-center justify-center transition-colors ${
                          isSelected ? 'bg-brand-neon border-brand-neon text-black' : 'border-white/10 text-transparent'
                        }`}>
                          <Check className="w-3.5 h-3.5 stroke-[3px]" />
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Project Complexity Scale */}
            <div className="bg-[#121212]/40 border border-white/10 rounded-none p-6 text-left">
              <div className="flex items-center gap-2 mb-5 justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-brand-neon font-bold px-2 py-0.5 rounded-none bg-brand-neon/10 border border-brand-neon/20">03</span>
                  <span className="font-space font-bold uppercase tracking-wider text-zinc-300 text-xs">Magnitud y Escala</span>
                </div>
                <span className="font-mono text-xs text-brand-neon bg-brand-neon/10 px-2.5 py-0.5 rounded-none font-bold">Rango {projectScale}/5</span>
              </div>

              <div className="space-y-6">
                <div className="relative">
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={projectScale}
                    onChange={(e) => setProjectScale(parseInt(e.target.value))}
                    className="w-full accent-brand-neon bg-[#0A0A0A] border border-white/10 h-2 rounded-none outline-none cursor-pointer"
                  />
                  {/* Step indicators */}
                  <div className="flex justify-between mt-1 px-1.5 text-[9px] font-mono text-zinc-500 uppercase tracking-widest font-bold">
                    <span>Mvp</span>
                    <span>Pyme</span>
                    <span>Avanzado</span>
                    <span>Enterprise</span>
                    <span>Global</span>
                  </div>
                </div>

                {/* Micro info on selected scale index */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={projectScale}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.3 }}
                    className="bg-black/35 border border-white/10 p-4.5 rounded-none text-left"
                  >
                    <span className="font-space font-black text-sm text-brand-neon block uppercase tracking-wider">
                      {scaleLabels[projectScale - 1]?.title}
                    </span>
                    <span className="text-xs text-zinc-400 mt-1.5 block leading-relaxed font-space">
                      {scaleLabels[projectScale - 1]?.desc}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Step 4: Urgency Controls */}
            <div className="bg-[#121212]/40 border border-white/10 rounded-none p-6 text-left">
              <div className="flex items-center gap-2 mb-5">
                <span className="font-mono text-xs text-brand-neon font-bold px-2 py-0.5 rounded-none bg-brand-neon/10 border border-brand-neon/20">04</span>
                <span className="font-space font-bold uppercase tracking-wider text-zinc-300 text-xs">Urgencia de Lanzamiento</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'normal', title: 'Estándar', text: 'Tiempos óptimos de pulido de código y testing.', tag: 'x1.0 Clics' },
                  { id: 'fast', title: 'Acelerado', text: 'Prioridad alta de sprint de desarrollo.', tag: '+20% Coste // -25% Tiempo' },
                  { id: 'express', title: 'Express Crítico', text: 'Ingeniería enfocada en lanzamiento ultrarrápido.', tag: '+45% Coste // -45% Tiempo' },
                ].map((u) => {
                  const isChecked = urgency === u.id;
                  return (
                    <button
                      key={u.id}
                      onClick={() => setUrgency(u.id as any)}
                      className={`p-4 rounded-none border text-left transition-all duration-300 focus:outline-none flex flex-col justify-between h-40 cursor-pointer ${
                        isChecked
                          ? 'border-brand-neon bg-brand-neon/5 text-white shadow-[0_0_15px_rgba(0,255,0,0.08)]'
                          : 'border-white/10 bg-black/30 text-zinc-400 hover:border-zinc-500 hover:text-white'
                      }`}
                    >
                      <div>
                        <span className="font-space font-bold text-sm block mb-1 uppercase tracking-wider">{u.title}</span>
                        <span className="text-[11px] text-zinc-500 block leading-tight font-space">{u.text}</span>
                      </div>
                      
                      <span className="font-mono text-[9px] text-brand-neon font-bold block bg-brand-neon/5 px-2 py-0.5 rounded-none border border-brand-neon/10 uppercase tracking-widest">
                        {u.tag}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Estimates Dashboard Summary Widget */}
          <div className="lg:col-span-4 sticky top-28 h-full bg-[#121212] border border-white/10 rounded-none p-6 md:p-8 flex flex-col justify-between shadow-[0_15px_40px_-5px_rgba(0,0,0,0.8)]">
            
            {/* Widget top header */}
            <div>
              <div className="flex items-center gap-2 border-b border-white/10 pb-4 mb-6">
                <Sliders className="w-5 h-5 text-brand-neon" />
                <h4 className="font-space font-black uppercase text-xs tracking-widest text-white text-left">// Consola de Estimación</h4>
              </div>

              {/* Dynamic counter boxes */}
              <div className="space-y-6">
                
                {/* Visual pricing counters */}
                <div className="bg-black/50 border border-white/10 rounded-none p-5 text-left relative overflow-hidden">
                  <div className="absolute right-0 top-0 text-[60px] leading-none font-black text-white/5 font-mono select-none pointer-events-none">€</div>
                  <span className="font-mono text-[9px] text-zinc-500 uppercase block tracking-widest font-black">PRESUPUESTO ESTIMADO</span>
                  <div className="flex items-baseline gap-1 mt-2">
                    <DollarSign className="w-5 h-5 text-brand-neon" />
                    <motion.span
                      key={cost}
                      initial={{ opacity: 0.5, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="font-space font-black text-4xl text-brand-neon select-all"
                    >
                      {cost.toLocaleString()}
                    </motion.span>
                    <span className="font-space text-xs text-zinc-500 ml-1 font-bold">EUR</span>
                  </div>
                  <p className="text-[10px] text-zinc-500 mt-2.5 leading-tight font-space">IVA no incluido. Cotizaciones adaptadas a especificaciones operacionales concretas.</p>
                </div>

                {/* Visual time counters */}
                <div className="bg-black/50 border border-white/10 rounded-none p-5 text-left relative overflow-hidden">
                  <div className="absolute right-3 top-2 text-[50px] leading-none font-black text-white/3 font-mono select-none pointer-events-none">⏱️</div>
                  <span className="font-mono text-[9px] text-zinc-500 uppercase block tracking-widest font-black">PLAZO DE ENTREGA</span>
                  <div className="flex items-baseline gap-1.5 mt-2">
                    <Calendar className="w-5 h-5 text-brand-neon" />
                    <motion.span
                      key={days}
                      initial={{ opacity: 0.5, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="font-space font-black text-3xl text-white"
                    >
                      ~ {days}
                    </motion.span>
                    <span className="font-space text-xs text-zinc-400 select-none uppercase tracking-wide font-black">días hábiles</span>
                  </div>
                  <p className="text-[10px] text-zinc-500 mt-2.5 leading-tight font-space font-light">Fase de pruebas QA integrales y auditorías de indexación y lighthouse incluidas.</p>
                </div>

              </div>

              {/* Dynamic Service Summary Checkmarks indicators */}
              <div className="mt-8 border-t border-white/10 pt-6 text-left">
                <span className="font-mono text-[9px] text-zinc-500 uppercase block tracking-widest font-black mb-3">// RESUMEN DE COMPILACIÓN</span>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-300">
                    <span>Módulos de Servicios:</span>
                    <span className="text-brand-neon font-black font-mono">{selectedServices.length}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-300">
                    <span>Módulos Características:</span>
                    <span className="text-white font-black font-mono">{selectedFeatures.length}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-300">
                    <span>Factor Urgencia:</span>
                    <span className="text-brand-neon font-black uppercase text-[10px]">{urgency}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA action button */}
            <div className="mt-8">
              <button
                onClick={handleExport}
                className="w-full relative py-4.5 rounded-none font-space font-black text-xs uppercase tracking-widest text-[#0A0A0A] bg-white select-none overflow-hidden transition-all duration-300 cursor-pointer shadow-[0_5px_15px_rgba(255,255,255,0.06)] hover:bg-brand-neon"
              >
                <AnimatePresence mode="wait">
                  {exportSuccess ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center justify-center gap-1.5 text-black font-black"
                    >
                      ✓ Exportado con éxito
                    </motion.div>
                  ) : (
                    <motion.div
                      key="standard"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center justify-center gap-2"
                    >
                      Exportar al Formulario de Contacto
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
