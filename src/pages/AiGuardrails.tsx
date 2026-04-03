import { ShieldAlert, Database, Cpu } from 'lucide-react';

export default function AiGuardrails() {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-16 pb-24">
      <div className="mb-16 border-b border-navy-700 pb-8">
        <h1 className="text-5xl font-extrabold text-white mb-4">Post-Hype AI Guardrails</h1>
        <p className="text-xl text-gold-500 font-medium">Enforcing unit-economics and data provenance at runtime.</p>
      </div>

      <div className="space-y-20">
        {/* System 1: ROI Engine */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Cpu className="text-gold-500" size={32} />
              LLM Unit-Economics & ROI Engine
            </h2>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Enterprises are experiencing massive "AI ROI disillusionment." I architected a stateful FastAPI interceptor mesh that prevents LLM bill shock. It uses deterministic token-counting and asynchronous Redis state management to evaluate prompt unit-economics in real-time.
            </p>
            <div className="bg-navy-800 p-6 rounded-lg border-l-4 border-gold-500">
              <h4 className="text-white font-bold mb-2">The Architectural Trade-Off</h4>
              <p className="text-slate-400 text-sm">
                Observability Overhead vs. Application Latency. Adding a FinOps proxy introduces network hops. I explicitly trade a few milliseconds of speed for absolute financial visibility and cost control, automatically triggering HTTP 402 circuit breakers to block out-of-budget API calls before execution.
              </p>
            </div>
          </div>
          <div className="bg-navy-800 p-2 rounded-xl border border-navy-600 shadow-2xl">
             <img src="/images/ai-guardrails/roi-engine-circuit-breaker.png" alt="ROI Circuit Breaker Terminal" className="w-full rounded-lg" />
          </div>
        </section>

        {/* System 2: Lineage Ledger */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 bg-navy-800 p-2 rounded-xl border border-navy-600 shadow-2xl">
            <img src="/images/ai-guardrails/lineage-ledger-hash.png" alt="Immutable Lineage Ledger" className="w-full rounded-lg" />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Database className="text-gold-500" size={32} />
              Immutable Data Lineage Ledger
            </h2>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Legal departments block internal AI models because they cannot prove where training data originated. I built a compliance-ready ingestion pipeline that cryptographically hashes (SHA-256) data prior to RAG vectorization.
            </p>
            <div className="bg-navy-800 p-6 rounded-lg border-l-4 border-gold-500">
              <h4 className="text-white font-bold mb-2">The Business Value</h4>
              <p className="text-slate-400 text-sm">
                It enforces strict data provenance by storing legal clearance metadata in an immutable SQLite vault, providing a deterministic verification endpoint to prevent copyright infringement and PII leaks.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}