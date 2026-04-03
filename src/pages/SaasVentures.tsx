import { Globe, Building } from 'lucide-react';

export default function SaasVentures() {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-16 pb-24">
      <div className="mb-16 border-b border-navy-700 pb-8">
        <h1 className="text-5xl font-extrabold text-white mb-4">SaaS Ventures</h1>
        <p className="text-xl text-gold-500 font-medium">Multi-tenant platforms engineered for scale and isolation.</p>
      </div>

      <div className="space-y-16">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Building className="text-gold-500" size={32} />
              CommunityLife Concierge
            </h2>
            <p className="text-slate-300 mb-6 leading-relaxed">
              A multi-tenant SaaS platform engineered for residential communities. The system features strict architectural specifications for tenant isolation, secure data routing, and identity management across vastly different client organizations.
            </p>
          </div>
          <div className="bg-navy-800 p-2 rounded-xl border border-navy-600 shadow-2xl">
             <img src="/images/saas/communitylife-topology.png" alt="CommunityLife Topology" className="w-full rounded-lg" />
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-12 border-t border-navy-700">
           <div className="order-2 lg:order-1 bg-navy-800 p-2 rounded-xl border border-navy-600 shadow-2xl">
             <img src="/images/saas/palm-and-oaks-ui.png" alt="Palm and Oaks UI" className="w-full rounded-lg" />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Globe className="text-gold-500" size={32} />
              Palm & Oaks (Edge Architecture)
            </h2>
            <p className="text-slate-300 mb-6 leading-relaxed">
              A high-performance experiential rental platform built using Vite, React, and Tailwind CSS. Deployed directly to Cloudflare's edge network via automated CI/CD pipelines to guarantee sub-second global latency and zero-maintenance scaling.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}