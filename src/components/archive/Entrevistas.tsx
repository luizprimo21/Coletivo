import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Youtube, ExternalLink, User, Play, Pause, Volume2, VolumeX, Mic } from 'lucide-react';

interface InterviewItem {
  id: string;
  name: string;
  role: string;
  link: string;
  thumbnail?: string;
  audio?: string;
  description: string;
  type: 'video' | 'audio';
  date?: string;
}

const HOMENAGEM_ITEMS: InterviewItem[] = [
  {
    id: 'homenagem-bastidores',
    name: 'Bastidores',
    role: 'Homenagem 30 Anos',
    link: 'https://www.youtube.com/watch?v=2qsv7ek2O0c',
    thumbnail: 'https://i3.ytimg.com/vi/2qsv7ek2O0c/hqdefault.jpg',
    description: 'Registros dos bastidores da homenagem aos 30 anos do governo Luiza Erundina e Paulo Freire.',
    type: 'video',
  },
  {
    id: 'homenagem-erundina-audio',
    name: 'Luíza Erundina',
    role: 'Depoimento em Áudio',
    audio: 'https://servidor36.brlogic.com/files/6187/417e/2363/63b1/2bfd/e92e/f6b28e12ba47e323dda5.mp3',
    link: '#',
    description: 'Relatos históricos sobre a gestão e os desafios da educação pública em São Paulo.',
    type: 'audio',
  },
  {
    id: 'homenagem-suplicy',
    name: 'Eduardo Suplicy',
    role: 'Homenagem 30 Anos',
    link: 'https://www.youtube.com/watch?v=yQQ3C5RiW8E',
    thumbnail: 'https://i3.ytimg.com/vi/yQQ3C5RiW8E/hqdefault.jpg',
    description: 'Depoimento sobre o legado da gestão Erundina/Freire para a educação municipal.',
    type: 'video',
  },
  {
    id: 'homenagem-chaui',
    name: 'Marilena Chauí',
    role: 'Homenagem 30 Anos',
    link: 'https://www.youtube.com/watch?v=CXR7bn8eHn8',
    thumbnail: 'https://img.youtube.com/vi/CXR7bn8eHn8/sddefault.jpg',
    description: 'Reflexões filosóficas e políticas sobre a educação democrática e popular.',
    type: 'video',
  },
  {
    id: 'homenagem-chico',
    name: 'Chico Alencar',
    role: 'Homenagem 30 Anos',
    link: 'https://www.youtube.com/watch?v=xZR5JMAyShE',
    thumbnail: 'https://img.youtube.com/vi/xZR5JMAyShE/sddefault.jpg',
    description: 'A importância histórica da reorientação curricular freireana em São Paulo.',
    type: 'video',
  },
  {
    id: 'homenagem-daniel',
    name: 'Daniel Cara',
    role: 'Homenagem 30 Anos',
    link: 'https://www.youtube.com/watch?v=D5-f6fo8t9c',
    thumbnail: 'https://i3.ytimg.com/vi/D5-f6fo8t9c/hqdefault.jpg',
    description: 'A atualidade do pensamento de Paulo Freire nas políticas educacionais brasileiras.',
    type: 'video',
  },
  {
    id: 'homenagem-selma',
    name: 'Selma Rocha',
    role: 'Homenagem 30 Anos',
    link: 'https://www.youtube.com/watch?v=5-AQQZ7VjR0',
    thumbnail: 'https://i3.ytimg.com/vi/5-AQQZ7VjR0/hqdefault.jpg',
    description: 'O processo de construção do Estatuto do Magistério e a valorização docente.',
    type: 'video',
  },
  {
    id: 'homenagem-cortella',
    name: 'Mario Sérgio Cortella',
    role: 'Homenagem 30 Anos',
    link: 'https://www.youtube.com/watch?v=XegeD8vR66s',
    thumbnail: 'https://i3.ytimg.com/vi/XegeD8vR66s/hqdefault.jpg',
    description: 'Memórias da equipe que transformou a educação paulistana ao lado de Paulo Freire.',
    type: 'video',
  },
  {
    id: 'homenagem-romao',
    name: 'José Eustaquio Romão',
    role: 'Homenagem 30 Anos',
    link: 'https://www.youtube.com/watch?v=MWvHeqQobuc',
    thumbnail: 'https://i3.ytimg.com/vi/MWvHeqQobuc/hqdefault.jpg',
    description: 'A sistematização da pedagogia freireana na rede municipal de ensino.',
    type: 'video',
  }
];

const ENTREVISTAS_ITEMS: InterviewItem[] = [
  {
    id: 'entrevista-zoraide',
    name: 'Zoraide Faustinone',
    role: 'Rádio Madalena',
    date: '7 de junho de 2020',
    audio: 'https://servidor36.brlogic.com/files/6187/09aa/5e61/f276/153e/8430/f38d81476af873633988.mp3',
    link: '#',
    description: 'Zoraide Inês Faustinoni da Silva foi diretora da DOT-SME. Ela detalha o trabalho com grupos de formação na gestão de Luiza Erundina e Paulo Freire.',
    type: 'audio',
  },
  {
    id: 'entrevista-meyri',
    name: 'Meyri Venci Chieffi',
    role: 'Rádio Madalena',
    date: '18 de maio de 2020',
    audio: 'https://servidor36.brlogic.com/files/6187/c663/595b/8e21/376a/c8dc/1980629d018e70ed2bc5.mp3',
    link: '#',
    description: 'Meyri Venci Chieffi foi diretora da DOT-SME. Ela relata o Movimento de Reorientação Curricular na gestão Luiza Erundina.',
    type: 'audio',
  },
  {
    id: 'entrevista-regina',
    name: 'Regina Inês Estima',
    role: 'Rádio Madalena',
    date: '24 de março de 2020',
    audio: 'https://servidor36.brlogic.com/files/6187/c089/21af/2591/dffe/8212/3b1c6c8da0491e8c5a25.mp3',
    link: '#',
    description: 'Regina Inês foi diretora da EJA na DOT-SME. Explica a política de Educação de Jovens e Adultos na gestão Erundina/Freire.',
    type: 'audio',
  },
  {
    id: 'entrevista-pedro',
    name: 'Pedro Pontual',
    role: 'Educador Popular',
    audio: 'https://servidor36.brlogic.com/files/6187/10/a80eb6b38f55db446f6e4aa94f4fa9be94d33f.mp3',
    link: '#',
    description: 'Pedro Pontual trabalhou com Paulo Freire na SME e discute sua atuação junto aos movimentos sociais e ONGs.',
    type: 'audio',
  },
  {
    id: 'entrevista-selma-audio',
    name: 'Selma Rocha',
    role: 'Assessora Parlamentar (SME)',
    audio: 'https://servidor36.brlogic.com/files/6187/4d/e4853db8167245a17d3b35b44137d5c47fa7e9.mp3',
    link: '#',
    description: 'Discussão sobre a elaboração do Projeto de Lei do Estatuto do Magistério na Câmara Municipal.',
    type: 'audio',
  },
  {
    id: 'entrevista-cortella-audio',
    name: 'Mario Sergio Cortella',
    role: 'Ex-Secretário da SME',
    date: '1 de julho de 2020',
    audio: 'https://servidor36.brlogic.com/files/6187/471a/6d40/b615/e9e2/7885/06a3de4394c9c7f1699a.mp3',
    link: '#',
    description: 'O processo de estruturação da equipe da SME em 1989 e as mudanças na rede municipal.',
    type: 'audio',
  },
  {
    id: 'entrevista-sonia',
    name: 'Sonia Krupa',
    role: 'Chefe de Gabinete (SME)',
    audio: 'https://servidor36.brlogic.com/files/6187/36/b982516cc3f09e5b68af9d7088b55f6d7d3eb6.mp3',
    link: '#',
    description: 'Memórias sobre a gestão cotidiana da Secretaria Municipal de Educação sob Freire e Cortella.',
    type: 'audio',
  },
  {
    id: 'entrevista-eja',
    name: 'EJA na gestão Paulo Freire',
    role: 'Rádio Madalena',
    audio: 'https://servidor36.brlogic.com/files/6187/26/64efd6dc9235372741c8e5b4239dfb42f97483.mp3',
    link: '#',
    description: 'Depoimentos diversos sobre a POLÍTICA DE EDUCAÇÃO DE JOVENS E ADULTOS, eixo prioritário do governo.',
    type: 'audio',
  }
];

function AudioPlayer({ name, src }: { name: string, src: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.75);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [src]);

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current && duration) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const pct = x / rect.width;
      audioRef.current.currentTime = pct * duration;
    }
  };

  const handleVolumeClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const newVol = Math.max(0, Math.min(1, x / rect.width));
      setVolume(newVol);
      audioRef.current.volume = newVol;
    }
  };

  return (
    <div className="bg-pf-dark p-4 rounded-sm text-white space-y-3 w-full border border-white/10 shadow-lg">
      <audio ref={audioRef} src={src} />
      
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-hidden">
          <Mic size={14} className="text-pf-red shrink-0" />
          <span className="text-xs font-bold uppercase tracking-widest truncate">{name}</span>
        </div>
        
        <div className="flex items-center gap-2 w-24">
          <button 
            onClick={() => {
              const newVol = volume > 0 ? 0 : 0.75;
              setVolume(newVol);
              if (audioRef.current) audioRef.current.volume = newVol;
            }}
            className="hover:text-pf-red transition-colors"
          >
            {volume === 0 ? <VolumeX size={14} /> : <Volume2 size={14} />}
          </button>
          <div 
            onClick={handleVolumeClick}
            className="h-1 flex-1 bg-white/20 rounded-full cursor-pointer relative"
          >
            <div 
              style={{ width: `${volume * 100}%` }} 
              className="absolute inset-0 bg-pf-red rounded-full"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button 
          onClick={togglePlay}
          className="w-10 h-10 bg-pf-red rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-transform"
        >
          {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" className="ml-0.5" />}
        </button>
        
        <div className="flex-1 space-y-1">
          <div 
            onClick={handleProgressClick}
            className="h-2 bg-white/10 rounded-sm cursor-pointer relative overflow-hidden group"
          >
            <div 
              style={{ width: `${(currentTime / (duration || 1)) * 100}%` }} 
              className={`absolute inset-0 bg-pf-red/60 transition-[width] duration-100 ${isPlaying ? 'bg-gradient-to-r from-pf-red/60 to-pf-red' : ''}`}
            />
            {isPlaying && (
              <div className="absolute inset-0 opacity-20 bg-[linear-gradient(-45deg,rgba(0,0,0,0.05)_25%,transparent_25%,transparent_50%,rgba(0,0,0,0.05)_50%,rgba(0,0,0,0.05)_75%,transparent_75%,transparent)] bg-[length:24px_24px] animate-[slide_1s_linear_infinite]" />
            )}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[9px] font-black tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>
          </div>
          <div className="flex justify-between text-[8px] font-bold text-white/40 uppercase tracking-widest">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Grid({ items }: { items: InterviewItem[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-subtle overflow-hidden">
      {items.map((interview, idx) => (
        <motion.div
          key={interview.id}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.05 }}
          className="p-8 md:p-10 flex flex-col gap-6 transition-colors hover:bg-pf-feature border-r border-b border-subtle"
        >
          {interview.type === 'video' ? (
            <a 
              href={interview.link} 
              target="_blank" 
              rel="no-referrer"
              className="aspect-video bg-pf-dark overflow-hidden rounded-[2px] relative group border-subtle block cursor-pointer"
            >
              <img 
                src={interview.thumbnail} 
                alt={interview.name} 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-12 h-12 bg-pf-red rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                  <Youtube size={20} />
                </div>
              </div>
            </a>
          ) : (
            <div className="aspect-video flex items-center justify-center bg-pf-feature border border-subtle rounded-[2px] p-4">
              <AudioPlayer name={interview.name} src={interview.audio || ''} />
            </div>
          )}
          
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                 {interview.type === 'video' ? (
                   <span className="text-[9px] font-bold bg-pf-red text-white px-2 py-0.5 rounded-full uppercase tracking-tighter">Vídeo</span>
                 ) : (
                   <span className="text-[9px] font-bold bg-pf-dark text-white px-2 py-0.5 rounded-full uppercase tracking-tighter">Áudio</span>
                 )}
                 <span className="text-[10px] font-bold text-pf-red uppercase tracking-widest">{interview.role}</span>
                 {interview.date && (
                   <span className="text-[10px] font-medium text-pf-muted bg-pf-bg px-2 py-0.5 rounded-full">{interview.date}</span>
                 )}
              </div>
              <h3 className="text-xl font-bold leading-tight">{interview.name}</h3>
            </div>
            
            <p className="text-pf-muted text-sm leading-relaxed">
              {interview.description}
            </p>
          </div>

          {interview.type === 'video' && (
            <a 
              href={interview.link} 
              target="_blank" 
              rel="no-referrer"
              className="mt-auto flex items-center gap-2 text-pf-red font-bold text-[12px] uppercase tracking-wider no-underline hover:opacity-80 transition-opacity"
            >
              Assistir agora
              <ExternalLink size={14} />
            </a>
          )}
        </motion.div>
      ))}
    </div>
  );
}

export default function Entrevistas() {
  return (
    <div className="bg-pf-bg min-h-screen">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-pf-dark">Entrevistas e Memória</h1>
            <p className="text-pf-muted uppercase tracking-[0.2em] text-xs font-bold max-w-2xl leading-loose">
              Vozes que fundamentaram a gestão Paulo Freire e Luiza Erundina na prefeitura de São Paulo.
            </p>
          </motion.div>

          <div className="space-y-32">
            <div>
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-pf-dark tracking-tight">Homenagem 30 anos</h2>
              </div>
              <Grid items={HOMENAGEM_ITEMS} />
            </div>

            <div>
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-pf-dark tracking-tight">Acervo de Entrevistas</h2>
              </div>
              <Grid items={ENTREVISTAS_ITEMS} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
