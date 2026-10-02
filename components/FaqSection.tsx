'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What types of biomass fuels can the stove burn efficiently?',
      a: 'NEXMANCER is engineered for fuel versatility. It burns seasoned split firewood, pruned tree limbs, compressed biomass pellets, coconut shells, bamboo offcuts, and agro-residue briquettes. The high-static-pressure BLDC blower ensures dense fuel beds receive sufficient oxygen without choking.',
    },
    {
      q: 'How does it achieve zero visible smoke without a chimney?',
      a: 'Smoke is simply unburned fuel (volatile gases and particulate matter). In traditional chulhas, cold air quenches the fire, allowing smoke to escape. NEXMANCER forces pre-heated secondary air (>400°C) into the combustion neck, igniting the gases in a secondary flame vortex and achieving complete combustion with near-zero visible emissions.',
    },
    {
      q: 'How long can the blower run on a portable battery or solar panel?',
      a: 'The brushless DC blower and MCU draw an average of just 2.4 Watts during normal cooking. A standard, affordable 12V 7Ah rechargeable battery provides over 40 hours of continuous cooking time. The system can also be powered directly by a compact 15W–20W solar panel with a small buffer battery for 100% off-grid autonomy.',
    },
    {
      q: 'Can the flame be turned down for delicate simmering?',
      a: 'Yes. Unlike natural-draft rocket stoves where the only way to reduce heat is pulling out wood sticks, the NEXMANCER controller allows precise airflow throttling from 10% (gentle low-temperature rice/lentil simmer) to 100% (rapid 5-liter water boil).',
    },
    {
      q: 'How is routine ash cleaning handled during continuous cooking?',
      a: 'The stove features an integrated quick-release ash drawer beneath the combustion grate. Ash and fine residue drop cleanly into the sealed drawer during operation. You can slide the drawer out to empty it without extinguishing the flame or tilting the hot appliance.',
    },
    {
      q: 'How can our organization evaluate a prototype for field trials or carbon projects?',
      a: 'We collaborate with clean cooking NGOs, humanitarian relief agencies, university laboratories, and regional distributors. Click "Request Prototype" anywhere on this page to share your operational scale, target geography, and fuel context with our engineering team.',
    },
  ];

  return (
    <section className="py-24 bg-[#0a0d11] relative border-t border-neutral-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Got questions? We have{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
              engineering answers.
            </span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.q}
                className="rounded-2xl border border-neutral-800/90 bg-neutral-950/70 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-neutral-900/50 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-white">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-orange-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-neutral-800/60">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
