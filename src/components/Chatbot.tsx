"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';

type Message = {
  id: string;
  type: 'bot' | 'user';
  text: string;
};

const KNOWLEDGE_BASE: Record<string, string> = {
  "hello": "Hi there! I'm the Astra Tech Assistant. How can I help you today?",
  "services": "We offer custom web application development, mobile app creation (iOS & Android), scalable cloud architecture, API integrations, and ongoing technical maintenance.",
  "hours": "We are open Monday to Friday, 9:00 AM - 6:00 PM (NPT). We're closed on weekends.",
  "quote": "You can get a quote by clicking the 'Get a Quote' button in our navigation bar or visiting our dedicated /quote page to select the specific IT services you need.",
  "contact": "You can reach us by phone at 9852048719 or via email at contact@astratechnologyhorizon.com.",
  "default": "I'm a simple assistant and I didn't quite catch that. You can ask me about our 'services', 'hours', 'contact', or how to get a 'quote'."
};

const PREDEFINED_QUESTIONS = [
  { label: "What services do you provide?", key: "services" },
  { label: "What are your hours?", key: "hours" },
  { label: "How do I get a quote?", key: "quote" },
  { label: "Contact info?", key: "contact" }
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 'init', type: 'bot', text: KNOWLEDGE_BASE.hello }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (text: string, isFromInput = false) => {
    if (!text.trim()) return;

    // Add user message
    const userMsg: Message = { id: Date.now().toString(), type: 'user', text };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Process bot response
    setTimeout(() => {
      let responseKey = "default";
      const lowerText = text.toLowerCase();
      
      if (lowerText.includes('service') || lowerText.includes('do you do') || text === "services") {
        responseKey = "services";
      } else if (lowerText.includes('hour') || lowerText.includes('time') || text === "hours") {
        responseKey = "hours";
      } else if (lowerText.includes('quote') || lowerText.includes('price') || lowerText.includes('cost') || text === "quote") {
        responseKey = "quote";
      } else if (lowerText.includes('contact') || lowerText.includes('phone') || lowerText.includes('email') || text === "contact") {
        responseKey = "contact";
      } else if (lowerText.includes('hello') || lowerText.includes('hi ') || lowerText.includes('hey')) {
        responseKey = "hello";
      }

      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        text: KNOWLEDGE_BASE[responseKey]
      }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 left-6 z-[99] w-[350px] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col"
            style={{ maxHeight: '600px', height: 'calc(100vh - 120px)' }}
          >
            {/* Header */}
            <div className="bg-brand-primary p-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-brand-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Astra Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-xs text-white/70">Online</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 bg-slate-50 space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-2xl p-3 text-sm ${
                    msg.type === 'user' 
                      ? 'bg-brand-accent text-white rounded-tr-sm' 
                      : 'bg-white border border-slate-200 text-slate-700 rounded-tl-sm shadow-sm'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-sm p-4 shadow-sm flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            {messages.length === 1 && (
              <div className="px-4 pb-2 bg-slate-50 flex flex-wrap gap-2">
                {PREDEFINED_QUESTIONS.map((q) => (
                  <button
                    key={q.key}
                    onClick={() => handleSend(q.key)}
                    className="text-xs bg-white border border-slate-200 text-brand-text px-3 py-1.5 rounded-full hover:border-brand-accent hover:text-brand-accent transition-colors"
                  >
                    {q.label}
                  </button>
                ))}
              </div>
            )}

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-slate-100">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(inputValue, true); }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask a question..."
                  className="flex-1 bg-slate-50 border border-slate-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-all"
                />
                <button 
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  className="w-10 h-10 rounded-full bg-brand-primary text-white flex items-center justify-center hover:bg-brand-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                >
                  <Send className="w-4 h-4 ml-0.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-[99] w-14 h-14 bg-brand-primary text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        aria-label="Toggle Chat"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Bot className="w-6 h-6" />}
      </motion.button>
    </>
  );
}
