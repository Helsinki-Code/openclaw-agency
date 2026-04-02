import { motion } from "motion/react";
import { ArrowRight, Bot, Zap, Shield, Workflow, Database, Layers, CheckCircle, XCircle, CheckCircle2, TrendingUp, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { servicesData } from "./Services";
import { caseStudiesData } from "../data/caseStudies";

export function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative pt-40 pb-24 md:pt-56 md:pb-40 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-900/20 via-dark-950 to-dark-950"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-600/10 blur-[120px] rounded-full -z-10"></div>

        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-medium mb-8 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            Premium OpenClaw Setup Agency
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.1] mb-8"
          >
            Turn OpenClaw Into Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">Autonomous AI Workforce</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light"
          >
            We don't build chatbots. We deploy OpenClaw-powered AI agents that actually execute tasks, run workflows, and grow your business—24/7.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a
              href="https://calendly.com/openclaw/onboarding"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-primary-600 hover:bg-primary-500 text-white px-10 py-5 rounded-full text-lg font-bold transition-all shadow-[0_0_40px_-10px_rgba(230,0,0,0.5)] hover:shadow-[0_0_60px_-15px_rgba(230,0,0,0.6)] hover:-translate-y-1"
            >
              Deploy Your Agent
              <ArrowRight size={20} />
            </a>
            <Link
              to="/case-studies"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-10 py-5 rounded-full text-lg font-bold transition-all backdrop-blur-sm"
            >
              View Case Studies
            </Link>
          </motion.div>
        </div>
      </section>

      {/* IMAGE BREAK SECTION */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl aspect-video max-w-6xl mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop" 
              alt="AI Neural Network" 
              className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-primary-600/10 mix-blend-overlay"></div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                The Shift from AI Assistants to <span className="text-primary-500">AI Operators</span>
              </h2>
              <p className="text-xl text-slate-400 mb-10 font-light">
                Unlike traditional chatbots that wait for your prompts, OpenClaw agents have persistent memory, use tools, and perform multi-step workflows across 50+ platforms simultaneously.
              </p>
              
              <ul className="space-y-6">
                {[
                  "Send emails and manage communications",
                  "Run scripts and execute code",
                  "Manage files and databases",
                  "Automate workflows end-to-end"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="bg-primary-600/20 p-2 rounded-full text-primary-500">
                      <CheckCircle size={24} />
                    </div>
                    <span className="text-lg text-slate-200 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {[
                { icon: Database, title: "Persistent Memory", desc: "Remembers past interactions and context." },
                { icon: Layers, title: "Tool Integration", desc: "Connects to your existing software stack." },
                { icon: Workflow, title: "Multi-Step Workflows", desc: "Executes complex sequences autonomously." },
                { icon: Shield, title: "Self-Hosted Control", desc: "Runs on your infrastructure for privacy." }
              ].map((feature, i) => (
                <div key={i} className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <div className="bg-primary-600/20 w-14 h-14 rounded-2xl flex items-center justify-center text-primary-500 mb-6">
                    <feature.icon size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                  <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROBLEM / SOLUTION */}
      <section className="py-32 bg-dark-900 border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-dark-950 p-10 md:p-12 rounded-[2.5rem] border border-white/5"
            >
              <div className="flex items-center gap-4 mb-8">
                <XCircle className="text-slate-500" size={40} />
                <h2 className="text-3xl font-bold text-white">The Problem</h2>
              </div>
              <h3 className="text-2xl font-semibold text-slate-300 mb-6">
                Most "AI Automation" Tools Are Just Fancy Chatbots
              </h3>
              <p className="text-lg text-slate-400 mb-8 font-light">
                Let's be honest. Most AI tools today require constant prompting, don't take real action, break in multi-step workflows, and still need manual execution.
              </p>
              <ul className="space-y-4">
                {["You still copy → paste → execute", "You have to monitor every step", "You handle the real work yourself"].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-400">
                    <XCircle className="text-slate-600 shrink-0" size={20} />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-br from-primary-900/40 to-dark-950 p-10 md:p-12 rounded-[2.5rem] border border-primary-500/20 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/20 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <CheckCircle2 className="text-primary-500" size={40} />
                <h2 className="text-3xl font-bold text-white">The Solution</h2>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-6 relative z-10">
                We Turn OpenClaw Into a Fully Operational AI System
              </h3>
              <p className="text-lg text-slate-300 mb-8 font-light relative z-10">
                OpenClaw Setup Agency builds real autonomous AI agents tailored to your workflows. We don't just "set up OpenClaw." We transform it into your infrastructure.
              </p>
              <ul className="space-y-4 relative z-10">
                {["A lead generation machine", "A content automation engine", "A customer communication system", "A self-running backend infrastructure"].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-200">
                    <CheckCircle2 className="text-primary-500 shrink-0" size={20} />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Services Powered by OpenClaw
            </h2>
            <p className="text-xl text-slate-400 font-light">
              We engineer OpenClaw into specialized business assets that handle operations, communication, and growth on autopilot.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`bg-white/5 p-10 rounded-[2rem] border border-white/10 hover:border-primary-500/50 transition-all group ${
                  i === 0 ? "md:col-span-2 lg:col-span-3 lg:flex lg:items-center lg:gap-12 bg-gradient-to-br from-primary-900/20 to-transparent border-primary-500/30" : ""
                }`}
              >
                <div className={`bg-dark-950 border border-white/10 rounded-2xl flex items-center justify-center text-primary-500 shrink-0 group-hover:scale-110 transition-transform ${
                  i === 0 ? "w-24 h-24 mb-8 lg:mb-0" : "w-16 h-16 mb-8"
                }`}>
                  <service.icon size={i === 0 ? 40 : 28} />
                </div>
                <div>
                  <h3 className={`font-bold text-white mb-4 ${i === 0 ? "text-3xl" : "text-2xl"}`}>
                    {service.title}
                  </h3>
                  <p className="text-lg text-slate-400 mb-6 font-light leading-relaxed">
                    {service.desc}
                  </p>
                  <div className="inline-flex items-center gap-2 text-sm font-bold text-primary-400 bg-primary-900/30 px-4 py-2 rounded-xl border border-primary-500/20">
                    👉 {service.highlight}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES PREVIEW */}
      <section className="py-32 bg-dark-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Real Results, <span className="text-primary-500">Real Time</span>
              </h2>
              <p className="text-xl text-slate-400 font-light">
                See how our OpenClaw deployments are delivering measurable ROI for industry leaders.
              </p>
            </div>
            <Link 
              to="/case-studies" 
              className="group inline-flex items-center gap-2 text-primary-400 font-bold text-lg hover:text-primary-300 transition-colors"
            >
              View All Case Studies <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudiesData.slice(0, 2).map((study, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 z-20">
                    <span className="px-3 py-1 bg-primary-500 text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                      {study.status}
                    </span>
                  </div>
                </div>
                <div className="p-8 md:p-10">
                  <div className="text-primary-400 text-sm font-bold mb-4 uppercase tracking-widest">{study.industry}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 group-hover:text-primary-400 transition-colors">
                    {study.title}
                  </h3>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {study.metrics.slice(0, 2).map((metric, j) => (
                      <div key={j} className="bg-white/5 p-4 rounded-xl border border-white/5">
                        <div className="text-2xl font-bold text-white">{metric.value}</div>
                        <div className="text-xs text-slate-500 font-bold uppercase">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                  <Link 
                    to="/case-studies" 
                    className="inline-flex items-center gap-2 text-white font-bold hover:text-primary-400 transition-colors"
                  >
                    Read Full Story <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-600"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop')] opacity-20 mix-blend-multiply bg-cover bg-center"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-tight">
              Build Your OpenClaw Agent Today
            </h2>
            <p className="text-2xl text-white/80 mb-12 font-light">
              Stop using AI that just talks. Start using AI that executes, automates, and scales your business.
            </p>
            
            <a
              href="https://calendly.com/openclaw/onboarding"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-dark-950 hover:bg-black text-white px-12 py-6 rounded-full text-xl font-bold transition-all shadow-2xl hover:-translate-y-1"
            >
              Start Onboarding Now
              <ArrowRight size={24} />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
