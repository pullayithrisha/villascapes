'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Sparkles } from 'lucide-react';

interface Message {
  sender: 'ai' | 'user';
  text: string;
}

export default function AIPropertyAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'ai', text: 'Welcome to Villa Scapes. I am your premium digital concierge. Ask me anything about layouts, locations, amenities, or pricing.' },
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const faqDatabase = [
    {
      keywords: ['price', 'pricing', 'cost', 'crore', 'rate'],
      answer: 'Villa Scapes original built pricing launched lower, but current luxury resale market estimates range from ₹1.75 Cr to ₹3.50+ Cr depending on plot size (325 to 450+ Sq Yards) and villa variant.',
    },
    {
      keywords: ['location', 'gandipet', 'address', 'connectivity', 'financial district', 'distance'],
      answer: 'We are situated in Gandipet, Hyderabad. Connecting points: 2 Km from ORR, 8 Km from Financial District, 5 Km from Kokapet Neopolis SEZ, and adjacent to the peaceful Osman Sagar lake district.',
    },
    {
      keywords: ['vastu', 'vasthu', 'direction', 'compliance'],
      answer: 'Yes! Every villa is designed in G+2 structures with 100% Vastu compliance, offering ideal ventilation, specific entrance alignments, and open visual view corridors.',
    },
    {
      keywords: ['amenities', 'clubhouse', 'pool', 'gym', 'facilities'],
      answer: 'Our community features a west-facing Sunset view Clubhouse, Swimming Pool, Fully equipped Gym, Nature walkways, and a cool blue central water body focal point.',
    },
    {
      keywords: ['builder', 'nk leasing', 'developer', 'nklc', 'history'],
      answer: 'Built by NK Leasing & Constructions Ltd., pioneers in Hyderabad with 45+ years legacy, creators of landmark sites like Taramandal Complex and Chenoy Trade Centre.',
    },
  ];

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputVal;
    if (!text.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { sender: 'user', text }]);
    if (!textToSend) setInputVal('');

    // Simulate AI typing
    setIsTyping(true);

    setTimeout(() => {
      let matchedAnswer = 'I appreciate your enquiry. To get detailed resale brochures or custom tours, you can use the callback scheduler or connect directly with our relationship manager.';
      
      const query = text.toLowerCase();
      for (const entry of faqDatabase) {
        if (entry.keywords.some((k) => query.includes(k))) {
          matchedAnswer = entry.answer;
          break;
        }
      }

      setMessages((prev) => [...prev, { sender: 'ai', text: matchedAnswer }]);
      setIsTyping(false);
    }, 1200);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const quickQuestions = [
    'How much is a villa?',
    'Where is it located?',
    'Is it Vastu compliant?',
    'Who is the builder?',
  ];

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-6 right-24 z-40 hidden md:block">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-navy border border-gold/45 text-gold hover:text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 group"
          aria-label="Ask AI Assistant"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Sparkles className="w-6 h-6 animate-pulse" />}
        </button>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 w-96 h-[500px] bg-navy border border-gold/20 text-white rounded-md shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-navy-mid border-b border-gold/15 p-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gold/10 text-gold flex items-center justify-center border border-gold/25">
                  <Sparkles className="w-4 h-4 shrink-0" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-accent tracking-wider text-gold">AI ASSISTANT</span>
                  <span className="text-[10px] text-white/50 font-body">Villa Scapes Concierge</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/60 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 text-xs font-body">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`max-w-[80%] p-3 rounded-sm leading-relaxed ${
                    msg.sender === 'ai'
                      ? 'bg-white/5 text-white/90 self-start border border-white/5'
                      : 'bg-gold text-navy font-semibold self-end'
                  }`}
                >
                  {msg.text}
                </div>
              ))}
              {isTyping && (
                <div className="bg-white/5 text-white/40 self-start p-3 rounded-sm border border-white/5 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" />
                  <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                  <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompts */}
            {messages.length === 1 && !isTyping && (
              <div className="p-4 flex flex-wrap gap-2 border-t border-white/5 shrink-0 bg-navy-mid/30">
                {quickQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => handleSend(q)}
                    className="text-[10px] bg-white/5 hover:bg-gold/10 hover:text-gold border border-white/10 hover:border-gold/30 px-3 py-1.5 rounded-full transition-colors text-white/70"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Chat Input */}
            <div className="p-4 border-t border-gold/15 bg-navy-mid shrink-0">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Ask a question about Villa Scapes..."
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  className="flex-1 bg-white/5 border border-white/10 focus:border-gold outline-none px-4 py-2.5 text-xs text-white placeholder-white/20 rounded-xs"
                />
                <button
                  onClick={() => handleSend()}
                  className="w-10 h-10 bg-gold text-navy hover:bg-gold-light flex items-center justify-center rounded-xs transition-colors shrink-0"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
