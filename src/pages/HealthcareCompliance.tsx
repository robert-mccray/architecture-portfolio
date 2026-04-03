import { ShieldCheck, FileCheck } from 'lucide-react';

export default function HealthcareCompliance() {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-16 pb-24">
      <div className="mb-16 border-b border-navy-700 pb-8">
        <h1 className="text-5xl font-extrabold text-white mb-4">Healthcare & Compliance</h1>
        <p className="text-xl text-gold-500 font-medium">Audit-ready data platforms for PHI/PII environments.</p>
      </div>

      <div className="space-y-20">
        {/* MHD Health System */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <ShieldCheck className="text-gold-500" size={32} />
            MHD Health System
          </h2>
          <p className="text-slate-300 mb-8 max-w-3xl leading-relaxed">
            A security-by-design platform for PHI/PII ownership, controlled sharing, and analytics readiness — built with multi-tenant boundaries, audit-friendly access patterns, and production-first architecture.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
             <div className="bg-navy-800 p-8 rounded-xl border border-navy-600">
                <h3 className="text-gold-400 font-bold mb-4">Core Requirements</h3>
                <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
                  <li>Secure uploads + structured medical history</li>
                  <li>Multi-tenant access boundaries + RBAC</li>
                  <li>Time-scoped, auditable secure sharing</li>
                  <li>Async ingestion (NLP/extraction) without blocking APIs</li>
                </ul>
             </div>
             <div className="bg-navy-800 p-8 rounded-xl border border-navy-600">
                <h3 className="text-gold-400 font-bold mb-4">Security by Design</h3>
                <p className="text-sm text-slate-300">
                  Identity-first access (Entra ID), tenant isolation, and auditable data flows (Row-level security, immutable bronze layer) — designed for compliance, not retrofitted.
                </p>
             </div>
          </div>
          <img src="/images/healthcare/mhd-architecture-diagram.jpg" alt="MHD Architecture" className="w-full rounded-xl border border-navy-600 shadow-2xl" />
        </section>

        {/* Living Care Grooming */}
        <section className="pt-12 border-t border-navy-700">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <FileCheck className="text-gold-500" size={32} />
            Living Care Grooming Platform
          </h2>
          <p className="text-slate-300 mb-8 max-w-3xl leading-relaxed">
            A role-based booking and approval workflow system for grooming services in living care facilities — designed with audit logging, data governance, and analytics readiness from day one using a minimal Azure stack (Container Apps, Azure SQL, Data Factory).
          </p>
          <img src="/images/healthcare/grooming-evidence-pack.png" alt="Grooming Evidence Pack" className="w-full rounded-xl border border-navy-600 shadow-2xl" />
        </section>
      </div>
    </div>
  );
}