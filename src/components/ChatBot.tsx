import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Message {
  type: 'user' | 'bot';
  content: string;
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // Initialize with greeting in current language
    setMessages([
      {
        type: 'bot',
        content: t('chatbot.greeting'),
      },
    ]);
  }, [i18n.language]);

  const quickResponses = [
    t('chatbot.quickResponses.prices'),
    t('chatbot.quickResponses.delivery'),
    t('chatbot.quickResponses.printing'),
    t('chatbot.quickResponses.minimum'),
    t('chatbot.quickResponses.location'),
  ];

  const getBotResponse = (input: string): string => {
    const lowercaseInput = input.toLowerCase();
    
    if (lowercaseInput.includes('price') || lowercaseInput.includes('harga') || lowercaseInput.includes('价格')) {
      return t('chatbot.responses.prices');
    }
    if (lowercaseInput.includes('delivery') || lowercaseInput.includes('penghantaran') || lowercaseInput.includes('配送')) {
      return t('chatbot.responses.delivery');
    }
    if (lowercaseInput.includes('print') || lowercaseInput.includes('cetak') || lowercaseInput.includes('印刷')) {
      return t('chatbot.responses.printing');
    }
    if (lowercaseInput.includes('minimum') || lowercaseInput.includes('最低')) {
      return t('chatbot.responses.minimum');
    }
    if (lowercaseInput.includes('location') || lowercaseInput.includes('address') || 
        lowercaseInput.includes('lokasi') || lowercaseInput.includes('alamat') || 
        lowercaseInput.includes('位置') || lowercaseInput.includes('地址')) {
      return t('chatbot.responses.location');
    }
    
    return t('chatbot.responses.default');
  };

  const handleSend = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      type: 'user',
      content: inputText,
    };

    const botMessage: Message = {
      type: 'bot',
      content: getBotResponse(inputText),
    };

    setMessages([...messages, userMessage, botMessage]);
    setInputText('');
  };

  const handleQuickResponse = (response: string) => {
    const userMessage: Message = {
      type: 'user',
      content: response,
    };

    const botMessage: Message = {
      type: 'bot',
      content: getBotResponse(response),
    };

    setMessages([...messages, userMessage, botMessage]);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-xl w-80 sm:w-96 flex flex-col max-h-[600px]">
          <div className="bg-primary p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="text-white font-medium">{t('chatbot.title')}</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-96">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.type === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`rounded-lg px-4 py-2 max-w-[80%] ${
                    message.type === 'user'
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <p className="whitespace-pre-line">{message.content}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t">
            {messages.length <= 2 && (
              <div className="mb-4 flex flex-wrap gap-2">
                {quickResponses.map((response) => (
                  <button
                    key={response}
                    onClick={() => handleQuickResponse(response)}
                    className="text-sm bg-gray-100 hover:bg-gray-200 rounded-full px-3 py-1 transition-colors"
                  >
                    {response}
                  </button>
                ))}
              </div>
            )}
            
            <div className="flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder={t('chatbot.inputPlaceholder')}
                className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                onClick={handleSend}
                className="bg-primary text-white rounded-full p-2 hover:bg-primary-dark transition-colors"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-primary hover:bg-primary-dark text-white rounded-full p-3 shadow-lg transition-colors"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}