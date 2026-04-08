import { ArrowLeft, Target, Cpu, Activity, Scale, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DataLineage() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-16 pb-24">
      <Link to="/ai-guardrails" className="inline-flex items-center gap-2 text-slate-400 hover:text-gold-400 transition-colors mb-12 font-semibold text-sm tracking-wider uppercase">
        <ArrowLeft size={16} /> Back to AI Guardrails
      </Link>

      <div className="mb-16 border-b border-navy-700 pb-8">
        <h1 className="text-5xl font-extrabold text-white mb-4 tracking-tight">Immutable Data Lineage Ledger</h1>
        <p className="text-xl text-gold-500 font-medium">Mathematically proving AI training data provenance to unblock enterprise adoption.</p>
      </div>

      <div className="space-y-16 text-lg text-slate-300 leading-relaxed">
        
        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Target className="text-gold-500" /> 1. The Business Problem
          </h2>
          <p>
            Enterprise legal departments are outright blocking internal AI / RAG (Retrieval-Augmented Generation) deployments. When an AI generates a response, the legal team asks: "Can you prove this model wasn't trained on copyrighted data or un-anonymized PII?" Standard vector databases only store mathematical embeddings, making it impossible to reverse-engineer where the data came from. Without cryptographic proof of data provenance, the AI cannot go to production.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Cpu className="text-gold-500" /> 2. The Blueprint
          </h2>
          <div className="bg-navy-800/50 p-4 rounded-xl border border-navy-700 mb-6">
            <img src="/images/architecture/ai-guardrails/Linear-arc.png" alt="Data Lineage Architecture" className="w-full rounded border border-navy-600 shadow-xl" />
          </div>
          <p>
            I built a compliance-ready ingestion pipeline that acts as a "Commit Boundary" before vectorization. Before any enterprise document is chunked and sent to Pinecone/Milvus, it is routed through a deterministic Python mesh. The system generates a SHA-256 cryptographic hash of the source document, binds it to legal clearance metadata (e.g., `cleared_for_training: true`), and commits this ledger entry to an immutable SQLite vault.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Activity className="text-gold-500" /> 3. The Execution
          </h2>
          <p>
            The primary technical challenge was establishing a bidirectional link between a fragmented Vector ID and the original immutable ledger entry without creating massive database join overhead. 
          </p>
          <p className="mt-4">
            I engineered the ingestion API so that the SHA-256 hash acts as the parent key. When a document is chunked into 50 pieces for RAG, each vector payload injected into the vector database includes the parent SHA-256 hash as indexed metadata. When a compliance officer queries the system, we can pull the exact vector, read the parent hash, and instantly query the air-gapped SQLite vault to provide the timestamped, mathematical proof of legal clearance.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Scale className="text-gold-500" /> 4. The Trade-Offs
          </h2>
          <div className="bg-navy-800 p-8 rounded-lg border-l-4 border-gold-500 italic text-slate-300">
            "I explicitly traded pipeline ingestion speed for mathematical legal protection. Hashing large enterprise datasets and enforcing a dual-write pattern (one to SQLite, one to the Vector DB) creates an ingestion bottleneck. However, the system is designed to ingest asynchronously, because absolute proof of copyright clearance is exponentially more valuable than saving a few minutes on pipeline ETL runs."
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <TrendingUp className="text-gold-500" /> 5. The Business Impact
          </h2>
          <ul className="space-y-4 list-none">
            <li className="flex items-start gap-3">
              <span className="text-gold-500 font-bold mt-1">✓</span>
              <span><strong>Unblocked AI Deployments:</strong> Legal and Compliance teams signed off on production RAG deployments because the ledger provides an audit-ready "chain of custody."</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gold-500 font-bold mt-1">✓</span>
              <span><strong>SOC2 / HIPAA Alignment:</strong> The immutable vault guarantees that access and ingestion logs cannot be tampered with.</span>
            </li>
          </ul>
        </section>

      </div>
    </div>
  );
}