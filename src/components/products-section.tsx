import React from 'react';
import { Star, Heart, ShoppingCart } from 'lucide-react';
import JewelryImage from './jewelry-image';

const ProductsSection = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Anel de Noivado Elegante',
      description: 'Diamantes brilhantes em ouro 18k',
      price: 'R$ 12.900',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop&crop=center',
      rating: 5
    },
    {
      id: 2,
      name: 'Colar de Pérolas',
      description: 'Pérolas naturais com detalhes em prata',
      price: 'R$ 8.500',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=400&fit=crop&crop=center',
      rating: 4
    },
    {
      id: 3,
      name: 'Brinco de Safira',
      description: 'Safiras azuis em ouro branco',
      price: 'R$ 6.800',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=400&fit=crop&crop=center',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Coleções em Destaque</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubra nossas joias mais exclusivas, cuidadosamente selecionadas para você
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Product Image */}
              <div className="relative h-80">
                <JewelryImage 
                  src={product.image} 
                  alt={product.name}
                  className="h-full"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Heart className="h-5 w-5 text-gray-600" />
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < product.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-yellow-600">{product.price}</span>
                  <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-full transition-colors duration-300 flex items-center gap-2">
                    <ShoppingCart className="h-4 w-4" />
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300">
            Ver Todas as Coleções
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;