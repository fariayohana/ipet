'use client';

import { useState } from 'react';

interface ServiceBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    id: number;
    name: string;
    price: number;
    duration: string;
    description: string;
  };
  onConfirm: (bookingData: any) => void;
}

const optionalServices = [
  { id: 1, name: 'Perfume Lavanda', price: 8.00, icon: '🌸' },
  { id: 2, name: 'Perfume Cítrico', price: 8.00, icon: '🍋' },
  { id: 3, name: 'Laço Decorativo', price: 12.00, icon: '🎀' },
  { id: 4, name: 'Gravata Elegante', price: 15.00, icon: '👔' },
  { id: 5, name: 'Bandana Personalizada', price: 10.00, icon: '🔺' },
  { id: 6, name: 'Esmalte para Unhas', price: 20.00, icon: '💅' },
];

const timeSlots = [
  '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
  '11:00', '11:30', '14:00', '14:30', '15:00', '15:30',
  '16:00', '16:30', '17:00', '17:30'
];

export default function ServiceBookingModal({ isOpen, onClose, service, onConfirm }: ServiceBookingModalProps) {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedOptionals, setSelectedOptionals] = useState<number[]>([]);
  const [petInfo, setPetInfo] = useState({
    name: '',
    breed: '',
    size: 'medium',
    observations: ''
  });

  if (!isOpen) return null;

  const handleOptionalToggle = (optionalId: number) => {
    setSelectedOptionals(prev => 
      prev.includes(optionalId) 
        ? prev.filter(id => id !== optionalId)
        : [...prev, optionalId]
    );
  };

  const calculateTotal = () => {
    const optionalsTotal = selectedOptionals.reduce((total, id) => {
      const optional = optionalServices.find(opt => opt.id === id);
      return total + (optional?.price || 0);
    }, 0);
    return service.price + optionalsTotal;
  };

  const handleConfirm = () => {
    const bookingData = {
      service,
      selectedDate,
      selectedTime,
      selectedOptionals: selectedOptionals.map(id =>
        optionalServices.find(opt => opt.id === id)
      ).filter(Boolean),
      petInfo,
      total: calculateTotal()
    };
    onConfirm(bookingData);
  };

  // Generate next 7 days for date selection
  const getNextDays = () => {
    const days = [];
    for (let i = 1; i <= 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      days.push({
        value: date.toISOString().split('T')[0],
        label: date.toLocaleDateString('pt-BR', { 
          weekday: 'short', 
          day: '2-digit', 
          month: '2-digit' 
        })
      });
    }
    return days;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 md:p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[95vh] md:max-h-[90vh] overflow-y-auto">
        <div className="p-4 md:p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Agendar Serviço</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
          </div>

          {/* Service Info */}
          <div className="bg-orange-50 rounded-lg p-4 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h3>
            <p className="text-gray-600 mb-2">{service.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">⏱️ {service.duration}</span>
              <span className="text-xl font-bold text-orange-600">R$ {service.price.toFixed(2)}</span>
            </div>
          </div>

          {/* Pet Information */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Informações do Pet</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-800 mb-1">
                  Nome do Pet *
                </label>
                <input
                  type="text"
                  value={petInfo.name}
                  onChange={(e) => setPetInfo({...petInfo, name: e.target.value})}
                  className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 text-gray-900 placeholder-gray-500 bg-white"
                  placeholder="Ex: Rex"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-800 mb-1">
                  Raça
                </label>
                <input
                  type="text"
                  value={petInfo.breed}
                  onChange={(e) => setPetInfo({...petInfo, breed: e.target.value})}
                  className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 text-gray-900 placeholder-gray-500 bg-white"
                  placeholder="Ex: Golden Retriever"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-800 mb-1">
                  Porte
                </label>
                <select
                  value={petInfo.size}
                  onChange={(e) => setPetInfo({...petInfo, size: e.target.value})}
                  className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 text-gray-900 bg-white"
                >
                  <option value="small">Pequeno</option>
                  <option value="medium">Médio</option>
                  <option value="large">Grande</option>
                </select>
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-bold text-gray-800 mb-1">
                Observações
              </label>
              <textarea
                value={petInfo.observations}
                onChange={(e) => setPetInfo({...petInfo, observations: e.target.value})}
                className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 text-gray-900 placeholder-gray-500 bg-white"
                rows={3}
                placeholder="Alguma observação especial sobre seu pet..."
              />
            </div>
          </div>

          {/* Date and Time Selection */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Data e Horário</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-800 mb-2">
                  Escolha a Data *
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {getNextDays().map((day) => (
                    <button
                      key={day.value}
                      onClick={() => setSelectedDate(day.value)}
                      className={`p-2 text-sm rounded-md border ${
                        selectedDate === day.value
                          ? 'bg-orange-500 text-white border-orange-500'
                          : 'bg-white text-gray-700 border-gray-300 hover:bg-orange-50'
                      }`}
                    >
                      {day.label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-800 mb-2">
                  Escolha o Horário *
                </label>
                <div className="grid grid-cols-3 gap-2 max-h-40 overflow-y-auto">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`p-2 text-sm rounded-md border ${
                        selectedTime === time
                          ? 'bg-orange-500 text-white border-orange-500'
                          : 'bg-white text-gray-700 border-gray-300 hover:bg-orange-50'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Optional Services */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Serviços Opcionais</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {optionalServices.map((optional) => (
                <div
                  key={optional.id}
                  className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                    selectedOptionals.includes(optional.id)
                      ? 'bg-orange-50 border-orange-500'
                      : 'bg-white border-gray-300 hover:bg-gray-50'
                  }`}
                  onClick={() => handleOptionalToggle(optional.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{optional.icon}</span>
                      <div>
                        <p className="font-medium text-gray-900">{optional.name}</p>
                        <p className="text-sm text-orange-600">+ R$ {optional.price.toFixed(2)}</p>
                      </div>
                    </div>
                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                      selectedOptionals.includes(optional.id)
                        ? 'bg-orange-500 border-orange-500'
                        : 'border-gray-300'
                    }`}>
                      {selectedOptionals.includes(optional.id) && (
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Total and Actions */}
          <div className="border-t pt-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold text-gray-900">Total:</span>
              <span className="text-2xl font-bold text-orange-600">R$ {calculateTotal().toFixed(2)}</span>
            </div>
            <div className="flex gap-4">
              <button
                onClick={onClose}
                className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={handleConfirm}
                disabled={!selectedDate || !selectedTime || !petInfo.name}
                className="flex-1 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                Confirmar Agendamento
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
