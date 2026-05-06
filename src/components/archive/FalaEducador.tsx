import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ExternalLink, Mail } from 'lucide-react';

type Section = 'index' | 'jardinagem' | 'radio';

export default function FalaEducador() {
  const [section, setSection] = useState<Section>('index');

  const renderIndex = () => (
    <div className="max-w-7xl mx-auto px-5 md:px-10 py-20">
      <div className="mb-20">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 text-pf-dark">Fala, educador!</h1>
        <div className="h-1 w-20 bg-pf-red mb-8"></div>
        <div className="flex flex-col gap-6 max-w-4xl text-pf-dark/80 leading-relaxed font-medium">
          <p>
            Esta página quer ser uma linha de comunicação sempre aberta entre o Coletivo Paulo Freire e os demais educadores. Nossa proposta é inserir relatos de práticas desenvolvidas na perspectiva freireana, ou seja, voltados para uma concepção de educação crítico-libertadora.
          </p>
          <p>
            Queremos construir um diálogo, apresentando relatos e ao mesmo tempo recebendo contribuições, críticas, comentários e sugestões. Podem ser textos escritos, ilustrados ou não, mas também vídeos, fotos, desenhos, quadrinhos... 
          </p>
          <p className="font-bold text-pf-dark">Estamos de portas abertas!</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Oficina de Jardinagem */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="group cursor-pointer"
          onClick={() => setSection('jardinagem')}
        >
          <div className="aspect-[4/3] overflow-hidden rounded-sm border-subtle bg-pf-dark mb-6 relative">
            <img 
              src="https://i.postimg.cc/25pcpPNS/image-2026-05-06-154205250.png" 
              alt="Oficina de Jardinagem" 
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-pf-dark/20 group-hover:bg-transparent transition-colors"></div>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-pf-dark group-hover:text-pf-red transition-colors">
            Oficina de Jardinagem
          </h2>
          <p className="text-pf-muted mt-2 text-sm uppercase tracking-widest font-bold">Por Sabrina Abbas</p>
        </motion.div>

        {/* Rádio de Bitita */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="group cursor-pointer"
          onClick={() => setSection('radio')}
        >
          <div className="aspect-[4/3] overflow-hidden rounded-sm border-subtle bg-pf-dark mb-6 relative">
            <img 
              src="https://i.postimg.cc/nzJPmN33/image-2026-05-06-154106966.png" 
              alt="Rádio de Bitita" 
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-pf-dark/20 group-hover:bg-transparent transition-colors"></div>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-pf-dark group-hover:text-pf-red transition-colors">
            Rádio de Bitita
          </h2>
          <p className="text-pf-muted mt-2 text-sm uppercase tracking-widest font-bold">EMEF Escritora Carolina Maria de Jesus</p>
        </motion.div>
      </div>

      <div className="mt-32 p-10 bg-pf-feature rounded-sm border-subtle flex flex-col items-center text-center">
        <Mail className="text-pf-red mb-4" size={32} />
        <h3 className="text-xl font-bold text-pf-dark mb-2">Quer compartilhar sua prática?</h3>
        <p className="text-pf-muted mb-6 max-w-lg">
          Envie seu relato, projeto ou experiência para o nosso coletivo e vamos construir juntos essa rede de saberes.
        </p>
        <a 
          href="mailto:coletivopaulofreire1@gmail.com"
          className="bg-pf-red text-white px-8 py-3 font-bold uppercase tracking-widest text-[11px] hover:bg-pf-dark transition-all rounded-sm shadow-md"
        >
          Fale Conosco
        </a>
      </div>
    </div>
  );

  const renderJardinagem = () => (
    <div className="max-w-4xl mx-auto px-5 md:px-10 py-20">
      <button 
        onClick={() => setSection('index')}
        className="flex items-center gap-2 text-pf-muted hover:text-pf-red transition-colors mb-12 uppercase tracking-widest text-xs font-bold"
      >
        <ArrowLeft size={16} /> Voltar para Fala, educador!
      </button>

      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-pf-dark">Oficina de Jardinagem</h1>
        <p className="text-pf-red uppercase tracking-widest text-xs font-bold">Relato por Sabrina Abbas</p>
      </div>

      <div className="flex flex-col gap-8 max-w-none text-pf-dark/90 leading-relaxed font-serif">
        <p>Olá, meu nome é Sabrina Abbas, sou pedagoga, especialista em História Social e atualmente, mestranda em História Social pela PUC/SP com bolsa pela CAPES. Em 2019 fui convocada em diário oficial para ingressar como professora de educação infantil e ensino fundamental da Prefeitura Municipal de São Paulo. Iniciei minha carreira na instituição pública em 2020, numa escola de Educação Infantil no bairro da Lapa.</p>
        
        <p>Estava como professora em módulo, não tinha uma sala atribuída para mim e eu entrava nas salas em que a professora titular não estivesse. Iniciamos o ano com duas crianças que precisavam de uma atenção especial, uma com down e uma com microcefalia. Gostava de acompanhá-los. Em março de 2020, com o início da pandemia, ficamos em teletrabalho. Meu trabalho era preenchimento de uma pauta, que fiz para acompanhar o que eu estava fazendo em meu horário de trabalho. Com o concurso de remoção da prefeitura, fui para uma escola, em 2021, de ensino fundamental, no bairro de Pirituba.</p>
        
        <p>O início do ano de 2021 foi um tanto quanto conturbado para mim. A minha saúde emocional precisou de atenção. Estressada, com crises de ansiedade e pânico, tivemos nossa semana de planejamento. Na semana seguinte, fomos presencialmente à escola para reunião com as professoras de anos próximos. Fiquei atribuída em uma sala de primeiro ano do ensino Fundamental, com crianças de 5 e 6 anos. Nessa reunião, discutimos estratégias para a construção do planejamento dos primeiros 15 dias de aulas, que deveriam ter o formato para as aulas presenciais, para as aulas do Google Classroom e para os alunos que não pudessem frequentar a escola presencialmente e que não tivessem acesso online pudessem buscar atividades impressas na escola.</p>
        
        <p>Pensando o contexto da pandemia de covid-19 que ainda enfrentamos, penso na dificuldade de qualquer chefe de família se deslocar de sua residência até a escola de seu filho para buscar e entregar atividades. O momento de se pensar nesse planejamento foi bem complicado para mim. A escola em que estou segue a Base Nacional Comum Curricular e, fundamentalmente, o Currículo da Cidade. Documentos que tive acesso na primeira escola que estive com os quais me identificava bastante, mas imaginar que estaria lidando com crianças de outro contexto social, que precisam recuperar as aprendizagens do ano anterior, sem que eu pudesse os conhecer, sem que pudesse haver trocas de sorrisos, afetos e sensibilidades. Ou tendo tudo isso, estaria colocando minha vida em risco, a vida de meus familiares e colegas de trabalho, no caso de voltarmos para o trabalho presencialmente.</p>
        
        <p>Pensar nesse cenário me dava angústia. Fiquei durante uma semana corrida sem saber o que propor para aquelas crianças. Imaginei muitos cenários possíveis, mas o que me fez entender o necessário para a construção desse planejamento foi lembrar da necessidade do acolhimento, da necessidade do afeto. Imaginei e escrevi um planejamento com 80 páginas, com atividades presenciais, online e para impressão voltada ao encontro. Para que as crianças, mesmo sem se conhecerem, conhecessem uns aos outros. As crianças que levassem a atividade impressa para a casa, conheceriam seus amigos desenvolvendo atividades voltadas para a alfabetização com os nomes de todos da classe, inclusive os próprios nomes. As semanas girariam em torno desse acolhimento, mas necessitariam de trocas com as crianças para que se pudesse dar prosseguimento ao restante do planejamento.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12 not-serif font-sans">
          {[
            { url: 'https://i.postimg.cc/0NwNjK46/unnamed1.png', caption: 'Limpeza 1 e Limpeza 2 – Crianças limpando e retirando os entulhos da terra (São Paulo, 7 de março de 2016)' },
            { url: 'https://i.postimg.cc/GpyptTft/unnamed2.png', caption: 'Limpeza 1 e Limpeza 2 – Crianças limpando e retirando os entulhos da terra (São Paulo, 7 de março de 2016)' },
            { url: 'https://i.postimg.cc/x17C936H/unnamed3.png', caption: 'Limpeza 1 e Limpeza 2 – Crianças limpando e retirando os entulhos da terra (São Paulo, 7 de março de 2016)' },
            { url: 'https://i.postimg.cc/P5cxdQSw/unnamed4.png', caption: 'Sementeiras 1 – Crianças preparando as sementeiras e entendendo o processo de preparação de mudas para o plantio. Ao fundo estão as duas garrafas pet com os terrários preparados anteriormente (São Paulo, Maio de 2016)' },
            { url: 'https://i.postimg.cc/nh5znG3v/unnamed5.png', caption: 'Mural 2 – Mural construído na escola para compartilhar as aprendizagens (São Paulo, 6 de agosto de 2016)' },
          ].map((img, i) => (
            <div key={i} className="flex flex-col gap-3 group">
              <div className="aspect-square overflow-hidden rounded-sm border-subtle">
                <img 
                  src={img.url} 
                  alt={img.caption} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-[11px] text-pf-muted italic leading-relaxed px-1">{img.caption}</p>
            </div>
          ))}
        </div>
        
        <p>Desde 15/02/2020 entramos em greve. Greve decretada e aderida por 100% do corpo docente. Nos recusamos a colocarmos em risco nossas vidas e a vida de nossos familiares. O retorno da escola só poderá acontecer quando nos for garantida segurança. Quando nos for garantida a vacina para todos. Quando todas as crianças tiverem acesso online para participarem das aulas de forma remota. Quando nos for garantida ventilação em nossos locais de trabalho, com procedimentos exequíveis para o controle da Covid-19.</p>

        <p>Pois bem, meu relato se inicia em 2016, quando trabalhava numa escola de educação infantil privada, localizada no coração do Morumbi, bairro de elite na city de São Paulo. Trabalhei lá por um ano e meio, com crianças de quatro e cinco anos. Como em todo começo de ano, a escola convocou uma reunião de pais e responsáveis para apresentar-lhes os novos professores, os projetos que a escola desenvolvia com a comunidade, além da troca de experiências entre os participantes. As famílias compareceram com seus filhos à reunião, mas eu, uma das novas professoras, não pude estar presente, porque a escola entendeu que as crianças não poderiam participar de uma reunião como aquela e, para que não ficassem sozinhas pela escola, fiquei cuidando das meninas e meninos enquanto a reunião acontecia, o que foi bem esquisito.</p>

        <p>Pois bem, precisava conhecer essas crianças, seus contextos familiares e, no início do ano letivo, comecei a propor atividades que pudessem me mostrar os conhecimentos prévios delas, a forma como elas se relacionavam com as situações-problema do cotidiano, como elas viam e liam o mundo. Mesmo que fossem muito pequenas, elas enxergam o mundo, e o mundo visto pelos olhos de uma criança, geralmente, é um mundo repleto de sonhos, de esperança, de fantasia e alegria. Era desse mundo que eu queria fazer parte, ainda que na posição de adulta e de professora.</p>

        <p>Em um dos momentos em que levei as crianças para o parque da escola, pude perceber um interesse muito grande delas por um corredor que ficava ao lado do parque. Esse corredor era fechado por um portão de grades finas e brancas, tinha a altura da cintura de um adulto de estatura mediana e sempre estava fechado. Ele não era fechado com chave, mas com uma trava, o que torna sua abertura quase impossível, caso você seja uma criança. Esse corredor ficava a céu aberto e, do lado esquerdo, contava com um grande canteiro, que ocupava toda sua extensão. A terra desse canteiro estava repleta de ervas daninhas, havia muito lixo (materiais que certamente caíram naquele espaço devido à construção de um prédio no terreno ao lado), árvores com galhos cortados, até cacto havia.</p>

        <p>Esperei que as crianças se afastassem do corredor, discretamente abri o portãozinho e me afastei logo em seguida. Quando elas perceberam, foram se aproximando e, curiosas, olharam, exploraram, cheiraram. Coloquei próximo ao canteiro um balde com pás de areia, e isso foi o suficiente para que cada criança pegasse uma pá para explorar aquele lugar. Após esse momento, fomos para a sala de aula fazer uma roda de conversa sobre o que tínhamos acabado de vivenciar. Perguntei o que aquele espaço trazia de sentimentos para eles e, em meio a muitas respostas, a que mais me marcou foi a dada por uma menina, a Manu. Ela disse que aquele espaço era frio. Ela estava me dizendo que o espaço que tanto instigava não era acolhedor.</p>

        <p>Resolvemos fazer essa mesma pergunta para todas as pessoas que estavam na escola. Perguntamos à dona Cida que cuidava dos afazeres da cozinha, ao sr. Armando que ficava na portaria da escola, à dona Marli que, com toda sua alegria, cuidava da limpeza, às professoras de outras salas, às crianças. De forma resumida, obtivemos a resposta que tanto queríamos: de que aquele lugar era morto, triste e solitário. Um lugar que não conversava com o contexto da escola, que não era apresentado às famílias que, possivelmente, matriculariam seus filhos lá.</p>

        <p>Fiquei incomodada. Como um lugar como aquele, que deveria nos aproximar da natureza, pudesse suscitar tantas coisas ruins a tanta gente diferente? É importante dizer que todos os momentos eram precedidos de roda de conversa, nas quais construíamos os próximos passos sobre os rumos que aquela oficina tomaria. Com a oficina, nossa intenção era transformar aquele ambiente, pois transformar um ambiente também transforma pessoas, dá pertencimento àquele processo, constrói consciência cidadã.</p>

        <p>Decidimos que precisávamos limpar aquela terra, retirar todo o entulho. Ao fazermos isso, as crianças questionaram o porquê da terra do fundo do canteiro ser diferente da terra do topo. Essa pergunta foi incrível, deu um novo direcionamento para a oficina. Eu respondi que só poderíamos saber essa resposta se cada criança trouxesse de casa um saquinho com um pouco de terra. Recebemos mais de dez tipos de terra e analisamos as texturas, o cheiro, a cor. Conseguimos classificar todas essas terras em três tipos de solo: humoso, argiloso e arenoso. Encontramos bichinhos na terra – “Mas o que ele está fazendo aí? Coitadinho!...”, disse o Marcelo. Resolvemos estudar esses bichinhos e saber o que, de fato, faziam ali.</p>

        <p>Descobrimos que esses bichinhos são essenciais para uma terra sadia e fértil. Voltamos às nossas entrevistas com as pessoas da escola, mas, dessa vez, queríamos saber o que seria importante plantar naquele espaço. Pesquisamos sobre jardins, hortas, manchas florestais, árvores e vegetação em vias públicas. Elegemos, após votação, que o objetivo daquele canteiro seria a construção de uma horta. Contudo, antes de colocarmos as mãos na terra, precisávamos saber como vivem as plantas, o que é necessário para que elas não morram; será que é só molhar? Nessa etapa, a Clara nos contou que cuidar de uma planta é igual a cuidar de um cachorro: “É só dar água, comida e carinho três ou mais vezes por dia”. Sugeri que, para que tivéssemos certeza disso, montássemos dois terrários, ou seja, mini- jardins dentro de uma garrafa pet. Um terrário ficaria aberto e o outro, fechado. Foi possível, com essa atividade, entender como os bichinhos (minhocas, caracóis, formigas e joaninhas), contribuem com o solo e o processo do ciclo da água. “Água de mais pode matar a plantinha, professora Sá!”. Foi o que Clara concluiu.</p>

        <p>Para plantar, as crianças disseram que nós iríamos precisar de sementes. As famílias trouxeram sementes e o processo inicial aconteceu num sementário, até que as plantinhas ficassem grandes o suficiente para serem transplantadas para a horta.</p>

        <p>No meio desse processo, acabei descobrindo o Projeto Vc Muda. Esse projeto foi criado para estimular o paulistano a conviver with espécies vegetais. Eles promovem encontros em parques espalhados pela city e os divulgam por meio das redes sociais. Nossa turma, então, preparou uma muda de couve para levar ao encontro. De lá, trouxemos para nossa horta três mudas: camomila, orégano e salsinha. Nesse mesmo dia, tivemos a oportunidade de conversar sobre compostagem caseira e adubos, em um momento enriquecedor.</p>

        <p>Aquele espaço frio, triste e deslocado do contexto da escola, começou a fazer sentido. As outras turmas começaram a visitar a horta, começaram a se interessar mais pelas plantas daquele lugar. Montamos um mural with todas as nossas descobertas ao lado da porta da escola. As famílias liam o mural e entravam na escola para procurar a horta. A secretária, que apresentava a escola às famílias interessadas em matricular seus filhos lá, incluiu nossa horta como um espaço de apresentação da escola.</p>

        <p>Os relatos das crianças sobre a nossa horta chegavam aos responsáveis e cada vez mais elas queriam levar “um pedacinho” do nosso espaço para casa. Isso motivou um belo presente de Dia das Crianças. Preparamos potinhos reciclados, decorados por elas, com saquinhos embalados separadamente with pedra, terra e sementes. As crianças plantaram essas sementes em casa e todos os dias, durante as rodas de conversa, contavam como estava o crescimento das plantas.</p>

        <p>A relação da escola with aquele espaço mudou, as crianças passaram a zelar pela horta, a cuidar. Elas puderam vivenciar e impregnar de sentido o processo de transformação de um ambiente que compõe a vida delas. Foi interessante perceber como a horta foi impactante para todos nós. As crianças deram o direcionamento da oficina que, inicialmente, tinha sido pensada para durar um semestre, mas durou o ano inteiro. Essa experiência foi muito significativa para mim, pude aprender muito with as crianças, with suas falas, with seus sonhos, with a motivação intrínseca que toda criança carrega: pude olhar o mundo with olhos de encantamento.</p>

        <p>O diálogo construído with as crianças foi essencial, pois possibilitou a construção do sentido que teve aquele conhecimento para elas. A ponte de conexão entre um conhecimento necessário, escolar, obrigatório, foi construída a partir de inquietações reais das crianças. Durante o processo, a advogada e dona da escola sempre me questionava por que era preciso conhecer o solo; por que conhecer a função dos bichos da horta: “São crianças, Sabrina, eles vão aprender isso mais para afrente, agora eles só precisam brincar”. Sempre respondi dizendo que o processo era muito prazeroso às crianças e que não havia sido eu quem tinha pensado em todas as etapas da oficina. E não foi mesmo. Essas atividades aconteceram em um momento bem propício. Aprender sobre os tipos de solo dentro de uma sala de aula, sem tocar na terra di fato, seria tão significativo quanto tocar, cheirar, sentir a textura, perceber o que os diferencia? Os saberes são múltiplos e importantes em todos os aspectos, e a relação with o contexto dá significado no processo de ensino e aprendizagem. Paulo Freire vive em cada sentido contextualizado e crítico que damos dentro de nossa prática. Ele é reinventado a cada instante em que nos percebemos procurando um sentido dentro de uma sala de aula.</p>

        <p className="font-bold border-t-2 border-pf-red pt-8 mt-12 italic text-pf-dark">
          Muito obrigada, <br />
          Sabrina Abbas
        </p>

        <div className="bg-pf-feature p-6 rounded-sm text-sm mt-8">
          <p className="font-bold mb-2">Referências:</p>
          <p className="italic">GADOTTI, Moacir; CARNOY, Martin(Org.). Reinventando Freire: a práxis do Instituto Paulo Freire. 1ª ed. São Paulo: Instituto Paulo Freire, 2018, v. 1, p. 404-4</p>
        </div>
      </div>
    </div>
  );

  const renderRadio = () => (
    <div className="max-w-4xl mx-auto px-5 md:px-10 py-20">
      <button 
        onClick={() => setSection('index')}
        className="flex items-center gap-2 text-pf-muted hover:text-pf-red transition-colors mb-12 uppercase tracking-widest text-xs font-bold"
      >
        <ArrowLeft size={16} /> Voltar para Fala, educador!
      </button>

      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-pf-dark">Rádio de Bitita</h1>
        <p className="text-pf-red uppercase tracking-widest text-xs font-bold">EMEF Espaço de Bitita (Carolina Maria de Jesus)</p>
      </div>

      <img 
        src="https://i.postimg.cc/nzJPmN33/image-2026-05-06-154106966.png" 
        alt="Rádio de Bitita" 
        className="w-full aspect-video object-cover rounded-sm border-subtle mb-12 shadow-xl"
        referrerPolicy="no-referrer"
      />

      <div className="flex flex-col gap-8 max-w-none text-pf-dark/90 leading-relaxed font-serif">
        <p className="lead italic text-lg font-medium border-l-4 border-pf-red pl-6 mb-8">
          Um projeto da EMEF Espaço de Bitita (EMEF Infante Dom Henrique/EMEF Escritora Carolina Maria de Jesus).
        </p>

        <h2 className="text-2xl font-bold text-pf-dark mt-12 mb-4 uppercase tracking-tight">Contexto</h2>
        <div className="flex flex-col gap-6">
          <p>No contexto da pandemia de Covid-19, da suspensão das aulas presenciais e, consequentemente, do distanciamento entre os alunos e professores, surgiu a necessidade de continuarmos em contato with os estudantes da Educação de Jovens e Adultos, manter os vínculos construídos e informá-los a respeito deste período de afastamento.</p>
          <p>Para este momento, a escola organizou as turmas em grupos de WhatsApp, já que essa ferramenta se mostrou muito mais democrática e intuitiva do que outras plataformas propostas para o trabalho remoto. Para o nosso público- alvo, as mensagens por áudio atenderiam muito bem a todos os estudantes, mesmo aqueles ainda em processo de alfabetização.</p>
          <p>Porém, para que nossos informes e discussões não fossem “só mais um áudio”, passamos a incrementar as mensagens, with vinhetas, vírgulas sonoras e outros recursos que chamassem a atenção e, ainda assim, tornassem a experiência mais divertida. Esse foi o início da Rádio de Bitita que, em mais de 40 episódios, amadureceu muito em seu formato, conteúdo e edição.</p>
        </div>

        <h2 className="text-2xl font-bold text-pf-dark mt-12 mb-4 uppercase tracking-tight">Objetivos/Concepção</h2>
        <ul className="list-disc pl-6 space-y-4 font-sans text-base">
          <li>Produzir uma nova forma de comunicação e possibilitar novos recursos pedagógicos;</li>
          <li>Produzir material de qualidade que possa circular dentro e fora da escola, discutindo temas importantes e contando with a participação dos alunos;</li>
          <li>Amplificar as vozes dos integrantes da escola e do território, tratando de temas específicos da nossa comunidade e que constroem a identidade do lugar.</li>
        </ul>

        <h2 className="text-2xl font-bold text-pf-dark mt-12 mb-4 uppercase tracking-tight">Integrantes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 text-sm font-medium font-sans">
          <p>Carolina Cortinove (Artes)</p>
          <p>Eodete Ferreira (Turma A2 – EJA)</p>
          <p>Fabiana Raposo (Língua Portuguesa)</p>
          <p>Fernanda Zientara (Língua Portuguesa)</p>
          <p>Gabriel França (Turma B1 – EJA)</p>
          <p>Gabriela Rauseo (Sala de Leitura)</p>
          <p>Jéssica Salomão (Inglês)</p>
          <p>Lucas Rech (Pesquisador e Doutorando em Educação pela PUC - RS)</p>
          <p>Marcela Novaes (Arte)</p>
          <p>Ricardo Martins (História)</p>
          <p>Rodrigo Baglini (Educação Digital)</p>
          <p>Rosângela Parlamento (História)</p>
          <p>Suzana Moura (Língua Portuguesa)</p>
        </div>

        <h2 className="text-2xl font-bold text-pf-dark mt-12 mb-4 uppercase tracking-tight">Diferença entre Rádio e Podcast</h2>
        <div className="flex flex-col gap-6">
          <p>A principal diferença entre rádio e podcast está no modelo de consumo e transmissão. Enquanto as rádios mantêm uma grade de programação linear e, geralmente, são transmitidas ao vivo e ao mesmo tempo para todos os ouvintes, os podcast são produzidos e consumidos sob demanda. Ou seja, os programas podem tratar de assuntos diversos e serem ouvidos onde e quando o usuário quiser. Bastar acessá- los via internet.</p>
          <p>É importante ressaltar que a Rádio de Bitita ainda transita por esses dois formatos, numa tentativa de contemplar o que pensamos para a escola e alinhar with o que entendemos quanto à comunicação via meios tecnológicos. (um “radcast” ou um “podrádio”?)</p>
        </div>

        <h2 className="text-2xl font-bold text-pf-dark mt-12 mb-4 uppercase tracking-tight">Como Nascem as Pautas</h2>
        <p>Nas reuniões semanais, pelo Google Meet, sugerimos assuntos vindos das demandas do cotidiano e que poderiam ser abordados pelos episódios da rádio. Buscamos aqueles que mais conversem with a realidade dos nossos alunos e que sejam urgentes de discussão. Lançamos ideias, dividimos o trabalho e elaboramos um plano inicial de execução do episódio, definindo as pessoas envolvidas e datas de publicação.</p>

        <h2 className="text-2xl font-bold text-pf-dark mt-12 mb-4 uppercase tracking-tight">Organização do Grupo e Tecnologia Necessária</h2>
        <div className="flex flex-col gap-6">
          <p>Continuamos as discussões no nosso grupo da rádio no WhatsApp, “adotando” os temas e nos dividindo por tarefas: pesquisa, escrita do roteiro, contato with possíveis participantes do episódio (alunos, professores ou outras pessoas que possam contribuir with a discussão), revisão do que foi produzido, gravação, pré-edição dos áudios e pós-produção do episódio, with a inserção das vinhetas, trilhas e efeitos sonoros.</p>
          <p>Basicamente, tudo é realizado pelo celular: desde as discussões até as gravações. Para a edição e produção do episódio, utilizamos um computador with softwares de edição de áudio (Audacity, Reaper, Vegas). Todas as terças e quintas, disparamos o áudio e o card with as informações do episódio nos grupos das turmas no WhatsApp, nas redes sociais da escola e, recentemente, no Spotify.</p>
        </div>

        <h2 className="text-2xl font-bold text-pf-dark mt-12 mb-4 uppercase tracking-tight">Obstáculos e Desafios</h2>
        <div className="flex flex-col gap-6">
          <p>O isolamento social é um obstáculo significativo, bem como a pouca tecnologia disponível por parte dos alunos, especialmente a internet banda larga, o que ainda dificulta atingir a todos, pois nem todos estão ativos nos grupos de WhatsApp ou acessam as redes sociais.</p>
          <p>Além disso, dar conta de todo o trabalho de produção de um episódio, sem deixar de lado o trabalho diário with as nossas disciplinas. São aproximadamente 20 horas de trabalhos para a produção de um episódio de 15 minutos. Por isso alterações foram necessárias para manter a qualidade do material produzido, tais como ajustar a periodicidade no lançamento dos episódios e redimensionamento da equipe de trabalho.</p>
        </div>

        <h2 className="text-2xl font-bold text-pf-dark mt-12 mb-4 uppercase tracking-tight">Por Que Vale a Pena</h2>
        <p>Promove o protagonismo estudantil, o vínculo entre professores, escolas e estudantes, possibilita o enriquecimento curricular e é um refresco para os tempos sombrios que vivemos. É divertido demais!</p>

        <div className="mt-16 p-8 bg-pf-dark text-white rounded-sm font-sans not-italic">
          <h3 className="text-xl font-bold mb-6">Como ouvir a Rádio de Bitita?</h3>
          <div className="space-y-4">
            <a href="https://linktr.ee/radiodebitita" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-pf-red transition-colors">
              <ExternalLink size={20} />
              <span>Linktree (Todos os episódios)</span>
            </a>
            <a href="https://www.facebook.com/emefinfante/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-pf-red transition-colors">
              <ExternalLink size={20} />
              <span>Facebook EMEF Infante</span>
            </a>
            <a href="https://www.instagram.com/espacobitita/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-pf-red transition-colors">
              <ExternalLink size={20} />
              <span>Instagram @espacobitita</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-pf-bg min-h-screen">
      <AnimatePresence mode="wait">
        <motion.div
          key={section}
          initial={{ opacity: 0, x: section === 'index' ? -10 : 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: section === 'index' ? 10 : -10 }}
          transition={{ duration: 0.3 }}
        >
          {section === 'index' && renderIndex()}
          {section === 'jardinagem' && renderJardinagem()}
          {section === 'radio' && renderRadio()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
