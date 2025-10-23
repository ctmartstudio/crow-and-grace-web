import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Entre em Contato</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estamos aqui para ajudar você a encontrar a joia perfeita
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Informações de Contato</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Endereço</h4>
                  <p className="text-gray-600">Rua das Joias, 123<br />Centro, São Paulo - SP<br />CEP: 01010-100</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-yellow-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Telefone</h4>
                  <p className="text-gray-600">(11) 9999-8888<br />Segunda a Sábado, 10h-20h</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-yellow-100 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600">contato@crowandgrace.com.br<br />atendimento@crowandgrace.com.br</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-yellow-100 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Horário de Funcionamento</h4>
                  <p className="text-gray-600">Segunda a Sexta: 10h - 20h<br />Sábado: 10h - 18h<br />Domingo: Fechado</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-yellow-50 rounded-2xl">
              <h4 className="font-semibold text-gray-900 mb-2">Agende sua Consulta</h4>
              <p className="text-gray-600 mb-4">Nossos especialistas estão prontos para ajudar você a encontrar a joia dos seus sonhos.</p>
              <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300">
                Agendar Agora
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Envie uma Mensagem</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="(11) 99999-8888"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Assunto</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent">
                  <option>Informações sobre produtos</option>
                  <option>Agendar consulta</option>
                  <option>Orçamento personalizado</option>
                  <option>Outros</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Como podemos ajudar você?"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;