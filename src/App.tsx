import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import AiGuardrails from './pages/AiGuardrails';
import CoreInfrastructure from './pages/CoreInfrastructure';
import PlatformFinops from './pages/PlatformFinops';
import DistributedSystems from './pages/DistributedSystems';
import HealthcareCompliance from './pages/HealthcareCompliance';
import SaasVentures from './pages/SaasVentures';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* These routes map directly to the file names we just defined */}
            <Route path="/ai-guardrails" element={<AiGuardrails />} />
            <Route path="/core-infra" element={<CoreInfrastructure />} />
            <Route path="/platform-finops" element={<PlatformFinops />} />
            <Route path="/distributed-systems" element={<DistributedSystems />} />
            <Route path="/healthcare" element={<HealthcareCompliance />} />
            <Route path="/saas" element={<SaasVentures />} />
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