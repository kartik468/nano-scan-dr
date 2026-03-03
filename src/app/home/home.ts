import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  CarouselComponent,
  type CarouselLabels,
  type CarouselSlide,
} from '../shared/components/carousel/carousel';
import {
  NavbarComponent,
  type NavLink,
  type NavLogo,
} from '../shared/components/navbar/navbar';
import {
  FooterComponent,
  type FooterLogo,
} from '../shared/components/footer/footer';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, CarouselComponent, FooterComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  readonly brandName = '';

  readonly navLogo: NavLogo = {
    src: '/assets/images/logo.jpeg',
    alt: 'NanoScanDR logo',
    width: 148,
    height: 40,
    route: '/',
  };

  readonly navLinks: NavLink[] = [
    { label: 'Overview', route: '/' },
    { label: 'Products', route: '/products' },
    { label: 'Contact', route: '/contact' },
  ];

  readonly navToggleLabel = 'Toggle navigation';
  readonly navMenuId = 'main-navigation';

  readonly carouselSlides: CarouselSlide[] = [
    {
      src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&w=1600&q=80',
      alt: 'Radiology technician reviewing X-ray scans',
      width: 1600,
      height: 900,
      headline: 'RFA-1717DIC — 17×17" General Radiography',
      subcopy:
        'High-resolution 3.4 lp/mm imaging with IP68 protection. Built for demanding general radiography workflows.',
      ctaLabel: 'View RFA-1717DIC',
      ctaRoute: '/products/rfa-1717dic',
    },
    {
      src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&w=1600&q=80',
      alt: 'Medical imaging equipment in a clinical room',
      width: 1600,
      height: 900,
      headline: 'RFA-1417S — 14×17" Versatile Detector',
      subcopy:
        'Lightweight and retrofit-ready for chest, spine, and extremity imaging with reliable AED trigger.',
      ctaLabel: 'View RFA-1417S',
      ctaRoute: '/products/rfa-1417s',
    },
    {
      src: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&w=1600&q=80',
      alt: 'Clinician examining diagnostic monitor',
      width: 1600,
      height: 900,
      headline: 'RFA-1014 — 10×12" Portable Detector',
      subcopy:
        'Ultra-portable at 1.9 kg with dual WiFi/Ethernet connectivity. Ideal for bedside and paediatric imaging.',
      ctaLabel: 'View RFA-1014',
      ctaRoute: '/products/rfa-1014',
    },
  ];

  readonly carouselHeadline = 'Advanced Flat Panel Detector Technology';
  readonly carouselSubcopy =
    'Capture clear, detailed imaging in demanding environments with detectors engineered for speed, durability, and precision.';
  readonly carouselCtaLabel = 'View all products';
  readonly carouselCtaHref = '/products';
  readonly carouselCtaRoute: string | null = '/products';
  readonly carouselLabels: CarouselLabels = {
    region: 'Product images',
    previous: 'Previous slide',
    next: 'Next slide',
    slidePrefix: 'Go to slide',
  };
  readonly carouselAutoAdvanceMs = 5000;

  readonly footerLogo: FooterLogo = {
    src: '/assets/images/logo_without_text.png',
    alt: 'NanoScanDR icon',
    width: 40,
    height: 40,
    route: '/',
  };

  readonly footerText = '© 2026 NanoScanDR. All rights reserved.';
}
