import Link from 'next/link';

const plans = [
  {
    id: 'basic',
    name: 'Básico',
    price: 29.90,
    interval: 'mês',
    features: [
      '1 banho por mês',
      '10% desconto em produtos',
      'Coleta e entrega grátis',
      'Suporte prioritário'
    ],
    popular: false
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 49.90,
    interval: 'mês',
    features: [
      '2 banhos por mês',
      '1 tosa higiênica por mês',
      '15% desconto em produtos',
      'Coleta e entrega grátis',
      'Suporte prioritário',
      'Corte de unhas grátis'
    ],
    popular: true
  },
  {
    id: 'vip',
    name: 'VIP',
    price: 89.90,
    interval: 'mês',
    features: [
      '4 banhos por mês',
      '2 tosas completas por mês',
      '20% desconto em produtos',
      'Coleta e entrega grátis',
      'Suporte 24/7',
      'Todos os serviços básicos inclusos',
      'Consulta veterinária mensal'
    ],
    popular: false
  }
];

export default function ClubPage() {
  return (
    <div className="bg-gradient-to-br from-orange-50 to-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
            iPet Club
          </h1>
          <p className="text-xl text-gray-800 font-semibold max-w-3xl mx-auto mb-8">
            Assine nosso clube e tenha cuidados regulares para seu pet com benefícios exclusivos,
            descontos especiais e a comodidade da coleta e entrega em casa.
          </p>
          <div className="flex justify-center items-center space-x-8 text-sm text-gray-700 font-semibold">
            <div className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Sem fidelidade
            </div>
            <div className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Cancele quando quiser
            </div>
            <div className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Coleta e entrega grátis
            </div>
          </div>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-white rounded-2xl shadow-lg p-8 relative ${
                plan.popular ? 'ring-2 ring-orange-500 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Mais Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-center justify-center">
                  <span className="text-4xl font-bold text-orange-600">R$ {plan.price.toFixed(2)}</span>
                  <span className="text-gray-700 font-semibold ml-2">/{plan.interval}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-800 font-semibold">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href={`/club/subscribe/${plan.id}`}>
                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-orange-500 text-white hover:bg-orange-600'
                      : 'bg-gray-200 text-gray-900 hover:bg-gray-300 font-bold'
                  }`}
                >
                  Assinar Agora
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Por que escolher o iPet Club?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚗</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Coleta e Entrega</h3>
              <p className="text-gray-800 font-semibold">Buscamos e entregamos seu pet em casa, sem custo adicional.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Economia Garantida</h3>
              <p className="text-gray-800 font-semibold">Descontos exclusivos e preços especiais para assinantes.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Acompanhamento</h3>
              <p className="text-gray-800 font-semibold">Veja em tempo real todas as etapas do cuidado do seu pet.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Qualidade Premium</h3>
              <p className="text-gray-800 font-semibold">Parceria apenas com as melhores petshops da região.</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Perguntas Frequentes
          </h2>
          
          <div className="space-y-6 max-w-3xl mx-auto">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Posso cancelar minha assinatura a qualquer momento?
              </h3>
              <p className="text-gray-800 font-semibold">
                Sim! Não há fidelidade. Você pode cancelar sua assinatura a qualquer momento através do seu painel de controle.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Como funciona a coleta e entrega?
              </h3>
              <p className="text-gray-800 font-semibold">
                Agendamos a coleta do seu pet no horário mais conveniente para você. Após o serviço, entregamos seu pet limpo e cuidado em casa.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Posso usar os serviços em qualquer petshop parceira?
              </h3>
              <p className="text-gray-800 font-semibold">
                Sim! Você pode escolher qualquer petshop parceira do iPet na sua região para utilizar seus créditos mensais.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                O que acontece se eu não usar todos os serviços do mês?
              </h3>
              <p className="text-gray-800 font-semibold">
                Os créditos não utilizados podem ser acumulados por até 3 meses, dando mais flexibilidade para você.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
