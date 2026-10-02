'use client';

import React from 'react';
import { Home, Users, Tent, Sprout, Globe, ArrowUpRight } from 'lucide-react';

export function Applications({ onOpenPrototypeModal }: { onOpenPrototypeModal: () => void }) {
  const applications = [
    {
      title: 'Rural & Off-Grid Households',
      icon: Home,
      tag: 'Family Cooking',
      desc: 'Transforms domestic kitchens into clean, smoke-free environments. Operates reliably on split wood, pruned twigs, and agricultural residue while saving 3+ hours daily of fuel gathering.',
      stats: '75% less firewood needed',
    },
    {
      title: 'Community Kitchens & Schools',
      icon: Users,
      tag: 'Institutional Scale',
      desc: 'Heavy-duty cast iron trivet holds 50kg pots with ease. Provides commercial boil power for midday meal schemes, community centers, and institutional canteens without pricey LPG.',
      stats: 'Supports large 40cm+ vessels',
    },
    {
      title: 'Eco-Resorts & Glamping Retreats',
      icon: Tent,
      tag: 'Sustainable Living',
      desc: 'A gorgeous, tactile focal point for outdoor culinary experiences. Zero toxic smoke, clean wood aroma, and modern industrial aesthetics aligned with eco-friendly hospitality.',
      stats: 'Clean aesthetic & low noise',
    },
    {
      title: 'Agro-Waste Energy Valorization',
      icon: Sprout,
      tag: 'Circular Economy',
      desc: 'Engineered forced draft handles tough fibrous fuels that choke natural draft stoves: coconut shells, coffee husks, compressed crop briquettes, and bamboo offcuts.',
      stats: 'Multi-biomass fuel tolerance',
    },
    {
      title: 'Carbon Offset & Clean Cooking Funds',
      icon: Globe,
      tag: 'ESG & Impact',
      desc: 'Designed for verifiable carbon credits under Gold Standard and Verra methodologies. Significant firewood reduction yields certifiable tCO2e offset volume per household.',
      stats: 'Tier-4 thermal efficiency',
    },
  ];

  return (
    <section id="applications" className="py-24 bg-[#090c0f] relative border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono mb-4">
            <Sprout className="w-3.5 h-3.5" />
            <span>REAL-WORLD DEPLOYMENT SCENARIOS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Designed for real-world kitchens.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-300">
              Everywhere.
            </span>
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg mt-4 leading-relaxed">
            From remote off-grid homesteads to carbon finance projects and eco-resorts, NEXMANCER adapts
            to the context, local fuel types, and culinary habits of the communities it powers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app, idx) => {
            const Icon = app.icon;
            return (
              <div
                key={app.title}
                className="bg-neutral-950/70 border border-neutral-800/80 hover:border-neutral-700 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/5 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-orange-400 group-hover:bg-orange-500 group-hover:text-neutral-950 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-neutral-400 bg-neutral-900 px-2.5 py-1 rounded-full border border-neutral-800">
                      {app.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">
                    {app.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">{app.desc}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-900 flex items-center justify-between text-xs font-mono">
                  <span className="text-emerald-400 font-medium">{app.stats}</span>
                  <button
                    onClick={onOpenPrototypeModal}
                    className="text-neutral-400 hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <span>Inquire</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}

          {/* Quick CTA card in the grid */}
          <div className="bg-gradient-to-br from-orange-600/20 via-neutral-950 to-neutral-950 border border-orange-500/40 rounded-2xl p-6 flex flex-col justify-between shadow-xl">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-orange-400 block mb-2">
                CUSTOM DEPLOYMENT
              </span>
              <h3 className="text-xl font-bold text-white mb-2">Have a custom fuel or fleet requirement?</h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                We engineer custom controller firmware curves, hopper configurations, and blower
                calibrations for regional biomass feeds (bamboo, bagasse, briquettes, rice husk).
              </p>
            </div>

            <button
              onClick={onOpenPrototypeModal}
              className="mt-6 w-full py-3 rounded-xl bg-orange-500 hover:bg-orange-400 text-neutral-950 font-bold text-xs transition-colors flex items-center justify-center gap-2"
            >
              <span>Talk to Engineering Team</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
