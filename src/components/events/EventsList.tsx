import { motion } from 'motion/react';
import { Youtube, Calendar, ExternalLink } from 'lucide-react';
import { EventItem } from '../../types';

const EVENTS: EventItem[] = [
  {
    id: '1',
    title: 'Educação Popular em Tempos de Incerteza',
    date: '12 OUT 2023',
    link: 'https://youtube.com',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    description: 'Um debate profundo sobre como manter a chama da educação popular viva durante crises globais.',
  },
  {
    id: '2',
    title: 'Paulo Freire: 100 Anos de Legado',
    date: '08 OUT 2023',
    link: 'https://youtube.com',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    description: 'Celebração do centenário do mestre com convidados internacionais e partilha de experiências.',
  },
  {
    id: '3',
    title: 'Alfabetização e Conscientização',
    date: '30 SET 2023',
    link: 'https://youtube.com',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    description: 'Workshop online sobre as técnicas de alfabetização de adultos com base no método Freireano.',
  },
];

export default function EventsList() {
  return (
    <div className="bg-pf-bg min-h-screen">
      <section className="py-20 border-b-subtle">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-pf-dark">LIVES E EVENTOS</h1>
            <p className="text-pf-muted uppercase tracking-widest text-xs font-bold">Resistência através do diálogo</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-subtle overflow-hidden">
            {EVENTS.map((event, idx) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`p-10 flex flex-col gap-6 transition-colors hover:bg-pf-feature ${
                  idx !== EVENTS.length - 1 ? 'border-r-subtle' : ''
                } md:border-b-0 border-b-subtle`}
              >
                <div className="aspect-video bg-pf-dark overflow-hidden rounded-[2px] relative group border-subtle">
                   <img 
                    src={event.thumbnail} 
                    alt={event.title} 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                    referrerPolicy="no-referrer"
                   />
                   <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-12 h-12 bg-pf-red rounded-full flex items-center justify-center text-white shadow-lg">
                        <Youtube size={20} />
                      </div>
                   </div>
                </div>
                
                <div>
                  <span className="text-[11px] font-bold text-pf-red uppercase mb-2 block">{event.date}</span>
                  <h3 className="text-xl font-bold leading-tight mb-4">{event.title}</h3>
                  <p className="text-pf-muted text-sm leading-relaxed mb-6">
                    {event.description}
                  </p>
                </div>

                <a 
                  href={event.link} 
                  target="_blank" 
                  rel="no-referrer"
                  className="mt-auto flex items-center gap-2 text-pf-red font-bold text-[12px] uppercase tracking-wider no-underline hover:opacity-80 transition-opacity"
                >
                  Assistir agora
                  <ExternalLink size={14} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
