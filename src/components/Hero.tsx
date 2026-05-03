import { motion } from 'motion/react';
import WhatsAppButton from './WhatsAppButton';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
          alt="Luxury Skyscrapers Balneário Camboriú" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/20 text-blue-400 border border-blue-500/30 text-xs font-semibold mb-6 uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Oportunidade Exclusiva
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
              Invista ou more com alto potencial de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">valorização</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              Curadoria especializada em imóveis na planta e prontos nas regiões mais nobres de Camboriú e Balneário Camboriú. Patrimônios extraordinários para quem busca exclusividade.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <WhatsAppButton location="Hero Main" size="lg" variant="primary">
                Receber oportunidades no WhatsApp
              </WhatsAppButton>
              
              <button 
                onClick={() => document.getElementById('imoveis')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center gap-2 text-white/80 font-medium text-base hover:text-white transition-colors"
              >
                Ver imóveis disponíveis
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-2 gap-12">
              <div>
                <div className="text-3xl font-light text-white tracking-tighter">R$ 2Bi+</div>
                <div className="text-xs uppercase tracking-widest text-slate-500 mt-1">VGV Intermediado</div>
              </div>
              <div>
                <div className="text-3xl font-light text-white tracking-tighter">100%</div>
                <div className="text-xs uppercase tracking-widest text-slate-500 mt-1">Curadoria de Luxo</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
