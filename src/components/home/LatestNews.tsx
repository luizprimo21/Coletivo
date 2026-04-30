import { motion } from 'motion/react';

const NEWS_ITEMS = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1544648151-53606ae88755?q=80&w=800&auto=format&fit=crop',
    title: 'Lançamento do Caderno de Formação: Diálogos sobre Autonomia',
    excerpt: 'Um guia prático para educadores populares explorarem a autonomia na sala de aula.',
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb28f74b671?q=80&w=800&auto=format&fit=crop',
    title: 'Inscrições abertas para o Seminário de Educação Popular',
    excerpt: 'Participe do nosso encontro anual de formação crítica e troca de experiências.',
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=800&auto=format&fit=crop',
    title: 'Parceria com movimentos sociais fortalece rede de apoio',
    excerpt: 'Novas frentes de atuação conjunta prometem ampliar o alcance da nossa pedagogia.',
  },
];

export default function LatestNews() {
  return (
    <section className="py-20 border-b-subtle">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter uppercase mb-2">Últimas Notícias</h2>
            <div className="h-1 w-12 bg-pf-red"></div>
          </div>
          <button className="text-[11px] font-bold uppercase tracking-widest text-pf-muted hover:text-pf-red transition-colors">
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
            >
              <div className="mb-6 flex flex-col gap-6">
                <div className="aspect-[16/9] overflow-hidden bg-pf-feature border-subtle">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-bold leading-tight group-hover:text-pf-red transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-pf-muted text-sm leading-relaxed">
                    {item.excerpt}
                  </p>
                  <div className="h-[1px] w-0 bg-pf-red group-hover:w-full transition-all duration-500 mt-2"></div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
