import { motion } from "motion/react";
import { Users, Target, Shield, Zap } from "lucide-react";

export function About() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-6"
          >
            About <span className="text-primary-500">OpenClaw</span> Agency
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 font-light"
          >
            We are a specialized AI automation agency dedicated to building, deploying, and optimizing OpenClaw-powered autonomous agents for businesses worldwide.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-lg text-slate-400 font-light leading-relaxed mb-6">
              At our core, we believe that AI should do more than just chat. It should execute, operate, and drive tangible business results. Our mission is to make enterprise-grade autonomous AI accessible to businesses of all sizes.
            </p>
            <p className="text-lg text-slate-400 font-light leading-relaxed">
              We engineer OpenClaw systems that act as digital employees—capable of thinking, responding, and taking action in real-time across your entire software stack.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl aspect-square"
          >
            <div className="absolute inset-0 bg-primary-600/20 mix-blend-overlay z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop" 
              alt="Team working" 
              className="w-full h-full object-cover grayscale"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Users, title: "Expert Team", desc: "Specialized AI engineers and automation architects." },
            { icon: Target, title: "Result Driven", desc: "Focused on ROI, pipeline generation, and hours saved." },
            { icon: Shield, title: "Secure & Private", desc: "Self-hosted deployments ensuring data sovereignty." },
            { icon: Zap, title: "Rapid Deployment", desc: "From discovery to live agent in a matter of days." }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 p-8 rounded-3xl border border-white/10 text-center"
            >
              <div className="bg-primary-600/20 w-16 h-16 mx-auto rounded-2xl flex items-center justify-center text-primary-500 mb-6">
                <item.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-slate-400 font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
