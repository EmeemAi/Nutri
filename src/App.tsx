/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Apple, 
  Instagram, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Phone, 
  Star, 
  Users, 
  Zap,
  ChevronRight,
  Menu,
  X,
  ArrowRight,
  Leaf,
  Heart,
  Award
} from "lucide-react";
import { useState, useEffect } from "react";
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link, 
  useLocation,
  useNavigate
} from "react-router-dom";

// --- Components ---

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Sobre Mí", path: "/sobre-mi" },
    { name: "Servicios", path: "/servicios" },
    { name: "Testimonios", path: "/testimonios" },
    { name: "Contacto", path: "/contacto" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "bg-white/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-emerald-900 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
            <Leaf className="w-5 h-5 text-emerald-50" />
          </div>
          <span className="text-xl font-serif font-bold tracking-tight text-emerald-950">Nutrición Integral</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium tracking-wide uppercase transition-colors ${
                location.pathname === link.path ? "text-emerald-700" : "text-stone-600 hover:text-emerald-700"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button 
            onClick={() => window.open('https://wa.me/1234567890', '_blank')}
            className="bg-emerald-900 text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-emerald-800 transition-all shadow-lg hover:shadow-emerald-900/20"
          >
            Reservar Turno
          </button>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-emerald-950">
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-stone-100 overflow-hidden"
          >
            <div className="px-6 py-8 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-2xl font-serif text-stone-800"
                >
                  {link.name}
                </Link>
              ))}
              <button 
                onClick={() => window.open('https://wa.me/1234567890', '_blank')}
                className="w-full bg-emerald-900 text-white py-4 rounded-xl font-bold uppercase tracking-widest"
              >
                Reservar Turno
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-stone-950 text-stone-400 py-20">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
      <div className="col-span-2">
        <div className="flex items-center gap-2 mb-6">
          <Leaf className="w-6 h-6 text-emerald-500" />
          <span className="text-xl font-serif font-bold text-white">Nutrición Integral</span>
        </div>
        <p className="max-w-sm text-stone-500 leading-relaxed mb-8">
          Acompañándote en el camino hacia una vida más plena, saludable y consciente a través de la alimentación basada en ciencia.
        </p>
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center hover:bg-emerald-500 hover:border-emerald-500 hover:text-white transition-all">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center hover:bg-emerald-500 hover:border-emerald-500 hover:text-white transition-all">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
      <div>
        <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Explorar</h4>
        <ul className="space-y-4 text-sm">
          <li><Link to="/sobre-mi" className="hover:text-emerald-500 transition-colors">Sobre Mí</Link></li>
          <li><Link to="/servicios" className="hover:text-emerald-500 transition-colors">Servicios</Link></li>
          <li><Link to="/testimonios" className="hover:text-emerald-500 transition-colors">Testimonios</Link></li>
          <li><Link to="/contacto" className="hover:text-emerald-500 transition-colors">Contacto</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Contacto</h4>
        <ul className="space-y-4 text-sm">
          <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-emerald-500" /> +54 9 11 1234-5678</li>
          <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-emerald-500" /> hola@nutricionintegral.com</li>
          <li className="flex items-center gap-3"><MapPin className="w-4 h-4 text-emerald-500" /> Palermo, Buenos Aires</li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-stone-900 text-center text-xs tracking-widest uppercase text-stone-600">
      © 2026 Nutrición Integral. Lic. María Paz.
    </div>
  </footer>
);

const PageTransition = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

// --- Pages ---

const Home = () => {
  const navigate = useNavigate();
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#fdfcf9]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-emerald-800 font-bold uppercase tracking-[0.3em] text-xs mb-6">Bienestar & Salud</h2>
              <h1 className="text-6xl md:text-8xl font-serif text-stone-900 leading-[0.95] mb-8">
                Nutre tu <br />
                <span className="italic text-emerald-900">esencia.</span>
              </h1>
              <p className="text-xl text-stone-600 mb-12 max-w-md leading-relaxed font-light">
                Descubre un enfoque elegante y científico para transformar tu salud sin renunciar al placer de comer bien.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <button 
                  onClick={() => navigate('/contacto')}
                  className="bg-emerald-900 text-white px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-emerald-800 transition-all shadow-xl shadow-emerald-900/10"
                >
                  Comenzar ahora
                </button>
                <button 
                  onClick={() => navigate('/servicios')}
                  className="group flex items-center gap-3 text-stone-900 font-bold text-sm uppercase tracking-widest"
                >
                  Ver servicios
                  <div className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </button>
              </div>
            </motion.div>
          </div>
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-3xl relative z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1000" 
                alt="Health" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-emerald-100 rounded-full blur-3xl opacity-60 -z-10"></div>
            <div className="absolute top-20 -left-20 w-40 h-40 bg-stone-200 rounded-full blur-3xl opacity-40 -z-10"></div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-screen bg-stone-50 -z-10"></div>
        <div className="absolute bottom-10 left-10 text-[10rem] font-serif text-stone-100 -z-10 select-none">01</div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-emerald-800 font-bold uppercase tracking-[0.3em] text-xs mb-4">Filosofía</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-stone-900">Salud sin restricciones.</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-16">
            {[
              { 
                icon: <Heart className="w-8 h-8" />, 
                title: "Consciencia", 
                desc: "Aprende a escuchar las señales de tu cuerpo y a nutrirlo con intención." 
              },
              { 
                icon: <Zap className="w-8 h-8" />, 
                title: "Energía", 
                desc: "Optimiza tu vitalidad diaria a través de nutrientes de alta calidad." 
              },
              { 
                icon: <Award className="w-8 h-8" />, 
                title: "Ciencia", 
                desc: "Protocolos basados en la última evidencia científica nutricional." 
              }
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className="w-20 h-20 mx-auto bg-stone-50 rounded-full flex items-center justify-center text-emerald-900 mb-8 group-hover:bg-emerald-900 group-hover:text-white transition-all duration-500">
                  {item.icon}
                </div>
                <h4 className="text-xl font-serif mb-4">{item.title}</h4>
                <p className="text-stone-500 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

const About = () => (
  <PageTransition>
    <section className="pt-40 pb-32 bg-[#fdfcf9]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800" 
                alt="Lic. María Paz" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-emerald-900 text-white p-10 rounded-3xl shadow-xl">
              <p className="text-4xl font-serif mb-1">8+</p>
              <p className="text-xs uppercase tracking-widest opacity-70">Años de Experiencia</p>
            </div>
          </div>
          <div>
            <h2 className="text-emerald-800 font-bold uppercase tracking-[0.3em] text-xs mb-6">Sobre Mí</h2>
            <h3 className="text-5xl font-serif text-stone-900 mb-8 leading-tight">Lic. María Paz</h3>
            <div className="space-y-6 text-lg text-stone-600 font-light leading-relaxed">
              <p>
                Mi pasión por la nutrición nació de la convicción de que lo que comemos define no solo nuestra salud física, sino nuestra claridad mental y bienestar emocional.
              </p>
              <p>
                Como Licenciada en Nutrición, he dedicado mi carrera a desmitificar las dietas de moda y reemplazarlas por hábitos sostenibles, elegantes y placenteros.
              </p>
              <p>
                Mi enfoque es holístico: considero tu estilo de vida, tus gustos y tus metas para crear un plan que se sienta como un regalo para ti mismo, no como una obligación.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-stone-200 pt-12">
              <div>
                <p className="font-bold text-stone-900 mb-2">Especialidad</p>
                <p className="text-stone-500 text-sm">Nutrición Clínica & Deportiva</p>
              </div>
              <div>
                <p className="font-bold text-stone-900 mb-2">Formación</p>
                <p className="text-stone-500 text-sm">Universidad de Buenos Aires</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </PageTransition>
);

const Services = () => (
  <PageTransition>
    <section className="pt-40 pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-emerald-800 font-bold uppercase tracking-[0.3em] text-xs mb-4">Propuesta</h2>
          <h3 className="text-5xl font-serif text-stone-900">Servicios Exclusivos</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {[
            {
              title: "Consultoría Premium",
              price: "Desde $5000",
              desc: "Análisis exhaustivo de composición corporal, laboratorio y diseño de plan 100% a medida.",
              features: ["Plan de alimentación", "Recetario digital", "Soporte WhatsApp 24/7"]
            },
            {
              title: "Nutrición Deportiva",
              price: "Desde $6500",
              desc: "Optimización de rendimiento para atletas amateurs y profesionales. Suplementación estratégica.",
              features: ["Timing nutricional", "Plan de hidratación", "Ajuste por competencia"]
            },
            {
              title: "Pack Bienestar (3 meses)",
              price: "Desde $12000",
              desc: "Acompañamiento intensivo para transformación de hábitos y descenso de peso sostenible.",
              features: ["6 sesiones quincenales", "Guía de compras", "Taller de cocina saludable"]
            },
            {
              title: "Plan Corporativo",
              price: "Consultar",
              desc: "Programas de bienestar para equipos de trabajo. Charlas y menús institucionales.",
              features: ["Workshops presenciales", "Auditoría de comedor", "Newsletter de salud"]
            }
          ].map((service, i) => (
            <div key={i} className="group bg-stone-50 p-12 rounded-[3rem] hover:bg-emerald-900 transition-all duration-700">
              <div className="flex justify-between items-start mb-8">
                <h4 className="text-3xl font-serif text-stone-900 group-hover:text-white transition-colors">{service.title}</h4>
                <span className="text-emerald-700 font-bold group-hover:text-emerald-300 transition-colors">{service.price}</span>
              </div>
              <p className="text-stone-500 mb-10 group-hover:text-emerald-100/70 transition-colors leading-relaxed">{service.desc}</p>
              <ul className="space-y-4 mb-12">
                {service.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-stone-700 group-hover:text-emerald-50 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-full border border-stone-200 text-stone-900 font-bold uppercase tracking-widest text-xs group-hover:bg-white group-hover:border-white transition-all">
                Saber más
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  </PageTransition>
);

const Testimonials = () => (
  <PageTransition>
    <section className="pt-40 pb-32 bg-[#fdfcf9]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-emerald-800 font-bold uppercase tracking-[0.3em] text-xs mb-4">Experiencias</h2>
          <h3 className="text-5xl font-serif text-stone-900">Voces de Cambio</h3>
        </div>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {[
            { name: "Julian P.", text: "El enfoque de María cambió mi vida. No solo bajé de peso, sino que recuperé mi energía para entrenar." },
            { name: "Andrea L.", text: "Elegante, profesional y muy humana. Sus recetas son increíbles y fáciles de seguir." },
            { name: "Marcos G.", text: "Como deportista, necesitaba precisión. El plan de suplementación fue la clave para mi último triatlón." },
            { name: "Sofía M.", text: "Por fin alguien que entiende que me gusta salir a comer. Aprendí a elegir sin culpa." },
            { name: "Ricardo F.", text: "Excelente atención online. Muy puntual y el material que entrega es de primer nivel." },
            { name: "Lucía V.", text: "Bajé 10kg en 4 meses y lo más importante: no los volví a subir. ¡Gracias!" }
          ].map((t, i) => (
            <div key={i} className="break-inside-avoid bg-white p-10 rounded-[2.5rem] shadow-sm border border-stone-100">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, idx) => <Star key={idx} className="w-3 h-3 text-amber-400 fill-amber-400" />)}
              </div>
              <p className="text-stone-600 italic mb-8 leading-relaxed">"{t.text}"</p>
              <p className="font-serif text-stone-900">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </PageTransition>
);

const Contact = () => (
  <PageTransition>
    <section className="pt-40 pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-stone-950 rounded-[4rem] overflow-hidden grid lg:grid-cols-2">
          <div className="p-16 lg:p-24 text-white">
            <h2 className="text-emerald-500 font-bold uppercase tracking-[0.3em] text-xs mb-8">Contacto</h2>
            <h3 className="text-5xl font-serif mb-12">Hablemos de tu futuro.</h3>
            
            <div className="space-y-10">
              <div className="flex items-center gap-6 group cursor-pointer" onClick={() => window.open('https://wa.me/1234567890', '_blank')}>
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-emerald-500 transition-all">
                  <MessageCircle className="w-6 h-6 text-emerald-500 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-stone-500 text-xs uppercase tracking-widest mb-1">WhatsApp</p>
                  <p className="text-xl font-serif">+54 9 11 1234-5678</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-emerald-500 transition-all">
                  <Mail className="w-6 h-6 text-emerald-500 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-stone-500 text-xs uppercase tracking-widest mb-1">Email</p>
                  <p className="text-xl font-serif">hola@nutricionintegral.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-emerald-500 transition-all">
                  <MapPin className="w-6 h-6 text-emerald-500 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-stone-500 text-xs uppercase tracking-widest mb-1">Ubicación</p>
                  <p className="text-xl font-serif">Palermo, Buenos Aires</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-stone-900 p-16 lg:p-24">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-stone-500 font-bold">Nombre Completo</label>
                <input type="text" className="w-full bg-transparent border-b border-stone-800 py-4 text-white focus:outline-none focus:border-emerald-500 transition-colors" placeholder="Tu nombre..." />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-stone-500 font-bold">Email</label>
                <input type="email" className="w-full bg-transparent border-b border-stone-800 py-4 text-white focus:outline-none focus:border-emerald-500 transition-colors" placeholder="tu@email.com" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-stone-500 font-bold">Mensaje</label>
                <textarea className="w-full bg-transparent border-b border-stone-800 py-4 text-white focus:outline-none focus:border-emerald-500 transition-colors h-32 resize-none" placeholder="¿En qué puedo ayudarte?"></textarea>
              </div>
              <button className="w-full bg-emerald-500 text-stone-950 py-5 rounded-2xl font-bold uppercase tracking-widest hover:bg-emerald-400 transition-all mt-8">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </PageTransition>
);

// --- Main App ---

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#fdfcf9] font-sans selection:bg-emerald-100 selection:text-emerald-900">
        <Navbar />
        <main>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre-mi" element={<About />} />
              <Route path="/servicios" element={<Services />} />
              <Route path="/testimonios" element={<Testimonials />} />
              <Route path="/contacto" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
        
        {/* Floating WhatsApp */}
        <button 
          onClick={() => window.open('https://wa.me/1234567890', '_blank')}
          className="fixed bottom-10 right-10 z-50 w-16 h-16 bg-emerald-500 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all hover:bg-emerald-600"
        >
          <MessageCircle className="w-8 h-8" />
        </button>
      </div>
    </Router>
  );
}
