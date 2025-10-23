import React from 'react';
import { Crown, Award, Users } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Sobre Crow & Grace</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Há mais de 20 anos, a Crow & Grace cria joias que transcendem o tempo. Cada peça é uma celebração da elegância, 
              da qualidade e da arte da ourivesaria tradicional.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Nossa missão é oferecer joias não apenas como adornos, mas como heranças que contam histórias e guardam memórias 
              preciosas para as gerações futuras.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">20+</div>
                <div className="text-gray-600">Anos de Legado</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">10K+</div>
                <div className="text-gray-600">Clientes Satisfeitos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">500+</div>
                <div className="text-gray-600">Peças Exclusivas</div>
              </div>
            </div>

            {/* Values */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-yellow-100 p-2 rounded-full">
                  <Award className="h-5 w-5 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Qualidade Premium</h3>
                  <p className="text-gray-600">Materiais selecionados com o máximo rigor e padrões internacionais</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-yellow-100 p-2 rounded-full">
                  <Crown className="h-5 w-5 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Design Exclusivo</h3>
                  <p className="text-gray-600">Criações únicas que refletem a personalidade de cada cliente</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-yellow-100 p-2 rounded-full">
                  <Users className="h-5 w-5 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Atendimento Personalizado</h3>
                  <p className="text-gray-600">Especialistas dedicados para ajudar na escolha perfeita</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-3xl h-96 flex items-center justify-center">
              <div className="text-center">
                <Crown className="h-24 w-24 text-yellow-800 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-yellow-900">Excelência em Cada Detalhe</h3>
                <p className="text-yellow-800 mt-2">Tradição e inovação em joalheria</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;