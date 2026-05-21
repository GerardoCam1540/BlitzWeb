import { Service, Technology } from './types';

export const SERVICES: Service[] = [
  {
    id: 'web',
    title: 'Desarrollo Web',
    shortDesc: 'Aplicaciones web modernas, ultra-rápidas y con animaciones inmersivas.',
    description: 'Desarrollamos ecosistemas digitales escalables construidos sobre arquitecturas estables. Priorizamos el rendimiento del Core Web Vitals, la accesibilidad WCAG y diseños estéticos disruptivos que multiplican las conversiones.',
    iconName: 'Globe',
    color: 'from-[#8be9fd] to-[#50fa7b]',
    features: [
      'Single Page Apps & Server-Side Rendering (Next.js/Astro)',
      'Sistemas de Diseño e Integraciones de Control de Contenidos (CMS Headless)',
      'Optimización extrema de velocidad de carga (Puntuación superior a 95+ en Lighthouse)',
      'Animaciones y transiciones fluidas con Framer Motion / WebGL',
      'Infraestructura Serverless integrada'
    ],
    duration: '4-8 semanas',
    basePrice: 2400
  },
  {
    id: 'apps',
    title: 'Desarrollo de Apps',
    shortDesc: 'Experiencias móviles nativas e híbridas diseñadas con precisión milimétrica.',
    description: 'Diseñamos y desarrollamos apps nativas e híbridas preparadas para soportar alta recurrencia de usuarios. Diseños fluidos de interfaz, soporte offline en tiempo real y transiciones líquidas.',
    iconName: 'Smartphone',
    color: 'from-[#bd93f9] to-[#ff79c6]',
    features: [
      'Desarrollo multiplataforma avanzado (React Native / Flutter)',
      'Sincronización offline en tiempo real y bases de datos locales',
      'Integración nativa (Biometría, Geolocalización, Sensorica celular)',
      'Notificaciones Push inteligentes con segmentación de usuarios',
      'Publicación y optimización para App Store & Google Play Store'
    ],
    duration: '6-12 semanas',
    basePrice: 3800
  },
  {
    id: 'seo',
    title: 'Posicionamiento SEO',
    shortDesc: 'Auditoría técnica extrema y estrategias orgánicas para dominar buscadores.',
    description: 'El tráfico orgánico de calidad es el ROI más alto. No vendemos trucos temporales; diseñamos estrategias de contenidos sólidas, arquitectura de rastreo optimizada e ingeniería SEO técnica profunda.',
    iconName: 'TrendingUp',
    color: 'from-[#ffb86c] to-[#ff5555]',
    features: [
      'Auditorías SEO de indexabilidad técnica avanzadas',
      'Análisis predictivo de Keyword Intent (Intención del usuario)',
      'Optimización de Arquitectura Silo e indexación semántica',
      'Optimización SEO On-Page extrema y Schema Markup enriquecido',
      'Configuración de medición analítica avanzada (G4, GTM, Server-Side)'
    ],
    duration: 'Mensual (Estrategias continuas)',
    basePrice: 850
  },
  {
    id: 'consulting',
    title: 'Consultoría TI & Cloud',
    shortDesc: 'Auditoría de arquitecturas, optimización de infraestructura y migración cloud.',
    description: 'Evita fallos críticos de escalabilidad y facturas de hosting desorbitadas. Analizamos tu infraestructura de software, diseñamos tuberías CI/CD estables y desplegamos entornos orquestados robustos.',
    iconName: 'Cpu',
    color: 'from-[#50fa7b] to-[#f1fa8c]',
    features: [
      'Modelado de Arquitecturas de Microservicios & API-first',
      'Containerización de cargas de trabajo con Docker y Kubernetes',
      'Infraestructura como Código (IaC) y pipelines ágiles de CI/CD',
      'Optimización profunda de costes de nube (AWS, GCP, Vercel)',
      'Auditorías de Ciberseguridad y parches estables de infraestructura'
    ],
    duration: '2-4 semanas',
    basePrice: 1500
  }
];

export const TECHNOLOGIES: Technology[] = [
  { name: 'React', icon: '⚛️', category: 'Frontend', color: 'text-[#61dafb]' },
  { name: 'TypeScript', icon: '📘', category: 'Logic', color: 'text-[#3178c6]' },
  { name: 'Vite', icon: '⚡', category: 'Build', color: 'text-[#646cff]' },
  { name: 'Tailwind CSS', icon: '🎨', category: 'Styling', color: 'text-[#38b2ac]' },
  { name: 'Node.js', icon: '🟢', category: 'Backend', color: 'text-[#339933]' },
  { name: 'Python', icon: '🐍', category: 'Backend/AI', color: 'text-[#3776ab]' },
  { name: 'Docker', icon: '🐳', category: 'DevOps', color: 'text-[#2496ed]' },
  { name: 'AWS Cloud', icon: '☁️', category: 'Infrastructure', color: 'text-[#ff9900]' }
];

export const FEATURE_CATALOG = [
  { id: 'multilang', name: 'Soporte Multilingüe (i18n)', cost: 350, description: 'Traducción y localización dinámica' },
  { id: 'cms', name: 'Gestor de Contenido (Astro/Sanity)', cost: 600, description: 'Facilidad para editar blogs y secciones' },
  { id: 'auth', name: 'Autenticación & Perfiles', cost: 500, description: 'Registro seguro de usuarios (OAuth/JWT)' },
  { id: 'payment', name: 'Pasarela de Pagos (Stripe/Paypal)', cost: 650, description: 'Pasarela encriptada, suscripciones/compras' },
  { id: 'dash', name: 'Dashboard de Administración', cost: 800, description: 'Visualizadores de datos y gestión interna' },
  { id: 'pwa', name: 'PWA (Progressive Web App)', cost: 450, description: 'Instalación móvil y notificaciones push' }
];

export const INSTANT_CODE_SAMPLES = [
  {
    language: 'tsx',
    title: 'DisruptiveHero.tsx',
    code: `import { motion } from 'motion/react';

export default function DisruptiveHero() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-8xl font-display font-black tracking-tight"
    >
      CREATING A NEW <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">DIGITAL PARADIGM</span>
    </motion.div>
  );
}`
  },
  {
    language: 'css',
    title: 'cyber-grids.css',
    code: `.cyber-mesh-container {
  background: radial-gradient(circle at 50% 50%, #05050c 0%, #000 100%);
  mask-image: linear-gradient(to top, transparent, black 20%, black 80%, transparent);
}
.cyber-grid-overlay {
  background-image: 
    linear-gradient(rgba(189, 147, 249, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(189, 147, 249, 0.04) 1px, transparent 1px);
  background-size: 40px 40px;
}`
  },
  {
    language: 'rust',
    title: 'server_engine.rs',
    code: `#[get("/api/v1/optimize")]
async function speed_audit(conn: DbConn) -> QueryResult<SpeedMetrics> {
    let raw_lighthouse = run_psi_audit().await?;
    let optimized_metrics = transform_to_critical_path(raw_lighthouse);
    
    info!("🚀 Core Web Vitals optimized at: {:?}", optimized_metrics.score);
    Ok(Json(optimized_metrics))
}`
  },
  {
    language: 'json',
    title: 'blitzcore.config',
    code: `{
  "developerMode": "ultra-disruptive",
  "lighthouseMetricGoal": 100,
  "animations": "liquid-motion-layout",
  "fonts": ["Syne", "Space Grotesk", "JetBrains Mono"],
  "techStack": {
    "frontend": "React 19, Tailwind v4",
    "motion": "motion/react",
    "hosting": "Vercel / Cloud Run Edge"
  }
}`
  }
];
