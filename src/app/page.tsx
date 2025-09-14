import Image from "next/image";
import Link from "next/link";
import SearchSection from '@/components/SearchSection';

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-orange-50 to-blue-50">

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="mb-8">
            <Image
              src="/logoipet.png"
              alt="iPet"
              width={200}
              height={80}
              className="mx-auto h-20 w-auto mb-4"
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Cuidado completo para seu
            <span className="text-orange-500"> pet</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Encontre as melhores petshops perto de você. Produtos, serviços e cuidados especiais
            com coleta e entrega em casa.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Link href="/petshops" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 md:py-4 md:text-lg md:px-10">
                Encontrar Petshops
              </Link>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <Link href="/petshop/register" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-orange-500 bg-white hover:bg-gray-50 border-orange-500 md:py-4 md:text-lg md:px-10">
                Sou Petshop
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <SearchSection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Features */}
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white mb-4">
                🐕
              </div>
              <h3 className="text-lg font-medium text-gray-900">Serviços Completos</h3>
              <p className="mt-2 text-base text-gray-500">
                Banho, tosa, corte de unhas e muito mais. Tudo com coleta e entrega em casa.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-4">
                📍
              </div>
              <h3 className="text-lg font-medium text-gray-900">Petshops Próximas</h3>
              <p className="mt-2 text-base text-gray-500">
                Encontre as melhores petshops na sua região com avaliações reais.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white mb-4">
                📱
              </div>
              <h3 className="text-lg font-medium text-gray-900">Acompanhe em Tempo Real</h3>
              <p className="mt-2 text-base text-gray-500">
                Veja todas as etapas do cuidado do seu pet em tempo real.
              </p>
            </div>
          </div>
        </div>

        {/* Club Section */}
        <div className="mt-20 bg-gradient-to-r from-orange-500 to-blue-500 rounded-lg shadow-xl">
          <div className="px-6 py-12 sm:px-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white">
                iPet Club
              </h2>
              <p className="mt-4 text-xl text-orange-100">
                Assine nosso clube e tenha benefícios exclusivos com recorrência de serviços
              </p>
              <div className="mt-8">
                <Link href="/club" className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Saiba Mais
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
