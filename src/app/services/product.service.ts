import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';

// Shared PDFs — same asset used for all three products during testing
const SHARED_PDFS = {
  brochure: '/assets/pdfs/product-20210310_RFA-1717S.pdf',
  catalogue: '/assets/pdfs/product-in-detail-RFA-1717DIC_Catalogue.pdf',
};

const RFA_1717DIC: Product = {
  id: 'rfa-1717dic',
  name: 'RFA-1717DIC',
  subtitle: 'Wide & Slim 17×17" Flat Panel Detector',
  tagline: 'Advanced Flat Panel Detector Technology for General Radiography',
  heroImage:
    'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&w=1600&q=80',
  overview:
    'The RFA-1717DIC is a high-performance 17×17" flat panel detector designed for general radiography applications. ' +
    'Built with advanced IGZO TFT technology and CsI scintillator, it delivers high-resolution imaging, stable ' +
    'Automatic Exposure Detection (AED), and reliable performance in clinical environments. ' +
    'Engineered to meet ISO 4090 cassette size standards, this detector integrates seamlessly into existing ' +
    'radiography systems while ensuring superior image clarity and workflow efficiency.',

  features: [
    {
      icon: 'resolution',
      title: 'High Spatial Resolution',
      description:
        '3.4 lp/mm spatial resolution with 140 μm pixel pitch ensures exceptional diagnostic image clarity.',
    },
    {
      icon: 'speed',
      title: 'Fast Acquisition',
      description:
        'Complete image acquisition in just 2.5 seconds, supporting efficient clinical workflows.',
    },
    {
      icon: 'aed',
      title: 'Auto Exposure Detection',
      description:
        'Reliable AED trigger mode automatically detects x-ray exposure for hands-free operation.',
    },
    {
      icon: 'waterproof',
      title: 'IP68 Protection',
      description:
        'Fully waterproof and dustproof to IP68 standard — built for demanding clinical environments.',
    },
    {
      icon: 'adc',
      title: '16-bit ADC',
      description:
        '65,536 grayscale levels captured via 16-bit analogue-to-digital conversion for superior image depth.',
    },
    {
      icon: 'network',
      title: 'Gigabit Ethernet',
      description:
        'Wired 1000BaseT connectivity enables rapid, reliable image transfer to any DICOM workstation.',
    },
  ],

  performanceStats: [
    {
      value: '3.4',
      unit: 'lp/mm',
      label: 'Spatial Resolution',
      description: 'Best-in-class sharpness for general radiography imaging.',
    },
    {
      value: '>77%',
      unit: 'MTF',
      label: 'Modulation Transfer Function',
      description: 'Measured at 0.5 lp/mm (CsI) — superior contrast retention.',
    },
    {
      value: '>57%',
      unit: 'DQE',
      label: 'Detective Quantum Efficiency',
      description: 'Measured at 1 lp/mm (CsI) — excellent dose efficiency.',
    },
  ],

  specGroups: [
    {
      category: 'Imaging',
      specs: [
        { label: 'Scintillator', value: 'CsI:Tl (Direct)' },
        { label: 'Sensor Type', value: 'a-Si TFT Active Matrix with PIN Diode' },
        { label: 'Pixel Size', value: '140 μm' },
        { label: 'Pixel Matrix', value: '3072 × 3072' },
        { label: 'Spatial Resolution', value: '3.4 lp/mm' },
        { label: 'ADC Resolution', value: '16 bits' },
        { label: 'Grayscale Levels', value: '65,536' },
        { label: 'X-ray Voltage Range', value: '40 – 150 kVp' },
        { label: 'MTF', value: '>77% at 0.5 lp/mm (CsI)' },
        { label: 'DQE', value: '>57% at 1 lp/mm (CsI)' },
        { label: 'Acquisition Time', value: '2.5 seconds' },
        { label: 'Trigger Modes', value: 'Line Trigger (Manual), Auto Trigger (AED)' },
        { label: 'Shot Mode', value: 'Single Shot' },
      ],
    },
    {
      category: 'Mechanical',
      specs: [
        { label: 'Detector Size', value: '460 × 460 × 15 mm' },
        { label: 'Imaging Area', value: '17 × 17 inches (43 × 43 cm)' },
        { label: 'Weight', value: '3.50 kg' },
        { label: 'Cassette Compatibility', value: 'ISO 4090 Standard' },
      ],
    },
    {
      category: 'Connectivity',
      specs: [
        { label: 'Communication', value: 'Wired Giga Ethernet (1000BaseT)' },
        { label: 'Sync Output Port', value: '2 Port / TTL (0 – 5.0V)' },
        { label: 'Power Supply', value: 'Wired DC +15V' },
      ],
    },
    {
      category: 'Environmental',
      specs: [
        { label: 'Operating Temperature', value: '10°C to +40°C' },
        { label: 'Humidity Range', value: '20% – 75%' },
        { label: 'Pressure Range', value: '70 – 106 kPa' },
        { label: 'Protection Rating', value: 'IP68 (Waterproof & Dustproof)' },
        { label: 'OS Compatibility', value: 'Windows 7 / 8 / 10 (32-bit & 64-bit)' },
      ],
    },
  ],

  pdfs: SHARED_PDFS,
};

const RFA_1417S: Product = {
  id: 'rfa-1417s',
  name: 'RFA-1417S',
  subtitle: '14×17" Standard Flat Panel Detector',
  tagline: 'Versatile 14×17" detector for chest, spine, and extremity radiography',
  heroImage:
    'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&w=1600&q=80',
  overview:
    'The RFA-1417S is a versatile 14×17" flat panel detector suited for chest, spine, and extremity ' +
    'imaging workflows. Its compact profile and lightweight design make it ideal for retrofit ' +
    'installations and trolley-based systems. With CsI:Tl scintillator and 3.2 lp/mm spatial ' +
    'resolution, it maintains strong image quality across a broad range of clinical applications.',
  features: [
    {
      icon: 'resolution',
      title: '3.2 lp/mm Resolution',
      description:
        'High-quality diagnostic imaging for chest and extremity radiography workflows.',
    },
    {
      icon: 'speed',
      title: '3-Second Acquisition',
      description:
        'Swift readout speed supports multi-patient environments and busy radiology departments.',
    },
    {
      icon: 'aed',
      title: 'AED Auto Trigger',
      description: 'Automatic Exposure Detection ensures reliable hands-free operation.',
    },
    {
      icon: 'lightweight',
      title: 'Lightweight Build',
      description: 'At 3.1 kg, easy to handle in retrofit and mobile settings.',
    },
    {
      icon: 'adc',
      title: '14-bit ADC',
      description:
        '16,384 grayscale levels for precise tonal reproduction across diagnostic ranges.',
    },
    {
      icon: 'network',
      title: 'Fast Ethernet',
      description:
        '100BaseT wired Ethernet delivers stable DICOM integration across existing networks.',
    },
  ],
  performanceStats: [
    {
      value: '3.2',
      unit: 'lp/mm',
      label: 'Spatial Resolution',
      description: 'Optimised for chest and musculoskeletal imaging.',
    },
    {
      value: '>72%',
      unit: 'MTF',
      label: 'Modulation Transfer Function',
      description: 'Measured at 0.5 lp/mm — high contrast fidelity.',
    },
    {
      value: '>52%',
      unit: 'DQE',
      label: 'Detective Quantum Efficiency',
      description: 'Measured at 1 lp/mm — excellent dose performance.',
    },
  ],
  specGroups: [
    {
      category: 'Imaging',
      specs: [
        { label: 'Scintillator', value: 'CsI:Tl (Direct)' },
        { label: 'Sensor Type', value: 'a-Si TFT Active Matrix with PIN Diode' },
        { label: 'Pixel Size', value: '155 μm' },
        { label: 'Pixel Matrix', value: '2304 × 2816' },
        { label: 'Spatial Resolution', value: '3.2 lp/mm' },
        { label: 'ADC Resolution', value: '14 bits' },
        { label: 'Grayscale Levels', value: '16,384' },
        { label: 'X-ray Voltage Range', value: '40 – 150 kVp' },
        { label: 'MTF', value: '>72% at 0.5 lp/mm (CsI)' },
        { label: 'DQE', value: '>52% at 1 lp/mm (CsI)' },
        { label: 'Acquisition Time', value: '3.0 seconds' },
        { label: 'Trigger Modes', value: 'Line Trigger (Manual), Auto Trigger (AED)' },
        { label: 'Shot Mode', value: 'Single Shot' },
      ],
    },
    {
      category: 'Mechanical',
      specs: [
        { label: 'Detector Size', value: '380 × 460 × 15 mm' },
        { label: 'Imaging Area', value: '14 × 17 inches (35 × 43 cm)' },
        { label: 'Weight', value: '3.10 kg' },
        { label: 'Cassette Compatibility', value: 'ISO 4090 Standard' },
      ],
    },
    {
      category: 'Connectivity',
      specs: [
        { label: 'Communication', value: 'Wired Fast Ethernet (100BaseT)' },
        { label: 'Sync Output Port', value: '1 Port / TTL (0 – 5.0V)' },
        { label: 'Power Supply', value: 'Wired DC +12V' },
      ],
    },
    {
      category: 'Environmental',
      specs: [
        { label: 'Operating Temperature', value: '10°C to +40°C' },
        { label: 'Humidity Range', value: '20% – 75%' },
        { label: 'Pressure Range', value: '70 – 106 kPa' },
        { label: 'Protection Rating', value: 'IP54 (Dust & Splash Resistant)' },
        { label: 'OS Compatibility', value: 'Windows 8 / 10 (64-bit)' },
      ],
    },
  ],
  pdfs: SHARED_PDFS,
};

const RFA_1014: Product = {
  id: 'rfa-1014',
  name: 'RFA-1014',
  subtitle: '10×12" Portable Flat Panel Detector',
  tagline: 'Ultra-portable 10×12" detector for extremity and paediatric imaging',
  heroImage:
    'https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&w=1600&q=80',
  overview:
    'The RFA-1014 is a compact, ultra-portable flat panel detector optimized for extremity, ' +
    'paediatric, and point-of-care imaging. Weighing just 1.9 kg, it can be carried to bedside or ' +
    'used in mobile radiography units. Its ruggedized carbon-fibre body meets IP65 protection ' +
    'standards, ensuring reliable performance in varied clinical and field environments.',
  features: [
    {
      icon: 'resolution',
      title: '3.6 lp/mm Resolution',
      description:
        'Fine 100 μm pixel pitch delivers outstanding clarity for extremity and paediatric imaging.',
    },
    {
      icon: 'speed',
      title: '2-Second Acquisition',
      description:
        'Ultra-fast readout enables high-throughput in busy orthopaedic and paediatric wards.',
    },
    {
      icon: 'portable',
      title: 'Portable at 1.9 kg',
      description: 'Carbon-fibre housing ideal for mobile, bedside, and field use.',
    },
    {
      icon: 'aed',
      title: 'AED Trigger',
      description: 'Integrated auto exposure detection removes manual triggering.',
    },
    {
      icon: 'adc',
      title: '16-bit ADC',
      description: '65,536 grayscale levels for fine-detail tonal reproduction in small anatomy.',
    },
    {
      icon: 'wifi',
      title: 'WiFi + Ethernet',
      description:
        'Dual connectivity — 802.11ac wireless and Gigabit Ethernet — for flexible deployment.',
    },
  ],
  performanceStats: [
    {
      value: '3.6',
      unit: 'lp/mm',
      label: 'Spatial Resolution',
      description: 'Ideal for small anatomy and paediatric applications.',
    },
    {
      value: '>80%',
      unit: 'MTF',
      label: 'Modulation Transfer Function',
      description: 'Measured at 0.5 lp/mm — exceptional fine-detail contrast.',
    },
    {
      value: '>60%',
      unit: 'DQE',
      label: 'Detective Quantum Efficiency',
      description: 'Measured at 1 lp/mm — best-in-class dose efficiency.',
    },
  ],
  specGroups: [
    {
      category: 'Imaging',
      specs: [
        { label: 'Scintillator', value: 'CsI:Tl (Direct)' },
        { label: 'Sensor Type', value: 'IGZO TFT Active Matrix' },
        { label: 'Pixel Size', value: '100 μm' },
        { label: 'Pixel Matrix', value: '2560 × 3072' },
        { label: 'Spatial Resolution', value: '3.6 lp/mm' },
        { label: 'ADC Resolution', value: '16 bits' },
        { label: 'Grayscale Levels', value: '65,536' },
        { label: 'X-ray Voltage Range', value: '40 – 120 kVp' },
        { label: 'MTF', value: '>80% at 0.5 lp/mm (CsI)' },
        { label: 'DQE', value: '>60% at 1 lp/mm (CsI)' },
        { label: 'Acquisition Time', value: '2.0 seconds' },
        { label: 'Trigger Modes', value: 'Line Trigger (Manual), Auto Trigger (AED)' },
        { label: 'Shot Mode', value: 'Single Shot & Continuous' },
      ],
    },
    {
      category: 'Mechanical',
      specs: [
        { label: 'Detector Size', value: '280 × 340 × 12 mm' },
        { label: 'Imaging Area', value: '10 × 12 inches (25 × 30 cm)' },
        { label: 'Weight', value: '1.90 kg' },
        { label: 'Housing', value: 'Carbon-fibre reinforced composite' },
      ],
    },
    {
      category: 'Connectivity',
      specs: [
        { label: 'Wired', value: 'Giga Ethernet (1000BaseT)' },
        { label: 'Wireless', value: 'IEEE 802.11a/b/g/n/ac (2.4 GHz & 5 GHz)' },
        { label: 'Sync Output Port', value: '1 Port / TTL (0 – 5.0V)' },
        { label: 'Power Supply', value: 'Wired DC +12V / Built-in Li-ion battery' },
      ],
    },
    {
      category: 'Environmental',
      specs: [
        { label: 'Operating Temperature', value: '5°C to +45°C' },
        { label: 'Humidity Range', value: '15% – 85%' },
        { label: 'Pressure Range', value: '70 – 106 kPa' },
        { label: 'Protection Rating', value: 'IP65 (Dust-tight & Water-jet Resistant)' },
        { label: 'OS Compatibility', value: 'Windows 10 / 11 (64-bit)' },
      ],
    },
  ],
  pdfs: SHARED_PDFS,
};

@Injectable({ providedIn: 'root' })
export class ProductService {
  readonly products = signal<Product[]>([RFA_1717DIC, RFA_1417S, RFA_1014]);

  getById(id: string): Product | undefined {
    return this.products().find((p) => p.id === id);
  }
}
