'use client';

import { useState } from 'react';
import SupportChat from './SupportChat';

export default function SupportButton() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      {/* Floating Support Button */}
      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-4 right-4 w-12 h-12 md:bottom-6 md:right-6 md:w-14 md:h-14 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300 hover:scale-110 z-40 flex items-center justify-center"
        style={{ display: isChatOpen ? 'none' : 'flex' }}
      >
        <span className="text-xl md:text-2xl">💬</span>
      </button>

      {/* Support Chat */}
      <SupportChat
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />
    </>
  );
}
