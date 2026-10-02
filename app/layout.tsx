import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NEXMANCER | Smart Forced-Draft Biomass Stove',
  description:
    'Next-generation clean biomass cooking powered by active BLDC forced-draft airflow, secondary gasification combustion, and precision thermocouple thermal regulation.',
  openGraph: {
    title: 'NEXMANCER | Smarter Fire. Cleaner Heat. Zero Smoke.',
    description: 'Precision forced-draft biomass combustion platform for clean cooking and energy independence.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Outfit:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#090c0f] text-neutral-100 antialiased font-sans overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
