import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Colares = () => {
  const colares = [
    {
      id: 1,
      name: 'Colar de Pérolas',
      description: 'Pérolas naturais com detalhes em prata',
      price: 'R$ 8.500',
      category: 'Clássico'
    },
    {
      id: 2,
      name: 'Colar de Diamantes',
      description: 'Diamantes brilhantes em ouro 18k',
      price: 'R$ 25.000',
      category: 'Luxo'
    },
    {
      id: 3,
      name: 'Colar de Safira',
      description: 'Safiras azuis em ouro branco',
      price: 'R$ 12.800',
      category: 'Joia'
    },
    {
      id: 4,
      name: 'Colar de Rubi',
      description: 'Rubi vermelho em ouro rosa',
      price: 'R$ 15.600',
      category: 'Joia'
    },
    {
      id: 5,
      name: 'Colar Esmeralda',
      description: 'Esmeraldas verdes em ouro amarelo',
      price: 'R$ 18.900',
      category: 'Joia'
    },
    {
      id: 6,
      name: 'Colar Personalizado',
      description: 'Criação sob medida para você',
      price: 'A partir de R$ 3.500',
      category: 'Personalizado'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Colares</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Elegância e sofisticação em cada colar da nossa coleção
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {colares.map((colar) => (
              <div key={colar.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="h-64 bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-gray-900">{colar.name}</h3>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                      {colar.category}
                    </span>
                    <span className="text-2xl font-bold text-yellow-600">{colar.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{colar.description}</p>
                  <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-2 rounded-full transition-colors duration-300">
                    Ver Detalhes
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Colares;