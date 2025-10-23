import React from 'react';
import { Crown, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Crown className="h-8 w-8 text-yellow-400 mr-3" />
              <h3 className="text-2xl font-bold">Crow & Grace</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Joias sofisticadas que contam histórias únicas. Cada peça é uma obra de arte feita com amor e dedicação.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4 mb-6">
              <a href="#" className="bg-gray-800 hover:bg-yellow-600 p-2 rounded-full transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-yellow-600 p-2 rounded-full transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-yellow-600 p-2 rounded-full transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>(11) 9999-8888</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>contato@crowandgrace.com.br</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Rua das Joias, 123 - São Paulo, SP</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-yellow-400 transition-colors duration-300">Início</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors duration-300">Coleções</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors duration-300">Anéis</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors duration-300">Colares</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors duration-300">Brincos</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors duration-300">Pulseiras</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors duration-300">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors duration-300">Contato</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-300 mb-4">
              Receba novidades e ofertas exclusivas diretamente no seu email.
            </p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Seu email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button 
                type="submit"
                className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-2 rounded-lg font-semibold transition-colors duration-300"
              >
                Inscrever-se
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Crow & Grace. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;