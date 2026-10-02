'use client';

import React, { useState } from 'react';
import { FileText, Check, X, Shield, ArrowDown, ChevronRight, SlidersHorizontal } from 'lucide-react';

export function SpecsTable({ onOpenPrototypeModal }: { onOpenPrototypeModal: () => void }) {
  const [activeTab, setActiveTab] = useState<'specs' | 'comparison'>('specs');

  const technicalSpecs = [
    {
      group: 'Thermal & Combustion Dynamics',
      rows: [
        { name: 'Nominal Thermal Output', value: '3.5 kW - 6.8 kW (Controllable)' },
        { name: 'Thermal Efficiency', value: '> 65% (ISO 19867-1 / WBT 4.2.4)' },
        { name: 'Combustion Core Temperature', value: 'Up to 950°C in secondary vortex' },
        { name: 'Time to Boil (5 Liters Water)', value: '11 - 13 minutes (Turbo mode)' },
        { name: 'Turndown Ratio', value: '4:1 (From high boil to slow simmer)' },
        { name: 'Emissions Classification', value: 'Targeting Tier 4 / Tier 5 ISO Clean Cooking' },
      ],
    },
    {
      group: 'Airflow & Forced-Draft Induction',
      rows: [
        { name: 'Blower Type', value: 'High-static pressure brushless DC centrifugal fan' },
        { name: 'Operating Speed', value: '800 RPM to 4,800 RPM (PWM Modulated)' },
        { name: 'Airflow Volume Range', value: '0.8 CFM to 18.2 CFM continuous' },
        { name: 'Air Preheating System', value: 'Concentric thermal annular jacket' },
        { name: 'Secondary Air Inlets', value: 'Tangential cyclonic injection array' },
      ],
    },
    {
      group: 'Electrical, Power & Intelligence',
      rows: [
        { name: 'System Operating Voltage', value: '12V / 24V DC Auto-sensing input' },
        { name: 'Power Consumption', value: '2.4W (Nominal) • 5.5W (Peak Turbo) • <0.1W (Sleep)' },
        { name: 'Supported Power Sources', value: 'AC/DC Adapter, 12V LiFePO4 / Lead-acid, 15W Solar PV' },
        { name: 'Embedded Controller', value: '32-bit ARM Cortex MCU' },
        { name: 'Telemetry & Sensor', value: 'Industrial K-Type thermocouple probe (-50°C to 1100°C)' },
        { name: 'Display & Interface', value: 'High-contrast OLED screen + Knurled digital encoder dial' },
      ],
    },
    {
      group: 'Mechanical & Materials',
      rows: [
        { name: 'Combustion Chamber', value: 'Alumina-silicate high-density refractory ceramic lining' },
        { name: 'Pot Support Trivet', value: 'Heavy-duty ductile cast iron (supports pots up to 50kg)' },
        { name: 'Outer Chassis Shell', value: 'Matte black powder-coated cold-rolled steel' },
        { name: 'Ash Disposal System', value: 'Pull-out sealed steel drawer with safety latch' },
        { name: 'Total System Weight', value: '6.4 kg (Portable & field rugged)' },
        { name: 'Fuel Compatibility', value: 'Split firewood, pellets, wood briquettes, coconut shells, crop briquettes' },
      ],
    },
  ];

  const comparisonData = [
    {
      metric: 'Thermal Efficiency',
      threeStone: '10% - 15%',
      rocketStove: '25% - 35%',
      nexmancer: '65% - 72%',
      winner: true,
    },
    {
      metric: 'Visible Smoke & Soot',
      threeStone: 'Extreme (Heavy soot)',
      rocketStove: 'Moderate during burn',
      nexmancer: 'Near-zero (Smokeless secondary burn)',
      winner: true,
    },
    {
      metric: 'Airflow Delivery Mechanism',
      threeStone: 'Uncontrolled natural draft',
      rocketStove: 'Chimney thermal natural draft',
      nexmancer: 'Active BLDC forced-draft with PWM',
      winner: true,
    },
    {
      metric: 'Temperature Regulation',
      threeStone: 'None (Add/remove sticks)',
      rocketStove: 'Manual fuel throttling',
      nexmancer: 'Closed-loop K-type PID & digital dial',
      winner: true,
    },
    {
      metric: 'Indoor Air Quality (PM2.5)',
      threeStone: 'Severe respiratory risk',
      rocketStove: '40% - 50% reduction',
      nexmancer: '90%+ reduction (WHO guidelines tier)',
      winner: true,
    },
    {
      metric: 'Firewood Consumption',
      threeStone: '4.5 kg / hour',
      rocketStove: '2.5 kg / hour',
      nexmancer: '0.85 kg / hour (4x - 5x savings)',
      winner: true,
    },
    {
      metric: 'Power Independence',
      threeStone: 'None',
      rocketStove: 'None',
      nexmancer: '12V/24V DC solar, battery & power bank',
      winner: true,
    },
  ];

  return (
    <section id="specifications" className="py-24 bg-[#0c0f14] relative border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
              <Shield className="w-3.5 h-3.5" />
              <span>TECHNICAL SPECIFICATIONS & BENCHMARKS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              A platform ready to be{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-orange-400">
                measured.
              </span>
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg mt-4 leading-relaxed">
              Transparent, repeatable engineering numbers. Compare the technical parameters of the
              NEXMANCER system against legacy biomass cookers.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex rounded-xl bg-neutral-900 border border-neutral-800 p-1 font-mono text-xs">
            <button
              onClick={() => setActiveTab('specs')}
              className={`px-4 py-2 rounded-lg transition-all ${
                activeTab === 'specs'
                  ? 'bg-orange-500 text-neutral-950 font-bold shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Full Specifications
            </button>
            <button
              onClick={() => setActiveTab('comparison')}
              className={`px-4 py-2 rounded-lg transition-all ${
                activeTab === 'comparison'
                  ? 'bg-orange-500 text-neutral-950 font-bold shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Stove Comparison Matrix
            </button>
          </div>
        </div>

        {/* Tab 1: Detailed Specifications */}
        {activeTab === 'specs' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technicalSpecs.map((group) => (
              <div
                key={group.group}
                className="bg-neutral-950/80 border border-neutral-800/90 rounded-2xl p-6 shadow-xl"
              >
                <h3 className="text-base font-bold text-white mb-4 pb-3 border-b border-neutral-800 flex items-center justify-between">
                  <span>{group.group}</span>
                  <span className="text-[10px] font-mono text-orange-400">VERIFIED</span>
                </h3>

                <div className="divide-y divide-neutral-900">
                  {group.rows.map((row) => (
                    <div key={row.name} className="py-3 flex flex-col sm:flex-row sm:justify-between gap-1 text-xs">
                      <span className="text-neutral-400 font-medium">{row.name}</span>
                      <span className="text-neutral-100 font-mono sm:text-right">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Comparison Matrix */}
        {activeTab === 'comparison' && (
          <div className="overflow-x-auto rounded-2xl border border-neutral-800 shadow-2xl bg-neutral-950/90">
            <table className="w-full text-left border-collapse text-xs font-mono">
              <thead>
                <tr className="border-b border-neutral-800 bg-neutral-900/90 text-neutral-300">
                  <th className="p-4 sm:p-5">Performance Parameter</th>
                  <th className="p-4 sm:p-5 text-neutral-400">Traditional 3-Stone</th>
                  <th className="p-4 sm:p-5 text-neutral-400">Natural Draft Rocket</th>
                  <th className="p-4 sm:p-5 text-orange-400 font-bold bg-orange-500/10 border-x border-orange-500/30">
                    NEXMANCER Helios (Smart Forced-Draft)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800/60">
                {comparisonData.map((row, idx) => (
                  <tr key={row.metric} className={idx % 2 === 0 ? 'bg-transparent' : 'bg-neutral-900/30'}>
                    <td className="p-4 sm:p-5 text-white font-medium">{row.metric}</td>
                    <td className="p-4 sm:p-5 text-neutral-400">{row.threeStone}</td>
                    <td className="p-4 sm:p-5 text-neutral-300">{row.rocketStove}</td>
                    <td className="p-4 sm:p-5 text-emerald-400 font-bold bg-orange-500/5 border-x border-orange-500/20">
                      {row.nexmancer}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Download Spec Sheet & Inquire CTA */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-neutral-900 via-neutral-900/80 to-neutral-950 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Full Engineering Spec Sheet & CAD Schematics</div>
              <div className="text-xs text-neutral-400">
                Available for institutional evaluators, cookstove testing laboratories, and distribution partners.
              </div>
            </div>
          </div>

          <button
            onClick={onOpenPrototypeModal}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-400 text-neutral-950 font-bold text-xs transition-colors shrink-0 shadow-lg shadow-orange-500/20"
          >
            Request Complete Spec Dossier
          </button>
        </div>
      </div>
    </section>
  );
}
