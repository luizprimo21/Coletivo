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

  return (
    <section className="h-[380px] border-b-subtle overflow-hidden w-full relative">
      <div className="w-full h-full relative bg-pf-feature p-10 md:p-20 flex flex-col justify-end group">
        <div className="absolute top-10 right-10 flex gap-2">
          {SLIDES.map((_, i) => (
            <div 
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full cursor-pointer transition-colors ${
                current === i ? 'bg-pf-red' : 'bg-pf-border'
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
            <div className="bg-pf-red text-white px-3 py-1 text-[11px] font-bold self-start rounded-[2px] tracking-widest">
              DESTAQUE
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] tracking-tighter max-w-[800px]">
              {SLIDES[current].title}
            </h1>
            <p className="text-pf-muted text-base max-w-[600px]">
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
