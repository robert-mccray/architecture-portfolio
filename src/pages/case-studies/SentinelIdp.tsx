import { ArrowLeft, Target, Cpu, Activity, Scale, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SentinelIdp() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-16 pb-24">
      <Link to="/platform-finops" className="inline-flex items-center gap-2 text-slate-400 hover:text-gold-400 transition-colors mb-12 font-semibold text-sm tracking-wider uppercase">
        <ArrowLeft size={16} /> Back to Platform Engineering
      </Link>

      <div className="mb-16 border-b border-navy-700 pb-8">
        <h1 className="text-5xl font-extrabold text-white mb-4 tracking-tight">The Sentinel IDP</h1>
        <p className="text-xl text-gold-500 font-medium">Accelerating developer velocity while shifting FinOps left.</p>
      </div>

      <div className="space-y-16 text-lg text-slate-300 leading-relaxed">
        
        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Target className="text-gold-500" /> 1. The Business Problem
          </h2>
          <p>
            Developer velocity was bleeding out through IT Service Management (ITSM) portals. Highly paid engineers were waiting up to 3 weeks for manual Jira tickets to be approved and executed just to provision standard PostgreSQL databases or S3 buckets. This operational friction was costing thousands of dollars in wasted engineering hours per sprint and creating a culture of "Shadow IT" as developers bypassed security to build resources manually.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Cpu className="text-gold-500" /> 2. The Blueprint
          </h2>
          <div className="bg-navy-800/50 p-4 rounded-xl border border-navy-700 mb-6">
            <img src="/images/architecture/ai-guardrails/Sentinel-arc.png" alt="Sentinel IDP Architecture" className="w-full rounded border border-navy-600 shadow-xl" />
          </div>
          <p>
            I architected an Internal Developer Portal (IDP) based on Spotify Backstage. Developers select vetted infrastructure templates from a self-service GUI. The portal dynamically generates the required Terraform code and opens a Pull Request to the infrastructure repository. A CI/CD pipeline intercepts the PR using Open Policy Agent (OPA) for security guardrails and Infracost to calculate the cloud compute bill before a single resource is ever spun up.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Activity className="text-gold-500" /> 3. The Execution
          </h2>
          <p>
            The hardest technical hurdle was enforcing automated governance without requiring human security reviews for every PR. I engineered a "Shift-Left FinOps Gatekeeper." 
          </p>
          <p className="mt-4">
            When the IDP generates the Terraform PR, a GitHub Action triggers an asynchronous container that runs Infracost. It diffs the proposed Terraform state against current spot pricing APIs. If the projected monthly cost of the new database exceeds the microservice's allocated budget tag, the pipeline automatically rejects the PR and posts a comment with the exact cost breakdown, forcing the developer to choose a smaller instance size. 
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Scale className="text-gold-500" /> 4. The Trade-Offs
          </h2>
          <div className="bg-navy-800 p-8 rounded-lg border-l-4 border-gold-500 italic text-slate-300">
            "I explicitly traded pipeline execution speed for total pre-deployment cost predictability. Adding OPA and Infracost evaluations adds roughly 45 seconds to the CI/CD pipeline. However, adding 45 seconds to a machine-driven PR check is a massive upgrade over waiting 3 weeks for a human to approve a Jira ticket."
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <TrendingUp className="text-gold-500" /> 5. The Business Impact
          </h2>
          <ul className="space-y-4 list-none">
            <li className="flex items-start gap-3">
              <span className="text-gold-500 font-bold mt-1">✓</span>
              <span><strong>Eliminated Jira Bottlenecks:</strong> Database provisioning dropped from 3 weeks to 60 seconds.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gold-500 font-bold mt-1">✓</span>
              <span><strong>Shift-Left FinOps:</strong> Cloud waste is caught at the PR level before the compute is ever provisioned, saving estimated thousands in unused overhead.</span>
            </li>
          </ul>
        </section>

      </div>
    </div>
  );
}