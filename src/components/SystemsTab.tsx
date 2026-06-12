import { ArrowRight, ShoppingCart, ShieldCheck, Thermometer, UserCheck, Cpu, ExternalLink } from 'lucide-react';
import { PRECONFIG_RIGS, COMPONENT_LIST } from '../data';
import { PreconfiguredRig, BuildState } from '../types';

interface SystemsTabProps {
  onSelectRig: (rig: PreconfiguredRig) => void;
  setTab: (tab: 'systems' | 'configurator' | 'components' | 'checkout') => void;
}

export default function SystemsTab({ onSelectRig, setTab }: SystemsTabProps) {
  const handleRigClick = (rig: PreconfiguredRig) => {
    onSelectRig(rig);
    setTab('checkout');
  };

  return (
    <div className="min-h-screen text-cyber-on-surface-variant font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        {/* Background photo of premium build */}
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover opacity-60 transform scale-105 hover:scale-100 transition-transform duration-1000" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYfvMOup8r_olzHd00LF3KM4pBQZKhe3wBzqpdEfilQiJT94a9v8ihu5BvdJQC0SpOTTHysQN-gzoLGoG3JnZATRFVv8luQviwPcjBXZOZ7P6ijCMQS72a5SJMTrETRq5r59x1R4mvCL5TvEd5TsNjPMwOMxbaRGrvHO5TMqghU3pfTZBVzd06c8QdxATctBKXDZ7-1FK-swPGoBJilbtku6eyRz7JdtkUpZPDrAVqBiZadys20YB5cpnEytoi62xIs6HCDdgIQzs" 
            alt="Premium Liquid Cooled custom PC" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30"></div>
        </div>

        <div className="relative z-10 px-8 md:px-16 max-w-7xl mx-auto w-full">
          <div className="max-w-3xl">
            {/* Custom pulse tag */}
            <div className="inline-flex items-center gap-2 mb-6 bg-cyber-lime/10 border border-cyber-lime/30 px-3 py-1 text-cyber-lime font-mono text-xs uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-cyber-lime-bright animate-ping"></span>
              Now Shipping RTX 50-Series Ready
            </div>

            <h1 className="font-display text-5xl md:text-7xl font-extrabold leading-none mb-6 tracking-tighter text-white">
              BUILD YOUR <span className="text-cyber-primary-dim glow-text-primary">LEGACY</span>
            </h1>

            <p className="font-sans text-base md:text-lg text-cyber-outline mb-10 max-w-xl leading-relaxed">
              Experience the pinnacle of PC engineering. Every CORE_CONFIG system is hand-assembled with surgical precision, liquid-cooled for silence, and stress-tested for ultimate stability.
            </p>

            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => setTab('configurator')}
                className="bg-cyber-primary-dim text-black px-8 py-4 font-mono text-base font-bold hover:bg-cyber-primary hover:shadow-[0_0_20px_rgba(0,219,233,0.5)] transition-all flex items-center gap-3 group"
              >
                Start Building
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('featured-rigs');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border border-cyber-outline/30 text-white px-8 py-4 font-mono text-base hover:bg-white/10 transition-all uppercase"
              >
                View Systems
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="font-mono text-[9px] uppercase tracking-widest text-cyber-outline">Scroll to explore</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-cyber-primary-dim to-transparent"></div>
        </div>
      </section>

      {/* Featured Systems Section */}
      <section id="featured-rigs" className="py-24 px-8 md:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-cyber-primary-dim uppercase tracking-wider mb-3">
              FEATURED RIGS
            </h2>
            <p className="font-sans text-sm text-cyber-outline max-w-xl">
              Pre-configured battle stations tuned for professional performance and ultimate esports dominance.
            </p>
          </div>
          <button 
            onClick={() => setTab('configurator')}
            className="font-mono text-xs text-cyber-lime hover:underline flex items-center gap-2 mt-4 md:mt-0 font-bold tracking-wider"
          >
            View All Parts
            <ExternalLink size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRECONFIG_RIGS.map((rig) => (
            <div 
              key={rig.id} 
              className="bg-zinc-900/60 border border-zinc-850 hover:border-indigo-500 rounded-[32px] p-6.5 transition-all duration-300 relative group flex flex-col h-full overflow-hidden"
            >
              <div className="space-y-4 flex-1">
                <div className="aspect-square bg-black overflow-hidden relative rounded-2.5xl border border-zinc-800">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    src={rig.image} 
                    alt={rig.name} 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 right-3 bg-zinc-950/90 px-3 py-1 rounded-full border border-zinc-800 text-[9px] font-mono font-bold text-zinc-400 uppercase tracking-widest">
                    Core Rig
                  </div>
                </div>

                <div className="flex justify-between items-start pt-1">
                  <h3 className="font-display text-base font-extrabold text-white tracking-tight">{rig.name}</h3>
                  <span className={`font-mono text-[9px] font-bold px-2.5 py-1 rounded-full border uppercase tracking-wider ${
                    rig.status === 'IN STOCK' 
                      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                      : 'bg-zinc-800 text-zinc-400/70 border-zinc-700/30'
                  }`}>
                    {rig.status}
                  </span>
                </div>

                <div className="space-y-2 border-t border-zinc-800 pt-4 text-xs font-sans text-zinc-400">
                  <div className="flex justify-between pb-1 border-b border-zinc-900">
                    <span className="font-bold text-[10px] uppercase text-zinc-500 tracking-wider">CPU</span>
                    <span className="text-white text-right truncate max-w-[180px] font-medium" title={rig.specs.cpu}>{rig.specs.cpu}</span>
                  </div>
                  <div className="flex justify-between pb-1 border-b border-zinc-900">
                    <span className="font-bold text-[10px] uppercase text-zinc-500 tracking-wider">GPU</span>
                    <span className="text-white text-right truncate max-w-[180px] font-medium" title={rig.specs.gpu}>{rig.specs.gpu}</span>
                  </div>
                  <div className="flex justify-between pb-1 border-b border-zinc-900">
                    <span className="font-bold text-[10px] uppercase text-zinc-500 tracking-wider">RAM</span>
                    <span className="text-white text-right truncate max-w-[180px] font-medium" title={rig.specs.ram}>{rig.specs.ram}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mt-6 pt-4 border-t border-zinc-800">
                <span className="font-display text-xl font-black text-white">
                  ₹{rig.price.toLocaleString('en-IN')}
                </span>
                <button 
                  onClick={() => handleRigClick(rig)}
                  className="bg-indigo-500 hover:bg-indigo-600 p-3 rounded-xl transition-all text-white shadow-lg shadow-indigo-500/15"
                  title="Configure and Order"
                >
                  <ShoppingCart size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy Bento Grid (Precision Engineering) */}
      <section className="bg-[#09090b]/40 py-24 border-y border-zinc-900">
        <div className="px-8 md:px-16 max-w-7xl mx-auto">
          <h2 className="font-display text-3xl font-black text-white mb-4 text-center uppercase tracking-tight">
            PRECISION ENGINEERING
          </h2>
          <p className="text-zinc-500 text-sm text-center max-w-md mx-auto mb-16 font-sans">
            Our build standards are certified, tested, and fine-tuned for uninterrupted heavy load performance.
          </p>

          <div className="grid grid-cols-12 gap-6">
            {/* Bento Block 1: Compatibility */}
            <div className="col-span-12 md:col-span-8 bg-zinc-900 border border-zinc-800 rounded-[32px] p-10 flex flex-col justify-between group">
              <div>
                <Cpu size={36} className="text-indigo-400 mb-6" />
                <h3 className="font-display text-xl font-bold text-white mb-4">Precision Compatibility Engine</h3>
                <p className="text-zinc-400 text-sm max-w-lg leading-relaxed mb-8">
                  Our proprietary algorithm analyzes over 150 thermal and physical data points per component to ensure 100% hardware synergy and zero bottlenecking.
                </p>
              </div>
              <div className="flex gap-4 items-center border-t border-zinc-800 pt-4">
                <div className="h-1 flex-1 bg-zinc-800 rounded overflow-hidden">
                  <div className="h-full bg-indigo-500 w-3/4 group-hover:w-full transition-all duration-1000"></div>
                </div>
                <span className="font-mono text-[9px] font-bold text-indigo-400 uppercase tracking-widest">
                  DATA SYNC COMPLETE
                </span>
              </div>
            </div>

            {/* Bento Block 2: Master Assembly */}
            <div className="col-span-12 md:col-span-4 bg-indigo-500 text-white rounded-[32px] p-10 flex flex-col justify-between shadow-xl shadow-indigo-500/10">
              <div>
                <UserCheck size={36} className="mb-6 opacity-90" />
                <h3 className="font-display text-xl font-bold mb-4">Master Builders</h3>
                <p className="text-xs font-sans leading-relaxed opacity-90">
                  Each system is hand-built by a certified master engineer with a minimum of 10 years experience in thermal dynamics and electric architecture.
                </p>
              </div>
              <button 
                onClick={() => setTab('configurator')}
                className="font-mono text-xs font-bold underline underline-offset-4 decoration-2 hover:opacity-85 text-left mt-8 inline-block uppercase tracking-wider"
              >
                START YOUR CONFIGURATION
              </button>
            </div>

            {/* Bento Block 3: Temperature Stress */}
            <div className="col-span-12 md:col-span-4 bg-zinc-900 border border-zinc-800 rounded-[32px] p-8 shadow-sm">
              <Thermometer size={28} className="text-pink-500 mb-4" />
              <h4 className="font-display text-lg font-bold text-white mb-2">48h Stress Test</h4>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Every unit undergoes a grueling 48-hour thermal benchmark under 100% synthetic load before leaving our precision lab.
              </p>
            </div>

            {/* Bento Block 4: Support */}
            <div className="col-span-12 md:col-span-8 bg-zinc-900 border border-zinc-800 rounded-[32px] p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 overflow-hidden group shadow-sm">
              <div className="flex-1">
                <ShieldCheck size={28} className="text-emerald-400 mb-4" />
                <h4 className="font-display text-lg font-bold text-white mb-2">Lifetime White-Glove Support</h4>
                <p className="text-zinc-400 text-xs leading-relaxed max-w-md">
                  Direct access to the engineer who built your system. No tiers, no scripts, just expert solutions on the spot.
                </p>
              </div>
              <div className="w-full md:w-48 bg-zinc-950 border border-zinc-850 p-4 rounded-2xl relative overflow-hidden">
                <div className="relative z-10 flex flex-col gap-2 font-mono text-[9px] text-emerald-400">
                  <div className="w-full h-1 bg-emerald-500/20"></div>
                  <div className="w-2/3 h-1 bg-emerald-500/20"></div>
                  <div className="w-1/2 h-1 bg-emerald-500"></div>
                  <span className="mt-1 font-bold tracking-widest">ENGINEER_ONLINE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Footer (Image 3) */}
      <footer className="bg-black py-16 px-8 md:px-16 border-t border-cyber-outline-variant/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h4 className="font-display text-lg font-extrabold text-white tracking-widest">CORE_CONFIG</h4>
            <p className="font-sans text-xs text-cyber-outline max-w-xs leading-relaxed">
              Premium high-performance computing solutions for enthusiasts, creators, and professionals. Precision engineering is our standard.
            </p>
          </div>
          <div>
            <h5 className="font-mono text-xs font-bold text-white uppercase tracking-widest mb-4">Systems</h5>
            <ul className="space-y-2 font-sans text-xs text-cyber-outline">
              <li><button onClick={() => setTab('configurator')} className="hover:text-cyber-lime transition-all">Gaming PCs</button></li>
              <li><button onClick={() => setTab('configurator')} className="hover:text-cyber-lime transition-all">Workstations</button></li>
              <li><button onClick={() => setTab('components')} className="hover:text-cyber-lime transition-all">Custom Loops</button></li>
            </ul>
          </div>
          <div>
            <h5 className="font-mono text-xs font-bold text-white uppercase tracking-widest mb-4">Support</h5>
            <ul className="space-y-2 font-sans text-xs text-cyber-outline">
              <li><a href="#" className="hover:text-cyber-lime transition-all">Technical Support</a></li>
              <li><a href="#" className="hover:text-cyber-lime transition-all">Shipping Info</a></li>
              <li><a href="#" className="hover:text-cyber-lime transition-all">Affiliates</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-mono text-xs font-bold text-white uppercase tracking-widest mb-4">Company</h5>
            <ul className="space-y-2 font-sans text-xs text-cyber-outline">
              <li><a href="#" className="hover:text-cyber-lime transition-all">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-cyber-lime transition-all">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-cyber-outline-variant/15 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-cyber-outline">
          <p>© 2026 CORE_CONFIG PRECISION SYSTEMS. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <span>SYSTEM STATUS: <span className="text-cyber-lime">ONLINE</span></span>
            <span>GLOBAL LATENCY: <span className="text-cyber-lime">12MS</span></span>
          </div>
        </div>
      </footer>
    </div>
  );
}
