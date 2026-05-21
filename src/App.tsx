import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesGallery from './components/ServicesGallery';
import ProjectPlanner from './components/ProjectPlanner';
import ContactForm from './components/ContactForm';
import Team from './components/Team';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [plannerMessage, setPlannerMessage] = useState('');

  // Fluid scroll progress indicator bar at the absolute top of the viewport
  const { scrollYProgress } = useScroll();
  const scaleXSpring = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Handle active section linking while scrolling using dynamic Intersection Observer
  useEffect(() => {
    const sections = ['inicio', 'servicios', 'planificador', 'contacto', 'equipo'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px', // Trigger when section occupies the active midpoint of screen
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  // Bridge callback to sync live estimates direct into user contact form
  const handlePlanExport = (budgetDetails: {
    servicesSelected: string[];
    featuresSelected: string[];
    urgency: string;
    scaleLabel: string;
    totalCost: number;
    daysEstimated: number;
    summaryText: string;
  }) => {
    setPlannerMessage(budgetDetails.summaryText);
  };

  return (
    <div id="landing-app" className="min-h-screen bg-[#0A0A0A] relative selection:bg-brand-neon selection:text-black">
      {/* Absolute Global Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3.5px] bg-brand-neon z-50 origin-left"
        style={{ scaleX: scaleXSpring }}
      />

      {/* Embedded Ambient Scanlines & Digital Overlay Filter to deliver an amazing disruptive vibe */}
      <div className="fixed inset-0 z-40 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,24,38,1)_50%,transparent_50%)] bg-[size:100%_4px]" />

      {/* Responsive sliding Navbar */}
      <Header activeSection={activeSection} />

      {/* Main Sections wrapped with smooth scrolling animations */}
      <main className="relative z-10">
        {/* HERO FEATURE SECTION */}
        <Hero />

        {/* SERVICES IMAGES/LISTINGS GALLERY */}
        <motion.div
          id="section-services-wrapper"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <ServicesGallery />
        </motion.div>

        {/* LIVE BUDGET CALCULATOR BLOCK */}
        <motion.div
          id="section-planner-wrapper"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <ProjectPlanner onPlanExport={handlePlanExport} />
        </motion.div>

        {/* SECURE HIGH-TECH BRIDGED CONTACT MODULE */}
        <motion.div
          id="section-contact-wrapper"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <ContactForm prepopulatedMessage={plannerMessage} />
        </motion.div>

        {/* TEAM MEMBERS GRID SECTION */}
        <motion.div
          id="section-team-wrapper"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Team />
        </motion.div>
      </main>

      {/* MINIMAL CYBER FOOTER */}
      <Footer />
    </div>
  );
}
