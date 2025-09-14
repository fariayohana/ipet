'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/logoipet.png"
                alt="iPet"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/petshops" className="text-gray-700 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium">
                Petshops
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium">
                Serviços
              </Link>
              <Link href="/club" className="text-gray-700 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium">
                iPet Club
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="text-gray-700 hover:text-orange-500">
              Entrar
            </Link>
            <Link href="/register" className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
              Cadastrar
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-gray-50 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <Link href="/petshops" className="text-gray-700 hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium">
              Petshops
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium">
              Serviços
            </Link>
            <Link href="/club" className="text-gray-700 hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium">
              iPet Club
            </Link>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-3 space-x-3">
                <Link href="/login" className="text-gray-700 hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium">
                  Entrar
                </Link>
                <Link href="/register" className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 text-base font-medium">
                  Cadastrar
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
