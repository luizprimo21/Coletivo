import { motion, AnimatePresence } from 'motion/react';
import { FileText, ChevronDown, ChevronUp, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { ARCHIVE_DATA, ArchiveContentItem } from '../../data/archive_content';

interface ArchiveListProps {
  targetId?: string | null;
}

const YEARS = Object.keys(ARCHIVE_DATA).sort((a, b) => b.localeCompare(a));

export default function ArchiveList({ targetId }: ArchiveListProps) {
  const [selectedItem, setSelectedItem] = useState<ArchiveContentItem | null>(null);

  useEffect(() => {
    if (targetId) {
      // Find the item with the matching id across all years
      for (const year of YEARS) {
        const item = ARCHIVE_DATA[year].find(i => i.id === targetId);
        if (item) {
          setSelectedItem(item);
          break;
        }
      }
    }
  }, [targetId]);

  return (
    <div className="bg-pf-bg min-h-screen">
      <section className="py-24 border-b-subtle">
        <div className="max-w-7xl mx-auto px-5 md:px-10 text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-pf-red/30"></div>
            <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-pf-red">Produções</span>
            <div className="h-px w-12 bg-pf-red/30"></div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-pf-dark">Textos e Manifestos</h1>
          <p className="text-pf-muted text-lg max-w-2xl mx-auto">
            Posicionamentos, manifestos e artigos produzidos pelo nosso coletivo ao longo dos anos.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-5 md:px-10">
          {YEARS.map((year) => (
            <div key={year} className="mb-20">
              <div className="flex items-center gap-6 mb-10">
                <h2 className="text-4xl font-bold text-pf-dark">{year}</h2>
                <div className="h-px flex-1 bg-pf-red/10"></div>
              </div>
              
              <div className="space-y-4">
                {ARCHIVE_DATA[year].map((item) => (
                  <motion.div
                    key={item.id}
                    layoutId={item.id}
                    onClick={() => setSelectedItem(item)}
                    className="group bg-white border border-pf-red/10 p-6 md:p-8 hover:border-pf-red/40 hover:shadow-xl transition-all cursor-pointer flex flex-col md:flex-row md:items-center gap-6"
                  >
                    <div className="h-14 w-14 shrink-0 bg-pf-red/5 flex items-center justify-center text-pf-red group-hover:bg-pf-red group-hover:text-white transition-colors">
                      <FileText size={28} strokeWidth={1.5} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[10px] font-black uppercase tracking-widest text-pf-red bg-pf-red/5 px-2 py-0.5 rounded">
                          {item.type}
                        </span>
                        {item.date && (
                          <span className="text-[10px] font-bold text-pf-muted uppercase tracking-wider">
                            {item.date}
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-pf-dark group-hover:text-pf-red transition-colors leading-tight">
                        {item.title}
                      </h3>
                      {item.author && (
                        <p className="text-xs text-pf-muted mt-2 font-bold uppercase tracking-tight">
                          Por {item.author}
                        </p>
                      )}
                    </div>

                    <div className="text-pf-red opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="text-[11px] font-bold uppercase tracking-widest flex items-center gap-2">
                        Ler Texto Completo
                        <ChevronDown size={14} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal for detailed view */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-5 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-pf-dark/90 backdrop-blur-md"
            />
            
            <motion.div
              layoutId={selectedItem.id}
              className="relative w-full max-w-4xl max-h-[85vh] bg-pf-bg overflow-y-auto shadow-2xl border border-pf-red/20"
            >
              <button 
                onClick={() => setSelectedItem(null)}
                className="sticky top-6 right-6 float-right bg-white p-2 text-pf-dark hover:text-pf-red transition-colors z-10"
              >
                <X size={24} />
              </button>

              <div className="p-8 md:p-16">
                <div className="max-w-2xl mx-auto">
                  <div className="flex flex-wrap items-center gap-4 mb-8">
                    <span className="text-[12px] font-black uppercase tracking-[0.2em] text-pf-red">
                      {selectedItem.type}
                    </span>
                    <div className="h-4 w-px bg-pf-red/20"></div>
                    <span className="text-[12px] font-bold text-pf-muted uppercase tracking-[0.1em]">
                      {selectedItem.date || selectedItem.year}
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-pf-dark mb-10 leading-none">
                    {selectedItem.title}
                  </h2>

                  {selectedItem.author && (
                    <div className="mb-12 p-6 bg-pf-red/5 border-l-4 border-pf-red">
                      <p className="text-sm font-bold text-pf-dark uppercase tracking-wide">
                        Autor: <span className="text-pf-red">{selectedItem.author}</span>
                      </p>
                    </div>
                  )}

                  <div className="space-y-6 text-pf-dark/80 text-lg leading-relaxed whitespace-pre-wrap font-serif">
                    {selectedItem.content}
                  </div>

                  <div className="mt-20 pt-10 border-t border-pf-red/10 flex justify-center">
                    <button 
                      onClick={() => setSelectedItem(null)}
                      className="bg-pf-red text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-opacity-90 transition-all text-sm"
                    >
                      Fechar Texto
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
