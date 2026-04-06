import { Link } from 'react-router-dom';
import { Network } from 'lucide-react';

export default function ArchitectureGallery() {
  const architectures = [
    {
      title: "MHD Multi-Cloud HIPAA Platform",
      category: "Healthcare & Compliance",
      image: "/images/healthcare/architecture/mhd-arc.png", // Change to .png if necessary
      link: "/healthcare"
    },
    {
      title: "Living Care Operational Data Flow",
      category: "Healthcare & Compliance",
      image: "/images/healthcare/architecture/grooming-arc.png",
      link: "/healthcare"
    },
    {
      title: "SRE Bot",
      category: "Core Infra",
      image: "/images/healthcare/architecture/SRE-arc.png",
      link: "/core-infra"
    },
    {
      title: "Sentinel IDP",
      category: "Platform Engineering",
      image: "/images/healthcare/architecture/Sentinel-arc.png",
      link: "/platform-finops"
    },
    {
      title: "Shift-Left FinOps",
      category: "Platform Engineering",
      image: "/images/healthcare/architecture/Finops-arc.png",
      link: "/platform-finops"
    },
    {
      title: "Identity Mesh",
      category: "Core Infra",
      image: "/images/healthcare/architecture/Identity-arc.png",
      link: "/core-infra"
    },
    {
      title: "Aegis Zero-Trust K8s Quarantine",
      category: "Core Infra & SecOps",
      image: "/images/healthcare/architecture/Aegis-arc.png",
      link: "/core-infra"
    },
    {
      title: "LLM Unit-Economics Circuit Breaker",
      category: "AI Guardrails",
      image: "/images/healthcare/architecture/ROI-arc.png",
      link: "/ai-guardrails"
    },
    {
      title: "Immutable Data Lineage Ledger",
      category: "AI Guardrails",
      image: "/images/healthcare/architecture/Linear-arc.png",
      link: "/ai-guardrails"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 pt-16 pb-24">
      <div className="mb-16 border-b border-navy-700 pb-8">
        <h1 className="text-5xl font-extrabold text-white mb-4 flex items-center gap-4">
          <Network className="text-gold-500" size={48} />
          Architecture & Systems Gallery
        </h1>
        <p className="text-xl text-gold-500 font-medium">A macro view of governed topologies, data flows, and security meshes.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {architectures.map((arch, index) => (
          <Link 
            to={arch.link} 
            key={index}
            className="group bg-navy-800/50 border border-navy-700 rounded-xl overflow-hidden hover:border-gold-500 transition-all duration-300"
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