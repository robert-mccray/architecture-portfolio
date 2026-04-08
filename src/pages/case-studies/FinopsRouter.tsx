import { ArrowLeft, Target, Cpu, Activity, Scale, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FinopsRouter() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-16 pb-24">
      <Link to="/platform-finops" className="inline-flex items-center gap-2 text-slate-400 hover:text-gold-400 transition-colors mb-12 font-semibold text-sm tracking-wider uppercase">
        <ArrowLeft size={16} /> Back to Platform Engineering
      </Link>

      <div className="mb-16 border-b border-navy-700 pb-8">
        <h1 className="text-5xl font-extrabold text-white mb-4 tracking-tight">Predictive Runtime FinOps Router</h1>
        <p className="text-xl text-gold-500 font-medium">Arbitraging multi-cloud spot compute pricing millisecond by millisecond.</p>
      </div>

      <div className="space-y-16 text-lg text-slate-300 leading-relaxed">
        
        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Target className="text-gold-500" /> 1. The Business Problem
          </h2>
          <p>
            Enterprise cloud infrastructure costs are treated as static, but cloud provider "Spot Pricing" fluctuates constantly based on regional supply and demand. Companies were wasting millions running heavy ETL workloads on AWS us-east-1 when Azure East US was 40% cheaper at that exact millisecond. Humans cannot optimize routing fast enough to capture this dynamic pricing arbitrage.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Cpu className="text-gold-500" /> 2. The Blueprint
          </h2>
          <div className="bg-navy-800/50 p-4 rounded-xl border border-navy-700 mb-6">
            <img src="/images/architecture/ai-guardrails/Finops-arc.png" alt="FinOps Router Architecture" className="w-full rounded border border-navy-600 shadow-xl" />
          </div>
          <p>
            I architected a dynamic Layer-7 API Gateway acting as a Predictive FinOps Router. Before a heavy compute job is dispatched, the gateway evaluates telemetry data (current spot price and network latency) across available active-active cloud regions (AWS and Azure). The control plane local decision engine evaluates this telemetry in real-time, directing the payload to the Kubernetes egress gateway associated with the optimal cloud environment.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Activity className="text-gold-500" /> 3. The Execution
          </h2>
          <p>
            The critical technical challenge was preventing the cost-evaluation logic from bogging down the application’s core response time. Calculating arbitrage on every single API request is computationally expensive.
          </p>
          <p className="mt-4">
            To solve this, I split the Data Plane and the Control Plane. The Data Plane handles the actual HTTP traffic as fast as possible. The Control Plane runs asynchronously in the background, pinging AWS and Azure APIs every 60 seconds to update a highly optimized Redis cache with the current "Routing Vector." When a user request hits the Data Plane, it simply checks the Redis cache (a 1ms operation) to see which cloud won the latest auction, and routes traffic accordingly.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Scale className="text-gold-500" /> 4. The Trade-Offs
          </h2>
          <div className="bg-navy-800 p-8 rounded-lg border-l-4 border-gold-500 italic text-slate-300">
            "I explicitly traded absolute bottom-dollar compute prices to prioritize User Experience (UX). The algorithm incorporates a strict SLA penalty. If AWS is $0.05 cheaper but is experiencing a 400ms latency spike, the router defaults to Azure (stable at 20ms). Financial optimization must never degrade application performance."
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <TrendingUp className="text-gold-500" /> 5. The Business Impact
          </h2>
          <ul className="space-y-4 list-none">
            <li className="flex items-start gap-3">
              <span className="text-gold-500 font-bold mt-1">✓</span>
              <span><strong>Automated Arbitrage:</strong> The system automatically harvests bottom-barrel spot compute pricing without manual DevOps intervention.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gold-500 font-bold mt-1">✓</span>
              <span><strong>Multi-Cloud Resiliency:</strong> If an entire AWS region goes down, the routing vector automatically recalculates and shifts 100% of traffic to Azure within 60 seconds.</span>
            </li>
          </ul>
        </section>

      </div>
    </div>
  );
}