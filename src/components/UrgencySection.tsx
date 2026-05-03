import { motion } from 'motion/react';
import WhatsAppButton from './WhatsAppButton';
import { Timer, AlertTriangle } from 'lucide-react';

const UrgencySection = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[3rem] p-8 md:p-16 flex flex-col items-center text-center space-y-8 shadow-2xl relative overflow-hidden">
          {/* Subtle glow effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]"></div>
          
          <motion.div 
            animate={{ 
                scale: [1, 1.05, 1],
                color: ['#ef4444', '#f87171', '#ef4444']
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex items-center gap-2 font-bold uppercase tracking-[0.2em] text-red-500"
          >
            <AlertTriangle className="w-5 h-5" />
            Oportunidades Limitadas
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold text-white max-w-4xl leading-tight">
            As melhores oportunidades não ficam disponíveis por muito tempo
          </h2>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
            Imóveis com alto potencial de valorização em Camboriú e Balneário são vendidos rapidamente. Não perca o próximo grande movimento do mercado.
          </p>

          <div className="flex flex-col items-center gap-6">
            <WhatsAppButton location="Urgency Section" size="lg" variant="primary">
                Receber oportunidades agora
            </WhatsAppButton>
            
            <div className="flex items-center gap-3 text-slate-500 border border-slate-700/50 px-6 py-3 rounded-full bg-slate-800/50">
                <Timer className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-semibold tracking-wide">Atualizado há 15 minutos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;
