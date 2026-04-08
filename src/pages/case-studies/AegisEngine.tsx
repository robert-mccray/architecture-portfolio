import { ArrowLeft, Target, Cpu, Activity, Scale, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AegisEngine() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-16 pb-24">
      <Link to="/core-infra" className="inline-flex items-center gap-2 text-slate-400 hover:text-gold-400 transition-colors mb-12 font-semibold text-sm tracking-wider uppercase">
        <ArrowLeft size={16} /> Back to Core Infrastructure
      </Link>

      <div className="mb-16 border-b border-navy-700 pb-8">
        <h1 className="text-5xl font-extrabold text-white mb-4 tracking-tight">The Aegis Engine</h1>
        <p className="text-xl text-gold-500 font-medium">Zero-Trust AI Governance and Automated "Shadow AI" Quarantine.</p>
      </div>

      <div className="space-y-16 text-lg text-slate-300 leading-relaxed">
        
        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Target className="text-gold-500" /> 1. The Business Problem
          </h2>
          <p>
            CISOs are terrified of "Shadow AI." Developers and rogue microservices are constantly attempting to bypass internal firewalls to paste proprietary company code or PHI into unauthorized public LLMs like ChatGPT or Claude. Traditional network perimeters are too slow to catch unauthorized API calls originating deep inside a Kubernetes cluster, creating massive data exfiltration risks and instant HIPAA violations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Cpu className="text-gold-500" /> 2. The Blueprint
          </h2>
          <div className="bg-navy-800/50 p-4 rounded-xl border border-navy-700 mb-6">
            <img src="/images/architecture/core-infra/Aegis-arc.png" alt="Aegis Architecture" className="w-full rounded border border-navy-600 shadow-xl" />
          </div>
          <p>
            I engineered "Aegis," a Zero-Trust egress governor for Kubernetes. It deploys as a DaemonSet/Sidecar that constantly sniffs Kubernetes CoreDNS logs for egress traffic. If a pod attempts to resolve an unauthorized external domain (e.g., `api.openai.com`), Aegis intercepts the alert. A local AI governance controller instantly generates a hardcoded Kubernetes NetworkPolicy and applies it to the cluster, actively quarantining the offending pod by severing its network I/O.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Activity className="text-gold-500" /> 3. The Execution
          </h2>
          <p>
            The hardest technical challenge was executing the quarantine fast enough to prevent the TCP handshake from completing and the data from leaving the network.
          </p>
          <p className="mt-4">
            Instead of relying on heavy layer-7 proxy inspections which slow down the entire cluster, I utilized eBPF (Extended Berkeley Packet Filter) patterns and direct DNS monitoring. Aegis evaluates the DNS request before the connection is established. Once an anomaly is flagged, the Go-based controller uses the local Kubernetes API service account to inject a `Deny-All Egress` NetworkPolicy targeted directly at the pod's specific metadata labels within milliseconds.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Scale className="text-gold-500" /> 4. The Trade-Offs
          </h2>
          <div className="bg-navy-800 p-8 rounded-lg border-l-4 border-gold-500 italic text-slate-300">
            "I explicitly traded development velocity and 'False Positive' risk for absolute data containment. If the Aegis Engine misidentifies a DNS request, it will quarantine a potentially healthy pod, causing a momentary service disruption. However, in a regulated PHI environment, I will gladly accept a 2-minute microservice restart over a catastrophic, multi-million dollar data breach."
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <TrendingUp className="text-gold-500" /> 5. The Business Impact
          </h2>
          <ul className="space-y-4 list-none">
            <li className="flex items-start gap-3">
              <span className="text-gold-500 font-bold mt-1">✓</span>
              <span><strong>Zero Data Exfiltration:</strong> Total elimination of Shadow AI API calls from within production clusters.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gold-500 font-bold mt-1">✓</span>
              <span><strong>Autonomous SecOps:</strong> Security teams no longer have to manually respond to egress alerts; the cluster self-heals and contains threats autonomously.</span>
            </li>
          </ul>
        </section>

      </div>
    </div>
  );
}