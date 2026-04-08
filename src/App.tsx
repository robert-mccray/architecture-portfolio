import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

// Hub Pages (Domain Overviews & Gallery)
import Home from './pages/Home';
import AiGuardrails from './pages/AiGuardrails';
import CoreInfrastructure from './pages/CoreInfrastructure';
import PlatformFinops from './pages/PlatformFinops';
import DistributedSystems from './pages/DistributedSystems';
import HealthcareCompliance from './pages/HealthcareCompliance';
import SaasVentures from './pages/SaasVentures';
import ArchitectureGallery from './pages/ArchitectureGallery';


// Spoke Pages (Deep-Dive Case Studies)
import FinopsProxy from './pages/case-studies/FinopsProxy';
import SentinelIdp from './pages/case-studies/SentinelIdp';
import DataLineage from './pages/case-studies/DataLineage';
import AegisEngine from './pages/case-studies/AegisEngine';
import SreBot from './pages/case-studies/SreBot';
import MhdPlatform from './pages/case-studies/MhdPlatform.tsx';
import LivingCare from './pages/case-studies/LivingCare';
import FinopsRouter from './pages/case-studies/FinopsRouter';
import IdentityMesh from './pages/case-studies/IdentityMesh';
import QuantTrading from './pages/case-studies/QuantTrading';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            {/* Hub Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/ai-guardrails" element={<AiGuardrails />} />
            <Route path="/core-infra" element={<CoreInfrastructure />} />
            <Route path="/platform-finops" element={<PlatformFinops />} />
            <Route path="/distributed-systems" element={<DistributedSystems />} />
            <Route path="/healthcare" element={<HealthcareCompliance />} />
            <Route path="/saas" element={<SaasVentures />} />
            <Route path="/architecture" element={<ArchitectureGallery />} />

            {/* Spoke Routes (Case Studies) */}
            <Route path="/case-studies/finops-proxy" element={<FinopsProxy />} />
            <Route path="/case-studies/sentinel-idp" element={<SentinelIdp />} />
            <Route path="/case-studies/data-lineage" element={<DataLineage />} />
            <Route path="/case-studies/aegis-engine" element={<AegisEngine />} />
            <Route path="/case-studies/sre-bot" element={<SreBot />} />
            <Route path="/case-studies/mhd-platform" element={<MhdPlatform />} />
            <Route path="/case-studies/living-care" element={<LivingCare />} />
            <Route path="/case-studies/finops-router" element={<FinopsRouter />} />
            <Route path="/case-studies/identity-mesh" element={<IdentityMesh />} />
            <Route path="/case-studies/quant-trading" element={<QuantTrading />} />
          </Routes>
        </main>
        <footer className="bg-navy-800 border-t border-navy-700 py-8 text-center text-sm text-slate-500 mt-20">
          <p>© {new Date().getFullYear()} Robert McCray. Principal Cloud Architect.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;