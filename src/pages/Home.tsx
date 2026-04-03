import { Link } from 'react-router-dom';

// A reusable sub-component for your metric cards
const MetricCard = ({ value, label }: { value: string, label: string }) => (
  <div className="border border-navy-700 bg-navy-800/50 rounded-2xl p-8 flex flex-col items-center justify-center text-center transition-all hover:border-gold-500/50 hover:bg-navy-800">
    <div className="text-4xl md:text-5xl font-black text-gold-500 mb-4">{value}</div>
    <div className="text-xs tracking-widest text-slate-400 font-semibold uppercase">{label}</div>
  </div>
);

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      
      {/* Hero Text */}
      <div className="max-w-5xl">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
          Architecting <span className="text-gold-500 drop-shadow-md">Secure Data Systems</span>
        </h1>
        <p className="mt-8 text-xl text-slate-300 max-w-3xl leading-relaxed">
          I design <span className="text-white font-bold">multi-tenant, audit-ready</span>, cloud-native data platforms for regulated environments (PHI / PII / compliance-adjacent).
        </p>
      </div>

      {/* Navigation Pills */}
      <div className="flex flex-wrap gap-4 mt-12">
        <span className="px-6 py-2 rounded-full border border-navy-700 bg-navy-800 text-slate-300 text-sm font-semibold hover:border-slate-500 cursor-pointer transition-all">MHD Case Study</span>
        <span className="px-6 py-2 rounded-full border border-navy-700 bg-navy-800 text-slate-300 text-sm font-semibold hover:border-slate-500 cursor-pointer transition-all">Azure Grooming Platform</span>
        <span className="px-6 py-2 rounded-full border border-navy-700 bg-navy-800 text-slate-300 text-sm font-semibold hover:border-slate-500 cursor-pointer transition-all">Security Model</span>
        <span className="px-6 py-2 rounded-full border border-navy-700 bg-navy-800 text-slate-300 text-sm font-semibold hover:border-slate-500 cursor-pointer transition-all">Architecture Work</span>
      </div>

      {/* Primary CTAs */}
      <div className="flex flex-wrap gap-4 mt-12">
        <button className="px-8 py-3 bg-gold-500 text-navy-900 font-black tracking-wide rounded hover:bg-gold-400 transition-all shadow-lg shadow-gold-500/20">
          View Case Study
        </button>
        <button className="px-8 py-3 border border-slate-600 text-white font-bold tracking-wide rounded hover:bg-slate-800 transition-all">
          Email Me
        </button>
        <button className="px-8 py-3 border border-slate-600 text-white font-bold tracking-wide rounded hover:bg-slate-800 transition-all">
          LinkedIn
        </button>
      </div>

      {/* The Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-24">
        <MetricCard value="4+" label="Years Building Systems" />
        <MetricCard value="Multi" label="Tenant + RBAC Patterns" />
        <MetricCard value="PHI" label="Audit-Ready Pipelines" />
        <MetricCard value="IaC" label="Governed Deployments" />
      </div>

    </div>
  );
}