

import { Link } from 'react-router-dom';
import MetricCard from '../components/MetricCard';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
      {/* Hero Section */}
      <div className="max-w-4xl">
        <h1 className="text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
          Architecting <span className="text-gold-500">Secure Data Systems</span>
        </h1>
        <p className="text-xl text-slate-300 leading-relaxed mb-8 max-w-3xl">
          I design <strong className="text-white">multi-tenant, audit-ready</strong>, cloud-native data platforms for regulated environments (PHI / PII / compliance-adjacent).
        </p>
        
        {/* The "Pill" Buttons */}
        <div className="flex flex-wrap gap-3 mb-10">
          <Link to="/healthcare" className="px-5 py-2 rounded-full border border-navy-600 bg-navy-800/50 text-sm font-medium text-slate-300 hover:border-gold-500 hover:text-gold-400 transition-colors">MHD Case Study</Link>
          <Link to="/healthcare" className="px-5 py-2 rounded-full border border-navy-600 bg-navy-800/50 text-sm font-medium text-slate-300 hover:border-gold-500 hover:text-gold-400 transition-colors">Azure Grooming Platform</Link>
          <Link to="/core-infra" className="px-5 py-2 rounded-full border border-navy-600 bg-navy-800/50 text-sm font-medium text-slate-300 hover:border-gold-500 hover:text-gold-400 transition-colors">Security Model</Link>
          <Link to="/architecture" className="px-5 py-2 rounded-full border border-navy-600 bg-navy-800/50 text-sm font-medium text-slate-300 hover:border-gold-500 hover:text-gold-400 transition-colors">Architecture Work</Link>
        </div>

        {/* The Main Call to Actions */}
        <div className="flex flex-wrap items-center gap-4 mb-20">
          {/* I routed this to your newest, most impressive system: AI Guardrails */}
          <Link to="/ai-guardrails" className="bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold px-8 py-3.5 rounded transition-colors shadow-[0_0_15px_rgba(245,158,11,0.3)]">
            View Case Study
          </Link>
          <a href="mailto:mccrayrobert26@gmail.com" className="border border-navy-700 bg-navy-800/80 hover:border-gold-500 px-8 py-3.5 rounded font-semibold text-white transition-all">
            Email Me
          </a>
          <a href="https://linkedin.com/in/robert-mccray-467613195" target="_blank" rel="noreferrer" className="border border-navy-700 bg-navy-800/80 hover:border-gold-500 px-8 py-3.5 rounded font-semibold text-white transition-all">
            LinkedIn
          </a>
        </div>
      </div>

      {/* The Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
        <MetricCard title="4+" subtitle="Years Building Systems" />
        <MetricCard title="Multi" subtitle="Tenant + RBAC Patterns" />
        <MetricCard title="PHI" subtitle="Audit-Ready Pipelines" />
        <MetricCard title="IaC" subtitle="Governed Deployments" />
      </div>

    </div>
  );
}