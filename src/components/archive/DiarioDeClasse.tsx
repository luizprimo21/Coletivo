import { motion } from 'motion/react';
import { Mail, ArrowRight, Heart, MapPin, Calendar, Users, BookOpen } from 'lucide-react';

export default function DiarioDeClasse() {
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
              Um mochilão libertário até o fim do mundo e além dele.
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
                  O Projeto
                </h2>
                <div className="space-y-6 text-lg text-pf-dark/80 leading-relaxed font-serif text-justify">
                  <p>
                    Este projeto, que na verdade chamo de "processo", conta, inicialmente, com a chancela inicial do Coletivo Paulo Freire e tem como grande objetivo realizar rodas de conversa em diversas unidades escolares, coletivos, institutos de educação, coletivos, da América do Sul, relacionadas à educação libertária. Sobretudo, entidades que carreguem o nome e o legado do Educador Paulo Freire.
                  </p>
                  <p>
                    Para tal, percorrerei ao menos 40 cidades, realizando atividades formativas, desde o Uruguai, chegando até a Terra do Fogo, na Argentina, passando por cidades do Chile, Paraguai, Bolívia, Peru, Equador, Colômbia e Venezuela.
                  </p>
                  <p>
                    Os encontros formativos serão previamente agendados com essas entidades, que estão sendo mapeadas e contatadas, para a realização das atividades. Assim, poderemos ter tempo para mobilização de agentes ligados à educação para que possamos realizar as rodas de conversa e entendermos as abordagens de cada unidade, assim como discutir os fundamentos do pensamento freireano, além do pensamento de diversas autoras e autores ligados à educação libertária e decolonial.
                  </p>
                  <p className="bg-pf-feature p-8 border-l-4 border-pf-red font-sans text-pf-dark italic">
                    "Será como uma cartografia de afetos, que traçará uma espécie de espinha dorsal na América do Sul, onde o pensamento do educador Paulo Freire esteja presente."
                  </p>
                  <p>
                    Ao final da execução deste projeto, pretendemos, como produto, realizar uma publicação homônima sobre as experiências realizadas em cada unidade, trazendo relatos e fundamentações teóricas que foram discutidas ou observadas durante as intervenções.
                  </p>
                </div>
              </div>

              <div className="mb-16">
                <h2 className="text-4xl font-bold text-pf-dark mb-10 flex items-center gap-4">
                  <Users className="text-pf-red" />
                  Justificativa
                </h2>
                <div className="text-lg text-pf-dark/80 leading-relaxed font-serif text-justify">
                  <p>
                    Nas últimas décadas, a América Latina passou por diversas transformações, no que diz respeito aos regimes políticos, econômicos e sociais. Foram muitos avanços e retrocessos para a Democracia e para a própria educação, enquanto importante instituição para consolidação dos Direitos Humanos, respeito ao meio ambiente, aos povos originários, às lutas antirracistas, feministas, à diversidade de gêneros e aos demais grupos sociais historicamente oprimidos e perseguidos no nosso continente.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-pf-dark mb-10 flex items-center gap-4">
                  <MapPin className="text-pf-red" />
                  Execução
                </h2>
                <div className="text-lg text-pf-dark/80 leading-relaxed font-serif space-y-6 text-justify">
                  <p>
                    Essa jornada se iniciará a partir da cidade de Porto Alegre, com destino à Puerto Chuy, no Uruguai. Teremos atividades nessa localidade e depois avançaremos para a capital, Montevidéu. Adentraremos a Argentina pela capital Buenos Aires, seguindo para o sul do continente: Bahía Blanca, Puerto Madryn, San Julian, até chegar à Tierra del Fuego, Ushuaia.
                  </p>
                  <div className="grid grid-cols-2 gap-4 py-8">
                    <div className="bg-white p-6 border border-pf-red/10">
                      <p className="text-[10px] uppercase font-black text-pf-red mb-1">Duração prevista</p>
                      <p className="text-2xl font-bold text-pf-dark">105 Dias</p>
                    </div>
                    <div className="bg-white p-6 border border-pf-red/10">
                      <p className="text-[10px] uppercase font-black text-pf-red mb-1">Cidades</p>
                      <p className="text-2xl font-bold text-pf-dark">+40</p>
                    </div>
                  </div>
                  <p>
                    Subiremos pelo Chile (Santiago), retornando à Argentina (Mendoza, Rosário), Paraguai (Assunção), Bolívia, Peru, Equador e Colômbia, finalizando possivelmente na Venezuela.
                  </p>
                </div>
              </div>

              <div className="mb-16">
                <h2 className="text-4xl font-bold text-pf-dark mb-10 flex items-center gap-4">
                  <Heart className="text-pf-red" />
                  Financiamento
                </h2>
                <div className="text-lg text-pf-dark/80 leading-relaxed font-serif text-justify space-y-6">
                  <p>
                    O financiamento para execução desse projeto será realizado através de vaquinha eletrônica, depósito e pix de doações voluntárias, além da busca de instituições que possam contribuir para essa jornada, associando a sua marca ao projeto.
                  </p>
                  <p>
                    Pretendemos confeccionar cards para cada atividade, que divulgaremos na imprensa, nas mídias sociais e em vídeos diários, para acompanhamento de seguidores. Assim, as marcas de instituições parceiras serão exibidas e as mesmas também contribuirão na divulgação do projeto, em tempo real.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-pf-dark mb-10 flex items-center gap-4">
                  <BookOpen className="text-pf-red" />
                  Conclusão
                </h2>
                <div className="text-lg text-pf-dark/80 leading-relaxed font-serif text-justify space-y-6">
                  <p>
                    Acreditamos muito nos processos de educação libertária. A execução deste projeto pode acender uma luz inspiradora em muitas pessoas e instituições espalhadas pelo continente e contribuir para que possamos vislumbrar um mundo melhor. Nas intervenções pretendemos aprender muito mais que ensinar, trocar experiências, compartilhar as vivências anteriores com as que vêm em cada encontro subsequente.
                  </p>
                  <p>
                    Além disso, a execução desse projeto será apenas o início de um profundo e amplo debate sobre a educação no nosso continente, que poderá reverberará em diversas novas rodas de conversa, publicações, conteúdo de audiovisual, debates sobre essa experiência.
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
