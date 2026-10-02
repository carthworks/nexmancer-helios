# NEXMANCER Helios — Smart Forced-Draft Biomass Stove

[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Clean Cooking](https://img.shields.io/badge/Emissions-Tier%204%20Target-emerald?style=for-the-badge)](https://cleancooking.org/)
[![Hardware](https://img.shields.io/badge/Hardware-Prototype%20Gen--2-orange?style=for-the-badge)](#hardware-specifications)

> **Smarter Fire. Cleaner Heat. Zero Smoke.**  
> A high-efficiency, forced-draft biomass combustion platform pairing active BLDC aerodynamics with pre-heated secondary gasification and closed-loop thermal regulation.

---

## 🌟 Executive Overview

Traditional 3-stone open fires and rudimentary mud chulhas lose over 80% of heat and generate hazardous particulate matter ($PM_{2.5}$) and carbon monoxide ($CO$) due to incomplete combustion. 

**NEXMANCER Helios** replaces uncontrolled fire with precision fluid dynamics:
- **Active BLDC Forced-Draft:** Centrifugal brushless blower injects positive-pressure primary air through an aerodynamic cast grate.
- **Secondary Gasification Vortex:** Recirculated air absorbs conductive heat through a double-wall jacket ($>400^\circ\text{C}$) before jetting into rising flue gases, incinerating smoke and soot.
- **Embedded Telemetry Console:** Continuous K-type thermocouple feedback allows adaptive PID fan throttling, real-time temperature tracking, and digital flame regulation.
- **Low-Power 12V/24V DC Architecture:** Consumes an average of just 2.4W, operable for 40+ hours on an affordable 12V 7Ah battery pack or mini solar panel.

---

## 🛠️ Key Technical Features

| Subsystem | Engineering Specification | Primary Benefit |
| :--- | :--- | :--- |
| **Combustion Core** | Alumina-silica refractory ceramic lining | Contains $>850^\circ\text{C}$ core heat, reduces skin temperature |
| **Secondary Air Array** | Tangential cyclonic injection ports | Pre-heated air burning unburnt gases for smokeless operation |
| **Air Induction** | PWM-controlled centrifugal BLDC fan | 0.8 to 18.2 CFM with high static pressure |
| **Thermal Sensing** | Industrial K-type thermocouple probe | Sub-second telemetry from $-50^\circ\text{C}$ to $1,100^\circ\text{C}$ |
| **Pot Trivet** | Ductile cast-iron spider design | Load tested up to 50 kg for domestic pots and heavy cauldrons |
| **Ash Management** | Quick-release pull-out sealed drawer | Empty spent ash during active burns without stopping cooking |
| **Fuel Tolerance** | Split wood, pellets, briquettes, agro-waste | Operates on dense biomass that chokes natural draft stoves |

---

## 📊 Measured Impact & Benchmarks

```
   Thermal Efficiency:   >65% (vs 12-15% traditional 3-stone fire)
   PM2.5 & CO Reduction: >90% drop in visible indoor smoke
   Fuel Conservation:    Up to 4x less firewood required
   Daily Electrical Draw: 2.4W nominal (Solar / Battery direct)
```

---

## 💻 Website & Digital Platform

This repository contains the official interactive web platform for NEXMANCER Helios, built with:
- **Interactive Dual-Draft Fluid Dynamics Visualizer** (animated SVG combustion model).
- **Virtual Telemetry Hardware Simulator** (functional knurled knob, fan PWM throttling, mode selector, and live OLED temperature readout).
- **Interactive 4K Engineering Blueprint & Component Matrix** (lightbox inspection of all 8 subsystems).
- **Dynamic Fuel & Carbon Savings Calculator** (firewood saved, trees conserved, annual financial ROI).
- **Institutional Prototype Reservation System** (modal pipeline for NGOs, research labs, and distributors).

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.18 or higher recommended)
- `npm`, `yarn`, or `pnpm`

### Installation
```bash
# Clone the repository
git clone https://github.com/carthworks/nexmancer-helios.git

# Navigate into the project folder
cd nexmancer-helios

# Install dependencies
npm install
```

### Running Locally
```bash
# Start the Next.js development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production
```bash
# Compile and optimize for production
npm run build

# Start the production server
npm run start
```

---

## 📁 Repository Structure

```
nexmancer-website/
├── app/
│   ├── globals.css         # Tailwind v4 import, font rules, animations
│   ├── layout.tsx          # Root HTML structure, Google fonts & SEO metadata
│   └── page.tsx            # Main page assembly & state management
├── components/
│   ├── Applications.tsx    # Household, school, eco-tourism & carbon use cases
│   ├── CombustionTech.tsx  # Dynamic fluid dynamics SVG & zone selector
│   ├── FaqSection.tsx      # Technical and operational FAQ accordion
│   ├── Footer.tsx          # Brand narrative, links & newsletter signup
│   ├── Hero.tsx            # High-impact hardware render & telemetry HUD
│   ├── InteractiveBlueprint.tsx # Full infographic viewer & 4K lightbox
│   ├── Navbar.tsx          # Frosted-glass header & mobile navigation drawer
│   ├── PrototypeModal.tsx  # Functional prototype request & evaluation form
│   ├── SavingsCalculator.tsx # Real-time firewood, cost, and CO2 calculation
│   ├── SpecsTable.tsx      # Comprehensive engineering specifications
│   └── VirtualController.tsx # Interactive hardware console simulator
├── public/
│   └── images/             # Product studio renders & CAD cutaways
├── postcss.config.mjs      # PostCSS config for @tailwindcss/postcss
├── tailwind.config.ts      # Tailwind configuration & template paths
├── tsconfig.json           # Modern TypeScript configuration
└── package.json            # Project dependencies & build scripts
```

---

## 🤝 Collaboration & Prototype Inquiries

NEXMANCER collaborates with certified cookstove testing laboratories, carbon offset project developers (Gold Standard / Verra), and clean energy distributors.

For technical documentation, evaluation units, or field trials:
- **Email:** [engineering@nexmancer.com](mailto:engineering@nexmancer.com)
- **GitHub:** [carthworks/nexmancer-helios](https://github.com/carthworks/nexmancer-helios)

---

## 📄 License
© 2026 NEXMANCER Technologies. All rights reserved. Distributed under the MIT License.
