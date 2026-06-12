import React, { useState } from 'react';
import { Truck, ShieldCheck, Trash2, Send, CheckCircle2, Award, Zap, Wind, Box } from 'lucide-react';
import { BuildState, ComponentItem } from '../types';

interface CheckoutTabProps {
  build: BuildState;
  onRemoveComponent: (category: keyof BuildState) => void;
  onClearBuild: () => void;
}

export default function CheckoutTab({
  build,
  onRemoveComponent,
  onClearBuild,
}: CheckoutTabProps) {
  // Modal state
  const [showDispatchModal, setShowDispatchModal] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [shippingDetails, setShippingDetails] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    paymentMethod: 'UPI / NetBanking',
  });

  // Calculate pricing
  const subtotal = Object.values(build).reduce((sum, item) => sum + (item?.price || 0), 0);
  const isFreeAssembly = true;
  const shipping = subtotal > 0 ? 4500 : 0;
  const tax = Math.round(subtotal * 0.08); // Exactly 8% tax
  const total = subtotal + shipping + tax;

  // Performance estimates based on GPU select
  const getPerformanceMetrics = () => {
    const gpuId = build.GPU?.id || '';
    if (gpuId.includes('4090')) {
      return { cyberpunk: 94, valorant: 520, '3dmark': '26k+', progressBars: { cp: 85, val: 98, td: 92 } };
    } else if (gpuId.includes('4080')) {
      return { cyberpunk: 81, valorant: 460, '3dmark': '21k+', progressBars: { cp: 74, val: 88, td: 82 } };
    } else if (gpuId.includes('7900')) {
      return { cyberpunk: 78, valorant: 480, '3dmark': '22k+', progressBars: { cp: 71, val: 90, td: 84 } };
    } else {
      // Default / Standard
      return { cyberpunk: 48, valorant: 290, '3dmark': '12k+', progressBars: { cp: 45, val: 55, td: 48 } };
    }
  };

  const performance = getPerformanceMetrics();

  const handleDispatchOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!shippingDetails.name || !shippingDetails.email || !shippingDetails.address) {
      alert('Please complete all dispatch details.');
      return;
    }
    setOrderComplete(true);
  };

  const handleSaveConfig = () => {
    localStorage.setItem('saved_pc_build', JSON.stringify(build));
    alert('Precision X1 configuration successfully synchronized and locked in secure local storage.');
  };

  return (
    <div className="text-white font-sans max-w-6xl mx-auto py-6 relative">
      {/* Page Header */}
      <section className="mb-12 border-b border-zinc-900 pb-6">
        <h1 className="font-display text-2xl md:text-3xl font-black text-white mb-2 uppercase tracking-tight">
          Build Summary
        </h1>
        <p className="text-sm text-zinc-400 max-w-2xl mt-1 leading-relaxed">
          Review your precision-engineered system. Each component block is synced for maximum system thermal and power bandwidth.
        </p>
      </section>

      {subtotal === 0 ? (
        <div className="py-24 text-center border border-dashed border-zinc-850 bg-zinc-950/40 rounded-3xl">
          <Trash2 size={48} className="mx-auto text-zinc-650 mb-4" />
          <h3 className="font-display font-bold text-lg text-white uppercase">Your rig is empty</h3>
          <p className="font-mono text-xs text-zinc-500 mt-2">
            Return to the configurator catalog to construct your custom build.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-start">
          {/* Left Column: Component lists */}
          <div className="xl:col-span-2 space-y-4">
            <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest flex items-center gap-4 mb-6 font-bold">
              <span className="h-px bg-zinc-900 flex-1"></span>
              <span>Selected Components</span>
              <span className="h-px bg-zinc-900 flex-1"></span>
            </div>

            {Object.entries(build).map(([category, item]) => {
              if (!item) return null;

              return (
                <div
                  key={item.id}
                  className="bg-zinc-900/60 border border-zinc-850 p-5 rounded-3xl flex items-center justify-between hover:border-indigo-500 transition-all group relative overflow-hidden"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-zinc-950 rounded-2xl flex items-center justify-center border border-zinc-850 text-indigo-400">
                      {category === 'CPU' && <Zap size={22} />}
                      {category === 'GPU' && <Zap size={22} className="rotate-45" />}
                      {category === 'RAM' && <Zap size={22} className="rotate-90" />}
                      {category === 'Cooling' && <Wind size={22} />}
                      {category === 'Case' && <Box size={22} />}
                      {category === 'Accessories' && <ShieldCheck size={22} />}
                      {category === 'Displays' && <Award size={22} />}
                    </div>
                    <div>
                      <span className="font-mono text-[9px] text-indigo-400 font-bold tracking-widest uppercase block mb-0.5">
                        {category}
                      </span>
                      <h3 className="font-display font-bold text-sm text-white group-hover:text-indigo-400 transition-colors uppercase">
                        {item.name}
                      </h3>
                      <p className="font-mono text-[10px] text-zinc-500 font-semibold uppercase tracking-tighter">
                        {item.brand} | {item.status} | {item.wattage}W
                      </p>
                    </div>
                  </div>

                  <div className="text-right flex flex-col items-end">
                    <div className="font-mono text-sm text-white font-black">
                      ₹{item.price.toLocaleString('en-IN')}
                    </div>
                    <button
                      onClick={() => onRemoveComponent(category as keyof BuildState)}
                      className="font-mono text-[9px] text-rose-500 hover:text-rose-400 font-bold hover:underline transition-all mt-1 uppercase"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}

            {/* Performance Outlook (Bento Style) */}
            <div className="pt-8">
              <div className="bg-zinc-900 border border-zinc-850 p-8 rounded-3xl relative overflow-hidden shadow-sm">
                <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 blur-[60px] pointer-events-none" />
                <div className="relative z-10">
                  <h2 className="font-mono text-[10px] font-black text-indigo-400 mb-6 uppercase tracking-widest flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                    PERFORMANCE OUTLOOK
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="border-l-2 border-indigo-500 pl-6 py-2">
                      <div className="font-mono text-[9px] font-bold text-zinc-500 uppercase tracking-widest mb-1">
                        Cyberpunk 2077 (4K Ultra)
                      </div>
                      <div className="font-mono text-3xl font-black text-white flex items-baseline gap-1">
                        {performance.cyberpunk} <span className="text-[10px] text-zinc-500 font-semibold font-mono">FPS</span>
                      </div>
                      <div className="w-full bg-zinc-950 h-1.5 mt-3 rounded-full overflow-hidden">
                        <div
                          className="bg-indigo-500 h-full transition-all duration-500"
                          style={{ width: `${performance.progressBars.cp}%` }}
                        />
                      </div>
                    </div>

                    <div className="border-l-2 border-emerald-500 pl-6 py-2">
                      <div className="font-mono text-[9px] font-bold text-zinc-500 uppercase tracking-widest mb-1">
                        Valorant (4K Competitive)
                      </div>
                      <div className="font-mono text-3xl font-black text-zinc-100 flex items-baseline gap-1">
                        {performance.valorant} <span className="text-[10px] text-zinc-500 font-semibold font-mono">FPS</span>
                      </div>
                      <div className="w-full bg-zinc-950 h-1.5 mt-3 rounded-full overflow-hidden">
                        <div
                          className="bg-emerald-500 h-full transition-all duration-500"
                          style={{ width: `${performance.progressBars.val}%` }}
                        />
                      </div>
                    </div>

                    <div className="border-l-2 border-zinc-700 pl-6 py-2">
                      <div className="font-mono text-[9px] font-bold text-zinc-500 uppercase tracking-widest mb-1">
                        3DMark Port Royal
                      </div>
                      <div className="font-mono text-3xl font-black text-white flex items-baseline gap-1">
                        {performance['3dmark']} <span className="text-[10px] text-zinc-500 font-semibold font-mono">SCORE</span>
                      </div>
                      <div className="w-full bg-zinc-950 h-1.5 mt-3 rounded-full overflow-hidden">
                        <div
                          className="bg-zinc-650 h-full transition-all duration-500"
                          style={{ width: `${performance.progressBars.td}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Checkout Widget */}
          <aside className="sticky top-24 space-y-6">
            <div className="bg-zinc-900 border border-zinc-850 p-8 rounded-3xl relative overflow-hidden shadow-sm">
              <h2 className="font-display text-sm font-extrabold text-white mb-6 uppercase tracking-widest">
                Order Total
              </h2>

              <div className="space-y-4 font-mono text-xs border-b border-zinc-800 pb-6 mb-6 text-zinc-400">
                <div className="flex justify-between items-center">
                  <span>Subtotal</span>
                  <span className="text-white font-semibold">₹{subtotal.toLocaleString('en-IN')}.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Precision Assembly</span>
                  <span className="text-emerald-400 font-bold">FREE</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Est. Shipping</span>
                  <span className="text-white font-semibold">₹{shipping.toLocaleString('en-IN')}.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Tax (Estimated 8%)</span>
                  <span className="text-white font-semibold">₹{tax.toLocaleString('en-IN')}.00</span>
                </div>
              </div>

              <div className="flex justify-between items-end mb-8">
                <div className="font-mono text-[9px] text-zinc-500 font-bold tracking-widest">
                  FINAL TOTAL (INR)
                </div>
                <div className="font-mono text-2xl font-black text-indigo-400">
                  ₹{total.toLocaleString('en-IN')}.00
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => setShowDispatchModal(true)}
                  className="w-full bg-indigo-500 text-white rounded-xl py-4 font-mono text-xs tracking-widest font-bold hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-500/15 duration-150 active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                >
                  COMPLETE BUILD
                </button>
                <button
                  onClick={handleSaveConfig}
                  className="w-full border border-zinc-800 text-zinc-400 hover:text-white rounded-xl py-3 font-mono text-[10px] tracking-widest hover:bg-zinc-850/60 transition-all uppercase font-bold"
                >
                  Save Configuration
                </button>
              </div>

              {/* Informative alerts */}
              <div className="mt-8 flex flex-col gap-4">
                <div className="flex items-start gap-4 p-4 bg-zinc-950/60 border border-zinc-850/50 rounded-2xl">
                  <Truck size={18} className="text-emerald-400 mt-0.5" />
                  <div>
                    <div className="font-mono text-[9px] text-white font-black tracking-wider">
                      SHIPPING ESTIMATE
                    </div>
                    <p className="text-[10px] text-zinc-400 mt-0.5 leading-relaxed font-semibold">
                      Your custom build will ship within 7-10 business days via Secure Tech Road Freight.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-zinc-950/60 border border-zinc-850/50 rounded-2xl">
                  <ShieldCheck size={18} className="text-indigo-400 mt-0.5" />
                  <div>
                    <div className="font-mono text-[9px] text-white font-black tracking-wider">
                      PRECISION WARRANTY
                    </div>
                    <p className="text-[10px] text-zinc-400 mt-0.5 leading-relaxed font-semibold">
                      3-Year full parts & engineer labor warranty included. 24/7 prioritized virtual troubleshooting line.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      )}

      {/* DISPATCH ORDER MODAL CONTAINER */}
      {showDispatchModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md px-4">
          <div className="bg-zinc-900 border border-zinc-800 max-w-md w-full p-8 rounded-3xl relative overflow-hidden shadow-2xl">
            <button
               onClick={() => {
                 setShowDispatchModal(false);
                 setOrderComplete(false);
               }}
               className="absolute top-4 right-4 text-zinc-500 hover:text-white font-mono text-xs uppercase"
            >
              [X] Close
            </button>

            {!orderComplete ? (
              <form onSubmit={handleDispatchOrder} className="space-y-4">
                <div className="text-center mb-6">
                  <h3 className="font-display font-black text-lg text-white uppercase tracking-tight">
                    DISPATCH CODES
                  </h3>
                  <p className="text-[11px] text-zinc-400 mt-1 font-mono uppercase font-bold tracking-wider">
                    Configure dispatch shipping matrix
                  </p>
                </div>

                <div className="space-y-1">
                  <label className="font-mono text-[9px] text-zinc-500 font-bold uppercase tracking-wider">Full human name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter full name"
                    value={shippingDetails.name}
                    onChange={(e) => setShippingDetails({ ...shippingDetails, name: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2.5 text-xs font-mono text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none text-left"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-mono text-[9px] text-zinc-500 font-bold uppercase tracking-wider">Secure Tech Email</label>
                  <input
                    type="email"
                    required
                    placeholder="enter email"
                    value={shippingDetails.email}
                    onChange={(e) => setShippingDetails({ ...shippingDetails, email: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2.5 text-xs font-mono text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none text-left"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-mono text-[9px] text-zinc-500 font-bold uppercase tracking-wider">Secure Contact Phone</label>
                  <input
                    type="text"
                    required
                    placeholder="enter phone coordinate"
                    value={shippingDetails.phone}
                    onChange={(e) => setShippingDetails({ ...shippingDetails, phone: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2.5 text-xs font-mono text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none text-left"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-mono text-[9px] text-zinc-500 font-bold uppercase tracking-wider">Physical Destination Coordinates</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="enter precise delivery address"
                    value={shippingDetails.address}
                    onChange={(e) => setShippingDetails({ ...shippingDetails, address: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2.5 text-xs font-mono text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none text-left resize-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-mono text-[9px] text-zinc-500 font-bold uppercase tracking-wider">Fiduciary Gateway Option</label>
                  <select
                    value={shippingDetails.paymentMethod}
                    onChange={(e) => setShippingDetails({ ...shippingDetails, paymentMethod: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2.5 text-xs font-mono text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none text-left"
                  >
                    <option>UPI / NetBanking</option>
                    <option>Secure Card Terminal</option>
                    <option>Direct Wire Transfer</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-indigo-500 text-white rounded-xl py-4 font-mono text-xs tracking-widest font-bold hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-500/15 transition-all inline-flex items-center justify-center gap-2 mt-2"
                >
                  <Send size={14} />
                  CONFIRM SYSTEMS DISPATCH
                </button>
              </form>
            ) : (
              <div className="text-center py-6 space-y-6">
                <CheckCircle2 size={48} className="mx-auto text-emerald-400" />
                <div>
                  <h3 className="font-display font-black text-lg text-white uppercase tracking-tight">
                    DISPATCH CONFIRMED!
                  </h3>
                  <p className="text-xs text-zinc-400 font-mono mt-1 font-semibold">
                    ORDER SECURE TRACE ID: #CC-{Math.floor(1000 + Math.random() * 9000)}-{Math.floor(10 + Math.random() * 89)}
                  </p>
                </div>
                <div className="bg-zinc-950 border border-zinc-850 p-5 text-left rounded-2xl relative overflow-hidden">
                  <p className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest font-bold mb-2">TRANSIT BLUEPRINT CONFIRMATION</p>
                  <p className="text-sm text-white font-bold font-sans">{shippingDetails.name}</p>
                  <p className="text-xs text-zinc-400 font-mono mt-0.5">{shippingDetails.email}</p>
                  <p className="text-xs text-zinc-400 font-mono mt-1 leading-relaxed">{shippingDetails.address}</p>
                  <p className="text-[10px] text-emerald-400 font-mono uppercase tracking-wider mt-4 font-bold">
                    Est Transit Cargo Hand-off: 7 Business Days.
                  </p>
                </div>

                <button
                  onClick={() => {
                    onClearBuild();
                    setShowDispatchModal(false);
                    setOrderComplete(false);
                  }}
                  className="w-full bg-indigo-500 text-white rounded-xl py-3 font-mono text-xs tracking-widest font-bold hover:bg-indigo-650 transition-all font-bold"
                >
                  DE-INITIALIZE ENGINE [QUIT]
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
