import { motion } from 'motion/react';
import { MapPin, Maximize, BedDouble, Bath, TrendingUp } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

const properties = [
  {
    id: 1,
    title: "Residencial Diamond Tower",
    location: "Balneário Camboriú, SC",
    price: "Sob consulta",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800",
    beds: 4,
    baths: 4,
    size: "280m²",
    tag: "Alta Valorização",
    type: "Lançamento"
  },
  {
    id: 2,
    title: "Ocean View Residence",
    location: "Camboriú, SC",
    price: "Sob consulta",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
    beds: 3,
    baths: 2,
    size: "145m²",
    tag: "Excelente Investimento",
    type: "Pronto para morar"
  },
  {
    id: 3,
    title: "Infinity Coast Penthouse",
    location: "Balneário Camboriú, SC",
    price: "Sob consulta",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    beds: 5,
    baths: 6,
    size: "450m²",
    tag: "Últimas Unidades",
    type: "Em construção"
  }
];

const PropertyList = () => {
  return (
    <section id="imoveis" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Oportunidades em <span className="text-blue-600">Destaque</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-xl italic">
              Imóveis selecionados com foco em rentabilidade e qualidade de vida.
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-sm font-medium text-slate-400">
            <span className="w-12 h-[1px] bg-slate-200"></span>
            Curadoria Exclusiva Mattioli
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="px-3 py-1 rounded-full bg-brand-dark/90 text-white text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">
                    {p.type}
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-600/90 text-white text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">
                    <TrendingUp className="w-3 h-3" />
                    {p.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-1 text-slate-400 text-xs font-medium">
                    <MapPin className="w-3 h-3" />
                    {p.location}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {p.title}
                  </h3>
                </div>

                <div className="flex items-center justify-between py-4 border-y border-slate-50">
                  <div className="flex flex-col items-center gap-1">
                    <BedDouble className="w-4 h-4 text-slate-400" />
                    <span className="text-xs font-semibold text-slate-600">{p.beds} Beds</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-slate-400">
                    <Bath className="w-4 h-4" />
                    <span className="text-xs font-semibold text-slate-600">{p.baths} Baths</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-slate-400">
                    <Maximize className="w-4 h-4" />
                    <span className="text-xs font-semibold text-slate-600">{p.size}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4 pt-2">
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Valor</div>
                    <div className="text-lg font-bold text-slate-900">{p.price}</div>
                  </div>
                  <WhatsAppButton 
                    location={`Property Card: ${p.title}`} 
                    size="md" 
                    variant="secondary"
                    className="w-full sm:w-auto"
                  >
                    Saber mais
                  </WhatsAppButton>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <WhatsAppButton location="Below Property List" size="lg" variant="primary">
                Ver lista completa no WhatsApp
            </WhatsAppButton>
        </div>
      </div>
    </section>
  );
};

export default PropertyList;
