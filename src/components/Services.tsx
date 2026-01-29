import { LineChart, Target, Zap } from 'lucide-react';

const services = [
  {
    icon: LineChart,
    title: 'Intelligence Solutions',
    description: 'Transform raw market data into strategic advantages with custom AI-powered analytics engines.',
    features: ['Predictive Analytics', 'Custom Dashboards', 'Real-time Monitoring'],
  },
  {
    icon: Target,
    title: 'Market Tracking',
    description: 'Monitor competitor movements, industry trends, and market shifts with precision automation.',
    features: ['Competitor Analysis', 'Trend Detection', 'Sentiment Tracking'],
  },
  {
    icon: Zap,
    title: 'Automated Lead Gen',
    description: 'Deploy intelligent systems that identify, qualify, and engage prospects 24/7 without manual input.',
    features: ['Smart Qualification', 'Multi-Channel Outreach', 'Conversion Optimization'],
  },
];

export default function Services() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b2a] to-[#0a1628]"></div>

      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#d4af37] rounded-full filter blur-[150px] opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-[#d4af37] text-sm font-semibold tracking-wider uppercase border border-[#d4af37]/30 px-4 py-2 rounded-full">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Elite Solutions for Modern Businesses
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Where cutting-edge technology meets strategic execution
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/20 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                <div className="relative h-full glass-morphism p-8 rounded-3xl border border-[#d4af37]/20 hover:border-[#d4af37]/40 transition-all duration-300 hover:-translate-y-2">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#d4af37]/10 to-transparent rounded-bl-full"></div>

                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#d4af37] to-[#f4d03f] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-[#0a1628]" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#d4af37] transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-3">
                      {service.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full"></div>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-[#d4af37]/20">
                      <button className="text-[#d4af37] font-semibold group-hover:gap-3 flex items-center gap-2 transition-all duration-300">
                        Learn More
                        <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
