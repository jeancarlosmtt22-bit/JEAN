import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & About */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
                <img 
                  src="https://i.postimg.cc/ryB2vx0Z/file-000000002574720eb0480dc51dd8893d.png" 
                  alt="Mattioli Imóveis" 
                  className="h-10 w-auto object-contain brightness-0 invert"
                  referrerPolicy="no-referrer"
                />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Curadoria especializada em imóveis de alto padrão e investimento em Santa Catarina.
            </p>
            <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                    <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                    <Facebook className="w-5 h-5" />
                </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Navegação</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Início</a></li>
                <li><a href="#imoveis" className="hover:text-white transition-colors">Imóveis</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Investimentos</a></li>
            </ul>
          </div>

          {/* Contact 1 */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contato</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
                <li className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-blue-400" />
                    <a href="https://wa.me/5547997069799" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">+55 (47) 99706-9799</a>
                </li>
                <li className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-blue-400" />
                    <a href="mailto:mattiolijean22@gmail.com" className="hover:text-white transition-colors">mattiolijean22@gmail.com</a>
                </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-bold text-lg mb-6">Localização</h4>
            <div className="flex gap-3 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <p>Balneário Camboriú, Santa Catarina - Brasil</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-slate-500 text-xs flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 Mattioli Imóveis. Todos os direitos reservados. CRECI/SC: 00000-J</p>
          <div className="flex gap-6">
              <a href="#" className="hover:text-slate-300">Privacidade</a>
              <a href="#" className="hover:text-slate-300">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
