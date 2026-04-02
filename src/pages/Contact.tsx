import { motion } from "motion/react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export function Contact() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-6"
          >
            Get in <span className="text-primary-500">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 font-light"
          >
            Ready to deploy your autonomous AI workforce? Contact our team of OpenClaw experts today.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary-600/20 p-4 rounded-2xl text-primary-500 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Email Us</h3>
                  <p className="text-slate-400 font-light">hello@openclawagency.com</p>
                  <p className="text-slate-400 font-light">support@openclawagency.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary-600/20 p-4 rounded-2xl text-primary-500 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Call Us</h3>
                  <p className="text-slate-400 font-light">+1 (555) 123-4567</p>
                  <p className="text-slate-400 font-light">Mon-Fri, 9am-6pm EST</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary-600/20 p-4 rounded-2xl text-primary-500 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Headquarters</h3>
                  <p className="text-slate-400 font-light">100 AI Innovation Way<br />San Francisco, CA 94105</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 p-8 md:p-10 rounded-[2.5rem] border border-white/10 backdrop-blur-sm"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">First Name</label>
                  <input type="text" className="w-full bg-dark-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Last Name</label>
                  <input type="text" className="w-full bg-dark-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Work Email</label>
                <input type="email" className="w-full bg-dark-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all" placeholder="john@company.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">How can we help?</label>
                <textarea rows={4} className="w-full bg-dark-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all resize-none" placeholder="Tell us about your automation needs..."></textarea>
              </div>
              <button className="w-full inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-500 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-[0_0_20px_rgba(230,0,0,0.3)] hover:shadow-[0_0_30px_rgba(230,0,0,0.5)]">
                Send Message
                <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
