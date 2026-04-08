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
        
        {/* The "Pill" Buttons - Now routed to specific deep-dive case studies */}
        <div className="flex flex-wrap gap-3 mb-10">
          <Link to="/case-studies/mhd-platform" className="px-5 py-2 rounded-full border border-navy-600 bg-navy-800/50 text-sm font-medium text-slate-300 hover:border-gold-500 hover:text-gold-400 transition-colors">MHD Case Study</Link>
          <Link to="/case-studies/living-care" className="px-5 py-2 rounded-full border border-navy-600 bg-navy-800/50 text-sm font-medium text-slate-300 hover:border-gold-500 hover:text-gold-400 transition-colors">Azure Grooming Platform</Link>
          <Link to="/case-studies/aegis-engine" className="px-5 py-2 rounded-full border border-navy-600 bg-navy-800/50 text-sm font-medium text-slate-300 hover:border-gold-500 hover:text-gold-400 transition-colors">Security Model</Link>
          <Link to="/architecture" className="px-5 py-2 rounded-full border border-navy-600 bg-navy-800/50 text-sm font-medium text-slate-300 hover:border-gold-500 hover:text-gold-400 transition-colors">Architecture Work</Link>
        </div>

        {/* The Main Call to Actions */}
        <div className="flex flex-wrap items-center gap-4 mb-20">
          {/* Routed to your bleeding-edge AI FinOps system */}
          <Link to="/architecture" className="bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold px-8 py-3.5 rounded transition-colors shadow-[0_0_15px_rgba(245,158,11,0.3)]">
            View Case Studies
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
        <MetricCard title="5+" subtitle="Years Building Systems" />
        <MetricCard title="Multi" subtitle="Tenant + RBAC Patterns" />
        <MetricCard title="PHI" subtitle="Audit-Ready Pipelines" />
        <MetricCard title="IaC" subtitle="Governed Deployments" />
      </div>

      {/* Core Architectural Principles */}
      <div className="mb-20 pt-16 border-t border-navy-700">
        <h2 className="text-3xl font-extrabold text-white mb-12 text-center tracking-tight">
          My Engineering <span className="text-gold-500">Playbook</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Principle 1 */}
          <div className="bg-navy-800/40 p-8 rounded-xl border border-navy-700 hover:border-gold-500/50 transition-colors">
            <div className="w-12 h-12 bg-navy-900 border border-navy-600 rounded-lg flex items-center justify-center mb-6">
              <span className="text-gold-500 font-bold text-xl">01</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Identity is the Perimeter</h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              I do not trust networks; I trust cryptographic identities and context-aware session tokens. Security must be enforced dynamically at the session level, assuming the network is already hostile.
            </p>
          </div>

          {/* Principle 2 */}
          <div className="bg-navy-800/40 p-8 rounded-xl border border-navy-700 hover:border-gold-500/50 transition-colors">
            <div className="w-12 h-12 bg-navy-900 border border-navy-600 rounded-lg flex items-center justify-center mb-6">
              <span className="text-gold-500 font-bold text-xl">02</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Disciplined Execution</h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              Operating at an elite level requires absolute rigor. Compliance and performance are not checklists applied at the end; they are the automatic outcomes of a meticulously drilled, security-by-design architecture.
            </p>
          </div>

          {/* Principle 3 */}
          <div className="bg-navy-800/40 p-8 rounded-xl border border-navy-700 hover:border-gold-500/50 transition-colors">
            <div className="w-12 h-12 bg-navy-900 border border-navy-600 rounded-lg flex items-center justify-center mb-6">
              <span className="text-gold-500 font-bold text-xl">03</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Shift-Left FinOps</h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              Cost is a system architecture metric, not an accounting problem. I design platforms where unit economics are evaluated at the Pull Request level, preventing cloud waste before the compute is ever provisioned.
            </p>
          </div>

        </div>
      </div>


      {/* The Technology Radar */}
      <div className="mb-24 pt-16 border-t border-navy-700">
        <h2 className="text-3xl font-extrabold text-white mb-12 text-center tracking-tight">
          Current Technology <span className="text-gold-500">Radar</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-navy-800/40 p-6 rounded-xl border border-navy-700">
            <h3 className="text-sm font-bold text-gold-500 uppercase tracking-widest mb-4 border-b border-navy-600 pb-2">Adopt (Mandated)</h3>
            <ul className="space-y-3 text-slate-300 font-medium">
              <li>• Azure Entra ID / AWS Cognito</li>
              <li>• FastAPI (Python)</li>
              <li>• Terraform / OpenTofu</li>
              <li>• Kubernetes / Azure Container Apps</li>
              <li>• PostgreSQL / TimescaleDB</li>
            </ul>
          </div>
          <div className="bg-navy-800/40 p-6 rounded-xl border border-navy-700">
            <h3 className="text-sm font-bold text-slate-300 uppercase tracking-widest mb-4 border-b border-navy-600 pb-2">Trial (Proving)</h3>
            <ul className="space-y-3 text-slate-300 font-medium">
              <li>• Local LLMs (Llama-3 8B)</li>
              <li>• eBPF / Falco (Kernel SecOps)</li>
              <li>• Spotify Backstage (IDP)</li>
              <li>• Open Policy Agent (OPA)</li>
            </ul>
          </div>
          <div className="bg-navy-800/40 p-6 rounded-xl border border-navy-700 opacity-75">
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4 border-b border-navy-600 pb-2">Hold (Phasing Out)</h3>
            <ul className="space-y-3 text-slate-400 font-medium">
              <li>• Manual ITSM / Jira Provisioning</li>
              <li>• Static IAM Users / Long-lived JWTs</li>
              <li>• Always-On Dev Data Warehouses</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Executive Bio */}
      <div className="pt-16 pb-8 border-t border-navy-700">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white mb-6 tracking-tight">
            The Architect
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            My approach to system design is rooted in extreme execution. Before engineering distributed systems, I spent 4 years operating at the highest level of professional sports in the NFL. The core principles of the gridiron—relentless preparation, hyper-communication, and executing complex playbooks flawlessly under pressure—translate perfectly to DevSecOps and Platform Engineering. 
          </p>
          <p className="text-lg text-slate-300 leading-relaxed">
            Today, I bring that same elite, high-performance standard to cloud architecture. I don't just build pipelines; I build resilient, audit-ready platforms that protect enterprise data when it matters most.
          </p>
        </div>
      </div>

    </div>
  );
}