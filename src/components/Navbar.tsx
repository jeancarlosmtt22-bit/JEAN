import { motion } from 'motion/react';
import WhatsAppButton from './WhatsAppButton';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-lg border-b border-white/20">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <img 
            src="https://i.postimg.cc/ryB2vx0Z/file-000000002574720eb0480dc51dd8893d.png" 
            alt="Mattioli Imóveis" 
            className="h-12 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          <WhatsAppButton location="Navbar" size="sm" variant="secondary" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
