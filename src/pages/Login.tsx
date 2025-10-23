import React from 'react';
import { Crown } from 'lucide-react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Login = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <Crown className="h-12 w-12 text-yellow-600 mr-3" />
                <h1 className="text-3xl font-bold text-gray-900">Crow & Grace</h1>
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Acesse sua conta</h2>
              <p className="text-gray-600">Entre com seu email e senha para continuar</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Senha</label>
                  <input 
                    type="password" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="••••••••"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      className="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded"
                    />
                    <label className="ml-2 block text-sm text-gray-700">
                      Lembrar de mim
                    </label>
                  </div>
                  <a href="#" className="text-sm text-yellow-600 hover:text-yellow-700">
                    Esqueceu a senha?
                  </a>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  Entrar
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Não tem uma conta?{' '}
                  <a href="#" className="text-yellow-600 hover:text-yellow-700 font-medium">
                    Cadastre-se
                  </a>
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600">
                Ou entre com
              </p>
              <div className="mt-4 flex justify-center space-x-4">
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors duration-300">
                  Google
                </button>
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors duration-300">
                  Facebook
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

export default Login;