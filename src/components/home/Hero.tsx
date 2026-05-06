import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface HeroProps {
  onNavigate: (page: string) => void;
}

const SLIDES = [
  {
    id: 1,
    title: 'Educação como Prática da Liberdade',
    description: 'Conheça os princípios e ideais do Coletivo Paulo Freire.',
    image: 'https://i.postimg.cc/28DjctMX/carrossel1.jpg',
    link: 'quem-somos',
    buttonText: 'Conheça Nossa História'
  },
  {
    id: 2,
    title: 'Acervo Digital e Memória Viva',
    description: 'Documentos, livros e experiências produzidas pelo nosso coletivo ao longo dos anos.',
    image: 'https://i.postimg.cc/YSPbf0th/carrossel3.jpg',
  },
  {
    id: 3,
    title: 'Cem anos de Paulo Freire',
    description: 'Conheça o e-book produzido pelo Coletivo em homenagem aos 100 anos do nascimento do educador.',
    image: 'https://i.postimg.cc/7ZWQZ58v/carrossel2.jpg',
    link: 'acervo-centenario',
    buttonText: 'Acesse agora'
  },
];

export default function Hero({ onNavigate }: HeroProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 11000);
    return () => clearInterval(timer);
  }, []);

  const TAG_COLORS = ['bg-pf-yellow', 'bg-pf-rose', 'bg-pf-blue'];

  return (
    <section className="h-[600px] border-b-subtle overflow-hidden w-full relative">
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img 
            key={current}
            src={SLIDES[current].image} 
            alt={SLIDES[current].title} 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-pf-feature/60 via-pf-feature/40 to-transparent"></div>
        <div className="absolute inset-0 bg-pf-dark/5"></div>
      </div>

      <div className="max-w-7xl mx-auto h-full relative z-10 px-10 md:px-20 flex flex-col justify-center group">
        
        <div className="absolute top-10 right-10 flex gap-2 z-20">
          {SLIDES.map((_, i) => (
            <div 
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full cursor-pointer transition-all ${
                current === i ? 'bg-pf-red w-4' : 'bg-pf-border'
              }`}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6 relative z-10 max-w-[900px]"
          >
            <div className={`${TAG_COLORS[current]} text-pf-dark px-3 py-1 text-[11px] font-bold self-start rounded-[2px] tracking-widest uppercase`}>
              DESTAQUE
            </div>
            <h1 className="text-4xl md:text-7xl font-bold leading-[1.4] tracking-tighter max-w-[850px] text-pf-dark">
              <span className="bg-pf-feature/60 px-4 py-2 box-decoration-clone">
                {SLIDES[current].title}
              </span>
            </h1>
            <p className="text-pf-dark/90 text-lg md:text-xl max-w-[650px] leading-[1.8]">
              <span className="bg-pf-feature/60 px-3 py-1 box-decoration-clone">
                {SLIDES[current].description}
              </span>
            </p>
            
            {SLIDES[current].link && (
              <button 
                onClick={() => onNavigate(SLIDES[current].link!)}
                className="mt-4 px-8 py-4 bg-pf-red text-white text-[11px] font-bold uppercase tracking-[0.2em] self-start hover:bg-pf-dark transition-all rounded-sm shadow-xl"
              >
                {SLIDES[current].buttonText || 'Conheça Nossa História'}
              </button>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
