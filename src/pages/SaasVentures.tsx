import { Terminal, LineChart } from 'lucide-react';

export default function SaasVentures() {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-16 pb-24">
      <div className="mb-16 border-b border-navy-700 pb-8">
        <h1 className="text-5xl font-extrabold text-white mb-4">Platform Engineering & FinOps</h1>
        <p className="text-xl text-gold-500 font-medium">Self-service infrastructure meets rigorous cost control.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-white flex items-center gap-3">
            <Terminal className="text-gold-500" /> The Sentinel IDP
          </h2>
          <p className="text-slate-300 leading-relaxed">
            Eliminated manual Jira ticketing bottlenecks by architecting a Spotify Backstage Internal Developer Portal. Enabled 60-second self-service database provisioning via dynamically generated Terraform. 
          </p>
          <div className="bg-navy-800 p-6 rounded border border-navy-600">
            <h3 className="text-gold-400 font-bold mb-2">Shift-Left FinOps Gatekeeper</h3>
            <p className="text-slate-300 text-sm">
              Intercepts CI/CD Pull Requests using OPA and Infracost to identify cloud compute savings pre-merge, enforcing security-by-design and unit economics before code reaches production.
            </p>
          </div>
          <img src="/images/core-infra/sentinel-idp.png" alt="Sentinel IDP" className="w-full rounded border border-navy-600 shadow-xl" />
        </div>

        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-white flex items-center gap-3">
            <LineChart className="text-gold-500" /> Predictive Runtime Router
          </h2>
          <p className="text-slate-300 leading-relaxed">
            A dynamic Layer-7 API Gateway that pulls real-time spot pricing and network latency for AWS and Azure. It evaluates this data millisecond by millisecond, autonomously routing traffic to the optimal cloud region.
          </p>
          <div className="bg-navy-800 p-6 rounded border border-navy-600">
            <h3 className="text-gold-400 font-bold mb-2">Trade-Off: Cost vs. UX</h3>
            <p className="text-slate-300 text-sm">
              I explicitly trade absolute bottom-dollar compute prices to maintain User Experience. If AWS is $0.01 cheaper but experiencing a 400ms latency spike, the AI routes to Azure. Optimization must never degrade performance.
            </p>
          </div>
          {/* Note: This is the screenshot of the router deciding between AWS and Azure */}
          <img src="/images/core-infra/router.png" alt="FinOps Router" className="w-full rounded border border-navy-600 shadow-xl" /> 
        </div>
      </div>
    </div>
  );
}