import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Server, MessageSquare, Globe, RefreshCw, TrendingUp, ArrowRight, Phone } from "lucide-react";

export const servicesData = [
  {
    id: "openclaw-setup",
    icon: Server,
    title: "OpenClaw Setup (Core Offer)",
    desc: "We deploy your fully functional OpenClaw agent on your infrastructure. Includes server setup, agent configuration, and secure deployment.",
    highlight: "Runs locally or self-hosted for full data control.",
    features: [
      "Custom Infrastructure Deployment",
      "Secure Server Configuration",
      "Agent Logic & Tool Setup",
      "24/7 Performance Monitoring"
    ]
  },
  {
    id: "ai-receptionist",
    icon: Phone,
    title: "AI Inbound Receptionist",
    desc: "A 24/7 voice-enabled AI agent that handles inbound calls, qualifies leads, and books appointments directly into your calendar.",
    highlight: "Never miss a lead again, even while you sleep.",
    features: [
      "Real-time Voice Interaction",
      "Lead Qualification & Scoring",
      "Calendar Integration (Calendly/GCal)",
      "Automated SMS/Email Follow-ups"
    ]
  },
  {
    id: "whatsapp-telegram",
    icon: MessageSquare,
    title: "WhatsApp / Telegram Agents",
    desc: "OpenClaw is designed to live inside messaging platforms. We turn it into a customer support agent, sales assistant, or automation command interface.",
    highlight: "Just message 'Find leads' and it executes.",
    features: [
      "Omnichannel Messaging Support",
      "Automated Customer Support",
      "Sales Assistant Workflows",
      "Command-based Task Execution"
    ]
  },
  {
    id: "website-chatbot",
    icon: Globe,
    title: "Website Chatbot",
    desc: "Not a basic chatbot. It's an AI decision engine connected to your backend that qualifies leads, triggers workflows, and executes real actions.",
    highlight: "Every conversation becomes automation.",
    features: [
      "Advanced Decision Logic",
      "Backend API Integrations",
      "Dynamic Lead Qualification",
      "Real-time Action Triggers"
    ]
  },
  {
    id: "content-repurposing",
    icon: RefreshCw,
    title: "Content Repurposing Agent",
    desc: "We build OpenClaw systems that turn 1 piece of content into 10+ assets. Auto-generate posts, emails, captions, and schedule distribution.",
    highlight: "Runs continuously without supervision.",
    features: [
      "Multi-platform Content Generation",
      "Automated Scheduling & Posting",
      "Brand Voice Consistency",
      "Performance Analytics Tracking"
    ]
  },
  {
    id: "lead-generation",
    icon: TrendingUp,
    title: "Lead Generation Agent",
    desc: "We turn OpenClaw into a self-running acquisition engine. It finds leads, sends outreach, follows up automatically, and qualifies prospects.",
    highlight: "Your pipeline runs 24/7.",
    features: [
      "Automated Prospect Sourcing",
      "Personalized Outreach Sequences",
      "Smart Follow-up Systems",
      "CRM Data Synchronization"
    ]
  }
];

export function Services() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-6"
          >
            Our <span className="text-primary-500">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 font-light"
          >
            We engineer OpenClaw into specialized business assets that handle operations, communication, and growth on autopilot.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`bg-white/5 p-10 rounded-[2rem] border border-white/10 hover:border-primary-500/50 transition-all group flex flex-col ${
                i === 0 ? "md:col-span-2 lg:col-span-3 lg:flex-row lg:items-center lg:gap-12 bg-gradient-to-br from-primary-900/20 to-transparent border-primary-500/30" : ""
              }`}
            >
              <div className={`bg-dark-950 border border-white/10 rounded-2xl flex items-center justify-center text-primary-500 shrink-0 group-hover:scale-110 transition-transform ${
                i === 0 ? "w-24 h-24 mb-8 lg:mb-0" : "w-16 h-16 mb-8"
              }`}>
                <service.icon size={i === 0 ? 40 : 28} />
              </div>
              <div className="flex-1">
                <h3 className={`font-bold text-white mb-4 ${i === 0 ? "text-3xl" : "text-2xl"}`}>
                  {service.title}
                </h3>
                <p className="text-lg text-slate-400 mb-6 font-light leading-relaxed">
                  {service.desc}
                </p>
                <div className="inline-flex items-center gap-2 text-sm font-bold text-primary-400 bg-primary-900/30 px-4 py-2 rounded-xl border border-primary-500/20 mb-6">
                  👉 {service.highlight}
                </div>
                <div>
                  <Link 
                    to={`/services/${service.id}`}
                    className="inline-flex items-center gap-2 text-white font-bold hover:text-primary-400 transition-colors"
                  >
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
