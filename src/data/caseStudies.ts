import { Clock, TrendingUp, DollarSign, Users } from "lucide-react";

export const caseStudiesData = [
  {
    id: 1,
    title: "Global E-Commerce Brand Scales Support by 400% with OpenClaw",
    client: "NovaRetail Group",
    industry: "E-Commerce",
    status: "Live Deployment",
    date: "March 2024",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000&auto=format&fit=crop",
    metrics: [
      { icon: Clock, value: "3s", label: "Response Time (Down from 4h)" },
      { icon: TrendingUp, value: "400%", label: "Ticket Resolution Increase" },
      { icon: DollarSign, value: "35%", label: "Reduction in Support Costs" },
    ],
    quote: "OpenClaw didn't just replace our chatbot; it replaced our entire tier-1 support workflow. It processes refunds, checks inventory, and updates shipping autonomously.",
    author: "Sarah Jenkins, VP of Operations",
    citation: "https://openclaw.io/case-studies/novaretail",
    content: "NovaRetail was drowning in support tickets during the holiday season. Traditional chatbots failed because they couldn't execute backend tasks. We deployed an OpenClaw agent integrated directly with Shopify and Zendesk. The agent now handles 85% of all inquiries end-to-end, executing refunds and tracking updates without human intervention."
  },
  {
    id: 2,
    title: "B2B SaaS Automates Lead Gen, Generating $2.4M Pipeline",
    client: "CloudSync Analytics",
    industry: "B2B Software",
    status: "Active Scaling",
    date: "February 2024",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    metrics: [
      { icon: DollarSign, value: "$2.4M", label: "New Pipeline Generated" },
      { icon: Users, value: "1,200+", label: "Qualified Leads/Month" },
      { icon: TrendingUp, value: "12x", label: "ROI on Ad Spend" },
    ],
    quote: "The OpenClaw agent found, researched, and qualified leads while we slept. It's like having a team of 10 SDRs working 24/7.",
    author: "Mark T., Founder & CEO",
    citation: "https://openclaw.io/case-studies/cloudsync",
    content: "CloudSync needed to scale outbound sales but couldn't afford a massive SDR team. We built an OpenClaw Lead Generation Agent that scrapes LinkedIn, enriches data via Clearbit, drafts hyper-personalized emails, and replies to prospects. It autonomously books meetings directly into the sales team's calendar."
  },
  {
    id: 3,
    title: "Real Estate Firm Automates Property Inquiries and Bookings",
    client: "Horizon Estates",
    industry: "Real Estate",
    status: "Live Deployment",
    date: "January 2024",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop",
    metrics: [
      { icon: Clock, value: "120h", label: "Saved per Week" },
      { icon: TrendingUp, value: "3x", label: "Increase in Viewings" },
      { icon: Users, value: "98%", label: "Lead Qualification Accuracy" },
    ],
    quote: "We were losing leads because we couldn't reply fast enough after hours. OpenClaw now qualifies buyers and schedules viewings instantly.",
    author: "Elena Rodriguez, Principal Broker",
    citation: "https://openclaw.io/case-studies/horizon",
    content: "Horizon Estates integrated OpenClaw into their WhatsApp Business account. When a lead asks about a property, the agent checks the MLS database, answers specific questions about square footage or HOA fees, and uses a calendar tool to book a viewing. It follows up automatically 24 hours later."
  },
  {
    id: 4,
    title: "Law Firm Automates Inbound Call Handling & Lead Qualification",
    client: "Sterling & Associates",
    industry: "Legal Services",
    status: "Live Deployment",
    date: "April 2024",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000&auto=format&fit=crop",
    metrics: [
      { icon: Users, value: "100%", label: "Inbound Calls Answered" },
      { icon: TrendingUp, value: "45%", label: "Increase in Qualified Leads" },
      { icon: Clock, value: "24/7", label: "Availability" },
    ],
    quote: "Our attorneys were spending too much time on the phone with unqualified leads. The AI Receptionist now handles everything from the first ring to the final booking.",
    author: "James Sterling, Senior Partner",
    citation: "https://openclaw.io/case-studies/sterling",
    content: "Sterling & Associates was missing potential clients because their staff couldn't handle the volume of inbound calls. We deployed an AI Inbound Receptionist that answers calls in real-time, qualifies prospects based on their case type, and books consultations directly into the attorneys' calendars. The system handles multiple calls simultaneously, ensuring no lead is ever missed."
  }
];
