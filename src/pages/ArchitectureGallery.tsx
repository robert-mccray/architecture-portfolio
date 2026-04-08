import { Link } from 'react-router-dom';
import { Network } from 'lucide-react';

export default function ArchitectureGallery() {
  const architectures = [
    {
      title: "MHD Multi-Cloud HIPAA Platform",
      category: "Healthcare & Compliance",
      image: "/images/architecture/healthcare/mhd-arc.png",
      link: "/case-studies/mhd-platform" // Updated
    },
    {
      title: "Living Care Operational Data Flow",
      category: "Healthcare & Compliance",
      image: "/images/architecture/healthcare/grooming-arc.png",
      link: "/case-studies/living-care" // Updated
    },
    {
      title: "SRE Bot",
      category: "Core Infra",
      image: "/images/architecture/core-infra/SRE-arc.png",
      link: "/case-studies/sre-bot" // Updated
    },
    {
      title: "Sentinel IDP",
      category: "Platform Engineering",
      image: "/images/architecture/ai-guardrails/Sentinel-arc.png", 
      link: "/case-studies/sentinel-idp" // Updated
    },
    {
      title: "Predictive Runtime Router",
      category: "Platform Engineering",
      image: "/images/architecture/ai-guardrails/Finops-arc.png", 
      link: "/case-studies/finops-router" // Updated
    },
    {
      title: "Identity Mesh",
      category: "Core Infra",
      image: "/images/architecture/core-infra/Identity-arc.png",
      link: "/case-studies/identity-mesh" // Updated
    },
    {
      title: "Aegis Zero-Trust K8s Quarantine",
      category: "Core Infra & SecOps",
      image: "/images/architecture/core-infra/Aegis-arc.png",
      link: "/case-studies/aegis-engine" // Updated
    },
    {
      title: "LLM Unit-Economics Circuit Breaker",
      category: "AI Guardrails",
      image: "/images/architecture/ai-guardrails/ROI-arc.png",
      link: "/case-studies/finops-proxy" // Updated
    },
    {
      title: "Immutable Data Lineage Ledger",
      category: "AI Guardrails",
      image: "/images/architecture/ai-guardrails/Linear-arc.png",
      link: "/case-studies/data-lineage" // Updated
    },
    {
      title: "Distributed Quant Trading Cluster",
      category: "Distributed Systems",
      image: "/images/architecture/core-infra/Quant-arc.png", // Ensure this image exists
      link: "/case-studies/quant-trading"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 pt-16 pb-24">
      <div className="mb-12 border-b border-navy-700 pb-8">
        <h1 className="text-5xl font-extrabold text-white mb-4 flex items-center gap-4">
          <Network className="text-gold-500" size={48} />
          Architecture & Systems Gallery
        </h1>
        <p className="text-xl text-gold-500 font-medium">A macro view of governed topologies, data flows, and security meshes.</p>
      </div>

      {/* AI Transparency Banner */}
      <div className="mb-12 bg-navy-800/30 border border-navy-700 rounded-lg p-5 flex items-start gap-4">
        <div className="text-slate-400 mt-0.5">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
        </div>
        <div>
          <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-1">Transparency Note: AI-Assisted Documentation</h4>
          <p className="text-sm text-slate-400 leading-relaxed">
            The architectural topology maps and visual diagrams in this gallery were rendered using Google Gemini based on my strict structural prompts. I leverage multimodal AI for rapid visual standardization, allowing me to focus my engineering cycles on system design, risk mitigation, and execution rather than manual vector drafting.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {architectures.map((arch, index) => (
          <Link 
            to={arch.link} 
            key={index}
            className="group bg-navy-800/50 border border-navy-700 rounded-xl overflow-hidden hover:border-gold-500 transition-all duration-300 shadow-lg"
          >
            <div className="h-64 overflow-hidden border-b border-navy-700 bg-navy-900 p-2">
              <img 
                src={arch.image} 
                alt={arch.title} 
                className="w-full h-full object-cover object-top rounded opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="p-6">
              <p className="text-xs font-bold tracking-widest text-gold-500 uppercase mb-2">{arch.category}</p>
              <h3 className="text-2xl font-bold text-white group-hover:text-gold-400 transition-colors">
                {arch.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}