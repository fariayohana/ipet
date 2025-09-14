import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div>
              <Image
                src="/logoipet.png"
                alt="iPet"
                width={120}
                height={48}
                className="h-12 w-auto mb-4"
              />
              <p className="text-gray-400 mt-2">
                A plataforma completa para cuidados com seu pet. Conectando você às melhores petshops da sua região.
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Para Clientes
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/petshops" className="text-base text-gray-300 hover:text-white">
                      Encontrar Petshops
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-base text-gray-300 hover:text-white">
                      Serviços
                    </Link>
                  </li>
                  <li>
                    <Link href="/club" className="text-base text-gray-300 hover:text-white">
                      iPet Club
                    </Link>
                  </li>
                  <li>
                    <Link href="/tracking" className="text-base text-gray-300 hover:text-white">
                      Rastrear Pedido
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Para Petshops
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/petshop/register" className="text-base text-gray-300 hover:text-white">
                      Cadastrar Petshop
                    </Link>
                  </li>
                  <li>
                    <Link href="/petshop/dashboard" className="text-base text-gray-300 hover:text-white">
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link href="/petshop/help" className="text-base text-gray-300 hover:text-white">
                      Ajuda
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Suporte
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/help" className="text-base text-gray-300 hover:text-white">
                      Central de Ajuda
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-base text-gray-300 hover:text-white">
                      Contato
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq" className="text-base text-gray-300 hover:text-white">
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Legal
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/privacy" className="text-base text-gray-300 hover:text-white">
                      Privacidade
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-base text-gray-300 hover:text-white">
                      Termos de Uso
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; 2024 iPet. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
