import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'الرئيسية', href: '#' },
    { id: 'about', label: 'من نحن', href: '#' },
    { id: 'services', label: 'خدماتنا', href: '#' },
    { id: 'portfolio', label: 'أعمالنا', href: '#' },
    { id: 'testimonials', label: 'آراء العملاء', href: '#' },
    { id: 'contact', label: 'تواصل معنا', href: '#' },
  ];

  return (
    <header className="fixed top-0 w-full glass-effect z-50 border-b border-orange-500/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => onNavigate('home')}
          >
            <div className="gradient-orange p-2 rounded-lg ml-3 group-hover:scale-110 transition-transform duration-300">
              <div className="w-6 h-6 bg-white rounded-sm"></div>
            </div>
            <span className="arabic-font text-xl text-white group-hover:text-orange-500 transition-colors duration-300">ديوان المحتوى</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 space-x-reverse">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`arabic-font transition-all duration-300 hover:scale-105 ${
                  currentPage === item.id
                    ? 'text-orange-500 border-b-2 border-orange-500'
                    : 'text-white hover:text-orange-500'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <Button 
            onClick={() => onNavigate('contact')}
            className="hidden md:inline-flex gradient-orange hover:scale-105 text-white arabic-font shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
          >
            ابدأ مشروعك
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white hover:text-orange-500 transition-all duration-300 hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 glass-effect border-b border-orange-500/20 animate-slide-up">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-right arabic-font transition-all duration-300 py-2 hover:scale-105 ${
                    currentPage === item.id
                      ? 'text-orange-500 border-r-2 border-orange-500 pr-2'
                      : 'text-white hover:text-orange-500'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button 
                onClick={() => {
                  onNavigate('contact');
                  setIsMenuOpen(false);
                }}
                className="w-full gradient-orange text-white arabic-font mt-4 hover:scale-105 transition-transform duration-300"
              >
                ابدأ مشروعك
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}