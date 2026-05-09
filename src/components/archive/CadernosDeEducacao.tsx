import { motion } from 'motion/react';
import { Download, PlayCircle, ExternalLink, BookOpen } from 'lucide-react';

export default function CadernosDeEducacao() {
  return (
    <div className="bg-pf-bg min-h-screen">
      <section className="py-24 border-b-subtle">
        <div className="max-w-7xl mx-auto px-5 md:px-10 text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-pf-red/30"></div>
            <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-pf-red">Acervo Coletivo</span>
            <div className="h-px w-12 bg-pf-red/30"></div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-pf-dark">Cadernos de educação</h1>
          <p className="text-pf-muted text-lg max-w-2xl mx-auto font-medium">
            Publicação do Coletivo Paulo Freire com reflexões, práticas e aprofundamentos teóricos sobre a educação pública brasileira.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Book Image and Download */}
            <div className="lg:col-span-5">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-pf-red -m-4 -z-10 group-hover:-m-2 transition-all duration-500 rounded-sm opacity-20"></div>
                <img 
                  src="https://i.postimg.cc/V6GQcwqF/image-2026-05-08-110648386.png" 
                  alt="Capa do Caderno de Educação nº 1" 
                  className="w-full h-auto shadow-2xl rounded-sm border-subtle relative z-10"
                  referrerPolicy="no-referrer"
                />
                
                <div className="mt-8 flex flex-col gap-4">
                  <a 
                    href="https://drive.google.com/file/d/1jCS6StiX4A_Fi_534NBEeuH6XcNO_NbD/view" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-pf-red text-white py-4 px-8 font-bold uppercase tracking-widest text-xs hover:bg-pf-dark transition-all rounded-sm shadow-lg group/btn"
                  >
                    <Download size={18} className="group-hover/btn:translate-y-0.5 transition-transform" />
                    Baixar PDF Completo
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Introduction Tex */}
            <div className="lg:col-span-7">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <span className="text-pf-red font-bold uppercase tracking-widest text-xs">Volume 1</span>
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-pf-dark">Apresentação</h2>
                </div>

                <div className="prose prose-lg prose-pf max-w-none text-pf-dark/80 leading-relaxed font-serif italic text-xl">
                  <p>
                    "Os textos que compõem este número inaugural tratam de temas cruciais para a vida escolar e as políticas educacionais. Eles percorrem desde reflexões sobre a práxis freireana até uma análise crítica dos impactos do neoliberalismo sobre a educação, abordando temas essenciais da questão educativa."
                  </p>
                </div>

                <div className="flex flex-col gap-6 text-pf-dark/90 leading-relaxed text-lg">
                  <p>
                    Assim, cada artigo oferece contribuições valiosas para educadoras e educadores comprometidos com a construção de uma sociedade mais justa e inclusiva. Pontualmente, os artigos fomentam discussões sobre análise de contexto, concepção freireana de educação, currículo, gestão escolar e financiamento da educação, iluminando as complexas realidades enfrentadas pelo povo brasileiro.
                  </p>
                  <p>
                    Por meio de suas análises, as autoras e os autores nos convidam a refletir sobre nosso passado e nosso presente, e a planejar um futuro no qual a educação pública seja, definitivamente, uma força propulsora para a verdadeira democracia.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Launch Video Section */}
          <div className="mt-32 pt-20 border-t border-subtle">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-pf-dark mb-4">Lançamento do Caderno de Educação</h2>
              <p className="text-pf-muted max-w-2xl mx-auto">
                Assista à live de lançamento realizada na Câmara Municipal de São Paulo.
              </p>
            </div>

            <div className="max-w-4xl mx-auto relative group">
              <a 
                href="https://www.youtube.com/live/qhfV5OYYNqE" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block aspect-video overflow-hidden rounded-sm border-subtle shadow-2xl relative"
              >
                <img 
                  src="https://img.youtube.com/vi/qhfV5OYYNqE/maxresdefault.jpg" 
                  alt="Thumbnail do vídeo de lançamento" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-pf-dark/20 group-hover:bg-pf-dark/10 transition-colors">
                  <div className="w-20 h-20 bg-pf-red text-white rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                    <PlayCircle size={40} fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-6 right-6 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-widest text-pf-dark shadow-lg">
                  <ExternalLink size={14} />
                  Assistir no YouTube
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
