import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Brincos = () => {
  const brincos = [
    {
      id: 1,
      name: 'Brincos de Diamante',
      description: 'Diamantes brilhantes em ouro 18k',
      price: 'R$ 9.800',
      category: 'Luxo'
    },
    {
      id: 2,
      name: 'Brincos de Pérolas',
      description: 'Pérolas naturais com detalhes finos',
      price: 'R$ 5.200',
      category: 'Clássico'
    },
    {
      id: 3,
      name: 'Brincos de Safira',
      description: 'Safiras azuis em ouro branco',
      price: 'R$ 7.600',
      category: 'Joia'
    },
    {
      id: 4,
      name: 'Brincos de Rubi',
      description: 'Rubi vermelho em ouro rosa',
      price: 'R$ 8.900',
      category: 'Joia'
    },
    {
      id: 5,
      name: 'Brincos de Esmeralda',
      description: 'Esmeraldas verdes em ouro amarelo',
      price: 'R$ 10.200',
      category: 'Joia'
    },
    {
      id: 6,
      name: 'Brincos Personalizados',
      description: 'Criação sob medida para você',
      price: 'A partir de R$ 2.800',
      category: 'Personalizado'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Brincos</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Brincos que realçam sua beleza e estilo pessoal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brincos.map((brinco) => (
              <div key={brinco.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="h-64 bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-gray-900">{brinco.name}</h3>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                      {brinco.category}
                    </span>
                    <span className="text-2xl font-bold text-yellow-600">{brinco.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{brinco.description}</p>
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

export default Brincos;