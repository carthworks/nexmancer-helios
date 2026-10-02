'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Flame, Sparkles, Send } from 'lucide-react';

interface PrototypeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PrototypeModal({ isOpen, onClose }: PrototypeModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    useCase: 'Household & Field Evaluation',
    quantity: '1 - 5 Prototype Units',
    fuelType: 'Split Firewood & Prunings',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-xl bg-gradient-to-b from-[#14191e] to-[#0c0f13] border border-neutral-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-orange-950/40 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono mb-4 w-fit">
              <Flame className="w-3.5 h-3.5" />
              <span>PROTOTYPE EVALUATION PROGRAM</span>
            </div>

            <h3 className="text-2xl font-extrabold text-white tracking-tight mb-2">
              Request a Prototype Unit
            </h3>
            <p className="text-xs text-neutral-400 mb-6 leading-relaxed">
              We provide fully operational Gen-2 prototype stoves for certified testing labs,
              clean cookstove project developers, NGOs, and field trial partners.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-neutral-400 block mb-1.5 uppercase text-[10px]">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Dr. Alex Morgan"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-750 text-white placeholder-neutral-600 focus:outline-none focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="text-neutral-400 block mb-1.5 uppercase text-[10px]">Work / Project Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@cleancooking.org"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-750 text-white placeholder-neutral-600 focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-neutral-400 block mb-1.5 uppercase text-[10px]">Organization / University</label>
                <input
                  type="text"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  placeholder="Clean Energy Foundation / Lab"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-750 text-white placeholder-neutral-600 focus:outline-none focus:border-orange-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-neutral-400 block mb-1.5 uppercase text-[10px]">Application Context</label>
                  <select
                    value={formData.useCase}
                    onChange={(e) => setFormData({ ...formData, useCase: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-750 text-white focus:outline-none focus:border-orange-500"
                  >
                    <option>Household & Field Evaluation</option>
                    <option>Community / School Kitchen</option>
                    <option>Carbon Offset Verification Project</option>
                    <option>Academic Combustion Lab Research</option>
                    <option>Commercial Eco-Tourism / Glamping</option>
                  </select>
                </div>
                <div>
                  <label className="text-neutral-400 block mb-1.5 uppercase text-[10px]">Planned Scale</label>
                  <select
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-750 text-white focus:outline-none focus:border-orange-500"
                  >
                    <option>1 - 2 Evaluation Stoves</option>
                    <option>5 - 10 Pilot Batch</option>
                    <option>50+ Institutional Deployment</option>
                    <option>Regional Distribution Partnership</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-neutral-400 block mb-1.5 uppercase text-[10px]">Primary Fuel In Your Region</label>
                <input
                  type="text"
                  value={formData.fuelType}
                  onChange={(e) => setFormData({ ...formData, fuelType: e.target.value })}
                  placeholder="e.g. Acacia wood, rice husk briquettes, coconut shells"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-750 text-white placeholder-neutral-600 focus:outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <label className="text-neutral-400 block mb-1.5 uppercase text-[10px]">Additional Notes / Testing Scope</label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Any specific voltage requirements, local fuel characteristics, or testing timelines..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-750 text-white placeholder-neutral-600 focus:outline-none focus:border-orange-500"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-neutral-950 font-bold text-sm transition-all shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Prototype Request</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-extrabold text-white">Evaluation Request Logged</h3>

            <div className="inline-block px-4 py-2 rounded-xl bg-neutral-900 border border-neutral-800 font-mono text-xs text-orange-400">
              DISPATCH REF: NEX-PROTO-{Math.floor(1000 + Math.random() * 9000)}
            </div>

            <p className="text-xs text-neutral-300 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-white">{formData.name}</strong>. Our combustion
              engineering team has received your prototype application for{' '}
              <strong className="text-white">{formData.organization || 'your project'}</strong>.
              We will follow up at <strong className="text-white">{formData.email}</strong> within 24
              hours with the technical dossier and prototype availability.
            </p>

            <div className="pt-6">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-mono text-xs transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
