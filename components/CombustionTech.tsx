'use client';

import React, { useState } from 'react';
import { Wind, Flame, ShieldAlert, Cpu, Sparkles, Layers, ChevronRight, Info } from 'lucide-react';

export function CombustionTech() {
  const [activeZone, setActiveZone] = useState<'primary' | 'secondary' | 'chamber' | 'blower'>('secondary');

  const zones = {
    primary: {
      title: 'Zone 1: Primary Air Under-Grate Aeration',
      subtitle: 'Char combustion & thermal pyrolysis',
      description:
        'Controlled forced air from the BLDC fan passes underneath the cast grate directly into the fuel bed. This delivers the exact stoichiometric oxygen required to gasify wood without blowing away embers, generating carbon monoxide and volatile gases.',
      temp: '450°C - 600°C',
      airflow: '35% Total Volume',
      badge: 'Fuel Bed Gasification',
      highlights: [
        'High-aerodynamic grate with conical perforation prevents clinker clogging',
        'Sub-bed air plenum creates uniform air distribution across the wood feed',
        'Direct ember bed stimulation for rapid startup under 90 seconds',
      ],
    },
    secondary: {
      title: 'Zone 2: Pre-Heated Secondary Air Inlets',
      subtitle: 'Smoke re-burning & gasification combustion',
      description:
        'Air routed along the outer chamber wall absorbs waste heat, superheating to over 400°C before jetting horizontally through secondary inlet holes into the rising flue gases. This ignites unburnt soot, smoke, and tar, converting noxious particulate matter into usable thermal energy.',
      temp: '750°C - 950°C',
      airflow: '65% Total Volume',
      badge: 'Smokeless Secondary Burn',
      highlights: [
        'Concentric double-wall air preheat jacket reclaims conductive heat loss',
        'Precision tangential jet angle induces cyclonic flame turbulence',
        'Eliminates 90%+ of visible smoke and hazardous indoor particulate emissions',
      ],
    },
    chamber: {
      title: 'Zone 3: Refractory Ceramic Insulated Core',
      subtitle: 'Heat retention & extreme thermal mass',
      description:
        'The combustion chamber is lined with high-density refractory ceramic material. Unlike thin tin or sheet-metal stoves that lose 60% of their heat to ambient air, the refractory lining radiates thermal energy back into the flame vortex.',
      temp: 'Up to 1,000°C Rating',
      airflow: 'Insulated Perimeter',
      badge: 'Refractory Engineering',
      highlights: [
        'Retains heat between cooking cycles, reducing fuel re-ignition waste',
        'Significantly lowers exterior body skin temperature for kitchen safety',
        'Resistant to thermal shock, crack formation, and high-temp corrosive ash',
      ],
    },
    blower: {
      title: 'Zone 4: High-Static-Pressure BLDC Blower',
      subtitle: 'Precision PWM airflow delivery',
      description:
        'A brushless DC centrifugal blower delivers positive pressure into the stove manifolds. Controlled via pulse-width modulation (PWM) by the onboard micro-controller, it seamlessly transitions from a gentle simmer breeze to an intense high-output boil blast.',
      temp: 'Ambient Intake (Low Temp)',
      airflow: '0.5 to 18.0 CFM Controllable',
      badge: 'Active Draft System',
      highlights: [
        'Variable speed range with sub-1% throttle resolution',
        'Overcomes high fuel-bed resistance from dense wood or pellets',
        'Draws only 2 to 5 Watts — operable for days on small battery or mini solar panel',
      ],
    },
  };

  return (
    <section id="combustion" className="py-24 bg-[#0c0f13] border-t border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
            <Wind className="w-3.5 h-3.5 text-cyan-400" />
            <span>THERMODYNAMIC COMBUSTION ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            See the airflow. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-orange-400">
              Understand why there is zero smoke.
            </span>
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg mt-4 leading-relaxed">
            Traditional chulhas and open fires create smoke because wood gases escape unburned due to cold
            air and poor oxygen mixing. NEXMANCER divides airflow into two engineered zones: primary air to
            gasify biomass, and pre-heated secondary air to incinerate the gases in a clean flame vortex.
          </p>
        </div>

        {/* Interactive Combustion Stage Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {(
            [
              { key: 'secondary', label: 'Secondary Air Jets', tag: 'Smokeless Burn', icon: Flame },
              { key: 'primary', label: 'Primary Draft', tag: 'Fuel Gasifier', icon: Wind },
              { key: 'chamber', label: 'Refractory Core', tag: 'Thermal Mass', icon: Layers },
              { key: 'blower', label: 'BLDC Blower', tag: 'Air Induction', icon: Cpu },
            ] as const
          ).map((item) => {
            const Icon = item.icon;
            const isSelected = activeZone === item.key;
            return (
              <button
                key={item.key}
                onClick={() => setActiveZone(item.key)}
                className={`p-4 rounded-xl text-left border transition-all duration-200 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-neutral-900 border-orange-500 shadow-lg shadow-orange-500/10 -translate-y-0.5'
                    : 'bg-neutral-950/60 border-neutral-800/80 hover:border-neutral-700 hover:bg-neutral-900/60'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      isSelected ? 'bg-orange-500 text-neutral-950 font-bold' : 'bg-neutral-800 text-neutral-400'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                      isSelected ? 'bg-orange-500/20 text-orange-400' : 'bg-neutral-800 text-neutral-400'
                    }`}
                  >
                    {item.tag}
                  </span>
                </div>
                <div className="text-sm font-bold text-white">{item.label}</div>
              </button>
            );
          })}
        </div>

        {/* Main Display: Interactive Schematic + Deep Explanations */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: High-Tech Animated Schematic */}
          <div className="lg:col-span-6 bg-gradient-to-b from-neutral-900/90 to-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-2xl">
            {/* Visual background accents */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-600/10 rounded-full blur-[80px] pointer-events-none" />

            {/* Status Header */}
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800/80 mb-6 font-mono text-xs text-neutral-400">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                SIMULATED FLUID DYNAMICS
              </span>
              <span className="text-orange-400 font-semibold">{zones[activeZone].badge}</span>
            </div>

            {/* Custom SVG Schematic Diagram */}
            <div className="relative w-full aspect-[4/3] flex items-center justify-center">
              <svg
                viewBox="0 0 500 400"
                className="w-full h-full drop-shadow-2xl select-none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Gradients */}
                  <linearGradient id="chamberWallGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2b3137" />
                    <stop offset="50%" stopColor="#434b54" />
                    <stop offset="100%" stopColor="#2b3137" />
                  </linearGradient>

                  <linearGradient id="refractoryGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#c26330" stopOpacity="0.7" />
                    <stop offset="50%" stopColor="#e08447" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#c26330" stopOpacity="0.7" />
                  </linearGradient>

                  <linearGradient id="flameVortex" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#ea580c" stopOpacity="0.9" />
                    <stop offset="40%" stopColor="#f59e0b" stopOpacity="0.95" />
                    <stop offset="85%" stopColor="#38bdf8" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#67e8f9" stopOpacity="0.2" />
                  </linearGradient>

                  <linearGradient id="airPrimary" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0284c7" />
                    <stop offset="100%" stopColor="#38bdf8" />
                  </linearGradient>
                </defs>

                {/* Base Stove Outer Chassis */}
                <path
                  d="M130,90 L370,90 L360,340 L140,340 Z"
                  fill="url(#chamberWallGrad)"
                  stroke="#4f5963"
                  strokeWidth="2"
                />

                {/* Refractory Ceramic Chamber Lining */}
                <path
                  d="M165,110 L335,110 L325,310 L175,310 Z"
                  fill="url(#refractoryGrad)"
                  stroke={activeZone === 'chamber' ? '#ffedd5' : '#8c4b22'}
                  strokeWidth={activeZone === 'chamber' ? '3' : '1.5'}
                  className="transition-all duration-300"
                />

                {/* Internal Combustion Cavity */}
                <path
                  d="M190,110 L310,110 L300,285 L200,285 Z"
                  fill="#11161a"
                  stroke="#242c33"
                  strokeWidth="1.5"
                />

                {/* Grate at the bottom */}
                <rect
                  x="195"
                  y="285"
                  width="110"
                  height="10"
                  rx="3"
                  fill="#475569"
                  stroke={activeZone === 'primary' ? '#38bdf8' : '#64748b'}
                  strokeWidth="2"
                />
                <circle cx="215" cy="290" r="2.5" fill="#1e293b" />
                <circle cx="235" cy="290" r="2.5" fill="#1e293b" />
                <circle cx="250" cy="290" r="2.5" fill="#1e293b" />
                <circle cx="265" cy="290" r="2.5" fill="#1e293b" />
                <circle cx="285" cy="290" r="2.5" fill="#1e293b" />

                {/* Fuel Bed (Wood Embers) */}
                <g opacity="0.9">
                  <rect x="210" y="260" width="30" height="15" rx="3" fill="#78350f" stroke="#b45309" />
                  <rect x="245" y="255" width="35" height="18" rx="3" fill="#92400e" stroke="#d97706" />
                  <rect x="225" y="240" width="40" height="16" rx="3" fill="#b45309" stroke="#f59e0b" />
                  <circle cx="230" cy="270" r="6" fill="#f97316" className="animate-pulse" />
                  <circle cx="260" cy="265" r="7" fill="#ef4444" className="animate-pulse" />
                </g>

                {/* Secondary Air Inlets (Preheated Jets) */}
                {/* Left Secondary Ports */}
                <circle
                  cx="192"
                  cy="155"
                  r={activeZone === 'secondary' ? '6' : '4.5'}
                  fill={activeZone === 'secondary' ? '#38bdf8' : '#0284c7'}
                  className="animate-ping"
                  style={{ animationDuration: '3s' }}
                />
                <circle
                  cx="192"
                  cy="175"
                  r={activeZone === 'secondary' ? '6' : '4.5'}
                  fill={activeZone === 'secondary' ? '#38bdf8' : '#0284c7'}
                />

                {/* Right Secondary Ports */}
                <circle
                  cx="308"
                  cy="155"
                  r={activeZone === 'secondary' ? '6' : '4.5'}
                  fill={activeZone === 'secondary' ? '#38bdf8' : '#0284c7'}
                  className="animate-ping"
                  style={{ animationDuration: '3s', animationDelay: '0.5s' }}
                />
                <circle
                  cx="308"
                  cy="175"
                  r={activeZone === 'secondary' ? '6' : '4.5'}
                  fill={activeZone === 'secondary' ? '#38bdf8' : '#0284c7'}
                />

                {/* Secondary Air Jet Arrows into Flame */}
                <g stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" opacity="0.85">
                  <line x1="192" y1="155" x2="225" y2="162" />
                  <line x1="192" y1="175" x2="228" y2="180" />
                  <line x1="308" y1="155" x2="275" y2="162" />
                  <line x1="308" y1="175" x2="272" y2="180" />
                </g>

                {/* Clean Secondary Flame Vortex */}
                <path
                  d="M210,240 Q250,130 250,70 Q275,130 290,240 Z"
                  fill="url(#flameVortex)"
                  className="animate-pulse"
                  style={{ animationDuration: '2s' }}
                />

                {/* Pot on Top */}
                <g transform="translate(170, 25)">
                  <rect
                    x="10"
                    y="15"
                    width="140"
                    height="45"
                    rx="4"
                    fill="#94a3b8"
                    stroke="#cbd5e1"
                    strokeWidth="2"
                  />
                  {/* Pot Handles */}
                  <path
                    d="M5,25 L10,25 L10,38 L5,38 Z"
                    fill="#64748b"
                    stroke="#94a3b8"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M150,25 L155,25 L155,38 L150,38 Z"
                    fill="#64748b"
                    stroke="#94a3b8"
                    strokeWidth="1.5"
                  />
                  {/* Pot Lid */}
                  <path
                    d="M20,15 Q80,5 140,15 Z"
                    fill="#cbd5e1"
                    stroke="#f8fafc"
                    strokeWidth="1.5"
                  />
                  <circle cx="80" cy="8" r="4.5" fill="#475569" />
                  {/* Steam trails */}
                  <path
                    d="M65,-2 Q60,-12 68,-20"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    opacity="0.4"
                    strokeDasharray="2,2"
                  />
                  <path
                    d="M95,-4 Q100,-15 92,-24"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    opacity="0.4"
                    strokeDasharray="2,2"
                  />
                </g>

                {/* BLDC Blower attached to Right */}
                <g transform="translate(360, 260)">
                  <rect
                    x="0"
                    y="10"
                    width="60"
                    height="50"
                    rx="8"
                    fill="#1e293b"
                    stroke={activeZone === 'blower' ? '#38bdf8' : '#475569'}
                    strokeWidth={activeZone === 'blower' ? '3' : '1.5'}
                  />
                  {/* Fan Impeller */}
                  <circle cx="30" cy="35" r="18" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
                  <circle cx="30" cy="35" r="5" fill="#38bdf8" />
                  <line
                    x1="30"
                    y1="17"
                    x2="30"
                    y2="53"
                    stroke="#38bdf8"
                    strokeWidth="1.5"
                    strokeDasharray="2,2"
                  />
                  <line
                    x1="12"
                    y1="35"
                    x2="48"
                    y2="35"
                    stroke="#38bdf8"
                    strokeWidth="1.5"
                    strokeDasharray="2,2"
                  />
                  {/* Air Inflow Arrow */}
                  <path
                    d="M75,35 L62,35 M66,31 L62,35 L66,39"
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </g>

                {/* Air Delivery Manifold Duct (Blower into Under-Grate & Secondary Wall) */}
                <path
                  d="M360,285 L320,285 L320,315 L190,315"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="6"
                  strokeLinecap="round"
                  opacity="0.8"
                />
                {/* Secondary Preheated Jacket Path */}
                <path
                  d="M320,285 L345,285 L345,160 L315,160"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="3.5"
                  strokeDasharray="4,3"
                  opacity="0.75"
                />

                {/* Ash Drawer at Bottom */}
                <rect
                  x="180"
                  y="330"
                  width="140"
                  height="22"
                  rx="3"
                  fill="#1c2126"
                  stroke="#3e474f"
                  strokeWidth="1.5"
                />
                <rect x="235" y="337" width="30" height="7" rx="2" fill="#64748b" />
              </svg>
            </div>

            {/* Live Indicator Legend */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-neutral-800/80 mt-4 text-xs font-mono text-neutral-400">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 inline-block" />
                <span>Primary & Secondary Air (Cold / Preheated)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-500 inline-block" />
                <span>High-Temp Combustion Zone</span>
              </div>
            </div>
          </div>

          {/* Right: Technical Explanation Panel */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
              <div className="flex items-center gap-2 mb-2 font-mono text-xs text-orange-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>ACTIVE SUBSYSTEM DETAIL</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-1">{zones[activeZone].title}</h3>
              <p className="text-orange-400/90 font-mono text-xs mb-4">{zones[activeZone].subtitle}</p>

              <p className="text-neutral-300 text-sm leading-relaxed mb-6">
                {zones[activeZone].description}
              </p>

              {/* Technical Spec Chips */}
              <div className="grid grid-cols-2 gap-3 mb-6 p-4 rounded-xl bg-neutral-950/70 border border-neutral-800/90 font-mono text-xs">
                <div>
                  <span className="text-neutral-500 block uppercase text-[10px]">Zone Temp</span>
                  <span className="text-white font-semibold text-sm">{zones[activeZone].temp}</span>
                </div>
                <div>
                  <span className="text-neutral-500 block uppercase text-[10px]">Airflow Allocation</span>
                  <span className="text-cyan-400 font-semibold text-sm">{zones[activeZone].airflow}</span>
                </div>
              </div>

              {/* Engineering Highlights */}
              <div className="space-y-2.5">
                <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider block">
                  Key Engineering Attributes:
                </span>
                {zones[activeZone].highlights.map((point, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-300">
                    <ChevronRight className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why This Matters Callout */}
            <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-orange-500/10 via-amber-500/5 to-transparent border border-orange-500/20 flex items-start gap-3">
              <Info className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
              <div className="text-xs text-neutral-300 leading-relaxed">
                <strong className="text-white">Why Forced-Draft Gasification?</strong> Natural draft
                cookstoves depend on chimney height and weather. A BLDC fan eliminates draft starvation,
                ensuring complete wood gas burnout under any ambient pressure or altitude.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
