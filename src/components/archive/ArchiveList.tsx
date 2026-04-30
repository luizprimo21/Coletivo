import { motion } from 'motion/react';
import { BookOpen, FileText, Download } from 'lucide-react';
import { ArchiveItem } from '../../types';
import { useState } from 'react';

const ARCHIVE_ITEMS: ArchiveItem[] = [
  { id: '1', title: 'Pedagogia da Autonomia: Guia de Estudo', type: 'livro', author: 'Coletivo PF', year: '2022', link: '#' },
  { id: '2', title: 'Relatório de Atividades: Educação na Favela', type: 'documento', author: 'Equipe Campo', year: '2023', link: '#' },
  { id: '3', title: 'Círculos de Cultura: Metodologia Ativa', type: 'livro', author: 'Maria Silva', year: '2021', link: '#' },
  { id: '4', title: 'Manifesto pela Educação Emancipadora', type: 'documento', author: 'Coletivo PF', year: '2023', link: '#' },
];

export default function ArchiveList() {
  const [filter, setFilter] = useState<'todos' | 'livro' | 'documento'>('todos');

  const filteredItems = ARCHIVE_ITEMS.filter(item => 
    filter === 'todos' ? true : item.type === filter
  );

  return (
    <div className="bg-pf-bg min-h-screen">
      <section className="py-24 border-b-subtle">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter uppercase mb-6 text-pf-dark">Acervo Digital</h1>
          <p className="text-pf-muted text-base max-w-2xl">
            Biblioteca digital com documentos históricos, livros e artigos produzidos pelo nosso coletivo para livre consulta e download.
          </p>
        </div>
      </section>

      <section className="py-12 border-b-subtle">
        <div className="max-w-7xl mx-auto px-5 md:px-10 flex gap-6 overflow-x-auto pb-4">
          {(['todos', 'livro', 'documento'] as const).map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`text-[11px] font-bold uppercase tracking-widest px-6 py-2 border-subtle transition-colors whitespace-nowrap ${
                filter === type ? 'bg-pf-red text-white border-pf-red' : 'bg-transparent text-pf-muted hover:border-pf-dark'
              }`}
            >
              {type}s
            </button>
          ))}
        </div>
      </section>

      <section className="">
        <div className="max-w-7xl mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-subtle border-t-0">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`p-10 flex flex-col gap-6 hover:bg-pf-feature transition-colors cursor-pointer border-b-subtle lg:border-b-0 ${idx !== filteredItems.length - 1 ? 'lg:border-r-subtle' : ''}`}
            >
              <div className="text-pf-red">
                {item.type === 'livro' ? <BookOpen size={24} strokeWidth={1.5} /> : <FileText size={24} strokeWidth={1.5} />}
              </div>
              <h3 className="text-lg font-bold leading-tight">{item.title}</h3>
              <div className="flex flex-col gap-1 text-[11px] text-pf-muted uppercase font-bold tracking-tight">
                <span>{item.author}</span>
                <span>{item.year}</span>
              </div>
              <a href={item.link} className="text-[12px] font-bold text-pf-red uppercase hover:opacity-70 transition-opacity mt-auto flex items-center gap-2 no-underline">
                Download PDF
                <Download size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
