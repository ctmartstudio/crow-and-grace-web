import React from 'react';
import { Crown, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => handleNavigation('/')}
              className="flex items-center space-x-2"
            >
              <Crown className="h-8 w-8 text-yellow-600" />
              <span className="text-xl font-bold text-gray-900">Crow & Grace</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavigation('/')}
              className="text-gray-700 hover:text-yellow-600 font-medium transition-colors duration-300"
            >
              Início
            </button>
            <button 
              onClick={() => handleNavigation('/colecoes')}
              className="text-gray-700 hover:text-yellow-600 font-medium transition-colors duration-300"
            >
              Coleções
            </button>
            <button 
              onClick={() => handleNavigation('/aneis')}
              className="text-gray-700 hover:text-yellow-600 font-medium transition-colors duration-300"
            >
              Anéis
            </button>
            <button 
              onClick={() => handleNavigation('/colares')}
              className="text-gray-700 hover:text-yellow-600 font-medium transition-colors duration-300"
            >
              Colares
            </button>
            <button 
              onClick={() => handleNavigation('/brincos')}
              className="text-gray-700 hover:text-yellow-600 font-medium transition-colors duration-300"
            >
              Brincos
            </button>
            <button 
              onClick={() => handleNavigation('/sobre')}
              className="text-gray-700 hover:text-yellow-600 font-medium transition-colors duration-300"
            >
              Sobre
            </button>
            <button 
              onClick={() => handleNavigation('/contato')}
              className="text-gray-700 hover:text-yellow-600 font-medium transition-colors duration-300"
            >
              Contato
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => handleNavigation('/login')}
              className="text-gray-700 hover:text-yellow-600 font-medium transition-colors duration-300"
            >
              Login
            </button>
            <button 
              onClick={() => handleNavigation('/contato')}
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-full font-medium transition-colors duration-300"
            >
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
              <button 
                onClick={() => handleNavigation('/')}
                className="block px-3 py-2 text-gray-700 hover:text-yellow-600 hover:bg-gray-50 rounded-md font-medium transition-colors duration-300"
              >
                Início
              </button>
              <button 
                onClick={() => handleNavigation('/colecoes')}
                className="block px-3 py-2 text-gray-700 hover:text-yellow-600 hover:bg-gray-50 rounded-md font-medium transition-colors duration-300"
              >
                Coleções
              </button>
              <button 
                onClick={() => handleNavigation('/aneis')}
                className="block px-3 py-2 text-gray-700 hover:text-yellow-600 hover:bg-gray-50 rounded-md font-medium transition-colors duration-300"
              >
                Anéis
              </button>
              <button 
                onClick={() => handleNavigation('/colares')}
                className="block px-3 py-2 text-gray-700 hover:text-yellow-600 hover:bg-gray-50 rounded-md font-medium transition-colors duration-300"
              >
                Colares
              </button>
              <button 
                onClick={() => handleNavigation('/brincos')}
                className="block px-3 py-2 text-gray-700 hover:text-yellow-600 hover:bg-gray-50 rounded-md font-medium transition-colors duration-300"
              >
                Brincos
              </button>
              <button 
                onClick={() => handleNavigation('/sobre')}
                className="block px-3 py-2 text-gray-700 hover:text-yellow-600 hover:bg-gray-50 rounded-md font-medium transition-colors duration-300"
              >
                Sobre
              </button>
              <button 
                onClick={() => handleNavigation('/contato')}
                className="block px-3 py-2 text-gray-700 hover:text-yellow-600 hover:bg-gray-50 rounded-md font-medium transition-colors duration-300"
              >
                Contato
              </button>
              <div className="px-3 py-2 space-y-2">
                <button 
                  onClick={() => handleNavigation('/login')}
                  className="w-full text-left text-gray-700 hover:text-yellow-600 font-medium transition-colors duration-300"
                >
                  Login
                </button>
                <button 
                  onClick={() => handleNavigation('/contato')}
                  className="w-full bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-full font-medium transition-colors duration-300"
                >
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