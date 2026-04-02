import { motion } from "motion/react";
import { ArrowRight, TrendingUp, Clock, DollarSign, Users } from "lucide-react";

export function CaseStudies() {
  const cases = [
    {
      id: 1,
      title: "Global E-Commerce Brand Scales Support by 400% with OpenClaw",
      client: "NovaRetail Group",
      industry: "E-Commerce",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000&auto=format&fit=crop",
      metrics: [
        { icon: Clock, value: "3s", label: "Response Time (Down from 4h)" },
        { icon: TrendingUp, value: "400%", label: "Ticket Resolution Increase" },
      ],
      quote: "OpenClaw didn't just replace our chatbot; it replaced our entire tier-1 support workflow. It processes refunds, checks inventory, and updates shipping autonomously.",
      author: "Sarah Jenkins, VP of Operations",
      content: "NovaRetail was drowning in support tickets during the holiday season. Traditional chatbots failed because they couldn't execute backend tasks. We deployed an OpenClaw agent integrated directly with Shopify and Zendesk. The agent now handles 85% of all inquiries end-to-end, executing refunds and tracking updates without human intervention."
    },
    {
      id: 2,
      title: "B2B SaaS Automates Lead Gen, Generating $2.4M Pipeline",
      client: "CloudSync Analytics",
      industry: "B2B Software",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
      metrics: [
        { icon: DollarSign, value: "$2.4M", label: "New Pipeline Generated" },
        { icon: Users, value: "1,200+", label: "Qualified Leads/Month" },
      ],
      quote: "The OpenClaw agent found, researched, and qualified leads while we slept. It's like having a team of 10 SDRs working 24/7.",
      author: "Mark T., Founder & CEO",
      content: "CloudSync needed to scale outbound sales but couldn't afford a massive SDR team. We built an OpenClaw Lead Generation Agent that scrapes LinkedIn, enriches data via Clearbit, drafts hyper-personalized emails, and replies to prospects. It autonomously books meetings directly into the sales team's calendar."
    },
    {
      id: 3,
      title: "Real Estate Firm Automates Property Inquiries and Bookings",
      client: "Horizon Estates",
      industry: "Real Estate",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop",
      metrics: [
        { icon: Clock, value: "120h", label: "Saved per Week" },
        { icon: TrendingUp, value: "3x", label: "Increase in Viewings" },
      ],
      quote: "We were losing leads because we couldn't reply fast enough after hours. OpenClaw now qualifies buyers and schedules viewings instantly.",
      author: "Elena Rodriguez, Principal Broker",
      content: "Horizon Estates integrated OpenClaw into their WhatsApp Business account. When a lead asks about a property, the agent checks the MLS database, answers specific questions about square footage or HOA fees, and uses a calendar tool to book a viewing. It follows up automatically 24 hours later."
    }
  ];

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

        <div className="space-y-24">
          {cases.map((study, index) => (
            <motion.div 
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl aspect-[4/3] group">
                  <div className="absolute inset-0 bg-primary-600/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary-400 text-sm font-bold mb-4">
                    {study.industry}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                    {study.title}
                  </h2>
                  <p className="text-lg text-slate-400 font-light leading-relaxed">
                    {study.content}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {study.metrics.map((metric, i) => (
                    <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                      <metric.icon className="text-primary-500 mb-3" size={28} />
                      <div className="text-3xl font-extrabold text-white mb-1">{metric.value}</div>
                      <div className="text-sm text-slate-400">{metric.label}</div>
                    </div>
                  ))}
                </div>

                <blockquote className="border-l-4 border-primary-500 pl-6 py-2">
                  <p className="text-xl text-slate-300 italic mb-4">"{study.quote}"</p>
                  <footer className="text-primary-400 font-bold">— {study.author}</footer>
                </blockquote>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
