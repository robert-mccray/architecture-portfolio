import { ArrowLeft, Target, Cpu, Activity, Scale, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MhdPlatform() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-16 pb-24">
      <Link to="/healthcare" className="inline-flex items-center gap-2 text-slate-400 hover:text-gold-400 transition-colors mb-12 font-semibold text-sm tracking-wider uppercase">
        <ArrowLeft size={16} /> Back to Healthcare & Compliance
      </Link>

      <div className="mb-16 border-b border-navy-700 pb-8">
        <h1 className="text-5xl font-extrabold text-white mb-4 tracking-tight">MHD Multi-Cloud HIPAA Platform</h1>
        <p className="text-xl text-gold-500 font-medium">Identity-first boundaries and secure PHI/PII ownership.</p>
      </div>

      <div className="space-y-16 text-lg text-slate-300 leading-relaxed">
        
        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Target className="text-gold-500" /> 1. The Business Problem
          </h2>
          <p>
            In the sports and medical industry, performance and health histories are heavily siloed. When an athlete or patient changes providers or teams, they lose access to their own data. The business needed a platform that made history portable and shareable, but doing so with highly sensitive PHI/PII data across multiple tenants (hospitals, clinics, sports teams) creates a massive regulatory and security nightmare.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Cpu className="text-gold-500" /> 2. The Blueprint
          </h2>
          <div className="bg-navy-800/50 p-4 rounded-xl border border-navy-700 mb-6">
            <img src="/images/architecture/healthcare/mhd-arc.png" alt="MHD Platform Architecture" className="w-full rounded border border-navy-600 shadow-xl" />
          </div>
          <p>
            I designed an Active-Active Multi-Cloud architecture spanning AWS and Azure to ensure extreme high availability and disaster recovery. The core of the system relies on an Identity-First Access Control layer (Entra ID/Cognito) mapping strict RBAC policies. Data ingestion (EHR, DICOM, FHIR) is event-driven via Lambda/Azure Functions, leading into an Immutable Decision-Evidence Layer governed by SHA-256 hashing.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Activity className="text-gold-500" /> 3. The Execution
          </h2>
          <p>
            The hardest hurdle was ensuring absolute tenant isolation at the data layer without creating the overhead of deploying 100+ separate database instances. 
          </p>
          <p className="mt-4">
            I implemented strict Row-Level Security (RLS) tied directly to the session context of the JWT. Furthermore, to handle unstructured medical documents without blocking the main APIs, I designed an asynchronous ingestion pipeline. Documents are dropped into secure storage, triggering background workers (NLP/SageMaker) to extract the data asynchronously, while the API immediately returns a 202 Accepted to keep the frontend highly responsive.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Scale className="text-gold-500" /> 4. The Trade-Offs
          </h2>
          <div className="bg-navy-800 p-8 rounded-lg border-l-4 border-gold-500 italic text-slate-300">
            "I explicitly traded the simplicity of a single-cloud deployment for the operational resilience of a multi-cloud architecture. Synchronizing state across AWS and Azure adds significant DevOps complexity, but to guarantee uptime for critical healthcare infrastructure and avoid vendor lock-in, it was the necessary architectural decision."
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <TrendingUp className="text-gold-500" /> 5. The Business Impact
          </h2>
          <ul className="space-y-4 list-none">
            <li className="flex items-start gap-3">
              <span className="text-gold-500 font-bold mt-1">✓</span>
              <span><strong>HIPAA/SOC2 Readiness:</strong> The immutable evidence layer and strict access boundaries ensure the platform is audit-ready from day one.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gold-500 font-bold mt-1">✓</span>
              <span><strong>Scalable Multi-Tenancy:</strong> Safely onboarded multiple independent clinics into a shared infrastructure while maintaining zero cross-tenant data leakage.</span>
            </li>
          </ul>
        </section>

      </div>
    </div>
  );
}