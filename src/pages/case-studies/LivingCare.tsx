import { ArrowLeft, Target, Cpu, Activity, Scale, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LivingCare() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-16 pb-24">
      <Link to="/healthcare" className="inline-flex items-center gap-2 text-slate-400 hover:text-gold-400 transition-colors mb-12 font-semibold text-sm tracking-wider uppercase">
        <ArrowLeft size={16} /> Back to Healthcare & Compliance
      </Link>

      <div className="mb-16 border-b border-navy-700 pb-8">
        <h1 className="text-5xl font-extrabold text-white mb-4 tracking-tight">Living Care Grooming Platform</h1>
        <p className="text-xl text-gold-500 font-medium">Governed operational workflows and serverless analytics for living care facilities.</p>
      </div>

      <div className="space-y-16 text-lg text-slate-300 leading-relaxed">
        
        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Target className="text-gold-500" /> 1. The Business Problem
          </h2>
          <p>
            Grooming services inside living care facilities were running on informal scheduling, manual tracking, and inconsistent documentation. This lack of systemization led to missed appointments, limited operational visibility, and dangerously weak audit trails for overrides and exceptions. The business required a system that treated bookings as a highly governed, auditable workflow.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Cpu className="text-gold-500" /> 2. The Blueprint
          </h2>
          <div className="bg-navy-800/50 p-4 rounded-xl border border-navy-700 mb-6">
            <img src="/images/architecture/healthcare/grooming-arc.png" alt="Living Care Architecture" className="w-full rounded border border-navy-600 shadow-xl" />
          </div>
          <p>
            I deployed a minimal, cost-aware Azure stack to handle the core requirements. The operational hub relies on Azure SQL as the authoritative source for the state-machine booking workflow. For analytics and compliance, I built Azure Data Factory pipelines migrating data through a Bronze/Silver/Gold medallion architecture, creating a "Lakehouse-lite" setup that feeds directly into governed Power BI dashboards.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Activity className="text-gold-500" /> 3. The Execution
          </h2>
          <p>
            The critical technical execution was enforcing data contracts on legacy migration sets without failing pipeline runs.
          </p>
          <p className="mt-4">
            Instead of discarding errors, I architected the Silver layer so that rejects are treated as first-class entities. If an incoming CSV payload violates the contract (e.g., missing facility IDs), the data is routed to a specific rejects view. This creates an intentional, auditable separation between operational reality and clean analytics, ensuring no data is ever silently dropped.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Scale className="text-gold-500" /> 4. The Trade-Offs
          </h2>
          <div className="bg-navy-800 p-8 rounded-lg border-l-4 border-gold-500 italic text-slate-300">
            "I explicitly traded the performance of an always-on data warehouse (like Synapse) for scale-to-zero serverless SQL views. Because this was a minimal-cost dev environment handling analytics, I prioritized strict cost discipline over raw query speed. The dashboards take a few extra seconds to load, but the infrastructure cost is a fraction of a traditional data warehouse."
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <TrendingUp className="text-gold-500" /> 5. The Business Impact
          </h2>
          <ul className="space-y-4 list-none">
            <li className="flex items-start gap-3">
              <span className="text-gold-500 font-bold mt-1">✓</span>
              <span><strong>Operational Visibility:</strong> Facility leadership now has real-time insights into vendor throughput, schedule adherence, and denial tracking.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gold-500 font-bold mt-1">✓</span>
              <span><strong>Cost Efficiency:</strong> Demonstrated enterprise governance and analytics readiness using entirely serverless patterns.</span>
            </li>
          </ul>
        </section>

      </div>
    </div>
  );
}