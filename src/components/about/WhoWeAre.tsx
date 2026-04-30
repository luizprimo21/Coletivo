import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function WhoWeAre() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const galleryImages = [
    { src: "/regenerated_image_1777569186564.png", alt: "Mobilização em defesa da educação" },
    { src: "/regenerated_image_1777569187556.png", alt: "Encontro de educadores" },
    { src: "/regenerated_image_1777569188351.png", alt: "Processo formativo" },
  ];

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryImages.length);
    }
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') setSelectedIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  return (
    <div className="bg-pf-bg min-h-screen">
      <section className="py-24 border-b-subtle bg-pf-feature">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 max-w-4xl uppercase">Quem Somos</h1>
            <div className="h-1 w-24 bg-pf-red mb-12"></div>
            <p className="text-2xl text-pf-dark font-medium leading-[1.2] max-w-3xl border-l-[1px] border-pf-rose pl-10 italic">
               "Ninguém educa ninguém, ninguém educa a si mesmo, os homens se educam entre si, mediatizados pelo mundo."
            </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-5 md:px-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-pf-dark leading-tight">
              Em defesa da vida, da escola pública e do legado de Paulo Freire
            </h2>

            <div className="flex flex-col gap-8 text-pf-muted text-lg leading-relaxed">
              <p>
                O <strong>Coletivo Paulo Freire</strong> é um movimento formado por educadores identificados com o pensamento freireano e sua concepção crítico libertadora de educação. É de natureza democrática, progressista e suprapartidária e tem como objetivos a divulgação do legado deixado por Paulo Freire e a defesa intransigente da escola pública laica, obrigatória e gratuita.
              </p>
              
              <p>
                Perseguir tais objetivos implica, hoje, uma luta intensa e contínua de todos(as) aqueles(as) que almejam uma educação de qualidade para todos(as), dadas as constantes investidas para desmontar tanto a escola pública como a imagem e a obra de Freire. Por isso, o coletivo busca ampliar a parceria com outros grupos, associações e movimentos que tenham princípios e propostas convergentes, para se fortalecerem mutuamente e fortalecer a luta comum.
              </p>

              <div className="py-10 border-y border-pf-border my-4">
                <h3 className="text-[11px] font-bold uppercase tracking-widest text-pf-red mb-6">Nossa Trajetória</h3>
                <p className="mb-6">
                  O Coletivo Paulo Freire foi inicialmente criado em 2017 para defender a manutenção, então em risco, do título de Patrono da Educação Brasileira concedido a Paulo Freire em 2012. A partir de 2019, passou a ter a participação de educadores que atuaram ou acompanharam a gestão da prefeita <strong>Luiza Erundina</strong>, no período de 1989 a 1992, na cidade de São Paulo, com esse grande educador à frente da Secretaria da Educação.
                </p>
                <p>
                  Desde então, o Coletivo vem ampliando sua abrangência, com a inclusão de educadores dos vários segmentos, tanto do ensino fundamental e médio como das universidades.
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <h3 className="text-[11px] font-bold uppercase tracking-widest text-pf-red mb-2">Nossas Referências</h3>
                <p>
                  Nossas referências são as políticas públicas inovadoras e inclusivas desenvolvidas na cidade de São Paulo entre 1989 e 1992, as quais tinham como eixos centrais para a educação: a democratização da gestão, a democratização do acesso, uma nova qualidade da educação e uma política de education para jovens e adultos.
                </p>
                <p>
                  Ao mesmo tempo, procuramos valorizar experiências desenvolvidas por educadores dentro dos princípios freireanos, na defesa da educação pública de qualidade social, contra as políticas que ameaçam a escola pública brasileira no momento atual de nossa história.
                </p>
              </div>

              {/* Gallery Section */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
                {galleryImages.map((img, idx) => (
                  <div 
                    key={idx}
                    onClick={() => setSelectedIndex(idx)}
                    className="aspect-video overflow-hidden rounded-sm bg-pf-feature group relative cursor-pointer"
                  >
                    <img 
                      src={img.src} 
                      alt={img.alt} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-pf-dark/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white text-[10px] font-bold uppercase tracking-widest bg-pf-dark/40 px-3 py-1 backdrop-blur-sm rounded-[2px]">Ver imagem</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* O que fazemos section */}
              <div className="mt-20 py-16 border-t border-pf-border">
                <h2 className="text-3xl font-bold tracking-tight text-pf-dark mb-12">O que fazemos</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-pf-yellow flex items-center justify-center font-bold text-pf-dark">01</div>
                      <h3 className="text-xl font-bold">Formação</h3>
                    </div>
                    <ul className="flex flex-col gap-3 text-pf-muted list-none pl-1">
                      {[
                        'Cursos', 'Grupos de Discussão', 'Debates', 'Mesas Redondas',
                        'Produções Teóricas', 'Produções de Materiais', 'Relatos de Prática'
                      ].map(item => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="w-1 h-1 bg-pf-rose rounded-full"></span>
                          {item}
                        </li>
                      ))}
                      <li className="flex items-start gap-2 mt-2 font-medium text-pf-dark italic">
                        <span className="w-1 h-1 bg-pf-blue rounded-full mt-2.5"></span>
                        Parcerias com universidades, centros de estudo freireanos e coletivos do campo democrático
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-pf-blue flex items-center justify-center font-bold text-pf-dark">02</div>
                      <h3 className="text-xl font-bold">Articulação Política</h3>
                    </div>
                    
                    <div className="flex flex-col gap-8">
                      <div>
                        <h4 className="text-[11px] font-bold uppercase tracking-widest text-pf-red mb-4">Interna</h4>
                        <ul className="flex flex-col gap-2 text-pf-muted">
                          <li className="flex items-center gap-2"><span className="w-1 h-1 bg-pf-yellow rounded-full"></span>Colegiado Central</li>
                          <li className="flex items-center gap-2"><span className="w-1 h-1 bg-pf-yellow rounded-full"></span>Grupos de Trabalho (GTs)</li>
                          <li className="flex items-center gap-2"><span className="w-1 h-1 bg-pf-yellow rounded-full"></span>Coletivos Regionais e Fundadoras</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-[11px] font-bold uppercase tracking-widest text-pf-red mb-4">Externa</h4>
                        <ul className="flex flex-col gap-2 text-pf-muted">
                          <li className="flex items-center gap-2"><span className="w-1 h-1 bg-pf-orange rounded-full"></span>Parcerias com associações, movimentos, sindicatos e coletivos</li>
                          <li className="flex items-center gap-2"><span className="w-1 h-1 bg-pf-orange rounded-full"></span>Observatório dos legislativos municipal, estadual e federal</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-50 bg-pf-dark/95 backdrop-blur-md flex items-center justify-center p-5 md:p-20"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-10 right-10 text-white hover:text-pf-yellow transition-colors z-[60]"
              onClick={() => setSelectedIndex(null)}
            >
              <X size={32} />
            </motion.button>

            {/* Navigation Arrows */}
            <motion.button
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              className="absolute left-4 md:left-10 text-white hover:text-pf-yellow transition-colors z-[60]"
              onClick={handlePrev}
            >
              <ChevronLeft size={48} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              className="absolute right-4 md:right-10 text-white hover:text-pf-yellow transition-colors z-[60]"
              onClick={handleNext}
            >
              <ChevronRight size={48} />
            </motion.button>

            <div className="relative group max-w-full max-h-full flex flex-col items-center gap-4">
              <motion.img
                key={selectedIndex}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                src={galleryImages[selectedIndex].src}
                alt={galleryImages[selectedIndex].alt}
                className="max-w-full max-h-[80vh] object-contain shadow-2xl border border-white/10"
                onClick={(e) => e.stopPropagation()}
              />
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                key={`text-${selectedIndex}`}
                className="text-white/60 text-xs uppercase tracking-widest font-medium"
              >
                {selectedIndex + 1} / {galleryImages.length} — {galleryImages[selectedIndex].alt}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
