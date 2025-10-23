import React from 'react';
import { Crown, User, ShoppingCart, Heart, Settings, LogOut, Calendar, Star, Package } from 'lucide-react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Dashboard = () => {
  const userData = {
    name: 'Maria Silva',
    email: 'maria.silva@email.com',
    memberSince: 'Janeiro 2023',
    totalOrders: 12,
    wishlistItems: 8,
    loyaltyPoints: 2500
  };

  const recentOrders = [
    {
      id: 'ORD-001',
      date: '15 de março de 2024',
      items: 'Anel de Diamante',
      total: 'R$ 12.900',
      status: 'Entregue'
    },
    {
      id: 'ORD-002',
      date: '28 de fevereiro de 2024',
      items: 'Colar de Pérolas',
      total: 'R$ 8.500',
      status: 'Entregue'
    },
    {
      id: 'ORD-003',
      date: '10 de fevereiro de 2024',
      items: 'Brincos de Safira',
      total: 'R$ 7.600',
      status: 'Em trânsito'
    }
  ];

  const wishlistItems = [
    {
      id: 1,
      name: 'Anel de Rubi',
      price: 'R$ 9.200',
      image: '/placeholder.svg'
    },
    {
      id: 2,
      name: 'Colar de Esmeralda',
      price: 'R$ 18.900',
      image: '/placeholder.svg'
    },
    {
      id: 3,
      name: 'Pulseira de Diamantes',
      price: 'R$ 15.800',
      image: '/placeholder.svg'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Dashboard</h1>
            <p className="text-gray-600">Bem-vindo de volta, {userData.name}!</p>
          </div>

          {/* User Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-yellow-100 p-3 rounded-full">
                  <ShoppingCart className="h-6 w-6 text-yellow-600" />
                </div>
                <span className="text-sm text-green-600 font-medium">+12%</span>
              </div>
              <div className="text-2xl font-bold text-gray-900">{userData.totalOrders}</div>
              <div className="text-gray-600">Pedidos Totais</div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-yellow-100 p-3 rounded-full">
                  <Heart className="h-6 w-6 text-yellow-600" />
                </div>
                <span className="text-sm text-green-600 font-medium">+3</span>
              </div>
              <div className="text-2xl font-bold text-gray-900">{userData.wishlistItems}</div>
              <div className="text-gray-600">Favoritos</div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-yellow-100 p-3 rounded-full">
                  <Star className="h-6 w-6 text-yellow-600" />
                </div>
                <span className="text-sm text-green-600 font-medium">+500</span>
              </div>
              <div className="text-2xl font-bold text-gray-900">{userData.loyaltyPoints}</div>
              <div className="text-gray-600">Pontos Fidelidade</div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-yellow-100 p-3 rounded-full">
                  <Calendar className="h-6 w-6 text-yellow-600" />
                </div>
                <span className="text-sm text-gray-600 font-medium">{userData.memberSince}</span>
              </div>
              <div className="text-2xl font-bold text-gray-900">Cliente</div>
              <div className="text-gray-600">Desde</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Orders */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">Pedidos Recentes</h2>
                  <button className="text-yellow-600 hover:text-yellow-700 font-medium">
                    Ver todos
                  </button>
                </div>

                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                      <div className="flex items-center space-x-4">
                        <div className="bg-yellow-100 p-2 rounded-full">
                          <Package className="h-5 w-5 text-yellow-600" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{order.id}</div>
                          <div className="text-sm text-gray-600">{order.date}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-gray-900">{order.items}</div>
                        <div className="text-sm text-gray-600">{order.total}</div>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                        order.status === 'Entregue' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {order.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* User Profile */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-yellow-100 p-3 rounded-full">
                    <User className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{userData.name}</h3>
                    <p className="text-sm text-gray-600">{userData.email}</p>
                  </div>
                </div>
                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center gap-2">
                  <Settings className="h-4 w-4" />
                  Editar Perfil
                </button>
              </div>

              {/* Wishlist */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">Lista de Desejos</h3>
                  <button className="text-yellow-600 hover:text-yellow-700 text-sm font-medium">
                    Ver todos
                  </button>
                </div>
                <div className="space-y-3">
                  {wishlistItems.slice(0, 3).map((item) => (
                    <div key={item.id} className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors duration-300">
                      <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                        <Package className="h-6 w-6 text-gray-400" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900 text-sm">{item.name}</div>
                        <div className="text-yellow-600 font-semibold text-sm">{item.price}</div>
                      </div>
                      <button className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                        <Heart className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Ações Rápidas</h3>
                <div className="space-y-3">
                  <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-2 rounded-lg font-medium transition-colors duration-300">
                    Agendar Consulta
                  </button>
                  <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center gap-2">
                    <LogOut className="h-4 w-4" />
                    Sair
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;