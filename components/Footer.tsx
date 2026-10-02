'use client';

import React, { useState } from 'react';
import { Flame, ArrowUpRight, Mail, CheckCircle2, Globe, ShieldCheck } from 'lucide-react';

export function Footer({ onOpenPrototypeModal }: { onOpenPrototypeModal: () => void }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-[#07090c] border-t border-neutral-800 text-neutral-400 text-xs font-mono">
      {/* Top CTA Banner */}
      <div className="border-b border-neutral-800/80 bg-gradient-to-r from-orange-950/20 via-neutral-950 to-neutral-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-2 text-orange-400 text-xs font-mono mb-2">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
              JOIN THE CLEAN COMBUSTION REVOLUTION
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Ready to replace smoky cooking with precision engineering?
            </h3>
            <p className="text-neutral-400 text-xs mt-2 max-w-xl">
              Partner with NEXMANCER to pilot smart forced-draft cookstoves in your communities,
              carbon offset portfolios, or off-grid living projects.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={onOpenPrototypeModal}
              className="px-6 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-400 text-neutral-950 font-bold text-xs transition-all shadow-lg shadow-orange-500/20 flex items-center gap-2"
            >
              <span>Request Prototype Unit</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a
              href="mailto:engineering@nexmancer.com"
              className="px-6 py-3.5 rounded-xl bg-neutral-900 border border-neutral-750 hover:border-neutral-600 text-neutral-200 text-xs transition-colors"
            >
              Contact Engineering Team
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center text-neutral-950 shadow-md shadow-orange-500/30">
                <Flame className="w-4 h-4" />
              </div>
              <span className="text-lg font-extrabold tracking-tight text-white">
                NEX<span className="text-orange-500">MANCER</span>
              </span>
            </div>

            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm">
              NEXMANCER develops next-generation forced-draft biomass systems engineered with active
              BLDC aerodynamics, secondary combustion, and thermocouple feedback.
            </p>

            <div className="pt-2 text-[11px] text-neutral-500 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Active R&D & Field Deployment Program • ISO 19867 Compliant
            </div>
          </div>

          {/* Column 1: Technology */}
          <div className="space-y-3">
            <div className="text-white font-bold tracking-wider uppercase text-[11px]">Technology</div>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <a href="#combustion" className="hover:text-orange-400 transition-colors">
                  Dual-Draft Aerodynamics
                </a>
              </li>
              <li>
                <a href="#combustion" className="hover:text-orange-400 transition-colors">
                  Secondary Gasification
                </a>
              </li>
              <li>
                <a href="#controller" className="hover:text-orange-400 transition-colors">
                  Smart Controller Console
                </a>
              </li>
              <li>
                <a href="#blueprint" className="hover:text-orange-400 transition-colors">
                  Refractory Heat Core
                </a>
              </li>
              <li>
                <a href="#specifications" className="hover:text-orange-400 transition-colors">
                  ISO Emission Targets
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: System Specs */}
          <div className="space-y-3">
            <div className="text-white font-bold tracking-wider uppercase text-[11px]">Platform</div>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <a href="#blueprint" className="hover:text-orange-400 transition-colors">
                  4K Exploded Blueprint
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-orange-400 transition-colors">
                  Impact & ROI Calculator
                </a>
              </li>
              <li>
                <a href="#applications" className="hover:text-orange-400 transition-colors">
                  Household & Off-Grid
                </a>
              </li>
              <li>
                <a href="#applications" className="hover:text-orange-400 transition-colors">
                  Community Kitchens
                </a>
              </li>
              <li>
                <a href="#specifications" className="hover:text-orange-400 transition-colors">
                  Engineering Benchmarks
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Updates & Newsletter */}
          <div className="space-y-3">
            <div className="text-white font-bold tracking-wider uppercase text-[11px]">Lab Updates</div>
            <p className="text-neutral-400 text-xs leading-relaxed">
              Receive testing whitepapers, thermal efficiency lab results, and firmware updates.
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="engineer@domain.com"
                  className="w-full px-3 py-2 rounded-xl bg-neutral-900 border border-neutral-750 text-white placeholder-neutral-600 focus:outline-none focus:border-orange-500 text-xs font-mono"
                />
                <button
                  type="submit"
                  className="w-full py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 font-bold text-xs transition-colors"
                >
                  Subscribe to Dossier
                </button>
              </form>
            ) : (
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Subscribed to Engineering Bulletins</span>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="mt-14 pt-8 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-400">
          <div>© {new Date().getFullYear()} NEXMANCER Technologies. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#top" className="hover:text-white transition-colors">
              Back to Top ↑
            </a>
            <a href="mailto:engineering@nexmancer.com" className="hover:text-white transition-colors">
              engineering@nexmancer.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
