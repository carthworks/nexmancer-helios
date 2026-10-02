'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, Flame, Wind, Cpu, Sparkles, CheckCircle2, ChevronRight, Gauge } from 'lucide-react';

interface HeroProps {
  onOpenPrototypeModal: () => void;
}

export function Hero({ onOpenPrototypeModal }: HeroProps) {
  // Natural glowing embers rising through the hero section
  const embers = [
    { left: '12%', bottom: '4%', size: 3, delay: '0.2s', duration: '4.5s', color: '#ff6a1a' },
    { left: '24%', bottom: '8%', size: 4, delay: '1.4s', duration: '5.2s', color: '#f59e0b' },
    { left: '38%', bottom: '3%', size: 5, delay: '0.7s', duration: '3.9s', color: '#ea580c' },
    { left: '52%', bottom: '11%', size: 3, delay: '2.8s', duration: '4.8s', color: '#fcd34d' },
    { left: '64%', bottom: '6%', size: 4, delay: '1.9s', duration: '4.2s', color: '#ff8c38' },
    { left: '76%', bottom: '5%', size: 3, delay: '3.3s', duration: '5.6s', color: '#fb923c' },
    { left: '86%', bottom: '8%', size: 4, delay: '1.0s', duration: '4.4s', color: '#f59e0b' },
    { left: '46%', bottom: '15%', size: 3, delay: '2.2s', duration: '4.9s', color: '#fdba74' },
    { left: '70%', bottom: '14%', size: 4, delay: '3.6s', duration: '3.7s', color: '#ea580c' },
    { left: '92%', bottom: '12%', size: 3, delay: '0.5s', duration: '5.0s', color: '#ff5722' },
  ];

  return (
    <section className="relative min-h-[90vh] pt-32 pb-20 flex flex-col justify-center overflow-hidden bg-gradient-to-b from-[#090c0f] via-[#0e1217] to-[#090c0f]">
      {/* Dynamic natural flame glow pulse */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] bg-gradient-to-tr from-orange-600/25 via-amber-500/15 to-transparent rounded-full blur-[140px] pointer-events-none animate-flame-glow" />
      <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -left-20 bottom-10 w-[350px] h-[350px] bg-orange-600/15 rounded-full blur-[100px] pointer-events-none animate-flame-glow" style={{ animationDelay: '2s' }} />

      {/* Grid line overlay for technical vibe */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Natural Rising Ember Particles Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {embers.map((ember, i) => (
          <span
            key={i}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: ember.left,
              bottom: ember.bottom,
              width: `${ember.size}px`,
              height: `${ember.size}px`,
              backgroundColor: ember.color,
              boxShadow: `0 0 ${ember.size * 2}px ${ember.size}px ${ember.color}`,
              animation: `emberFloat ${ember.duration} ease-in-out infinite`,
              animationDelay: ember.delay,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Value Prop */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Tech Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-orange-500/15 via-amber-500/10 to-transparent border border-orange-500/30 text-orange-400 text-xs font-mono mb-6 backdrop-blur-md shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-orange-400 animate-spin" style={{ animationDuration: '8s' }} />
              <span className="font-extrabold text-white tracking-wider">HELIOS</span>
              <span className="text-neutral-600">/</span>
              <span>SMART FORCED-DRAFT BIOMASS PLATFORM</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.05] mb-6">
              NEXMANCER{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-300">
                HELIOS
              </span>
              .<br />
              Smarter Fire. Zero Smoke.
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl mb-8 font-light">
              Experience the evolution of solid fuel cooking with the <strong className="text-white font-semibold">NEXMANCER Helios</strong>. 
              Engineered with active BLDC forced-draft aerodynamics, preheated secondary gasification, and intelligent 
              thermocouple regulation — delivering unprecedented thermal efficiency and virtually smokeless combustion.
            </p>

            {/* Key Value Points */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8 w-full max-w-xl">
              <div className="flex items-center gap-2 text-xs font-medium text-neutral-300 bg-neutral-900/60 border border-neutral-800/80 px-3 py-2 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>80% Less Firewood</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-neutral-300 bg-neutral-900/60 border border-neutral-800/80 px-3 py-2 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>90%+ PM2.5 Reduced</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-neutral-300 bg-neutral-900/60 border border-neutral-800/80 px-3 py-2 rounded-lg col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>12V / 24V Solar Ready</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onOpenPrototypeModal}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 text-white font-bold text-sm shadow-xl shadow-orange-600/30 hover:shadow-orange-500/50 hover:brightness-110 transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                <span>Request Prototype Unit</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <a
                href="#controller"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-neutral-900/80 hover:bg-neutral-850 border border-neutral-700/80 hover:border-neutral-500 text-neutral-200 font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>Try Virtual Controller</span>
              </a>

              <a
                href="#combustion"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-400 hover:text-orange-400 transition-colors py-2"
              >
                <span>Inspect Airflow Dynamics</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Studio Render & Live Telemetry HUD */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            {/* Ambient flame halo behind the hardware */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-orange-600/25 via-amber-500/20 to-transparent rounded-3xl blur-2xl animate-flame-glow pointer-events-none" />

            <div className="relative rounded-2xl overflow-hidden border border-neutral-800/90 bg-neutral-950/70 shadow-2xl shadow-orange-950/40 group">
              {/* Product Image Frame */}
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/stove-hero.jpg"
                  alt="NEXMANCER Helios Smart Biomass Stove studio render"
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-102 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090c0f] via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />

                {/* Subtle convection heat shimmer trails over the pot */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-40 h-20 pointer-events-none opacity-40">
                  <svg viewBox="0 0 100 50" className="w-full h-full stroke-amber-400 fill-none stroke-[1.5]">
                    <path d="M30,45 Q25,25 35,5" className="animate-flame-flicker" />
                    <path d="M50,48 Q55,28 48,2" className="animate-flame-flicker" style={{ animationDelay: '0.8s' }} />
                    <path d="M70,45 Q65,22 72,6" className="animate-flame-flicker" style={{ animationDelay: '1.4s' }} />
                  </svg>
                </div>
              </div>

              {/* Floating Telemetry Tag: Temp with natural dancing flame */}
              <div className="absolute top-4 left-4 bg-neutral-900/90 backdrop-blur-md border border-white/10 rounded-xl p-3 shadow-lg flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-500/30 to-transparent animate-pulse" />
                  <Flame className="w-4 h-4 text-orange-400 animate-flame-flicker relative z-10" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase text-neutral-400 flex items-center gap-1.5">
                    <span>Combustion Core</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-ping" />
                  </div>
                  <div className="text-sm font-bold font-mono text-white flex items-center gap-1.5">
                    285°C <span className="text-[10px] text-emerald-400 font-normal">● CLEAN VORTEX</span>
                  </div>
                </div>
              </div>

              {/* Floating Telemetry Tag: Blower */}
              <div className="absolute bottom-4 right-4 bg-neutral-900/90 backdrop-blur-md border border-white/10 rounded-xl p-3 shadow-lg flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                  <Wind className="w-4 h-4 animate-spin" style={{ animationDuration: '6s' }} />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase text-neutral-400">BLDC Forced Air</div>
                  <div className="text-sm font-bold font-mono text-white flex items-center gap-1.5">
                    65% <span className="text-[10px] text-cyan-400 font-normal">AUTO PID</span>
                  </div>
                </div>
              </div>

              {/* Floating Hardware Chip: Refractory */}
              <div className="absolute bottom-4 left-4 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-900/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-neutral-300">
                <span className="w-2 h-2 rounded-full bg-amber-400 shadow-sm shadow-amber-400" />
                Refractory Insulated Core
              </div>
            </div>

            {/* Blueprint Quick Peek banner */}
            <a
              href="#blueprint"
              className="mt-3 flex items-center justify-between px-4 py-2.5 rounded-xl bg-neutral-900/70 border border-neutral-800 hover:border-neutral-700 transition-colors text-xs font-mono text-neutral-400 hover:text-white"
            >
              <span className="flex items-center gap-2">
                <Gauge className="w-3.5 h-3.5 text-orange-400" />
                Inspect 15-Part CAD Exploded View & 4K Cutaway
              </span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Global Metric Summary Banner */}
        <div className="mt-16 pt-10 border-t border-neutral-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div className="flex flex-col">
            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
              Thermal Efficiency
            </span>
            <span className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              &gt; 65<span className="text-orange-500">%</span>
            </span>
            <span className="text-xs text-neutral-400 mt-0.5">vs 12-18% traditional 3-stone</span>
          </div>

          <div className="flex flex-col">
            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
              PM2.5 & CO Emissions
            </span>
            <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 mt-1">
              -90<span className="text-white">%</span>
            </span>
            <span className="text-xs text-neutral-400 mt-0.5">near-zero visible smoke</span>
          </div>

          <div className="flex flex-col">
            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
              Fuel Consumption
            </span>
            <span className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              1/4<span className="text-orange-500">th</span>
            </span>
            <span className="text-xs text-neutral-400 mt-0.5">wood, pellets & agro-waste</span>
          </div>

          <div className="flex flex-col">
            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
              Blower Power Draw
            </span>
            <span className="text-2xl sm:text-3xl font-extrabold text-cyan-400 mt-1">
              2.4<span className="text-white">W</span>
            </span>
            <span className="text-xs text-neutral-400 mt-0.5">40+ hours on 12V 7Ah pack</span>
          </div>
        </div>
      </div>
    </section>
  );
}
