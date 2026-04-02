import { motion } from "motion/react";
import { Search, FileSignature, Database, Settings, Activity, Rocket, ArrowRight } from "lucide-react";

export function Onboarding() {
  const steps = [
    {
      icon: Search,
      title: "1. Discovery & Strategy Mapping",
      desc: "We analyze your current workflows, identify bottlenecks, and map out exactly where an OpenClaw agent will create the highest ROI. We define the agent's persona, required tools, and success metrics."
    },
    {
      icon: FileSignature,
      title: "2. Proposal & Automated Agreement",
      desc: "You receive a detailed technical proposal and SLA. Using our automated portal, you can review, approve, and sign the documents digitally to kick off the project immediately."
    },
    {
      icon: Database,
      title: "3. Data Collection & Knowledge Base",
      desc: "You upload your company documents, FAQs, and brand guidelines to our secure portal. We process this data to build the OpenClaw agent's persistent memory and vector database."
    },
    {
      icon: Settings,
      title: "4. Agent Configuration & Integration",
      desc: "Our engineers build the agent. We configure the OpenClaw framework, write custom system prompts, and integrate the necessary tools (CRM, email, Slack, WhatsApp, etc.) via secure APIs."
    },
    {
      icon: Activity,
      title: "5. Staging, Testing & QA",
      desc: "The agent is deployed in a sandbox environment. We run rigorous simulated conversations and workflow tests to ensure it handles edge cases gracefully and never hallucinates critical data."
    },
    {
      icon: Rocket,
      title: "6. Deployment & Optimization",
      desc: "Your OpenClaw agent goes live. We monitor its performance, analyze conversation logs, and continuously optimize its prompts and tool usage to improve efficiency over time."
    }
  ];

  return (
    <div className="pt-32 pb-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-600/5 blur-[120px] -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-6"
          >
            Client <span className="text-primary-500">Onboarding</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 font-light"
          >
            From initial contact to a fully deployed autonomous workforce. Here is exactly how we build your OpenClaw system.
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2"></div>

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Center Node */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-dark-950 border-4 border-primary-600 items-center justify-center z-10 shadow-[0_0_20px_rgba(230,0,0,0.4)]">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>

                {/* Content Box */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16'}`}>
                  <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 hover:border-primary-500/30 transition-colors backdrop-blur-sm">
                    <div className="bg-primary-600/20 w-14 h-14 rounded-2xl flex items-center justify-center text-primary-500 mb-6">
                      <step.icon size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-slate-400 font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="bg-gradient-to-br from-primary-900/40 to-dark-950 border border-primary-500/30 p-12 rounded-[3rem] max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop')] opacity-10 mix-blend-overlay bg-cover bg-center"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">Ready to automate your operations?</h2>
            <p className="text-xl text-slate-300 mb-8 font-light relative z-10">Skip the wait and start the discovery process today.</p>
            <button className="relative z-10 inline-flex items-center justify-center gap-3 bg-primary-600 hover:bg-primary-500 text-white px-10 py-5 rounded-full text-lg font-bold transition-all shadow-[0_0_40px_-10px_rgba(230,0,0,0.5)] hover:shadow-[0_0_60px_-15px_rgba(230,0,0,0.6)] hover:-translate-y-1">
              Begin Onboarding
              <ArrowRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
