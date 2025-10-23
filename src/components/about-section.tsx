import React from 'react';
import { Crown, Award, Users } from 'lucide-react';
import JewelryImage from './jewelry-image';

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
            <JewelryImage 
              src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop&crop=center"
              alt="Joalheria Crow & Grace"
              className="h-96 rounded-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl flex items-end p-8">
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-2">Excelência em Cada Detalhe</h3>
                <p>Tradição e inovação em joalheria</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;