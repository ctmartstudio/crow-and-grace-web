import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Sobre = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Sobre Crow & Grace</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nossa história, valores e compromisso com a excelência
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nossa História</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Há mais de 20 anos, a Crow & Grace nasceu com o sonho de criar joias que transcendem o tempo. 
                Fundada por apaixonados por ourivesaria, nossa jornada começou em um pequeno ateliê no coração de São Paulo.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Ao longo dos anos, crescemos mantendo nosso compromisso com a qualidade e o artesanato. 
                Cada peça que sai de nosso ateliê carrega consigo a dedicação de ourives experientes e a busca 
                pela perfeição em cada detalhe.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Hoje, somos referência em joalheria de luxo no Brasil, com clientes em todo o país e uma 
                reputação construída com base na confiança e na satisfação de quem nos escolhe para marcar 
                        momentos especiais.
              </p>
            </div>
            <div className="h-96 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-3xl flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">20+ Anos de Excelência</h3>
                <p>Tradição e inovação em joalheria</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-3xl p-12 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Nossos Valores</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Qualidade Premium</h3>
                <p className="text-gray-600">Materiais selecionados com o máximo rigor e padrões internacionais</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Design Exclusivo</h3>
                <p className="text-gray-600">Criações únicas que refletem a personalidade de cada cliente</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Atendimento Personalizado</h3>
                <p className="text-gray-600">Especialistas dedicados para ajudar na escolha perfeita</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Números que nos orgulham</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold text-yellow-600 mb-2">20+</div>
                <div className="text-gray-600">Anos de Legado</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-600 mb-2">10K+</div>
                <div className="text-gray-600">Clientes Satisfeitos</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-600 mb-2">500+</div>
                <div className="text-gray-600">Peças Exclusivas</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-600 mb-2">15</div>
                <div className="text-gray-600">Prêmios de Qualidade</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Sobre;