import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Terminal, Sparkles, CheckCircle, ShieldAlert, Cpu } from 'lucide-react';

interface ContactFormProps {
  prepopulatedMessage: string;
}

export default function ContactForm({ prepopulatedMessage }: ContactFormProps) {
  // Field values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');

  // Submit stage
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [simulatedLogs, setSimulatedLogs] = useState<string[]>([]);

  // Update message if pre-populated from planner exports
  useEffect(() => {
    if (prepopulatedMessage) {
      setMessage(prepopulatedMessage);
    }
  }, [prepopulatedMessage]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = 'Especifica tu nombre o el de tu marca';
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Introduce un email corporativo válido';
    }
    if (!message.trim()) errs.message = 'Cuéntanos un poco sobre tu idea';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSimulatedLogs([]);

    // Multi-staged cyberpunk loading terminal simulation
    const logs = [
      '⚡ Inicializando pasarela de contacto de alta velocidad...',
      '🛠️ Validando campos criptográficos...',
      '📡 Enlazando nodo de propuesta con servidor principal...',
      '🧠 Analizando requerimientos y presupuesto...',
      '📥 Guardando cotización en el CRM de ingeniería...',
      '🚀 ¡Propuesta de proyecto enviada correctamente!'
    ];

    logs.forEach((log, index) => {
      setTimeout(() => {
        setSimulatedLogs((prev) => [...prev, log]);
        if (index === logs.length - 1) {
          setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
          }, 800);
        }
      }, (index + 1) * 350);
    });
  };

  const handleResetForm = () => {
    setName('');
    setEmail('');
    setCompany('');
    setMessage('');
    setIsSuccess(false);
    setSimulatedLogs([]);
  };

  return (
    <section id="contacto" className="relative py-28 border-t border-white/10 bg-[#0A0A0A] overflow-hidden">
      {/* Decorative cyber grids and glow blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 right-[10%] w-80 h-80 rounded-none bg-brand-neon/5 blur-3xl" />
        <div className="absolute bottom-1/4 left-[10%] w-[450px] h-[450px] rounded-none bg-brand-neon/5 blur-3xl animate-pulse-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Premium copy, physical agency data */}
          <div className="lg:col-span-5 text-left flex flex-col gap-8">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-brand-neon" />
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">// ZONA DE CONTACTO</span>
            </div>

            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tighter text-white leading-none">
              Inicia la <br />
              <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.45)' }}>
                REVOLUCIÓN
              </span>
            </h2>

            <p className="font-space text-sm text-zinc-300 leading-relaxed max-w-md">
              ¿Listo para crear un producto digital asombroso? Rellena el formulario interactivo o exporta tu cotización en vivo desde nuestro planificador. Nuestro equipo técnico auditará tu idea y agendará una sesión de consultoría gratuita de 30 minutos.
            </p>

            <div className="flex flex-col gap-4 border-t border-white/10 pt-6">
              <div className="flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-none bg-[#121212] border border-white/10 flex items-center justify-center text-brand-neon text-xs font-mono font-bold">
                  01
                </div>
                <div className="text-left">
                  <span className="text-[9px] text-zinc-500 font-mono block uppercase tracking-wider font-bold">Email Directo</span>
                  <span className="font-mono text-xs text-zinc-200">hello@blitzcore.dev</span>
                </div>
              </div>
              <div className="flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-none bg-[#121212] border border-white/10 flex items-center justify-center text-zinc-100 text-xs font-mono font-bold">
                  02
                </div>
                <div className="text-left">
                  <span className="text-[9px] text-zinc-500 font-mono block uppercase tracking-wider font-bold">WhatsApp</span>
                  <span className="font-mono text-xs text-zinc-200">+34 600 000 000</span>
                </div>
              </div>
              <div className="flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-none bg-[#121212] border border-white/10 flex items-center justify-center text-zinc-100 text-xs font-mono font-bold">
                  03
                </div>
                <div className="text-left">
                  <span className="text-[9px] text-zinc-500 font-mono block uppercase tracking-wider font-bold">Instagram</span>
                  <span className="font-mono text-xs text-zinc-200">@blitzcore.dev</span>
                </div>
              </div>
              <div className="flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-none bg-[#121212] border border-white/10 flex items-center justify-center text-zinc-100 text-xs font-mono font-bold">
                  04
                </div>
                <div className="text-left">
                  <span className="text-[9px] text-zinc-500 font-mono block uppercase tracking-wider font-bold">Facebook</span>
                  <span className="font-mono text-xs text-zinc-200">blitzcore.dev</span>
                </div>
              </div>
              <div className="flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-none bg-[#121212] border border-white/10 flex items-center justify-center text-zinc-500 text-xs font-mono font-bold">
                  //
                </div>
                <div className="text-left">
                  <span className="text-[9px] text-zinc-500 font-mono block uppercase tracking-wider font-bold">Operación</span>
                  <span className="font-space text-xs text-zinc-200">100% Remoto // Equipo Global Distribuido</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic submission/form card */}
          <div className="lg:col-span-7 w-full h-full text-left">
            <div className="bg-[#121212] border border-white/10 rounded-none p-6 md:p-8 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.85)] relative overflow-hidden h-[540px] flex flex-col justify-center">
              
              <AnimatePresence mode="wait">
                {/* Stage 1: Form Inputs */}
                {!isSubmitting && !isSuccess && (
                  <motion.form
                    key="form"
                    onSubmit={handleFormSubmit}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="space-y-5 text-left flex-1 flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      {/* Name & Company in a grid row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="font-mono text-[9px] uppercase tracking-widest text-zinc-500 block mb-1.5 font-bold">// NOMBRE COMPLETO *</label>
                          <input
                            type="text"
                            value={name}
                            onChange={(e) => {
                              setName(e.target.value);
                              if (errors.name) setErrors((p) => ({ ...p, name: '' }));
                            }}
                            placeholder="Ej. Leo Messi"
                            className={`w-full bg-black/60 border rounded-none py-3 px-4 font-space text-sm text-white placeholder-zinc-600 focus:outline-none transition-colors duration-300 focus:border-brand-neon ${
                              errors.name ? 'border-brand-neon bg-brand-neon/5' : 'border-white/10'
                            }`}
                          />
                        </div>
                        <div>
                          <label className="font-mono text-[9px] uppercase tracking-widest text-zinc-500 block mb-1.5 font-bold">// ORGANIZACIÓN / PROYECTO</label>
                          <input
                            type="text"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            placeholder="Ej. Inter de Miami SL"
                            className="w-full bg-black/60 border border-white/10 rounded-none py-3 px-4 font-space text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-brand-neon transition-colors duration-300"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label className="font-mono text-[9px] uppercase tracking-widest text-zinc-500 block mb-1.5 font-bold">// EMAIL PROFESIONAL *</label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (errors.email) setErrors((p) => ({ ...p, email: '' }));
                          }}
                          placeholder="tu@compania.com"
                          className={`w-full bg-black/60 border rounded-none py-3 px-4 font-space text-sm text-white placeholder-zinc-600 focus:outline-none transition-colors duration-300 focus:border-brand-neon ${
                            errors.email ? 'border-brand-neon bg-brand-neon/5' : 'border-white/10'
                          }`}
                        />
                      </div>

                      {/* Message / Prepopulated details */}
                      <div>
                        <label className="font-mono text-[9px] uppercase tracking-widest text-zinc-500 block mb-1.5 font-bold">// DETALLES DE LA PROPUESTA *</label>
                        <textarea
                          rows={4}
                          value={message}
                          onChange={(e) => {
                            setMessage(e.target.value);
                            if (errors.message) setErrors((p) => ({ ...p, message: '' }));
                          }}
                          placeholder="Requerimientos técnicos del proyecto, canales SEO a auditar o volumen del servicio..."
                          className={`w-full bg-black/60 border rounded-none py-3 px-4 font-space text-xs sm:text-sm text-white placeholder-zinc-600 focus:outline-none transition-colors duration-300 focus:border-brand-neon scrollbar-thin resize-none h-[110px] ${
                            errors.message ? 'border-brand-neon bg-brand-neon/5' : 'border-white/10'
                          }`}
                        />
                      </div>
                    </div>

                    {/* Footer bar with submit / errors */}
                    <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/5 pt-4 mt-2">
                      <div className="flex items-center gap-1.5 text-[10px] text-zinc-500 font-mono tracking-wider">
                        {Object.keys(errors).length > 0 ? (
                          <span className="text-brand-neon font-black flex items-center gap-1.5 uppercase">
                            <ShieldAlert className="w-3.5 h-3.5 shrink-0" /> Errores detectados
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 uppercase">
                            🔐 Encriptación SSL certificada activa
                          </span>
                        )}
                      </div>
                      <button
                        type="submit"
                        className="group flex items-center gap-3 bg-white text-black hover:bg-brand-neon font-space font-black text-xs uppercase tracking-widest px-8 py-4 rounded-none transition-all duration-300 cursor-pointer shrink-0"
                      >
                        Enviar propuesta
                        <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                      </button>
                    </div>
                  </motion.form>
                )}

                {/* Stage 2: Simulating Submission Terminal */}
                {isSubmitting && (
                  <motion.div
                    key="submitting"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex-1 flex flex-col justify-start bg-[#0A0A0A] border border-white/10 rounded-none p-5 font-mono text-left overflow-y-auto relative scrollbar-thin"
                  >
                    <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-4">
                      <span className="font-mono text-xs text-brand-neon flex items-center gap-1.5 uppercase font-bold">
                        <Cpu className="w-3.5 h-3.5 text-brand-neon animate-spin" /> Conexión de Datos Activa
                      </span>
                      <span className="w-1.5 h-1.5 bg-brand-neon animate-ping" />
                    </div>

                    <div className="space-y-3">
                      {simulatedLogs.map((log, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -5 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="text-[11px] sm:text-xs text-brand-neon"
                        >
                          {log}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Stage 3: Dynamic Success Response Screen */}
                {isSuccess && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex-1 flex flex-col items-center justify-center text-center p-6"
                  >
                    <div className="w-16 h-16 rounded-none bg-brand-neon/10 border border-brand-neon/40 flex items-center justify-center text-brand-neon mb-6 shadow-[0_0_20px_rgba(0,255,0,0.15)]">
                      <CheckCircle className="w-8 h-8 stroke-[1.5px]" />
                    </div>

                    <span className="font-mono text-[10px] tracking-widest text-brand-neon uppercase block mb-2 font-bold">// SOLICITUD CONFIRMADA</span>
                    <h3 className="font-space font-black text-2xl text-white uppercase tracking-wider">
                      ¡Gracias, {name}!
                    </h3>
                    <p className="font-space text-sm text-zinc-400 mt-2.5 max-w-sm leading-relaxed">
                      La propuesta ha sido enlazada en nuestro clúster. Un ingeniero técnico especializado en tus requisitos se comunicará contigo vía <strong className="text-white">{email}</strong> en menos de 12 horas hábiles.
                    </p>

                    <button
                      onClick={handleResetForm}
                      className="mt-8 font-mono text-xs text-black bg-brand-neon px-5 py-3 rounded-none uppercase font-bold tracking-widest hover:bg-white transition-colors cursor-pointer"
                    >
                      Enviar otra consulta
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
