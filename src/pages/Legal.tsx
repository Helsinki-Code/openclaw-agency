export function Legal() {
  return (
    <div className="pt-40 pb-24">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-12">Legal Information</h1>
        
        <div className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Privacy Policy</h2>
          <p className="text-slate-400 font-light leading-relaxed mb-6">
            At OpenClaw Setup Agency, we take your privacy seriously. This policy describes how we collect, use, and protect your personal information when you use our services or website.
          </p>
          <p className="text-slate-400 font-light leading-relaxed mb-6">
            We only collect data necessary to provide our AI deployment services. Your proprietary business data used to train your specific OpenClaw agents remains your property and is never shared with third parties or used to train public models.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Terms of Service</h2>
          <p className="text-slate-400 font-light leading-relaxed mb-6">
            By engaging with OpenClaw Setup Agency, you agree to these terms. We provide custom AI agent deployment services based on the OpenClaw framework.
          </p>
          <p className="text-slate-400 font-light leading-relaxed mb-6">
            All agents are deployed on infrastructure agreed upon during the onboarding phase. While we strive for 99.9% uptime, we are not liable for downtime caused by underlying LLM providers or third-party API changes.
          </p>
        </div>
      </div>
    </div>
  );
}
