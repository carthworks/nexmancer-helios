'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Cpu, Power, Zap, Thermometer, Wind, RotateCw, ShieldCheck, Activity, Gauge } from 'lucide-react';

export function VirtualController() {
  const [fanSpeed, setFanSpeed] = useState<number>(65);
  const [mode, setMode] = useState<'AUTO' | 'MANUAL' | 'TURBO' | 'SIMMER'>('AUTO');
  const [isPowerOn, setIsPowerOn] = useState<boolean>(true);
  const [tempUnit, setTempUnit] = useState<'C' | 'F'>('C');

  // Realistic temperature calculation based on fan speed and mode
  // Base cold temp 25°C, max temp ~520°C
  const calculatedTempC = isPowerOn ? Math.round(90 + (fanSpeed / 100) * 380) : 26;
  const displayTemp = tempUnit === 'C' ? calculatedTempC : Math.round((calculatedTempC * 9) / 5 + 32);

  const rpm = isPowerOn ? Math.round(800 + (fanSpeed / 100) * 3800) : 0;
  const cfm = isPowerOn ? ((fanSpeed / 100) * 16.5).toFixed(1) : '0.0';
  const batteryHours = isPowerOn ? (48 / (0.8 + (fanSpeed / 100) * 2.2)).toFixed(0) : '99+';

  const setPreset = (presetMode: 'SIMMER' | 'AUTO' | 'TURBO') => {
    setIsPowerOn(true);
    if (presetMode === 'SIMMER') {
      setMode('SIMMER');
      setFanSpeed(25);
    } else if (presetMode === 'AUTO') {
      setMode('AUTO');
      setFanSpeed(65);
    } else if (presetMode === 'TURBO') {
      setMode('TURBO');
      setFanSpeed(100);
    }
  };

  return (
    <section id="controller" className="py-24 bg-[#090c0f] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>INTELLIGENT EMBEDDED CONTROLLER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            The fire responds to you.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-cyan-400">
              In real time.
            </span>
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg mt-4 leading-relaxed">
            Take total control over combustion. The NEXMANCER smart console couples a tactile rotary
            encoder with thermocouple telemetry and adaptive PID airflow control. Test the interactive console below.
          </p>
        </div>

        {/* 2-Column: Virtual Hardware Simulator + Macro Hardware Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Column 1: Interactive Virtual Controller Console */}
          <div className="lg:col-span-7 bg-gradient-to-br from-[#161b20] via-[#101418] to-[#0b0e11] border border-neutral-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-neutral-800">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-md shadow-emerald-500/50 animate-pulse" />
                <span className="text-xs font-mono text-neutral-300 font-bold uppercase tracking-wider">
                  NEXMANCER VIRTUAL TELEMETRY CONSOLE
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setTempUnit(tempUnit === 'C' ? 'F' : 'C')}
                  className="px-2 py-1 rounded bg-neutral-800 text-[10px] font-mono text-neutral-300 hover:text-white border border-neutral-700"
                >
                  Unit: °{tempUnit}
                </button>
                <button
                  onClick={() => setIsPowerOn(!isPowerOn)}
                  className={`p-1.5 rounded-lg border transition-colors ${
                    isPowerOn
                      ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400'
                      : 'bg-neutral-800 border-neutral-700 text-neutral-500'
                  }`}
                  title="Toggle Console Power"
                >
                  <Power className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Simulated OLED Display Screen */}
            <div className="w-full bg-[#051119] border-2 border-neutral-800 rounded-2xl p-5 sm:p-6 shadow-inner relative overflow-hidden font-mono mb-8">
              {/* Scanline CRT overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.3)_50%)] bg-[size:100%_4px] pointer-events-none opacity-40" />

              {isPowerOn ? (
                <div>
                  {/* Top Bar inside OLED */}
                  <div className="flex items-center justify-between text-xs text-cyan-400/90 pb-3 border-b border-cyan-950">
                    <span className="flex items-center gap-1.5 font-bold tracking-wider">
                      <Activity className="w-3.5 h-3.5 animate-pulse text-cyan-400" />
                      NEXMANCER PROTO-2
                    </span>
                    <div className="flex items-center gap-3 text-[11px]">
                      <span className="text-emerald-400 font-semibold">● 12.4V DC</span>
                      <span className="text-amber-400">MODE: {mode}</span>
                    </div>
                  </div>

                  {/* Core Readout: Temperature & Fan */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-6 items-center">
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-orange-400/80 mb-1">
                        COMBUSTION CORE TEMP
                      </div>
                      <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight flex items-baseline gap-1">
                        {displayTemp}
                        <span className="text-2xl text-orange-500 font-mono">°{tempUnit}</span>
                      </div>
                      <div className="text-[11px] text-neutral-400 mt-1 flex items-center gap-1">
                        <span>Target: 300°C</span>
                        <span className="text-emerald-400">({calculatedTempC > 200 ? 'Secondary Active' : 'Pre-ignition'})</span>
                      </div>
                    </div>

                    <div className="bg-cyan-950/30 border border-cyan-800/40 rounded-xl p-3 sm:p-4">
                      <div className="text-[10px] uppercase tracking-wider text-cyan-400 mb-1">
                        BLDC FORCED AIR DRAFT
                      </div>
                      <div className="text-3xl font-extrabold text-cyan-300">
                        {fanSpeed}%{' '}
                        <span className="text-xs font-normal text-cyan-400 font-mono">THROTTLE</span>
                      </div>
                      <div className="text-[11px] text-neutral-400 mt-1 flex justify-between">
                        <span>RPM: {rpm.toLocaleString()}</span>
                        <span>FLOW: {cfm} CFM</span>
                      </div>
                    </div>
                  </div>

                  {/* Live Visualizer Bar */}
                  <div className="w-full bg-neutral-900 h-2.5 rounded-full overflow-hidden border border-neutral-800 mb-3">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-500 via-amber-400 to-orange-500 transition-all duration-300"
                      style={{ width: `${fanSpeed}%` }}
                    />
                  </div>

                  {/* Bottom OLED Status row */}
                  <div className="flex flex-wrap items-center justify-between text-[10px] text-neutral-400 pt-2 border-t border-cyan-950">
                    <span className="text-emerald-400">STATUS: OPTIMAL COMBUSTION • ZERO SMOKE</span>
                    <span className="text-neutral-400">EST. BATTERY: ~{batteryHours} HRS (12V 7Ah)</span>
                  </div>
                </div>
              ) : (
                <div className="py-12 text-center text-neutral-600 font-mono text-sm">
                  STANDBY / POWER OFF — PRESS POWER BUTTON TO ACTIVATE
                </div>
              )}
            </div>

            {/* Hardware Controls: Knobs & Tactile Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              {/* Slider / Knob simulation */}
              <div className="sm:col-span-7 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-neutral-300 font-medium">Blower Speed Modulation:</span>
                  <span className="text-orange-400 font-bold">{fanSpeed}%</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="100"
                  value={fanSpeed}
                  disabled={!isPowerOn}
                  onChange={(e) => {
                    setFanSpeed(Number(e.target.value));
                    setMode('MANUAL');
                  }}
                  className="w-full h-2.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-orange-500 focus:outline-none disabled:opacity-40"
                />
                <div className="flex justify-between text-[10px] font-mono text-neutral-500">
                  <span>10% Low Simmer</span>
                  <span>50% Cooking</span>
                  <span>100% Turbo Boil</span>
                </div>
              </div>

              {/* Quick Presets */}
              <div className="sm:col-span-5 flex flex-wrap gap-2 justify-end">
                <button
                  disabled={!isPowerOn}
                  onClick={() => setPreset('SIMMER')}
                  className={`px-3 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
                    mode === 'SIMMER'
                      ? 'bg-cyan-500/20 border border-cyan-500 text-cyan-300'
                      : 'bg-neutral-800 border border-neutral-700 text-neutral-400 hover:text-white'
                  }`}
                >
                  Simmer (25%)
                </button>
                <button
                  disabled={!isPowerOn}
                  onClick={() => setPreset('AUTO')}
                  className={`px-3 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
                    mode === 'AUTO'
                      ? 'bg-orange-500/20 border border-orange-500 text-orange-300'
                      : 'bg-neutral-800 border border-neutral-700 text-neutral-400 hover:text-white'
                  }`}
                >
                  Auto PID (65%)
                </button>
                <button
                  disabled={!isPowerOn}
                  onClick={() => setPreset('TURBO')}
                  className={`px-3 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
                    mode === 'TURBO'
                      ? 'bg-amber-500/20 border border-amber-500 text-amber-300'
                      : 'bg-neutral-800 border border-neutral-700 text-neutral-400 hover:text-white'
                  }`}
                >
                  Turbo (100%)
                </button>
              </div>
            </div>
          </div>

          {/* Column 2: Physical Prototype Hardware Macro View */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 shadow-2xl group">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/controller-macro.jpg"
                  alt="NEXMANCER Intelligent Controller prototype close-up"
                  fill
                  className="object-cover object-center group-hover:scale-102 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-60" />
              </div>
              <div className="p-5 bg-neutral-950/90 border-t border-neutral-800/80">
                <div className="text-[11px] font-mono text-orange-400 uppercase tracking-wider mb-1">
                  Engineered Hardware Prototype
                </div>
                <div className="text-base font-bold text-white mb-1">
                  Machined Aluminum Dial & Integrated OLED
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Weather-resistant enclosure, tactile sealed click buttons, stainless hardware mounts,
                  and sub-millisecond ADC sampling for K-type industrial thermocouples.
                </p>
              </div>
            </div>

            {/* Hardware Feature Highlights */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80">
                <Thermometer className="w-4 h-4 text-orange-400 mb-2" />
                <div className="text-xs font-bold text-white">K-Type Thermocouple</div>
                <div className="text-[11px] text-neutral-400 mt-1">
                  0°C to 1,024°C continuous thermal sensing inside the core
                </div>
              </div>
              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80">
                <Zap className="w-4 h-4 text-amber-400 mb-2" />
                <div className="text-xs font-bold text-white">12V / 24V Architecture</div>
                <div className="text-[11px] text-neutral-400 mt-1">
                  Runs directly from adapter, DC battery pack, or solar panel
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
