import { Link, useLocation } from 'react-router-dom';
import { Download } from 'lucide-react';

export default function Header() {
  const location = useLocation();
  
  // Helper to highlight active links
  const isActive = (path: string) => location.pathname === path 
    ? "text-gold-400 border-b-2 border-gold-500 pb-1" 
    : "hover:text-gold-400 transition-colors pb-1";

  return (
    <header className="border-b border-navy-700 bg-navy-900/90 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-2xl font-bold text-white tracking-tighter flex items-center">
            RM <span className="text-navy-700 mx-2">|</span> <span className="text-slate-400 text-sm font-normal tracking-normal">Secure Systems</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-300">
          <Link to="/" className={isActive('/')}>HOME</Link>
          <Link to="/ai-guardrails" className={isActive('/ai-guardrails')}>AI GUARDRAILS</Link>
          <Link to="/core-infra" className={isActive('/core-infra')}>CORE INFRA</Link>
          <Link to="/platform-finops" className={isActive('/platform-finops')}>FINOPS</Link>
          <Link to="/healthcare" className={isActive('/healthcare')}>HEALTHCARE</Link>
          <a href="mailto:mccrayrobert26@gmail.com" className="hover:text-gold-400 transition-colors pb-1 ml-4">CONTACT</a>
        </nav>

        <a 
          href="/resume.pdf" 
          target="_blank"
          className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded border border-slate-600 hover:border-gold-500 hover:text-gold-400 transition-all text-sm font-semibold"
        >
          <Download size={16} />
          Resume
        </a>
      </div>
    </header>
  );
}