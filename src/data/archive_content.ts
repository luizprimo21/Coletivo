
export interface ArchiveContentItem {
  id: string;
  title: string;
  year: string;
  date?: string;
  author?: string;
  content: string;
  type: 'manifesto' | 'artigo' | 'carta' | 'posicionamento';
}

export const ARCHIVE_DATA: Record<string, ArchiveContentItem[]> = {
  '2023': [
    {
      id: '2023-ensino-medio',
      title: 'A questão do Ensino Médio',
      year: '2023',
      type: 'posicionamento',
      content: `Há poucos anos, vários setores que de alguma forma eram ligados à educação se pronunciaram sobre as questões educacionais, inclusive pela grande imprensa referiam-se à necessidade de se implantar a reforma do ensino médio no país. Hoje, torna-se cada vez mais visível a posição que clama pela revogação dessa reforma.

Nós, do Coletivo Paulo Freire, nos sentimos contemplados por essa mudança de enfoque. Sempre tivemos uma percepção muito clara de que essa reforma, gestada no governo Temer, não só não responde aos reclamos das classes populares com relação ao ensino médio, como tende a aumentar a desigualdade social tão presente na nossa sociedade. Respaldando-se numa concepção de formação profissional totalmente desvinculada das necessidades do próprio mercado de trabalho, volta-se a proposta para uma perspectiva de formar para certos ofícios, estabelecendo uma terminalidade que impede a ascensão para níveis mais altos de formação profissional.

Temos claro que não se trata somente de revogar a reforma. Urge discutir caminhos que realmente respondam às necessidades das classes populares. Como Paulo Freire já enfatizava, uma educação “bancária”, caracterizada pela mera transferência de conhecimentos, não é formativa. Por outro lado, escrevia o mestre, “do ponto de vista gramatical, o verbo ensinar é um verbo transitivo relativo. Verbo que pede um objeto direto – alguma coisa – e um objeto indireto – alguém” (FREIRE, P. Pedagogia da Autonomia, São Paulo/Rio de Janeiro, Paz e Terra, 2020, p. 25). Ou seja, é necessário que a educação possa conduzir a reflexão do educando tornando-o sujeito da sua aprendizagem, possibilitando a ele ser agente no meio social em que vive e em que trabalha, ou trabalhará.

Lutamos pela revogação dessa reforma, porque ela foi gestada no governo que assumiu com o claro objetivo de frear as reivindicações populares e a ampliação da educação pública. Por isso acreditamos que a discussão sobre o ensino médio deve ser situada no cerne das políticas públicas que a sociedade em que vivemos requer. E fica muito claro que o próprio desenvolvimento do mercado de trabalho requer mais conhecimento, e não menos; mais autonomia, e não mero treinamento. É para isso que lutamos, para uma educação integral que conduza o educando à superação dos seus limites, que possibilite a ele situar-se e transformar o meio em que vive.`
    },
    {
      id: '2023-gestao-democratica',
      title: 'Ampliação do princípio da gestão democrática na educação (Lei 14.644/2023)',
      year: '2023',
      type: 'posicionamento',
      content: `O Coletivo Paulo Freire saúda a Lei 14 644 de 2 de agosto de 2023, que prevê a instituição de Conselhos Escolares e de Fóruns dos Conselhos Escolares e altera a LDB (Lei nº 9394/96 nos artigos 3º, 10º, 11º, 12º, 14º e 90º-A) – conquista da deputada federal Luiza Erundina.

O princípio da gestão democrática do ensino público se vê fortalecido na forma desta Lei e da legislação dos respectivos Estados, Municípios e Distrito Federal, que definirão as normas da gestão democrática do ensino público na educação básica, de acordo com suas peculiaridades.

Destacamos como relevante dois pontos essenciais, trazidos por esta lei em âmbito nacional para o avanço do princípio da gestão democrática:
• a inclusão de membros da comunidade local na composição do conselho escolar (artº14 parágrafo 1º)
• os 3 princípios que vão nortear a ação dos Fóruns dos Conselhos Escolares, nomeados no mesmo artigo no parágrafo 2º:
I – Democratização da gestão;
II Democratização do acesso e permanência,
III Qualidade Social da Educação.

Nosso coletivo está empenhado em desenvolver ações para a implementação dessa lei, que como uma política pública, vem ao encontro de nossos propósitos de contribuir para uma educação pública com qualidade social.`
    },
    {
      id: '2023-estacao-metro',
      title: 'Carta aberta em defesa da manutenção do nome “Educador Paulo Freire” para a futura estação da Linha 2-Verde',
      year: '2023',
      type: 'carta',
      content: `O governo Tarcísio de Freitas decidiu mudar o nome de uma futura estação da Linha 2-Verde do metrô de Educador Paulo Freire para Fernão Dias. O metrô justifica a mudança afirmando que ela se baseia em pesquisa de opinião feita com moradores de regiões próximas da futura estação. Sabemos dos limites de uma pesquisa de opinião em populações que muitas vezes não têm informações suficientes para opinar de forma consistente e nos perguntamos: como foi feita essa pesquisa? Os entrevistados receberam informações corretas sobre quem foi Paulo Freire e Fernão Dias? Ou responderam apenas baseados no nome mais conhecido?

Os entrevistados sabem que Paulo Freire é o patrono da educação brasileira, por ter sido um grande educador, mundialmente reconhecido e autor de uma vasta obra sobre educação? Sabem que ele foi secretário municipal de educação de 1989 a 1991, tendo promovido um grande avanço na educação municipal de São Paulo?

Em contrapartida, os entrevistados sabem quem foi Fernão Dias, para além da pseudo-história que muitos de nós aprendemos na escola? Sabem que ele teve uma trajetória atrelada à exploração indígena? Não podemos fortalecer o nome de quem foi, no passado, responsável pela exploração dos indígenas justo no momento em que vemos exposta a tragédia dos Yanomami, que horrorizou o mundo todo!

A referida estação está para ser construída em um ponto da Avenida Educador Paulo Freire, próxima à Rodovia Fernão Dias. Sua localização não justifica a mudança de nome e tampouco a pesquisa de opinião feita sem que os pesquisados tivessem pleno conhecimento do significado da obra dos dois postulantes.

Essa mudança de nome não configura um fato menor, um “afinal, é só o nome de uma estação de metrô”. Sabemos que Paulo Freire foi perseguido durante os quatro anos do governo Bolsonaro e, mesmo antes, por obscurantistas que tentaram, sem êxito, tirar-lhe o título de patrono da educação brasileira. A perseguição chegou a tal ponto que, em 2021, a Justiça Federal do Rio proibiu o governo federal de tomar qualquer atitude que atentasse contra a dignidade de Paulo Freire. Vemos agora essa perseguição chegar a São Paulo?

Defendemos veementemente a manutenção do nome de Paulo Freire para a referida estação. É fundamental que a população de São Paulo saiba quem foi Paulo Freire e que nossos governantes valorizem quem realmente lutou por uma sociedade mais justa e mais humana.`
    },
    {
      id: '2023-consciencia-negra',
      title: 'Coletivo Paulo Freire e a Consciência Negra',
      year: '2023',
      date: '16/11/2023',
      type: 'posicionamento',
      content: `O coletivo Paulo Freire saúda o mês da consciência negra como resultado de um processo de luta dos movimentos sociais que teve no Brasil um marco importante com a criação do Movimento Negro Unificado (MNU) em 1978.

Em plena ditadura militar o assassinato de Robson Silveira da Luz, provocou tamanha dor e vergonha que impulsionou a criação desse movimento, “cuja resistência é um divisor de águas na luta contra o racismo no país” (Cida Bento, 2022).*

Somente in 1988, cem anos após a abolição da escravidão, a Constituição Federal Brasileira reconheceu a existência e os direitos dos quilombos contemporâneos, assegurando a essas comunidades o direito à propriedade de seus territórios coletivos.

Em seu recente trabalho “O Pacto da Branquitude”, 2017 a pesquisadora Cida Bento vai nos apresentando a análise de suas pesquisas e seus impactos e desdobramentos, na experiência de sua própria família, nas instituições públicas e privadas e no âmbito individual de cada pessoa preta, parda e indígena. Temos hoje uma situação ambígua com relação ao combate do racismo estrutural e institucional: algumas conquistas importantes a exemplo das cotas no âmbito do acesso à Educação e no acesso às instituições públicas na seleção de vagas para emprego; na discussão e aprovação da bancada negra no congresso nacional, mais recentemente. No entanto, apesar do avanço das leis, a luta contra o racismo estrutural e institucional nas escolas, nas instituições públicas e privadas e nas relações etno raciais, continua a negar a existência de negros e indígenas.

Negros e indígenas continuam a ser vistos “como invasores do que os brancos consideram seu espaço privativo, seu território.” Estão sempre “fora do lugar quando ocupam espaços considerados de prestígio, poder e mando”

A pesquisadora conclui a análise com uma afirmação contundente para a reflexão de todos e todas que lutam pela transformação social:
“É evidente que os brancos não promovem reuniões secretas às cinco da manhã para definir como vão manter seus privilégios e excluir os negros. Mas é como se assim fosse.”

Aprendemos com Paulo Freire a respeito de um de seus princípios fundamentais: mudar é difícil, mas é possível e urgente. Temos que assumir a importância da compreensão do inédito viável, para a assunção da história como possibilidade em oposição à visão fatalista da realidade. O inédito viável é uma proposta prática de superação das situações limites e depende da consciência crítica coletiva e individual. (Freire, A.M.A 1992)**

Não basta sermos contra o racismo, mas como educadores temos que contribuir para ações antirracistas, em todo espaço, território ou instituição.

* Bento, Cida - O pacto da branquitude - 1ª Edição – São Paulo: Companhia das Letras, 2022.
** Freire, Ana Maria Araújo. Notas. In Freire, Paulo Pedagogia da Esperança: um reencontro com a Pedagogia do Oprimido, Rio de Janeiro: Paz e Terra, 1992 pag 205.`
    },
    {
      id: '2023-eleicoes-argentina',
      title: 'Eleições Presidenciais Argentinas',
      year: '2023',
      author: 'RONALDO SERPA',
      type: 'posicionamento',
      content: `No próximo domingo teremos o segundo turno das eleições na Argentina, em que o candidato peronista e atual ministro da economia Sérgio Massa terá pela frente o candidato de extrema direita e ultraliberal Javier Milei. Apesar de Massa ter vencido Milei no primeiro turno, com 36,68% dos votos contra 29,98% do ultraliberal, pesquisas do AtlasIntel para o segundo turno apontam que Milei tem 52,1% dos votos, enquanto o peronista tem 47,9%.

A vitória de Milei representaria uma vitória para a extrema direita mundial, que atua de forma integrada, em que seus diversos líderes dialogam entre si, visando uma aproximação política estratégica para o fortalecimento de suas pautas no mundo. Na América do Sul, uma hipotética vitória do ultraliberal poderá frear uma onda de vitórias da esquerda que deixou 9 dos 12 países sulamericanos sendo governados por partidos de esquerda.

Do ponto de vista geopolítico, uma vitória de Javier Milei pode representar um grande desafio para o governo Lula, que precisará modificar suas ações dentro da América Latina para lidar com um governo de extrema direita na Argentina, seu principal parceiro comercial dentro da América do Sul, prejudicando relações bilaterais entre os países e mesmo articulações envolvendo o Mercosul. Diante desse cenário, uma vitória de Massa na Argentina é fundamental para que a extrema direita não ganhe força dentro da América do Sul e para que acordos presentes e futuros envolvendo Brasil e Argentina evoluam da melhor forma possível para todos.`
    },
    {
      id: '2023-conselheiros-tutelares',
      title: 'Eleição dos(as) Conselheiros(as) Tutelares - Uma reflexão necessária',
      year: '2023',
      type: 'posicionamento',
      content: `O coletivo Paulo Freire se empenhou na mobilização para a eleição dos candidatos progressistas, para um novo mandato nos Conselhos Tutelares da Cidade de São Paulo, principalmente.

Essa ação nos levou a algumas reflexões que ora compartilhamos.

A primeira delas é que temos que celebrar e zelar pelas conquistas da sociedade civil brasileira, que desde a promulgação da Constituição Federal de 1988 e suas leis derivadas, em especial, o Estatuto da Criança e do Adolescente (ECA) de 1990 e a Lei de Diretrizes e Bases (LDB) de 1996, promovem o avanço democrático em nosso país.

Na sequência entendemos que o Conselho Tutelar é um instituição democrática importantíssima, porque tem como função primordial a proteção dos direitos das crianças e adolescentes no que se refere a todos direitos básicos de Educação, Saúde, Previdência, Trabalho, Segurança, Defesa, Assistência Social. Assim deve reconhecer e proteger crianças e adolescentes em situações vulneráveis de maus tratos ou com seus direitos negados.

Ou seja, o Conselho Tutelar é um elo fundamental na rede de proteção social de crianças e adolescentes e pra isso deverá exercer papel importante nos territórios de sua atuação orientado, apoiado e fundamentado nas leis definidas pelo Estado laico de Direito Democrático.

Portanto as práticas sociais dos conselhos tutelares, não serão práticas assistenciais, mas sim práticas de teor republicano, com foco nas relações institucionais que acontecem no território e na proteção cotidiana das crianças e adolescentes de cada região onde atuam.`
    },
    {
      id: '2023-eja',
      title: 'Em defesa da Educação de Jovens e Adultos',
      year: '2023',
      type: 'posicionamento',
      content: `O Coletivo Paulo Freire apóia integralmente a nova política anunciada para a Educação de Jovens e Adultos (EJA), que terá como suporte a promessa de bolsas e formação técnica, para enfrentar o desafio de alfabetizar o grande contingente de brasileiros acima de 15 anos, na casa dos 9,6 milhões de pessoas que não sabem ler e escrever; e 46% das pessoas com mais de 25 anos que não completaram a educação básica.

As perspectivas são boas para essa modalidade de ensino que foi praticamente abandonada no governo anterior. Os jovens e adultos deste país tem direito de estar numa sala, em um curso que faça sentido pra suas vidas e que lhes permita melhor acesso ao mercado de trabalho e/ou para prosseguir os estudos na universidade nas áreas de suas escolhas.`
    },
    {
      id: '2023-morte-crianca',
      title: 'Indignação com morte de criança',
      year: '2023',
      date: '16/11/2023',
      type: 'manifesto',
      content: `O Coletivo Paulo Freire manifesta sua perplexidade e indignação com a morte de uma criança de 2 anos, esquecida por cerca de 7h dentro de uma van escolar, no dia 14 de novembro, na zona norte da cidade. Esse dia foi identificado como o dia mais quente do ano, na cidade de São Paulo, com temperatura superior a 37 graus.

É de estarrecer o pouco caso com a vida de crianças e adolescentes vulneráveis, que cada vez mais, tem sido alvo de violência nas escolas públicas por atos ou omissões daqueles que deveriam cuidar de sua proteção – os responsáveis pela educação pública nos municípios e estados. O descaso com a escola pública e seus estudantes explicita o desmonte que houve na educação do país nos últimos anos.

O Coletivo Paulo Freire manifesta sua solidariedade à família, que contava com o regresso de sua criança da escola, com segurança e reitera seu empenho na continuidade da luta para a transformação dessa realidade.`
    },
    {
      id: '2023-democratizacao-gestao',
      title: 'Democratização da Gestão Escolar (Lei 14.644/2023)',
      year: '2023',
      type: 'posicionamento',
      content: `O Coletivo Paulo Freire, com satisfação, congratula-se com a deputada Luiza Erundina pela aprovação da Lei Lei 14.644/2023, democratizando a gestão escolar. Essa lei introduz alterações na Lei de Diretrizes e Bases da Educação Nacional (Lei 9.394/1996, prevendo a criação de Conselhos Escolares e de Fóruns de Conselhos Escolares. Segundo a deputada: “Os conselhos serão compostos pelo diretor da escola e por representantes das comunidades escolar e local por meio de eleição. Já os fóruns, de caráter deliberativo, fortalecerão os conselhos escolares de sua circunscrição compostos por dois representantes do órgão responsável pelo sistema de ensino, além de dois representantes de cada conselho escolar da localidade”. Essa lei reforça a necessidade de gestão democrática do ensino público, algo muito valorizado por Paulo Freire quando à frente da Secretaria Municipal de Educação nos anos em que Luiza Erundina foi prefeita (1989-1992). Esse é um dos pontos cruciais na nossa luta por uma educação de qualidade, popular e democrática, contra todos os ataques recebidos das forças conservadoras – e não podemos deixar de nos referir à determinação do governador de São Paulo, Tarcísio de Freitas, de que os diretores assistam aulas dos professores e encaminhem relatório a respeito. Nós, educadores irmanados no Coletivo Paulo Freire, lutaremos sempre pela valorização dos profissionais da educação, inclusive através de formação contínua dos mesmos, e rejeitamos todas as formas de policiamento de seu trabalho por aqueles que propugnam uma gestão autoritária e ditatorial, anulando os espaços democráticos pelos quais lutamos cotidianamente.`
    },
    {
      id: '2023-usp',
      title: 'A Universidade de São Paulo',
      year: '2023',
      type: 'posicionamento',
      content: `A greve desencadeada por alunos da Universidade de São Paulo, apoiada por professores da instituição, abre campo para discussão de uma série de problemas enfrentados pelas universidades paulistas, assim como de tantas outras instituições brasileiras. A par da nossa solidariedade aos alunos e professores, achamos importante colocar algumas questões que consideramos extremamente importantes.

A sanha de privatização que nos assola faz com que soluções rasteiras sejam propostas, como a mera contratação dos professores substitutos, como se só isso atendesse aos reclamos estudantis. Ora, uma universidade que mereça esse nome se apoia no tripé fundamental: ensino, pesquisa e extensão. Isso, junto com a autonomia para decisões no encaminhamento das questões que são colocadas, é que guindou as universidades paulistas ao topo entre as melhores do país. Isso é que eleva níveis de excelência a muitas outras universidades públicas, responsáveis por pesquisas de ponta que atendem a muitos problemas vividos por nossas populações.

Não podemos abrir mão disso. Por isso nos preocupa muito posicionamentos de muitos políticos, inclusive do governador do estado, que se coloca sempre favorável a privatizações, ignorando os problemas que essas ações têm causado ao estado e ao país. Os descuidos com a saúde pública, campo para lucros de grupos privados, deixa de salientar o papel que os hospitais públicos têm tanto no atendimento da população como na formação de médicos e de pesquisadores.

Além disso, não podemos nos esquecer que a falta de investimento nas carreiras docentes atinge não apenas as universidades, mas a todo o sistema de ensino público. Baixos salários, condições precárias de trabalho são questões vivenciadas diariamente por todos, alunos, professores, funcionários, pais, comunidade... Por isso nossa solidariedade ativa a todos os educadores e educandos que lutam pela melhoria do ensino público, pela democratização do acesso e pela democratização da gestão, na direção do que nos ensina Paulo Freire.`
    },
    {
      id: '2023-civilidade-barbarie',
      title: 'Manifesto: Civilidade e barbárie - Ameaça a parlamentares é intolerável!',
      year: '2023',
      type: 'manifesto',
      content: `Os brasileiros e brasileiras assistem perplexos a cenas cotidianas de desrespeito, incivilidade, intolerância, ataque às instituições e até mesmo de violência física.

Nas redes sociais, diversos parlamentares, legítimos representantes do povo brasileiro, têm suas vidas e as de suas famílias expostas e ameaçadas por pessoas que não são capazes de conviver com as diferenças.

Os que assim agem precisam ser identificados e punidos com o rigor da lei, pois a indiferença e a impunidade frente a esses comportamentos os reforçam e estimulam.

O mundo contemporâneo precisa caminhar na direção da superação das divergências e da aceitação do contraditório.

Portanto, é urgente a mobilização dos que amam nosso país e respeitam a democracia e as instituições. É preciso dizer BASTA!

Ameaças a quem quer que seja são inaceitáveis! Não vamos tolerar ameaças aos nossos parlamentares, às pessoas que elegemos para nos representar e que estão cumprindo sua função ao denunciar desmandos e acionar a justiça para que os investiguem.

Somos defensores da VIDA, da PAZ e da JUSTIÇA! Todo nosso apoio aos parlamentares que estão sendo covardemente ameaçados! Exigimos que as autoridades competentes tomem providências para proteger suas vidas e a de suas famílias e para punir os responsáveis!

Coletivo Paulo Freire
# SEM ANISTIA`
    },
    {
      id: '2023-gerenciar-educacao',
      title: 'O passo a passo de como gerenciar a educação brasileira: A receita do bolo',
      year: '2023',
      date: '26/04/2023',
      author: 'Maria Helena Bertolini Bezerra',
      type: 'artigo',
      content: `As propostas para as políticas educacionais defendidas por institutos ou ONG ligados à educação e assumidas pelos governos, especialmente os municipais ou estaduais, repetidas vezes são justificadas pela certeza da melhoria no desempenho acadêmico dos estudantes e pela busca da equidade.

Referenciada na lógica gerencialista tão em voga em nossos dias, tais proposições sugerem que os problemas de educação são resolvidos pela aplicação de procedimentos que se apresentam revestidos por uma nomenclatura pedagógica, mas que, ao final e ao cabo, se mostram extremamente técnicos, exigindo políticas públicas de educação que dispensem iniciativas docentes com maior grau de reflexão.

Tais "propostas de soluções" podem ser encontradas nos currículos ou em seus desdobramentos, como nas formações de gestores e professores. Ao negar a "receita de bolo", as prescrições para as escolas seguem um padrão segundo o qual se alcançará igualdade de oportunidades para os estudantes e, consequentemente, melhores resultados acadêmicos.

A seguir estão dispostas práticas ou prescrições defendidas por essas instituições ou governos,que seguem na direção da instauração cada vez mais consolidada de uma política gerencialista da educação brasileira, a ser contestada por aqueles que defendem uma educação crítica e reflexiva, em favor do povo.

Para aqueles que defendem essa perspectiva de educação, as avaliações externas por si só fornecem dados para os governos e escolas de maneira que intervenções sejam feitas e organizem o que está fora da rota. Tem-se em mente que os sistemas de avaliação possibilitam políticas públicas, assim como fornecem aos professores dados sobre a aprendizagem dos estudantes, para que se saiba quais intervenções precisam ser colocadas em movimento para garantir que todos aprendam. Como as avaliações têm grande centralidade nessa maneira de entender educação, os governos locais também criam seus próprios sistemas, o que resulta em grande dispêndio de tempo dos estudantes e professores para a realização das provas. Muito do cotidiano das escolas passou a se realizar na lógica das avaliações, sob o risco de os os currículos serem informados por elas e não o contrário, reduzindo a possibilidade de reflexão e ação dos professores no sentido da autonomia para a seleção crítica dos conteúdos de ensino.

Ainda na esteira das avaliações, para que os estudantes possam ter bons resultados, é necessário que seja feito o acompanhamento da aprendizagem pelo trio gestor das escolas. Por esse motivo, a gestão tem grande importância, pois precisa ter às mãos todos os resultados e saber manejá-los, cabendo aos coordenadores pedagógicos acompanharem as aulas e as práticas dos professores, indicando alterações necessárias para a melhoria dos resultados das aprendizagens, mesmo com o risco de que a ação dos coordenadores sejam entendidas como controle do trabalho docente e não como parceria.

Aos coordenadores pedagógicos cabe a realização das formações de professores durante a jornada docente destinada a isso, com conteúdos formativos indicados pelas secretarias de educação, geralmente relacionados à implementação curricular. À gestão da escola cabe acompanhar o preenchimento de planilhas com os resultados por turma e alimentadas pelos professores, geralmente nos sistemas adquiridos pelas secretarias de educação; dessa maneira, o monitoramento das aprendizagens pela gestão escolar é feito por meio da análise de gráficos em vários sentidos: abandono, distorção idade série, etc. (é mais ou menos o que se apresenta nas avaliações externas, só que em menor escala, por escola, permitindo o acesso aos dados pelos órgãos dirigentes).

O conteúdo do currículo precisa estar completamente alinhado à BNCC, de maneira que possa ser controlado (há a aspiração de que todos os estudantes brasileiros tenham o mesmo conteúdo de ensino em todo território nacional). O trio gestor, dessa maneira, deve ficar atento para a realização do currículo em sala de aula. Existe margem para conteúdos locais, segundo a própria BNCC, entretanto, sobra pouco para o planejamento e decisão da escola quanto ao que ensinar, pois as cobranças se sobrepõem a um ritmo mais alargado, necessário para o desenvolvimento das capacidades profissionais dos docentes.

Mais uma vez, a educação organizada sob a lógica gerencialista tem nas avaliações externas, o meio mais eficaz para comprovar o desempenho acadêmico dos estudantes, fornecendo aos gestores dados com os quais precisam analisar e agir, promovendo a realização da recuperação. Mesmo durante a pandemia, avaliações foram realizadas inclusive em nível nacional, com a justificativa de recuperar os estudantes com dificuldades, como se todos os estudantes tivessem tido as mesmas oportunidades no ensino remoto.

As escolas precisam investir esforços para que todos os estudantes consigam se sair bem nas avaliações, e por isso criam provas em dias específicos para todos, simulados etc.

As secretarias, por seu turno, produzem materiais didáticos para professores e estudantes, de maneira que todo o currículo se realize.

É dessa maneira que se espera resolver as mazelas da educação brasileira, vestindo a roupa da " maquinaria empresarial" para contabilizar resultados.`
    },
    {
      id: '2023-violencia-escolas',
      title: 'A QUESTÃO DA VIOLÊNCIA NAS ESCOLAS',
      year: '2023',
      date: 'Abr 2023',
      type: 'posicionamento',
      content: `Sempre que um ato violento, com agressão física, pessoas feridas e mortes acontece e o alvo é uma escola, ficamos chocados. E o fato é ainda mais chocante, quando o ato foi praticado por criança ou adolescente. Nesse momento, nos perguntamos o que teria motivado tal agressão.

A escola faz parte da sociedade e não se pode esperar que esteja livre de todas as violências que se dão além de seus muros. A criança e o adolescente expressam na escola as frustrações do seu dia-a-dia e também as violências a que estão expostos.

Infelizmente, vivemos em um mundo que valoriza a violência como forma de resolver conflitos. Uma sociedade que “vende” a falsa premissa da meritocracia e joga sobre o indivíduo todo o peso do fracasso, que de fato, tem raízes na desigualdade de oportunidades e muitas vezes em condições de saúde. Uma sociedade em que as pessoas exibem nas redes sociais sucessos verdadeiros ou falsos, atiçando o ódio daqueles que olham para sua realidade e veem o oposto, sem capacidade critica para duvidar dessa suposta vida maravilhosa, nem para analisar as causas da desigualdade social.

Além disso, no submundo das redes sociais, assistimos atônitos a um processo de cooptação de adolescentes e jovens pela extrema-direita, por meio de conteúdos e jogos que pregam o racismo, a supremacia branca, o ódio às mulheres, homossexuais e pessoas trans, e tentam reverter toda e qualquer transformação social em direção a uma sociedade diversa e mais igualitária.

Completando o quadro, valores como solidariedade, companheirismo, tolerância, coletividade, pertencimento são pouco estimulados. Nessa sociedade individualista, a escola e os conhecimentos que ela desenvolve têm sido muito pouco valorizados.

Pesquisa da APEOESP e do Instituto Locomotiva (2019) indica que a violência contra professores cresceu nas escolas públicas paulistanas: 54% dos professores já sofreram algum tipo de violência na escola. Esse índice era de 44% em 2014. Entre os estudantes, o índice saltou de 28% em 2014 para 37%.

Relatório elaborado por um grupo de educadores e pesquisadores durante o processo de transição para o atual governo federal, aponta várias causas da violência contra a escola, bem como propostas para o seu enfrentamento.

Segundo esse relatório, “prevenir e impedir os ataques às escolas passa por ações extra e intraescolares, por meio de um trabalho intersetorial, com ação efetiva da gestão das redes públicas de ensino”. Ressalta a necessidade de uma campanha ampla de denúncia à cooptação dos jovens por grupos de extrema direita, a identificação e punição das lideranças de grupos extremistas.

A gravidade do problema que está se alastrando em nosso país, exige ação urgente e inteligente dos órgãos responsáveis pela segurança da sociedade em geral e das escolas em especial.

Reconhecendo o peso dos fatores extraescolares e a necessidade de ações amplas e intensas dos órgãos públicos no combate à violência contra a escola, neste texto buscamos também colocar foco nas ações intraescolares, pois a médio e longo prazo a educação tem um papel primordial para a formação de cidadãos que não se deixem encantar por ideias e valores da extrema-direita.

Segundo Vera Iaconelli (2023), a escola é o lugar em que a sociedade revela sua melhor e pior faceta. Embora imersa em uma sociedade violenta, “a escola tem por prerrogativa criar espaços de reflexão sobre a realidade, mediar conflitos e questionar o que se transmite”.

Yamasaki (2007, p. 144), desenvolveu tese de doutorado em que analisa a violência na escola sob a luz da teoria freiriana. Segundo essa autora, para Paulo Freire, a violência é uma construção histórica em que os opressores negam aos oprimidos o direito de ser. Nesse contexto de opressão, formase uma consciência que se funda na exploração e na injustiça. Como consequência, a ação dos oprimidos tanto pode ser a reprodução da opressão sofrida, como pode ser uma luta para conquistar o direito de ser. Mas essa não é uma luta individual e sim coletiva.

Toda escola convive com certo grau de violência, embora as pessoas costumem se indignar somente quando ocorre uma tragédia. No dia-a-dia da escola, muitas vezes, ignoram-se situações como ameaças, xingamentos, apelidos de mau gosto, bullying, cyberbullying, discriminações, intimidações, ironias, brigas, como se fossem normais em crianças e adolescentes. Naturalizam-se as violências cotidianas, mas elas podem resultar em tragédias. Sabemos também, que simplesmente reprovar esses comportamentos, separar brigas, fazer “sermões” moralistas ou aplicar sanções regimentais não tem o poder de findar as tensões existentes e elas sempre reaparecem.

A escola não pode resolver todos os problemas da sociedade, mas os órgãos públicos responsáveis pela educação (MEC, Secretarias e departamentos estaduais e municipais de educação) e cada escola na sua singularidade, podem optar por alimentar a opressão ou enfrenta-la por meio do diálogo, do acolhimento de todos, da participação, do combate às discriminações, do desenvolvimento de uma cultura de paz e valorização de cada um naquilo que lhe é possível desenvolver. Uma educação emancipadora que humaniza e desenvolve a consciência crítica, como diria Paulo Freire.

A transformação de uma realidade é sempre um processo coletivo, como nos ensina Paulo Freire. Os atos de agressão num ambiente social como a escola não podem ser tratados como um desvio individual. O enfrentamento da violência na escola tem que ser um projeto conjunto entre escola, famílias, redes de proteção a crianças e ao adolescente, com apoio das Secretarias de educação. Trata-se de problema complexo que requer uma ação reflexiva, planejada e contínua.

A Constituição de 1988 e a Lei de Diretrizes e bases da educação, de 1996 apontam o caminho: a elaboração do Projeto político-pedagógico da escola (PPPE) vinculado ao princípio da gestão democrática. Essa elaboração requer a participação de toda a equipe escolar, dos alunos e de suas famílias. Para isso a escola tem de ser um espaço de diálogo, de encontro de ouvir e ser ouvido. A elaboração do PPPE tem como ponto de partida a análise da situação da escola com seus problemas e suas potencialidades. A partir dessa análise, tomam-se decisões e definem-se prioridades. Esse plano tem que ser acompanhado e avaliado para que não se percam as diretrizes propostas. Assim, a violência na escola, como uma das questões que certamente será identificada, pode ser trabalhada dentro de um projeto mais amplo.

Segundo Aida Maria Monteiro Silva, em estudo sobre a violência nas escolas, alunos e professores quando perguntados sobre o que se poderia fazer para diminuir a violência deram sugestões como: tratar todos os indivíduos com respeito e dignidade, valorizando o que cada um tem de bom; fazer com que a escola se torne mais atualizada para que os alunos gostem mais dela; trabalhar a problemática da violência e dos direitos dos cidadãos no currículo escolar, através do conjunto de disciplinas, na perspectiva da interdisciplinaridade; promover um processo de conscientização constante sobre a temática da violência, sobretudo em um trabalho conjunto com a família e a comunidade; incentivar comportamentos de trocas, diálogos, estimulando a análise crítica dos alunos sobre situações variadas.

Essas sugestões nos remetem ao currículo escolar. Um currículo que priorize a diversidade de olhares sobre as realizações humanas e que tenha como ponto de partida a vida dos alunos, para que saiam da invisibilidade, para que se percebam como pessoas que têm importância para a escola e para o país em que vivem.

No entanto, para que a escola possa ser esse lugar em que alunos e professores se sintam pertencentes e participantes, a ação das Secretarias de educação não pode ser burocrática, como tem sido. Escolas abandonadas à sua própria sorte, educadores desvalorizados e sem formação que propicie uma educação libertadora.

O processo de desconstrução da escola que não acolhe a todos e que minimiza a violência cotidiana e finge ignorar aquela que extrapola os muros da escola, passa pela revisão da formação dos educadores. Não qualquer formação, mas uma que parta da sua própria prática docente, possibilite uma profunda reflexão e dê condições para outra, fundamentada no diálogo com os educandos, no estudo, na pesquisa e na problematização.

É preciso rever também as condições de trabalho. Professores que atuam em diversas escolas dificilmente conseguem participar ativamente do projeto político-pedagógico de alguma delas. Passam pelas escolas, mas não se sentem pertencentes a nenhuma. Muitas vezes, sequer conhecem direito os alunos com os quais trabalham. Nesse contexto, como podem identificar alterações de comportamento dos jovens que indiquem uma tendência à prática de atos violentos para atuar no sentido de preveni-los?

Quanto aos alunos, é preciso reforçar as esferas de participação como conselho de escola, grêmios e assembleias estudantis. Quanto mais participação dos alunos, maior é a chance de os educadores conhece-los.

Os conflitos e as tensões não desaparecerão da escola, pois são inerentes à convivência entre as pessoas. O que é possível mudar, é a forma de viver esses conflitos e tensões, por meio do diálogo e de uma educação humanizadora e emancipadora, como propõe Paulo Freire.

Referências:
APEOESP e Instituto Locomotiva. Aumentam os casos de violência nas escolas públicas, 2020.
BRASIL. Constituição da República Federativa do Brasil. 1988.
BRASIL. Lei 9394/1996: Lei de Diretrizes e Bases da Educação Nacional.
CARA, DANIEL et al. O extremismo de direita entre adolescentes e jovens no Brasil, 2022.
IACONELLI, Vera. Uma facada no coração da escola. Folha de São Paulo, 23 mar 2023.
SILVA, Aida Maria Monteiro. A violência na escola: a percepção dos alunos e professores.
YAMASAKI, Alice Akemi. Violências no contexto escolar: um olhar freiriano. 2007.`
    },
    {
      id: '2023-atos-brasilia',
      title: 'Moção de repúdio – Atos do 08/01/2022',
      year: '2023',
      type: 'manifesto',
      content: `Nós, educadores e educadoras do Coletivo Paulo Freire, acreditamos na democracia, na liberdade de expressão, na manifestação pacífica, nas instituições e na alternância de poder.

Em nossos princípios e fundamentos encontramos a força do ideário Freiriano que prega a tolerância, a aceitação e, essencialmente, a amorosidade.

E é com esse pensamento que nos somamos aos milhares de brasileiros e brasileiras que repudiam os atos terroristas praticados em 08/01 em Brasília.

Pensando no futuro das crianças, adolescentes e jovens brasileiros, exigimos punição exemplar para os que praticaram atos de vandalismo, bem como, para os financiadores e autoridades que por conivência ou inação apoiaram os atos antidemocráticos, sem qualquer chance de anistia.

O Brasil quer tranquilidade e paz necessárias ao crescimento do país em todas as áreas.

Vamos às ruas por um país solidário e pelo Estado Democrático de Direito!

#SemAnistia`
    }
  ],
  '2022': [
    {
      id: '2022-violencia-posicionamento',
      title: 'A questão da violência nas escolas',
      year: '2022',
      date: 'Novembro/22',
      type: 'posicionamento',
      content: `O recente ataque, por um adolescente armado, contra duas escolas do pequeno município de Aracruz, no Espírito Santo, com quatro mortes confirmadas e mais feridos em estado muito grave, abriu a discussão para a questão da violência e do facilitado acesso a armas promovido pelo governo federal em fase de finalização. Extremamente preocupante, porque extrapola questões que podem ser resolvidas no interior das escolas ou no ambiente escolar. “Perdi minha filha para o ódio”, declarou a mãe da criança assassinada numa das escolas.

Muito especialmente a partir dos anos 1980 inúmeros estudos e projetos na área da educação têm se voltado para tais questões, desde depredações e destruição do patrimônio escolar até mesmo questões de violência interpessoal, ou seja, brigas geradas por questões nascidas no ambiente escolar ou fora dele. Também pode-se perceber o crescimento de agressões e delitos por parte de estudantes, caracterizando formas de sociabilidade em que a violência se torna um dos elementos fundamentais.

Além disso, são comuns também nos nossos dias as cenas da violência vivenciada por estudantes que estudam em áreas dominadas pelo tráfico de drogas ou pelo crime organizado, que têm que se jogar ao chão no meio de tiroteios, por grupos que não respeitam as áreas onde se situam escolas – aliás, nem mesmo os policiais o fazem. Nessas áreas também são comuns o assédio por parte de traficantes aos escolares, questão que angustia os educadores, mas é difícil de ser combatida.

Todavia, no Brasil espalham-se nas redes escolares episódios como o citado acima. Nos Estados Unidos, país que valoriza sobremaneira a posse e o uso de armas por seus cidadãos, são relatados cerca de 2.000 episódios de invasão e massacres de estudantes, professores e outros profissionais. Desses, mais de 1.500 são posteriores a 2012, o que demonstra o crescimento desse fenômeno. No Brasil não atingimos índices tão elevados, mas podemos perceber um crescimento significativo dessas ocorrências muito especialmente nos últimos dez anos. Muitos professores também perderam a vida dentro do ambiente de trabalho. Além disso, com o crescimento da violência nem terras indígenas, com inúmeros assassinatos dos seus integrantes, crescem as ameaças contra escolares dessas áreas, segundo suas lideranças.

Embora haja ações que podem – e devem – ser executadas nas escolas, principalmente direcionadas ao combate ao racismo, fica claro que uma mais ampla atuação compete também às autoridades. Fica muito claro – e esse assunto tem sido abordado pelos políticos e outros envolvidos na transição ao novo governo – a necessidade de desarmamento da população. O governo que ora está sendo finalizado não apenas propiciou o acesso indiscriminado a armas, como trabalhou a ideia de que elas estavam ligadas a questões desegurança, pública e privada. Além disso, o apoio dado por muitos dos integrantes desse governo a milícias, junto com oenfraquecimento das instituições de estado, agrava ainda mais esse quadro.

O que se apresenta portanto a toda a sociedade é a reconstrução das áreas ligadas ao setor social dentro do governo – à educação, saúde, assistência social, aos direitos humanos, sociais, políticos, trabalhistas... Por isso lutamos por uma educação pública, inclusiva, antirracista, laica, que pregue o respeito às diferenças e possa reconstruir laços entre os grupos separados pelo ódio. Que as escolas valorizem práticas democráticas no seu interior. Que as ações e políticas públicas se voltem para essas questões. E que não sejamos todos reféns do ódio.

Este é apenas um início de conversa. Comente, posicione-se, escreva, fale a respeito. Vamos fazer ouvir nossa foz enquanto educadores. O espaço está aberto.`
    },
    {
      id: '2022-relacoes-raciais',
      title: 'As relações étnico raciais na escola',
      year: '2022',
      date: 'Novembro/2022',
      author: 'Regina Estima',
      type: 'artigo',
      content: `“A educação sozinha não transforma a sociedade, mas sem ela a sociedade não muda” dizia o mestre Paulo Freire.

É impossível falar em educação de qualidade sem pensar nas relações raciais e no combate às desigualdades educacionais, promovidas pelo racismo estrutural, que permanece vivo no imaginário da população brasileira.

A efetividade da política educacional passa pelo aperfeiçoamento das medidas desde a gestão governamental para alcançar os níveis e modalidades de ensino, até as salas de aula de todas as escolas do Brasil.

Ninguém nasce racista, ninguém nasce odiando o outro e praticando toda a forma de violência física e simbólica, contra os seus pares, querendo eliminá-los só pela cor da pele, pela origem, pela orientação sexual ou pela religião.

O racismo se aprende e é cultivado e divulgado por crianças, adolescentes e jovens, desde a socialização em família, passando por todas as instituições a que estiverem expostos.

Ao longo da história, o Movimento Negro tem destacado a importância da escola na desconstrução de todas as formas de racismo.

Há que se ter olhar e atitude crítica, para enxergar o racismo nas relações cotidianas das várias instituições que se propõem educadoras: família, escola, igreja, sindicato, etc. Na maioria das escolas, como em outras instituições brasileiras, o racismo segue naturalizado, acontecendo de forma sutil nas relações interpessoais, em linguagens, comportamentos, atitudes e decisões, ou até de forma explícita com apelidos, discriminações e todas as formas de agressões e brincadeiras.

É tarefa da escola construir uma nova educação, com qualidade social antirracista, humanista e inclusiva, que aceite e valorize a diferença e promova a igualdade de direitos, fortalecendo a identidade e subjetividade de todos e todas: educadores e educandos. Para isso, a escola precisa conhecer as origens de seus estudantes e sua bagagem sociocultural.

O que a escola pode fazer para avançar em uma educação antirracista:
• Formação permanente dos educadores;
• Inclusão da questão racial e do ensino da história e culturas: africanas, afrobrasileira e indígenas, no currículo escolar;
• Gestão participativa com discussão ampla das regras de funcionamento de cada escola, junto a sua comunidade;
• Definição de planos de ensino que levem em conta a legislação citada abaixo, trazendo as especificidades da educação antirracista para as práticas pedagógicas afirmativas;
• Promoção da sociabilização infanto-juvenil, e fortalecimento das subjetividades para o desenvolvimento humano integral.
• Rodas de conversa com as famílias da comunidade escolar

Legislação educacional sobre o tema:
• Leis 10.639/2003 e Lei 11645/2008 - tornam obrigatório o ensino da História e cultura africana e afro-brasileira no currículo escolar com ênfase nas disciplinas de História, Arte e Literatura, objetivando a educação para as relações étnico-raciais;
• Parecer CNE/CP nº 3, de 10 de março de 2004 - institui as Diretrizes Curriculares Nacionais para a Educação das Relações Étnico-Raciais e para o Ensino de História e Cultura Afro-Brasileira e Africana.
• Resolução CNE/CP 01/2004 - institui as Diretrizes Curriculares Nacionais para a Educação das Relações Étnico-Raciais e para o Ensino de História e Cultura Afro- Brasileira e Africana.
• Parecer CNE/CEB nº 14/2015 - institui as Diretrizes Operacionais para a implementação da história e das culturas dos povos indígena na Educação Básica, em decorrência da Lei nº 11.645/2008.`
    },
    {
      id: '2022-carta-compromisso',
      title: 'Carta compromisso com a educação – Coletivo Paulo Freire',
      year: '2022',
      type: 'carta',
      content: `O Coletivo Paulo Freire defende a escola pública com qualidade social e democrática e o legado de Paulo Freire. A formação desse coletivo se deu em 2019, ano da comemoração dos trinta anos do projeto educacional de Paulo Freire e Luiza Erundina na Prefeitura de São Paulo, trabalho único no país, referência que deve ser considerada sempre que se falar de educação pública. Participam dele educadores comprometidos com a democracia e com a concepção crítico-libertadora de educação.

O Brasil possui cerca de 131.600 unidades escolares públicas de Ensino Fundamental e Médio que atendem a 38 milhões de alunos. Na Educação Infantil são cerca de 6 milhões e meio de crianças de 0 a 6 anos matriculadas em escolas municipais. Temos 69 universidades federais e 40 estaduais que atendem a aproximadamente 3,3 milhões de estudantes. É um patrimônio público com grande potencial para o desenvolvimento do país. Merece, portanto, toda a atenção dos deputados federais.

Reconhecemos a importância e o grande serviço prestado pela rede pública de ensino, mas sabemos que há muitos problemas que precisam ser enfrentados para que possa atender melhor a população. Balanço elaborado pela Campanha Nacional pelo Direito à Educação, sobre as metas do Plano Nacional de Educação (PNE) com vigência de 2015 a 2025, indica que a maioria das metas não foi cumprida, muitas apresentam retrocesso e outras não serão atingidas até o final da vigência do Plano.

A atuação do Ministério da Educação nos últimos anos não tem priorizado a escola pública, nem desenvolvido ações para melhorar a educação no país. Professores e gestores do ensino básico apontam sérios problemas que afetam o cotidiano das escolas, como a falta de professores e pessoal do quadro de apoio, falta de amparo às famílias para manutenção dos alunos na escola com aprendizagem satisfatória, ausência de diálogo das secretarias de educação com as escolas e a implementação de reformas curriculares inadequadas, sem debate com os educadores. No ensino superior, cortes de recursos têm sido uma constante por parte do atual governo federal prejudicando a qualidade do ensino e o desenvolvimento da pesquisa.

Nós, do Coletivo Paulo Freire, com base em análises elaboradas pela Campanha Nacional pelo direito à educação, em nossa experiência como educadores e militantes em defesa da escola pública e, a partir de consulta a outros educadores que atuam na rede pública de ensino, propomos alguns pontos que devem ser objeto de atenção e ação dos(as) parlamentares, tendo em vista a defesa da escola pública, a garantia de recursos para a educação, a gestão democrática da educação pública e a melhoria do acesso, permanência e aprendizagem dos alunos.`
    },
    {
      id: '2022-brasil-alfabetizado',
      title: 'Contesta a interferência antidemocrática no programa Brasil Alfabetizado e a retirada da Medalha Paulo Freire',
      year: '2022',
      date: '16 de fevereiro de 2022',
      type: 'posicionamento',
      content: `“A Alfabetização é mais, muito mais, do que ler e escrever. É a habilidade de ler o mundo.“
Paulo Freire

O Programa Brasil Alfabetizado, destinado à universalização da alfabetização a quem tem 15 anos ou mais, foi criado em 2003 pelo presidente Luiz Inácio Lula da Silva. Por esse programa, personalidades e instituições que se destacam nos esforços de erradicação do analfabetismo faziam jus à Medalha Paulo Freire.

O Programa Brasil Alfabetizado que até 2016, quando foi desativado, já havia beneficiado cerca de 15 milhões de pessoas com o atendimento prioritário em 1928 municípios que apresentavam taxa de analfabetismo igual ou superior a 25%, se encontra agora reeditado pelo Decreto 10.959 de 8 de fevereiro de 2022 que revoga o decreto anterior, retirando as propostas de incentivo para o seu crescimento, dentre elas a Medalha Paulo Freire.

Eram vários programas que compunham um rol de políticas sociais integradas, voltadas para o atendimento das populações de alta vulnerabilidade. Além do Programa do Brasil Alfabetizado faziam parte: Programa Nacional do livro didático para Alfabetização de Adultos; Coleção Literatura para Todos; Programa de Educação nas Prisões; Estímulo a Obtenção de Registro Civil; Combate ao Trabalho Escravo; Projeto Olhar Brasil e Formação de Educadores.

Nada justifica a interrupção de um programa dessa relevância social, durante seis anos e sua reedição descaracterizada, no último ano de mandato de um governo que já demonstrou que a Educação não é sua prioridade! Qual o sentido dessa reedição intempestiva?

No programa original, a Comissão Nacional de Alfabetização e Educação de Jovens e Adultos (CNAEJA) era composta por personalidades reconhecidas nacionalmente e por pessoas indicadas por instituições e entidades representativas da área educacional, de forma democrática. A comissão, de caráter consultivo, tinha a função de assessorar na formulação e implementação das políticas nacionais e no acompanhamento das ações de alfabetização e de educação de jovens e adultos.

O decreto atual outorga ao ministro da educação a prerrogativa de indicar e designar os membros da Comissão Nacional de Alfabetização e restringe a atuação da Comissão à fiscalização da aplicação dos recursos financeiros, além de não assegurar a liberação de verbas para o programa.

Na versão original, a sociedade participava de todo o processo e indicava seus representantes. Na atual, o governo indica quem ele julga representar a sociedade para apenas fiscalizar os recursos financeiros.

O Coletivo Paulo Freire, uma organização democrática e suprapartidária, que atua em São Paulo, repudia mais esse ataque à imagem do patrono da educação brasileira, à educação pública e à democracia. O Programa Brasil Alfabetizado deve ser pautado por educadores reconhecidos democraticamente pelas comunidades educacionais. É um programa essencial para o país e deve ter a sua verba assegurada. Entendemos que a Medalha Paulo Freire é uma justa homenagem ao grande educador brasileiro, reconhecido internacionalmente, que tanto fez pela erradicação do analfabetismo no Brasil. Ela significa um grande incentivo para que instituições e pessoas invistam na alfabetização de jovens e adultos, mantendo vivo o legado de Paulo Freire. Portanto deve ser mantida, assim como as prerrogativas democráticas do programa.`
    }
  ],
  '2021': [
    {
      id: '2021-defesa-professor',
      title: 'Em defesa da Educação e do professor',
      year: '2021',
      type: 'posicionamento',
      content: `O Coletivo Paulo Freire não poderia se furtar a se pronunciar sobre as falas do deputado de extrema direita, filho do ex-presidente, feitas num evento pró-armas, comparando professores com traficantes de drogas, dizendo que a ação desses últimos seria menos maléfica.

Todos sabemos os significados do uso que esse deputado faz do termo "doutrinadores", preconizando um ensino que desconsidera os conhecimentos científicos, substituídos, isso sim, por posicionamentos ideológicos. Pior, a colocação num evento pró-armas pressupõe e justifica o uso delas tanto contra os traficantes de drogas como, principalmente, contra os professores.

Não podemos esquecer a importância que Paulo Freire dava aos professores e às tarefas docentes, afirmando que "ensinar é uma especificidade humana", que exige competência e comprometimento, contra a perspectiva dos interesses dominantes, que querem a educação como uma prática imobilizadora e ocultadora de verdades. Só podemos reafirmar, contra esse e outros posicionamentos do deputado, que a terra continua sendo redonda.`
    }
  ],
  '2020': [
    {
      id: '2020-carta-candidatos',
      title: 'Carta aos candidatos a prefeito e vereador da Cidade de São Paulo',
      year: '2020',
      date: 'Julho 2020',
      type: 'carta',
      content: `O Coletivo Paulo Freire defende a escola pública com qualidade social e democrática e o legado de Paulo Freire. A formação desse coletivo se deu em 2019, ano da comemoração dos trinta anos do projeto educacional de Paulo Freire e Luiza Erundina na Prefeitura de São Paulo, trabalho único no país, referência que deve ser considerada sempre que se falar de educação pública. Participam dele educadores comprometidos com a democracia e com a concepção crítico-libertadora de educação. Muitos desses educadores atuam na rede municipal de ensino como professores, coordenadores pedagógicos, diretores e supervisores. Outros, já atuaram nessa rede e participaram diretamente da gestão do Professor Paulo Freire durante o governo de Luiza Erundina em São Paulo, no período de 1989 a 1992. Nesse período o ensino municipal de São Paulo teve muitos avanços e é preciso retomá-los.

A Cidade de São Paulo possui a maior rede municipal de ensino do país, com mais de 1 milhão de alunos, distribuídos em cerca de 1500 unidades de administração direta e 1700 de administração indireta e conveniada. É um patrimônio público com grande potencial para o desenvolvimento da cidade. Merece, portanto, todo o empenho do futuro prefeito, de sua equipe e da câmara municipal.

Nós, do Coletivo Paulo Freire, com base em nossa experiência como educadores e militantes em defesa da escola pública e a partir de consulta a outros educadores, propomos alguns pontos que entendemos devam ser incorporados ao plano de governo do futuro prefeito, bem como de futuros vereadores.`
    },
    {
      id: '2020-apoio-boulos',
      title: 'Coletivo Paulo Freire com Boulos e Erundina',
      year: '2020',
      date: '19 de novembro de 2020',
      type: 'manifesto',
      content: `A pandemia expôs a precariedade das escolas públicas municipais de São Paulo. Prédios sem condições físicas adequadas, módulo de funcionários incompletos, desvalorização dos trabalhadores das escolas, falta de formação continuada, ausência de diálogo com os educadores. A gestão Dória/Covas não fez investimentos para melhorar a qualidade do ensino. O atendimento aos estudantes das escolas municipais durante a pandemia foi falho, seja no que se refere ao trabalho pedagógico proposto pela secretaria de educação, que ignorou a falta de acesso das famílias à internet, seja na distribuição do vale-alimentação. A situação só não foi pior graças ao esforço de gestores e professores. Um ano letivo se perdeu, sem que a prefeitura tivesse dotada as escolas de condições mínimas para receber os alunos com segurança no próximo ano.

Temos condições de, por meio do voto, mudar essa triste realidade. Guilherme Boulos é professor, sabe da importância da educação. Luiza Erundina deixou um legado para a rede municipal, seja no que se refere ao projeto político-pedagógico, seja quanto à carreira do magistério. A gestão democrática se fortaleceu em seu governo e os professores participaram ativamente da elaboração do Regimento escolar e do Estatuto do magistério. Houve avanços na educação de adultos e na acessibilidade de alunos com deficiência. O acervo de livros foi ampliado e os primeiros laboratórios de informática implantados. Boulos retoma, em seu programa de governo, as diretrizes e propostas iniciadas na gestão de Erundina e as atualiza.`
    },
    {
      id: '2020-pei',
      title: 'Não à imposição autoritária do Projeto de Educação Integral (PEI)!',
      year: '2020',
      date: 'Out 2020',
      type: 'manifesto',
      content: `Somos um Coletivo formado por educadores preocupados com caminhos tomados pelas políticas para a educação pública.

O Coletivo Paulo Freire tem se pautado pela defesa da educação pública como um direito assegurado a todos pela Constituição, e tem lutado por uma escola com qualidade social, gratuita, laica, inclusiva. Fundamentalmente, por um modelo de escola que possa atender aos diferentes grupos da população: de crianças desde a mais tenra idade e adolescentes a adultos, todos devem ter acesso a esse direito fundamental que é a educação. Pautamo-nos pela defesa de uma estrutura de escola em que os diferentes setores envolvidos – professores e técnicos, funcionários, pais, alunos – sejam ouvidos, sejam considerados dentro de uma gestão, em todos os níveis, também democrática.

É, portanto, preocupante que neste momento, ainda em plena pandemia, com as comunidades sofrendo com desemprego e perda de renda, além dos problemas relativos à saúde, com as escolas fechadas e desestruturadas, as autoridades estaduais estejam tentando impor, de forma autoritária, a adesão ao Projeto de Educação Integral (PEI), sem levar em conta a decisão dos conselhos de escola e dos demais envolvidos.

Embora sejamos favoráveis a uma escola em tempo integral, consideramos que essa forma de imposição do governo estadual é cruel para todos: desrespeita o momento, ignora as necessidades da comunidade e a realidade de educandos, mexe com a vida funcional de professores e funcionários. Além disso, é altamente excludente, pois promove o fechamento de salas e turnos e impossibilita que muitos educandos permaneçam na escola – geralmente aqueles mais necessitados das alternativas nesse sentido.

Solidarizamo-nos com os colegas da rede estadual de ensino, que estão colocando em discussão em suas escolas e comunidades a extensão e os resultados previsíveis dessa imposição de um modelo gestado em gabinetes, que parece ter a clara intenção de diminuir a quantidade de escolas, classes e turnos à disposição da população. Sabemos que essa é uma luta por direitos, mais do que por modelos. Estamos há décadas lutando pelo acesso e permanência de todos na escola, e pela extensão desse direito a todos os grupos sociais. Contem com nossa adesão e nosso apoio.`
    },
    {
      id: '2020-educacao-inclusiva',
      title: 'Pelo fortalecimento da educação inclusiva',
      year: '2020',
      date: 'Out 2020',
      type: 'posicionamento',
      content: `Nós, educadores reunidos no Coletivo Paulo Freire, colocamo-nos na proposição e na defesa de uma educação pública democrática, crítico-libertadora, humanista e inclusiva. Por isso, preocupa-nos as tentativas dos governos, a nível federal, estadual e municipal, de reintroduzir no sistema público as chamadas “classes especiais”, ou “escolas especiais”, destinadas aos educandos portadores de deficiências.

Há cerca de três décadas tem crescido a inclusão de educandos com deficiências várias no sistema de educação regular. Essas crianças e adolescentes eram antes classificadas com relação ao tipo de deficiência apresentada, normalmente a partir de critérios clínicos e médicos. Definidos então como “inválidos” ou “excepcionais”, superando inclusive a utilização de termos mais antigos como “anormais” ou “idiotas”, eram reunidos em escolas ou classes especializadas, e a partir de procedimentos específicos, eram “preparados” para uma possível, embora distante, integração à sociedade. Esse sistema de ensino “especial” era restrito, porque fornecia um número pequeno de vagas, e ineficiente nos seus objetivos, pois criava guetos dificilmente integrados ao meio social.

Há cerca de trinta anos teve início um processo de incorporação dos educandos com deficiências à rede escolar. Em 1989, a Lei 7853/89 estabelecia normas para assegurar “o pleno exercício dos direitos individuais e sociais das pessoas portadoras de deficiências, e sua efetiva integração social”; inseria todas as escolas especiais no sistema de educação, em todos os níveis, assegurando ainda “a matrícula compulsória em cursos regulares de estabelecimentos públicos e particulares de pessoas portadoras de deficiência capazes de se integrarem no sistema regular de ensino”. A par dos direitos à educação, estabelecia também o acesso ao sistema de saúde. Era um primeiro passo.`
    }
  ]
};
