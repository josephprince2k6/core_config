import { ShoppingCart, User } from 'lucide-react';
import { BuildState } from '../types';

interface HeaderProps {
  currentTab: 'systems' | 'configurator' | 'components' | 'checkout';
  setTab: (tab: 'systems' | 'configurator' | 'components' | 'checkout') => void;
  build: BuildState;
}

export default function Header({ currentTab, setTab, build }: HeaderProps) {
  // Count selected items
  const selectedCount = Object.values(build).filter(Boolean).length;

  return (
    <header className="fixed top-0 left-0 w-full h-16 z-50 flex justify-between items-center px-6 md:px-16 bg-zinc-950/90 border-b border-zinc-900 backdrop-blur-md">
      <div className="flex items-center gap-8">
        <div 
          onClick={() => setTab('systems')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-105 duration-200">
            <svg className="w-5.5 h-5.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </div>
          <div>
            <h1 className="font-display text-lg font-black tracking-tight text-white uppercase leading-none">
              CORE_CONFIG
            </h1>
            <p className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest mt-0.5">v4.2 Stable Build</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-2 bg-zinc-900/50 p-1.5 rounded-full border border-zinc-800">
          <button
            onClick={() => setTab('systems')}
            className={`font-sans text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full transition-all ${
              currentTab === 'systems' ? 'text-white bg-indigo-500/10 border border-indigo-500/20' : 'text-zinc-400 hover:text-white border border-transparent'
            }`}
          >
            Systems
          </button>
          <button
            onClick={() => setTab('configurator')}
            className={`font-sans text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full transition-all ${
              currentTab === 'configurator' ? 'text-white bg-indigo-500/10 border border-indigo-500/20' : 'text-zinc-400 hover:text-white border border-transparent'
            }`}
          >
            Configurator
          </button>
          <button
            onClick={() => setTab('components')}
            className={`font-sans text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full transition-all ${
              currentTab === 'components' ? 'text-white bg-indigo-500/10 border border-indigo-500/20' : 'text-zinc-400 hover:text-white border border-transparent'
            }`}
          >
            Components
          </button>
          <button
            onClick={() => setTab('checkout')}
            className={`font-sans text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full transition-all ${
              currentTab === 'checkout' ? 'text-white bg-indigo-500/10 border border-indigo-500/20' : 'text-zinc-400 hover:text-white border border-transparent'
            }`}
          >
            Support
          </button>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        {/* Active Stats Pill */}
        <div className="hidden lg:flex items-center bg-zinc-900 border border-zinc-850 rounded-full px-4 py-1.5 gap-3">
          <div className="flex -space-x-1.5">
            <div className={`w-3.5 h-3.5 rounded-full border border-zinc-950 ${selectedCount >= 1 ? 'bg-indigo-500' : 'bg-zinc-700'}`}></div>
            <div className={`w-3.5 h-3.5 rounded-full border border-zinc-950 ${selectedCount >= 3 ? 'bg-pink-500' : 'bg-zinc-650'}`}></div>
            <div className={`w-3.5 h-3.5 rounded-full border border-zinc-950 ${selectedCount >= 5 ? 'bg-emerald-400' : 'bg-zinc-600'}`}></div>
          </div>
          <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-wider">
            {selectedCount} Active Parts
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button 
            onClick={() => setTab('checkout')}
            className="p-2.5 text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 rounded-xl hover:bg-zinc-800 transition-colors relative"
            title="View Build Summary"
          >
            <ShoppingCart size={18} />
            {selectedCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-indigo-500 text-white font-mono text-[9px] font-bold rounded-full flex items-center justify-center shadow-lg shadow-indigo-500/20">
                {selectedCount}
              </span>
            )}
          </button>
          <button className="p-2.5 text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 rounded-xl hover:bg-zinc-800 transition-colors">
            <User size={18} />
          </button>
        </div>

        <button 
          onClick={() => setTab('configurator')}
          className="font-mono text-[10px] font-extrabold uppercase tracking-widest px-5 py-2.5 bg-white text-black hover:bg-zinc-200 active:scale-95 duration-150 transition-all rounded-xl shadow-lg shadow-zinc-900/10"
        >
          Build Now
        </button>
      </div>
    </header>
  );
}
