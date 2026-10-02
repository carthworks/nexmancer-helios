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
} from 'lucide-react';

export function InteractiveBlueprint() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(0);

  const components = [
    {
      title: 'Adjustable Wood Feeder',
      category: 'Fuel Ingestion',
      icon: Layers3,
      desc: 'Engineered tray supporting both continuous manual feeding and gravity hopper loading. Accommodates split firewood, pruned branches, compressed pellets, and dense briquettes without jams.',
      spec: 'Accepts split fuel up to 45mm dia.',
      material: 'Laser-cut heat-treated steel',
    },
    {
      title: 'Heavy Duty Pot Support',
      category: 'Vessel Interface',
      icon: Flame,
      desc: 'Robust cast iron spider configuration engineered with optimized aeration scallops. Accommodates small tea pots, rounded woks, and heavy community cauldrons up to 50kg without tipping.',
      spec: 'Load tested to 50kg+',
      material: 'High-silicon ductile cast iron',
    },
    {
      title: 'Insulated Refractory Chamber',
      category: 'Thermodynamics',
      icon: Flame,
      desc: 'Refractory ceramic ring designed to contain extreme combustion temperatures (>850°C). Keeps thermal energy concentrated in the flame zone while reducing stove body surface temperatures for kitchen safety.',
      spec: 'Thermal resistance >1,100°C',
      material: 'Alumina-silica refractory ceramic',
    },
    {
      title: 'Airflow-Optimized Grate',
      category: 'Combustion Bed',
      icon: CircleDot,
      desc: 'Multi-aperture geometry engineered to maximize under-bed primary air induction while retaining embers. Prevents premature ash clogging and ensures consistent draft across variable fuel loads.',
      spec: '42% open aeration ratio',
      material: 'High-alloy thermal steel',
    },
    {
      title: 'Quick-Release Ash Drawer',
      category: 'Maintenance',
      icon: ChevronDown,
      desc: 'Sealed bottom collection drawer for seamless cleanup. Allows the operator to clear spent ash while the stove is in continuous operation without disturbing the active flame or spilling hot embers.',
      spec: 'Capacity for 8+ hours burn',
      material: 'Cold-rolled powder-coated steel',
    },
    {
      title: 'Variable BLDC Blower',
      category: 'Active Air Induction',
      icon: Wind,
      desc: 'Ultra-efficient brushless DC centrifugal blower supplying positive static pressure into primary and secondary air plenums. Controlled via PWM micro-pulses for smooth speed ramps.',
      spec: '0-4,800 RPM • 18 CFM Max',
      material: 'High-temp PBT housing & rotor',
    },
    {
      title: 'K-Type Thermocouple Sensor',
      category: 'Sensing & Feedback',
      icon: Cpu,
      desc: 'Industrial-grade thermocouple probe located directly adjacent to the upper flame collar. Delivers sub-second telemetry to the MCU for automatic fan curve adjustment and flameout detection.',
      spec: '-50°C to +1,100°C range',
      material: 'Stainless 316 sheath & ceramic bead',
    },
    {
      title: '12V / 24V DC Power Options',
      category: 'Power Architecture',
      icon: BatteryCharging,
      desc: 'Versatile low-voltage power system designed for resilience. Operates from mains AC/DC adapter, portable 12V lithium power banks, lead-acid batteries, or direct mini solar panels for off-grid cooking.',
      spec: '2.4W avg • 12V / 24V auto-sense',
      material: 'Over-voltage & reverse polarity protected',
    },
  ];

  return (
    <section id="blueprint" className="py-24 bg-[#0a0d11] relative border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SYSTEM ARCHITECTURE & BLUEPRINT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Engineered as a system — <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-300">
                not just a stove.
              </span>
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg mt-4 leading-relaxed">
              Every millimeter of the NEXMANCER platform is purpose-built. Explore the full cutaway
              schematic, internal combustion chamber, and precision-manufactured sub-assemblies.
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

        {/* Blueprint Visual Showcase Card */}
        <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-[#0e1318] shadow-2xl mb-14 group">
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full cursor-pointer" onClick={() => setLightboxOpen(true)}>
            <Image
              src="/images/stove-infographic.png"
              alt="NEXMANCER Smart Biomass Stove complete engineering infographic and cutaway blueprint"
              fill
              className="object-contain p-2 sm:p-4 group-hover:scale-[1.01] transition-transform duration-500"
              sizes="(max-width: 1280px) 100vw, 1280px"
              priority
            />
            {/* Click to inspect overlay hint */}
            <div className="absolute inset-0 bg-neutral-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
              <span className="px-4 py-2 rounded-xl bg-neutral-900/90 border border-neutral-700 text-white font-mono text-xs flex items-center gap-2 shadow-2xl backdrop-blur-md">
                <Maximize2 className="w-4 h-4 text-orange-400" />
                Click to Expand Full Resolution Blueprint
              </span>
            </div>
          </div>

          <div className="p-4 sm:p-6 bg-neutral-950/95 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-neutral-400">
            <div className="flex items-center gap-4">
              <span className="text-white font-bold">NEXMANCER PROTO-2 EXPLODED CUTAWAY</span>
              <span className="hidden sm:inline text-neutral-600">|</span>
              <span className="hidden sm:inline">CAD REV 2.4.1</span>
              <span className="hidden sm:inline text-neutral-600">|</span>
              <span className="text-orange-400">DUAL-DRAFT AIRFLOW SCHEMATIC</span>
            </div>
            <button
              onClick={() => setLightboxOpen(true)}
              className="text-orange-400 hover:text-orange-300 flex items-center gap-1.5 transition-colors"
            >
              <span>Full Screen View</span>
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 8-Component Interactive System Matrix */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span>8 Engineered Subsystems</span>
              <span className="text-xs font-mono text-neutral-400 font-normal">
                (Click any component to inspect details)
              </span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {components.map((comp, idx) => {
              const Icon = comp.icon;
              const isSelected = selectedComponent === idx;
              return (
                <div
                  key={comp.title}
                  onClick={() => setSelectedComponent(idx)}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                    isSelected
                      ? 'bg-neutral-900 border-orange-500 shadow-xl shadow-orange-500/10 -translate-y-1'
                      : 'bg-neutral-950/70 border-neutral-800/80 hover:border-neutral-700 hover:bg-neutral-900/60'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-mono font-bold text-orange-400">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className="text-[10px] font-mono text-neutral-400 bg-neutral-800/80 px-2 py-0.5 rounded-full">
                        {comp.category}
                      </span>
                    </div>

                    <div className="flex items-center gap-2.5 mb-2">
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                          isSelected ? 'bg-orange-500 text-neutral-950' : 'bg-neutral-800 text-neutral-400'
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <h4 className="text-sm font-bold text-white leading-snug">{comp.title}</h4>
                    </div>

                    <p className="text-xs text-neutral-400 line-clamp-3 leading-relaxed mt-2">
                      {comp.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-neutral-800/80 text-[11px] font-mono flex items-center justify-between text-neutral-400">
                    <span className="text-orange-400/90">{comp.spec}</span>
                    <span className="text-neutral-500">Details →</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Component Expanded Detail Callout */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-neutral-900 via-neutral-900/90 to-neutral-950 border border-orange-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 max-w-3xl">
            <div className="text-[10px] font-mono uppercase tracking-wider text-orange-400 flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>ACTIVE SPECIFICATION: #{String(selectedComponent + 1).padStart(2, '0')}</span>
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
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col p-4 sm:p-8 animate-fadeIn"
          onClick={() => setLightboxOpen(false)}
        >
          <div className="flex items-center justify-between pb-4 border-b border-neutral-800 text-xs font-mono text-neutral-400">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
              <span className="text-white font-bold">NEXMANCER HIGH-RESOLUTION BLUEPRINT & INFOGRAPHIC</span>
            </div>
            <button
              onClick={() => setLightboxOpen(false)}
              className="p-2 rounded-xl bg-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-700 transition-colors flex items-center gap-1.5"
            >
              <span>Close View</span>
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="relative flex-1 w-full my-4 flex items-center justify-center overflow-auto">
            <div className="relative w-full h-full max-w-6xl max-h-[85vh]">
              <Image
                src="/images/stove-infographic.png"
                alt="NEXMANCER Engineering Infographic high resolution"
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
          </div>

          <div className="text-center font-mono text-xs text-neutral-500 pt-2 border-t border-neutral-800">
            Click anywhere or press Esc to return • CAD Model Series 2026
          </div>
        </div>
      )}
    </section>
  );
}
