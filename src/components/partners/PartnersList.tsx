import { motion } from 'motion/react';
import { PartnerItem } from '../../types';

const PARTNERS: PartnerItem[] = [
  { id: '1', name: 'Movimento dos Trabalhadores Sem Terra', link: '#' },
  { id: '2', name: 'Universidade Federal de São Paulo', link: '#' },
  { id: '3', name: 'Fórum Nacional de Educação', link: '#' },
  { id: '4', name: 'Instituto Paulo Freire', link: '#' },
  { id: '5', name: 'Associação Brasileira de Alfabetização', link: '#' },
  { id: '6', name: 'Conselho Estadual de Educação', link: '#' },
];

export default function PartnersList() {
  const COLORS = ['bg-pf-rose', 'bg-pf-yellow', 'bg-pf-blue', 'bg-pf-orange'];

  return (
    <div className="bg-pf-bg min-h-screen">
      <section className="py-24 border-b-subtle">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-6 text-pf-dark">Nossas Parcerias</h1>
          <p className="text-pf-muted text-base max-w-2xl leading-relaxed">
            Acreditamos na construção coletiva e no diálogo entre diferentes instituições para fortalecer a educação popular em solo brasileiro.
          </p>
        </div>
      </section>

      <section className="">
        <div className="max-w-7xl mx-auto px-5 md:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-subtle border-t-0">
          {PARTNERS.map((partner, idx) => (
            <motion.a
              key={partner.id}
              href={partner.link}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className={`p-16 flex flex-col items-center justify-center text-center transition-colors hover:bg-white border-b-subtle sm:border-b-subtle lg:border-b-subtle ${
                (idx % 3 !== 2) ? 'lg:border-r-subtle' : ''
              } ${(idx % 2 !== 1) ? 'sm:border-r-subtle lg:border-r-subtle' : 'sm:border-r-0 lg:border-r-subtle'}`}
            >
              <div className={`w-16 h-16 ${COLORS[idx % COLORS.length]} rounded-full flex items-center justify-center mb-8 font-bold text-pf-dark text-2xl`}>
                {partner.name.charAt(0)}
              </div>
              <h3 className="font-bold text-pf-dark text-lg leading-tight uppercase tracking-tight">
                {partner.name}
              </h3>
            </motion.a>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-5 md:px-10 py-24 flex flex-col items-center text-center">
          <div className="max-w-2xl border-subtle p-12 bg-pf-feature">
            <h2 className="text-2xl font-bold mb-6 tracking-tight uppercase">Quer ser um parceiro?</h2>
            <p className="text-pf-muted text-sm mb-8 leading-relaxed">
              Se sua instituição compartilha nossos valores e deseja colaborar em projetos educativos, entre em contato conosco.
            </p>
            <button className="px-10 py-4 bg-pf-red text-white text-[12px] font-bold uppercase tracking-widest hover:opacity-80 transition-all rounded-[2px]">
              Fale Conosco
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
