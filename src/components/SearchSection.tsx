'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const popularServices = [
  { id: 1, name: 'Banho e Tosa', icon: '🛁', color: 'bg-blue-100 text-blue-800' },
  { id: 2, name: 'Tosa Higiênica', icon: '✂️', color: 'bg-green-100 text-green-800' },
  { id: 3, name: 'Corte de Unhas', icon: '💅', color: 'bg-purple-100 text-purple-800' },
  { id: 4, name: 'Veterinário', icon: '🩺', color: 'bg-red-100 text-red-800' },
  { id: 5, name: 'Produtos Pet', icon: '🛍️', color: 'bg-orange-100 text-orange-800' },
  { id: 6, name: 'Ração Premium', icon: '🥘', color: 'bg-yellow-100 text-yellow-800' },
];

const quickCategories = [
  { 
    id: 1, 
    name: 'Serviços', 
    description: 'Banho, tosa, veterinário',
    icon: '✂️',
    gradient: 'from-blue-400 to-blue-600',
    link: '/petshops?category=services'
  },
  { 
    id: 2, 
    name: 'Produtos', 
    description: 'Ração, brinquedos, acessórios',
    icon: '🛍️',
    gradient: 'from-green-400 to-green-600',
    link: '/petshops?category=products'
  },
  { 
    id: 3, 
    name: 'Emergência', 
    description: 'Veterinário 24h',
    icon: '🚨',
    gradient: 'from-red-400 to-red-600',
    link: '/petshops?category=emergency'
  },
  { 
    id: 4, 
    name: 'Delivery', 
    description: 'Entrega em casa',
    icon: '🚚',
    gradient: 'from-purple-400 to-purple-600',
    link: '/petshops?delivery=true'
  }
];

export default function SearchSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchQuery) params.set('search', searchQuery);
    if (location) params.set('location', location);
    router.push(`/petshops?${params.toString()}`);
  };

  const handleServiceClick = (serviceName: string) => {
    router.push(`/petshops?service=${encodeURIComponent(serviceName)}`);
  };

  const handleCategoryClick = (link: string) => {
    router.push(link);
  };

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Bar */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Encontre o melhor para seu pet
          </h2>
          <p className="text-gray-600 mb-8">
            Busque por serviços, produtos ou petshops próximos a você
          </p>
          
          <form onSubmit={handleSearch} className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 bg-gray-50 p-4 rounded-2xl shadow-lg">
              {/* Service/Product Search */}
              <div className="flex-1">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-400 text-xl">🔍</span>
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Buscar serviços, produtos ou petshops..."
                    className="block w-full pl-12 pr-3 py-4 border-2 border-gray-200 rounded-xl bg-white focus:ring-2 focus:ring-orange-500 focus:outline-none text-gray-900 placeholder-gray-600 font-medium"
                  />
                </div>
              </div>
              
              {/* Location Search */}
              <div className="flex-1">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-400 text-xl">📍</span>
                  </div>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Seu endereço ou CEP..."
                    className="block w-full pl-12 pr-3 py-4 border-2 border-gray-200 rounded-xl bg-white focus:ring-2 focus:ring-orange-500 focus:outline-none text-gray-900 placeholder-gray-600 font-medium"
                  />
                </div>
              </div>
              
              {/* Search Button */}
              <button
                type="submit"
                className="px-8 py-4 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                Buscar
              </button>
            </div>
          </form>
        </div>

        {/* Popular Services */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
            Serviços Populares
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {popularServices.map((service) => (
              <button
                key={service.id}
                onClick={() => handleServiceClick(service.name)}
                className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105 ${service.color}`}
              >
                <span className="mr-2">{service.icon}</span>
                {service.name}
              </button>
            ))}
          </div>
        </div>

        {/* Quick Categories */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
            Categorias Rápidas
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {quickCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.link)}
                className="group relative overflow-hidden rounded-2xl p-6 text-white transition-all hover:scale-105 hover:shadow-lg"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} group-hover:scale-110 transition-transform duration-300`}></div>
                <div className="relative z-10 text-center">
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h4 className="font-bold text-lg mb-1">{category.name}</h4>
                  <p className="text-sm opacity-90">{category.description}</p>
                </div>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </button>
            ))}
          </div>
        </div>

        {/* Location Services */}
        <div className="mt-12 bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              🗺️ Serviços por Localização
            </h3>
            <p className="text-gray-600 mb-6">
              Encontre petshops e serviços próximos a você com entrega e coleta gratuitas
            </p>
            <div className="grid grid-cols-2 md:flex md:flex-wrap md:justify-center gap-3 md:gap-4">
              <button
                onClick={() => router.push('/petshops?location=centro')}
                className="px-4 py-2 md:px-6 md:py-3 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors shadow-md text-sm md:text-base"
              >
                📍 Centro
              </button>
              <button
                onClick={() => router.push('/petshops?location=zona-sul')}
                className="px-4 py-2 md:px-6 md:py-3 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors shadow-md text-sm md:text-base"
              >
                📍 Zona Sul
              </button>
              <button
                onClick={() => router.push('/petshops?location=zona-norte')}
                className="px-4 py-2 md:px-6 md:py-3 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors shadow-md text-sm md:text-base"
              >
                📍 Zona Norte
              </button>
              <button
                onClick={() => router.push('/petshops?location=zona-oeste')}
                className="px-4 py-2 md:px-6 md:py-3 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors shadow-md text-sm md:text-base"
              >
                📍 Zona Oeste
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
