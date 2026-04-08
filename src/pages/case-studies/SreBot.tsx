import { ArrowLeft, Target, Cpu, Activity, Scale, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SreBot() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-16 pb-24">
      <Link to="/core-infra" className="inline-flex items-center gap-2 text-slate-400 hover:text-gold-400 transition-colors mb-12 font-semibold text-sm tracking-wider uppercase">
        <ArrowLeft size={16} /> Back to Core Infrastructure
      </Link>

      <div className="mb-16 border-b border-navy-700 pb-8">
        <h1 className="text-5xl font-extrabold text-white mb-4 tracking-tight">Autonomous SRE-Bot</h1>
        <p className="text-xl text-gold-500 font-medium">Drastically reducing MTTR by translating cryptic syscalls into executable patches.</p>
      </div>

      <div className="space-y-16 text-lg text-slate-300 leading-relaxed">
        
        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Target className="text-gold-500" /> 1. The Business Problem
          </h2>
          <p>
            Site Reliability Engineers (SREs) were suffering from severe alert fatigue. Security tools like Falco emit highly cryptic, low-level Linux syscall alerts when a container misbehaves. SREs were spending hours manually parsing these logs, researching the root cause, and writing patches while production systems degraded. Mean Time To Resolution (MTTR) was dangerously high.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Cpu className="text-gold-500" /> 2. The Blueprint
          </h2>
          <div className="bg-navy-800/50 p-4 rounded-xl border border-navy-700 mb-6">
            <img src="/images/architecture/core-infra/SRE-arc.png" alt="SRE Bot Architecture" className="w-full rounded border border-navy-600 shadow-xl" />
          </div>
          <p>
            I deployed an air-gapped LLM (Llama-3 Oracle) directly inside the management cluster. When Falco detects an anomaly, it forwards the raw JSON payload to the SRE-Bot. The bot parses the syscalls, determines the root cause (e.g., an Alpine image trying to execute a Windows binary), translates it into plain-English, and generates the exact `kubectl` command needed to fix the issue.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Activity className="text-gold-500" /> 3. The Execution
          </h2>
          <p>
            The hardest challenge was ensuring the AI had enough context to be accurate without exposing highly sensitive cluster telemetry to the public internet via OpenAI.
          </p>
          <p className="mt-4">
            I engineered a completely local, air-gapped pipeline. The LLM runs on local infrastructure with strict egress controls. I utilized advanced system prompt engineering to constrain the model's output strictly to Kubernetes context, preventing hallucinations and ensuring the generated patches are syntactically valid before they are presented to the engineer.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Scale className="text-gold-500" /> 4. The Trade-Offs
          </h2>
          <div className="bg-navy-800 p-8 rounded-lg border-l-4 border-gold-500 italic text-slate-300">
            "I explicitly traded full automation for a Human-In-The-Loop (HITL) safeguard. While the AI is fully capable of executing the patch itself, the risk of a hallucinated cluster state change taking down production is too high. The bot serves as an ultra-fast advisor, but an engineer must press 'Approve' to execute the fix."
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <TrendingUp className="text-gold-500" /> 5. The Business Impact
          </h2>
          <ul className="space-y-4 list-none">
            <li className="flex items-start gap-3">
              <span className="text-gold-500 font-bold mt-1">✓</span>
              <span><strong>Reduced MTTR:</strong> Troubleshooting time dropped from hours to seconds as engineers immediately receive the root cause and the fix.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gold-500 font-bold mt-1">✓</span>
              <span><strong>Data Privacy:</strong> Cluster state and security vulnerabilities never leave the secure VPC environment.</span>
            </li>
          </ul>
        </section>

      </div>
    </div>
  );
}