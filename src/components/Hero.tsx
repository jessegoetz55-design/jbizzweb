import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#162238] to-[#0d1b2a]"></div>

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#d4af37] rounded-full filter blur-[128px] animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#d4af37] rounded-full filter blur-[128px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="glass-morphism p-12 rounded-3xl border border-[#d4af37]/20 backdrop-blur-xl">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-3 px-6 py-2 rounded-full bg-gradient-to-r from-[#d4af37]/10 to-transparent border border-[#d4af37]/30">
              <div className="w-2 h-2 bg-[#d4af37] rounded-full animate-pulse"></div>
              <span className="text-[#d4af37] text-sm font-semibold tracking-wider uppercase">JBizz Web Developments</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-[#d4af37] to-white bg-clip-text text-transparent leading-tight">
            Designed to Captivate.<br />Coded to Convert.
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light tracking-wide">
            Bespoke Web Development & Automated Intelligence Solutions
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#f4d03f] text-[#0a1628] font-bold rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] hover:scale-105">
              <span className="relative z-10">View Our Work</span>
            </button>
            <button className="px-8 py-4 border-2 border-[#d4af37] text-[#d4af37] font-semibold rounded-full hover:bg-[#d4af37]/10 transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]">
              Get in Touch
            </button>
          </div>
        </div>

        <div className="mt-16 animate-bounce">
          <ChevronDown className="w-8 h-8 text-[#d4af37] mx-auto" />
        </div>
      </div>
    </section>
  );
}
