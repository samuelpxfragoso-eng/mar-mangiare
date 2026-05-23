import { useState, useEffect, useRef } from 'react';
import { 
  Instagram, 
  MapPin, 
  Clock, 
  ChevronDown, 
  Star, 
  Menu as MenuIcon, 
  X, 
  ShoppingBag, 
  Heart,
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
                  Pizza, Massas & Frutos do Mar
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
            <div className="flex items-center gap-3">
              <a 
                href="https://www.ifood.com.br/delivery/marechal-deodoro-al/restaurante-e-pizzaria-mare-mangiare-praia-do-frances-praia-do-frances/013fd2ba-02cd-43a4-8afb-36a291c64790"
                target="_blank"
                className="btn-ifood btn-shine text-white px-5 py-2.5 rounded-full font-bold text-[10px] uppercase tracking-widest shadow-lg hover:-translate-y-0.5 active:scale-95 transition-all"
              >
                <ShoppingBag size={14} /> iFood
              </a>
              <a 
                href="https://api.whatsapp.com/send?phone=5582981935339&text=Ola,%20gostaria%20de%20reservar%20uma%20data%20para%20eventos."
                target="_blank"
                className="btn-whatsapp btn-shine text-white px-7 py-3 rounded-full font-bold text-[11px] uppercase tracking-widest shadow-xl hover:shadow-[#25D366]/30 transition-all hover:-translate-y-1 active:scale-95"
              >
                <MessageCircle size={14} /> Tira dúvidas e eventos
              </a>
            </div>
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
                href="https://api.whatsapp.com/send?phone=5582981935339&text=Ola,%20gostaria%20de%20reservar%20uma%20data%20para%20eventos."
                target="_blank"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-whatsapp btn-shine text-white p-5 rounded-2xl font-bold text-center mt-4 uppercase text-xs tracking-widest shadow-xl"
              >
                Tira dúvidas e eventos
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
          
          <h1 className="text-3xl md:text-[4rem] lg:text-[4.5rem] text-mare-gold mb-10 font-bold leading-[1.1] tracking-tighter mix-blend-multiply uppercase">
            Premiado como o melhor <br />
            restaurante de <span className="text-mare-orange italic serif">Pizzas</span> e <br />
            <span className="text-mare-teal">Massas</span> Artezanais <br />
            da Praia do Francês.
          </h1>
          
          <p className="text-lg md:text-xl text-mare-navy/60 mb-14 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed italic">
            A melhor experiência gastronômica da praia do francês.
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
              href="https://api.whatsapp.com/send?phone=5582981935339&text=Ola,%20gostaria%20de%20reservar%20uma%20data%20para%20eventos." 
              target="_blank"
              className="btn-whatsapp btn-shine px-14 py-7 rounded-2xl font-bold text-[12px] transition-all hover:-translate-y-1 active:scale-95 uppercase tracking-[0.25em] shadow-xl w-full sm:w-auto text-center inline-flex items-center justify-center gap-3"
            >
              <MessageCircle size={24} />
              Tira dúvidas e eventos
            </a>
          </div>
        </motion.div>

        {/* Right Column: Three Videos Side-by-Side - Larger */}
        <div className="lg:col-span-7 relative flex justify-center lg:justify-end gap-3 md:gap-5 items-center h-[650px] md:h-[800px] pt-12 lg:pt-0">
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
                  className={`relative w-1/3 aspect-[9/16] rounded-[45px] md:rounded-[70px] overflow-hidden shadow-[0_60px_120px_rgba(0,0,0,0.8)] z-20 border-4 md:border-[12px] border-white backdrop-blur-md ${idx === 1 ? 'z-30 scale-135 -translate-y-20 mx-[-8%]' : 'z-10 opacity-70 mt-24'}`}
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
                <h4 className="text-mare-navy font-bold text-[11px] leading-tight italic uppercase tracking-wider">A melhor experiência da Praia do Francês</h4>
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
                        <h2 className="text-4xl md:text-6xl text-mare-navy serif italic leading-tight">O que nossos <span className="text-mare-gold">clientes</span> <br />dizem sobre nós</h2>
                    </div>
                    <a 
                        href="https://www.google.com/search?q=Mare+Mangiare+Praia+do+Frances+Avaliações" 
                        target="_blank"
                        className="btn-shine bg-mare-navy text-white px-10 py-5 rounded-full font-bold text-[11px] uppercase tracking-widest shadow-2xl flex items-center gap-3 hover:scale-105 active:scale-95 transition-all"
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
    { title: "Pizza de fermentação lenta estilo napolitana", desc: "Longa fermentação e ingredientes importados.", icon: <Pizza />, color: "bg-mare-orange/5" },
    { title: "Carta de drinks", desc: "Drinks autorais e uma carta de vinhos selecionada.", icon: <Wine />, color: "bg-mare-gold/5" },
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
                <a href="https://api.whatsapp.com/send?phone=5582981935339&text=Ola,%20gostaria%20de%20reservar%20uma%20data%20para%20eventos." target="_blank" className="btn-whatsapp btn-shine px-8 py-4 rounded-full transition-all font-bold text-[11px] uppercase tracking-widest group w-full sm:w-auto justify-center">
                    <MessageCircle size={18} />
                    Tira dúvidas e eventos
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
    "https://res.cloudinary.com/dqfnkztbe/image/upload/q_auto/f_auto/v1779559861/WhatsApp_Image_2026-05-23_at_3.08.40_PM_1_hzyry6.jpg",
    "https://res.cloudinary.com/dqfnkztbe/image/upload/q_auto/f_auto/v1779559861/WhatsApp_Image_2026-05-23_at_3.08.40_PM_l04dzj.jpg",
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
                  href="https://api.whatsapp.com/send?phone=5582981935339&text=Ola,%20gostaria%20de%20reservar%20uma%20data%20para%20eventos." 
                  target="_blank" 
                  className="btn-whatsapp btn-shine px-8 py-4 rounded-xl transition-all font-bold text-[11px] uppercase tracking-widest group w-full sm:w-auto justify-center"
                >
                    <MessageCircle size={18} />
                    Tira dúvidas e eventos
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
    const [activeTab, setActiveTab] = useState('especiais');

    const drinkImages = [
        "https://res.cloudinary.com/dqfnkztbe/image/upload/q_auto/f_auto/v1779297288/WhatsApp_Image_2026-05-20_at_2.00.47_PM_1_k7bfcb.jpg",
        "https://res.cloudinary.com/dqfnkztbe/image/upload/q_auto/f_auto/v1779297288/WhatsApp_Image_2026-05-20_at_2.00.47_PM_xgbol2.jpg",
        "https://res.cloudinary.com/dqfnkztbe/image/upload/q_auto/f_auto/v1779297288/WhatsApp_Image_2026-05-20_at_2.00.48_PM_ncvba8.jpg",
        "https://res.cloudinary.com/dqfnkztbe/image/upload/q_auto/f_auto/v1779297288/WhatsApp_Image_2026-05-20_at_2.00.48_PM_3_c5ecqo.jpg",
        "https://res.cloudinary.com/dqfnkztbe/image/upload/q_auto/f_auto/v1779297288/WhatsApp_Image_2026-05-20_at_2.00.47_PM_2_uxni2l.jpg",
        "https://res.cloudinary.com/dqfnkztbe/image/upload/q_auto/f_auto/v1779297287/WhatsApp_Image_2026-05-20_at_2.00.49_PM_2_nvjbou.jpg",
        "https://res.cloudinary.com/dqfnkztbe/image/upload/q_auto/f_auto/v1779297287/WhatsApp_Image_2026-05-20_at_2.00.49_PM_ohljab.jpg",
        "https://res.cloudinary.com/dqfnkztbe/image/upload/q_auto/f_auto/v1779297287/WhatsApp_Image_2026-05-20_at_2.00.48_PM_1_twwcsq.jpg",
        "https://res.cloudinary.com/dqfnkztbe/image/upload/q_auto/f_auto/v1779297287/WhatsApp_Image_2026-05-20_at_2.00.49_PM_1_r90h2o.jpg",
        "https://res.cloudinary.com/dqfnkztbe/image/upload/q_auto/f_auto/v1779297287/WhatsApp_Image_2026-05-20_at_2.00.49_PM_4_ez6qqd.jpg",
        "https://res.cloudinary.com/dqfnkztbe/image/upload/q_auto/f_auto/v1779297287/WhatsApp_Image_2026-05-20_at_2.00.50_PM_xnori8.jpg",
        "https://res.cloudinary.com/dqfnkztbe/image/upload/q_auto/f_auto/v1779297287/WhatsApp_Image_2026-05-20_at_2.00.48_PM_2_ei5svo.jpg"
    ];

    const categories = [
        { id: 'especiais', label: 'Autorais & Especiais' },
        { id: 'classicos', label: 'Clássicos & Tradicionais' },
        { id: 'nao_alcoolicos', label: 'Não Alcoólicos' }
    ];

    const menu = {
        especiais: [
            { name: "Dama da Noite", price: "R$ 36", desc: "Purê de morango, limão siciliano, gin rosé e espuma de gengibre." },
            { name: "Flor de Pitaya", price: "R$ 36", desc: "Pitaya, morango, limão e gin rosé." },
            { name: "Gold Drink", price: "R$ 36", desc: "Infusão de frutas amarelas, xarope de pêssego, vinho branco e rum." },
            { name: "Maré Vermelha", price: "R$ 36", desc: "Framboesa, mirtilo, amora, morango, gin rosé e refrigerante citrus." },
            { name: "Raio de Sol", price: "R$ 36", desc: "Limão siciliano, xarope de morango, citrus e gin." },
            { name: "Oceano", price: "R$ 36", desc: "Limão siciliano, chá de flores azuis, cachaça blue, refrigerante de limão e espuma de gengibre." }
        ],
        classicos: [
            { name: "Caipirinha ou Caipirosca", price: "R$ 22", desc: "Cachaça ou vodka, limão e açúcar." },
            { name: "Caipifruta", price: "R$ 28", desc: "Fruta da estação, gelo e açúcar com cachaça ou vodka." },
            { name: "Kyr Royale", price: "R$ 22", desc: "Espumante com licor de cassis e cereja." },
            { name: "Aperol Spritz", price: "R$ 36", desc: "Aperol, suco de laranja e espumante." },
            { name: "Moscow Mule", price: "R$ 36", desc: "Xarope de limão, rum e espuma de gengibre." }
        ],
        nao_alcoolicos: [
            { name: "Soda Italiana", price: "R$ 18", desc: "Xarope de frutas (maçã verde, frutas vermelhas, morango, limão siciliano ou mirtilo) e água gaseificada." },
            { name: "Coco Nevado", price: "R$ 24", desc: "Suco de limão, leite de coco e leite condensado. Deliciosamente refrescante." }
        ]
    };

    return (
        <section id="bebidas" className="py-24 px-6 bg-mare-cream relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-mare-gold/5 rounded-full blur-[120px] -z-0" />
            
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-mare-orange mb-6 inline-block italic">Mixology Art</span>
                    <h2 className="text-5xl md:text-7xl text-mare-navy serif italic leading-tight">Nossos <span className="text-mare-teal">Drinks</span></h2>
                    <p className="mt-6 text-mare-navy/50 text-sm max-w-xl mx-auto italic font-medium">Categorias estruturadas por tipos e sabores, elaborados para harmonizar com a brisa do Maré.</p>
                </div>

                {/* Drinks Gallery */}
                <div className="flex gap-4 overflow-x-auto no-scrollbar pb-16 -mx-6 px-6 mb-12 cursor-grab active:cursor-grabbing">
                    {drinkImages.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="min-w-[240px] md:min-w-[320px] aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl relative group border-4 border-white"
                        >
                            <img 
                                src={img} 
                                alt={`Drink Maré ${i}`} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-mare-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.div>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="flex justify-center gap-2 mb-16 overflow-x-auto no-scrollbar pb-4 px-4">
                        {categories.map((cat) => (
                            <button 
                                key={cat.id}
                                onClick={() => setActiveTab(cat.id)}
                                className={`px-6 py-3 rounded-full font-bold text-[9px] md:text-[10px] uppercase tracking-widest transition-all whitespace-nowrap ${activeTab === cat.id ? 'bg-mare-navy text-white shadow-xl scale-105' : 'bg-white text-mare-navy/40 hover:bg-mare-navy/5 border border-mare-navy/5'}`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10"
                        >
                            {menu[activeTab as keyof typeof menu] ? menu[activeTab as keyof typeof menu].map((item, idx) => (
                                <div key={item.name} className="group p-6 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-300">
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

                <div className="mt-20 flex justify-center">
                    <a 
                        href="https://api.whatsapp.com/send?phone=5582981935339&text=Ola,%20gostaria%20de%20reservar%20uma%20data%20para%20eventos." 
                        target="_blank" 
                        className="btn-whatsapp btn-shine px-10 py-5 rounded-full font-bold uppercase text-[11px] tracking-widest shadow-2xl flex items-center gap-3"
                    >
                        <MessageCircle size={18} /> Pedir via WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
};

const ValentinesSection = () => {
    return (
        <section className="py-24 px-6 bg-red-50 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
                <div className="absolute top-10 left-10 w-32 h-32 text-red-200 rotate-12">
                   <Heart size={128} fill="currentColor" />
                </div>
                <div className="absolute bottom-10 right-10 w-48 h-48 text-red-200 -rotate-12">
                   <Heart size={192} fill="currentColor" />
                </div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-block p-4 rounded-full bg-red-100 text-red-600 mb-8"
                >
                    <Heart size={32} fill="currentColor" />
                </motion.div>
                
                <span className="block text-[10px] font-bold uppercase tracking-[0.4em] text-red-600 mb-6 italic">San Valentino al Maré</span>
                <h2 className="text-5xl md:text-7xl text-mare-navy mb-8 serif italic">Dia dos <span className="text-red-600">Namorados</span></h2>
                
                <p className="max-w-2xl mx-auto text-lg text-mare-navy/60 mb-12 font-medium italic leading-relaxed">
                    Vivencie uma noite inesquecível com um menu exclusivo, luz de velas e a brisa perfeita da Praia do Francês. Garanta sua mesa para celebrar o amor.
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                    <a 
                        href="https://api.whatsapp.com/send?phone=5582981935339&text=Ola,%20gostaria%20de%20reservar%20uma%20mesa%20para%20o%20Dia%20dos%20Namorados." 
                        target="_blank" 
                        className="bg-red-600 hover:bg-red-700 text-white px-12 py-6 rounded-full font-bold uppercase text-[12px] tracking-[0.2em] shadow-2xl transition-all hover:-translate-y-2 active:scale-95 flex items-center gap-3 group"
                    >
                        <MessageCircle size={20} />
                        Reservar agora
                    </a>
                </div>
                
                <div className="mt-16 flex justify-center items-center gap-4 text-red-400/50">
                    <Heart size={12} fill="currentColor" />
                    <span className="text-[10px] uppercase font-bold tracking-widest">Vagas Limitadas</span>
                    <Heart size={12} fill="currentColor" />
                </div>
            </div>
        </section>
    );
};

const ExperienceGallery = () => {
    const [mutedVideos, setMutedVideos] = useState<Record<number, boolean>>({ 0: true, 1: true, 2: true, 3: true });
    const scrollRef = useRef<HTMLDivElement>(null);

    const reels = [
        "https://res.cloudinary.com/dqfnkztbe/video/upload/q_auto/f_auto/v1779495973/SnapInsta.to_AQNPPdmX-stWb0JalpsZ0BRIm0KiX610nNoMM__fesY28pwhnlkwHjsYYFNn2r0fEA5jWXOnfmEPkeajcA7FZfC0_s0hfgz.mp4",
        "https://res.cloudinary.com/dqfnkztbe/video/upload/q_auto/f_auto/v1779495974/SnapInsta.to_AQMXehx1ymWTQsSLdWpmRu89Oky3FIX_ojYszrHXfIbRmyyJC94DBpTImh--gBs8Jj_vKMdX4Xtn4YSYJc4y9OOI_lskrmp.mp4",
        "https://res.cloudinary.com/dqfnkztbe/video/upload/q_auto/f_auto/v1779495977/SnapInsta.to_AQNPoQbTLOKtv_G9QB-Ztod0TPtBYvVLAwJNenNSYcbhddFVStiOWeAchK0W8WvP_vQ38dhXDUmCiFinuCkMHOkWs76J8jaYmguIZwI_lqigll.mp4",
        "https://res.cloudinary.com/dqfnkztbe/video/upload/q_auto/f_auto/v1779495979/SnapInsta.to_AQOCgEt7mAoAXbafL8LC4mLiaB-NpXs7_eVO3-47mvYjaWTuy6pInkxHoreE6hKpfuLbInki7E_Koh4p5YzyV1gP_npar16.mp4"
    ];

    const toggleMute = (index: number) => {
        setMutedVideos(prev => ({ ...prev, [index]: !prev[index] }));
    };

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let scrollInterval = setInterval(() => {
            if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 10) {
                scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                scrollContainer.scrollBy({ left: 344, behavior: 'smooth' });
            }
        }, 5000);

        return () => clearInterval(scrollInterval);
    }, []);

    return (
        <section id="experiencia" className="py-24 bg-mare-navy overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-mare-orange/5 rounded-full blur-[120px] -z-0" />
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="text-white">
                        <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-mare-orange opacity-80 italic">Momenti Speciali</span>
                        <h2 className="text-5xl md:text-7xl font-display mt-4 italic">Vibe <span className="text-mare-teal">Maré</span></h2>
                        <p className="mt-6 text-white/50 text-sm max-w-md italic font-medium">Sinta a atmosfera única da nossa casa através dos nossos registros favoritos.</p>
                    </div>
                    
                    <div className="flex items-center gap-4">
                        <a href="https://www.instagram.com/mare.mangiare?igsh=MXZxczdjcXd2MGpzZQ==" target="_blank" className="btn-shine flex items-center gap-3 bg-white text-mare-navy px-8 py-4 rounded-full font-bold uppercase text-[10px] tracking-widest hover:bg-mare-orange hover:text-white transition-all shadow-2xl">
                            Instagram <Instagram size={18} />
                        </a>
                    </div>
                </div>

                <div 
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto no-scrollbar pb-12 cursor-grab active:cursor-grabbing snap-x"
                >
                    {reels.map((vid, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="min-w-[280px] md:min-w-[320px] aspect-[9/16] rounded-[40px] overflow-hidden shadow-2xl relative group snap-start border-4 border-white/5"
                        >
                            <video 
                                src={vid} 
                                className="w-full h-full object-cover" 
                                autoPlay 
                                muted={mutedVideos[i] ?? true} 
                                loop 
                                playsInline 
                            />
                            
                            {/* Individual Mute Toggle */}
                            <button 
                                onClick={(e) => {
                                    e.preventDefault();
                                    toggleMute(i);
                                }}
                                className="absolute top-6 right-6 z-20 bg-black/40 backdrop-blur-md p-3 rounded-full text-white hover:bg-black/60 transition-all border border-white/10"
                            >
                                {mutedVideos[i] ? <VolumeX size={16} /> : <Volume2 size={16} />}
                            </button>

                            <div className="absolute inset-0 bg-gradient-to-t from-mare-navy/80 via-transparent to-transparent opacity-60 pointer-events-none" />
                            <div className="absolute bottom-8 left-8 flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-md">
                                    <Instagram className="text-white" size={14} />
                                </div>
                                <span className="text-[10px] font-bold text-white uppercase tracking-widest">@mare.mangiare</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
                
                {/* Scroll Indicator */}
                <div className="flex justify-center gap-2 mt-4">
                    {reels.map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/20 transition-all group-hover:bg-mare-orange" />
                    ))}
                </div>
            </div>
        </section>
    );
};

const GiftCardSection = () => {
    const values = [100, 150, 200, 250, 300];
    
    return (
        <section id="presente" className="py-24 px-6 bg-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-mare-gold/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-mare-orange/5 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative group"
                    >
                        <div className="aspect-video rounded-[40px] overflow-hidden shadow-2xl border-8 border-white relative z-10 transition-transform duration-700 group-hover:scale-[1.02]">
                            <img 
                                src="https://res.cloudinary.com/dqfnkztbe/image/upload/q_auto/f_auto/v1779557824/WhatsApp_Image_2026-05-23_at_2.35.01_PM_ocadzo.jpg" 
                                alt="Cartão Presente Maré Mangiare" 
                                className="w-full h-full object-cover"
                                referrerPolicy="no-referrer"
                            />
                            {/* Animated Shine Effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                        </div>
                        {/* Decorative background for image */}
                        <div className="absolute -inset-4 bg-mare-gold/10 rounded-[50px] blur-2xl -z-0 group-hover:bg-mare-gold/20 transition-colors" />
                    </motion.div>

                    {/* Content Column */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-mare-orange font-bold text-[10px] uppercase tracking-[0.4em] mb-4 inline-block italic">Presenteie com Emoção</span>
                            <h2 className="text-4xl md:text-6xl text-mare-navy serif italic leading-tight mb-6">
                                Cartão Presente <br />
                                <span className="text-mare-gold">Maré Mangiare</span>
                            </h2>
                            <p className="text-mare-navy/70 text-lg leading-relaxed italic mb-8">
                                Agora você pode transformar momentos especiais em uma experiência inesquecível no Maré Mangiare. ✨
                            </p>
                            <p className="text-mare-navy/60 text-sm leading-relaxed mb-6">
                                Nosso Cartão Presente foi criado para quem deseja presentear com liberdade: a pessoa escolhe como quer aproveitar o valor no restaurante — seja em pizzas napolitanas, massas artesanais, drinks autorais ou sobremesas.
                            </p>
                        </motion.div>

                        {/* Values Grid */}
                        <div className="space-y-6">
                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-mare-navy/40">Valores disponíveis</h4>
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                                {values.map((val) => (
                                    <a 
                                        key={val}
                                        href={`https://api.whatsapp.com/send?phone=5582981935339&text=Olá,%20gostaria%20de%20comprar%20um%20Cartão%20Presente%20no%20valor%20de%20R$${val}.`}
                                        target="_blank"
                                        className="btn-shine bg-mare-cream hover:bg-mare-gold hover:text-white transition-all p-4 rounded-2xl flex flex-col items-center justify-center border border-mare-navy/5 shadow-sm group"
                                    >
                                        <span className="text-[10px] uppercase font-bold opacity-40 group-hover:opacity-100 mb-1 tracking-tighter">Valor</span>
                                        <span className="text-xl font-display italic">R${val}</span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Info list */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-mare-navy/5">
                            <div>
                                <h4 className="text-[10px] font-bold uppercase tracking-widest text-mare-navy/40 mb-3 flex items-center gap-2">
                                    <ShoppingBag size={12} /> Como funciona?
                                </h4>
                                <p className="text-xs text-mare-navy/60 leading-relaxed italic">
                                    Clique no valor desejado para entrar em contato via WhatsApp. Pagamento via Pix, Débito ou Crédito. Geramos um cartão personalizado para o presenteado.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-[10px] font-bold uppercase tracking-widest text-mare-navy/40 mb-3 flex items-center gap-2">
                                    <Timer size={12} /> Validade
                                </h4>
                                <p className="text-xs text-mare-navy/60 leading-relaxed italic">
                                    O cartão poderá ser utilizado em até 60 dias após a data da compra em todas as opções do nosso cardápio.
                                </p>
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="pt-6"
                        >
                             <a 
                                href="https://api.whatsapp.com/send?phone=5582981935339&text=Olá,%20gostaria%20de%20comprar%20um%20Cartão%20Presente." 
                                target="_blank" 
                                className="btn-whatsapp btn-shine px-10 py-5 rounded-full font-bold uppercase text-[11px] tracking-widest shadow-2xl flex items-center gap-3 w-full sm:w-auto justify-center"
                            >
                                <MessageCircle size={18} /> Comprar Agora
                            </a>
                        </motion.div>
                    </div>
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

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            q: "Qual o horário de funcionamento?",
            a: "Estamos abertos de Domingo a Quinta das 16h às 22:30, e Sexta e Sábado das 16h às 23:30. Venha aproveitar o pôr do sol na Praia do Francês conosco."
        },
        {
            q: "Onde o restaurante está localizado?",
            a: "Estamos situados na Rua Carapeba - La Rue, em frente à loja Oceanic, o coração gastronômico da Praia do Francês em Marechal Deodoro - AL."
        },
        {
            q: "Vocês aceitam reservas?",
            a: "Sim! Altamente recomendado, especialmente para grupos e finais de semana. Você pode reservar clicando nos botões de WhatsApp do site."
        },
        {
            q: "O restaurante é pet friendly?",
            a: "Sim! Adoramos receber pets em nossa área externa. Traga seu companheiro de quatro patas para uma noite especial."
        },
        {
            q: "Qual o tipo de culinária servida?",
            a: "Unimos a tradição italiana das massas artesanais e pizzas de fermentação lenta com o frescor dos frutos do mar locais e toques autorais da Chef Rafa Cabral."
        },
        {
            q: "Existem opções vegetarianas no menu?",
            a: "Com certeza. Temos diversas opções de pizzas, entradas e massas pensadas especialmente para quem não consome carne."
        },
        {
            q: "Há estacionamento no local?",
            a: "Por estarmos em uma área de galeria charmosa, existem diversas opções de estacionamento público nas ruas transversais à La Rue."
        },
        {
            q: "Vocês fazem delivery?",
            a: "Sim! Atendemos toda a região da Praia do Francês e arredores através do iFood. Procure por Maré Mangiare no app."
        },
        {
            q: "Quais as formas de pagamento aceitas?",
            a: "Aceitamos todos os cartões de crédito e débito bancários, além de pagamentos via PIX e dinheiro."
        },
        {
            q: "Como entrar em contato para eventos privados?",
            a: "Possuímos pacotes especiais para aniversários e eventos corporativos. Entre em contato pelo botão 'Tira dúvidas e eventos' para mais detalhes."
        }
    ];

    return (
        <section className="py-24 px-6 bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-mare-teal/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
            
            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <span className="text-mare-orange font-bold text-[10px] uppercase tracking-[0.4em] mb-6 inline-block italic">Dúvidas Frequentes</span>
                    <h2 className="text-5xl md:text-6xl text-mare-navy serif italic leading-tight">Perguntas <span className="text-mare-teal">Comuns</span></h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="border border-mare-navy/5 rounded-3xl overflow-hidden bg-mare-cream/30 hover:bg-white transition-all shadow-sm hover:shadow-xl hover:shadow-mare-navy/5"
                        >
                            <button 
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full p-6 md:p-8 flex items-center justify-between text-left group"
                            >
                                <span className="text-mare-navy font-bold text-base md:text-lg italic group-hover:text-mare-orange transition-colors pr-8">
                                    {faq.q}
                                </span>
                                <div className={`shrink-0 w-8 h-8 rounded-full border border-mare-navy/10 flex items-center justify-center transition-transform duration-500 ${openIndex === i ? 'rotate-180 bg-mare-teal text-white border-mare-teal' : 'text-mare-navy/30'}`}>
                                    <ChevronDown size={18} />
                                </div>
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                    >
                                        <div className="px-6 md:px-8 pb-8 text-mare-navy/60 text-sm md:text-base leading-relaxed border-t border-mare-navy/5 pt-4">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
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
                                        <p className="text-sm font-medium italic">R. Carapeba, 121 - La Rue (em frente à loja Oceanic), Praia do Francês, Marechal Deodoro - AL.</p>
                                    </div>
                                </div>
                                
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                                        <Clock size={20} className="text-mare-orange" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase tracking-widest font-bold opacity-50 mb-1">Horário de Atendimento</p>
                                        <div className="text-sm font-medium italic leading-relaxed">
                                            <p>Dom a Qui: 16:00 às 22:30</p>
                                            <p>Sex e Sáb: 16:00 às 23:30</p>
                                        </div>
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
                            <p className="text-mare-orange text-[9px] uppercase font-bold tracking-[0.4em]">Pizza, Massas & Frutos do Mar</p>
                        </div>
                    </div>
                    <p className="text-white/40 text-sm leading-relaxed mb-10 font-medium italic">
                        Comida afetiva, alma italiana e um toque autoral em cada detalhe. 
                    </p>
                    <div className="flex gap-4">
                        <a href="https://www.instagram.com/mare.mangiare?igsh=MXZxczdjcXd2MGpzZQ==" target="_blank" className="w-12 h-12 bg-white/5 hover:bg-mare-orange rounded-full flex items-center justify-center text-white transition-all border border-white/10">
                            <Instagram size={20} />
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=5582981935339&text=Ola,%20gostaria%20de%20reservar%20uma%20data%20para%20eventos." target="_blank" className="w-12 h-12 bg-white/5 hover:bg-mare-orange rounded-full flex items-center justify-center text-white transition-all border border-white/10">
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
      <ValentinesSection />
      <ExperienceGallery />
      <GiftCardSection />
      <ChefSection />
      <GoogleEvaluation />
      <FAQSection />
      <Location />
      <Footer />
    </div>
  );
}
