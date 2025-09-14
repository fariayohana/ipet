'use client';

import { useState } from 'react';

// Mock data - será substituído por dados reais do banco
const mockOrder = {
  id: "PET-2024-001",
  petName: "Rex",
  service: "Banho e Tosa Completa",
  petshop: "PetCare Premium",
  status: "in_service",
  estimatedTime: "14:30",
  steps: [
    {
      id: 1,
      title: "Pedido Confirmado",
      description: "Seu pedido foi confirmado e está sendo preparado",
      time: "12:00",
      completed: true
    },
    {
      id: 2,
      title: "Saindo para Coleta",
      description: "Nosso carro está a caminho para buscar seu pet",
      time: "12:15",
      completed: true
    },
    {
      id: 3,
      title: "Pet Coletado",
      description: "Rex foi coletado com segurança",
      time: "12:45",
      completed: true
    },
    {
      id: 4,
      title: "Em Atendimento",
      description: "Rex está recebendo os cuidados na petshop",
      time: "13:00",
      completed: true,
      current: true
    },
    {
      id: 5,
      title: "Serviço Concluído",
      description: "Todos os serviços foram finalizados",
      time: "14:30",
      completed: false
    },
    {
      id: 6,
      title: "Saindo para Entrega",
      description: "Rex está voltando para casa",
      time: "14:45",
      completed: false
    },
    {
      id: 7,
      title: "Entregue",
      description: "Rex foi entregue com segurança em casa",
      time: "15:15",
      completed: false
    }
  ]
};

export default function TrackingPage() {
  const [orderId, setOrderId] = useState('');
  const [showTracking, setShowTracking] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderId.trim()) {
      setShowTracking(true);
    }
  };



  const getStatusText = (status: string) => {
    switch (status) {
      case 'confirmed': return 'Confirmado';
      case 'collecting': return 'Coletando';
      case 'collected': return 'Coletado';
      case 'in_service': return 'Em Atendimento';
      case 'completed': return 'Concluído';
      case 'delivering': return 'Entregando';
      case 'delivered': return 'Entregue';
      default: return 'Desconhecido';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Rastrear Pedido
          </h1>
          <p className="text-gray-600">
            Acompanhe em tempo real o cuidado do seu pet
          </p>
        </div>

        {/* Search Form */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <form onSubmit={handleSearch} className="flex gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Digite o código do pedido (ex: PET-2024-001)"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Rastrear
            </button>
          </form>
        </div>

        {/* Tracking Results */}
        {showTracking && (
          <div className="bg-white rounded-lg shadow-md p-6">
            {/* Order Header */}
            <div className="border-b border-gray-200 pb-6 mb-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Pedido {mockOrder.id}
                  </h2>
                  <div className="space-y-1 text-gray-600">
                    <p><strong>Pet:</strong> {mockOrder.petName}</p>
                    <p><strong>Serviço:</strong> {mockOrder.service}</p>
                    <p><strong>Petshop:</strong> {mockOrder.petshop}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-white bg-orange-500`}>
                    {getStatusText(mockOrder.status)}
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Previsão: {mockOrder.estimatedTime}
                  </p>
                </div>
              </div>
            </div>

            {/* Progress Steps */}
            <div className="space-y-6">
              {mockOrder.steps.map((step, index) => (
                <div key={step.id} className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step.completed
                        ? step.current
                          ? 'bg-orange-500 ring-4 ring-orange-100'
                          : 'bg-green-600'
                        : 'bg-gray-300'
                    }`}>
                      {step.completed ? (
                        step.current ? (
                          <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                        ) : (
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )
                      ) : (
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      )}
                    </div>
                    {index < mockOrder.steps.length - 1 && (
                      <div className={`w-0.5 h-12 mt-2 ml-4 ${
                        step.completed ? 'bg-green-600' : 'bg-gray-300'
                      }`}></div>
                    )}
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex justify-between items-center">
                      <h3 className={`text-lg font-medium ${
                        step.completed ? 'text-gray-900' : 'text-gray-500'
                      }`}>
                        {step.title}
                      </h3>
                      <span className={`text-sm ${
                        step.completed ? 'text-gray-600' : 'text-gray-400'
                      }`}>
                        {step.time}
                      </span>
                    </div>
                    <p className={`text-sm ${
                      step.completed ? 'text-gray-600' : 'text-gray-400'
                    }`}>
                      {step.description}
                    </p>
                    {step.current && (
                      <div className="mt-2">
                        <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                          <p className="text-orange-800 text-sm font-medium">
                            🐕 Rex está sendo cuidado com muito carinho!
                            Você pode acompanhar através das nossas câmeras ao vivo.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <div className="flex space-x-4">
                  <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                    Ver Câmera Ao Vivo
                  </button>
                  <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                    Contatar Petshop
                  </button>
                </div>
                <button className="text-orange-500 hover:text-orange-600 text-sm font-medium">
                  Atualizar Status
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Help Section */}
        <div className="mt-8 bg-orange-50 border border-orange-200 rounded-lg p-6">
          <h3 className="text-lg font-bold text-orange-900 mb-2">
            Precisa de ajuda?
          </h3>
          <p className="text-orange-800 font-medium mb-4">
            Se você não conseguir encontrar seu pedido ou tiver alguma dúvida, entre em contato conosco.
          </p>
          <div className="flex space-x-4">
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors font-semibold">
              Chat de Suporte
            </button>
            <button className="text-orange-600 hover:text-orange-700 font-bold">
              (11) 99999-9999
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
