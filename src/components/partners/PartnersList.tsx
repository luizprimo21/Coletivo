import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, ArrowUpRight, ArrowLeft, Instagram, Facebook, Globe } from 'lucide-react';
import { PARTNERS } from '../../data/partners_data';
import { PartnerItem } from '../../types';

export default function PartnersList() {
  const [selectedPartner, setSelectedPartner] = useState<PartnerItem | null>(null);

  return (
    <div className="bg-pf-bg min-h-screen">
      <AnimatePresence mode="wait">
        {!selectedPartner ? (
          <motion.div
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <section className="py-24 border-b-subtle">
              <div className="max-w-7xl auto px-5 md:px-10">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-6 text-pf-dark">Nossas Parcerias</h1>
                <p className="text-pf-muted text-base max-w-2xl leading-relaxed">
                  Acreditamos na construção coletiva e no diálogo entre diferentes instituições para fortalecer a educação popular e a democracia brasileira.
                </p>
              </div>
            </section>

            <section className="py-20">
              <div className="max-w-7xl mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16">
                {PARTNERS.map((partner, idx) => (
                  <motion.div
                    key={partner.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    onClick={() => setSelectedPartner(partner)}
                    className="group cursor-pointer bg-white border-subtle overflow-hidden relative aspect-[16/11] md:aspect-[16/11]"
                  >
                    <div className="absolute inset-0 bg-transparent group-hover:bg-pf-dark/5 transition-colors duration-500 z-10"></div>
                    
                    <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12">
                      {partner.logo ? (
                        <img 
                          src={partner.logo} 
                          alt={partner.name} 
                          className="max-h-full max-w-full object-contain group-hover:scale-110 transition-all duration-700" 
                        />
                      ) : (
                        <div className="w-56 h-56 bg-pf-yellow rounded-full flex items-center justify-center font-bold text-6xl">
                          {partner.name.charAt(0)}
                        </div>
                      )}
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-pf-dark/95 via-pf-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex flex-col justify-end p-10">
                      <h3 className="text-3xl font-bold text-white uppercase tracking-tighter">
                        {partner.name}
                      </h3>
                      <p className="text-white/70 text-[10px] font-bold uppercase tracking-[0.3em] mt-4 flex items-center gap-3">
                        Explorar parceria <ArrowUpRight size={16} />
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="max-w-7xl mx-auto px-5 md:px-10 py-32 flex flex-col items-center text-center">
                <div className="max-w-2xl border-subtle p-16 bg-white shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-pf-yellow/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                  <h2 className="text-3xl font-bold mb-6 tracking-tight uppercase relative z-10">Quer ser um parceiro?</h2>
                  <p className="text-pf-muted text-base mb-10 leading-relaxed relative z-10">
                    Se sua instituição compartilha nossos valores e deseja colaborar em projetos educativos, entre em contato conosco para iniciarmos um diálogo.
                  </p>
                  <a 
                    href="mailto:coletivopaulofreire1@gmail.com"
                    className="inline-block px-12 py-5 bg-pf-red text-white text-[12px] font-bold uppercase tracking-widest hover:bg-pf-dark transition-all rounded-sm relative z-10"
                  >
                    Fale Conosco
                  </a>
                </div>
              </div>
            </section>
          </motion.div>
        ) : (
          <motion.div
            key="detail"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="pt-32 pb-40"
          >
            <div className="max-w-4xl mx-auto px-5 md:px-10">
              <button 
                onClick={() => setSelectedPartner(null)}
                className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-pf-muted hover:text-pf-red transition-colors mb-12"
              >
                <ArrowLeft size={14} />
                Voltar para lista
              </button>

              <div className="flex flex-col md:flex-row gap-12 items-start mb-16">
                <div className="w-48 h-48 md:w-72 md:h-72 bg-pf-feature p-10 md:p-16 border-subtle flex-shrink-0">
                  {selectedPartner.logo ? (
                    <img 
                      src={selectedPartner.logo} 
                      alt={selectedPartner.name} 
                      className="w-full h-full object-contain" 
                    />
                  ) : (
                    <div className="w-full h-full bg-pf-yellow rounded-full flex items-center justify-center font-bold text-4xl">
                      {selectedPartner.name.charAt(0)}
                    </div>
                  )}
                </div>
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight mb-6">
                    {selectedPartner.name}
                  </h1>
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href={selectedPartner.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-pf-red text-white text-[10px] font-bold uppercase tracking-widest hover:bg-pf-dark transition-all rounded-sm"
                    >
                      <Globe size={14} />
                      Website Oficial
                    </a>
                  </div>
                </div>
              </div>

              <div className="prose prose-xl max-w-none text-pf-dark/80 leading-relaxed font-serif mb-20 text-justify whitespace-pre-line">
                {selectedPartner.description}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-pf-dark/10 pt-16">
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-widest text-pf-muted mb-6">Redes e Contato</h4>
                  <div className="flex flex-col gap-4">
                    {selectedPartner.instagram && (
                      <a href={selectedPartner.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-pf-dark hover:text-pf-red transition-colors group">
                        <Instagram size={20} className="text-pf-muted group-hover:text-pf-red transition-colors" />
                        <span className="font-bold text-sm">Instagram</span>
                      </a>
                    )}
                    {selectedPartner.facebook && (
                      <a href={selectedPartner.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-pf-dark hover:text-pf-red transition-colors group">
                        <Facebook size={20} className="text-pf-muted group-hover:text-pf-red transition-colors" />
                        <span className="font-bold text-sm">Facebook</span>
                      </a>
                    )}
                    {selectedPartner.spotify && (
                      <a href={selectedPartner.spotify} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-pf-dark hover:text-pf-red transition-colors group">
                        <svg 
                          viewBox="0 0 24 24" 
                          width="20" 
                          height="20" 
                          fill="currentColor" 
                          className="text-pf-muted group-hover:text-pf-red transition-colors"
                        >
                          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.492 17.31c-.218.358-.684.47-1.042.252-2.827-1.728-6.386-2.12-10.575-1.164-.41.094-.82-.164-.914-.572-.094-.41.164-.82.572-.914 4.582-1.05 8.528-.604 11.706 1.34.358.217.47.684.252 1.042zm1.466-3.26c-.274.446-.856.59-1.302.316-3.235-1.988-8.168-2.564-11.994-1.402-.502.152-1.03-.132-1.182-.634-.152-.502.132-1.03.634-1.182 4.37-1.326 9.818-.68 13.528 1.597.446.273.59.856.316 1.302zm.128-3.398c-3.878-2.303-10.29-2.516-14.004-1.388-.594.18-1.22-.16-1.4-.754-.18-.594.16-1.22.754-1.4 4.26-1.293 11.332-1.036 15.753 1.587.534.317.708 1.01.39 1.543-.317.534-1.01.708-1.543.39z"/>
                        </svg>
                        <span className="font-bold text-sm">Spotify</span>
                      </a>
                    )}
                    {selectedPartner.email && (
                      <a href={`mailto:${selectedPartner.email}`} className="flex items-center gap-3 text-pf-dark hover:text-pf-red transition-colors group">
                        <Mail size={20} className="text-pf-muted group-hover:text-pf-red transition-colors" />
                        <span className="font-bold text-sm">{selectedPartner.email}</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
