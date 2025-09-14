'use client';

import { useState } from 'react';
import Link from 'next/link';

// Mock data - será substituído por dados reais do banco
const mockPetshops = [
  {
    id: 1,
    name: "PetCare Premium",
    rating: 4.8,
    distance: "0.5 km",
    image: "🏪",
    gradient: "from-orange-100 to-pink-100",
    services: ["Banho", "Tosa", "Corte de Unhas"],
    priceRange: "$$",
    isOpen: true,
    deliveryTime: "30-45 min"
  },
  {
    id: 2,
    name: "Mundo Pet",
    rating: 4.6,
    distance: "1.2 km",
    image: "🐕",
    gradient: "from-blue-100 to-purple-100",
    services: ["Banho", "Tosa", "Veterinário"],
    priceRange: "$$$",
    isOpen: true,
    deliveryTime: "45-60 min"
  },
  {
    id: 3,
    name: "Pet Shop do Bairro",
    rating: 4.4,
    distance: "2.1 km",
    image: "🐾",
    gradient: "from-green-100 to-teal-100",
    services: ["Banho", "Produtos", "Ração"],
    priceRange: "$",
    isOpen: false,
    deliveryTime: "60-75 min"
  }
];

export default function PetshopsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filteredPetshops = mockPetshops.filter(petshop => {
    const matchesSearch = petshop.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || 
      (selectedFilter === 'open' && petshop.isOpen) ||
      (selectedFilter === 'delivery' && petshop.deliveryTime);
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Petshops Próximas</h1>
          
          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Buscar petshops..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2">
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <option value="all">Todas</option>
                <option value="open">Abertas</option>
                <option value="delivery">Com Entrega</option>
              </select>
            </div>
          </div>
        </div>

        {/* Petshops Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPetshops.map((petshop) => (
            <Link key={petshop.id} href={`/petshop/${petshop.id}`}>
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                <div className="relative">
                  <div className={`w-full h-48 bg-gradient-to-br ${petshop.gradient} rounded-t-lg flex items-center justify-center`}>
                    <div className="text-center">
                      <div className="text-6xl mb-2">{petshop.image}</div>
                      <p className="text-gray-800 font-bold text-sm">{petshop.name}</p>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      petshop.isOpen 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {petshop.isOpen ? 'Aberto' : 'Fechado'}
                    </span>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{petshop.name}</h3>
                    <span className="text-sm text-gray-700 font-semibold">{petshop.priceRange}</span>
                  </div>
                  
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      <span className="text-yellow-400">★</span>
                      <span className="text-sm text-gray-800 font-semibold ml-1">{petshop.rating}</span>
                    </div>
                    <span className="text-gray-600 mx-2 font-bold">•</span>
                    <span className="text-sm text-gray-800 font-semibold">{petshop.distance}</span>
                    <span className="text-gray-600 mx-2 font-bold">•</span>
                    <span className="text-sm text-gray-800 font-semibold">{petshop.deliveryTime}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {petshop.services.slice(0, 3).map((service, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                    {petshop.services.length > 3 && (
                      <span className="px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded-full font-semibold">
                        +{petshop.services.length - 3} mais
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredPetshops.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Nenhuma petshop encontrada</h3>
            <p className="text-gray-700 font-semibold">Tente ajustar seus filtros ou termo de busca.</p>
          </div>
        )}
      </div>
    </div>
  );
}
