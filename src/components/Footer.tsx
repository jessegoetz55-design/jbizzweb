import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-20 overflow-hidden border-t border-[#d4af37]/20">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] to-[#050d16]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#d4af37] to-white bg-clip-text text-transparent mb-4">
              JBizz Web Developments
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Crafting digital excellence through precision engineering and strategic design.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full flex items-center justify-center hover:bg-[#d4af37]/20 transition-all duration-300 hover:scale-110">
                <Linkedin className="w-4 h-4 text-[#d4af37]" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full flex items-center justify-center hover:bg-[#d4af37]/20 transition-all duration-300 hover:scale-110">
                <Twitter className="w-4 h-4 text-[#d4af37]" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full flex items-center justify-center hover:bg-[#d4af37]/20 transition-all duration-300 hover:scale-110">
                <Github className="w-4 h-4 text-[#d4af37]" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-[#d4af37] transition-colors duration-300">Intelligence Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#d4af37] transition-colors duration-300">Market Tracking</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#d4af37] transition-colors duration-300">Automated Lead Gen</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#d4af37] transition-colors duration-300">Custom Development</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-[#d4af37] transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#d4af37] transition-colors duration-300">Portfolio</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#d4af37] transition-colors duration-300">Case Studies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#d4af37] transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-[#d4af37] mt-0.5 flex-shrink-0" />
                <span className="break-all">contact@jbizzweb.com</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-[#d4af37] mt-0.5 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-[#d4af37] mt-0.5 flex-shrink-0" />
                <span>Los Angeles, CA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#d4af37]/20 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} JBizz Web Developments. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
