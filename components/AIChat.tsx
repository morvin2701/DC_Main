import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { motion as m, AnimatePresence } from 'framer-motion';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

// Fix: Cast motion to any to resolve TypeScript errors with MotionProps
const motion = m as any;

const MAX_CHARS = 500;

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hello! I am the Datacare AI Assistant. How can I help you optimize your jewellery business today?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    // Input validation: Empty or whitespace check is handled here
    if (!input.trim() || isLoading) return;
    
    // Input validation: Length check (redundant with maxLength but good for safety)
    if (input.length > MAX_CHARS) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const historyForService = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const responseText = await sendMessageToGemini(historyForService, userMsg);
      
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: 'I encountered an error. Please try again.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-6 w-[350px] sm:w-[380px] h-[550px] bg-white border border-stone-200 rounded-2xl shadow-premium flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-stone-50 border-b border-stone-200 flex justify-between items-center text-stone-900">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white border border-stone-200 flex items-center justify-center shadow-sm">
                  <Bot className="w-5 h-5 text-champagne-500" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Datacare Assistant</h3>
                  <p className="text-[10px] text-green-500 flex items-center gap-1.5 uppercase tracking-wide font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> Online
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-stone-400 hover:text-stone-900 transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-white" ref={scrollRef}>
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-stone-900 text-white rounded-br-none' 
                      : 'bg-stone-50 text-stone-800 border border-stone-100 rounded-bl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-stone-50 p-4 rounded-2xl rounded-bl-none border border-stone-100 shadow-sm">
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 bg-stone-300 rounded-full animate-bounce"></span>
                      <span className="w-2 h-2 bg-stone-300 rounded-full animate-bounce delay-100"></span>
                      <span className="w-2 h-2 bg-stone-300 rounded-full animate-bounce delay-200"></span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-stone-100">
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2 bg-stone-50 rounded-full px-4 py-2 border border-stone-200 focus-within:border-champagne-500 focus-within:ring-1 focus-within:ring-champagne-500/20 transition-all">
                  <input
                    type="text"
                    value={input}
                    maxLength={MAX_CHARS}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Ask a question..."
                    className="bg-transparent border-none outline-none text-stone-800 text-sm flex-1 placeholder:text-stone-400 w-full"
                  />
                  <button 
                    onClick={handleSend}
                    disabled={isLoading || !input.trim()}
                    className="text-champagne-600 hover:text-champagne-700 disabled:opacity-50 p-1"
                  >
                    <Send size={18} />
                  </button>
                </div>
                <div className="flex justify-between px-2">
                  <span className="text-[10px] text-stone-400">
                    {/* Error message or hint could go here if needed */}
                  </span>
                  <span className={`text-[10px] transition-colors ${
                    input.length >= MAX_CHARS ? 'text-red-500 font-bold' : 'text-stone-400'
                  }`}>
                    {input.length}/{MAX_CHARS}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-stone-900 text-white rounded-full flex items-center justify-center shadow-premium hover:bg-champagne-500 transition-colors"
      >
        {isOpen ? <X size={26} /> : <MessageCircle size={30} />}
      </motion.button>
    </div>
  );
};

export default AIChat;