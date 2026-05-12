import { motion } from 'motion/react';
import { Mail, ArrowRight, Heart, MapPin, Calendar, Users, BookOpen, Instagram, Facebook } from 'lucide-react';

interface DiarioDeClasseProps {
  onNavigate: (page: string, id?: string | null) => void;
}

export default function DiarioDeClasse({ onNavigate }: DiarioDeClasseProps) {
  return (
    <div className="bg-pf-bg min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-pf-dark/40 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=2000" 
          alt="Mochilão na América do Sul" 
          className="absolute inset-0 w-full h-full object-cover grayscale-[20%] hover:scale-105 transition-transform duration-[10s]"
        />
        <div className="max-w-7xl mx-auto px-5 md:px-10 relative z-20 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-pf-yellow"></div>
              <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-pf-yellow">Acervo Coletivo</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-6 leading-none">
              Diário de <span className="text-pf-yellow">Classe</span>
            </h1>
            <p className="text-2xl text-white/90 font-medium tracking-tight mb-8">
              Um mochilão libertário pela América Latina
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                  {/* Project Details */}
            <div className="lg:col-span-7">
              <div className="mb-16">
                <h2 className="text-4xl font-bold text-pf-dark mb-10 flex items-center gap-4">
                  <BookOpen className="text-pf-red" />
                  O Mochilão Libertário
                </h2>
                <div className="space-y-6 text-lg text-pf-dark/80 leading-relaxed font-serif text-justify">
                  <p>
                    O Mochilão Libertário foi um projeto/processo que nasceu com o objetivo de realizar rodas de conversa em diversas unidades escolares, coletivos e institutos de educação ao redor da América Latina. Com a chancela inicial do Coletivo Paulo Freire, a iniciativa buscou promover atividades formativas relacionadas à educação libertária, decolonial e popular, focando especialmente em entidades que preservam o legado do educador Paulo Freire.
                  </p>
                  <p>
                    O projeto justificou-se pela necessidade de debater os avanços e retrocessos democráticos na América Latina, reafirmando a educação como instituição fundamental para a consolidação dos Direitos Humanos, o respeito ao meio ambiente, aos povos originários e às lutas antirracistas, feministas e de diversidade de gênero.
                  </p>
                </div>
              </div>

              <div className="mb-16">
                <h2 className="text-4xl font-bold text-pf-dark mb-10 flex items-center gap-4">
                  <MapPin className="text-pf-red" />
                  Primeira Fase: América do Sul
                </h2>
                <div className="text-lg text-pf-dark/80 leading-relaxed font-serif space-y-6 text-justify">
                  <p>
                    A jornada começou em Porto Alegre, de onde o educador Sócrates Magno Torres partiu com destino a Puerto Chuy, no Uruguai. Esta primeira etapa durou 105 dias e traçou uma verdadeira "espinha dorsal" no continente sul-americano.
                  </p>
                  <p>
                    A expedição percorreu cidades do Uruguai (incluindo a capital Montevidéu), adentrou a Argentina por Buenos Aires e seguiu até o extremo sul, em Ushuaia (Terra do Fogo). O percurso de retorno subiu pelo Chile, passou novamente pela Argentina, Paraguai, Bolívia, Peru, Equador e Colômbia.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-8">
                    <div className="bg-white p-6 border border-pf-red/10">
                      <p className="text-[10px] uppercase font-black text-pf-red mb-1">Países</p>
                      <p className="text-2xl font-bold text-pf-dark">10</p>
                    </div>
                    <div className="bg-white p-6 border border-pf-red/10">
                      <p className="text-[10px] uppercase font-black text-pf-red mb-1">Cidades</p>
                      <p className="text-2xl font-bold text-pf-dark">+40</p>
                    </div>
                    <div className="bg-white p-6 border border-pf-red/10">
                      <p className="text-[10px] uppercase font-black text-pf-red mb-1">Intervenções</p>
                      <p className="text-2xl font-bold text-pf-dark">65</p>
                    </div>
                  </div>

                  <p>
                    Ao final desta fase, o objetivo foi entender as abordagens de cada unidade escolar e discutir os fundamentos do pensamento freireano, transformando a viagem em uma cartografia de afetos e experiências pedagógicas.
                  </p>

                  <div className="mt-8">
                    <button 
                      onClick={() => onNavigate('acervo-diario-cronologia')}
                      className="group flex items-center gap-3 text-pf-red font-bold uppercase tracking-widest text-xs hover:text-pf-dark transition-colors"
                    >
                      <span className="border-b-2 border-pf-red group-hover:border-pf-dark pb-1">Ver publicações desta fase</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="mb-16">
                <h2 className="text-4xl font-bold text-pf-dark mb-10 flex items-center gap-4">
                  <MapPin className="text-pf-red" />
                  Segunda Fase: América Central
                </h2>
                <div className="text-lg text-pf-dark/80 leading-relaxed font-serif space-y-6 text-justify">
                  <p>
                    O projeto seguiu para a sua segunda etapa, focada na América Central. Nesta fase, o educador dedicou quase sessenta dias para mapear e integrar coletivos, universidades e grupos de arte em uma região da "América Latina profunda".
                  </p>
                  <p>
                    A jornada percorreu nove países: Panamá, Costa Rica, Nicarágua, Honduras, El Salvador, Guatemala, Belize, República Dominicana e Cuba.
                  </p>
                  <p>
                    O foco manteve-se em investigar o quanto os fundamentos de Paulo Freire estavam presentes nos rincões centro-americanos, fortalecendo os vínculos necessários para a consolidação da democracia latino-americana através da troca de experiências em educação popular.
                  </p>
                </div>
              </div>

              <div className="mb-16">
                <h2 className="text-4xl font-bold text-pf-dark mb-10 flex items-center gap-4">
                  <Heart className="text-pf-red" />
                  Legado e Financiamento
                </h2>
                <div className="text-lg text-pf-dark/80 leading-relaxed font-serif text-justify space-y-6">
                  <p>
                    O financiamento para execução desse projeto foi realizado através de vaquinha eletrônica, depósito e pix de doações voluntárias. Essa ação acendeu uma luz inspiradora em muitas pessoas e instituições espalhadas pelo continente, contribuindo para que possamos vislumbrar um mundo melhor.
                  </p>
                  <p className="bg-pf-feature p-8 border-l-4 border-pf-red font-sans text-pf-dark italic">
                    "O Mochilão Libertário foi apenas o início de um profundo e amplo debate sobre a educação no nosso continente."
                  </p>
                </div>
              </div>
            </div>

            {/* Sticky Sidebar / Media */}
            <div className="lg:col-span-5">
              <div className="sticky top-32 space-y-12">
                
                {/* Vertical Video (Facebook) */}
                <div className="bg-pf-dark rounded-3xl overflow-hidden shadow-2xl max-w-[360px] mx-auto border-8 border-pf-dark relative aspect-[9/16]">
                  <iframe 
                    src="https://www.facebook.com/plugins/video.php?height=640&href=https%3A%2F%2Fwww.facebook.com%2Fsocrates.m.torres%2Fvideos%2F601297488208877%2F&show_text=false&width=360&t=0" 
                    width="360" 
                    height="640" 
                    style={{ border: 'none', overflow: 'hidden' }} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen={true} 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" 
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                </div>

                {/* Social Media Highlight */}
                <div className="bg-white p-10 border-2 border-pf-red shadow-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-pf-red/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                  <h3 className="text-xl font-bold mb-6 text-pf-dark uppercase tracking-tighter">
                    Acompanhe o Mochilão Libertário
                  </h3>
                  <p className="text-pf-muted text-sm mb-8 leading-relaxed">
                    Siga as redes sociais do Educador Sócrates Magno Torres para acompanhar o cotidiano desta jornada.
                  </p>
                  
                  <div className="space-y-4 relative z-10">
                    <a 
                      href="https://www.facebook.com/socrates.m.torres"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 text-pf-dark hover:text-pf-red transition-colors group/link"
                    >
                      <div className="w-10 h-10 bg-pf-dark group-hover/link:bg-pf-red text-white flex items-center justify-center rounded-sm transition-colors">
                        <Facebook size={20} />
                      </div>
                      <span className="font-bold text-sm tracking-wide">Facebook</span>
                    </a>
                    <a 
                      href="https://www.instagram.com/socratesmagnotorres/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 text-pf-dark hover:text-pf-red transition-colors group/link"
                    >
                      <div className="w-10 h-10 bg-pf-dark group-hover/link:bg-pf-red text-white flex items-center justify-center rounded-sm transition-colors">
                        <Instagram size={20} />
                      </div>
                      <span className="font-bold text-sm tracking-wide">Instagram</span>
                    </a>
                  </div>
                </div>

                {/* Financing / Support */}
                <div className="bg-pf-red p-10 text-white shadow-xl">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Heart fill="currentColor" />
                    Como Apoiar
                  </h3>
                  <p className="text-white/80 mb-8 leading-relaxed">
                    O financiamento deste projeto é realizado através de doações voluntárias e parcerias com instituições.
                  </p>
                  
                  <div className="space-y-4">
                    <a 
                      href="https://www.kickante.com.br/vaquinha-online/diario-de-classe-um-mochilao-libertario-ate-o-fim-do-mundo-e-alem"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between w-full bg-white text-pf-red px-6 py-4 font-bold uppercase tracking-widest text-sm hover:bg-pf-yellow hover:text-pf-dark transition-all"
                    >
                      Apoiar via Kickante
                      <ArrowRight size={18} />
                    </a>
                    <div className="bg-white/10 p-6">
                      <p className="text-[10px] font-black uppercase mb-2">Chave PIX</p>
                      <p className="text-lg font-mono break-all">socratesri@yahoo.com.br</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-24 text-white overflow-hidden" style={{ backgroundColor: '#aaa8a8' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-12 bg-pf-red"></div>
              <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-pf-red">O Educador</span>
              <div className="h-px w-12 bg-pf-red"></div>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Sócrates <span className="text-pf-red">Magno Torres</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square"
            >
              <div className="absolute inset-0 border-2 border-pf-red translate-x-6 translate-y-6"></div>
              <img 
                src="https://i.postimg.cc/6q4X9KMy/image-2026-05-02-181144192.png" 
                alt="Sócrates Magno Torres" 
                className="w-full h-full object-cover relative z-10 brightness-90 grayscale-[30%] contrast-110"
              />
            </motion.div>
            
            <div>
              <div className="space-y-6 text-white/70 text-lg leading-relaxed">
                <p>
                  O Educador Sócrates Magno Torres é cientista social, membro do Coletivo Paulo Freire e professor convidado da FESPSP - Fundação Escola de Sociologia e Política de São Paulo, onde ministra curso de extensão sobre "Educação Libertária".
                </p>
                <p>
                  Coordenador do Coletivo NIP - Núcleo de Inteligência Periférica, Sócrates possui um vasto histórico de rodas de conversas sobre educação libertária e formação política em assentamentos, ocupações e aulas públicas.
                </p>
                <p className="italic text-pf-yellow text-xl">
                  "Sócrates é poeta nas horas vagas, mas sonha em sê-lo também nas horas ocupadas."
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
