import { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import SystemsTab from './components/SystemsTab';
import ConfiguratorTab from './components/ConfiguratorTab';
import ComponentsTab from './components/ComponentsTab';
import CheckoutTab from './components/CheckoutTab';
import { COMPONENT_LIST } from './data';
import { BuildState, ComponentItem, PreconfiguredRig } from './types';

export default function App() {
  const [currentTab, setTab] = useState<'systems' | 'configurator' | 'components' | 'checkout'>('systems');
  const [activeCategory, setActiveCategory] = useState<'CPU' | 'GPU' | 'RAM' | 'Cooling' | 'Case' | 'Accessories' | 'Displays'>('CPU');

  // Default pre-installed precision selected parts matching the ₹2,43,300 build summary:
  const i9 = COMPONENT_LIST.find((c) => c.id === 'cpu-i9-14900k') || null;
  const rtx4090 = COMPONENT_LIST.find((c) => c.id === 'gpu-rtx-4090') || null;
  const domRam = COMPONENT_LIST.find((c) => c.id === 'ram-64gb-dom-plat') || null;
  const nexusCooler = COMPONENT_LIST.find((c) => c.id === 'cool-nexus-link') || null;
  const apexMeshCase = COMPONENT_LIST.find((c) => c.id === 'case-apex-mesh') || null;

  const [build, setBuild] = useState<BuildState>({
    CPU: i9,
    GPU: rtx4090,
    RAM: domRam,
    Cooling: nexusCooler,
    Case: apexMeshCase,
    Accessories: null,
    Displays: null,
  });

  // Handle component selection
  const handleSelectComponent = (item: ComponentItem) => {
    setBuild((prev) => ({
      ...prev,
      [item.category]: item,
    }));
  };

  // Handle deselecting/removing a category component
  const handleRemoveComponent = (category: keyof BuildState) => {
    setBuild((prev) => ({
      ...prev,
      [category]: null,
    }));
  };

  // Clear build components
  const handleClearBuild = () => {
    setBuild({
      CPU: null,
      GPU: null,
      RAM: null,
      Cooling: null,
      Case: null,
      Accessories: null,
      Displays: null,
    });
  };

  // Pre-load preconfigured rig parts
  const handleSelectPreconfiguredRig = (rig: PreconfiguredRig) => {
    const loadedCPU = COMPONENT_LIST.find((c) => c.name === rig.specs.cpu) || null;
    const loadedGPU = COMPONENT_LIST.find((c) => c.name.includes(rig.specs.gpu.slice(0, 8))) || null;
    const loadedRAM = COMPONENT_LIST.find((c) => c.name.includes(rig.specs.ram.slice(0, 8))) || null;
    const loadedCooling = COMPONENT_LIST.find((c) => c.name === rig.specs.cooling) || null;
    const loadedCase = COMPONENT_LIST.find((c) => c.name === rig.specs.case) || null;

    setBuild({
      CPU: loadedCPU,
      GPU: loadedGPU,
      RAM: loadedRAM,
      Cooling: loadedCooling,
      Case: loadedCase,
      Accessories: null,
      Displays: null,
    });
  };

  return (
    <div id="core-config-app" className="min-h-screen bg-[#09090b] text-zinc-350 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Absolute floating cursor ambient glow layout */}
      <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0" />

      {/* Persistent global header */}
      <Header currentTab={currentTab} setTab={setTab} build={build} />

      {/* Frame layout orchestration */}
      {currentTab === 'systems' ? (
        <main className="w-full pt-16">
          <SystemsTab onSelectRig={handleSelectPreconfiguredRig} setTab={setTab} />
        </main>
      ) : (
        <div className="flex pt-16 min-h-screen">
          {/* Persistent Sidebar (Contextual current rig tracker) */}
          <Sidebar
            build={build}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            currentTab={currentTab}
            setTab={setTab}
          />

          {/* Core Content Area */}
          <div className="ml-0 lg:ml-72 flex-1 px-6 md:px-16 py-12 overflow-x-hidden relative z-10">
            {currentTab === 'configurator' && (
              <ConfiguratorTab
                build={build}
                activeCategory={activeCategory}
                onSelectComponent={handleSelectComponent}
              />
            )}

            {currentTab === 'components' && (
              <ComponentsTab
                build={build}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                onSelectComponent={handleSelectComponent}
              />
            )}

            {currentTab === 'checkout' && (
              <CheckoutTab
                build={build}
                onRemoveComponent={handleRemoveComponent}
                onClearBuild={handleClearBuild}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
