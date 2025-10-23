import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Aneis = () => {
  const aneis = [
    {
      id: 1,
      name: 'Anel de Noivado Diamante',
      description: 'Diamante brilhante em ouro 18k',
      price: 'R$ 12.900',
      category: 'Noivado'
    },
    {
      id: 2,
      name: 'Anel de Casamento',
      description: 'Ouro branco com detalhes finos',
      price: 'R$ 8.500',
      category: 'Casamento'
    },
    {
      id: 3,
      name: 'Anel de Formatura',
      description: 'Personalizado com pedra do mês',
      price: 'R$ 3.200',
      category: 'Formatura'
    },
    {
      id: 4,
      name: 'Anel de Solitário',
      description: 'Diamante único em ouro amarelo',
      price: 'R$ 15.800',
      category: 'Joia'
    },
    {
      id: 5,
      name: 'Anel de Safira',
      description: 'Safira azul em ouro branco',
      price: 'R$ 6.800',
      category: 'Joia'
    },
    {
      id: 6,
      name: 'Anel de Rubi',
      description: 'Rubi vermelho em ouro rosa',
      price: 'R$ 9.200',
      category: 'Joia'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Anéis</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Descubra nossa coleção exclusiva de anéis para todos os momentos especiais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aneis.map((anel) => (
              <div key={anel.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="h-64 bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-gray-900">{anel.name}</h3>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                      {anel.category}
                    </span>
                    <span className="text-2xl font-bold text-yellow-600">{anel.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{anel.description}</p>
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

export default Aneis;