import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Message {
  type: 'user' | 'bot';
  content: string;
}

const initialMessages: Message[] = [
  {
    type: 'bot',
    content: `Hi! Welcome to Empiric Star Fashion Attires! 👕

We provide premium 100% cotton T-shirts with custom printing.

How can I assist you today?`,
  },
];

const quickResponses = [
  'What are your prices?',
  'Delivery information',
  'Printing methods',
  'Minimum order',
];

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputText, setInputText] = useState('');
  const { t } = useTranslation();

  const handleSend = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      type: 'user',
      content: inputText,
    };

    const botMessage: Message = {
      type: 'bot',
      content: t('chatbot.defaultResponse'),
    };

    setMessages([...messages, userMessage, botMessage]);
    setInputText('');
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
                    onClick={() => setInputText(response)}
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