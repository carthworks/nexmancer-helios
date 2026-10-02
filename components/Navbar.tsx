'use client';

import React, { useState, useEffect } from 'react';
import { Flame, Menu, X, ArrowUpRight, Cpu, Wind, ShieldCheck, Calculator } from 'lucide-react';

interface NavbarProps {
  onOpenPrototypeModal: () => void;
}

export function Navbar({ onOpenPrototypeModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Technology', href: '#technology' },
    { label: 'Airflow & Combustion', href: '#combustion' },
    { label: 'Smart Controller', href: '#controller' },
    { label: 'Engineering Blueprint', href: '#blueprint' },
    { label: 'Impact Calculator', href: '#calculator' },
    { label: 'Specifications', href: '#specifications' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#090c0f]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50 py-3.5'
            : 'bg-gradient-to-b from-[#090c0f]/80 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#top" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/25 group-hover:scale-105 transition-transform duration-200">
              <Flame className="w-5 h-5 text-white animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-1">
                NEX<span className="text-orange-500">MANCER</span>
              </span>
              <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase -mt-1">
                SMART BIOMASS SYSTEMS
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs font-medium text-neutral-300 hover:text-white transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-orange-500 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              GEN-2 PROTOTYPE
            </span>
            <button
              onClick={onOpenPrototypeModal}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 text-neutral-950 font-semibold text-xs hover:from-orange-400 hover:to-amber-400 transition-all duration-200 shadow-md shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0"
            >
              Request Prototype
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onOpenPrototypeModal}
              className="sm:hidden px-3 py-1.5 rounded-lg bg-orange-500 text-neutral-950 font-bold text-xs"
            >
              Prototype
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/80 backdrop-blur-md lg:hidden pt-20 px-6 pb-8 flex flex-col justify-between animate-fadeIn">
          <div className="flex flex-col gap-4 mt-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-neutral-200 hover:text-orange-400 py-2 border-b border-neutral-800/80 flex items-center justify-between"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-500" />
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-neutral-800">
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
              Lab tested prototype & field demonstration ready
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPrototypeModal();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-neutral-950 font-bold text-sm text-center shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2"
            >
              Request Prototype Evaluation
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
