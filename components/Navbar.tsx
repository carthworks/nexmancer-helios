'use client';

import React, { useState, useEffect } from 'react';
import { Flame, Menu, X, ArrowUpRight, Cpu, Wind, Layers3, Calculator, ShieldCheck, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenPrototypeModal: () => void;
}

export function Navbar({ onOpenPrototypeModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('top');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);

      const sectionIds = ['top', 'combustion', 'controller', 'blueprint', 'calculator', 'applications', 'specifications'];
      const scrollPosition = window.scrollY + 120;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { label: 'Combustion', href: '#combustion', id: 'combustion', icon: Wind },
    { label: 'Smart Console', href: '#controller', id: 'controller', icon: Cpu },
    { label: 'Blueprint', href: '#blueprint', id: 'blueprint', icon: Layers3 },
    { label: 'Impact ROI', href: '#calculator', id: 'calculator', icon: Calculator },
    { label: 'Applications', href: '#applications', id: 'applications', icon: Sparkles },
    { label: 'Specifications', href: '#specifications', id: 'specifications', icon: ShieldCheck },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#090c0f]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl shadow-black/60 py-3'
            : 'bg-gradient-to-b from-[#090c0f]/90 via-[#090c0f]/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo with HELIOS Badge */}
            <a href="#top" className="flex items-center gap-3 group shrink-0">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 via-orange-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/20 group-hover:scale-105 group-hover:shadow-orange-500/40 transition-all duration-200">
                <Flame className="w-5 h-5 text-white animate-pulse" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-black tracking-tight text-white">
                    NEX<span className="text-orange-500">MANCER</span>
                  </span>
                  <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-orange-500/15 border border-orange-500/30 text-orange-400 tracking-wider">
                    HELIOS
                  </span>
                </div>
                <span className="text-[9px] font-mono tracking-widest text-neutral-400 uppercase -mt-0.5">
                  SMART BIOMASS STOVE
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-neutral-900/60 p-1.5 rounded-full border border-white/[0.06] backdrop-blur-md">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-neutral-950 font-bold shadow-md shadow-orange-500/20'
                        : 'text-neutral-300 hover:text-white hover:bg-white/[0.06]'
                    }`}
                  >
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </nav>

            {/* Right Action Area */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <div className="hidden xl:flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900/80 border border-neutral-800 text-[11px] font-mono text-neutral-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>GEN-2 LAB READY</span>
              </div>

              <button
                onClick={onOpenPrototypeModal}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-orange-500 via-orange-500 to-amber-500 text-neutral-950 font-bold text-xs hover:brightness-110 active:scale-95 transition-all shadow-md shadow-orange-500/25 group"
              >
                <span>Request Prototype</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

            {/* Mobile Actions */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={onOpenPrototypeModal}
                className="sm:hidden px-3 py-1.5 rounded-lg bg-orange-500 text-neutral-950 font-bold text-xs"
              >
                Prototype
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors"
                aria-label="Toggle navigation drawer"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-orange-400" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/90 backdrop-blur-xl lg:hidden pt-24 px-6 pb-8 flex flex-col justify-between animate-fadeIn">
          <div className="flex flex-col gap-2 mt-2">
            <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 mb-2">
              Navigation Menu
            </div>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-3 px-4 rounded-xl text-base font-semibold flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-orange-500/15 border border-orange-500/30 text-orange-400'
                      : 'text-neutral-300 hover:bg-neutral-900 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-orange-400' : 'text-neutral-400'}`} />
                    <span>{item.label}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500" />
                </a>
              );
            })}
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-neutral-800">
            <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                NEXMANCER HELIOS
              </span>
              <span className="text-orange-400 font-bold">GEN-2 PROTOTYPE</span>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPrototypeModal();
              }}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-neutral-950 font-bold text-sm text-center shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2"
            >
              <span>Request Prototype Unit</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
