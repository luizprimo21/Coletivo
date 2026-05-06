import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, Book, FileText, Calendar, Newspaper, ArrowRight } from 'lucide-react';
import { ARCHIVE_DATA } from '../../data/archive_content';
import { NEWS_ITEMS } from '../../data/news_data';
import { EVENTS } from '../../data/events_data';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: string, id?: string | null) => void;
}

type SearchResult = {
  id: string;
  targetId?: string;
  title: string;
  type: 'archive' | 'news' | 'event';
  category?: string;
  excerpt?: string;
};

export default function SearchOverlay({ isOpen, onClose, onNavigate }: SearchOverlayProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setQuery('');
      setResults([]);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    if (query.trim().length === 0) {
      setResults([]);
      return;
    }

    const q = query.toLowerCase();

    // Flatten ARCHIVE_DATA
    const archiveItems = Object.values(ARCHIVE_DATA).flat();

    const archiveResults: SearchResult[] = archiveItems
      .filter(item => 
        item.title.toLowerCase().includes(q) || 
        (item.author?.toLowerCase().includes(q)) ||
        (item.content?.toLowerCase().includes(q))
      )
      .map(item => ({
        id: 'acervo-producoes',
        targetId: item.id,
        title: item.title,
        type: 'archive',
        category: item.type.charAt(0).toUpperCase() + item.type.slice(1),
        excerpt: item.author
      }));

    const newsResults: SearchResult[] = NEWS_ITEMS
      .filter(item => 
        item.title.toLowerCase().includes(q) || 
        item.excerpt.toLowerCase().includes(q)
      )
      .map(item => ({
        id: 'inicio',
        targetId: item.id,
        title: item.title,
        type: 'news',
        excerpt: item.excerpt
      }));

    const eventResults: SearchResult[] = EVENTS
      .filter(item => 
        item.title.toLowerCase().includes(q) || 
        item.description.toLowerCase().includes(q)
      )
      .map(item => ({
        id: 'eventos',
        title: item.title,
        type: 'event',
        excerpt: item.description
      }));

    setResults([...archiveResults, ...newsResults, ...eventResults].slice(0, 10));
  }, [query]);

  const handleNavigate = (page: string, id?: string | null) => {
    onNavigate(page, id);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-pf-dark/95 backdrop-blur-md p-6 md:p-20 overflow-y-auto"
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-12">
              <span className="text-pf-red text-[11px] font-bold uppercase tracking-[0.3em]">Busca no Site</span>
              <button 
                onClick={onClose}
                className="text-white/60 hover:text-pf-red transition-colors p-2"
              >
                <X size={32} strokeWidth={1.5} />
              </button>
            </div>

            <div className="relative mb-12">
              <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-pf-red" size={32} />
              <input
                ref={inputRef}
                type="text"
                placeholder="Pesquisar por livros, documentos, notícias..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent border-b-2 border-pf-feature py-6 pl-12 text-2xl md:text-4xl text-white placeholder:text-white/20 focus:outline-none focus:border-pf-red transition-colors font-bold tracking-tighter"
              />
            </div>

            <div className="space-y-12">
              {results.length > 0 ? (
                <div className="grid grid-cols-1 gap-4">
                  {results.map((result, idx) => (
                    <motion.div
                      key={`${result.type}-${idx}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      onClick={() => handleNavigate(result.id, result.targetId)}
                      className="group flex items-start gap-6 p-6 bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-pointer rounded-sm"
                    >
                      <div className="mt-1 text-pf-red">
                        {result.type === 'archive' && (result.category === 'Livro' ? <Book size={24} /> : <FileText size={24} />)}
                        {result.type === 'news' && <Newspaper size={24} />}
                        {result.type === 'event' && <Calendar size={24} />}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-pf-red/60">
                            {result.type === 'archive' ? result.category : result.type === 'news' ? 'Notícia' : 'Evento'}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-pf-red transition-colors mb-2">
                          {result.title}
                        </h3>
                        {result.excerpt && (
                          <p className="text-white/40 text-sm line-clamp-1 italic">
                            {result.excerpt}
                          </p>
                        )}
                      </div>
                      <ArrowRight className="text-white/20 group-hover:text-pf-red transform group-hover:translate-x-2 transition-all self-center" size={24} />
                    </motion.div>
                  ))}
                </div>
              ) : query.trim() !== '' ? (
                <div className="text-center py-20">
                  <p className="text-white/40 text-lg">Nenhum resultado encontrado para "{query}"</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-widest text-pf-red mb-6">Sugestões de Busca</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Paulo Freire', 'Educação Popular', 'Alfredo', 'SME', 'Livros', 'Documentos'].map(tag => (
                        <button
                          key={tag}
                          onClick={() => setQuery(tag)}
                          className="px-4 py-2 bg-white/5 hover:bg-pf-red/20 text-white/60 hover:text-white transition-all text-sm rounded-full border border-white/10"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-widest text-pf-red mb-6">Acesso Rápido</h4>
                    <nav className="flex flex-col gap-4">
                      <button onClick={() => handleNavigate('acervo')} className="text-white/60 hover:text-white flex items-center justify-between group">
                        <span>Acervo Digital</span>
                        <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-all" />
                      </button>
                      <button onClick={() => handleNavigate('eventos')} className="text-white/60 hover:text-white flex items-center justify-between group">
                        <span>Lives e Eventos</span>
                        <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-all" />
                      </button>
                      <button onClick={() => handleNavigate('diario-de-classe')} className="text-white/60 hover:text-white flex items-center justify-between group">
                        <span>Diário de Classe</span>
                        <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-all" />
                      </button>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
