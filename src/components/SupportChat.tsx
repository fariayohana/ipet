'use client';

import { useState, useEffect, useRef } from 'react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'support';
  timestamp: Date;
}

interface SupportChatProps {
  isOpen: boolean;
  onClose: () => void;
}

const supportResponses = [
  "Olá! Como posso ajudá-lo hoje? 😊",
  "Entendo sua preocupação. Vou verificar isso para você.",
  "Seu pet está em ótimas mãos! Nossos profissionais são altamente qualificados.",
  "O motorista está a caminho. Você pode acompanhar pelo mapa em tempo real.",
  "Posso transferir você para falar diretamente com a petshop, se preferir.",
  "Obrigado por escolher o iPet! Estamos sempre aqui para ajudar.",
  "Vou anotar sua sugestão e repassar para nossa equipe de desenvolvimento.",
  "O serviço deve ser concluído em aproximadamente 30 minutos.",
  "Você receberá uma notificação assim que seu pet estiver pronto para retornar.",
  "Há algo mais em que posso ajudá-lo?"
];

const quickReplies = [
  "Onde está meu pet?",
  "Quanto tempo falta?",
  "Falar com motorista",
  "Cancelar pedido",
  "Problema com pagamento",
  "Reclamação"
];

export default function SupportChat({ isOpen, onClose }: SupportChatProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Mensagem inicial do suporte
      setTimeout(() => {
        addSupportMessage("Olá! Sou a Ana do suporte iPet. Como posso ajudá-lo hoje? 😊");
      }, 500);
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const addMessage = (text: string, sender: 'user' | 'support') => {
    const newMessage: Message = {
      id: Date.now(),
      text,
      sender,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const addSupportMessage = (text: string) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      addMessage(text, 'support');
    }, 1000 + Math.random() * 1000); // Simula tempo de digitação
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    addMessage(inputText, 'user');
    setInputText('');

    // Simular resposta do suporte
    setTimeout(() => {
      const randomResponse = supportResponses[Math.floor(Math.random() * supportResponses.length)];
      addSupportMessage(randomResponse);
    }, 500);
  };

  const handleQuickReply = (reply: string) => {
    addMessage(reply, 'user');
    
    // Respostas específicas para quick replies
    setTimeout(() => {
      let response = "";
      switch (reply) {
        case "Onde está meu pet?":
          response = "Seu pet está atualmente na petshop recebendo o serviço de banho e tosa. Você pode acompanhar o status em tempo real na tela de rastreamento! 🐕✨";
          break;
        case "Quanto tempo falta?":
          response = "Estimamos que o serviço será concluído em aproximadamente 25 minutos. Você receberá uma notificação quando estivermos retornando com seu pet! ⏰";
          break;
        case "Falar com motorista":
          response = "Vou conectá-lo com o Carlos, nosso motorista. Ele está disponível pelo telefone (11) 99999-8888 ou você pode usar o botão de ligação na tela de rastreamento! 📞";
          break;
        case "Cancelar pedido":
          response = "Entendo que você gostaria de cancelar. Como seu pet já está sendo atendido, posso verificar as opções disponíveis. Posso transferir você para um supervisor? 🤔";
          break;
        case "Problema com pagamento":
          response = "Vou verificar seu pagamento agora. Qual foi o método utilizado? PIX, cartão ou dinheiro? Posso resolver isso rapidamente para você! 💳";
          break;
        case "Reclamação":
          response = "Lamento que tenha tido uma experiência negativa. Sua opinião é muito importante para nós. Pode me contar o que aconteceu para que eu possa ajudar? 😔";
          break;
        default:
          response = supportResponses[Math.floor(Math.random() * supportResponses.length)];
      }
      addSupportMessage(response);
    }, 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 w-80 h-96 max-w-[calc(100vw-2rem)] max-h-[calc(100vh-2rem)] bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col z-50 md:w-80 md:h-96">
      {/* Header */}
      <div className="bg-orange-500 text-white p-4 rounded-t-lg flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center mr-3">
            👩‍💼
          </div>
          <div>
            <h3 className="font-semibold">Suporte iPet</h3>
            <p className="text-xs opacity-90">Ana - Online</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-white hover:text-gray-200 text-xl font-bold"
        >
          ×
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                message.sender === 'user'
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-100 text-gray-800 border'
              }`}
            >
              {message.text}
              <div className={`text-xs mt-1 opacity-70 ${
                message.sender === 'user' ? 'text-orange-100' : 'text-gray-500'
              }`}>
                {message.timestamp.toLocaleTimeString('pt-BR', { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </div>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-100 text-gray-800 border px-3 py-2 rounded-lg text-sm">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Replies */}
      {messages.length <= 2 && (
        <div className="px-4 pb-2">
          <p className="text-xs text-gray-600 mb-2 font-medium">Respostas rápidas:</p>
          <div className="flex flex-wrap gap-1">
            {quickReplies.slice(0, 3).map((reply) => (
              <button
                key={reply}
                onClick={() => handleQuickReply(reply)}
                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full hover:bg-gray-200 transition-colors border"
              >
                {reply}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-1 mt-1">
            {quickReplies.slice(3).map((reply) => (
              <button
                key={reply}
                onClick={() => handleQuickReply(reply)}
                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full hover:bg-gray-200 transition-colors border"
              >
                {reply}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Digite sua mensagem..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm text-gray-800 placeholder-gray-500"
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputText.trim()}
            className="px-3 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            📤
          </button>
        </div>
      </div>
    </div>
  );
}
