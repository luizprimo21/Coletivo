import { motion } from 'motion/react';
import { NavItem } from '../../types';

interface NewsProps {
  onNavigate?: (id: string) => void;
}

export default function News({ onNavigate }: NewsProps) {
  const cards = [
    {
      id: 'quem-somos',
      title: 'Quem Somos',
      description: 'Um grupo de educadores e militantes dedicados a manter viva a pedagogia crítica e transformadora.',
    },
    {
      id: 'eventos',
      title: 'Eventos',
      description: 'Assista às nossas últimas lives e diálogos sobre educação, política e justiça social.',
    },
    {
      id: 'acervo',
      title: 'Acervo',
      description: 'Biblioteca digital com documentos históricos, livros e artigos produzidos pelo nosso coletivo.',
    },
    {
      id: 'parcerias',
      title: 'Parcerias',
      description: 'Instituições e movimentos que caminham conosco na construção de uma sociedade mais justa.',
    },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-b-subtle">
      {cards.map((card, idx) => (
        <div 
          key={card.id}
          className={`p-10 flex flex-col gap-6 hover:bg-pf-bg transition-colors group cursor-pointer ${
            idx !== cards.length - 1 ? 'lg:border-r-subtle' : ''
          } border-b-subtle sm:border-b-subtle lg:border-b-0`}
          onClick={() => onNavigate?.(card.id)}
        >
          <h2 className="text-xl font-bold tracking-tight">{card.title}</h2>
          <p className="text-[13px] leading-relaxed text-pf-muted">
            {card.description}
          </p>
          <button className="mt-auto flex items-center gap-2 text-[12px] font-bold uppercase text-pf-red self-start group-hover:gap-3 transition-all">
            Saiba Mais
            <span>→</span>
          </button>
        </div>
      ))}
    </section>
  );
}
