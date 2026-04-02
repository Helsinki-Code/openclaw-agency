import { motion } from "motion/react";
import { Search, FileSignature, Database, Settings, Activity, Rocket, ArrowRight, CheckCircle2, ClipboardList, ShieldCheck, Zap } from "lucide-react";

export function Onboarding() {
  const phases = [
    {
      name: "Phase 1: Strategy & Legal",
      color: "from-blue-500 to-cyan-500",
      steps: [
        {
          icon: Search,
          title: "Discovery & Strategy Mapping",
          desc: "We conduct a deep-dive audit of your current business processes. We identify high-impact automation opportunities, define the AI agent's persona, and map out the required tool integrations (CRM, Slack, Email, etc.).",
          details: ["Workflow Audit", "ROI Projection", "Tool Inventory"]
        },
        {
          icon: FileSignature,
          title: "Proposal & Digital Agreement",
          desc: "Once the strategy is approved, we generate a detailed technical proposal and Service Level Agreement (SLA). You can review and sign all documents digitally through our secure client portal.",
          details: ["Fixed-Price Quote", "SLA Definition", "E-Signature"]
        }
      ]
    },
    {
      name: "Phase 2: Knowledge & Build",
      color: "from-primary-500 to-orange-500",
      steps: [
        {
          icon: Database,
          title: "Automated Data Collection",
          desc: "Our system automatically ingests your company data. You provide access to your knowledge base, FAQs, and brand guidelines. We use this to build the agent's RAG (Retrieval-Augmented Generation) memory.",
          details: ["Secure Data Upload", "Vector DB Setup", "Brand Voice Tuning"]
        },
        {
          icon: Settings,
          title: "Agent Configuration & API Setup",
          desc: "Our engineers configure the OpenClaw framework. We write custom system prompts, set up autonomous tool-calling capabilities, and establish secure API connections to your tech stack.",
          details: ["Custom Prompting", "API Integration", "Tool-Calling Logic"]
        }
      ]
    },
    {
      name: "Phase 3: QA & Deployment",
      color: "from-green-500 to-emerald-500",
      steps: [
        {
          icon: Activity,
          title: "Rigorous Testing & QA",
          desc: "The agent undergoes extensive testing in a sandbox environment. We simulate thousands of interactions to ensure accuracy, prevent hallucinations, and verify that all tool-calls execute correctly.",
          details: ["Edge-Case Testing", "Hallucination Check", "Security Audit"]
        },
        {
          icon: Rocket,
          title: "Live Deployment & Handover",
          desc: "Your OpenClaw agent goes live. We provide a full handover session, including a dashboard for monitoring performance, conversation logs, and real-time optimization tools.",
          details: ["Production Launch", "Monitoring Dashboard", "Staff Training"]
        }
      ]
    }
  ];

  const prerequisites = [
    { title: "Knowledge Base", desc: "PDFs, Docs, or URLs containing your company's core information." },
    { title: "API Access", desc: "Credentials for the tools you want the agent to interact with (e.g., HubSpot, Slack)." },
    { title: "Brand Guidelines", desc: "A brief overview of your brand's tone, voice, and communication style." },
    { title: "Success Metrics", desc: "Clear KPIs for what you want the AI agent to achieve (e.g., 50% faster response time)." }
  ];

  return (
    <div className="pt-32 pb-24 relative overflow-hidden bg-dark-950">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-600/5 blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-600/5 blur-[120px] -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-bold mb-6"
          >
            <Zap size={16} className="animate-pulse" />
            The OpenClaw Deployment Framework
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-extrabold text-white mb-8 tracking-tight"
          >
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">Onboarding</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-slate-400 font-light max-w-3xl mx-auto leading-relaxed"
          >
            A transparent, professional, and automated workflow designed to take you from initial contact to a fully autonomous AI workforce in record time.
          </motion.p>
        </div>

        {/* Prerequisites Section */}
        <div className="mb-32">
          <div className="max-w-5xl mx-auto bg-white/5 border border-white/10 rounded-[3rem] p-8 md:p-12 backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <ClipboardList size={120} className="text-white" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <ShieldCheck className="text-primary-500" />
                Onboarding Prerequisites
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {prerequisites.map((item, i) => (
                  <div key={i} className="space-y-3">
                    <h4 className="text-primary-400 font-bold uppercase tracking-wider text-sm">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Workflow Phases */}
        <div className="space-y-32 relative">
          {/* Vertical Progress Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-blue-500/50 to-emerald-500/50 -translate-x-1/2 opacity-20"></div>

          {phases.map((phase, phaseIndex) => (
            <div key={phaseIndex} className="relative">
              <div className="text-center mb-16">
                <h2 className={`text-2xl font-black uppercase tracking-[0.3em] bg-gradient-to-r ${phase.color} bg-clip-text text-transparent inline-block`}>
                  {phase.name}
                </h2>
              </div>

              <div className="space-y-12 lg:space-y-0">
                {phase.steps.map((step, stepIndex) => {
                  const isEven = (phaseIndex * 2 + stepIndex) % 2 === 0;
                  return (
                    <motion.div 
                      key={stepIndex}
                      initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      className={`relative flex flex-col lg:flex-row items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}
                    >
                      {/* Center Node */}
                      <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-dark-950 border-2 border-white/20 items-center justify-center z-10">
                        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${phase.color} shadow-[0_0_15px_rgba(230,0,0,0.5)]`}></div>
                      </div>

                      {/* Content Box */}
                      <div className={`w-full lg:w-1/2 ${isEven ? 'lg:pl-20' : 'lg:pr-20'}`}>
                        <div className="group bg-white/5 p-8 md:p-10 rounded-[2.5rem] border border-white/10 hover:border-primary-500/30 transition-all duration-500 backdrop-blur-sm relative overflow-hidden">
                          <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${phase.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 blur-3xl`}></div>
                          
                          <div className={`bg-gradient-to-br ${phase.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                            <step.icon size={32} />
                          </div>
                          
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 group-hover:text-primary-400 transition-colors">
                            {step.title}
                          </h3>
                          
                          <p className="text-lg text-slate-400 font-light leading-relaxed mb-8">
                            {step.desc}
                          </p>

                          <div className="flex flex-wrap gap-3">
                            {step.details.map((detail, i) => (
                              <span key={i} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-slate-300 text-xs font-bold uppercase tracking-widest">
                                <CheckCircle2 size={12} className="text-primary-500" />
                                {detail}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-40 text-center"
        >
          <div className="bg-gradient-to-br from-primary-900/40 to-dark-950 border border-primary-500/30 p-12 md:p-20 rounded-[4rem] max-w-5xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop')] opacity-10 mix-blend-overlay bg-cover bg-center"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">Ready to start your <span className="text-primary-500">AI Transformation?</span></h2>
              <p className="text-xl md:text-2xl text-slate-300 mb-12 font-light max-w-2xl mx-auto">Skip the manual work and join the ranks of businesses scaling with autonomous OpenClaw agents.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a 
                  href="https://calendly.com/openclaw/onboarding" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-primary-600 hover:bg-primary-500 text-white px-12 py-6 rounded-full text-xl font-bold transition-all shadow-[0_0_50px_-10px_rgba(230,0,0,0.5)] hover:shadow-[0_0_70px_-15px_rgba(230,0,0,0.6)] hover:-translate-y-1"
                >
                  Begin Onboarding
                  <ArrowRight size={24} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
