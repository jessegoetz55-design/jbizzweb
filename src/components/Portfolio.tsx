import { ExternalLink, Code2 } from 'lucide-react';

const projects = [
  {
    title: 'Modern Dog Training Site',
    category: 'Web Development',
    description: 'A sophisticated platform combining elegant design with powerful booking automation, driving 300% increase in client conversions.',
    tech: ['React', 'Tailwind', 'Supabase', 'AI Integration'],
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'Lead Generator X',
    category: 'Automation & AI',
    description: 'Enterprise-grade lead generation system with intelligent qualification, automated outreach, and real-time analytics dashboard.',
    tech: ['Node.js', 'AI Models', 'API Integration', 'Analytics'],
    gradient: 'from-[#d4af37]/20 to-amber-500/20',
  },
];

export default function Portfolio() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0d1b2a] to-[#0a1628]"></div>

      <div className="absolute inset-0">
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#d4af37] rounded-full filter blur-[150px] opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-[#d4af37] text-sm font-semibold tracking-wider uppercase border border-[#d4af37]/30 px-4 py-2 rounded-full">
              Featured Work
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Portfolio of Excellence
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Each project is a testament to precision engineering and strategic design
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>

              <div className="relative h-full glass-morphism rounded-3xl border border-[#d4af37]/20 overflow-hidden group-hover:border-[#d4af37]/40 transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-[#1a2332] to-[#0d1b2a] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/10 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Code2 className="w-24 h-24 text-[#d4af37]/30 group-hover:scale-110 transition-transform duration-500" />
                  </div>

                  <div className="absolute top-4 right-4">
                    <div className="bg-[#0a1628]/80 backdrop-blur-sm border border-[#d4af37]/30 rounded-full px-4 py-2">
                      <span className="text-[#d4af37] text-sm font-semibold">{project.category}</span>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-[#d4af37] text-[#0a1628] px-6 py-3 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      View Project
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#d4af37] transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, tIndex) => (
                      <span
                        key={tIndex}
                        className="px-3 py-1 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full text-[#d4af37] text-xs font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="group px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#f4d03f] text-[#0a1628] font-bold rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] hover:scale-105">
            <span className="flex items-center gap-2">
              View All Projects
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
