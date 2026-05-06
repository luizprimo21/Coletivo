
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, MapPin, Share2 } from 'lucide-react';
import { NEWS_ITEMS } from '../../data/news_data';

interface LatestNewsProps {
  onNavigate: (page: string, id?: string | null) => void;
}

export default function LatestNews({ onNavigate }: LatestNewsProps) {
  const [selectedNews, setSelectedNews] = useState<string | null>(null);

  const handleNewsClick = (item: any) => {
    if (item.id === '1') {
      setSelectedNews(item.id);
    } else if (item.linkId) {
      onNavigate(item.linkId, item.targetId);
    }
  };

  return (
    <section className="py-20 border-b-subtle">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter mb-2">Últimas Notícias</h2>
            <div className="h-1 w-12 bg-pf-red"></div>
          </div>
          <button 
            onClick={() => onNavigate('inicio')}
            className="text-[11px] font-bold uppercase tracking-widest text-pf-muted hover:text-pf-red transition-colors"
          >
            Ver todas
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {NEWS_ITEMS.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
              onClick={() => handleNewsClick(item)}
            >
              <div className="mb-6 flex flex-col gap-6">
                <div className="aspect-[16/9] overflow-hidden bg-pf-feature border-subtle">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale-0 group-hover:grayscale"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-pf-red">
                    <Calendar size={12} />
                    <span>{item.date}</span>
                  </div>
                  <h3 className="text-xl font-bold leading-tight group-hover:text-pf-red transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-pf-muted text-sm leading-relaxed line-clamp-3">
                    {item.excerpt}
                  </p>
                  <div className="h-[1px] w-0 bg-pf-red group-hover:w-full transition-all duration-500 mt-2"></div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Full News Modal for News 1 */}
      <AnimatePresence>
        {selectedNews === '1' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-pf-dark/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedNews(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white text-pf-dark max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-sm shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedNews(null)}
                className="absolute top-6 right-6 text-pf-dark/40 hover:text-pf-red transition-colors z-10 p-2"
              >
                <X size={32} />
              </button>

              <div className="p-8 md:p-16">
                <header className="mb-12">
                  <div className="flex items-center gap-4 text-pf-red text-[11px] font-bold uppercase tracking-[0.2em] mb-6">
                    <Calendar size={14} />
                    <span>Fevereiro de 2023</span>
                    <span className="w-1 h-1 bg-pf-red/30 rounded-full"></span>
                    <MapPin size={14} />
                    <span>São Paulo, SP</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tighter leading-[1.1] mb-8">
                    Coletivo Paulo Freire e Entidades Movem Ação Contra Privatização
                  </h1>
                  <p className="text-xl text-pf-muted font-serif italic border-l-4 border-pf-red pl-6">
                    Organizações educacionais protocolam representação no MP-SP contra repasse de recursos públicos a colégio privado.
                  </p>
                </header>

                <div className="prose prose-lg max-w-none text-pf-dark/80 font-serif space-y-6 leading-relaxed text-justify">
                  <p>
                    Uma mobilização liderada por organizações do campo educacional, junto com o Coletivo Paulo Freire, levou o Ministério Público de São Paulo (MP-SP) a instaurar um Inquérito Civil contra a Prefeitura de São Paulo. A investigação, conduzida pelo Grupo de Atuação Especial de Educação (GEDUC), apura possíveis irregularidades no Termo de Fomento nº 03/2022, que destina recursos públicos à instituição privada Liceu Coração de Jesus.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-pf-dark pt-4">O Papel das Organizações Sociais</h3>
                  <p>
                    O inquérito foi motivado por uma representação protocolada presencialmente por um coletivo de instituições comprometidas com a educação pública. O Coletivo Paulo Freire, ao lado de entidades como o Fórum Municipal de Educação, o Sindsep e o Conselho de Representantes de Conselhos de Escola (CRECE), questiona a legalidade e a constitucionalidade da transferência de verbas para o setor privado.
                  </p>
                  <p>
                    Segundo a documentação de instauração, essas organizações denunciam que o repasse de recursos — destinados à locação de espaço e custeio mensal de ensino integral — fere o princípio de que o dinheiro público deve ser prioritariamente aplicado em escolas públicas, conforme o artigo 213 da Constituição Federal.
                  </p>

                  <h3 className="text-2xl font-bold text-pf-dark pt-4">Críticas ao Planejamento Educacional</h3>
                  <p>
                    A denúncia sustentada pelo Coletivo Paulo Freire e demais parceiros aponta que o projeto não possui respaldo nos Planos Decenais de Educação (Nacional e Municipal). O Promotor de Justiça João Paulo Faustinoni e Silva reforçou o argumento das entidades, anotando que a Prefeitura admitiu a relação do projeto com o Plano Municipal de Educação, mas não submeteu a decisão à análise obrigatória do Fórum Municipal e do Conselho Municipal de Educação.
                  </p>

                  <h3 className="text-2xl font-bold text-pf-dark pt-4">Exigências do Ministério Público</h3>
                  <p>
                    A partir da pressão exercida pelas entidades, o MP-SP agora exige que a Secretaria Municipal de Educação esclareça pontos cruciais:
                  </p>
                  <ul className="list-disc pl-6 space-y-3">
                    <li><strong>Transparência nas matrículas:</strong> A Secretaria deve informar onde as crianças estavam matriculadas antes de serem remanejadas para o Liceu.</li>
                    <li><strong>Déficit de vagas:</strong> A prefeitura precisará comprovar se realmente havia demanda não atendida na região que justificasse o fomento à rede privada.</li>
                  </ul>
                  
                  <p className="pt-6">
                    A ação do Coletivo Paulo Freire e das organizações coautoras é vista como um passo estratégico na defesa do financiamento público exclusivo para a educação pública e na proteção das metas democráticas estabelecidas nos planos de ensino vigentes.
                  </p>
                </div>

                <footer className="mt-16 pt-8 border-t border-pf-dark/10 flex justify-between items-center">
                  <div className="flex gap-4">
                    <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-pf-muted hover:text-pf-red transition-colors">
                      <Share2 size={16} />
                      Compartilhar
                    </button>
                  </div>
                  <span className="text-[10px] text-pf-muted uppercase tracking-widest">Coletivo Paulo Freire • 2023</span>
                </footer>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
