import { motion } from 'motion/react';
import { Youtube, Calendar, ExternalLink } from 'lucide-react';
import { EventItem } from '../../types';

const EVENTS: EventItem[] = [
  {
    id: '0',
    title: 'Lançamento: Cadernos de Formação nº01',
    date: '15 MAR 2025',
    link: 'https://www.youtube.com/live/qhfV5OYYNqE?si=B-amydDG09PZ78_y',
    thumbnail: 'https://img.youtube.com/vi/qhfV5OYYNqE/maxresdefault.jpg',
    description: 'Apresentação do primeiro volume dos Cadernos de Formação do Coletivo Paulo Freire.',
  },
  {
    id: 'extra-1',
    title: 'Educação Popular na Cidade de São Paulo',
    date: '9 DEZ 2024',
    link: 'https://www.youtube.com/live/OyT5QutxSq0?si=AujlOaHlmqGDG465',
    thumbnail: 'https://img.youtube.com/vi/OyT5QutxSq0/maxresdefault.jpg',
    description: 'Diálogos sobre a construção da educação popular e seus desafios contemporâneos.',
  },
  {
    id: 'extra-2',
    title: 'Roda de Conversa: Ciclo Eleitoral 2024',
    date: '25 SET 2024',
    link: 'https://www.youtube.com/live/qj0VyQUycSE?si=ocHIE6W_ghswmsSq',
    thumbnail: '/regenerated_image_1777573714869.jpg',
    description: 'O Coletivo Paulo Freire conversa com as candidadatas a vereadora de São Paulo.',
  },
  {
    id: 'extra-3',
    title: 'Roda de Conversa: Ciclo Eleitoral 2024',
    date: '20 SET 2024',
    link: 'https://www.youtube.com/live/PNqq78oImjY?si=AfacuZWlORT9uHN8',
    thumbnail: '/regenerated_image_1777573576669.jpg',
    description: 'O Coletivo Paulo Freire conversa com as candidadatas a vereadora de São Paulo.',
  },
  {
    id: 'extra-4',
    title: 'Revogação do novo ensino médio',
    date: '11 AGO 2023',
    link: 'https://www.youtube.com/watch?v=ORRQqD3Qack',
    thumbnail: 'https://img.youtube.com/vi/ORRQqD3Qack/maxresdefault.jpg',
    description: 'Uma pauta que tem mobilizado o movimento estudantil por todo o Brasil.',
  },
  {
    id: '1',
    title: 'Roda de Conversa: Ciclo Eleitoral 2022',
    date: '17 AGO 2022',
    link: 'https://www.youtube.com/watch?v=avez32WQFs0&list=PLkMGE7vcdkJzIni4W2DdgvnyTuCaqW9ne',
    thumbnail: '/regenerated_image_1777570671640.jpg',
    description: 'Diálogo com candidatos a deputado estadual e federal sobre compromissos com a educação pública.',
  },
  {
    id: '2',
    title: 'Não ao SampaPrev2! Como entender melhor?',
    date: '29 OUT 2021',
    link: 'https://youtu.be/LUKufBi7Rrc',
    thumbnail: 'https://img.youtube.com/vi/LUKufBi7Rrc/maxresdefault.jpg',
    description: 'Com Felipe Torres, discutindo os impactos e perdas da reforma previdenciária municipal.',
  },
  {
    id: '3',
    title: 'Centenário de Paulo Freire - Coletivos Regionais',
    date: '17 SET 2021',
    link: 'https://youtu.be/JI9wODgx5rw',
    thumbnail: 'https://img.youtube.com/vi/JI9wODgx5rw/maxresdefault.jpg',
    description: 'Celebração do centenário do mestre Paulo Freire com participação de coletivos regionais.',
  },
  {
    id: '4',
    title: 'O Estado da Arte nas Escolas: Acolhimento e Condições',
    date: '27 AGO 2021',
    link: 'https://drive.google.com/file/d/1NeAdACzU1Ta5qxSKV3CO3J9O46dnpYLV/view',
    thumbnail: '/regenerated_image_1777573097483.jpg',
    description: 'Reflexões sobre aprendizagem e condições sanitárias no retorno escolar.',
  },
  {
    id: '5',
    title: 'Paulo Freire na África: Diálogos com Cabo Verde',
    date: '23 JUL 2021',
    link: 'https://www.youtube.com/watch?v=aHHXGSsdvVc',
    thumbnail: 'https://img.youtube.com/vi/aHHXGSsdvVc/maxresdefault.jpg',
    description: 'Conexão internacional explorando o legado de Freire no continente africano.',
  },
  {
    id: '6',
    title: 'Segurança Sanitária na Volta às Aulas?',
    date: '21 JUN 2021',
    link: 'https://www.youtube.com/watch?v=Vilaw7nXACU',
    thumbnail: 'https://img.youtube.com/vi/Vilaw7nXACU/maxresdefault.jpg',
    description: 'Análise técnica e política sobre os riscos do retorno presencial durante a pandemia.',
  },
  {
    id: '7',
    title: 'Frei Betto e Convidados',
    date: '21 MAI 2021',
    link: 'https://youtu.be/-uP9SbBB4HI',
    thumbnail: 'https://img.youtube.com/vi/-uP9SbBB4HI/maxresdefault.jpg',
    description: 'Um encontro inspirador com Frei Betto sobre educação e transformação social.',
  },
  {
    id: '8',
    title: 'A Gestão Paulo Freire em SP (Abril)',
    date: '23 ABR 2021',
    link: 'https://youtu.be/KwcfyD6VyLE',
    thumbnail: 'https://img.youtube.com/vi/KwcfyD6VyLE/maxresdefault.jpg',
    description: 'Memórias e análises sobre o período em que Freire foi secretário de educação em São Paulo.',
  },
  {
    id: '9',
    title: 'A Gestão Paulo Freire em SP (Março)',
    date: '19 MAR 2021',
    link: 'https://youtu.be/zZAS4ByqQ-Y',
    thumbnail: 'https://img.youtube.com/vi/zZAS4ByqQ-Y/maxresdefault.jpg',
    description: 'Continuidade do debate sobre os eixos centrais da gestão Freire na prefeitura de SP.',
  },
  {
    id: '10',
    title: 'Paulo Freire, um Ser Tão Humano',
    date: '18 FEV 2021',
    link: 'https://youtu.be/5OilJYK__z8',
    thumbnail: 'https://img.youtube.com/vi/5OilJYK__z8/maxresdefault.jpg',
    description: 'Entrevista exclusiva com Nita Freire sobre a vida e humanidade do educador.',
  },
  {
    id: '11',
    title: 'Educação e Pandemia em 2021: Papel da Escola',
    date: '11 JAN 2021',
    link: 'https://youtu.be/rqbJRN-g2Es',
    thumbnail: 'https://img.youtube.com/vi/rqbJRN-g2Es/maxresdefault.jpg',
    description: 'Debate sobre as perspectivas e desafios para o ano letivo de 2021.',
  },
  {
    id: '12',
    title: 'Memória Pedagógica Viva: Acervo Digital',
    date: '19 SET 2020',
    link: 'https://youtu.be/K3ZprjDaPKI',
    thumbnail: 'https://img.youtube.com/vi/K3ZprjDaPKI/maxresdefault.jpg',
    description: 'Apresentação do acervo digital em parceria com a UNESP.',
  },
  {
    id: '13',
    title: 'Eleições Municipais I: Compromisso com a Educação',
    date: '11 SET 2020',
    link: 'https://youtu.be/6mlta_TeMag',
    thumbnail: 'https://img.youtube.com/vi/6mlta_TeMag/maxresdefault.jpg',
    description: 'Primeira parte da série sobre compromissos educacionais nas eleições de 2020.',
  },
  {
    id: '14',
    title: 'Eleições Municipais II: Compromisso com a Educação',
    date: '08 SET 2020',
    link: 'https://youtu.be/6NAbIpkJ-Cg',
    thumbnail: 'https://img.youtube.com/vi/6NAbIpkJ-Cg/maxresdefault.jpg',
    description: 'Segunda parte da série sobre compromissos educacionais nas eleições de 2020.',
  },
  {
    id: '15',
    title: 'Gestão Democrática: Uma Luta Cotidiana',
    date: '14 AGO 2020',
    link: 'https://youtu.be/ylVceSQ_FQQ',
    thumbnail: 'https://img.youtube.com/vi/ylVceSQ_FQQ/maxresdefault.jpg',
    description: 'Reflexões sobre a construção da democracia dentro e fora do ambiente escolar.',
  },
  {
    id: '16',
    title: 'Prática Supervisora e Qualidade da Escola Pública',
    date: '10 JUL 2020',
    link: 'https://youtu.be/L5d9kU4lBSg',
    thumbnail: 'https://img.youtube.com/vi/L5d9kU4lBSg/maxresdefault.jpg',
    description: 'Discussão sobre caminhos possíveis para a supervisão escolar de qualidade.',
  },
  {
    id: '17',
    title: 'Educação e Pandemia (2020): Papel da Escola',
    date: '12 JUN 2020',
    link: 'https://youtu.be/TCO2rEjdPyU',
    thumbnail: 'https://img.youtube.com/vi/TCO2rEjdPyU/maxresdefault.jpg',
    description: 'Primeiros diálogos sobre os impactos da pandemia na educação básica.',
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
