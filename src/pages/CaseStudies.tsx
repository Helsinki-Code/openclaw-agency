import { motion } from "motion/react";
import { ArrowRight, TrendingUp, Clock, DollarSign, Users } from "lucide-react";
import { caseStudiesData as cases } from "../data/caseStudies";

export function CaseStudies() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-6"
          >
            Real-World <span className="text-primary-500">Results</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 font-light"
          >
            See how businesses are transforming their operations with OpenClaw autonomous agents.
          </motion.p>
        </div>

        <div className="space-y-32">
          {cases.map((study, index) => (
            <motion.div 
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl aspect-[4/3] group">
                  <div className="absolute inset-0 bg-primary-600/10 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 z-20 flex gap-2">
                    <span className="px-3 py-1 bg-primary-500 text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                      {study.status}
                    </span>
                    <span className="px-3 py-1 bg-black/50 backdrop-blur-md text-white text-xs font-bold rounded-full border border-white/10">
                      {study.date}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary-400 text-sm font-bold">
                      {study.industry}
                    </span>
                    <span className="text-slate-500 text-sm font-medium">Case #{study.id.toString().padStart(3, '0')}</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
                    {study.title}
                  </h2>
                  <p className="text-xl text-slate-400 font-light leading-relaxed mb-8">
                    {study.content}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {study.metrics.map((metric, i) => (
                    <div key={i} className="bg-white/5 p-5 rounded-2xl border border-white/10 hover:border-primary-500/50 transition-colors group/metric">
                      <metric.icon className="text-primary-500 mb-3 group-hover/metric:scale-110 transition-transform" size={24} />
                      <div className="text-2xl font-extrabold text-white mb-1">{metric.value}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wider font-bold">{metric.label}</div>
                    </div>
                  ))}
                </div>

                <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                  <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white text-2xl font-serif">"</div>
                  <p className="text-lg text-slate-300 italic mb-6 leading-relaxed">
                    {study.quote}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-white font-bold">{study.author}</span>
                      <span className="text-slate-500 text-sm">{study.client}</span>
                    </div>
                    <a 
                      href={study.citation} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary-400 hover:text-primary-300 text-sm font-bold transition-colors"
                    >
                      View Citation <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
