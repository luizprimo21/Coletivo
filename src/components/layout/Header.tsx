import { NavItem } from '../../types';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';

interface HeaderProps {
  navItems: NavItem[];
  activeId: string;
  onNavigate: (id: string) => void;
}

export default function Header({ navItems, activeId, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="h-20 bg-pf-bg border-b-subtle px-5 md:px-10 flex items-center justify-between sticky top-0 z-50">
      {/* Logo Section */}
      <div 
        className="flex items-center cursor-pointer h-full" 
        onClick={() => onNavigate('inicio')}
      >
        <img 
          src="/input_file_2.png" 
          alt="Coletivo Paulo Freire" 
          className="h-14 w-auto object-contain"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-8 h-full items-center">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`nav-link h-full flex items-center px-2 ${
              activeId === item.id ? 'active' : ''
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-pf-muted p-2"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 left-0 right-0 bg-pf-bg border-b-subtle md:hidden shadow-lg p-6 flex flex-col gap-4"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setIsMenuOpen(false);
              }}
              className={`nav-link text-left py-2 ${
                activeId === item.id ? 'active w-fit' : ''
              }`}
            >
              {item.label}
            </button>
          ))}
        </motion.div>
      )}
    </header>
  );
}
