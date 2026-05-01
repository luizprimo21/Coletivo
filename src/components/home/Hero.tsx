import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const SLIDES = [
  {
    id: 1,
    title: 'Educação como Prática da Liberdade',
    description: 'Reflexões sobre a jornada pedagógica no centenário de Paulo Freire e as novas frentes do coletivo.',
  },
  {
    id: 2,
    title: 'Acervo Digital e Memória Viva',
    description: 'Descubra documentos inéditos e livros produzidos pelo nosso coletivo ao longo dos anos.',
  },
  {
    id: 3,
    title: 'Diálogos e Saberes Populares',
    description: 'Participe de nossos encontros e seminários virtuais focados na transformação social.',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const TAG_COLORS = ['bg-pf-yellow', 'bg-pf-rose', 'bg-pf-blue'];

  return (
    <section className="h-[500px] border-b-subtle overflow-hidden w-full relative">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?q=80&w=1920&auto=format&fit=crop&fm=jpg" 
          alt="Hero background" 
          className="w-full h-full object-cover opacity-20 grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pf-feature via-pf-feature/90 to-transparent"></div>
      </div>

      <div className="w-full h-full relative z-10 p-10 md:p-20 flex flex-col justify-end group">
        <div className="absolute top-10 right-10 flex gap-2">
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
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="flex flex-col gap-4 relative z-10"
          >
            <div className={`${TAG_COLORS[current]} text-pf-dark px-3 py-1 text-[11px] font-bold self-start rounded-[2px] tracking-widest uppercase`}>
              DESTAQUE
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] tracking-tighter max-w-[800px] text-pf-dark">
              {SLIDES[current].title}
            </h1>
            <p className="text-pf-dark/80 text-base max-w-[600px]">
              {SLIDES[current].description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Dynamic background element for extra depth */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-100/30 skew-x-[-15deg] translate-x-1/2 pointer-events-none" />
      </div>
    </section>
  );
}
