import { useState, useEffect } from 'react';
import { 
  Instagram, 
  MapPin, 
  Clock, 
  ChevronDown, 
  Star, 
  Menu as MenuIcon, 
  X, 
  ShoppingBag, 
  ChevronRight,
  MessageCircle,
  HelpCircle,
  UtensilsCrossed,
  Utensils,
  Pizza,
  Wine,
  Waves,
  Palette,
  ChefHat,
  Timer,
  Volume2,
  VolumeX,
  Medal,
  Award,
  BookOpen as School,
  TreePine as Trees
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'O Restaurante', href: '#' },
    { name: 'Pizzas', href: '#pizzas' },
    { name: 'Cozinha', href: '#cucina' },
    { name: 'Bebidas', href: '#bebidas' },
    { name: 'Localização', href: '#localizacao' },
    { name: 'Reservas', href: '#contato' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* Top Info Bar */}
      <div className="bg-mare-navy py-1.5 px-6 flex justify-center items-center gap-4 text-white overflow-hidden whitespace-nowrap">
        <motion.div 
          animate={{ x: [800, -800] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          className="flex gap-12 font-medium text-[10px] uppercase tracking-[0.2em]"
        >
          <span>🇮🇹 Gastronomia Mediterrânea na Praia do Francês</span>
          <span>🍕 Pizzas Artesanais com Fermentação Lenta</span>
          <span>🍹 Happy Hour & Drinks Autorais</span>
          <span>🎶 Música ao Vivo todas as noites</span>
          <span>🌊 Aberto para o jantar</span>
        </motion.div>
      </div>

      <nav className={`transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-xl py-3 border-b border-mare-navy/5' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4 group cursor-pointer">
             <div className="logo-shine logo-reflection logo-float bg-white rounded-full p-0.5 shadow-xl border border-mare-navy/5 overflow-hidden">
                <img 
                  src="https://res.cloudinary.com/dqfnkztbe/image/upload/q_auto/f_auto/v1779154598/WhatsApp_Image_2026-05-18_at_10.29.56_PM_gixtrw.jpg" 
                  alt="Maré Mangiare Logo" 
                  className="w-14 h-14 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
             </div>
             <div className="flex flex-col">
                <span className={`font-display font-bold text-xl uppercase tracking-widest transition-colors ${isScrolled ? 'text-mare-navy' : 'text-mare-navy md:text-white'}`}>
                  Maré Mangiare
                </span>
                <span className="text-[8px] uppercase tracking-[0.4em] font-bold text-mare-orange">
                  Gastrobar & Pizzeria
                </span>
             </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`font-semibold text-[11px] uppercase tracking-[0.15em] transition-all hover:text-mare-orange relative group ${isScrolled ? 'text-mare-navy' : 'text-mare-navy'}`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-mare-orange transition-all group-hover:w-full"></span>
              </a>
            ))}
            <a 
              href="https://wa.me/5582991092725"
              target="_blank"
              className="btn-whatsapp btn-shine text-white px-7 py-3 rounded-full font-bold text-[11px] uppercase tracking-widest shadow-xl hover:shadow-[#25D366]/30 transition-all hover:-translate-y-1 active:scale-95"
            >
              <MessageCircle size={14} /> Reservar Mesa
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={`md:hidden ${isScrolled ? 'text-mare-navy' : 'text-mare-navy'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="absolute top-full left-4 right-4 bg-white rounded-3xl border border-mare-navy/5 p-8 md:hidden flex flex-col gap-6 shadow-2xl mt-4"
            >
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-mare-navy py-4 border-b border-mare-navy/5 font-bold uppercase text-xs tracking-widest flex justify-between items-center group"
                >
                  {link.name}
                  <ChevronRight size={16} className="text-mare-orange opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
              <a 
                href="https://wa.me/5582991092725"
                target="_blank"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-whatsapp btn-shine text-white p-5 rounded-2xl font-bold text-center mt-4 uppercase text-xs tracking-widest shadow-xl"
              >
                Garantir minha reserva
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

const Hero = () => {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Immersive BG overlay */}
      <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-mare-cream/90 backdrop-blur-3xl z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-20">
        {/* Left Column: Text Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 text-center lg:text-left z-30"
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-mare-orange/15 px-5 py-2 rounded-full mb-10 shadow-sm border border-mare-orange/10"
          >
            <span className="w-2 h-2 bg-mare-orange rounded-full animate-pulse" />
            <span className="text-mare-orange font-bold text-[11px] uppercase tracking-[0.2em] italic text-center md:text-left">
              A melhor experiência da Rua Carapeba
            </span>
          </motion.div>
          
          <h1 className="text-5xl md:text-[6.5rem] lg:text-[7.5rem] text-mare-gold mb-10 font-bold leading-[0.8] tracking-tighter mix-blend-multiply">
            Maresia, <br />
            <span className="text-mare-orange italic serif decoration-mare-orange/10 underline underline-offset-8">Vinho</span> e <br />
            Alta <span className="text-mare-teal">Pizza</span>.
          </h1>
          
          <p className="text-lg md:text-xl text-mare-navy/60 mb-14 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed italic">
            Onde a alta gastronomia italiana encontra o lifestyle praiano. Tradição, brisa e sabores inesquecíveis.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center">
            <a 
              href="https://www.ifood.com.br/delivery/marechal-deodoro-al/restaurante-e-pizzaria-mare-mangiare-praia-do-frances-praia-do-frances/013fd2ba-02cd-43a4-8afb-36a291c64790" 
              target="_blank"
              className="btn-ifood btn-shine px-14 py-7 rounded-2xl font-bold text-[12px] shadow-2xl transition-all hover:-translate-y-1 active:scale-95 uppercase tracking-[0.25em] w-full sm:w-auto text-center"
            >
              <ShoppingBag size={24} />
              Pedir agora
            </a>
            <a 
              href="https://www.ifood.com.br/delivery/marechal-deodoro-al/restaurante-e-pizzaria-mare-mangiare-praia-do-frances-praia-do-frances/013fd2ba-02cd-43a4-8afb-36a291c64790" 
              target="_blank"
              className="bg-white/50 backdrop-blur-sm border-2 border-mare-orange/20 text-mare-orange px-14 py-7 rounded-2xl font-bold text-[12px] transition-all hover:-translate-y-1 active:scale-95 uppercase tracking-[0.25em] shadow-xl w-full sm:w-auto text-center inline-flex items-center justify-center gap-3"
            >
              <Utensils size={24} />
              Menu iFood
            </a>
          </div>
        </motion.div>

        {/* Right Column: Three Videos Side-by-Side - Larger */}
        <div className="lg:col-span-7 relative flex justify-center lg:justify-end gap-4 md:gap-6 items-center h-[600px] md:h-[750px] pt-12 lg:pt-0">
             {[
               "https://res.cloudinary.com/dqfnkztbe/video/upload/q_auto/f_auto/v1779154622/SnapInsta.to_AQMjqvbzv7xuZBzxIje_C8HUahVhLA0yWbUyugSN8IpxCgAbbVzaEyjF-VekVjaZ9oOClZEeQtQg1BhhawoqdSOO0R63CGKVYPm8xyw_hsmn4r.mp4",
               "https://res.cloudinary.com/dqfnkztbe/video/upload/q_auto/f_auto/v1779157594/SnapInsta.to_AQNDFfS8jltBGHy93wt9vXX5rifYkTP0gORv5HNgFFXNj7oO63-qKFpW-krEyf-6aEOmh19zSnlBpz00kRx6Q8xdN1phgcLoOnKGqHY_gmdbwy.mp4",
               "https://res.cloudinary.com/dqfnkztbe/video/upload/q_auto/f_auto/v1779157621/SnapInsta.to_AQNVHCXs9fmyZHDCrW7WvlkEqFLYwW-y6y4MGamtSqkUYmJrGo59pz-eSqt22GKYgSwbXHQ8hO_x93rd9rfXVNYBHw7eZi3rp5oLX1Y_qfowhr.mp4"
             ].map((vid, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 100, rotate: idx % 2 === 0 ? -3 : 3 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.4 + idx * 0.15 }}
                  className={`relative w-1/3 aspect-[9/16] rounded-[40px] md:rounded-[60px] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.7)] z-20 border-4 md:border-[10px] border-white backdrop-blur-md ${idx === 1 ? 'z-30 scale-125 -translate-y-16 mx-[-5%]' : 'z-10 opacity-70 mt-20'}`}
                >
                    <video 
                        src={vid} 
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-mare-navy/80 via-transparent to-transparent pointer-events-none opacity-60" />
                </motion.div>
             ))}

            {/* Floating Tag */}
            <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute -right-8 top-0 z-40 bg-white/95 backdrop-blur-2xl px-6 py-5 rounded-[28px] shadow-2xl border border-white max-w-[160px] hidden xl:block"
            >
                <Star className="text-mare-orange mb-3" size={24} fill="currentColor" />
                <h4 className="text-mare-navy font-bold text-[11px] leading-tight italic uppercase tracking-wider">A melhor Pizzaria de Marechal</h4>
            </motion.div>
        </div>
      </div>
      
      {/* Visual Accents */}
      <div className="absolute -bottom-40 -left-20 w-[600px] h-[600px] bg-mare-orange/5 rounded-full blur-[150px] -z-0 opacity-50" />
      <div className="absolute -top-40 -right-20 w-[800px] h-[800px] bg-mare-teal/5 rounded-full blur-[150px] -z-0 opacity-30" />
    </section>
  );
};

const GoogleReviewsSection = () => {
    const reviews = [
        {
            name: "Samuel Fragoso",
            comment: "Experiência maravilhosa na Pizzaria e Massas Maré Mangiare! Massas e pizzas extremamente saborosas, com ingredientes de qualidade e muito bem preparados. O atendimento foi impecável.",
            stars: 5,
            role: "Local Guide"
        },
        {
            name: "Bruna Gomes",
            comment: "Absolutamente sensacional! Fomos duas vezes durante nossas férias de uma semana. Um dos melhores atendimentos que já tivemos.",
            stars: 5,
            role: "7 avaliações"
        },
        {
            name: "Jessica Daianne",
            comment: "Comida incrível e atendimento maravilhoso. Amamos. Meu pedido foi o maré mangiare e a pizza! Tudo no ponto e muito bem elaborado!",
            stars: 5,
            role: "Local Guide"
        },
        {
            name: "Viana",
            comment: "Experiência muito boa, a equipe toda é solicita, e a comida surreal, vale cada centavo. Bebam a caipifruta de frutas vermelhas!",
            stars: 5,
            role: "5 avaliações"
        },
        {
            name: "Ewerton Rodrigues",
            comment: "A principal característica do local é o acolhimento. Somos recebidos calorosamente pelas meninas, com uma recepção inigualável.",
            stars: 5,
            role: "4 avaliações"
        },
        {
            name: "Débora Oliveira",
            comment: "Atendimento incrível, experiência surreal de delicioso! Tudo maravilhoso! Me surpreendi com cada sabor e textura! Perfeição!",
            stars: 5,
            role: "Local Guide"
        },
        {
            name: "Josi Vital",
            comment: "Minha melhor experiência gastronômica na Praia do Francês, a bruschetta de camarão estava surrral de gostosa, todos os pratos divinos.",
            stars: 5,
            role: "Local Guide"
        },
        {
            name: "ANA LUCIA Lima",
            comment: "Nossa, como não amar esse restaurante! Aconchegante, atendimento impecável, comida saborosa. Gostamos tanto que fomos duas vezes.",
            stars: 5,
            role: "Local Guide"
        },
        {
            name: "Aline Oliveira",
            comment: "Adorei a experiência por completo. A pizza Portuguesa com tapenade de azeitonas pretas é nota 10.",
            stars: 5,
            role: "Local Guide"
        },
        {
            name: "Tatiana Sampaio",
            comment: "Ambiente maravilhoso, comida excepcional, atendimento perfeito. Cozinha requintada e com explosão de sabores.",
            stars: 5,
            role: "3 avaliações"
        }
    ];

    return (
        <section className="py-20 bg-white overflow-hidden border-b border-mare-navy/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8 text-center md:text-left">
                    <div>
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                            <div className="flex text-mare-orange">
                                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                            </div>
                            <span className="text-mare-navy/40 font-bold text-[10px] uppercase tracking-widest">Google Reviews</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl text-mare-navy serif italic leading-tight">O Que <span className="text-mare-gold">Amam</span> <br />no Maré Mangiare</h2>
                    </div>
                    <a 
                        href="https://www.google.com/search?q=Mare+Mangiare+Praia+do+Frances+Avaliações" 
                        target="_blank"
                        className="btn-shine btn-ifood px-10 py-5 rounded-full font-bold text-[11px] uppercase tracking-widest shadow-2xl flex items-center gap-3 hover:scale-105 active:scale-95 transition-all"
                    >
                        <Star size={16} fill="currentColor" /> AVALIAR NO GOOGLE
                    </a>
                </div>

                <div className="flex gap-6 overflow-x-auto no-scrollbar pb-10 -mx-6 px-6 cursor-grab active:cursor-grabbing">
                    {reviews.map((rev, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="min-w-[320px] md:min-w-[420px] bg-mare-cream/30 p-10 rounded-[40px] border border-mare-navy/5 shadow-xl flex flex-col justify-between group hover:border-mare-orange/20 transition-all"
                        >
                            <div>
                                <div className="flex gap-1 text-mare-orange mb-8">
                                    {[...Array(rev.stars)].map((_, s) => <Star key={s} size={14} fill="currentColor" />)}
                                </div>
                                <p className="text-mare-navy/80 text-base md:text-xl italic leading-relaxed mb-10">
                                    "{rev.comment}"
                                </p>
                            </div>
                            <div className="flex items-center gap-5 border-t border-mare-navy/5 pt-8">
                                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-mare-navy font-bold shadow-lg border border-mare-navy/5 text-lg group-hover:bg-mare-navy group-hover:text-white transition-colors">
                                    {rev.name[0]}
                                </div>
                                <div>
                                    <h4 className="font-bold text-mare-navy text-[11px] uppercase tracking-widest mb-1">{rev.name}</h4>
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-mare-orange rounded-full" />
                                        <p className="text-[9px] text-mare-navy/40 font-bold uppercase tracking-widest">{rev.role}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="flex justify-center md:hidden mt-4">
                    <div className="flex gap-2">
                        <div className="w-8 h-1 bg-mare-orange rounded-full" />
                        <div className="w-2 h-1 bg-mare-navy/10 rounded-full" />
                        <div className="w-2 h-1 bg-mare-navy/10 rounded-full" />
                        <div className="w-2 h-1 bg-mare-navy/10 rounded-full" />
                    </div>
                </div>
            </div>
        </section>
    );
};

const CategoriesGrid = () => {
  const experiences = [
    { title: "Pizzaria Artesanal", desc: "Longa fermentação e ingredientes importados.", icon: <Pizza />, color: "bg-mare-orange/5" },
    { title: "Gastrobar", desc: "Drinks autorais e uma carta de vinhos selecionada.", icon: <Wine />, color: "bg-mare-gold/5" },
    { title: "Cozinha Praiana", desc: "O frescor do mar direto para sua mesa.", icon: <UtensilsCrossed />, color: "bg-mare-teal/5" }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {experiences.map((exp, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            key={i}
            className={`${exp.color} p-10 rounded-[40px] border border-mare-navy/5 flex flex-col items-center text-center group hover:scale-[1.02] transition-all duration-500`}
          >
            <div className="w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
              <span className="text-mare-navy">{exp.icon}</span>
            </div>
            <h3 className="text-2xl font-display text-mare-navy mb-4 italic">{exp.title}</h3>
            <p className="text-mare-navy/50 text-sm leading-relaxed">{exp.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const PizzaSection = () => {
  const [activeTab, setActiveTab] = useState('pizzas_premium');
  const [currentImg, setCurrentImg] = useState(0);

  const pizzaImages = [
    "https://res.cloudinary.com/dqfnkztbe/image/upload/q_auto/f_auto/v1779160193/WhatsApp_Image_2026-05-19_at_12.06.24_AM_2_vyjkep.jpg",
    "https://res.cloudinary.com/dqfnkztbe/image/upload/q_auto/f_auto/v1779160193/WhatsApp_Image_2026-05-19_at_12.06.25_AM_duxksc.jpg",
    "https://res.cloudinary.com/dqfnkztbe/image/upload/q_auto/f_auto/v1779160193/WhatsApp_Image_2026-05-19_at_12.06.25_AM_1_gnepca.jpg",
    "https://res.cloudinary.com/dqfnkztbe/image/upload/q_auto/f_auto/v1779160193/WhatsApp_Image_2026-05-19_at_12.06.24_AM_1_jyhial.jpg",
    "https://res.cloudinary.com/dqfnkztbe/image/upload/q_auto/f_auto/v1779160193/WhatsApp_Image_2026-05-19_at_12.06.24_AM_jibnob.jpg",
    "https://res.cloudinary.com/dqfnkztbe/image/upload/q_auto/f_auto/v1779160193/WhatsApp_Image_2026-05-19_at_12.06.24_AM_3_hwkanf.jpg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % pizzaImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [pizzaImages.length]);

  const categories = [
    { id: 'pizzas_tradicionais', label: 'Tradicionais' },
    { id: 'pizzas_especiais', label: 'Especiais' },
    { id: 'pizzas_premium', label: 'Premium' },
    { id: 'pizzas_veganas', label: 'Veganas' },
    { id: 'pizzas_doces', label: 'Doces' },
    { id: 'adicionais', label: 'Adicionais' }
  ];

  const menu = {
    pizzas_tradicionais: [
      { name: "Portuguesa", price: "R$ 59 - 79", desc: "Presunto, ovos, cebola roxa, tapenade de azeitonas, molho artesanal e mozzarella." },
      { name: "Margherita de Búfala", price: "R$ 59 - 79", desc: "Mozzarella de búfala, molho artesanal, manjericão basílico e parmesão." },
      { name: "Rústica Calabrese", price: "R$ 59 - 79", desc: "Calabresa fatiada, cebola roxa, molho artesanal, mozzarella e orégano." },
      { name: "Mozzarella", price: "R$ 59 - 79", desc: "Molho de tomate da casa e mozzarella artesanal. Finalizada com manjericão e orégão." },
      { name: "Bella Napoli", price: "R$ 59 - 79", desc: "Mozzarella artesanal, rúcula e molho de tomate da casa." }
    ],
    pizzas_especiais: [
      { name: "Caprese", price: "R$ 69 - 94", desc: "Mozzarella, parmesão, tomate, mozzarella de búfala, tapenade e manjericão." },
      { name: "Granjeira", price: "R$ 69 - 94", desc: "Frango desfiado, molho pomodoro, mussarela, Catupiry original e orégão." },
      { name: "Romanesca", price: "R$ 69 - 94", desc: "Lombinho canadense defumado, molho artesanal, mozzarella e Catupiry original." },
      { name: "Terra d'Oro", price: "R$ 69 - 94", desc: "Milho verde, bacon, molho artesanal, mozzarella e Catupiry original." },
      { name: "Zuccini ao Parmegiano", price: "R$ 69 - 94", desc: "Molho de tomate da casa, mussarela, abobrinha no azeite e ervas, e parmesão." }
    ],
    pizzas_premium: [
      { name: "7 Mares", price: "R$ 129 - 174", desc: "Mussarela, camarão, lula e polvo selados no azeite. Finalizada com camarões e limão siciliano." },
      { name: "Suprema", price: "R$ 82 - 109", desc: "Quatro queijos, Catupiry original, bacon, mel e alecrim sobre pizza bianca." },
      { name: "Gamberetto", price: "R$ 82 - 109", desc: "Camarões salteados, Catupiry original, molho artesanal e mozzarella. Com salsa fresca." },
      { name: "Rainha do Sertão", price: "R$ 82 - 109", desc: "Carne de sol na manteiga de garrafa, molho artesanal, mozzarella e Catupiry original." },
      { name: "Parma", price: "R$ 82 - 109", desc: "Presunto de Parma, molho de tomate da casa e mozzarella artesanal." },
      { name: "Mel e Parma", price: "R$ 82 - 109", desc: "Presunto de Parma, mel levemente picante, molho artesanal e mozzarella." },
      { name: "Primavera Toscana", price: "R$ 82 - 109", desc: "Tomates confitados, molho pesto, presunto de Parma, molho artesanal e mozzarella." },
      { name: "Amore Mio", price: "R$ 82 - 109", desc: "Pizza bianca, pera laminada, mozzarella, gorgonzola, mel e nozes." },
      { name: "Filleto", price: "R$ 82 - 109", desc: "Iscas de filé mignon, mozzarella, molho artesanal, parmesão e gorgonzola." },
      { name: "Imperialle", price: "R$ 82 - 109", desc: "Pizza bianca, mussarela, queijo do reino e geleia artesanal de pimenta vermelha." }
    ],
    pizzas_veganas: [
      { name: "Zucchini Vegana", price: "R$ 69 - 89", desc: "Finas fatias de abobrinha salteadas em azeite de ervas sobre molho artesanal." }
    ],
    pizzas_doces: [
      { name: "Festa Veneta", price: "R$ 82 - 109", desc: "Creme de Ninho, bombons Sonho de Valsa, gotas de chocolate meio amargo e morangos." },
      { name: "Dulce de Leche", price: "R$ 82 - 109", desc: "Fatias de banana com doce de leite argentino, canela e flor de sal." },
      { name: "Floresta Negra", price: "R$ 82 - 109", desc: "Creme de chocolate branco, raspas de chocolate ao leite, morangos e cerejas." },
      { name: "Chocolatuda", price: "R$ 82 - 109", desc: "Nutella, chocolate meio amargo e brownie de chocolate." }
    ],
    adicionais: [
      { name: "Presunto de Parma", price: "R$ 30", desc: "Adicional premium." },
      { name: "Mozzarella Búfala / Catupiry", price: "R$ 24", desc: "Opções de queijos extras." },
      { name: "Gorgonzola / Mozzarella", price: "R$ 20", desc: "Opções de queijos tradicionais." },
      { name: "Torradinhas da Casa", price: "R$ 14", desc: "Acompanhamento extra." },
      { name: "Pesto / Bacon / Rúcula", price: "R$ 8-12", desc: "Toques finais." }
    ]
  };

  return (
    <section id="pizzas" className="py-24 px-6 bg-mare-navy text-white relative">
       <div className="max-w-6xl mx-auto relative z-10 text-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-mare-orange mb-6 inline-block italic">La Maestra Pizzeria</span>
            <h2 className="text-5xl md:text-7xl mb-12 serif italic text-mare-orange">As Pizzas</h2>
            
            {/* Auto Alternating Image Showcase */}
            <div className="max-w-4xl mx-auto mb-16 px-4">
                <div className="relative aspect-video rounded-[32px] md:rounded-[60px] overflow-hidden shadow-[0_30px_100px_-20px_rgba(234,182,118,0.3)] border-4 border-white/5 group">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={currentImg}
                            src={pizzaImages[currentImg]}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 1.2, ease: "easeInOut" }}
                            className="absolute inset-0 w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                        />
                    </AnimatePresence>
                    <div className="absolute inset-0 bg-gradient-to-t from-mare-navy/60 via-transparent to-transparent" />
                    
                    {/* Visual Indicators */}
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
                        {pizzaImages.map((_, i) => (
                            <div 
                                key={i} 
                                className={`h-1 rounded-full transition-all duration-500 ${i === currentImg ? 'w-8 bg-mare-orange' : 'w-2 bg-white/30'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex justify-center gap-2 mb-16 overflow-x-auto no-scrollbar pb-4 px-4">
                {categories.map((cat) => (
                    <button 
                        key={cat.id}
                        onClick={() => setActiveTab(cat.id)}
                        className={`px-6 py-3 rounded-full font-bold text-[9px] md:text-[10px] uppercase tracking-widest transition-all whitespace-nowrap ${activeTab === cat.id ? 'bg-mare-orange text-white shadow-xl scale-105' : 'bg-white/10 text-white/50 hover:bg-white/20'}`}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 text-left">
                <AnimatePresence mode="wait">
                    <motion.div 
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="col-span-full grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10"
                    >
                        {menu[activeTab as keyof typeof menu] ? menu[activeTab as keyof typeof menu].map((item, idx) => (
                            <div key={item.name} className="group">
                                <div className="flex justify-between items-baseline mb-2 gap-4">
                                    <h4 className="text-lg md:text-xl font-display group-hover:text-mare-orange transition-colors duration-300 italic">{item.name}</h4>
                                    <div className="flex-1 border-b border-white/10 translate-y-[-4px]" />
                                    <span className="font-bold text-mare-orange whitespace-nowrap">{item.price}</span>
                                </div>
                                <p className="text-xs text-white/40 font-medium leading-relaxed italic">{item.desc}</p>
                            </div>
                        )) : null}
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="mt-20 flex flex-col sm:flex-row justify-center items-center gap-6">
                <a href="https://wa.me/5582991092725" target="_blank" className="btn-whatsapp btn-shine px-8 py-4 rounded-full transition-all font-bold text-[11px] uppercase tracking-widest group w-full sm:w-auto justify-center">
                    <MessageCircle size={18} />
                    WhatsApp Maré
                    <ChevronRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </a>
                <a href="https://www.ifood.com.br/delivery/marechal-deodoro-al/restaurante-e-pizzaria-mare-mangiare-praia-do-frances-praia-do-frances/013fd2ba-02cd-43a4-8afb-36a291c64790" target="_blank" className="btn-ifood btn-shine px-8 py-4 rounded-full transition-all font-bold text-[11px] uppercase tracking-widest group w-full sm:w-auto justify-center">
                    <ShoppingBag size={18} />
                    Pedir no iFood
                </a>
            </div>
       </div>
    </section>
  );
};

const CucinaSection = () => {
  const [activeTab, setActiveTab] = useState('entradas');

  const cucinaImages = [
    "https://res.cloudinary.com/dqfnkztbe/image/upload/q_auto/f_auto/v1779158988/WhatsApp_Image_2026-05-18_at_11.45.16_PM_1_jhq6vp.jpg",
    "https://res.cloudinary.com/dqfnkztbe/image/upload/q_auto/f_auto/v1779158988/WhatsApp_Image_2026-05-18_at_11.45.16_PM_j30b0u.jpg",
    "https://res.cloudinary.com/dqfnkztbe/image/upload/q_auto/f_auto/v1779159008/WhatsApp_Image_2026-05-18_at_11.45.19_PM_1_gc9asz.jpg",
    "https://res.cloudinary.com/dqfnkztbe/image/upload/q_auto/f_auto/v1779159008/WhatsApp_Image_2026-05-18_at_11.45.19_PM_2_bo5vxw.jpg",
    "https://res.cloudinary.com/dqfnkztbe/image/upload/q_auto/f_auto/v1779159009/WhatsApp_Image_2026-05-18_at_11.45.18_PM_1_farw8s.jpg",
    "https://res.cloudinary.com/dqfnkztbe/image/upload/q_auto/f_auto/v1779159009/WhatsApp_Image_2026-05-18_at_11.45.18_PM_3_rsg53x.jpg",
    "https://res.cloudinary.com/dqfnkztbe/image/upload/q_auto/f_auto/v1779159009/WhatsApp_Image_2026-05-18_at_11.45.18_PM_2_lzxpq5.jpg",
    "https://res.cloudinary.com/dqfnkztbe/image/upload/q_auto/f_auto/v1779159009/WhatsApp_Image_2026-05-18_at_11.45.17_PM_4_gyguq2.jpg",
    "https://res.cloudinary.com/dqfnkztbe/image/upload/q_auto/f_auto/v1779159010/WhatsApp_Image_2026-05-18_at_11.45.17_PM_2_xukhjg.jpg",
    "https://res.cloudinary.com/dqfnkztbe/image/upload/q_auto/f_auto/v1779159010/WhatsApp_Image_2026-05-18_at_11.45.17_PM_1_koluk8.jpg",
    "https://res.cloudinary.com/dqfnkztbe/image/upload/q_auto/f_auto/v1779159010/WhatsApp_Image_2026-05-18_at_11.45.17_PM_3_q0fd59.jpg",
    "https://res.cloudinary.com/dqfnkztbe/image/upload/q_auto/f_auto/v1779159010/WhatsApp_Image_2026-05-18_at_11.45.17_PM_lownsa.jpg"
  ];

  const categories = [
    { id: 'entradas', label: 'Entradas' },
    { id: 'petiscos', label: 'Petiscos' },
    { id: 'individuais', label: 'Individuais' },
    { id: 'compartilhados', label: 'Compartilhados' },
    { id: 'sobremesas', label: 'Sobremesas' },
    { id: 'kids', label: 'Kids' }
  ];

  const menu = {
    entradas: [
      { name: "Caldinho do Maré", price: "R$ 18", desc: "Filé de siri, polvo, sururu ou feijão." },
      { name: "Salada do Maré", price: "R$ 39", desc: "Mix de folhas verdes, tomate cereja, castanha de caju, parmesão e molho mostarda e mel." },
      { name: "Pizza Branca", price: "R$ 39", desc: "Massa fina com gorgonzola, parmesão e alecrim. Acompanha pesto e geleia de pimenta." },
      { name: "Salada Caprese", price: "R$ 38", desc: "Alface, rúcula, tomates, mozzarella de búfala em cubos e molho pesto." },
      { name: "Carpaccio", price: "R$ 67", desc: "Crudo de carne bovina, molho agridoce, rúcula, alcaparras e parmesão. Acompanha pizza branca." },
      { name: "Bruschettas de Polvo", price: "R$ 69", desc: "Creme de ricota com limão siciliano, polvo finalizado com aioli de wasabi e coentro." },
      { name: "Bruschettas de Camarão", price: "R$ 59", desc: "Creme de ricota, tomate confitado, manjericão e raspas de limão siciliano." }
    ],
    petiscos: [
      { name: "Camarão La Rue", price: "R$ 109", desc: "Filé de camarão empanado na panko, batata frita e molho rosé ou geleia de pimenta." },
      { name: "Lula Dorê", price: "R$ 59", desc: "Anéis de lula empanados acompanhados de aioli de wasabi." },
      { name: "Pastéis de Camarão (6 un)", price: "R$ 59", desc: "Servidos com pesto da casa, rosé ou geleia de pimenta." }
    ],
    individuais: [
      { name: "Massa Negra e Camarão", price: "R$ 94", desc: "Nero di seppia ao molho bisque, camarões salteados e farofa panko cítrica com parma." },
      { name: "Massa da Chef", price: "R$ 84", desc: "Fettuccine ao pesto de amêndoas e limão siciliano, camarões empanados e aioli de alho negro." },
      { name: "Risoto de Limão e Camarão", price: "R$ 84", desc: "Risoto cremoso de limão siciliano com camarões crocantes." },
      { name: "Poseidon", price: "R$ 84", desc: "Arroz negro de polvo finalizado com aioli, aioli de alho negro e limão siciliano." },
      { name: "Massa ao Alfredo", price: "R$ 79-89", desc: "Fettuccine com 3 queijos, amêndoas e brotos. Com Filé ou Camarão." },
      { name: "Risoto Cabra da Peste", price: "R$ 84", desc: "Abóbora, carne de sol, queijo coalho frito, manteiga de garrafa e coentro." },
      { name: "Filé & Aligot", price: "R$ 79", desc: "Filé mignon com aligot (purê de queijo) e molho demi-glace." },
      { name: "File Demi & Parma", price: "R$ 66", desc: "Filé mignon com molho demi-glace, fettuccine grano duro e farofa de parma." },
      { name: "Risoto de Filé e Funghi", price: "R$ 84", desc: "Arroz arbóreo, tiras de filé mignon e funghi porcini." }
    ],
    compartilhados: [
      { name: "Banquete do Mar (3 pes)", price: "R$ 299", desc: "Lagosta, polvo, lula, camarão, mexilhão e peixe. O tesouro da casa." },
      { name: "Tesouro do Mar", price: "R$ 189", desc: "Linguine com molho de queijos, filé de camarão e lagostim. (Individual: R$ 109)" },
      { name: "Maré Mangiare", price: "R$ 149", desc: "Massa artesanal com lula, polvo, camarão e molho pomodoro caseiro. (Individual: R$ 89)" },
      { name: "Espaguete de Marinheiro", price: "R$ 149", desc: "Mix de frutos do mar: lula, polvo, camarão e mexilhão. (Individual: R$ 89)" },
      { name: "Chiclete de Camarão", price: "R$ 159", desc: "Purê de queijo cremoso com camarão, arroz e batata palha. (Individual: R$ 89)" },
      { name: "Massa à Bolonhesa", price: "R$ 59", desc: "Carne moída com molho artesanal e massa longa. (Individual: R$ 44)" }
    ],
    sobremesas: [
      { name: "Chave de Ouro", price: "R$ 79", desc: "Calzone de Nutella, pistache, morangos, leite Ninho, sorvete e castanhas." },
      { name: "Leão do Norte", price: "R$ 42", desc: "Bolo de rolo frito na manteiga, sorvete de queijo e calda quente de goiabada." },
      { name: "Do Norte ao Nordeste", price: "R$ 49", desc: "Cocada cremosa, sorvete de cumaru, biscoito Maragogi e dose de cachaça jambu." },
      { name: "Doce Maré", price: "R$ 39", desc: "Brownie de chocolate amargo, sorvete de creme, leite Ninho e morangos." }
    ],
    kids: [
      { name: "Pizza Kids", price: "R$ 69", desc: "Pizza P com creme de leite Ninho e toppings para a criança finalizar." },
      { name: "Macarrão ao Pomodoro", price: "R$ 39", desc: "Massa suave com molho de tomate fresco da casa." }
    ]
  };

  return (
    <section id="cucina" className="py-24 px-6 bg-white relative">
      <div className="max-w-7xl mx-auto relative z-10 text-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-mare-orange mb-6 inline-block italic">Cucina Mediterranea</span>
            <h2 className="text-5xl md:text-7xl text-mare-gold mb-12 serif italic">A Cozinha</h2>

            <div className="flex gap-4 overflow-x-auto no-scrollbar pb-10 -mx-6 px-6 mb-16 cursor-grab active:cursor-grabbing">
                {cucinaImages.map((img, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        className="min-w-[280px] md:min-w-[400px] aspect-square overflow-hidden group rounded-[32px] md:rounded-[48px] shadow-2xl relative"
                    >
                        <img 
                            src={img} 
                            alt={`Cozinha ${i}`} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-mare-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                ))}
            </div>

            <div className="max-w-6xl mx-auto">
                <div className="flex justify-center gap-2 mb-16 overflow-x-auto no-scrollbar pb-4 px-4">
                {categories.map((cat) => (
                    <button 
                        key={cat.id}
                        onClick={() => setActiveTab(cat.id)}
                        className={`px-6 py-3 rounded-full font-bold text-[9px] md:text-[10px] uppercase tracking-widest transition-all whitespace-nowrap ${activeTab === cat.id ? 'bg-mare-navy text-white shadow-xl scale-105' : 'bg-mare-cream text-mare-navy/50 hover:bg-mare-navy/5'}`}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 text-left">
                <AnimatePresence mode="wait">
                    <motion.div 
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="col-span-full grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10"
                    >
                        {menu[activeTab as keyof typeof menu] ? menu[activeTab as keyof typeof menu].map((item, idx) => (
                            <div key={item.name} className="group">
                                <div className="flex justify-between items-baseline mb-2 gap-4">
                                    <h4 className="text-lg md:text-xl font-display text-mare-gold group-hover:text-mare-orange transition-colors duration-300 italic">{item.name}</h4>
                                    <div className="flex-1 border-b border-dotted border-mare-navy/10 translate-y-[-4px]" />
                                    <span className="font-bold text-mare-orange whitespace-nowrap">{item.price}</span>
                                </div>
                                <p className="text-xs text-mare-navy/50 font-medium leading-relaxed italic">{item.desc}</p>
                            </div>
                        )) : null}
                    </motion.div>
                </AnimatePresence>
            </div>
            
            <div className="mt-20 flex flex-col sm:flex-row justify-center items-center gap-6">
                <a 
                  href="https://wa.me/5582991092725" 
                  target="_blank" 
                  className="btn-whatsapp btn-shine px-8 py-4 rounded-xl transition-all font-bold text-[11px] uppercase tracking-widest group w-full sm:w-auto justify-center"
                >
                    <MessageCircle size={18} />
                    WhatsApp Maré
                    <ChevronRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </a>
                <a 
                  href="https://www.ifood.com.br/delivery/marechal-deodoro-al/restaurante-e-pizzaria-mare-mangiare-praia-do-frances-praia-do-frances/013fd2ba-02cd-43a4-8afb-36a291c64790" 
                  target="_blank" 
                  className="btn-ifood btn-shine px-8 py-4 rounded-xl transition-all font-bold text-[11px] uppercase tracking-widest group w-full sm:w-auto justify-center shadow-xl"
                >
                    <ShoppingBag size={18} />
                    Pedir no iFood
                </a>
            </div>
       </div>
      </div>
    </section>
  );
};

const DrinksSection = () => {
  const [activeTab, setActiveTab] = useState('bebidas');

  const categories = [
    { id: 'bebidas', label: 'Bebidas' },
    { id: 'bar', label: 'Bar' },
  ];

  const menu = {
    bebidas: [
      { name: "Água Mineral (500ml)", price: "R$ 7", desc: "Com ou sem gás." },
      { name: "H2O", price: "R$ 11", desc: "Refrigerante leve." },
      { name: "Suco de Polpa (Copo)", price: "R$ 12", desc: "Diversos sabores. (Jarra: R$ 26)" },
      { name: "Suco de Laranja (Copo)", price: "R$ 14", desc: "Natural. (Jarra: R$ 29)" },
      { name: "Limonada Suíça (Copo)", price: "R$ 14", desc: "Refrescante. (Jarra: R$ 29)" },
      { name: "Refrigerantes", price: "R$ 8-9", desc: "KS ou Lata 350ml." },
      { name: "Guaraná Jesus (Lata)", price: "R$ 9", desc: "Clássico maranhense." },
      { name: "Café", price: "R$ 9", desc: "Expresso artesanal." }
    ],
    bar: [
      { name: "Budweiser (355ml)", price: "R$ 14", desc: "Cerveja lager." },
      { name: "Heineken (355ml)", price: "R$ 15", desc: "Cerveja premium." },
      { name: "Stella Artois (330ml)", price: "R$ 15", desc: "Sem glúten." },
      { name: "Corona (355ml)", price: "R$ 15", desc: "Fatias de limão siciliano." },
      { name: "Chopp Hop Bros (300ml)", price: "R$ 15", desc: "Chopp Pilsen artesanal local." },
      { name: "Cachaça Pitú / Sagatiba", price: "R$ 5-6", desc: "Tradicionais brasileiras." },
      { name: "Vodka Skyy / Gin", price: "R$ 6-7", desc: "Doses selecionadas." },
      { name: "Whisky", price: "R$ 28", desc: "Dose selecionada." }
    ]
  };

  return (
    <section id="bebidas" className="py-24 px-6 bg-mare-navy/5 relative">
       <div className="max-w-6xl mx-auto relative z-10 text-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-mare-orange mb-6 inline-block italic">Mixology & Bar</span>
            <h2 className="text-5xl md:text-7xl text-mare-navy mb-16 serif italic text-mare-gold">Bebidas e Bar</h2>

            <div className="flex justify-center gap-2 mb-16 px-4">
                {categories.map((cat) => (
                    <button 
                        key={cat.id}
                        onClick={() => setActiveTab(cat.id)}
                        className={`px-8 py-3 rounded-full font-bold text-[10px] uppercase tracking-widest transition-all ${activeTab === cat.id ? 'bg-mare-navy text-white shadow-xl scale-105' : 'bg-white text-mare-navy/50 hover:bg-white/80'}`}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 text-left">
                <AnimatePresence mode="wait">
                    <motion.div 
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="col-span-full grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10"
                    >
                        {menu[activeTab as keyof typeof menu] ? menu[activeTab as keyof typeof menu].map((item, idx) => (
                            <div key={item.name} className="group">
                                <div className="flex justify-between items-baseline mb-2 gap-4">
                                    <h4 className="text-lg md:text-xl font-display text-mare-gold group-hover:text-mare-orange transition-colors duration-300 italic">{item.name}</h4>
                                    <div className="flex-1 border-b border-mare-navy/10 translate-y-[-4px]" />
                                    <span className="font-bold text-mare-orange whitespace-nowrap">{item.price}</span>
                                </div>
                                <p className="text-xs text-mare-navy/40 font-medium leading-relaxed italic">{item.desc}</p>
                            </div>
                        )) : null}
                    </motion.div>
                </AnimatePresence>
            </div>
            
            <div className="mt-20 p-8 border border-mare-navy/5 rounded-[32px] bg-white/30 backdrop-blur-sm max-w-2xl mx-auto">
                <p className="text-[10px] font-bold uppercase tracking-widest text-mare-orange mb-4 italic">Observações</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-left mb-8">
                    <div>
                        <p className="text-[8px] font-bold uppercase tracking-widest text-mare-navy/40 mb-1">Embalagens</p>
                        <p className="text-[10px] font-medium text-mare-navy italic">Bebida: R$ 2 | Pizza: R$ 3</p>
                    </div>
                    <div>
                        <p className="text-[8px] font-bold uppercase tracking-widest text-mare-navy/40 mb-1">Serviços</p>
                        <p className="text-[10px] font-medium text-mare-navy italic">Taxa de Rolha: R$ 29</p>
                    </div>
                    <div>
                        <p className="text-[8px] font-bold uppercase tracking-widest text-mare-navy/40 mb-1">Couvert</p>
                        <p className="text-[10px] font-medium text-mare-navy italic">Música ao Vivo: R$ 5,90</p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 border-t border-mare-navy/5 pt-8">
                   <a 
                      href="https://wa.me/5582991092725" 
                      target="_blank" 
                      className="btn-whatsapp btn-shine px-6 py-3 rounded-full transition-all font-bold text-[10px] uppercase tracking-widest"
                    >
                        <MessageCircle size={14} /> WhatsApp
                    </a>
                    <div className="hidden sm:block w-1 h-1 bg-mare-navy/10 rounded-full" />
                    <a 
                      href="https://www.ifood.com.br/delivery/marechal-deodoro-al/restaurante-e-pizzaria-mare-mangiare-praia-do-frances-praia-do-frances/013fd2ba-02cd-43a4-8afb-36a291c64790" 
                      target="_blank" 
                      className="btn-ifood btn-shine px-6 py-3 rounded-full transition-all font-bold text-[10px] uppercase tracking-widest"
                    >
                        <ShoppingBag size={14} /> Pedir iFood
                    </a>
                </div>
            </div>
       </div>
    </section>
  );
};

const ExperienceGallery = () => {
    const images = [
        "https://images.unsplash.com/photo-1544124499-58912cbddaad?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1510629954389-c1e0da47d4ec?q=80&w=1974&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&w=2056&auto=format&fit=crop"
    ];

    return (
        <section id="experiencia" className="py-24 bg-mare-navy overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="text-white">
                        <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-mare-orange opacity-80 italic">Un Sapore d'Italia</span>
                        <h2 className="text-5xl md:text-7xl font-display mt-4 italic">Noites <span className="text-mare-teal">Inesquecíveis</span></h2>
                    </div>
                    <a href="https://www.instagram.com/mare.mangiare" target="_blank" className="btn-shine flex items-center gap-3 bg-white text-mare-navy px-8 py-4 rounded-full font-bold uppercase text-[10px] tracking-widest hover:bg-mare-orange hover:text-white transition-all shadow-2xl">
                        Acompanhe no Instagram <Instagram size={18} />
                    </a>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {images.map((img, i) => (
                        <motion.div 
                            key={i}
                            whileHover={{ y: -20, scale: 1.02 }}
                            className="aspect-[3/4] rounded-[32px] overflow-hidden shadow-2xl relative group"
                        >
                            <img 
                                src={img} 
                                alt={`Experience ${i}`} 
                                className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700" 
                            />
                            <div className="absolute inset-0 bg-mare-navy/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                                <Instagram className="text-white" size={28} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ChefSection = () => {
  return (
    <section id="chef" className="py-24 px-6 bg-mare-cream relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-mare-gold/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-mare-orange/5 rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 sticky top-24"
          >
            <div className="relative">
              <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(59,40,27,0.3)] border-8 border-white">
                <img 
                  src="https://res.cloudinary.com/dqfnkztbe/image/upload/q_auto/f_auto/v1779160559/WhatsApp_Image_2026-05-19_at_12.14.40_AM_ph1pa2.jpg" 
                  alt="Chef Rafa Cabral" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-10 -right-10 bg-mare-navy text-white p-8 rounded-full shadow-2xl border-4 border-mare-gold/20 flex flex-col items-center justify-center text-center w-40 h-40">
                <Medal className="text-mare-gold mb-2" size={24} />
                <span className="text-[10px] font-bold uppercase tracking-widest leading-tight">Chef Executiva</span>
                <span className="text-mare-gold font-serif italic text-lg leading-tight mt-1">Rafa Cabral</span>
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <div className="lg:col-span-7 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-mare-orange font-bold text-[10px] uppercase tracking-[0.4em] mb-6 inline-block italic">A Alma do Maré</span>
              <h2 className="text-5xl md:text-7xl text-mare-navy serif italic leading-tight mb-8">Chef <span className="text-mare-teal">Rafa Cabral</span></h2>
              <p className="text-xl text-mare-navy/70 leading-relaxed italic border-l-4 border-mare-orange pl-8">
                "Cada prato servido carrega a história, dedicação e o amor por alimentar as pessoas, buscando proporcionar uma experiência afetiva memorável."
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Box 1: Origem */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white p-8 rounded-[32px] shadow-xl shadow-mare-navy/5 border border-mare-navy/5"
              >
                <div className="w-12 h-12 bg-mare-teal/10 rounded-2xl flex items-center justify-center text-mare-teal mb-6">
                  <Trees size={24} />
                </div>
                <h4 className="text-mare-navy font-bold uppercase text-[11px] tracking-widest mb-4">Origem e Inspiração</h4>
                <p className="text-sm text-mare-navy/60 leading-relaxed">
                  A paixão nasceu na infância, vinda de origem humilde e superando limitações. Trabalhou por quase 10 anos em agronomia no Pará e em Alagoas (sertão e agreste), aprendendo o valor real do alimento e da terra.
                </p>
              </motion.div>

              {/* Box 2: Formação */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white p-8 rounded-[32px] shadow-xl shadow-mare-navy/5 border border-mare-navy/5"
              >
                <div className="w-12 h-12 bg-mare-orange/10 rounded-2xl flex items-center justify-center text-mare-orange mb-6">
                  <School size={24} />
                </div>
                <h4 className="text-mare-navy font-bold uppercase text-[11px] tracking-widest mb-4">Formação de Excelência</h4>
                <p className="text-sm text-mare-navy/60 leading-relaxed">
                  Especializada em Gastronomia Francesa e Italiana, Frutos do Mar, Risotos, Massas Frescas e Confeitaria. Formada com mestres internacionais e especialista em pizzas pela <span className="font-bold text-mare-navy">Le Cordon Bleu</span>.
                </p>
              </motion.div>

              {/* Box 3: Conceito */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-mare-navy p-8 rounded-[32px] shadow-2xl text-white col-span-1 md:col-span-2 overflow-hidden relative"
              >
                <Waves className="absolute -bottom-10 -right-10 text-white/5" size={200} />
                <div className="relative z-10">
                  <h4 className="text-mare-gold font-bold uppercase text-[11px] tracking-widest mb-4">O Conceito: Maré Mangiare</h4>
                  <p className="text-lg leading-relaxed text-white/80 italic">
                    Na famosa La Rue, o Maré Mangiare é a materialização de um sonho: um espaço que une pizzas de fermentação lenta, massas artesanais, frutos do mar e cozinha autoral, focado em proporcionar uma experiência afetiva aos clientes.
                  </p>
                </div>
              </motion.div>

              {/* Box 4: Prêmios */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-white p-8 rounded-[32px] shadow-xl shadow-mare-navy/5 border border-mare-navy/5 col-span-1 md:col-span-2"
              >
                <div className="flex flex-wrap gap-8 items-center">
                  <div className="flex-1 min-w-[200px]">
                    <h4 className="text-mare-navy font-bold uppercase text-[11px] tracking-widest mb-2">Prêmios e Reconhecimentos</h4>
                    <p className="text-[10px] text-mare-navy/40 mb-6 italic">O Maré Mangiare é reconhecido por sua qualidade, inovação e marketing em Alagoas.</p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 group">
                        <Award className="text-mare-gold shrink-0" size={20} />
                        <span className="text-[13px] font-medium text-mare-navy/70 group-hover:text-mare-navy transition-colors">Restaurante Destaque Litoral Norte – Prêmio Notável Alagoano</span>
                      </div>
                      <div className="flex items-center gap-4 group">
                        <Award className="text-mare-gold shrink-0" size={20} />
                        <span className="text-[13px] font-medium text-mare-navy/70 group-hover:text-mare-navy transition-colors">Prêmio Marco Empreendedor</span>
                      </div>
                      <div className="flex items-center gap-4 group">
                        <Award className="text-mare-gold shrink-0" size={20} />
                        <span className="text-[13px] font-medium text-mare-navy/70 group-hover:text-mare-navy transition-colors">Destaque Praia do Francês – 5º Prêmio Alagoano de Turismo e Gastronomia</span>
                      </div>
                    </div>
                  </div>
                  <div className="h-px md:h-24 w-full md:w-px bg-mare-navy/10" />
                  <div className="space-y-4">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-mare-orange">Destaque na Mídia</p>
                    <div className="flex gap-4">
                      <div className="bg-mare-cream px-4 py-2 rounded-xl text-[11px] font-bold text-mare-navy uppercase">Revista S.Mag</div>
                      <div className="bg-mare-cream px-4 py-2 rounded-xl text-[11px] font-bold text-mare-navy uppercase">Jornal Tribuna</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const GoogleEvaluation = () => {
    return (
        <section className="py-24 bg-mare-cream relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="flex-1 text-center md:text-left"
                >
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
                        <Star className="text-mare-orange" size={20} fill="currentColor" />
                        <span className="text-mare-orange font-bold text-[10px] uppercase tracking-[0.3em] italic">Visto no Google</span>
                    </div>
                    <h2 className="text-4xl md:text-7xl text-mare-navy serif italic leading-tight mb-8">
                        Sua <span className="text-mare-gold">Avaliação</span> <br />é o Nosso Combustível
                    </h2>
                    <p className="text-mare-navy/60 text-lg md:text-xl font-medium mb-12 italic leading-relaxed max-w-xl">
                        Cada recomendação nos ajuda a manter a tradição e o amor que colocamos em cada pizza. Sua opinião é fundamental para que mais pessoas conheçam o sabor inesquecível do Maré.
                    </p>
                    <a 
                        href="https://www.google.com/search?q=Mare+Mangiare+Praia+do+Frances+Avaliações" 
                        target="_blank"
                        className="btn-shine btn-ifood px-12 py-6 rounded-full font-bold text-xs uppercase tracking-[0.2em] shadow-2xl inline-flex items-center gap-4 hover:scale-105 active:scale-95 transition-all"
                    >
                        <Star size={18} fill="currentColor" /> AVALIAR NO GOOGLE AGORA
                    </a>
                </motion.div>
                
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="flex-1 relative"
                >
                    <div className="logo-shine logo-reflection logo-float bg-white/20 p-2 rounded-[40px] backdrop-blur-sm border border-white/30 shadow-2xl relative">
                        <img 
                            src="https://res.cloudinary.com/dqfnkztbe/image/upload/q_auto/f_auto/v1779154598/WhatsApp_Image_2026-05-18_at_10.29.56_PM_1_gd7arl.jpg" 
                            alt="Maré Evaluation" 
                            className="w-full rounded-[30px] shadow-inner"
                        />
                    </div>
                </motion.div>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-mare-orange/5 rounded-full blur-[100px] -z-0" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-mare-teal/5 rounded-full blur-[100px] -z-0" />
        </section>
    );
};

const Location = () => {
    return (
        <section id="localizacao" className="py-24 px-6 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
                <div className="lg:w-1/3">
                    <div className="bg-mare-navy p-12 rounded-[50px] text-white h-full flex flex-col justify-between shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-mare-teal/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                        <div>
                            <span className="text-mare-orange font-bold text-[10px] uppercase tracking-[0.3em] italic mb-8 inline-block">Vieni a Trovarci</span>
                            <h2 className="text-5xl font-display italic mb-10 leading-tight">Nosso Cantinho no <span className="text-mare-orange">Francês.</span></h2>
                            
                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                                        <MapPin size={20} className="text-mare-orange" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase tracking-widest font-bold opacity-50 mb-1">Endereço</p>
                                        <p className="text-sm font-medium italic">R. Carapeba, 121 - Galeria La Rue, Praia do Francês, Marechal Deodoro - AL.</p>
                                    </div>
                                </div>
                                
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                                        <Clock size={20} className="text-mare-orange" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase tracking-widest font-bold opacity-50 mb-1">Horário de Jantar</p>
                                        <p className="text-sm font-medium italic">Aberto diariamente: 18:00 às 23:00</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <a href="https://maps.app.goo.gl/xxx" target="_blank" className="mt-12 w-full bg-mare-orange text-white py-5 rounded-2xl font-bold uppercase text-xs tracking-widest flex items-center justify-center gap-3 shadow-xl hover:scale-[1.02] transition-all">
                             Como Chegar <ChevronRight size={18} />
                        </a>
                    </div>
                </div>
                <div className="lg:w-2/3 h-[600px] rounded-[50px] overflow-hidden border-[12px] border-mare-cream shadow-2xl relative group">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15725.594319894437!2d-35.842777!3d-9.771234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x70138290f67a65b%3A0x633d7350764e526a!2sPraia%20do%20Franc%C3%AAs!5e0!3m2!1spt-BR!2sbr!4v1714000000000!5m2!1spt-BR!2sbr" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen={true} 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        className="filter grayscale-[0.2] contrast-[1.1] transition-all duration-700 group-hover:grayscale-0"
                    />
                    <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md px-6 py-4 rounded-3xl z-10 shadow-xl border border-mare-navy/5">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-mare-orange rounded-full flex items-center justify-center">
                                <Waves size={16} className="text-white" />
                            </div>
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-mare-navy/40">Sinta o Mar</p>
                                <p className="text-xs font-bold text-mare-navy uppercase">Na rua mais agitada do Francês</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Footer = () => {
    return (
        <footer id="contato" className="bg-mare-navy pt-24 pb-12 px-6 overflow-hidden relative">
             <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16 mb-20">
                <div className="max-w-md">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="logo-shine logo-reflection w-20 h-20 bg-white rounded-full flex items-center justify-center p-0.5 shadow-2xl overflow-hidden border border-white/10">
                            <img 
                              src="https://res.cloudinary.com/dqfnkztbe/image/upload/q_auto/f_auto/v1779154598/WhatsApp_Image_2026-05-18_at_10.29.56_PM_gixtrw.jpg" 
                              alt="Maré Logo Footer" 
                              className="w-full h-full rounded-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-white font-display text-2xl italic tracking-widest">Maré Mangiare</h2>
                            <p className="text-mare-orange text-[9px] uppercase font-bold tracking-[0.4em]">Gastrobar & Pizzeria</p>
                        </div>
                    </div>
                    <p className="text-white/40 text-sm leading-relaxed mb-10 font-medium italic">
                        Cozinha afetiva, alma mediterrânea e o frescor da Praia do Francês em cada detalhe. 
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="w-12 h-12 bg-white/5 hover:bg-mare-orange rounded-full flex items-center justify-center text-white transition-all border border-white/10">
                            <Instagram size={20} />
                        </a>
                        <a href="#" className="w-12 h-12 bg-white/5 hover:bg-mare-orange rounded-full flex items-center justify-center text-white transition-all border border-white/10">
                            <MessageCircle size={20} />
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-16">
                    <div className="flex flex-col gap-6">
                        <h4 className="text-white font-bold uppercase text-[10px] tracking-[0.3em] opacity-30">Navegação</h4>
                        <a href="#" className="text-white/60 hover:text-mare-orange text-sm transition-colors">O Restaurante</a>
                        <a href="#pizzas" className="text-white/60 hover:text-mare-orange text-sm transition-colors">Pizzas</a>
                        <a href="#cucina" className="text-white/60 hover:text-mare-orange text-sm transition-colors">Cozinha</a>
                        <a href="#bebidas" className="text-white/60 hover:text-mare-orange text-sm transition-colors">Bebidas</a>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h4 className="text-white font-bold uppercase text-[10px] tracking-[0.3em] opacity-30">Legal</h4>
                        <a href="#" className="text-white/60 hover:text-mare-orange text-sm transition-colors">Privacidade</a>
                        <a href="#" className="text-white/60 hover:text-mare-orange text-sm transition-colors">Trabalhe Conosco</a>
                        <a href="#" className="text-white/60 hover:text-mare-orange text-sm transition-colors">Sugestões</a>
                    </div>
                </div>

                <div className="bg-white/5 p-10 rounded-[40px] border border-white/10 flex flex-col gap-6 w-full md:w-auto">
                    <h4 className="text-white font-bold uppercase text-[10px] tracking-[0.3em] opacity-30">Precisa de Ajuda?</h4>
                    <p className="text-white/70 text-sm italic font-medium">Garanta sua mesa para o jantar agora.</p>
                    <a href="https://wa.me/5582991092725" target="_blank" className="btn-whatsapp btn-shine px-10 py-5 rounded-2xl font-bold uppercase text-[10px] tracking-widest text-center shadow-xl">
                        <MessageCircle size={16} /> Reservar via WhatsApp
                    </a>
                </div>
             </div>

             <div className="max-w-7xl mx-auto pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                 <p className="text-white/20 text-[9px] font-bold uppercase tracking-widest">© 2026 Maré Mangiare. Todos os direitos reservados.</p>
                 <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-mare-orange rounded-full" />
                    <p className="text-white/20 text-[9px] font-bold uppercase tracking-widest italic">Desenvolvido com sofisticação em Alagoas</p>
                 </div>
             </div>
        </footer>
    );
};

export default function App() {
  return (
    <div className="min-h-screen bg-mare-cream text-mare-navy">
      <Navbar />
      <Hero />
      <GoogleReviewsSection />
      <CategoriesGrid />
      <PizzaSection />
      <CucinaSection />
      <DrinksSection />
      <ExperienceGallery />
      <ChefSection />
      <GoogleEvaluation />
      <Location />
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/5582991092725" 
        target="_blank"
        className="fixed bottom-8 right-8 z-[100] btn-whatsapp btn-shine p-5 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all group"
      >
        <MessageCircle size={24} className="group-hover:rotate-12 transition-transform" />
        <span className="absolute right-full mr-4 bg-mare-navy text-white px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0 shadow-2xl">
            WhatsApp Maré
        </span>
      </a>
    </div>
  );
}
