import { motion } from 'motion/react';
import { FileText, Users, Book, Award, Clock } from 'lucide-react';

type ArchiveItem = {
  title: string;
  year?: string;
  link: string;
};

type ArchiveLevel4 = {
  title: string;
  items: ArchiveItem[];
};

type ArchiveLevel3 = {
  title: string;
  items?: ArchiveItem[];
  level4?: ArchiveLevel4[];
};

type ArchiveLevel2 = {
  title: string;
  items?: ArchiveItem[];
  level3?: ArchiveLevel3[];
};

type ArchiveCategory = {
  id: string;
  title: string;
  items?: ArchiveItem[];
  level2?: ArchiveLevel2[];
  level3?: ArchiveLevel3[];
};

const ARCHIVE_CONTENT: ArchiveCategory[] = [
  {
    id: 'inicio',
    title: 'O início da Gestão Paulo Freire',
    items: [
      { 
        title: 'Aos Que Fazem Educação Conosco em São Paulo', 
        year: '1989', 
        link: 'https://www.coletivopaulofreire.org/SME/sme-1989-1992/aos-que-fazem-educacao-conosco' 
      },
      { 
        title: 'Problematização das Escolas: A Visão dos Educadores, Educandos e Pais', 
        year: '1992', 
        link: 'https://www.coletivopaulofreire.org/SME/sme-1989-1992/problematizacao-das-escolas' 
      },
    ]
  },
  {
    id: 'reorientacao',
    title: 'Movimento de Reorientação Curricular',
    level2: [
      {
        title: 'Educação Infantil',
        items: [
          { title: 'Grupo de Formação - Uma (Re)visão da Educação do Educador', link: 'https://www.coletivopaulofreire.org/SME/grupo-de-formacao' },
          { title: 'Reorientação Curricular das Escolas Municipais de Educação Infantil', year: '1989/1992', link: 'https://www.coletivopaulofreire.org/SME/sme-1989-1992' },
          { title: 'A Criança e o Desenho - Uma Conversa para Olhar/ Pensar Arte', link: 'https://www.coletivopaulofreire.org/SME/sme-1989-1992' },
        ]
      },
      {
        title: 'Ensino Fundamental',
        level3: [
          {
            title: '1. Ação pedagógica da Escola pela via da Interdisciplinaridade',
            items: [
              { title: 'Um Primeiro Olhar Sobre o Projeto', link: 'https://www.coletivopaulofreire.org/SME/sme-1989-1992' },
              { title: 'Estudo Preliminar da Realidade Local: Resgatando o Cotidiano', link: 'https://www.coletivopaulofreire.org/SME/sme-1989-1992' },
              { title: 'Tema Gerador e a Construção do Programa: uma nova relação entre currículo e realidade', link: 'https://www.coletivopaulofreire.org/SME/sme-1989-1992' },
              { title: 'Ação pedagógica da Escola pela via da Interdisciplinaridade - Um Novo Olhar Sobre o Projeto', link: 'https://www.coletivopaulofreire.org/SME/sme-1989-1992' },
            ]
          },
          {
            title: 'Visões das Áreas',
            items: [
              { title: 'Ciências', link: 'https://www.coletivopaulofreire.org/SME/sme-1989-1992' },
              { title: 'Educação Artística', link: 'https://www.coletivopaulofreire.org/SME/sme-1989-1992' },
              { title: 'Educação Artística - Dança', link: 'https://www.coletivopaulofreire.org/SME/sme-1989-1992' },
              { title: 'Educação Física', link: 'https://www.coletivopaulofreire.org/SME/sme-1989-1992' },
              { title: 'Geografia', link: 'https://www.coletivopaulofreire.org/SME/sme-1989-1992' },
              { title: 'História', link: 'https://www.coletivopaulofreire.org/SME/sme-1989-1992' },
              { title: 'Matemática', link: 'https://www.coletivopaulofreire.org/SME/sme-1989-1992' },
              { title: 'Português', link: 'https://www.coletivopaulofreire.org/SME/sme-1989-1992' },
              { title: 'Bandas e Fanfarras e Instrutores de Fanfarras', link: 'https://www.coletivopaulofreire.org/SME/sme-1989-1992' },
            ]
          },
          {
            title: 'Relatos de Práticas',
            items: [
              { title: 'Ciências', link: 'https://www.coletivopaulofreire.org/SME/sme-1989-1992' },
              { title: 'Educação Artística', link: 'https://www.coletivopaulofreire.org/SME/sme-1989-1992' },
              { title: 'Educação Física', link: 'https://www.coletivopaulofreire.org/SME/sme-1989-1992' },
              { title: 'Geografia', link: 'https://www.coletivopaulofreire.org/SME/sme-1989-1992' },
              { title: 'História', link: 'https://www.coletivopaulofreire.org/SME/sme-1989-1992' },
              { title: 'Inglês', link: 'https://www.coletivopaulofreire.org/SME/sme-1989-1992' },
              { title: 'Matemática', link: 'https://www.coletivopaulofreire.org/SME/sme-1989-1992' },
              { title: 'Português', link: 'https://www.coletivopaulofreire.org/SME/sme-1989-1992' },
            ]
          }
        ]
      },
      {
        title: 'Outros Projetos',
        items: [
          { title: 'Projeto de Orientação Sexual', year: '1992', link: 'https://www.coletivopaulofreire.org/SME/sme-1989-1992' },
          { title: 'Projeto de Atendimento aos professores de 5ª Série', year: '1989/1992', link: 'https://www.coletivopaulofreire.org/SME/sme-1989-1992' },
          { title: 'Salas de Leitura', link: 'https://www.coletivopaulofreire.org/SME/sme-1989-1992' },
        ]
      },
      {
        title: 'Jovens e Adultos',
        level3: [
          {
            title: '1 - MOVA (Parceria entre SME e Entidades da Sociedade Civil)',
            items: [
              { title: 'MOVA- Movimento de Alfabetização de Jovens e Adultos na cidade de São Paulo', link: 'https://www.coletivopaulofreire.org/SME/mova-sp' },
              { title: 'Princípios Político-pedagógicos do MOVA-SP', link: 'https://www.coletivopaulofreire.org/SME/mova-sp' },
              { title: 'Reflexões sobre o processo metodológico de alfabetização', link: 'https://www.coletivopaulofreire.org/SME/mova-sp' },
              { title: 'Construindo o ciclo Ensino Fundamental', link: 'https://www.coletivopaulofreire.org/SME/mova-sp' },
            ]
          },
          {
            title: '2 - Construindo a Educação do Jovem e Adulto Trabalhador',
            items: [
              { title: 'São Paulo 1989: Educar Adultos Para Quê?', link: 'https://www.coletivopaulofreire.org/SME/eja' },
              { title: 'Reorientação do Ensino Noturno: Diretrizes para elaboração de projetos pelas escolas', link: 'https://www.coletivopaulofreire.org/SME/eja' },
              { title: 'Alfabetização: leitura do mundo, leitura do mundo, leitura da palavra', link: 'https://www.coletivopaulofreire.org/SME/eja' },
              { title: 'Reorientação Curricular do Ensino Noturno: "Estudo do Meio e outras saídas para o Ensino Noturno"', link: 'https://www.coletivopaulofreire.org/SME/eja' },
              { title: 'Reorientação Curricular do Ensino Noturno: Construindo um novo ensino Noturno', link: 'https://www.coletivopaulofreire.org/SME/eja' },
            ]
          },
          {
            title: '3 - Projetos',
            level4: [
              {
                title: 'Curso de Magistério para monitores de Educação de Adultos',
                items: [
                  { title: 'Formação Especial para o Magistério EJA', link: 'https://www.coletivopaulofreire.org/SME/eja' },
                  { title: 'Projeto magistério: As monografias dos alunos das turmas especiais', link: 'https://www.coletivopaulofreire.org/SME/eja' },
                  { title: 'Relatos de Práticas Pedagógicas: A produção dos monitores', link: 'https://www.coletivopaulofreire.org/SME/eja' },
                ]
              },
              {
                title: 'Oferta de Ensino Supletivo para Funcionários de outras Secretarias Municipais',
                items: [
                  { title: 'Frente do Funcionalismo: Projeto Supletivo Educação e Saúde', link: 'https://www.coletivopaulofreire.org/SME/eja' },
                ]
              },
              {
                title: 'Oficinas',
                items: [
                  { title: 'Relatos de práticas pedagógicas - Produção e Difusão de Textos', link: 'https://www.coletivopaulofreire.org/SME/eja' },
                  { title: 'Relatos de Práticas Pedagógicas - Alfabetização de Adultos', link: 'https://www.coletivopaulofreire.org/SME/eja' },
                ]
              }
            ]
          },
          {
            title: 'Ciclo de Debates',
            items: [
              { title: '(Re) Construindo a Educação: A contribuição dos negros brasileiros', link: 'https://www.coletivopaulofreire.org/SME/sme-1989-1992' },
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'gabinete',
    title: 'Projetos Especiais - Gabinete',
    items: [
      { title: 'Educação Especial ou Educação? A busca de novos caminhos', link: 'https://www.coletivopaulofreire.org/SME/sme-1989-1992' },
      { title: 'Projeto Gênese - A Informática Chega ao Aluno da Escola Pública Municipal', year: '1992', link: 'https://www.coletivopaulofreire.org/SME/sme-1989-1992' },
      { title: 'Pela Vida, Não à Violência - Cartazes', year: '1992', link: 'https://www.coletivopaulofreire.org/SME/sme-1989-1992' },
      { title: 'Cartazes Não à Violência', link: 'https://www.coletivopaulofreire.org/SME/sme-1989-1992' },
      { title: 'Seleção e Formação de Operacionais', year: '1990', link: 'https://www.coletivopaulofreire.org/SME/sme-1989-1992' },
    ]
  },
  {
    id: 'congressos',
    title: 'Congressos de Educação (1991/1992)',
    items: [
      { title: 'I e II Congressos Municipais de Educação', year: '1991-1992', link: 'https://www.coletivopaulofreire.org/SME/sme-1989-1992' },
      { title: 'I Congresso Municipal – Programa', year: '1991', link: 'https://www.coletivopaulofreire.org/SME/sme-1989-1992' },
      { title: 'II Congresso Municipal – Programa', year: '1992', link: 'https://www.coletivopaulofreire.org/SME/sme-1989-1992' },
    ]
  },
  {
    id: 'politicas',
    title: 'Acompanhamentos das Políticas Públicas para a Educação',
    items: [
      { title: 'Dez Meses de Administração: O Que Mudou', link: 'https://www.coletivopaulofreire.org/SME/sme-1989-1992' },
      { title: 'Construindo a Educação Pública Popular - Ano 2', link: 'https://www.coletivopaulofreire.org/SME/sme-1989-1992' },
      { title: 'Construindo a Educação Pública Popular - Caderno 22 Meses', link: 'https://www.coletivopaulofreire.org/SME/sme-1989-1992' },
      { title: 'Construindo a Educação Pública Popular - Diretrizes e Propriedades para 1991', year: '1991', link: 'https://www.coletivopaulofreire.org/SME/sme-1989-1992' },
      { title: 'Planejamento e Instrumento de Mobilização Popular', year: '1992', link: 'https://www.coletivopaulofreire.org/SME/sme-1989-1992' },
      { title: 'Balanço Geral da SME - Projeção Trienal', year: '1992', link: 'https://www.coletivopaulofreire.org/SME/sme-1989-1992' },
    ]
  },
  {
    id: 'regimento',
    title: 'Regimento das Escolas Municipais',
    items: [
      { title: 'Regimento Comum das Escolas Municipais de São Paulo', year: '1992', link: 'https://www.coletivopaulofreire.org/SME/regimento-comum' },
    ],
    level2: [
      {
        title: 'Regimento em Ação (1992)',
        items: [
          { title: 'Regimento em Ação - Caderno 1', year: '1992', link: 'https://www.coletivopaulofreire.org/SME/sme-1989-1992' },
          { title: 'Regimento em Ação - Caderno 2', year: '1992', link: 'https://www.coletivopaulofreire.org/SME/sme-1989-1992' },
          { title: 'Regimento em Ação - Caderno 3', year: '1992', link: 'https://www.coletivopaulofreire.org/SME/sme-1989-1992' },
          { title: 'Regimento em Ação - Caderno 4', year: '1992', link: 'https://www.coletivopaulofreire.org/SME/sme-1989-1992' },
          { title: 'Regimento em Ação - Caderno 5', year: '1992', link: 'https://www.coletivopaulofreire.org/SME/sme-1989-1992' },
          { title: 'Regimento em Ação - Caderno 6', year: '1992', link: 'https://www.coletivopaulofreire.org/SME/sme-1989-1992' },
        ]
      },
    ]
  },
  {
    id: 'estatuto',
    title: 'Estatuto do Magistério Público Municipal de São Paulo',
    items: [
      { title: 'Estatuto do Magistério Público Municipal de São Paulo', link: 'https://www.coletivopaulofreire.org/SME/estatuto-do-magisterio' },
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

function ArchiveItemCard({ item }: { item: ArchiveItem, key?: any }) {
  return (
    <motion.a
      href={item.link}
      whileHover={{ y: -5 }}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col gap-3 group/item h-full"
    >
      <div className="aspect-[3/4] bg-pf-feature border border-subtle flex flex-col items-center justify-center text-center relative overflow-hidden group-hover/item:border-pf-red transition-colors">
        <img 
          src="https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?q=80&w=400&h=600&auto=format&fit=crop&fm=jpg" 
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover/item:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-pf-dark/80 via-pf-dark/20 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-pf-red opacity-60"></div>
        
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
        <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-pf-red">
          Acessar →
        </div>
      </div>
    </motion.a>
  );
}

export default function SMEArchive() {
  return (
    <div className="bg-pf-bg min-h-screen">
      {/* Hero Section */}
      <section className="py-24 border-b-subtle bg-pf-bg">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-pf-red/20"></div>
            <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-pf-red">Acervo Histórico</span>
            <div className="h-px flex-1 bg-pf-red/20"></div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-12 text-center text-pf-dark">
            Secretaria Municipal de Educação <br />
            <span className="text-pf-red">1989 — 1992</span>
          </h1>
          <div className="max-w-3xl mx-auto space-y-6 text-pf-muted text-base md:text-lg leading-relaxed text-center">
            <p>
              De 1989 a 1992, durante a gestão da prefeita Luiza Erundina, o município de São Paulo vivenciou uma experiência singular em termos de educação. Tendo como inspiração e fundamento as ideias de Paulo Freire, então Secretário Municipal de Educação, as escolas, seus diretores, coordenadores, professores, funcionários, alunos, pais e comunidades foram envolvidos em um movimento amplo e participativo de construção de uma educação democrática.
            </p>
            <p>
              Nomeado como Reorientação Curricular, esse movimento traduziu-se em renovação para as escolas da rede, sob todos os aspectos, fossem eles materiais, curriculares ou de gestão. A partir de um contínuo diálogo entre os diferentes colegiados e as escolas, diversos projetos foram construídos e outros, já existentes, foram repensados à luz das necessidades que se colocavam nessa busca pela qualidade da educação.
            </p>
            <p>
              Os documentos aqui apresentados são registros parciais da implementação da política educacional conduzida pela gestão de Paulo Freire e Mario Sergio Cortella à frente da Secretaria Municipal de Educação no governo da Prefeita Luiza Erundina.
            </p>
            <p>
              São documentos que explicitam fatos, dados, reflexões e resultados parciais do desenvolvimento dos princípios e pressupostos anunciados nos planos de governo, principalmente na Carta que Paulo Freire encaminhou à rede de escolas no primeiro mês do ano letivo de 1989 (<em>Aos que fazem a educação conosco em São Paulo: Construindo a educação pública e popular</em>).
            </p>
            <p>
              Seus conteúdos foram registrados a partir do diálogo intenso que acontecia nos diferentes colegiados da secretaria, onde as equipes centrais decidiam com as equipes das dez regiões da cidade, bem como na interlocução com os representantes das universidades e dos movimentos sociais e outros parceiros da sociedade civil.
            </p>
            <p>
              Devem ser vistos como a expressão de uma dinâmica de trabalho onde se priorizava o diálogo, a participação e o registro como instrumento metodológico.
            </p>
            <p>
              A produção desse material se destinava ao compartilhamento dos envolvidos nas frentes de trabalho; portanto, foi produzido em sua maioria nas gráficas da secretaria, com a revisão textual feita pelas diferentes equipes de trabalho, sem uma produção gráfica padronizada.
              Trata-se, portanto, de documentação histórica que não foi revisada com relação às atuais diretrizes acordadas para a língua portuguesa.
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="flex flex-col gap-32">
            {ARCHIVE_CONTENT.map((category) => (
              <div key={category.id} className="scroll-mt-24">
                <div className="border-l-4 border-pf-red pl-8 mb-16">
                  <h2 className="text-4xl font-bold uppercase tracking-tighter text-pf-red mb-12">{category.title}</h2>
                  {category.items && (
                    <div className={category.level2 || category.level3 ? "mb-16" : ""}>
                      <ItemGrid items={category.items} />
                    </div>
                  )}
                </div>

                {category.level2 && (
                  <div className="space-y-24">
                    {category.level2.map((l2, idx) => (
                      <div key={idx} className="pl-8">
                        <div className="mb-10">
                          <h3 className="text-2xl font-bold uppercase tracking-tight text-pf-blue mb-4">{l2.title}</h3>
                          <div className="h-0.5 w-16 bg-pf-blue/30"></div>
                        </div>
                        
                        {l2.items && <ItemGrid items={l2.items} />}
                        
                        {l2.level3 && (
                          <div className="space-y-16 mt-16">
                            {l2.level3.map((l3, idx3) => (
                              <div key={idx3}>
                                <h4 className="text-xl font-bold text-pf-dark mb-8 border-b border-subtle pb-4">{l3.title}</h4>
                                {l3.items && <ItemGrid items={l3.items} />}
                                {l3.level4 && (
                                  <div className="space-y-12 mt-12">
                                    {l3.level4.map((l4, idx4) => (
                                      <div key={idx4}>
                                        <h5 className="text-base font-bold uppercase tracking-wider text-pf-dark/70 mb-6">{l4.title}</h5>
                                        <ItemGrid items={l4.items} />
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {category.level3 && !category.level2 && (
                   <div className="space-y-24 pl-8">
                     {category.level3.map((l3, idx3) => (
                       <div key={idx3}>
                         <h3 className="text-xl font-bold text-pf-dark/90 mb-10 pb-2 border-b border-subtle">{l3.title}</h3>
                         {l3.items && <ItemGrid items={l3.items} />}
                         {l3.level4 && (
                           <div className="space-y-16 mt-16">
                             {l3.level4.map((l4, idx4) => (
                               <div key={idx4}>
                                 <h4 className="text-sm font-bold uppercase tracking-widest text-pf-red/60 mb-8">{l4.title}</h4>
                                 <ItemGrid items={l4.items} />
                               </div>
                             ))}
                           </div>
                         )}
                       </div>
                     ))}
                   </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-pf-feature border-y border-subtle">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-3xl font-bold mb-6">Ajude a construir este acervo</h2>
          <p className="text-pf-muted mb-8 leading-relaxed">
            Se você possui documentos, fotos ou registros deste período e deseja contribuir para a preservação desta memória, entre em contato conosco.
          </p>
          <button className="bg-pf-red text-white px-10 py-4 font-bold uppercase tracking-widest text-sm hover:invert transition-all">
            Contribuir com o Acervo
          </button>
        </div>
      </section>
    </div>
  );
}
