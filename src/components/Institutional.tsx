import { motion } from 'motion/react';
import { Target, TrendingUp, ShieldCheck } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

const Institutional = () => {
  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6 text-blue-500" />,
      title: "Alto Potencial de Valorização",
      desc: "Selecionamos apenas imóveis com histórico e projeção real de crescimento de patrimônio."
    },
    {
      icon: <Target className="w-6 h-6 text-purple-500" />,
      title: "Curadoria Profissional",
      desc: "Analisamos cada detalhe: construtora, localização e planta antes de apresentar a você."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
      title: "Segurança Jurídica",
      desc: "Assessoria completa para garantir uma transação tranquila e segura em cada etapa."
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-slate-900 leading-tight">
                Curadoria de Imóveis de <span className="text-blue-600">Alto Padrão</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed font-light">
                A Mattioli Imóveis atua na busca estratégica pela melhor oportunidade no mercado catarinense. Focamos em performance, design e segurança jurídica para o seu próximo patrimônio.
              </p>
            </div>

            <div className="grid gap-6">
              {benefits.map((b, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl bg-white shadow-sm border border-slate-100 italic transition-transform hover:scale-[1.02]">
                  <div className="shrink-0 w-12 h-12 rounded-lg bg-slate-50 flex items-center justify-center">
                    {b.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{b.title}</h3>
                    <p className="text-sm text-slate-500">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <WhatsAppButton location="Institutional Section" size="lg">
                Falar com especialista agora
              </WhatsAppButton>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1600607687940-4316972e0e0a?auto=format&fit=crop&q=80&w=1000" 
                alt="Modern Architecture" 
                className="w-full aspect-[4/3] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-600/10 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Institutional;
