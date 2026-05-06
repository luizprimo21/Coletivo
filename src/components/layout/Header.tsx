import { NavItem } from '../../types';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import SearchOverlay from './SearchOverlay';

interface HeaderProps {
  navItems: NavItem[];
  activeId: string;
  onNavigate: (page: string, id?: string | null) => void;
}

export default function Header({ navItems, activeId, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <header className="h-20 bg-pf-bg border-b-subtle px-5 md:px-10 flex items-center justify-between sticky top-0 z-50">
      <SearchOverlay 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
        onNavigate={onNavigate}
      />
      
      {/* Logo Section */}
      <div 
        className="flex items-center cursor-pointer h-full" 
        onClick={() => onNavigate('inicio')}
      >
        <img 
          src="https://i.postimg.cc/k5B5b274/horizontal-color.png" 
          alt="Coletivo Paulo Freire" 
          className="h-14 w-auto object-contain"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8 h-full">
        <nav className="flex gap-8 h-full items-center">
          {navItems.map((item) => (
            <div 
              key={item.id} 
              className="relative h-full flex items-center"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <button
                onClick={() => !item.children && onNavigate(item.id)}
                className={`nav-link h-full flex items-center gap-1 px-2 ${
                  activeId === item.id || (item.children?.some(child => child.id === activeId)) ? 'active' : ''
                }`}
              >
                {item.label}
                {item.children && <ChevronDown size={14} className={`transition-transform ${hoveredItem === item.id ? 'rotate-180' : ''}`} />}
              </button>

              {item.children && (
                <AnimatePresence>
                  {hoveredItem === item.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 bg-pf-dark border border-subtle min-w-[240px] py-2 shadow-xl"
                    >
                      {item.children.map((child) => (
                        <button
                          key={child.id}
                          onClick={() => {
                            onNavigate(child.id);
                            setHoveredItem(null);
                          }}
                          className={`w-full text-left px-4 py-2 text-sm hover:bg-pf-feature transition-colors ${
                            activeId === child.id ? 'text-pf-red font-medium' : 'text-white'
                          }`}
                        >
                          {child.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        {/* Search Button */}
        <button 
          onClick={() => setIsSearchOpen(true)}
          className="p-2 text-pf-muted hover:text-pf-red transition-colors"
          title="Pesquisar"
        >
          <Search size={22} />
        </button>
      </div>

      {/* Mobile Menu & Search Button */}
      <div className="flex items-center gap-4 md:hidden">
        <button 
          onClick={() => setIsSearchOpen(true)}
          className="p-2 text-pf-muted"
        >
          <Search size={24} />
        </button>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-pf-muted p-2"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-20 left-0 right-0 bg-pf-bg border-b-subtle md:hidden shadow-lg p-6 flex flex-col gap-2 max-h-[80vh] overflow-y-auto"
          >
            {navItems.map((item) => (
              <div key={item.id} className="flex flex-col">
                <button
                  onClick={() => {
                    if (!item.children) {
                      onNavigate(item.id);
                      setIsMenuOpen(false);
                    }
                  }}
                  className={`nav-link text-left py-2 flex items-center justify-between ${
                    activeId === item.id ? 'active w-fit' : ''
                  }`}
                >
                  {item.label}
                </button>
                
                {item.children && (
                  <div className="flex flex-col ml-4 border-l border-subtle pl-4 mt-1 gap-1">
                    {item.children.map((child) => (
                      <button
                        key={child.id}
                        onClick={() => {
                          onNavigate(child.id);
                          setIsMenuOpen(false);
                        }}
                        className={`text-left py-2 text-sm ${
                          activeId === child.id ? 'text-pf-red' : 'text-white'
                        }`}
                      >
                        {child.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
