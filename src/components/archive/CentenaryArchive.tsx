import { motion } from 'motion/react';
import { Youtube, ExternalLink, Download } from 'lucide-react';

export default function CentenaryArchive() {
  return (
    <div className="bg-pf-bg min-h-screen">
      <section className="py-20 border-b-subtle">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="mb-20">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-pf-dark">Cem anos de Paulo Freire</h1>
            <p className="text-pf-muted uppercase tracking-widest text-xs font-bold">Cem vozes de corações e mentes</p>
          </div>

          <div className="space-y-32">
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <img 
                    src="https://i.postimg.cc/bw3pCwjd/image-2026-05-06-142808475.png" 
                    alt="E-book Cem anos de Paulo Freire" 
                    className="w-full h-auto shadow-2xl border-subtle rounded-sm"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
                
                <div className="flex flex-col gap-6">
                  <p className="text-pf-dark/80 text-lg leading-relaxed font-serif italic">
                    "Celebrar o centenário de Paulo Freire é reafirmar nosso compromisso com uma educação que liberta e transforma realidades."
                  </p>
                  <div className="h-px w-20 bg-pf-red/30"></div>
                  <a 
                    href="https://drive.google.com/file/d/1iJBreK06efjErMdAON9R0UBMxn_8Kyx_/view" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-pf-red text-white py-4 px-8 font-bold uppercase tracking-[0.2em] text-[12px] hover:bg-pf-dark transition-all self-start rounded-sm shadow-lg group"
                  >
                    <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
                    Baixe agora o e-book
                  </a>
                </div>
              </div>
            </div>

            {/* Videos Section */}
            <div>
              <div className="border-l-4 border-pf-red pl-8 mb-12">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-pf-dark">Homenagens e Lançamento</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Video 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex flex-col gap-4"
                >
                  <a 
                    href="https://www.youtube.com/watch?v=JyqHn90GOF4&t=2s" 
                    target="_blank" 
                    rel="no-referrer"
                    className="aspect-video bg-pf-dark overflow-hidden rounded-[2px] relative group border-subtle block cursor-pointer"
                  >
                    <img 
                      src="https://img.youtube.com/vi/JyqHn90GOF4/sddefault.jpg" 
                      alt="Apresentação Edson Gabriel Garcia" 
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-16 h-16 bg-pf-red rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                        <Youtube size={24} />
                      </div>
                    </div>
                  </a>
                  <p className="text-pf-dark font-medium leading-relaxed">
                    Apresentação do escritor Edson Gabriel Garcia no evento de lançamento do e-book “Cem Anos de Paulo Freire, Paulo Freire Vive, Cem Vozes de Corações e Mentes”.
                  </p>
                  <a 
                    href="https://www.youtube.com/watch?v=JyqHn90GOF4&t=2s" 
                    target="_blank" 
                    rel="no-referrer"
                    className="flex items-center gap-2 text-pf-red font-bold text-[12px] uppercase tracking-wider no-underline hover:opacity-80 transition-opacity"
                  >
                    Assistir agora
                    <ExternalLink size={14} />
                  </a>
                </motion.div>

                {/* Video 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex flex-col gap-4"
                >
                  <a 
                    href="https://www.youtube.com/watch?v=irOBc_MqbB0" 
                    target="_blank" 
                    rel="no-referrer"
                    className="aspect-video bg-pf-dark overflow-hidden rounded-[2px] relative group border-subtle block cursor-pointer"
                  >
                    <img 
                      src="https://img.youtube.com/vi/irOBc_MqbB0/sddefault.jpg" 
                      alt="Depoimento Luiza Erundina" 
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-16 h-16 bg-pf-red rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                        <Youtube size={24} />
                      </div>
                    </div>
                  </a>
                  <p className="text-pf-dark font-medium leading-relaxed">
                    Depoimento de Luiz Erundina no lançamento do e-book
                  </p>
                  <a 
                    href="https://www.youtube.com/watch?v=irOBc_MqbB0" 
                    target="_blank" 
                    rel="no-referrer"
                    className="flex items-center gap-2 text-pf-red font-bold text-[12px] uppercase tracking-wider no-underline hover:opacity-80 transition-opacity"
                  >
                    Assistir agora
                    <ExternalLink size={14} />
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
