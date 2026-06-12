import { useState } from 'react';
import { Search, Star } from 'lucide-react';
import { COMPONENT_LIST } from '../data';
import { ComponentItem, BuildState } from '../types';

interface ConfiguratorTabProps {
  build: BuildState;
  onSelectComponent: (item: ComponentItem) => void;
  activeCategory: 'CPU' | 'GPU' | 'RAM' | 'Cooling' | 'Case' | 'Accessories' | 'Displays';
}

export default function ConfiguratorTab({
  build,
  onSelectComponent,
  activeCategory,
}: ConfiguratorTabProps) {
  const [searchQuery, setSearchQuery] = useState('');

  // Select filtered items
  const currentItems = COMPONENT_LIST.filter(
    (item) =>
      item.category === activeCategory &&
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getCategoryTitle = () => {
    switch (activeCategory) {
      case 'CPU':
        return 'Central Processing Units';
      case 'GPU':
        return 'Graphics Processing Units';
      case 'RAM':
        return 'System Memory (RAM)';
      case 'Cooling':
        return 'Thermal Management Systems';
      case 'Case':
        return 'Precision Cabinets / Chassis';
      default:
        return 'Precision Hardware';
    }
  };

  const getCategorySubtitle = () => {
    switch (activeCategory) {
      case 'CPU':
        return 'Select the tactical brain for your precision machine.';
      case 'GPU':
        return 'Unleash ultra-high refresh rates and intensive rendering capabilities.';
      case 'RAM':
        return 'Maximize multi-tasking density and minimize execution delays.';
      case 'Cooling':
        return 'Keep silicon thermals frozen during maximum synthetic torture tests.';
      case 'Case':
        return 'Optimum airflow structures designed for modular hardware deployment.';
      default:
        return 'Formulate your ultimate computing footprint.';
    }
  };

  return (
    <div className="text-white font-sans max-w-5xl mx-auto py-6">
      {/* Search and Headers */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4 border-b border-zinc-900 pb-6">
        <div>
          <h2 className="font-display text-2xl md:text-3xl font-black text-white mb-2 tracking-tight">
            {getCategoryTitle()}
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed">{getCategorySubtitle()}</p>
        </div>
        <div className="relative w-full md:w-64">
          <input
            type="text"
            placeholder="Search Components..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-zinc-900 border border-zinc-800 text-white font-sans text-xs pl-10 pr-4 py-2.5 rounded-xl hover:border-zinc-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all"
          />
          <Search size={14} className="absolute left-3.5 top-3.5 text-zinc-500" />
        </div>
      </div>

      {/* Grid List */}
      <div className="space-y-4">
        {currentItems.length > 0 ? (
          currentItems.map((item) => {
            const isSelected = build[activeCategory]?.id === item.id;

            return (
              <div
                key={item.id}
                className={`group bg-zinc-900/60 border transition-all duration-300 p-6 rounded-3xl flex flex-col md:flex-row items-center gap-6 relative overflow-hidden ${
                  isSelected 
                    ? 'border-indigo-500 shadow-lg shadow-indigo-500/10 bg-indigo-500/[0.02]' 
                    : 'border-zinc-850 hover:border-zinc-750 hover:bg-zinc-900/40'
                }`}
              >
                {/* Image frame */}
                <div className="w-28 h-28 flex-shrink-0 bg-zinc-950 flex items-center justify-center relative overflow-hidden rounded-2xl border border-zinc-850/60">
                  <img
                    alt={item.name}
                    src={item.image}
                    referrerPolicy="no-referrer"
                    className="w-20 h-20 object-contain relative z-10 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Details list columns */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                  {/* Name column */}
                  <div>
                    <h3 className="font-display font-bold text-base text-white group-hover:text-indigo-400 transition-colors uppercase">
                      {item.name}
                    </h3>
                    <span
                      className={`inline-block font-mono text-[9px] font-bold mt-1.5 px-2 py-0.5 rounded-full uppercase tracking-wider ${
                        item.status.includes('STOCK') && !item.status.includes('LIMIT')
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                          : 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  {/* Specifications sub-grid */}
                  <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                    {Object.entries(item.specs).map(([specName, specValue]) => (
                      <div key={specName}>
                        <p className="font-mono text-[9px] font-bold text-zinc-500 uppercase tracking-widest">
                          {specName}
                        </p>
                        <p className="font-mono text-xs font-semibold text-zinc-300 uppercase mt-0.5">{specValue}</p>
                      </div>
                    ))}
                  </div>

                  {/* Selection Action column */}
                  <div className="flex flex-col items-end justify-center w-full">
                    <span className="font-display text-lg font-black text-white mb-3">
                      ₹{item.price.toLocaleString('en-IN')}
                    </span>
                    <button
                      onClick={() => onSelectComponent(item)}
                      className={`w-full py-2.5 rounded-xl font-mono text-[10px] font-bold uppercase tracking-widest transition-all duration-150 ${
                        isSelected
                          ? 'bg-emerald-500 hover:bg-emerald-600 text-white border border-emerald-600 hover:shadow-lg hover:shadow-emerald-500/10'
                          : 'bg-indigo-500 text-white hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-500/10 border border-indigo-500'
                      }`}
                    >
                      {isSelected ? '✓ SELECTED' : 'SELECT COMPONENT'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="py-16 text-center border border-dashed border-zinc-800 bg-zinc-950/60 rounded-3xl">
            <p className="font-mono text-sm text-zinc-500 uppercase tracking-widest">NO COMPATIBLE COMPONENTS DETECTED FOR YOUR SEARCH</p>
            <button 
              onClick={() => setSearchQuery('')}
              className="mt-4 font-mono text-[10px] uppercase font-bold tracking-widest px-4 py-2 border.5 border-indigo-500 text-indigo-400 hover:bg-indigo-500/10 rounded-xl"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Static Footer Navigation */}
      <div className="mt-8 pt-6 border-t border-zinc-900 flex justify-between items-center opacity-70">
        <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
          Showing 1-{currentItems.length} of {currentItems.length} Compatible Modules
        </p>
        <div className="flex gap-1.5">
          <button className="w-6 h-6 flex items-center justify-center border border-indigo-500/30 text-indigo-400 font-mono text-[10px] rounded">
            1
          </button>
        </div>
      </div>
    </div>
  );
}
