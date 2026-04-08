import { ArrowLeft, Target, Cpu, Activity, Scale, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function IdentityMesh() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-16 pb-24">
      <Link to="/core-infra" className="inline-flex items-center gap-2 text-slate-400 hover:text-gold-400 transition-colors mb-12 font-semibold text-sm tracking-wider uppercase">
        <ArrowLeft size={16} /> Back to Core Infrastructure
      </Link>

      <div className="mb-16 border-b border-navy-700 pb-8">
        <h1 className="text-5xl font-extrabold text-white mb-4 tracking-tight">Behavioral Identity Mesh</h1>
        <p className="text-xl text-gold-500 font-medium">Dynamic, context-aware authorization inspired by Google Zanzibar.</p>
      </div>

      <div className="space-y-16 text-lg text-slate-300 leading-relaxed">
        
        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Target className="text-gold-500" /> 1. The Business Problem
          </h2>
          <p>
            Static IAM roles and traditional JWTs (JSON Web Tokens) are inherently flawed. Once a user authenticates, they are given a token valid for 1-12 hours. If that token is hijacked, or if the user's device is compromised mid-session, the network blindly trusts the request until the token expires. We needed an authorization layer that evaluates *behavior*, not just a static credential.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Cpu className="text-gold-500" /> 2. The Blueprint
          </h2>
          <div className="bg-navy-800/50 p-4 rounded-xl border border-navy-700 mb-6">
            <img src="/images/architecture/core-infra/Identity-arc.png" alt="Identity Mesh Architecture" className="w-full rounded border border-navy-600 shadow-xl" />
          </div>
          <p>
            I replaced standard RBAC gateways with a Behavioral Identity Mesh. Instead of checking a token signature, the API gateway queries a centralized relation-graph database. The mesh evaluates real-time telemetry (IP shifts, impossible travel, unrecognized terminal usage) alongside the user's explicit permissions to make a Just-In-Time (JIT) access decision.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Activity className="text-gold-500" /> 3. The Execution
          </h2>
          <p>
            The critical technical challenge was processing complex graph relationships at gateway speeds without creating an unmanageable I/O bottleneck.
          </p>
          <p className="mt-4">
            Instead of executing heavy SQL joins on every request, I decoupled the anomaly detection from the policy enforcement point. The relation tuples (User A -&gt; Reader -&gt; Resource B) are cached heavily in memory. When the simulated ingress context detects an anomaly—like a known user suddenly executing commands from an unrecognized Linux terminal—the engine dynamically mutates the graph, instantly severing the tuple relation and mathematically denying access at the API layer mid-session.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Scale className="text-gold-500" /> 4. The Trade-Offs
          </h2>
          <div className="bg-navy-800 p-8 rounded-lg border-l-4 border-gold-500 italic text-slate-300">
            "I explicitly traded the microsecond, stateless speed of standard JWT validation for dynamic, stateful security. Forcing the gateway to evaluate behavioral context adds minor computational overhead to the ingress path, but it is the only way to achieve true Zero-Trust, session-level revocation."
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <TrendingUp className="text-gold-500" /> 5. The Business Impact
          </h2>
          <ul className="space-y-4 list-none">
            <li className="flex items-start gap-3">
              <span className="text-gold-500 font-bold mt-1">✓</span>
              <span><strong>Instant Containment:</strong> Compromised sessions are revoked in real-time based on behavior, neutralizing token-theft attacks.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gold-500 font-bold mt-1">✓</span>
              <span><strong>Granular JIT Access:</strong> Access to critical production databases is granted temporarily and revoked automatically, shrinking the attack surface.</span>
            </li>
          </ul>
        </section>

      </div>
    </div>
  );
}