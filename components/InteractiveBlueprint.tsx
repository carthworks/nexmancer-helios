'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Layers3,
  Maximize2,
  X,
  Flame,
  Wind,
  Cpu,
  BatteryCharging,
  CircleDot,
  ChevronDown,
  Sparkles,
  CheckCircle2,
  ZoomIn,
  Sliders,
  ChevronRight,
  Shield,
  Layers,
} from 'lucide-react';

export function InteractiveBlueprint() {
  const [activeView, setActiveView] = useState<'exploded' | 'infographic'>('exploded');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(0);

  const viewData = {
    exploded: {
      title: 'NEXMANCER HELIOS — 15-PART EXPLODED ASSEMBLY',
      badge: 'CAD EXPLODED VIEW',
      src: '/images/helios-exploded-view.png',
      alt: 'NEXMANCER Helios Smart Forced-Draft Biomass Stove complete 15-part exploded engineering view',
      tagline: 'Precision mechanical assembly and airflow ducting stack',
    },
    infographic: {
      title: 'NEXMANCER HELIOS — OPERATIONAL SYSTEM INFOGRAPHIC',
      badge: 'FLUID & THERMAL SCHEMATIC',
      src: '/images/stove-infographic.png',
      alt: 'NEXMANCER Helios complete operational cutaway and airflow path diagram',
      tagline: 'Assembled cross-section with dual-draft air paths and live secondary vortex',
    },
  };

  const components = [
    {
      id: 1,
      title: 'Heavy Duty Pot Support',
      category: 'Vessel Interface',
      desc: 'High-silicon ductile cast iron spider trivet engineered with optimized aeration scallops. Securely holds small pans, woks, and heavy community cauldrons up to 50 kg without tipping.',
      spec: 'Load tested: 50 kg+ • Fits 14cm to 42cm pots',
      material: 'Ductile Cast Iron',
    },
    {
      id: 2,
      title: 'Top Ring / Cooking Interface',
      category: 'Thermal Sealing',
      desc: 'Precision laser-cut heavy steel collar with high-temperature thermal finish. Directs heat cleanly upward against cooking vessel while isolating ambient drafts.',
      spec: 'Heat resistant to 900°C',
      material: 'Coated Carbon Steel',
    },
    {
      id: 3,
      title: 'Insulated Combustion Chamber',
      category: 'Thermodynamics',
      desc: 'High-density refractory ceramic lining containing intense combustion core heat (>850°C). Radiates thermal energy back into the flame while keeping outer chassis safe to touch.',
      spec: 'Core rating >1,100°C • Zero thermal shock',
      material: 'Alumina-Silica Refractory',
    },
    {
      id: 4,
      title: 'Secondary Air Manifold',
      category: 'Air Aerodynamics',
      desc: 'Tangential cyclonic injection ring. Delivers pre-heated air (>400°C) into rising unburnt flue gases, igniting smoke and soot for clean, smokeless secondary combustion.',
      spec: 'Multi-port cyclonic injector array',
      material: 'Stainless Steel 304',
    },
    {
      id: 5,
      title: 'Outer Shell Body',
      category: 'Chassis',
      desc: 'Industrial-grade cylindrical steel housing finished in matte black high-temperature powder coating. Weather, rust, and scratch-resistant for rugged indoor and outdoor use.',
      spec: 'Double-walled thermal air jacket',
      material: 'Powder-Coated Steel',
    },
    {
      id: 6,
      title: 'Wood Feeding Tray',
      category: 'Fuel Ingestion',
      desc: 'Dual-purpose hopper tray supporting continuous feeding or gravity feed. Handles split firewood, tree prunings, compressed briquettes, and pellet fuels without jamming.',
      spec: 'Accepts fuel up to 45mm diameter',
      material: 'Laser-Cut Heat Treated Steel',
    },
    {
      id: 7,
      title: 'Primary Air Manifold',
      category: 'Draft Plenum',
      desc: 'Under-grate pressurized air manifold receiving positive draft directly from the BLDC blower. Uniformly distributes primary oxygen across the entire ember bed.',
      spec: 'Pressurized plenum • Zero clinker choking',
      material: 'Aero-Duct Welded Steel',
    },
    {
      id: 8,
      title: 'Optimized Grate',
      category: 'Combustion Bed',
      desc: 'Perforated heavy-duty grate maximizing primary air passage while retaining hot charcoal embers for continuous gasification.',
      spec: '42% open aeration ratio',
      material: 'High-Alloy Thermal Cast Iron',
    },
    {
      id: 9,
      title: 'Quick-Release Ash Drawer',
      category: 'Maintenance',
      desc: 'Sealed slide-out collection drawer beneath the grate. Enables quick ash disposal during continuous cooking cycles without stopping the active fire.',
      spec: 'Capacity for 8+ hours continuous cooking',
      material: 'Cold-Rolled Steel with Heat Grip',
    },
    {
      id: 10,
      title: 'Sturdy Base & Legs',
      category: 'Structural',
      desc: 'Quad-stance cast aluminum/steel legs with vibration isolation feet. Ensures stability on uneven outdoor ground, rustic kitchen floors, or tabletop platforms.',
      spec: 'Low center of gravity • 4-point stance',
      material: 'Structural Reinforced Alloy',
    },
    {
      id: 11,
      title: 'Air Ducting Plenum',
      category: 'Fluid Mechanics',
      desc: 'High-efficiency aerodynamic transition duct connecting the BLDC blower outlet to the primary manifold with minimal static pressure loss.',
      spec: 'Sealed gasket interface • Low drag coeff.',
      material: 'Thermal Sealed Housing',
    },
    {
      id: 12,
      title: 'BLDC Blower Fan',
      category: 'Active Draft',
      desc: 'Variable-speed brushless DC centrifugal fan providing positive static pressure. Microcontroller-modulated via PWM for smooth throttle control from 10% to 100%.',
      spec: '0 - 4,800 RPM • 18.2 CFM Max • 2.4W avg',
      material: 'High-Temp PBT & Brushless Rotor',
    },
    {
      id: 13,
      title: 'K-Type Temperature Sensor',
      category: 'Sensing & Feedback',
      desc: 'Industrial-grade thermocouple probe positioned directly at the combustion collar. Transmits real-time core temperature telemetry to the MCU every 250 milliseconds.',
      spec: '-50°C to +1,100°C measurement range',
      material: 'Stainless 316 Protective Sheath',
    },
    {
      id: 14,
      title: 'Smart Controller & OLED UI',
      category: 'Intelligence',
      desc: 'Microcontroller console with knurled digital dial, high-contrast OLED screen, and automated PID feedback curves for hands-off or manual flame modulation.',
      spec: '32-bit ARM Cortex • Auto / Manual / Simmer',
      material: 'Machined Anodized Dial & IP54 Casing',
    },
    {
      id: 15,
      title: '12V / 24V Power Architecture',
      category: 'Energy Systems',
      desc: 'Universal low-voltage power system operable via mains AC/DC adapter, portable power banks, vehicle 12V sockets, or direct mini solar panels for off-grid freedom.',
      spec: '12V / 24V DC Auto-Sense • 2.4W Nominal',
      material: 'Integrated Surge & Reverse Protection',
    },
  ];

  return (
    <section id="blueprint" className="py-24 bg-[#0a0d11] relative border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PRECISION SYSTEM ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Engineered as a system — <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-300">
                15 precision subsystems.
              </span>
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg mt-4 leading-relaxed">
              Every millimeter of the NEXMANCER Helios is engineered for longevity, thermal retention,
              and complete smoke elimination. Toggle between the 15-part exploded assembly and the operational cutaway.
            </p>
          </div>

          <button
            onClick={() => setLightboxOpen(true)}
            className="self-start md:self-end inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-neutral-900 border border-neutral-700 hover:border-orange-500 text-neutral-200 hover:text-white font-mono text-xs transition-all shadow-lg hover:shadow-orange-500/20 group"
          >
            <ZoomIn className="w-4 h-4 text-orange-400 group-hover:scale-110 transition-transform" />
            <span>Open 4K Blueprint Lightbox</span>
          </button>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-neutral-900/90 border border-neutral-800 backdrop-blur-md">
            <button
              onClick={() => setActiveView('exploded')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all duration-200 flex items-center gap-2 ${
                activeView === 'exploded'
                  ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-neutral-950 shadow-md shadow-orange-500/20'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>15-Part Exploded View</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-black/20 font-normal">CAD</span>
            </button>

            <button
              onClick={() => setActiveView('infographic')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all duration-200 flex items-center gap-2 ${
                activeView === 'infographic'
                  ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-neutral-950 shadow-md shadow-orange-500/20'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Flame className="w-3.5 h-3.5" />
              <span>Operational Systems Cutaway</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-black/20 font-normal">Airflow</span>
            </button>
          </div>

          <div className="text-xs font-mono text-neutral-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Click image to zoom full-resolution</span>
          </div>
        </div>

        {/* Main Showcase Card */}
        <div className="relative rounded-3xl overflow-hidden border border-neutral-800 bg-[#0c1015] shadow-2xl mb-14 group">
          <div
            className="relative aspect-[16/10] sm:aspect-[16/9] w-full cursor-pointer bg-neutral-950/60"
            onClick={() => setLightboxOpen(true)}
          >
            <Image
              src={viewData[activeView].src}
              alt={viewData[activeView].alt}
              fill
              className="object-contain p-2 sm:p-5 group-hover:scale-[1.01] transition-transform duration-500"
              sizes="(max-width: 1280px) 100vw, 1280px"
              priority
            />

            {/* Hover overlay hint */}
            <div className="absolute inset-0 bg-neutral-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
              <span className="px-5 py-2.5 rounded-xl bg-neutral-900/90 border border-neutral-700 text-white font-mono text-xs flex items-center gap-2 shadow-2xl backdrop-blur-md">
                <Maximize2 className="w-4 h-4 text-orange-400" />
                Click to Inspect in High-Resolution Lightbox
              </span>
            </div>
          </div>

          {/* Card Info Footer */}
          <div className="p-4 sm:p-6 bg-neutral-950/95 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-neutral-400">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-2 py-0.5 rounded bg-orange-500/20 text-orange-400 font-bold">
                {viewData[activeView].badge}
              </span>
              <span className="text-white font-bold">{viewData[activeView].title}</span>
              <span className="hidden md:inline text-neutral-600">|</span>
              <span className="hidden md:inline text-neutral-400">{viewData[activeView].tagline}</span>
            </div>

            <button
              onClick={() => setLightboxOpen(true)}
              className="text-orange-400 hover:text-orange-300 flex items-center gap-1.5 transition-colors ml-auto"
            >
              <span>Full Screen 4K</span>
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 15-Part Interactive System Matrix */}
        <div className="mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span>Explore All 15 Engineered Components</span>
            </h3>
            <span className="text-xs font-mono text-neutral-400">
              Click any component below to view technical role and metallurgy
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
            {components.map((comp, idx) => {
              const isSelected = selectedComponent === idx;
              return (
                <div
                  key={comp.id}
                  onClick={() => setSelectedComponent(idx)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                    isSelected
                      ? 'bg-neutral-900 border-orange-500 shadow-xl shadow-orange-500/10 -translate-y-1'
                      : 'bg-neutral-950/70 border-neutral-800/80 hover:border-neutral-700 hover:bg-neutral-900/60'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold text-orange-400">
                        #{String(comp.id).padStart(2, '0')}
                      </span>
                      <span className="text-[9px] font-mono text-neutral-400 bg-neutral-900 px-2 py-0.5 rounded-full border border-neutral-800">
                        {comp.category}
                      </span>
                    </div>

                    <h4 className="text-xs font-bold text-white leading-snug line-clamp-1 mb-1">
                      {comp.title}
                    </h4>

                    <p className="text-[11px] text-neutral-400 line-clamp-2 leading-relaxed">
                      {comp.desc}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-neutral-800/80 text-[10px] font-mono text-neutral-500 flex items-center justify-between">
                    <span className="text-orange-400/90 truncate">{comp.material}</span>
                    <ChevronRight className="w-3 h-3 text-neutral-600 shrink-0" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Component Expanded Detail Callout */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-neutral-900 via-neutral-900/90 to-neutral-950 border border-orange-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5 max-w-3xl">
            <div className="text-[10px] font-mono uppercase tracking-wider text-orange-400 flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>
                ACTIVE SUBSYSTEM #{String(components[selectedComponent].id).padStart(2, '0')} •{' '}
                {components[selectedComponent].category}
              </span>
            </div>
            <div className="text-xl font-bold text-white">{components[selectedComponent].title}</div>
            <p className="text-xs text-neutral-300 leading-relaxed">
              {components[selectedComponent].desc}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 font-mono text-xs shrink-0 p-4 rounded-xl bg-neutral-950/80 border border-neutral-800">
            <div>
              <span className="text-neutral-500 block text-[10px] uppercase">Specification</span>
              <span className="text-white font-semibold">{components[selectedComponent].spec}</span>
            </div>
            <div className="border-l border-neutral-800 pl-4">
              <span className="text-neutral-500 block text-[10px] uppercase">Material</span>
              <span className="text-cyan-400 font-semibold">{components[selectedComponent].material}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Full 4K Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col p-4 sm:p-6 animate-fadeIn"
          onClick={() => setLightboxOpen(false)}
        >
          <div className="flex items-center justify-between pb-3 border-b border-neutral-800 text-xs font-mono text-neutral-400">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-white font-bold">{viewData[activeView].title}</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 bg-neutral-900 p-1 rounded-lg border border-neutral-800">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveView('exploded');
                  }}
                  className={`px-3 py-1 rounded text-xs transition-colors ${
                    activeView === 'exploded' ? 'bg-orange-500 text-neutral-950 font-bold' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Exploded View
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveView('infographic');
                  }}
                  className={`px-3 py-1 rounded text-xs transition-colors ${
                    activeView === 'infographic' ? 'bg-orange-500 text-neutral-950 font-bold' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Cutaway Infographic
                </button>
              </div>

              <button
                onClick={() => setLightboxOpen(false)}
                className="p-2 rounded-xl bg-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-700 transition-colors flex items-center gap-1.5"
              >
                <span>Close</span>
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div
            className="relative flex-1 w-full my-3 flex items-center justify-center overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full max-w-7xl max-h-[85vh]">
              <Image
                src={viewData[activeView].src}
                alt={viewData[activeView].alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
          </div>

          <div className="text-center font-mono text-xs text-neutral-500 pt-2 border-t border-neutral-800 flex items-center justify-between">
            <span>NEXMANCER Helios CAD Assembly Series</span>
            <span>Click outside image or press Close to return</span>
          </div>
        </div>
      )}
    </section>
  );
}
