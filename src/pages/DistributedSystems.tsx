import { LineChart, Server, Database } from 'lucide-react';

export default function DistributedSystems() {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-16 pb-24">
      <div className="mb-16 border-b border-navy-700 pb-8">
        <h1 className="text-5xl font-extrabold text-white mb-4">Distributed Systems</h1>
        <p className="text-xl text-gold-500 font-medium">Event-driven architectures and high-frequency state management.</p>
      </div>

      <div className="space-y-12">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <LineChart className="text-gold-500" size={32} />
              Quantitative Trading Cluster
            </h2>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Handling high-frequency time-series data while running a 7-Billion parameter multimodal LLM locally is a masterclass in managing system constraints. I designed a decoupled, event-driven Docker microservice cluster using FastAPI, Redis, and TimescaleDB optimized specifically for OHLCV ticks.
            </p>
            <div className="bg-navy-800 p-6 rounded-lg border-l-4 border-gold-500 mb-6">
              <h4 className="text-white font-bold mb-2">Decoupled I/O vs. State Consistency</h4>
              <p className="text-slate-400 text-sm">
                I intentionally decoupled the network I/O from the database I/O. The WebSocket drops ticks into a thread-safe Redis memory queue, while a background worker handles the TimescaleDB SQL inserts. The explicit trade-off is eventual consistency in the database, guaranteeing slow disk writes never block the high-frequency event loop.
              </p>
            </div>
          </div>
          <div className="bg-navy-800 p-2 rounded-xl border border-navy-600 shadow-2xl">
             {/* Map this to your quant trading screenshot */}
             <img src="/images/core-infra/quant-trading-cluster.png" alt="Quantitative Trading Architecture" className="w-full rounded-lg" />
          </div>
        </section>
      </div>
    </div>
  );
}