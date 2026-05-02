import { motion } from 'motion/react';
import { Youtube, ExternalLink } from 'lucide-react';

interface VideoItem {
  id: string;
  title: string;
  date: string;
  link: string;
  thumbnail: string;
  description: string;
}

interface VideoTheme {
  title: string;
  videos: VideoItem[];
}

const THEMED_VIDEOS: VideoTheme[] = [
  {
    title: '1) A política de educação de adultos na gestão de Paulo Freire/Mário Sergio Cortella',
    videos: [
      {
        id: 'roda-1-1',
        title: 'Educação de Adultos (Parte 1)',
        date: '27 JUL 2021',
        link: 'https://youtu.be/KwcfyD6VyLE',
        thumbnail: 'https://img.youtube.com/vi/G27XCRn1KBo/sddefault.jpg',
        description: 'Roda de memória das comemorações dos 30 anos da gestão democrática e popular de Luiza Erundina, Pau Freire e Mario Cortella',
      },
    ]
  },
  {
    title: 'Projeto Interdisciplinariedade',
    videos: [
      {
        id: 'roda-inter-1',
        title: 'Diagnóstico Inicial',
        date: 'HISTÓRICO',
        link: 'https://youtu.be/nTwc0AQeQEo',
        thumbnail: 'https://i3.ytimg.com/vi/nTwc0AQeQEo/hqdefault.jpg',
        description: 'Primeira fase do Projeto Interdisciplinar: o levantamento da realidade escolar.',
      },
      {
        id: 'roda-inter-2',
        title: 'A Proposta',
        date: '9 ABR 2020',
        link: 'https://youtu.be/FSKNM31T8mU',
        thumbnail: 'https://i3.ytimg.com/vi/nTwc0AQeQEo/hqdefault.jpg',
        description: 'A sistematização da proposta pedagógica baseada nos temas geradores.',
      },
      {
        id: 'roda-inter-3',
        title: 'Vivências',
        date: '9 ABR 2020',
        link: 'https://youtu.be/LbG9cL8tSpo',
        thumbnail: 'https://i3.ytimg.com/vi/nTwc0AQeQEo/hqdefault.jpg',
        description: 'Relatos da implementação prática nas escolas municipais.',
      },
      {
        id: 'roda-inter-4',
        title: 'Mudanças',
        date: '9 ABR 2020',
        link: 'https://youtu.be/6Za0A5fRFUY',
        thumbnail: 'https://i3.ytimg.com/vi/nTwc0AQeQEo/hqdefault.jpg',
        description: 'Transformações observadas no cotidiano escolar e na relação pedagógica.',
      },
      {
        id: 'roda-inter-5',
        title: 'Ganhos',
        date: '9 ABR 2020',
        link: 'https://youtu.be/T_P4Lw3sqM4',
        thumbnail: 'https://i3.ytimg.com/vi/nTwc0AQeQEo/hqdefault.jpg',
        description: 'Avaliação dos resultados e o legado do projeto para a rede municipal.',
      },
    ]
  },
  {
    title: '2) MOVA (Movimento de Alfabetização de Jovens e Adultos)',
    videos: [
      {
        id: 'roda-mova',
        title: 'Mova',
        date: '04 SET 2020',
        link: 'https://youtu.be/IMCQMDMZ6-E',
        thumbnail: 'https://i3.ytimg.com/vi/IMCQMDMZ6-E/hqdefault.jpg',
        description: 'História e impacto do Movimento de Alfabetização criado sob a gestão de Paulo Freire.',
      },
    ]
  },
  {
    title: '3) Grupo de Formação Educação Infantil e Ensino Fundamental',
    videos: [
      {
        id: 'roda-formacao',
        title: 'Grupo de formação',
        date: '1 DEZ 2020',
        link: 'https://youtu.be/jFhiGnEc_1c',
        thumbnail: 'https://img.youtube.com/vi/jFhiGnEc_1c/sddefault.jpg',
        description: 'Homenagem a Luiza Erundina e Paulo Freire',
      },
    ]
  },
  {
    title: '4) Educação em Direitos Humanos',
    videos: [
      {
        id: 'roda-dh-1',
        title: 'Educação em Direitos Humanos I',
        date: '11 DEZ 2020',
        link: 'https://youtu.be/GU2EHZUjUUk',
        thumbnail: 'https://img.youtube.com/vi/GU2EHZUjUUk/sddefault.jpg',
        description: 'Primeira parte do resgate histórico sobre as políticas de direitos humanos na SME.',
      },
      {
        id: 'roda-dh-2',
        title: 'Educação em Direitos Humanos II',
        date: 'HISTÓRICO',
        link: 'https://youtu.be/p2iwY5O36z4',
        thumbnail: 'https://img.youtube.com/vi/p2iwY5O36z4/sddefault.jpg',
        description: 'Segunda parte do debate sobre cidadania e direitos humanos na escola.',
      },
    ]
  },
 
  {
    title: '6) Estatuto do Magistério/Regimento Comum das Escolas Municipais',
    videos: [
      {
        id: 'roda-estatuto',
        title: 'Estatuto do Magistério',
        date: '10 JUN 2021',
        link: 'https://youtu.be/WEVf-Nu-BbE',
        thumbnail: 'https://img.youtube.com/vi/WEVf-Nu-BbE/sddefault.jpg',
        description: 'Debate sobre a estruturação do plano de carreira e o regimento das escolas.',
      },
    ]
  }
];

export default function RodasDeMemorias() {
  return (
    <div className="bg-pf-bg min-h-screen">
      <section className="py-20 border-b-subtle">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="mb-20">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-pf-dark">Rodas de Memórias</h1>
            <p className="text-pf-muted uppercase tracking-widest text-xs font-bold">Resgate histórico da gestão Paulo Freire na SME-SP (1989-1992)</p>
          </div>

          <div className="space-y-32">
            {THEMED_VIDEOS.map((theme) => (
              <div key={theme.title}>
                <div className="border-l-4 border-pf-red pl-8 mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-pf-dark">{theme.title}</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 overflow-hidden">
                  {theme.videos.map((video, idx) => (
                    <motion.div
                      key={video.id}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex flex-col gap-3 transition-colors hover:bg-pf-feature p-4 rounded-lg"
                    >
                      <a 
                        href={video.link} 
                        target="_blank" 
                        rel="no-referrer"
                        className="aspect-video bg-pf-dark overflow-hidden rounded-[2px] relative group border-subtle block cursor-pointer"
                      >
                         <img 
                          src={video.thumbnail} 
                          alt={video.title} 
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
                        <span className="text-[11px] font-bold text-pf-red uppercase mb-2 block">{video.date}</span>
                        <h3 className="text-xl font-bold leading-tight mb-2">{video.title}</h3>
                        <p className="text-pf-muted text-sm leading-relaxed mb-3">
                          {video.description}
                        </p>
                      </div>
      
                      <a 
                        href={video.link} 
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
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
