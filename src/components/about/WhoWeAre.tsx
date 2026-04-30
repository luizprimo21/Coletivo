import { motion } from 'motion/react';

export default function WhoWeAre() {
  return (
    <div className="bg-pf-bg">
      <section className="py-24 border-b-subtle bg-pf-feature">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 max-w-4xl uppercase">Quem Somos</h1>
            <div className="h-1 w-24 bg-pf-red mb-12"></div>
            <p className="text-2xl text-pf-dark font-medium leading-[1.2] max-w-3xl border-l-[1px] border-pf-red pl-10">
               "Ninguém educa ninguém, ninguém educa a si mesmo, os homens se educam entre si, mediatizados pelo mundo."
            </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-col gap-8"
            >
              <h2 className="text-[11px] font-bold text-pf-red uppercase tracking-[0.2em]">Nossa Origem</h2>
              <div className="flex flex-col gap-6 text-pf-muted text-base leading-relaxed">
                <p>
                  O <strong>Coletivo Paulo Freire</strong> surgiu da união de educadores e militantes comprometidos com a pedagogia libertadora. Nossa base é o diálogo e a construção coletiva do conhecimento.
                </p>
                <p>
                  Atuamos em diversas frentes, desde a formação política até a intervenção direta em comunidades, sem perder de vista o rigor teórico que o pensamento de Freire exige.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col gap-8"
            >
              <h2 className="text-[11px] font-bold text-pf-red uppercase tracking-[0.2em]">O que fazemos</h2>
              <ul className="flex flex-col gap-4 text-pf-muted text-base">
                <li className="flex gap-4 items-start">
                  <span className="w-1.5 h-1.5 bg-pf-red rounded-full mt-2 shrink-0"></span>
                  <span>Organização de seminários e palestras sobre educação emancipadora.</span>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="w-1.5 h-1.5 bg-pf-red rounded-full mt-2 shrink-0"></span>
                  <span>Produção de materiais didáticos e apoio a movimentos sociais.</span>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="w-1.5 h-1.5 bg-pf-red rounded-full mt-2 shrink-0"></span>
                  <span>Realização de diálogos semanais e preservação de acervo digital.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
