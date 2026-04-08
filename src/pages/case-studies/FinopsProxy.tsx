import { ArrowLeft, Target, Cpu, Activity, Scale, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FinopsProxy() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-16 pb-24">
      <Link to="/ai-guardrails" className="inline-flex items-center gap-2 text-slate-400 hover:text-gold-400 transition-colors mb-12 font-semibold text-sm tracking-wider uppercase">
        <ArrowLeft size={16} /> Back to AI Guardrails
      </Link>

      <div className="mb-16 border-b border-navy-700 pb-8">
        <h1 className="text-5xl font-extrabold text-white mb-4 tracking-tight">AI FinOps Proxy Circuit Breaker</h1>
        <p className="text-xl text-gold-500 font-medium">Preventing LLM Bill Shock via Deterministic Unit-Economics.</p>
      </div>

      <div className="space-y-16 text-lg text-slate-300 leading-relaxed">
        
        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Target className="text-gold-500" /> 1. The Business Problem
          </h2>
          <p>
            Enterprises are rushing to deploy AI, but Finance teams are experiencing catastrophic "LLM Bill Shock." Developers were writing unoptimized RAG loops that recursively called GPT-4, silently burning thousands of dollars over a weekend. There was zero financial observability or control mechanism before the invoice arrived. We needed a system to stop the bleeding before the API call was ever made.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Cpu className="text-gold-500" /> 2. The Blueprint
          </h2>
          <div className="bg-navy-800/50 p-4 rounded-xl border border-navy-700 mb-6">
            <img src="/images/architecture/ai-guardrails/ROI-arc.png" alt="FinOps Proxy Architecture" className="w-full rounded border border-navy-600 shadow-xl" />
          </div>
          <p>
            I architected a stateful Layer-7 interceptor mesh. Before any workload can hit an external LLM provider (OpenAI/Anthropic), it must route through a FastAPI Gateway. The gateway uses deterministic token-counting to calculate the exact cost of the prompt based on real-time pricing matrixes, referencing a Redis cache containing the service account's allocated budget.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Activity className="text-gold-500" /> 3. The Execution
          </h2>
          <p>
            The hardest technical hurdle was enforcing the financial state check without adding catastrophic latency to the application layer. Standard relational database queries for budget checks were taking 80-120ms—unacceptable for high-throughput applications.
          </p>
          <p className="mt-4">
            I engineered a completely asynchronous execution path using FastAPI background tasks and an in-memory Redis state cache. The budget deduction is processed asynchronously *after* the request is validated, but the circuit breaker evaluation happens in microseconds via a Redis `GET` command. If the token cost exceeds the remaining cached budget, the proxy instantly throws an HTTP 402 (Payment Required) circuit breaker.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Scale className="text-gold-500" /> 4. The Trade-Offs
          </h2>
          <div className="bg-navy-800 p-8 rounded-lg border-l-4 border-gold-500 italic text-slate-300">
            "I explicitly traded 15-20ms of baseline network latency for absolute FinOps observability. By forcing all traffic through a centralized proxy, we introduced a network hop. However, in a corporate environment where unregulated AI queries pose an existential financial risk, a 20ms delay is a necessary tax for guaranteed unit-economic control."
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <TrendingUp className="text-gold-500" /> 5. The Business Impact
          </h2>
          <ul className="space-y-4 list-none">
            <li className="flex items-start gap-3">
              <span className="text-gold-500 font-bold mt-1">✓</span>
              <span><strong>Eliminated Bill Shock:</strong> 100% prevention of unauthorized, out-of-budget LLM API consumption.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gold-500 font-bold mt-1">✓</span>
              <span><strong>Operational Velocity:</strong> Engineering teams can experiment with expensive models safely, knowing the circuit breaker will prevent runaway loops.</span>
            </li>
          </ul>
        </section>

      </div>
    </div>
  );
}