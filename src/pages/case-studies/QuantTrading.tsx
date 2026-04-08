import { ArrowLeft, Target, Cpu, Activity, Scale, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function QuantTrading() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-16 pb-24">
      <Link to="/distributed-systems" className="inline-flex items-center gap-2 text-slate-400 hover:text-gold-400 transition-colors mb-12 font-semibold text-sm tracking-wider uppercase">
        <ArrowLeft size={16} /> Back to Distributed Systems
      </Link>

      <div className="mb-16 border-b border-navy-700 pb-8">
        <h1 className="text-5xl font-extrabold text-white mb-4 tracking-tight">Quantitative Trading Cluster</h1>
        <p className="text-xl text-gold-500 font-medium">Event-driven, high-frequency state management with air-gapped AI validation.</p>
      </div>

      <div className="space-y-16 text-lg text-slate-300 leading-relaxed">
        
        {/* 1. The Hook */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Target className="text-gold-500" /> 1. The Business Problem
          </h2>
          <p>
            Standard trading bots fail under high volatility because synchronous database writes block the high-frequency event loop. During a market spike, ingesting hundreds of OHLCV ticks per second while simultaneously routing chart snapshots to an AI for execution validation results in memory leaks, OOM (Out of Memory) container crashes, and missed trade windows.
          </p>
        </section>

        {/* 2. The Architecture */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Cpu className="text-gold-500" /> 2. The Blueprint
          </h2>
          <p className="mb-6">
            I designed a completely decoupled Docker microservice cluster. A dedicated ingestion worker holds a persistent 24/7 WebSocket connection to the broker API. Instead of writing directly to a database, it drops ticks into a thread-safe Redis memory queue. Separately, a 7B-parameter Vision AI (LLaVA) runs locally in an air-gapped container to evaluate rendered chart snapshots for deterministic validation before trade execution.
          </p>
        </section>

        {/* 3. The Execution */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Activity className="text-gold-500" /> 3. The Execution
          </h2>
          <p>
            The critical technical hurdle was preventing database I/O from bottlenecking the network I/O. I implemented a strict pub/sub architecture using Redis as an intermediary shock absorber. The WebSocket worker does nothing but push to Redis. A completely separate, background consumer service pulls from that Redis queue in batches and executes the heavy SQL inserts into TimescaleDB, which is heavily optimized for time-series aggregation.
          </p>
        </section>

        {/* 4. The Trade-Offs */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Scale className="text-gold-500" /> 4. The Trade-Offs
          </h2>
          <div className="bg-navy-800 p-8 rounded-lg border-l-4 border-gold-500 italic text-slate-300">
            "I explicitly traded strict database consistency for maximum network throughput. By decoupling the write path, the PostgreSQL/TimescaleDB layer operates with 'eventual consistency' (usually trailing by a few milliseconds). However, in high-frequency trading, guaranteeing that the WebSocket event loop is never blocked by a slow disk write is exponentially more important than instant persistent storage."
          </div>
        </section>

        {/* 5. The Business Impact */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <TrendingUp className="text-gold-500" /> 5. The Business Impact
          </h2>
          <ul className="space-y-4 list-none">
            <li className="flex items-start gap-3">
              <span className="text-gold-500 font-bold mt-1">✓</span>
              <span><strong>Zero Dropped Packets:</strong> The Redis queue absorbs massive volatility spikes without crashing the ingestion containers.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gold-500 font-bold mt-1">✓</span>
              <span><strong>Deterministic Execution:</strong> By using an air-gapped local LLM, validation happens securely without relying on third-party API rate limits.</span>
            </li>
          </ul>
        </section>

      </div>
    </div>
  );
}