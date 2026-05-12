/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/home/Hero';
import LatestNews from './components/home/LatestNews';
import News from './components/home/News';
import WhoWeAre from './components/about/WhoWeAre';
import EventsList from './components/events/EventsList';
import ArchiveList from './components/archive/ArchiveList';
import SMEArchive from './components/archive/SMEArchive';
import RodasDeMemorias from './components/archive/RodasDeMemorias';
import Entrevistas from './components/archive/Entrevistas';
import DiarioDeClasse from './components/archive/DiarioDeClasse';
import PauloFreireArchive from './components/archive/PauloFreireArchive';
import CentenaryArchive from './components/archive/CentenaryArchive';
import FalaEducador from './components/archive/FalaEducador';
import CadernosDeEducacao from './components/archive/CadernosDeEducacao';
import DiarioCronologia from './components/archive/DiarioCronologia';
import PartnersList from './components/partners/PartnersList';
import { NavItem } from './types';

const NAV_ITEMS: NavItem[] = [
  { id: 'inicio', label: 'Início' },
  { id: 'quem-somos', label: 'Quem Somos' },
  { id: 'eventos', label: 'Eventos' },
  { id: 'acervo-sme', label: 'Acervo SME' },
  { id: 'acervo-paulo-freire', label: 'Acervo Paulo Freire' },
      { 
    id: 'acervo', 
    label: 'Acervo Coletivo',
    children: [
      { id: 'acervo-rodas', label: 'Rodas de Memórias' },
      { id: 'acervo-entrevistas', label: 'Entrevistas' },
      { id: 'acervo-producoes', label: 'Textos e manifestos' },
      { id: 'acervo-diario', label: 'Diário de Classe' },
      { id: 'acervo-centenario', label: 'Cem anos de Paulo Freire' },
      { id: 'acervo-cadernos', label: 'Cadernos de educação' },
      { id: 'acervo-fala-educador', label: 'Fala, educador!' },
    ]
  },
  { id: 'parcerias', label: 'Parcerias' },
];

export default function App() {
  const [currentPage, setCurrentPage] = useState('inicio');
  const [targetId, setTargetId] = useState<string | null>(null);

  const navigate = (page: string, id: string | null = null) => {
    setCurrentPage(page);
    setTargetId(id);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderContent = () => {
    switch (currentPage) {
      case 'inicio':
        return (
          <>
            <Hero onNavigate={navigate} />
            <LatestNews onNavigate={navigate} />
            <News onNavigate={navigate} />
          </>
        );
      case 'quem-somos':
        return <WhoWeAre />;
      case 'eventos':
        return <EventsList />;
      case 'acervo-sme':
        return <SMEArchive />;
      case 'acervo-rodas':
        return <RodasDeMemorias />;
      case 'acervo-entrevistas':
        return <Entrevistas />;
      case 'acervo-diario':
        return <DiarioDeClasse onNavigate={navigate} />;
      case 'acervo-diario-cronologia':
        return <DiarioCronologia onBack={() => navigate('acervo-diario')} />;
      case 'acervo-paulo-freire':
        return <PauloFreireArchive />;
      case 'acervo-centenario':
        return <CentenaryArchive />;
      case 'acervo-fala-educador':
        return <FalaEducador />;
      case 'acervo-cadernos':
        return <CadernosDeEducacao />;
      case 'acervo':
      case 'acervo-producoes':
        return <ArchiveList targetId={targetId} />;
      case 'parcerias':
        return <PartnersList />;
      default:
        return <Hero onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        navItems={NAV_ITEMS} 
        activeId={currentPage} 
        onNavigate={navigate} 
      />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer onNavigate={navigate} />
    </div>
  );
}
