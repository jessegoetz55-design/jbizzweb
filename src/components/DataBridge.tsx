import { Database, Brain, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function DataBridge() {
  const [flowActive, setFlowActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlowActive(true);
      setTimeout(() => setFlowActive(false), 3000);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b2a] via-[#1a2332] to-[#0d1b2a]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#d4af37] to-white bg-clip-text text-transparent">
            The Custom Data Bridge
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Watch raw data transform into actionable intelligence in real-time
          </p>
        </div>

        <div className="glass-morphism p-8 md:p-12 rounded-3xl border border-[#d4af37]/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-[#1a2332] to-[#0d1b2a] p-8 rounded-2xl border border-[#d4af37]/30 hover:border-[#d4af37]/50 transition-all duration-300">
                <Database className="w-16 h-16 text-[#d4af37] mb-4 mx-auto" />
                <h3 className="text-xl font-bold text-white text-center mb-2">Raw Web Data</h3>
                <p className="text-gray-400 text-center text-sm">Unstructured information streams</p>
                <div className="mt-4 space-y-2">
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#d4af37] to-transparent animate-pulse" style={{ width: '60%' }}></div>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#d4af37] to-transparent animate-pulse" style={{ width: '80%', animationDelay: '0.2s' }}></div>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#d4af37] to-transparent animate-pulse" style={{ width: '45%', animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <svg className="w-full h-32" viewBox="0 0 200 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#d4af37" stopOpacity="0" />
                    <stop offset="50%" stopColor="#d4af37" stopOpacity="1" />
                    <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M 0 50 Q 50 20, 100 50 T 200 50"
                  stroke="url(#glowGradient)"
                  strokeWidth="2"
                  fill="none"
                  className={flowActive ? 'flow-line-active' : 'flow-line'}
                />
                <circle r="4" fill="#d4af37" className={flowActive ? 'flow-particle' : ''}>
                  <animateMotion
                    dur="3s"
                    repeatCount="indefinite"
                    path="M 0 50 Q 50 20, 100 50 T 200 50"
                  />
                </circle>
              </svg>
              <Brain className="absolute w-12 h-12 text-[#d4af37] animate-pulse" />
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-l from-[#d4af37]/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-[#1a2332] to-[#0d1b2a] p-8 rounded-2xl border border-[#d4af37]/30 hover:border-[#d4af37]/50 transition-all duration-300">
                <TrendingUp className="w-16 h-16 text-[#d4af37] mb-4 mx-auto" />
                <h3 className="text-xl font-bold text-white text-center mb-2">Market Intelligence</h3>
                <p className="text-gray-400 text-center text-sm">Actionable insights delivered</p>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-[#d4af37]">247%</div>
                    <div className="text-xs text-gray-400">Growth</div>
                  </div>
                  <div className="bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-[#d4af37]">98%</div>
                    <div className="text-xs text-gray-400">Accuracy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
