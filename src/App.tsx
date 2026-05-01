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
import PauloFreireArchive from './components/archive/PauloFreireArchive';
import PartnersList from './components/partners/PartnersList';
import { NavItem } from './types';

const NAV_ITEMS: NavItem[] = [
  { id: 'inicio', label: 'Início' },
  { id: 'quem-somos', label: 'Quem Somos' },
  { id: 'eventos', label: 'Eventos' },
  { id: 'acervo-sme', label: 'ACERVO SME' },
  { id: 'acervo-paulo-freire', label: 'ACERVO PAULO FREIRE' },
  { 
    id: 'acervo', 
    label: 'PRODUÇÕES',
    children: [
      { id: 'acervo-rodas', label: 'Rodas de Memórias' },
      { id: 'acervo-entrevistas', label: 'Entrevistas' },
      { id: 'acervo-producoes', label: 'Produções do Coletivo' },
    ]
  },
  { id: 'parcerias', label: 'Parcerias' },
];

export default function App() {
  const [currentPage, setCurrentPage] = useState('inicio');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderContent = () => {
    switch (currentPage) {
      case 'inicio':
        return (
          <>
            <Hero />
            <LatestNews />
            <News onNavigate={setCurrentPage} />
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
      case 'acervo-paulo-freire':
        return <PauloFreireArchive />;
      case 'acervo':
      case 'acervo-producoes':
        return <ArchiveList />;
      case 'parcerias':
        return <PartnersList />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        navItems={NAV_ITEMS} 
        activeId={currentPage} 
        onNavigate={setCurrentPage} 
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

      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}
