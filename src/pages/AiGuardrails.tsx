import { Database, Cpu, ShieldAlert, KeyRound, Lock } from 'lucide-react';

export default function AiGuardrails() {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-16 pb-24">
      <div className="mb-16 border-b border-navy-700 pb-8">
        <h1 className="text-5xl font-extrabold text-white mb-4">Post-Hype AI Guardrails</h1>
        <p className="text-xl text-gold-500 font-medium">Securing Agentic Autonomy, Unit Economics, and Data Provenance.</p>
      </div>

      <div className="space-y-20">
        
        {/* ========================================================= */}
        {/* NEW SECTION: THE ENTERPRISE AI GOVERNANCE SUITE */}
        {/* ========================================================= */}
        <section className="bg-navy-800/30 border border-navy-700 rounded-2xl p-8 lg:p-12 shadow-xl">
          <div className="mb-12 text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-extrabold text-white mb-6">The Enterprise AI Governance Suite</h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-10">
              As Agentic AI accelerates, traditional network perimeters are failing. I engineered this 3-part Zero-Trust suite to secure machine-to-machine autonomy, remediate Identity Dark Matter, and mathematically guarantee AI data provenance.
            </p>
            <div className="border border-navy-600 rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="/images/ai-guardrails/agentic-broker-series.PNG" 
                alt="The Agentic Broker Series Architecture Blueprint" 
                className="w-full object-cover"
              />
            </div>
          </div>

          {/* The 3 Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Pillar 1 */}
            <div className="bg-navy-800 rounded-xl p-6 border border-navy-600 hover:border-gold-500 transition duration-300 flex flex-col h-full">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <ShieldAlert className="text-gold-500 flex-shrink-0" size={24} />
                1. Agentic API Broker
              </h3>
              <div className="space-y-4 text-slate-300 text-sm flex-grow">
                <p><strong className="text-white">The Threat:</strong> AI Agents holding static, highly privileged API keys.</p>
                <p><strong className="text-white">The Architecture:</strong> An OIDC-federated FastAPI broker using LLM semantic intent evaluation to block rogue actions.</p>
                <p><strong className="text-white">The Trade-Off:</strong> Trading 150ms of execution latency for absolute M2M boundary enforcement.</p>
              </div>
              <div className="mt-8 pt-4 border-t border-navy-700">
                <a href="https://github.com/yourusername/zero-trust-agentic-broker" target="_blank" rel="noreferrer" className="text-gold-500 hover:text-gold-400 text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                  View Repository →
                </a>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-navy-800 rounded-xl p-6 border border-navy-600 hover:border-gold-500 transition duration-300 flex flex-col h-full">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <KeyRound className="text-gold-500 flex-shrink-0" size={24} />
                2. "Dark Matter" Sweeper
              </h3>
              <div className="space-y-4 text-slate-300 text-sm flex-grow">
                <p><strong className="text-white">The Threat:</strong> Orphaned SaaS integrations and over-privileged service accounts.</p>
                <p><strong className="text-white">The Architecture:</strong> A serverless CSPM engine evaluating semantic IAM context to autonomously enforce least privilege.</p>
                <p><strong className="text-white">The Trade-Off:</strong> Trusting AI to autonomously mutate IAM roles to prevent manual alert fatigue.</p>
              </div>
              <div className="mt-8 pt-4 border-t border-navy-700">
                <a href="https://github.com/yourusername/identity-dark-matter-sweeper" target="_blank" rel="noreferrer" className="text-gold-500 hover:text-gold-400 text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                  View Repository →
                </a>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-navy-800 rounded-xl p-6 border border-navy-600 hover:border-gold-500 transition duration-300 flex flex-col h-full">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <Lock className="text-gold-500 flex-shrink-0" size={24} />
                3. Cryptographic RAG Ledger
              </h3>
              <div className="space-y-4 text-slate-300 text-sm flex-grow">
                <p><strong className="text-white">The Threat:</strong> Data supply chain attacks poisoning Vector Databases.</p>
                <p><strong className="text-white">The Architecture:</strong> A DevSecOps pipeline generating deterministic SHA-256 signatures against an immutable "Known Good" ledger.</p>
                <p><strong className="text-white">The Trade-Off:</strong> Trading developer convenience for mathematically verifiable SOC2 data lineage.</p>
              </div>
              <div className="mt-8 pt-4 border-t border-navy-700">
                <a href="https://github.com/yourusername/cryptographic-rag-ledger" target="_blank" rel="noreferrer" className="text-gold-500 hover:text-gold-400 text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                  View Repository →
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* EXISTING SECTION: ROI ENGINE */}
        {/* ========================================================= */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-8">
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
             <img src="/images/ai-guardrails/roi-engine-circuit-breaker.jpg" alt="ROI Circuit Breaker Terminal" className="w-full rounded-lg" />
          </div>
        </section>

        {/* ========================================================= */}
        {/* EXISTING SECTION: LINEAGE LEDGER */}
        {/* ========================================================= */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 bg-navy-800 p-2 rounded-xl border border-navy-600 shadow-2xl">
            <img src="/images/ai-guardrails/lineage-ledger-hash.jpg" alt="Immutable Lineage Ledger" className="w-full rounded-lg" />
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