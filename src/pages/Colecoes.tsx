import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Colecoes = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nossas Coleções</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore nossa seleção exclusiva de joias cuidadosamente criadas para cada momento especial
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-gray-900">Anéis</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">Anéis de noivado, casamento e joias de uso diário</p>
                <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-full transition-colors duration-300">
                  Ver Coleção
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-gray-900">Colares</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">Colares elegantes e versáteis para qualquer ocasião</p>
                <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-full transition-colors duration-300">
                  Ver Coleção
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-gray-900">Brincos</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">Brincos que realçam sua beleza e estilo</p>
                <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-full transition-colors duration-300">
                  Ver Coleção
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-gray-900">Pulseiras</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">Pulseiras delicadas e elegantes para o pulso</p>
                <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-full transition-colors duration-300">
                  Ver Coleção
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-gray-900">Acessórios</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">Acessórios que complementam seu look perfeito</p>
                <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-full transition-colors duration-300">
                  Ver Coleção
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-gray-900">Personalizados</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">Joias feitas sob medida para você</p>
                <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-full transition-colors duration-300">
                  Ver Coleção
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Colecoes;