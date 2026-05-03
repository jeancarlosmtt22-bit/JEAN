import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { trackWhatsAppClick } from '../lib/tracking';

const WHATSAPP_URL = "https://wa.me/5547997069799";

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setShowTooltip(true);
    }, 2000);

    const tooltipTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 8000);

    return () => {
      clearTimeout(timer);
      clearTimeout(tooltipTimer);
    };
  }, []);

  const handleClick = () => {
    trackWhatsAppClick('Floating Button');
    window.open(WHATSAPP_URL, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isVisible && showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white p-4 rounded-2xl shadow-2xl border border-slate-100 max-w-[240px] relative mb-2"
          >
            <button 
              onClick={() => setShowTooltip(false)}
              className="absolute -top-2 -right-2 bg-slate-200 p-1 rounded-full text-slate-500 hover:bg-slate-300 transition-colors"
            >
              <X className="w-3 h-3" />
            </button>
            <p className="text-sm text-slate-600 font-medium leading-tight">
              Olá! Posso te enviar as melhores oportunidades de Balneário Camboriú?
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleClick}
            className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 flex items-center justify-center relative group"
            id="floating-whatsapp-btn"
          >
            <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25 group-hover:hidden"></div>
            <MessageCircle className="w-8 h-8" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingWhatsApp;
