import { Bot } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-dark-900 py-16 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="bg-primary-600 text-white p-2 rounded-xl">
              <Bot size={24} />
            </div>
            <span className="font-extrabold text-2xl tracking-tight text-white">OpenClaw</span>
          </div>
          
          <div className="flex gap-8 text-sm font-medium text-slate-400">
            <Link to="/legal" className="hover:text-primary-400 transition-colors">Privacy</Link>
            <Link to="/legal" className="hover:text-primary-400 transition-colors">Terms</Link>
            <Link to="/contact" className="hover:text-primary-400 transition-colors">Contact</Link>
          </div>
          
          <div className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} OpenClaw Setup Agency. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
