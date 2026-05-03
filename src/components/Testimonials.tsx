import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Ricardo Silva",
    role: "Investidor de São Paulo",
    text: "Atendimento impecável. A Mattioli me apresentou imóveis com rentabilidade acima da média do mercado em Balneário Camboriú. Recomendo fortemente.",
    rating: 5
  },
  {
    name: "Ana Carolina",
    role: "Empresária",
    text: "Encontrei meu apartamento dos sonhos em Camboriú. Todo o processo foi muito rápido e transparente. O suporte jurídico me deu muita segurança.",
    rating: 5
  },
  {
    name: "Marcos Oliveira",
    role: "Proprietário",
    text: "A curadoria é o diferencial. Eles não tentam te vender qualquer coisa, eles encontram o que realmente faz sentido para você.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
              O que dizem nossos <span className="text-blue-600">Clientes</span>
            </h2>
            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-slate-500 font-medium tracking-wide">
                + de 500 famílias e investidores satisfeitos
            </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i * 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col justify-between group hover:bg-white hover:shadow-2xl transition-all duration-500"
            >
              <div className="space-y-4">
                <Quote className="w-10 h-10 text-blue-100 group-hover:text-blue-200 transition-colors" />
                <p className="text-slate-600 leading-relaxed text-lg italic">
                  "{t.text}"
                </p>
              </div>
              <div className="mt-8 pt-6 border-top border-slate-200">
                <div className="font-bold text-slate-900">{t.name}</div>
                <div className="text-sm text-slate-400 font-medium">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
