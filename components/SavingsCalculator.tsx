'use client';

import React, { useState } from 'react';
import { Calculator, Trees, DollarSign, Wind, Clock, Sparkles, ArrowRight } from 'lucide-react';

export function SavingsCalculator({ onOpenPrototypeModal }: { onOpenPrototypeModal: () => void }) {
  const [cookingHours, setCookingHours] = useState<number>(3);
  const [baselineMethod, setBaselineMethod] = useState<'3stone' | 'chulha' | 'charcoal' | 'lpg'>('chulha');
  const [peopleCount, setPeopleCount] = useState<number>(5);

  // Computational models
  // Traditional Chulha uses ~3.5kg wood/hour
  // 3-stone fire uses ~4.5kg wood/hour
  // NEXMANCER forced draft uses ~0.8kg wood/hour (75%+ savings)
  const baselineKgPerHour = {
    '3stone': 4.5,
    chulha: 3.5,
    charcoal: 2.2, // Charcoal production already lost 80% wood
    lpg: 0.35, // kg LPG
  };

  const currentWoodKgPerHour = baselineKgPerHour[baselineMethod];
  const nexmancerKgPerHour = 0.85;

  const annualDays = 365;
  const currentAnnualKg = Math.round(cookingHours * currentWoodKgPerHour * annualDays * (peopleCount / 5));
  const nexmancerAnnualKg = Math.round(cookingHours * nexmancerKgPerHour * annualDays * (peopleCount / 5));

  const woodSavedKg = Math.max(0, currentAnnualKg - nexmancerAnnualKg);
  const matureTreesSaved = (woodSavedKg / 180).toFixed(1); // avg tree gives ~180kg firewood
  const co2AvoidedTons = ((woodSavedKg * 1.83) / 1000).toFixed(2); // 1kg dry wood combustion produces ~1.83kg CO2

  // Financial savings estimated: wood cost / fuel cost avg $0.12/kg or LPG cylinder equivalency
  const annualDollarsSaved =
    baselineMethod === 'lpg'
      ? Math.round(cookingHours * 365 * 0.45 * (peopleCount / 5))
      : Math.round(woodSavedKg * 0.14);

  const hoursGatheringSaved = Math.round((woodSavedKg / 15) * 1.5); // ~1.5h per 15kg wood gathered

  return (
    <section id="calculator" className="py-24 bg-[#090c0f] relative border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>INTERACTIVE IMPACT & ECONOMIC CALCULATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Calculate your fuel savings. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
              Measure your carbon impact.
            </span>
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg mt-4 leading-relaxed">
            See the direct real-world difference of precision forced-draft gasification. Adjust your cooking
            hours and baseline fuel source to calculate wood saved, carbon averted, and economic payback.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls Panel */}
          <div className="lg:col-span-6 bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
            <div className="space-y-6">
              {/* Baseline Selector */}
              <div>
                <label className="text-xs font-mono text-neutral-300 uppercase tracking-wider block mb-3">
                  Current Cooking Baseline:
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {(
                    [
                      { id: '3stone', label: 'Open 3-Stone Fire', eff: '12% Efficiency' },
                      { id: 'chulha', label: 'Traditional Mud Chulha', eff: '15% Efficiency' },
                      { id: 'charcoal', label: 'Charcoal Brazier', eff: '20% Efficiency' },
                      { id: 'lpg', label: 'Commercial LPG Gas', eff: 'Cost Intensive' },
                    ] as const
                  ).map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setBaselineMethod(item.id)}
                      className={`p-3 rounded-xl text-left border text-xs transition-all ${
                        baselineMethod === item.id
                          ? 'bg-neutral-800 border-orange-500 text-white shadow-md'
                          : 'bg-neutral-950/80 border-neutral-800 text-neutral-400 hover:border-neutral-700 hover:text-neutral-200'
                      }`}
                    >
                      <div className="font-bold">{item.label}</div>
                      <div className="text-[10px] font-mono text-orange-400/80 mt-0.5">{item.eff}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Cooking Hours Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-neutral-300">Daily Cooking Duration:</span>
                  <span className="text-emerald-400 font-bold text-sm">{cookingHours} Hours / Day</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="8"
                  step="0.5"
                  value={cookingHours}
                  onChange={(e) => setCookingHours(Number(e.target.value))}
                  className="w-full h-2.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
                <div className="flex justify-between text-[10px] font-mono text-neutral-500">
                  <span>1 Hour (Light)</span>
                  <span>4 Hours (Family)</span>
                  <span>8 Hours (Commercial)</span>
                </div>
              </div>

              {/* People Count Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-neutral-300">Meal Volume / People Fed:</span>
                  <span className="text-cyan-400 font-bold text-sm">{peopleCount} People</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="40"
                  step="1"
                  value={peopleCount}
                  onChange={(e) => setPeopleCount(Number(e.target.value))}
                  className="w-full h-2.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                />
                <div className="flex justify-between text-[10px] font-mono text-neutral-500">
                  <span>2 (Couple)</span>
                  <span>6 (Household)</span>
                  <span>40 (Community Kitchen)</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-800/80 flex items-center justify-between text-xs font-mono text-neutral-400">
              <span>NEXMANCER Thermal Efficiency: ~68%</span>
              <span className="text-emerald-400 font-semibold">Tier-4 Clean Cooking Target</span>
            </div>
          </div>

          {/* Results Output Panel */}
          <div className="lg:col-span-6 bg-gradient-to-br from-emerald-950/20 via-neutral-900 to-neutral-950 border border-emerald-500/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  PROJECTED ANNUAL IMPACT
                </span>
                <span className="text-[10px] font-mono text-neutral-400 bg-neutral-800/80 px-2 py-0.5 rounded-full">
                  PER STOVE UNIT / YR
                </span>
              </div>

              {/* Large Metric Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Wood Saved */}
                <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800">
                  <div className="flex items-center gap-2 text-neutral-400 text-xs font-mono mb-1">
                    <Trees className="w-4 h-4 text-emerald-400" />
                    Firewood Conserved
                  </div>
                  <div className="text-3xl font-extrabold text-white">
                    {woodSavedKg.toLocaleString()}{' '}
                    <span className="text-sm font-mono text-emerald-400">kg/yr</span>
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-1">
                    ≈ {matureTreesSaved} mature trees saved from deforestation
                  </div>
                </div>

                {/* Money Saved */}
                <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800">
                  <div className="flex items-center gap-2 text-neutral-400 text-xs font-mono mb-1">
                    <DollarSign className="w-4 h-4 text-amber-400" />
                    Annual Fuel Cost Saved
                  </div>
                  <div className="text-3xl font-extrabold text-white">
                    ${annualDollarsSaved.toLocaleString()}{' '}
                    <span className="text-sm font-mono text-amber-400">/ yr</span>
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-1">
                    Full hardware payback in under 6 months
                  </div>
                </div>

                {/* Carbon Saved */}
                <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800">
                  <div className="flex items-center gap-2 text-neutral-400 text-xs font-mono mb-1">
                    <Wind className="w-4 h-4 text-cyan-400" />
                    CO2e Emissions Prevented
                  </div>
                  <div className="text-3xl font-extrabold text-white">
                    {co2AvoidedTons}{' '}
                    <span className="text-sm font-mono text-cyan-400">tCO2e</span>
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-1">
                    Carbon credit verification eligible
                  </div>
                </div>

                {/* Time Saved */}
                <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800">
                  <div className="flex items-center gap-2 text-neutral-400 text-xs font-mono mb-1">
                    <Clock className="w-4 h-4 text-purple-400" />
                    Foraging & Tending Saved
                  </div>
                  <div className="text-3xl font-extrabold text-white">
                    {hoursGatheringSaved}{' '}
                    <span className="text-sm font-mono text-purple-400">Hours</span>
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-1">
                    Empowering women & families with productive time
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-neutral-400 text-center sm:text-left">
                Want to run field trials or clean cookstove carbon offset projects?
              </span>
              <button
                onClick={onOpenPrototypeModal}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-xs transition-colors flex items-center justify-center gap-2"
              >
                <span>Request Project Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
