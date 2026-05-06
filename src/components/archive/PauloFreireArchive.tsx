import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Book, Youtube, FileText } from 'lucide-react';

// Reuse the type structure from SME archive for consistency
interface ArchiveItem {
  title: string;
  year?: string;
  link: string;
  cover?: string;
  author?: string;
  type?: 'book' | 'video';
}

interface ArchiveCategory {
  id: string;
  title: string;
  items: ArchiveItem[];
}

const ARCHIVE_CONTENT: ArchiveCategory[] = [
  {
    id: 'obras-de',
    title: 'Obras de Paulo Freire',
    items: [
      { title: 'Educação Como Prática da Liberdade', year: '1967', link: 'https://drive.google.com/file/d/1Evdx0p5g2-Ka7MS_NDZXiqKga80H-yVx/view', cover: 'https://i.postimg.cc/Wz78Z5wB/Educacso-Como-Pra-tica-da-Liberdade.png' },
      { title: 'Pedagogia do Oprimido', year: '1968', link: 'https://drive.google.com/file/d/1uPbpmtueOkGd6mmUVZkKk5qF5vcC8_RA/view', cover: 'https://i.postimg.cc/595nDtWL/Pedagogia-do-Oprimido.png' },
      { title: 'Extensão ou Comunicação?', year: '1969', link: 'https://drive.google.com/file/d/1jstNBCCQaMtS8t7ki5LZG-Q-3WYysIka/view', cover: 'https://i.postimg.cc/bY034vfv/Extensa-o-ou-Comunicac-a-o.png' },
      { title: 'Ação Cultural: Para a Liberdade e Outros Escritos', year: '1976', link: 'https://drive.google.com/file/d/1fU_d8gJ4DU5TlKRnedocnkzFWQbREgfh/view', cover: 'https://i.postimg.cc/wMk2NwQ1/Ac-a-o-Cultural-Para-a-Liberdade.png' },
      { title: 'Educação e Mudança', year: '1979', link: 'https://drive.google.com/file/d/1M5DP5L7Fkikw3lrkmlgl3IF2nj7Bj8G_/view', cover: 'https://i.postimg.cc/1XKBFvrb/Educac-a-o-e-Mudanc-a.png' },
      { title: 'A Importância do Ato de Ler em Três Artigos que se Completam', year: '1981', link: 'https://drive.google.com/file/d/1rNSrrooZcWCQ-r5_mHy9PmamT-qFEm8y/view', cover: 'https://i.postimg.cc/VvFgtKWd/A-Importa-ncia-do-Ato-de-Ler.png' },
      { title: 'Partir da Infância - Diálogos Sobre a Educação', author: 'Paulo Freire e Sérgio Guimarães', year: '1981', link: 'https://drive.google.com/file/d/10F6X3JfgWCD4VP0A6zwD22lLiEgjQsTc/view', cover: 'https://i.postimg.cc/L4kNGsF5/Partir-da-Infa-ncia-Dia-logos-Sobre.png' },
      { title: 'Por Uma Pedagogia da Pergunta', author: 'Paulo Freire e Antonio Faundez', year: '1985', link: 'https://drive.google.com/file/d/1MqdogLS0nAZhXZl7eHH3dZg4EuLyvEDv/view', cover: 'https://i.postimg.cc/XNKQtv6f/Por-Uma-Pedagogia-da-Pergunta.png' },
      { title: 'Política e Educação', year: '1985', link: 'https://drive.google.com/file/d/1FMY7po6cdKBPi3XeG6p_-t5_ekOqoaI_/view', cover: 'https://i.postimg.cc/kMNfL5PW/Poli-tica-e-Educac-a-o.png' },
      { title: 'Medo e Ousadia', author: 'Paulo Freire e Ira Shor', year: '1986', link: 'https://drive.google.com/file/d/14UZgplaKsJDozw_UoR0MzNK2vDjs0JNa/view', cover: 'https://i.postimg.cc/sfPwb2CX/Medo-e-Ousadia.png' },
      { title: 'Aprendendo com a Própria História', author: 'Paulo Freire e Sérgio Guimarães', year: '1987', link: 'https://drive.google.com/file/d/1ijt5qmsEgV9qhJU0O4cRksq2oP--WOh3/view', cover: 'https://i.postimg.cc/1XKBFvrw/Aprendendo-com-a-Pro-pria-Histo-ria.png' },
      { title: 'Alfabetização: Leitura do Mundo, Leitura da Palavra', author: 'Paulo Freire e Donaldo Macedo', year: '1987', link: 'https://drive.google.com/file/d/1TsDu6SfN9HS_WLQI5i4luiDG5DvsTrw6/view', cover: 'https://i.postimg.cc/L5VDPx3t/Alfabetizac-a-o-Leitura-do-Mundo.png' },
      { title: 'Pedagogia da Esperança: Um Reencontro com a Pedagogia do Oprimido', year: '1992', link: 'https://drive.google.com/file/d/1VV8LBWXNzBg6IVfX4CvcVMYu-DubLg6b/view', cover: 'https://i.postimg.cc/L4kNGsFZ/Pedagogia-da-Esperanc-a-Um-Reencontro.png' },
      { title: 'Professora, Sim; Tia, Não - Cartas a Quem Ousa Ensinar', year: '1993', link: 'https://drive.google.com/file/d/1A4uCdjjKVZil3QpB0_MSmHRp6_S0n93R/view', cover: 'https://i.postimg.cc/pVQq3dMB/Professora-Sim-Tia-Na-o.png' },
      { title: 'Pedagogia da Autonomia', year: '1996', link: 'https://drive.google.com/file/d/1S6aMX2diROfgpLwZSbLm9s8caACucBYq/view', cover: 'https://i.postimg.cc/dQR4g0cZ/Pedagogia-da-Autonomia.png' },
      { title: 'Pedagogia da Indignação: Cartas Pedagógicas e Outros Escritos', year: '2000', link: 'https://drive.google.com/file/d/10ogS_Q-fS5zaWCe6enXagyQwMNs9eQrQ/view', cover: 'https://i.postimg.cc/G3Pq6pnD/Pedagogia-da-Indignac-a-o.png' },
      { title: 'A África Ensinando a gente', author: 'com Sérgio Guimarães', year: '2003', link: 'https://drive.google.com/file/d/1rjhuUaBIRmTHDEWBx8IpviEuJzOTs4zq/view', cover: 'https://i.postimg.cc/j2TvCpPH/A-A-frica-Ensinando-a-gente.png' },
      { title: 'Dialogando com a Própria História', author: 'com Sérgio Guimarães', year: '2013', link: 'https://drive.google.com/file/d/1G8apW1eg8fXSTQjsvZ6QdRJs6AHPTdjU/view', cover: 'https://i.postimg.cc/SRGd9gf5/Dialogando-com-a-Pro-pria-Histo-ria.png' },
      { title: 'Educar com a Mídia - Novos Diálogos Sobre Educação', author: 'com Sérgio Guimarães', year: '2013', link: 'https://drive.google.com/file/d/14UcDu02oP4fn7MaxFAxt8sBHLMNavEfW/view', cover: 'https://i.postimg.cc/J73PShCR/Educar-com-a-Mi-dia.png' },
      { title: 'Lições de Casa: Últimos Diálogos Sobre Educação', author: 'com Sérgio Guimarães', year: '2013', link: 'https://drive.google.com/file/d/1vCMm431QKjmxiGihnOefWf-CCt7kWOSa/view', cover: 'https://i.postimg.cc/QNg0vMZd/Lic-o-es-de-Casa-U-ltimos-Dia-logos.png' },
      { title: 'À Sombra desta Mangueira', year: '2015', link: 'https://drive.google.com/file/d/1aGzfVqQzwPWcXOjngNEkI9OcwQRZwWy3/view?usp=sharing', cover: 'https://i.postimg.cc/j2hcfM4n/A-Sombra-desta-Mangueira.png' },
      { title: 'Virtudes do Educador', link: 'https://drive.google.com/file/d/1619nJVv_0aNxL6Fw8Ct-YHexL8oA9RdP/view?usp=sharing', cover: 'https://i.postimg.cc/9XPJsfHp/Virtudes-do-Educador.png' },
      { title: 'Cartas a Cristina', year: '1994', link: 'https://drive.google.com/file/d/1LilArYFoILPTvQ5-Ilnrwy5mHzJQWitY/view?usp=sharing', cover: 'https://i.postimg.cc/yxTjRLyp/Cartas-a-Cristina.png' },
      { title: 'Conscientização', year: '1979', link: 'https://drive.google.com/file/d/1l5-8FRLgpkUcq8F9wjDZKpLJVk47SPu8/view?usp=sharing', cover: 'https://i.postimg.cc/C5478cs6/Conscientizac-a-o.png' },
      { title: 'Pedagogia: diálogo e conflito', year: '1989', link: 'https://drive.google.com/file/d/106R0Ol4K0NKxqxU2wT-oTDLKzgdRc5i2/view?usp=sharing', cover: 'https://i.postimg.cc/mZ38KrWQ/Pedagogia-dia-logo-e-conflito.png' },
      { title: 'Educadores de rua: Uma Abordagem Crítica', year: '1989', link: 'https://drive.google.com/file/d/1F8bLAnUMlIQ-Qq_LorDSp05fofuVQGf7/view?usp=sharing', cover: 'https://i.postimg.cc/J0QxXp59/Educadores-de-rua-Uma-Abordagem-Cri-tica.png' },
      { title: 'Essa Escola Chamada Vida', year: '1985', link: 'https://drive.google.com/file/d/1IUq02GKPV-9cynHfNZJXuYCWdS3fTZzB/view?usp=sharing', cover: 'https://i.postimg.cc/fW7B1bQz/Essa-Escola-Chamada-Vida.png' },
      { title: 'Cartas à Guiné-Bissau: Registros de uma Esperência em Processo', link: 'https://drive.google.com/file/d/1JWs70RiWfk74qylqLHKLUKlyQ27HuaEY/view?usp=sharing', cover: 'https://i.postimg.cc/j2hcfM41/Cartas-a-Guine-Bissau.png' },
    ]
  },
  {
    id: 'obras-sobre',
    title: 'Obras sobre Paulo Freire',
    items: [
      { title: 'Paulo Freire - Educar Para Transformar', link: 'https://drive.google.com/file/d/1o4I3Ktd_Amo4IBaANRd3XgBstOhkId1n/view', cover: 'https://i.postimg.cc/fW7B1bQk/Paulo-Freire-Educar-Para-Transformar.png' },
      { title: 'Paulo Freire - Uma Bibliografia', link: 'https://drive.google.com/file/d/14WeYe-2YhKjRAFoVGAoguGKvqmMgtQ7u/view', cover: 'https://i.postimg.cc/44vBj3Rm/Paulo-Freire-Uma-Bibliografia.png' },
      { title: 'Paulo Freire em Tempos de Fake News', link: 'https://drive.google.com/file/d/1VAYwgOCtfzVEO3Ttp0IjwILvviWQjKbB/view', cover: 'https://i.postimg.cc/NG8pZ0vy/Paulo-Freire-em-Tempos-de-Fake-News.png' },
      { title: 'Dicionário Paulo Freire', year: '2010', link: 'https://drive.google.com/file/d/1IKwlsyGHwzxq-J0PNQ961x0CNwYQyFli/view', cover: 'https://i.postimg.cc/wM9PnyWC/Diciona-rio-Paulo-Freire.jpg' },
      { title: 'Carta de Paulo Freire aos Professores', year: '2001', link: 'https://drive.google.com/file/d/1gj_ZMxSgmbHpmCUeLKME-LOjz8J8g4uu/view?usp=sharing', cover: 'https://i.postimg.cc/ZnLHNwxr/Carta-de-Paulo-Freire-aos-Professores.png' },
      { title: '100 anos com Paulo Freire – Tomo 1', link: '#', cover: 'https://i.postimg.cc/D0h5m9L1/100-anos-com-paulofreire-0003-tomo-1.jpg' },
      { title: '100 anos com Paulo Freire – Tomo 2', link: '#', cover: 'https://i.postimg.cc/WzVStBgr/100-anos-com-paulofreire-0002-tomo-2.jpg' },
      { title: '100 anos com Paulo Freire – Tomo 3', link: 'https://drive.google.com/file/d/1ohZAuNpXGldcKO4uGQuC4bRJaOpsb52D/view?usp=sharing', cover: 'https://i.postimg.cc/7h4XbF00/100-anos-com-paulofreire-0001-tomo-3.jpg' },
      { title: '100 anos com Paulo Freire – Tomo 4', link: '#', cover: 'https://i.postimg.cc/Znmj0GpN/100-anos-com-paulofreire-0000-tomo-4.jpg' },
    ]
  },
  {
    id: 'videos',
    title: 'Vídeos sobre Paulo Freire',
    items: [
      { 
        title: 'Caderno de Saberes de Paulo Freire – Episódio 1', 
        author: 'Sesc São Caetano',
        link: 'https://www.youtube.com/watch?v=IUZzbO963r4', 
        cover: 'https://i3.ytimg.com/vi/IUZzbO963r4/hqdefault.jpg',
        type: 'video'
      },
      { 
        title: 'Caderno de Saberes de Paulo Freire – Episódio 2', 
        author: 'Sesc São Caetano',
        link: 'https://www.youtube.com/watch?v=tYIfhtt3suo', 
        cover: 'https://i3.ytimg.com/vi/tYIfhtt3suo/hqdefault.jpg',
        type: 'video'
      },
      { 
        title: 'Caderno de Saberes de Paulo Freire – Episódio 3', 
        author: 'Sesc São Caetano',
        link: 'https://www.youtube.com/watch?v=FD2RSb4U26Y', 
        cover: 'https://i3.ytimg.com/vi/FD2RSb4U26Y/hqdefault.jpg',
        type: 'video'
      },
    ]
  }
];

function ItemGrid({ items }: { items: ArchiveItem[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-10">
      {items.map((item, idx) => (
        <ArchiveItemCard key={idx} item={item} />
      ))}
    </div>
  );
}

const ArchiveItemCard: React.FC<{ item: ArchiveItem }> = ({ item }) => {
  const defaultPlaceholder = "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?q=80&w=400&h=600&auto=format&fit=crop&fm=jpg";
  const isVideo = item.type === 'video';
  
  return (
    <motion.a
      href={item.link}
      whileHover={{ y: -5 }}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex flex-col gap-3 group/item h-full ${item.link === '#' ? 'pointer-events-none opacity-60' : ''}`}
      onClick={(e) => item.link === '#' && e.preventDefault()}
    >
      <div className="aspect-[3/4] bg-pf-feature border border-subtle flex flex-col items-center justify-center text-center relative overflow-hidden group-hover/item:border-pf-red transition-colors">
        <img 
          src={item.cover || defaultPlaceholder} 
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover/item:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-pf-dark/80 via-pf-dark/20 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-pf-red opacity-60"></div>
        
        {isVideo && (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="w-10 h-10 bg-pf-red rounded-full flex items-center justify-center text-white shadow-lg group-hover/item:scale-110 transition-transform">
              <Youtube size={16} />
            </div>
          </div>
        )}

        <div className="relative z-10 p-4 flex flex-col items-center justify-end h-full w-full">
          {item.year && (
            <span className="text-[9px] font-bold uppercase tracking-widest text-white/90 bg-pf-red/80 px-2 py-0.5 rounded-full mb-3 shadow-lg">
              {item.year}
            </span>
          )}
          <h4 className="text-[10px] font-bold leading-tight px-1 uppercase tracking-tight line-clamp-4 text-white drop-shadow-md">
            {item.title}
          </h4>
        </div>
      </div>

      <div className="px-0.5">
        <h3 className="font-bold text-[13px] leading-tight group-hover/item:text-pf-red transition-colors mb-1 line-clamp-3">
          {item.title}
        </h3>
        {item.author && (
          <p className="text-[10px] font-medium text-pf-muted uppercase tracking-tight mb-2 line-clamp-1">
            {item.author}
          </p>
        )}
        <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-pf-red">
          {item.link === '#' ? 'Em breve' : (isVideo ? 'Assistir vídeo →' : 'Acesse a obra →')}
        </div>
      </div>
    </motion.a>
  );
}

export default function PauloFreireArchive() {
  return (
    <div className="bg-pf-bg min-h-screen">
      {/* Hero Section - Matching SME Archive layout */}
      <section className="py-24 border-b-subtle bg-pf-bg">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          {/* Paulo Freire Photo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mb-16"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-pf-red -m-4 -z-10 group-hover:-m-2 transition-all duration-500"></div>
              <img 
                src="https://i.postimg.cc/FRxGtzNw/image-2026-05-06-161650518.png" 
                alt="Paulo Freire" 
                referrerPolicy="no-referrer"
                className="w-48 h-48 md:w-64 md:h-64 object-cover border-4 border-white shadow-2xl transition-all duration-700"
              />

            </div>
          </motion.div>

          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-pf-red/20"></div>
            <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-pf-red">Acervo</span>
            <div className="h-px flex-1 bg-pf-red/20"></div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-12 text-center text-pf-dark">
            Paulo Freire <br />
            <span className="text-pf-red leading-tight">Obras e Legado</span>
          </h1>
          <div className="max-w-3xl mx-auto space-y-6 text-pf-muted text-base md:text-lg leading-relaxed text-center">
            <p className="font-bold uppercase tracking-widest text-[10px] text-pf-red">Patrono da Educação Brasileira</p>
            <p>
              O acervo documental e bibliográfico de Paulo Freire é um pilar fundamental para a compreensão da educação popular no Brasil e no mundo. Suas obras transcendem as fronteiras da pedagogia, propondo uma visão ética e política da existência humana baseada no diálogo e na autonomia.
            </p>
            <p>
              Abaixo, você encontrará uma seleção das principais obras escritas por Paulo Freire, além de materiais de estudo sobre seu pensamento e registros audiovisuais de seu legado na rede municipal de São Paulo e em outras frentes de atuação.
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="flex flex-col gap-32">
            {ARCHIVE_CONTENT.map((category) => (
              <div key={category.id} className="scroll-mt-24">
                <div className="border-l-4 border-pf-red pl-8 mb-16">
                  <h2 className="text-4xl font-bold tracking-tighter text-pf-red mb-4">{category.title}</h2>
                  <div className="h-0.5 w-24 bg-pf-red/20 mb-12"></div>
                  <ItemGrid items={category.items} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section - Matching the SME style Call to Action */}
      <section className="py-24 bg-pf-feature border-y border-subtle">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <blockquote className="text-2xl md:text-4xl italic font-serif leading-relaxed mb-10 opacity-80 text-pf-dark">
            "Se a educação sozinha não transforma a sociedade, sem ela tampouco a sociedade muda."
          </blockquote>
          <cite className="text-pf-red font-bold uppercase tracking-[0.3em] text-xs">— Paulo Freire</cite>
        </div>
      </section>
    </div>
  );
}
