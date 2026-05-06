import { Instagram, Youtube, Facebook, Mail, Linkedin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string, id?: string | null) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-pf-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 border-r-0 md:border-r border-white/10 pr-0 md:pr-12">
            <div className="font-bold text-lg mb-6 tracking-tight">
              COLETIVO <br />
              <span className="text-pf-yellow">PAULO FREIRE</span>
            </div>
            <p className="text-white/60 text-xs leading-relaxed max-w-[200px]">
              Educação popular e justiça social como ferramentas de transformação da realidade brasileira.
            </p>
          </div>

          {/* Navegação */}
          <div className="col-span-1">
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-pf-yellow mb-6">Navegação</h3>
            <ul className="flex flex-col gap-3 text-xs text-white/60">
              <li><button onClick={() => onNavigate('inicio')} className="hover:text-pf-yellow transition-colors uppercase tracking-wider text-left w-full">Início</button></li>
              <li><button onClick={() => onNavigate('quem-somos')} className="hover:text-pf-yellow transition-colors uppercase tracking-wider text-left w-full">Quem Somos</button></li>
              <li><button onClick={() => onNavigate('eventos')} className="hover:text-pf-yellow transition-colors uppercase tracking-wider text-left w-full">Eventos</button></li>
              <li><button onClick={() => onNavigate('parcerias')} className="hover:text-pf-yellow transition-colors uppercase tracking-wider text-left w-full">Parcerias</button></li>
            </ul>
          </div>

          {/* Acervos */}
          <div className="col-span-1">
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-pf-yellow mb-6">Acervos</h3>
            <ul className="flex flex-col gap-3 text-xs text-white/60">
              <li><button onClick={() => onNavigate('acervo-sme')} className="hover:text-pf-yellow transition-colors uppercase tracking-wider text-left w-full">Acervo SME</button></li>
              <li><button onClick={() => onNavigate('acervo-paulo-freire')} className="hover:text-pf-yellow transition-colors uppercase tracking-wider text-left w-full">Acervo Paulo Freire</button></li>
              <li><button onClick={() => onNavigate('acervo')} className="hover:text-pf-yellow transition-colors uppercase tracking-wider text-left w-full">Acervo Coletivo</button></li>
            </ul>
          </div>

          {/* Contato & Redes */}
          <div className="col-span-1">
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-pf-yellow mb-6">Contato</h3>
            <ul className="flex flex-col gap-3 text-xs text-white/60 mb-8">
              <li className="flex items-center gap-2 text-pf-yellow">
                <Mail size={14} />
                <a href="mailto:coletivopaulofreire1@gmail.com" className="break-all hover:underline decoration-pf-red">
                  coletivopaulofreire1@gmail.com
                </a>
              </li>
            </ul>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/coletivopaulofreire" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 border border-white/10 rounded-full hover:border-pf-yellow hover:text-pf-yellow transition-all"
                title="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://www.facebook.com/coletivopaulofreireface" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 border border-white/10 rounded-full hover:border-pf-yellow hover:text-pf-yellow transition-all"
                title="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://www.youtube.com/channel/UChdOLfeyOXiv4BzyJweFbiA" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 border border-white/10 rounded-full hover:border-pf-yellow hover:text-pf-yellow transition-all"
                title="YouTube"
              >
                <Youtube size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/company/coletivopaulofreire/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 border border-white/10 rounded-full hover:border-pf-yellow hover:text-pf-yellow transition-all"
                title="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-white/40 uppercase tracking-widest font-medium">
          <div>&copy; {new Date().getFullYear()} Coletivo Paulo Freire</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
