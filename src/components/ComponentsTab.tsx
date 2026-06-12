import { useState } from 'react';
import { Star, Eye, ShieldAlert } from 'lucide-react';
import { COMPONENT_LIST } from '../data';
import { ComponentItem, BuildState } from '../types';

interface ComponentsTabProps {
  build: BuildState;
  onSelectComponent: (item: ComponentItem) => void;
  activeCategory: 'CPU' | 'GPU' | 'RAM' | 'Cooling' | 'Case' | 'Accessories' | 'Displays';
  setActiveCategory: (cat: 'CPU' | 'GPU' | 'RAM' | 'Cooling' | 'Case' | 'Accessories' | 'Displays') => void;
}

export default function ComponentsTab({
  build,
  onSelectComponent,
  activeCategory,
  setActiveCategory,
}: ComponentsTabProps) {
  // Filters state
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState<number>(180000);
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string>('MOST POPULAR');

  // Multi-step switch categories inside peripherals: Displays or Accessories!
  const currentCategory = activeCategory === 'Displays' ? 'Displays' : 'Accessories';

  // Toggle brand checkbox
  const handleBrandToggle = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  // Filter components
  const filteredProducts = COMPONENT_LIST.filter((item) => {
    // Must match category (displays or accessories)
    if (item.category !== currentCategory) return false;

    // Filter by brand
    if (selectedBrands.length > 0 && !selectedBrands.some((b) => item.brand.toUpperCase() === b)) {
      return false;
    }

    // Filter by price
    if (item.price > maxPrice) return false;

    // Filter by availability
    if (inStockOnly && item.status.includes('OUT')) {
      return false;
    }

    return true;
  });

  // Sort components
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'PRICE: LOW TO HIGH') return a.price - b.price;
    if (sortBy === 'PRICE: HIGH TO LOW') return b.price - a.price;
    return b.rating - a.rating; // Default 'MOST POPULAR' sorts by rating
  });

  return (
    <div className="text-white font-sans max-w-7xl mx-auto py-6">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6 border-b border-zinc-900 pb-6">
        <div>
          <h2 className="font-display text-2xl md:text-3xl font-black text-white uppercase tracking-tight">
            {currentCategory === 'Displays' ? 'DISPLAYS CATALOG' : 'ACCESSORIES CATALOG'}
          </h2>
          <p className="text-sm text-zinc-400 max-w-2xl mt-1 leading-relaxed">
            Precision-engineered peripherals for elite performance. Select from our curated collection of low-latency tactical accessories and high-refresh QD-OLED displays.
          </p>
        </div>

        {/* Categories toggler in Peripherals page (Displays vs Accessories) */}
        <div className="flex gap-2 bg-zinc-900 p-1 rounded-full border border-zinc-800">
          <button
            onClick={() => setActiveCategory('Accessories')}
            className={`font-sans text-[10px] font-bold uppercase tracking-wider px-4 py-2 rounded-full transition-all ${
              currentCategory === 'Accessories'
                ? 'bg-indigo-500/10 text-white border border-indigo-500/20'
                : 'text-zinc-400 hover:text-white border border-transparent'
            }`}
          >
            Tactical Gear
          </button>
          <button
            onClick={() => setActiveCategory('Displays')}
            className={`font-sans text-[10px] font-bold uppercase tracking-wider px-4 py-2 rounded-full transition-all ${
              currentCategory === 'Displays'
                ? 'bg-indigo-500/10 text-white border border-indigo-500/20'
                : 'text-zinc-400 hover:text-white border border-transparent'
            }`}
          >
            Visual Displays
          </button>
        </div>
      </div>

      {/* Main filter + product columns */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* FILTERS PANEL */}
        <div className="w-full lg:w-64 flex-shrink-0 space-y-8 bg-zinc-900/60 p-6 border border-zinc-850 rounded-3xl shadow-sm">
          <div className="flex justify-between items-center pb-2 border-b border-zinc-850">
            <span className="font-display text-xs font-bold uppercase tracking-wider text-zinc-300">Sort Rules</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-zinc-950 border border-zinc-800 text-[10px] font-mono text-zinc-400 px-2 py-1 select-none rounded-md outline-none"
            >
              <option>MOST POPULAR</option>
              <option>PRICE: LOW TO HIGH</option>
              <option>PRICE: HIGH TO LOW</option>
            </select>
          </div>

          {/* Brands Checklist */}
          <div>
            <h4 className="font-mono text-[10px] font-bold text-indigo-400 mb-4 tracking-widest uppercase pb-1 border-b border-zinc-800">
              BRAND
            </h4>
            <div className="space-y-3">
              {['CYBERCORE', 'NEO-FLUX', 'VOIDTECH', 'TITAN SYSTEMS'].map((brand) => (
                <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(brand)}
                    onChange={() => handleBrandToggle(brand)}
                    className="w-4 h-4 rounded bg-zinc-950 border-zinc-800 text-indigo-500 focus:ring-0 cursor-pointer accent-indigo-500"
                  />
                  <span className="font-mono text-xs text-zinc-400 group-hover:text-white transition-colors">
                    {brand}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Price dynamic scale */}
          <div>
            <h4 className="font-mono text-[10px] font-bold text-indigo-400 mb-4 tracking-widest uppercase pb-1 border-b border-zinc-800">
              PRICE LIMIT
            </h4>
            <div className="px-2">
              <input
                type="range"
                min="3000"
                max="180000"
                step="2000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full h-1 bg-zinc-800 accent-indigo-500 appearance-none rounded-full cursor-pointer"
              />
              <div className="flex justify-between mt-3 font-mono text-[10px] text-zinc-500">
                <span>₹3K</span>
                <span className="text-white font-bold">₹{(maxPrice / 1000).toFixed(0)}K</span>
                <span>₹180K</span>
              </div>
            </div>
          </div>

          {/* Stock state toggle */}
          <div>
            <h4 className="font-mono text-[10px] font-bold text-indigo-400 mb-4 tracking-widest uppercase pb-1 border-b border-zinc-800">
              AVAILABILITY
            </h4>
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-zinc-400 uppercase">In Stock Only</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                  className="sr-only peer cursor-pointer"
                />
                <div className="w-9 h-5 bg-zinc-950 peer-focus:outline-none rounded-full border border-zinc-800 peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-zinc-650 after:border-none after:h-3 after:w-3 after:transition-all peer-checked:bg-indigo-500/10 peer-checked:border-indigo-500 peer-checked:after:bg-indigo-400 rounded-full" />
              </label>
            </div>
          </div>

          {/* Switch types decorative block */}
          <div>
            <h4 className="font-mono text-[10px] font-bold text-indigo-400 mb-4 tracking-widest uppercase pb-1 border-b border-zinc-800">
              SWITCH PROFILE
            </h4>
            <div className="grid grid-cols-2 gap-1.5 text-[9px]">
              {['LINEAR', 'TACTILE', 'CLICKY', 'OPTICAL'].map((sw) => (
                <button
                  key={sw}
                  className="border border-zinc-800 py-2 rounded-lg font-mono text-zinc-500 hover:border-indigo-500 hover:text-indigo-400 transition-all font-bold"
                >
                  {sw}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* PRODUCT GRID */}
        <div className="flex-1">
          {sortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {sortedProducts.map((item) => {
                const isSelected = build[currentCategory]?.id === item.id;

                return (
                  <div
                    key={item.id}
                    className={`bg-zinc-900/60 border p-5 rounded-3xl flex flex-col group transition-all duration-300 overflow-hidden ${
                      isSelected
                        ? 'border-indigo-500 shadow-lg shadow-indigo-500/10 bg-indigo-500/[0.01]'
                        : 'border-zinc-850 hover:border-zinc-750 hover:bg-zinc-900/40'
                    }`}
                  >
                    {/* Image frame */}
                    <div className="relative w-full aspect-square bg-zinc-950 overflow-hidden mb-5 flex items-center justify-center rounded-2xl border border-zinc-850/60">
                      <img
                        className="w-4/5 h-auto object-contain transition-transform duration-500 group-hover:scale-110"
                        src={item.image}
                        alt={item.name}
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[8px] px-2.5 py-1 rounded-full font-sans font-bold uppercase tracking-widest">
                          {item.status}
                        </span>
                      </div>
                    </div>

                    {/* Meta headings */}
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-display font-bold text-sm text-white uppercase group-hover:text-indigo-400 transition-colors truncate max-w-[150px]">
                        {item.name}
                      </h3>
                      <div className="flex items-center gap-1 flex-shrink-0">
                        <Star size={12} className="text-amber-400 fill-amber-400" />
                        <span className="font-mono text-[10px] text-white font-bold">
                          {item.rating.toFixed(1)}
                        </span>
                      </div>
                    </div>

                    <p className="text-zinc-500 text-[10px] font-mono mb-6 uppercase truncate font-semibold">
                      {Object.entries(item.specs).map(([_, val]) => val).join(' | ')}
                    </p>

                    {/* Specs columns */}
                    <div className="grid grid-cols-2 gap-4 mb-6 border-t border-zinc-800 pt-4">
                      {Object.entries(item.specs).slice(0, 2).map(([specKey, specVal]) => (
                        <div key={specKey} className="border-l border-zinc-800 pl-3">
                          <p className="text-[8px] text-zinc-500 font-mono font-bold tracking-widest uppercase">
                            {specKey}
                          </p>
                          <p className="font-mono text-xs text-white font-semibold truncate max-w-[90px]">{specVal}</p>
                        </div>
                      ))}
                    </div>

                    {/* Price and selection button */}
                    <div className="mt-auto flex items-center justify-between gap-4">
                      <span className="font-display text-base font-black text-white">
                        ₹{item.price.toLocaleString('en-IN')}
                      </span>
                      <button
                        onClick={() => onSelectComponent(item)}
                        className={`px-4 py-2 font-mono text-[9px] uppercase font-bold tracking-widest rounded-xl duration-150 transition-all ${
                          isSelected
                            ? 'bg-emerald-500 text-white border border-emerald-500 hover:bg-emerald-600'
                            : 'bg-zinc-800 border border-zinc-750 text-white hover:bg-indigo-500 hover:text-white hover:border-indigo-500'
                        }`}
                      >
                        {isSelected ? 'ADDED' : 'SELECT'}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="py-20 text-center border border-dashed border-zinc-800 bg-zinc-950/60 rounded-3xl">
              <ShieldAlert className="mx-auto text-zinc-650 mb-4" size={32} />
              <p className="font-mono text-sm text-zinc-500 uppercase tracking-widest font-bold">
                COULD NOT IDENTIFY COMPATIBLE COMPONENTS MATCHING ACTIVE FILTERS
              </p>
              <button
                onClick={() => {
                  setSelectedBrands([]);
                  setMaxPrice(180000);
                  setInStockOnly(false);
                }}
                className="mt-4 font-mono text-[10px] uppercase font-bold tracking-widest px-4 py-2 border border-indigo-500 text-indigo-400 hover:bg-indigo-500/10 rounded-xl"
              >
                CLEAR FILTER MATRIX
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
