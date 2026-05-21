import { Code, Terminal, Heart, Scale } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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
    <footer className="bg-[#0A0A0A] border-t border-white/10 py-16 relative overflow-hidden">
      {/* Absolute decorative glow mesh */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-[radial-gradient(circle_at_center,rgba(0,255,0,0.02)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
        
        {/* Brand Left Columns (Span 5) */}
        <div className="md:col-span-5 text-left flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-none bg-white/5 border border-white/15 flex items-center justify-center">
              <Code className="w-4 h-4 text-brand-neon" />
            </div>
            <span className="font-space font-black uppercase text-lg text-white tracking-wider">
              BLITZ<span className="text-brand-neon">CORE</span>
            </span>
          </div>
          <p className="font-space text-xs text-zinc-500 leading-relaxed max-w-sm">
            Estructuras digitales avanzadas. Diseñamos, optimizamos y compilamos ecosistemas de software robustos cuidando cada píxel, transición y factor de conversión.
          </p>
          <div className="flex items-center gap-2.5 font-mono text-[9px] text-zinc-650 tracking-widest font-bold">
            <Terminal className="w-3.5 h-3.5 text-zinc-600" />
            <span>HECHO CON PRECISIÓN MÁXIMA EN ESPAÑA</span>
          </div>
          <div className="font-mono text-[9px] text-zinc-600 tracking-wider font-bold mt-4 uppercase">
            &copy; {new Date().getFullYear()} BLITZCORE. RESERVADOS TODOS LOS DERECHOS.
          </div>
        </div>

        {/* Directory Links Columns (Span 3) */}
        <div className="md:col-span-3 text-left">
          <h5 className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest mb-4 font-bold">// DIRECTORIO</h5>
          <ul className="space-y-3 font-space text-xs">
            {['inicio', 'servicios', 'planificador', 'contacto'].map((sec) => (
              <li key={sec}>
                <button
                  onClick={() => scrollToSection(sec)}
                  className="text-zinc-400 hover:text-white transition-colors duration-200 uppercase tracking-wider text-[10px] font-bold font-space focus:outline-none cursor-pointer"
                >
                  {sec === 'planificador' ? 'Planificador en vivo' : sec}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Capabilities Columns (Span 4) */}
        <div className="md:col-span-4 text-left">
          <h5 className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest mb-4 font-bold">// SERVICIOS INTEGRALES</h5>
          <ul className="space-y-3 font-mono text-[10px] text-zinc-400 font-bold tracking-wider">
            <li>// DESARROLLO WEB (REACT + SSR)</li>
            <li>// DESARROLLO DE APPS MÓVILES</li>
            <li>// POSICIONAMIENTO SEO TÉCNICO</li>
            <li>// CONSULTORÍA EN LA NUBE (CI/CD)</li>
          </ul>
        </div>

      </div>


    </footer>
  );
}
