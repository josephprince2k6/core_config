import { Cpu, Wind, Box, FileText, CreditCard, CheckCircle, Smartphone } from 'lucide-react';
import { BuildState } from '../types';

interface SidebarProps {
  build: BuildState;
  activeCategory: 'CPU' | 'GPU' | 'RAM' | 'Cooling' | 'Case' | 'Accessories' | 'Displays';
  setActiveCategory: (cat: 'CPU' | 'GPU' | 'RAM' | 'Cooling' | 'Case' | 'Accessories' | 'Displays') => void;
  currentTab: 'systems' | 'configurator' | 'components' | 'checkout';
  setTab: (tab: 'systems' | 'configurator' | 'components' | 'checkout') => void;
}

export default function Sidebar({
  build,
  activeCategory,
  setActiveCategory,
  currentTab,
  setTab,
}: SidebarProps) {
  // Compute total price
  const subtotal = Object.values(build).reduce((sum, item) => sum + (item?.price || 0), 0);

  // Compute total wattage
  const totalWattage = Object.values(build).reduce((sum, item) => sum + (item?.wattage || 0), 0);
  const maxWattage = 850;
  const wattagePercentage = Math.min((totalWattage / maxWattage) * 100, 100);

  // Navigate to category in Configurator tool
  const handleCategoryClick = (category: 'CPU' | 'GPU' | 'RAM' | 'Cooling' | 'Case' | 'Accessories' | 'Displays') => {
    setActiveCategory(category);
    // If we're on the peripherals page, displays and accessories should highlight there
    if (category === 'Accessories' || category === 'Displays') {
      setTab('components');
    } else {
      setTab('configurator');
    }
  };

  return (
    <aside className="w-72 bg-zinc-950 border-r border-zinc-900 flex flex-col h-[calc(100vh-64px)] fixed left-0 top-16 z-40 font-sans">
      {/* Current Rig Widget */}
      <div className="p-6 border-b border-zinc-900 bg-zinc-950">
        <div className="flex justify-between items-center mb-1">
          <span className="font-mono text-[10px] text-indigo-400 font-bold uppercase tracking-widest">Current Rig</span>
          <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 font-mono text-[9px] rounded-full border border-emerald-500/20 tracking-wider uppercase font-bold">
            OK
          </span>
        </div>
        <h3 className="font-display text-base font-black text-white tracking-tight">Precision X1</h3>
        <p className="font-mono text-[10px] text-zinc-500 mt-1">
          Power Duty: <span className="text-white font-medium">{totalWattage}W</span> / {maxWattage}W
        </p>
        <div className="w-full h-1.5 bg-zinc-905 rounded-full mt-3 overflow-hidden relative">
          <div 
            className="h-full bg-indigo-500 rounded-full transition-all duration-500 shadow-[0_0_8px_#6366f1]" 
            style={{ width: `${wattagePercentage}%` }}
          />
        </div>
      </div>

      {/* Nav Sidebar Links */}
      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-6 bg-zinc-950/70">
        <div>
          <p className="px-3 font-sans text-[10px] font-black text-zinc-600 tracking-[0.2em] uppercase mb-2">
            Core Elements
          </p>
          <div className="space-y-1">
            <button
              onClick={() => handleCategoryClick('CPU')}
              className={`w-full flex items-center justify-between px-3.5 py-3 font-mono text-xs uppercase tracking-wider transition-all rounded-xl ${
                currentTab === 'configurator' && activeCategory === 'CPU'
                  ? 'bg-indigo-500/10 text-white border border-indigo-500/30 font-bold'
                  : 'text-zinc-400 hover:text-white border border-transparent hover:bg-zinc-900/40'
              }`}
            >
              <div className="flex items-center gap-3">
                <Cpu size={15} className={currentTab === 'configurator' && activeCategory === 'CPU' ? 'text-indigo-400' : 'text-zinc-500'} />
                <span>CPU</span>
              </div>
              <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${build.CPU ? 'bg-emerald-500/10 text-emerald-400' : 'bg-zinc-900 text-zinc-600'}`}>
                {build.CPU ? 'OK' : 'EMPTY'}
              </span>
            </button>

            <button
              onClick={() => handleCategoryClick('GPU')}
              className={`w-full flex items-center justify-between px-3.5 py-3 font-mono text-xs uppercase tracking-wider transition-all rounded-xl ${
                currentTab === 'configurator' && activeCategory === 'GPU'
                  ? 'bg-indigo-500/10 text-white border border-indigo-500/30 font-bold'
                  : 'text-zinc-400 hover:text-white border border-transparent hover:bg-zinc-900/40'
              }`}
            >
              <div className="flex items-center gap-3">
                <Cpu size={15} className={`rotate-45 ${currentTab === 'configurator' && activeCategory === 'GPU' ? 'text-indigo-400' : 'text-zinc-500'}`} />
                <span>GPU</span>
              </div>
              <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${build.GPU ? 'bg-emerald-500/10 text-emerald-400' : 'bg-zinc-900 text-zinc-600'}`}>
                {build.GPU ? 'OK' : 'EMPTY'}
              </span>
            </button>

            <button
              onClick={() => handleCategoryClick('RAM')}
              className={`w-full flex items-center justify-between px-3.5 py-3 font-mono text-xs uppercase tracking-wider transition-all rounded-xl ${
                currentTab === 'configurator' && activeCategory === 'RAM'
                  ? 'bg-indigo-500/10 text-white border border-indigo-500/30 font-bold'
                  : 'text-zinc-400 hover:text-white border border-transparent hover:bg-zinc-900/40'
              }`}
            >
              <div className="flex items-center gap-3">
                <Smartphone size={15} className={currentTab === 'configurator' && activeCategory === 'RAM' ? 'text-indigo-400' : 'text-zinc-500'} />
                <span>RAM</span>
              </div>
              <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${build.RAM ? 'bg-emerald-500/10 text-emerald-400' : 'bg-zinc-900 text-zinc-600'}`}>
                {build.RAM ? 'OK' : 'EMPTY'}
              </span>
            </button>

            <button
              onClick={() => handleCategoryClick('Cooling')}
              className={`w-full flex items-center justify-between px-3.5 py-3 font-mono text-xs uppercase tracking-wider transition-all rounded-xl ${
                currentTab === 'configurator' && activeCategory === 'Cooling'
                  ? 'bg-indigo-500/10 text-white border border-indigo-500/30 font-bold'
                  : 'text-zinc-400 hover:text-white border border-transparent hover:bg-zinc-900/40'
              }`}
            >
              <div className="flex items-center gap-3">
                <Wind size={15} className={currentTab === 'configurator' && activeCategory === 'Cooling' ? 'text-indigo-400' : 'text-zinc-500'} />
                <span>Cooling</span>
              </div>
              <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${build.Cooling ? 'bg-emerald-500/10 text-emerald-400' : 'bg-zinc-900 text-zinc-600'}`}>
                {build.Cooling ? 'OK' : 'EMPTY'}
              </span>
            </button>

            <button
              onClick={() => handleCategoryClick('Case')}
              className={`w-full flex items-center justify-between px-3.5 py-3 font-mono text-xs uppercase tracking-wider transition-all rounded-xl ${
                currentTab === 'configurator' && activeCategory === 'Case'
                  ? 'bg-indigo-500/10 text-white border border-indigo-500/30 font-bold'
                  : 'text-zinc-400 hover:text-white border border-transparent hover:bg-zinc-900/40'
              }`}
            >
              <div className="flex items-center gap-3">
                <Box size={15} className={currentTab === 'configurator' && activeCategory === 'Case' ? 'text-indigo-400' : 'text-zinc-500'} />
                <span>Case</span>
              </div>
              <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${build.Case ? 'bg-emerald-500/10 text-emerald-400' : 'bg-zinc-900 text-zinc-600'}`}>
                {build.Case ? 'OK' : 'EMPTY'}
              </span>
            </button>
          </div>
        </div>

        <div>
          <p className="px-3 font-sans text-[10px] font-black text-zinc-600 tracking-[0.2em] uppercase mb-2">
            Peripherals
          </p>
          <div className="space-y-1">
            <button
              onClick={() => handleCategoryClick('Accessories')}
              className={`w-full flex items-center justify-between px-3.5 py-3 font-mono text-xs uppercase tracking-wider transition-all rounded-xl ${
                currentTab === 'components' && activeCategory === 'Accessories'
                  ? 'bg-indigo-500/10 text-white border border-indigo-500/30 font-bold'
                  : 'text-zinc-400 hover:text-white border border-transparent hover:bg-zinc-900/40'
              }`}
            >
              <span>Accessories</span>
              <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${build.Accessories ? 'bg-indigo-500/20 text-indigo-400' : 'bg-zinc-900 text-zinc-600'}`}>
                {build.Accessories ? 'ADDED' : 'ADD'}
              </span>
            </button>

            <button
              onClick={() => handleCategoryClick('Displays')}
              className={`w-full flex items-center justify-between px-3.5 py-3 font-mono text-xs uppercase tracking-wider transition-all rounded-xl ${
                currentTab === 'components' && activeCategory === 'Displays'
                  ? 'bg-indigo-500/10 text-white border border-indigo-500/30 font-bold'
                  : 'text-zinc-400 hover:text-white border border-transparent hover:bg-zinc-900/40'
              }`}
            >
              <span>Displays</span>
              <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${build.Displays ? 'bg-indigo-500/20 text-indigo-400' : 'bg-zinc-900 text-zinc-600'}`}>
                {build.Displays ? 'ADDED' : 'ADD'}
              </span>
            </button>
          </div>
        </div>

        <div>
          <p className="px-3 font-sans text-[10px] font-black text-zinc-600 tracking-[0.2em] uppercase mb-2">
            Checkout Phase
          </p>
          <div className="space-y-1">
            <button
              onClick={() => setTab('checkout')}
              className={`w-full flex items-center gap-3 px-3.5 py-3 font-mono text-xs uppercase tracking-wider transition-all rounded-xl ${
                currentTab === 'checkout'
                  ? 'bg-indigo-500/10 text-white border border-indigo-500/30 font-bold'
                  : 'text-zinc-400 hover:text-white border border-transparent hover:bg-zinc-900/40'
              }`}
            >
              <FileText size={15} className={currentTab === 'checkout' ? 'text-indigo-400' : 'text-zinc-500'} />
              <span>Summary</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Persistent Estimation block */}
      <div className="p-6 bg-zinc-900/90 space-y-4 border-t border-zinc-900">
        <div className="flex justify-between items-center">
          <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest font-bold">Total Est</span>
          <span className="font-display font-bold text-lg text-white">
            ₹{subtotal.toLocaleString('en-IN')}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => setTab('checkout')}
            className="flex flex-col items-center justify-center p-2.5 rounded-xl border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all font-sans text-[10px] font-extrabold"
          >
            <FileText size={16} />
            <span className="font-mono text-[9px] mt-1.5 uppercase tracking-wide">Summary</span>
          </button>
          <button
            onClick={() => setTab('checkout')}
            className="flex flex-col items-center justify-center p-2.5 bg-indigo-500 text-white hover:bg-indigo-600 rounded-xl transition-all border border-indigo-600 font-sans text-[10px] font-extrabold shadow-lg shadow-indigo-500/10"
          >
            <CreditCard size={16} />
            <span className="font-mono text-[9px] mt-1.5 uppercase tracking-wide">Checkout</span>
          </button>
        </div>
        <div className="bg-emerald-500/5 border border-emerald-500/20 p-2 rounded-lg flex items-center justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
          <span className="font-mono text-[9px] text-emerald-400 font-bold uppercase tracking-wider">
            COMPATIBILITY: OK
          </span>
        </div>
      </div>
    </aside>
  );
}
