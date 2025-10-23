import React from 'react';
import { Crown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <Crown className="h-8 w-8 text-yellow-600" />
              <span className="text-xl font-bold text-gray-900">Crow & Grace</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors duration-300">Início</a>
            <a href="#" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors duration-300">Coleções</a>
            <a href="#" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors duration-300">Anéis</a>
            <a href="#" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors duration-300">Colares</a>
            <a href="#" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors duration-300">Brincos</a>
            <a href="#" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors duration-300">Sobre</a>
            <a href="#" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors duration-300">Contato</a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-yellow-600 font-medium transition-colors duration-300">
              Login
            </button>
            <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-full font-medium transition-colors duration-300">
              Agendar Consulta
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-700 hover:text-yellow-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-yellow-600 hover:bg-gray-50 rounded-md font-medium transition-colors duration-300">Início</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-yellow-600 hover:bg-gray-50 rounded-md font-medium transition-colors duration-300">Coleções</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-yellow-600 hover:bg-gray-50 rounded-md font-medium transition-colors duration-300">Anéis</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-yellow-600 hover:bg-gray-50 rounded-md font-medium transition-colors duration-300">Colares</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-yellow-600 hover:bg-gray-50 rounded-md font-medium transition-colors duration-300">Brincos</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-yellow-600 hover:bg-gray-50 rounded-md font-medium transition-colors duration-300">Sobre</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-yellow-600 hover:bg-gray-50 rounded-md font-medium transition-colors duration-300">Contato</a>
              <div className="px-3 py-2 space-y-2">
                <button className="w-full text-left text-gray-700 hover:text-yellow-600 font-medium transition-colors duration-300">
                  Login
                </button>
                <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-full font-medium transition-colors duration-300">
                  Agendar Consulta
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;