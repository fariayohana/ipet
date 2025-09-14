'use client';

import { useState } from 'react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingData: object | null;
  onPaymentSuccess: (orderData: object) => void;
}

const paymentMethods = [
  { id: 'credit', name: 'Cartão de Crédito', icon: '💳', description: 'Visa, Mastercard, Elo' },
  { id: 'debit', name: 'Cartão de Débito', icon: '💳', description: 'Débito à vista' },
  { id: 'pix', name: 'PIX', icon: '📱', description: 'Pagamento instantâneo' },
  { id: 'money', name: 'Dinheiro', icon: '💵', description: 'Pagar na entrega' },
];

export default function CheckoutModal({ isOpen, onClose, bookingData, onPaymentSuccess }: CheckoutModalProps) {
  const [step, setStep] = useState(1); // 1: Review, 2: Payment, 3: Processing
  const [selectedPayment, setSelectedPayment] = useState('pix');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    complement: '',
    cep: ''
  });
  const [cardInfo, setCardInfo] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: ''
  });

  if (!isOpen || !bookingData) return null;

  const handleNextStep = () => {
    if (step < 3) {
      setStep(step + 1);
      if (step === 2) {
        // Simular processamento de pagamento
        setTimeout(() => {
          const orderData = {
            ...bookingData,
            orderId: Math.floor(Math.random() * 10000),
            paymentMethod: selectedPayment,
            customerInfo,
            status: 'confirmed',
            estimatedTime: 15
          };
          onPaymentSuccess(orderData);
          onClose();
        }, 3000);
      }
    }
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 md:p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[95vh] md:max-h-[90vh] overflow-y-auto">
        <div className="p-4 md:p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {step === 1 && 'Revisar Pedido'}
              {step === 2 && 'Pagamento'}
              {step === 3 && 'Processando...'}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step >= 1 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                1
              </div>
              <div className={`flex-1 h-1 mx-2 ${step >= 2 ? 'bg-orange-500' : 'bg-gray-200'}`}></div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step >= 2 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                2
              </div>
              <div className={`flex-1 h-1 mx-2 ${step >= 3 ? 'bg-orange-500' : 'bg-gray-200'}`}></div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step >= 3 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                3
              </div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>Revisar</span>
              <span>Pagamento</span>
              <span>Confirmação</span>
            </div>
          </div>

          {/* Step 1: Review Order */}
          {step === 1 && (
            <div className="space-y-6">
              {/* Service Details */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-3">Detalhes do Serviço</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Serviço:</span>
                    <span className="font-medium">{(bookingData as any)?.service?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pet:</span>
                    <span className="font-medium">{(bookingData as any)?.petInfo?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Data:</span>
                    <span className="font-medium">
                      {new Date((bookingData as any)?.selectedDate).toLocaleDateString('pt-BR')}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Horário:</span>
                    <span className="font-medium">{(bookingData as any)?.selectedTime}</span>
                  </div>
                </div>
              </div>

              {/* Optional Services */}
              {(bookingData as any)?.selectedOptionals?.length > 0 && (
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-3">Serviços Opcionais</h3>
                  <div className="space-y-2">
                    {(bookingData as any)?.selectedOptionals.map((optional: any, index: number) => (
                      <div key={index} className="flex justify-between">
                        <span>{optional.name}</span>
                        <span className="font-medium">{formatPrice(optional.price)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Customer Info Form */}
              <div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Suas Informações</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Nome completo *"
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                    className="px-3 py-2 border-2 border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 text-gray-900 placeholder-gray-500 bg-white"
                  />
                  <input
                    type="tel"
                    placeholder="Telefone *"
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                    className="px-3 py-2 border-2 border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 text-gray-900 placeholder-gray-500 bg-white"
                  />
                  <input
                    type="email"
                    placeholder="E-mail *"
                    value={customerInfo.email}
                    onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                    className="px-3 py-2 border-2 border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 text-gray-900 placeholder-gray-500 bg-white"
                  />
                  <input
                    type="text"
                    placeholder="CEP *"
                    value={customerInfo.cep}
                    onChange={(e) => setCustomerInfo({...customerInfo, cep: e.target.value})}
                    className="px-3 py-2 border-2 border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 text-gray-900 placeholder-gray-500 bg-white"
                  />
                  <input
                    type="text"
                    placeholder="Endereço completo *"
                    value={customerInfo.address}
                    onChange={(e) => setCustomerInfo({...customerInfo, address: e.target.value})}
                    className="md:col-span-2 px-3 py-2 border-2 border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 text-gray-900 placeholder-gray-500 bg-white"
                  />
                  <input
                    type="text"
                    placeholder="Complemento (opcional)"
                    value={customerInfo.complement}
                    onChange={(e) => setCustomerInfo({...customerInfo, complement: e.target.value})}
                    className="md:col-span-2 px-3 py-2 border-2 border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 text-gray-900 placeholder-gray-500 bg-white"
                  />
                </div>
              </div>

              {/* Total */}
              <div className="border-t pt-4">
                <div className="flex justify-between items-center text-xl font-bold">
                  <span>Total:</span>
                  <span className="text-orange-600">{formatPrice((bookingData as any)?.total)}</span>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Payment */}
          {step === 2 && (
            <div className="space-y-6">
              {/* Payment Methods */}
              <div>
                <h3 className="font-bold text-gray-900 mb-4 text-lg">Forma de Pagamento</h3>
                <div className="space-y-3">
                  {paymentMethods.map((method) => (
                    <div
                      key={method.id}
                      className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                        selectedPayment === method.id
                          ? 'border-orange-500 bg-orange-50'
                          : 'border-gray-300 hover:bg-gray-50'
                      }`}
                      onClick={() => setSelectedPayment(method.id)}
                    >
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{method.icon}</span>
                        <div>
                          <p className="font-bold text-gray-900">{method.name}</p>
                          <p className="text-sm text-gray-700 font-medium">{method.description}</p>
                        </div>
                        <div className="ml-auto">
                          <div className={`w-4 h-4 rounded-full border-2 ${
                            selectedPayment === method.id
                              ? 'border-orange-500 bg-orange-500'
                              : 'border-gray-300'
                          }`}>
                            {selectedPayment === method.id && (
                              <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Info (if credit/debit selected) */}
              {(selectedPayment === 'credit' || selectedPayment === 'debit') && (
                <div>
                  <h3 className="font-bold text-gray-900 mb-4 text-lg">Dados do Cartão</h3>
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Número do cartão"
                      value={cardInfo.number}
                      onChange={(e) => setCardInfo({...cardInfo, number: e.target.value})}
                      className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 text-gray-900 placeholder-gray-500 bg-white"
                    />
                    <input
                      type="text"
                      placeholder="Nome no cartão"
                      value={cardInfo.name}
                      onChange={(e) => setCardInfo({...cardInfo, name: e.target.value})}
                      className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 text-gray-900 placeholder-gray-500 bg-white"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="MM/AA"
                        value={cardInfo.expiry}
                        onChange={(e) => setCardInfo({...cardInfo, expiry: e.target.value})}
                        className="px-3 py-2 border-2 border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 text-gray-900 placeholder-gray-500 bg-white"
                      />
                      <input
                        type="text"
                        placeholder="CVV"
                        value={cardInfo.cvv}
                        onChange={(e) => setCardInfo({...cardInfo, cvv: e.target.value})}
                        className="px-3 py-2 border-2 border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 text-gray-900 placeholder-gray-500 bg-white"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* PIX Instructions */}
              {selectedPayment === 'pix' && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-2">📱 Pagamento via PIX</h4>
                  <p className="text-blue-700 text-sm">
                    Após confirmar, você receberá um QR Code para pagamento instantâneo via PIX.
                  </p>
                </div>
              )}

              {/* Order Summary */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2">Resumo do Pedido</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>{(bookingData as any)?.service?.name}</span>
                    <span>{formatPrice((bookingData as any)?.service?.price || 0)}</span>
                  </div>
                  {(bookingData as any)?.selectedOptionals?.map((optional: any, index: number) => (
                    <div key={index} className="flex justify-between text-gray-600">
                      <span>{optional.name}</span>
                      <span>{formatPrice(optional.price)}</span>
                    </div>
                  ))}
                  <div className="border-t pt-2 flex justify-between font-semibold">
                    <span>Total</span>
                    <span className="text-orange-600">{formatPrice((bookingData as any)?.total)}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Processing */}
          {step === 3 && (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-orange-500 mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Processando Pagamento...</h3>
              <p className="text-gray-600">Aguarde enquanto confirmamos seu pedido</p>
            </div>
          )}

          {/* Action Buttons */}
          {step < 3 && (
            <div className="flex gap-4 mt-8">
              <button
                onClick={step === 1 ? onClose : () => setStep(step - 1)}
                className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                {step === 1 ? 'Cancelar' : 'Voltar'}
              </button>
              <button
                onClick={handleNextStep}
                disabled={
                  (step === 1 && (!customerInfo.name || !customerInfo.phone || !customerInfo.email || !customerInfo.address)) ||
                  (step === 2 && selectedPayment === 'credit' && (!cardInfo.number || !cardInfo.name || !cardInfo.expiry || !cardInfo.cvv))
                }
                className="flex-1 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                {step === 1 ? 'Continuar' : 'Finalizar Pedido'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
