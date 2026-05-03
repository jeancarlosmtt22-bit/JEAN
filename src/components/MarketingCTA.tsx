import { motion } from 'motion/react';
import WhatsAppButton from './WhatsAppButton';

const MarketingCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-dark">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-purple-600/20"></div>
        {/* Animated background shapes */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-1/2 -left-1/4 w-[1000px] h-[1000px] bg-blue-500/20 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 15, repeat: Infinity, delay: 2 }}
          className="absolute -bottom-1/2 -right-1/4 w-[1000px] h-[1000px] bg-purple-500/20 rounded-full blur-[120px]"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="max-w-3xl mx-auto space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/80 border border-white/20 text-xs font-semibold uppercase tracking-widest backdrop-blur-md">
            Oportunidades Limitadas
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Receba oportunidades exclusivas antes de todo mundo
          </h2>
          
          <p className="text-xl text-white/60 leading-relaxed max-w-2xl mx-auto">
            Sem spam. Apenas imóveis selecionados que realmente valem a pena para seu perfil e objetivo de investimento.
          </p>

          <div className="flex flex-col items-center gap-6 pt-4">
            <WhatsAppButton location="Strong CTA Section" size="xl" variant="primary" className="px-12 py-6 text-2xl">
              Falar no WhatsApp agora
            </WhatsAppButton>
            <p className="text-white/40 text-sm italic">
              *Atendimento rápido e personalizado, direto com o especialista.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketingCTA;
