import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { servicesData } from "./Services";

export function ServiceDetail() {
  const { id } = useParams();
  const service = servicesData.find(s => s.id === id);

  if (!service) {
    return (
      <div className="pt-40 pb-24 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Service Not Found</h1>
        <Link to="/services" className="text-primary-400 hover:text-primary-300">Return to Services</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <Link to="/services" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-12 transition-colors">
          <ArrowLeft size={20} /> Back to Services
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="bg-primary-600/20 w-20 h-20 rounded-2xl flex items-center justify-center text-primary-500 mb-8">
              <service.icon size={40} />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="text-xl text-slate-400 font-light leading-relaxed mb-8">
              {service.desc}
            </p>
            <div className="inline-flex items-center gap-2 text-lg font-bold text-primary-400 bg-primary-900/30 px-6 py-3 rounded-xl border border-primary-500/20 mb-10">
              {service.highlight}
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-6">What's Included</h3>
            <ul className="space-y-4 mb-10">
              {[
                "Custom OpenClaw Agent Configuration",
                "Integration with your existing tech stack",
                "Automated workflow design & mapping",
                "24/7 Monitoring and Optimization"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="bg-primary-600/20 p-1.5 rounded-full text-primary-500 shrink-0">
                    <CheckCircle size={20} />
                  </div>
                  <span className="text-lg text-slate-300 font-light">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/onboarding"
              className="inline-flex items-center justify-center gap-3 bg-primary-600 hover:bg-primary-500 text-white px-10 py-5 rounded-full text-lg font-bold transition-all shadow-[0_0_30px_rgba(230,0,0,0.4)] hover:-translate-y-1"
            >
              Start Deployment
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl aspect-square"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/40 to-transparent mix-blend-overlay z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000&auto=format&fit=crop" 
              alt={service.title} 
              className="w-full h-full object-cover grayscale"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
