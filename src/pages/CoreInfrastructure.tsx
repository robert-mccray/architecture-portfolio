import { Shield, Activity, Key } from 'lucide-react';

export default function CoreInfrastructure() {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-16 pb-24">
      <div className="mb-16 border-b border-navy-700 pb-8">
        <h1 className="text-5xl font-extrabold text-white mb-4">Core Infrastructure & SecOps</h1>
        <p className="text-xl text-gold-500 font-medium">Autonomous incident remediation and Zero-Trust perimeters.</p>
      </div>

      <div className="space-y-16">
        
        {/* Aegis */}
        <div className="bg-navy-800/50 border border-navy-700 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <Shield className="text-gold-500" /> Aegis Engine (Zero-Trust AI Governance)
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <p className="text-slate-300 leading-relaxed">
              Deployed a Kubernetes CoreDNS egress sniffer that autonomously generates and applies NetworkPolicies to quarantine pods attempting "Shadow AI" data exfiltration. I accept the risk of a "False Positive" breaking a production service to completely eliminate the risk of a catastrophic HIPAA data breach.
            </p>
            <img src="/images/core-infra/aegis-quarantine.png" alt="Aegis K8s Quarantine" className="w-full rounded border border-navy-600" />
          </div>
        </div>

        {/* SRE & Identity Mesh */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-navy-800/50 border border-navy-700 rounded-xl p-8">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <Activity className="text-gold-500" /> Autonomous SRE-Bot
            </h2>
            <p className="text-slate-300 mb-6 text-sm leading-relaxed">
              Reduced MTTR by deploying an air-gapped Llama-3 Oracle to translate cryptic Falco syscalls into plain-English root cause analyses with executable kubectl patches, eliminating severe alert fatigue.
            </p>
            <img src="/images/core-infra/sre-bot-identity.png" alt="SRE Bot" className="w-full rounded border border-navy-600" />
          </div>

          <div className="bg-navy-800/50 border border-navy-700 rounded-xl p-8">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <Key className="text-gold-500" /> Behavioral Identity Mesh
            </h2>
            <p className="text-slate-300 mb-6 text-sm leading-relaxed">
              Replaced static IAM with a Google Zanzibar-inspired Identity Mesh. It evaluates real-time telemetry to execute Just-In-Time (JIT) access revocations. I explicitly trade the microsecond speed of static JWTs for dynamic, context-aware security.
            </p>
            {/* Reusing the same image or a different one if you have it */}
            <img src="/images/core-infra/sre-bot-identity.png" alt="Identity Mesh" className="w-full rounded border border-navy-600" />
          </div>
        </div>
      </div>
    </div>
  );
}