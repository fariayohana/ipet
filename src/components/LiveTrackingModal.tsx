'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import SupportChat from './SupportChat';

interface LiveTrackingModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderData: any;
}

const trackingSteps = [
  { id: 1, title: 'Pedido Confirmado', description: 'Seu agendamento foi confirmado', icon: '✅' },
  { id: 2, title: 'Carro a Caminho', description: 'Nosso carro está indo buscar seu pet', icon: '🚗' },
  { id: 3, title: 'Pet Coletado', description: 'Seu pet foi coletado com segurança', icon: '🐕' },
  { id: 4, title: 'Chegou na Petshop', description: 'Seu pet chegou na petshop', icon: '🏪' },
  { id: 5, title: 'Serviço Iniciado', description: 'O serviço começou', icon: '✂️' },
  { id: 6, title: 'Serviço Concluído', description: 'Serviço finalizado com sucesso', icon: '✨' },
  { id: 7, title: 'Retornando', description: 'Seu pet está voltando para casa', icon: '🏠' },
  { id: 8, title: 'Entregue', description: 'Seu pet foi entregue em casa', icon: '🎉' }
];

export default function LiveTrackingModal({ isOpen, onClose, orderData }: LiveTrackingModalProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [driverLocation, setDriverLocation] = useState({ lat: -23.5505, lng: -46.6333 });
  const [estimatedTime, setEstimatedTime] = useState(15);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    // Simular progresso automático
    const interval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev < trackingSteps.length) {
          return prev + 1;
        }
        return prev;
      });
    }, 8000); // Avança a cada 8 segundos

    // Simular movimento do carro
    const locationInterval = setInterval(() => {
      setDriverLocation(prev => ({
        lat: prev.lat + (Math.random() - 0.5) * 0.001,
        lng: prev.lng + (Math.random() - 0.5) * 0.001
      }));
      setEstimatedTime(prev => Math.max(1, prev - 1));
    }, 2000);

    return () => {
      clearInterval(interval);
      clearInterval(locationInterval);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const getCurrentStepInfo = () => trackingSteps[currentStep - 1];
  const currentStepInfo = getCurrentStepInfo();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 md:p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[95vh] md:max-h-[90vh] overflow-y-auto">
        <div className="p-4 md:p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Rastreamento em Tempo Real</h2>
              <p className="text-gray-800 font-semibold">Pedido #{Math.floor(Math.random() * 10000)}</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Map Simulation */}
            <div className="bg-gray-100 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-4">Localização do Carro</h3>
              <div className="bg-blue-200 rounded-lg h-64 flex items-center justify-center relative overflow-hidden">
                {/* Simulated Map */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-200 to-blue-300">
                  {/* Streets simulation */}
                  <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-400"></div>
                  <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gray-400"></div>
                  
                  {/* Car icon */}
                  <div 
                    className="absolute w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold transition-all duration-2000"
                    style={{
                      left: `${45 + (driverLocation.lng + 46.6333) * 1000}%`,
                      top: `${45 + (driverLocation.lat + 23.5505) * 1000}%`
                    }}
                  >
                    🚗
                  </div>
                  
                  {/* Your location */}
                  <div className="absolute bottom-4 right-4 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    🏠
                  </div>
                  
                  {/* Petshop location */}
                  <div className="absolute top-4 left-4 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                    🏪
                  </div>
                </div>
                
                <div className="absolute bottom-2 left-2 bg-white rounded px-2 py-1 text-xs">
                  Tempo estimado: {estimatedTime} min
                </div>
              </div>
              
              {/* Driver Info */}
              <div className="mt-4 bg-white rounded-lg p-4 border">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                    👨‍💼
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Carlos Silva</p>
                    <p className="text-sm text-gray-800 font-semibold">Motorista iPet</p>
                    <div className="flex items-center mt-1">
                      <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                      <span className="text-sm text-gray-800 font-semibold ml-1">4.9</span>
                    </div>
                  </div>
                  <div className="ml-auto">
                    <button className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                      📞 Ligar
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Steps */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Status do Pedido</h3>
              
              {/* Current Status Highlight */}
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4">
                <div className="flex items-center">
                  <span className="text-3xl mr-3">{currentStepInfo.icon}</span>
                  <div>
                    <h4 className="font-semibold text-orange-900">{currentStepInfo.title}</h4>
                    <p className="text-orange-700 text-sm">{currentStepInfo.description}</p>
                  </div>
                </div>
              </div>

              {/* All Steps */}
              <div className="space-y-3">
                {trackingSteps.map((step, index) => (
                  <div key={step.id} className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                      index + 1 <= currentStep
                        ? index + 1 === currentStep
                          ? 'bg-orange-500 text-white ring-4 ring-orange-100'
                          : 'bg-green-500 text-white'
                        : 'bg-gray-200 text-gray-500'
                    }`}>
                      {index + 1 <= currentStep ? (
                        index + 1 === currentStep ? step.icon : '✓'
                      ) : (
                        index + 1
                      )}
                    </div>
                    <div className="ml-3 flex-1">
                      <p className={`font-bold ${
                        index + 1 <= currentStep ? 'text-gray-900' : 'text-gray-600'
                      }`}>
                        {step.title}
                      </p>
                      <p className={`text-sm font-medium ${
                        index + 1 <= currentStep ? 'text-gray-800' : 'text-gray-500'
                      }`}>
                        {step.description}
                      </p>
                    </div>
                    {index + 1 === currentStep && (
                      <div className="text-orange-500 text-sm font-medium">
                        Agora
                      </div>
                    )}
                    {index + 1 < currentStep && (
                      <div className="text-green-500 text-sm">
                        ✓ Concluído
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Service Details */}
              <div className="mt-6 bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Detalhes do Serviço</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Pet:</span>
                    <span className="font-medium">{orderData?.petInfo?.name || 'Rex'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Serviço:</span>
                    <span className="font-medium">{orderData?.service?.name || 'Banho e Tosa'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Data:</span>
                    <span className="font-medium">
                      {orderData?.selectedDate ? new Date(orderData.selectedDate).toLocaleDateString('pt-BR') : 'Hoje'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Horário:</span>
                    <span className="font-medium">{orderData?.selectedTime || '14:30'}</span>
                  </div>
                  <div className="flex justify-between font-semibold text-orange-600">
                    <span>Total:</span>
                    <span>R$ {orderData?.total?.toFixed(2) || '85.00'}</span>
                  </div>
                </div>
              </div>

              {/* Live Camera Feed Simulation */}
              {currentStep >= 5 && currentStep <= 6 && (
                <div className="mt-4 bg-black rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">📹 Câmera Ao Vivo</h4>
                  <div className="bg-gray-800 rounded h-32 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-2xl mb-2">🐕✂️</div>
                      <p className="text-sm">Seu pet está sendo cuidado com carinho!</p>
                      <div className="flex items-center justify-center mt-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse mr-2"></div>
                        <span className="text-xs">AO VIVO</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex gap-4">
            <button
              onClick={onClose}
              className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              Fechar
            </button>
            <button
              onClick={() => setIsChatOpen(true)}
              className="flex-1 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
            >
              💬 Chat com Suporte
            </button>
          </div>
        </div>

        {/* Support Chat */}
        <SupportChat
          isOpen={isChatOpen}
          onClose={() => setIsChatOpen(false)}
        />
      </div>
    </div>
  );
}
