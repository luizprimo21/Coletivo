import { motion } from 'motion/react';
import { Youtube, Calendar, ExternalLink } from 'lucide-react';
import { EVENTS } from '../../data/events_data';

export default function EventsList() {
  return (
    <div className="bg-pf-bg min-h-screen">
      <section className="py-20 border-b-subtle">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-pf-dark">LIVES E EVENTOS</h1>
            <p className="text-pf-muted uppercase tracking-widest text-xs font-bold">Resistência através do diálogo</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-subtle overflow-hidden">
            {EVENTS.map((event, idx) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-10 flex flex-col gap-6 transition-colors hover:bg-pf-feature border-r border-b border-subtle"
              >
                <a 
                  href={event.link} 
                  target="_blank" 
                  rel="no-referrer"
                  className="aspect-video bg-pf-dark overflow-hidden rounded-[2px] relative group border-subtle block cursor-pointer"
                >
                   <img 
                    src={event.thumbnail} 
                    alt={event.title} 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                    referrerPolicy="no-referrer"
                   />
                   <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-12 h-12 bg-pf-red rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                        <Youtube size={20} />
                      </div>
                   </div>
                </a>
                
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
