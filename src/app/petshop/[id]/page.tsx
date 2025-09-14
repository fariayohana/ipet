'use client';

import { useState } from 'react';
import Link from 'next/link';
import ServiceBookingModal from '@/components/ServiceBookingModal';
import LiveTrackingModal from '@/components/LiveTrackingModal';
import CheckoutModal from '@/components/CheckoutModal';

// Mock data - será substituído por dados reais do banco
const mockPetshop = {
  id: 1,
  name: "PetCare Premium",
  rating: 4.8,
  reviewCount: 127,
  distance: "0.5 km",
  address: "Rua das Flores, 123 - Centro",
  phone: "(11) 99999-9999",
  hours: "08:00 - 18:00",
  image: "/api/placeholder/600/300",
  description: "Petshop especializada em cuidados premium para seu pet. Oferecemos serviços completos com profissionais qualificados e produtos de alta qualidade.",
  services: [
    { id: 1, name: "Banho Simples", price: 35, duration: "45 min", description: "Banho com shampoo neutro e secagem" },
    { id: 2, name: "Banho e Tosa", price: 65, duration: "90 min", description: "Banho completo + tosa higiênica" },
    { id: 3, name: "Tosa Completa", price: 80, duration: "120 min", description: "Tosa completa com corte personalizado" },
    { id: 4, name: "Corte de Unhas", price: 15, duration: "15 min", description: "Corte e lixamento das unhas" },
  ],
  products: [
    { id: 1, name: "Ração Premium Cães", price: 89.90, image: "/api/placeholder/150/150" },
    { id: 2, name: "Brinquedo Mordedor", price: 24.90, image: "/api/placeholder/150/150" },
    { id: 3, name: "Coleira Personalizada", price: 39.90, image: "/api/placeholder/150/150" },
  ]
};

export default function PetshopDetailPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState('services');
  const [cart, setCart] = useState<object[]>([]);
  const [bookingModal, setBookingModal] = useState<{isOpen: boolean, service: object | null}>({isOpen: false, service: null});
  const [checkoutModal, setCheckoutModal] = useState<{isOpen: boolean, bookingData: object | null}>({isOpen: false, bookingData: null});
  const [trackingModal, setTrackingModal] = useState<{isOpen: boolean, orderData: object | null}>({isOpen: false, orderData: null});

  const addToCart = (item: object, type: 'service' | 'product') => {
    setCart([...cart, { ...item, type }]);
  };

  const handleServiceBooking = (service: object) => {
    setBookingModal({isOpen: true, service});
  };

  const handleBookingConfirm = (bookingData: object) => {
    setBookingModal({isOpen: false, service: null});
    setCheckoutModal({isOpen: true, bookingData});
  };

  const handlePaymentSuccess = (orderData: object) => {
    setCheckoutModal({isOpen: false, bookingData: null});
    setTrackingModal({isOpen: true, orderData});
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md mb-6">
          <div className="relative">
            <div className="w-full h-64 bg-gradient-to-r from-orange-100 to-blue-100 rounded-t-lg flex items-center justify-center overflow-hidden">
              <div className="text-center">
                <div className="text-6xl mb-2">🏪</div>
                <p className="text-gray-800 font-bold">{mockPetshop.name}</p>
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{mockPetshop.name}</h1>
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    <span className="text-yellow-400 text-lg">★</span>
                    <span className="text-lg text-gray-800 font-bold ml-1">{mockPetshop.rating}</span>
                    <span className="text-gray-700 font-semibold ml-1">({mockPetshop.reviewCount} avaliações)</span>
                  </div>
                  <span className="text-gray-600 mx-2 font-bold">•</span>
                  <span className="text-gray-800 font-semibold">{mockPetshop.distance}</span>
                </div>
                <p className="text-gray-800 font-semibold mb-2">{mockPetshop.address}</p>
                <p className="text-gray-800 font-semibold">{mockPetshop.phone} • {mockPetshop.hours}</p>
              </div>
              
              <div className="text-right">
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
                  Aberto
                </div>
                <Link href={`/petshop/${params.id}/cart`}>
                  <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                    Ver Carrinho ({cart.length})
                  </button>
                </Link>
              </div>
            </div>
            
            <p className="text-gray-800 font-semibold">{mockPetshop.description}</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('services')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'services'
                    ? 'border-orange-500 text-orange-600'
                    : 'border-transparent text-gray-700 hover:text-gray-900 font-semibold'
                }`}
              >
                Serviços
              </button>
              <button
                onClick={() => setActiveTab('products')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'products'
                    ? 'border-orange-500 text-orange-600'
                    : 'border-transparent text-gray-700 hover:text-gray-900 font-semibold'
                }`}
              >
                Produtos
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'reviews'
                    ? 'border-orange-500 text-orange-600'
                    : 'border-transparent text-gray-700 hover:text-gray-900 font-semibold'
                }`}
              >
                Avaliações
              </button>
            </nav>
          </div>

          <div className="p-6">
            {/* Services Tab */}
            {activeTab === 'services' && (
              <div className="space-y-4">
                {mockPetshop.services.map((service) => (
                  <div key={service.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{service.name}</h3>
                        <p className="text-gray-800 font-semibold mb-2">{service.description}</p>
                        <div className="flex items-center text-sm text-gray-700 font-semibold">
                          <span>⏱️ {service.duration}</span>
                        </div>
                      </div>
                      <div className="text-right ml-4">
                        <div className="text-2xl font-bold text-orange-600 mb-2">
                          R$ {service.price.toFixed(2)}
                        </div>
                        <button
                          onClick={() => handleServiceBooking(service)}
                          className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
                        >
                          Agendar
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Products Tab */}
            {activeTab === 'products' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockPetshop.products.map((product) => (
                  <div key={product.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="w-full h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-gray-700 font-semibold">Imagem do Produto</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
                    <div className="flex justify-between items-center">
                      <div className="text-xl font-bold text-orange-600">
                        R$ {product.price.toFixed(2)}
                      </div>
                      <button
                        onClick={() => addToCart(product, 'product')}
                        className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
                      >
                        Adicionar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Reviews Tab */}
            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <div className="text-center py-12">
                  <div className="text-gray-400 text-6xl mb-4">⭐</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Avaliações em breve</h3>
                  <p className="text-gray-700 font-semibold">Sistema de avaliações será implementado em breve.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modals */}
      <ServiceBookingModal
        isOpen={bookingModal.isOpen}
        onClose={() => setBookingModal({isOpen: false, service: null})}
        service={bookingModal.service}
        onConfirm={handleBookingConfirm}
      />

      <CheckoutModal
        isOpen={checkoutModal.isOpen}
        onClose={() => setCheckoutModal({isOpen: false, bookingData: null})}
        bookingData={checkoutModal.bookingData}
        onPaymentSuccess={handlePaymentSuccess}
      />

      <LiveTrackingModal
        isOpen={trackingModal.isOpen}
        onClose={() => setTrackingModal({isOpen: false, orderData: null})}
        orderData={trackingModal.orderData}
      />
    </div>
  );
}
