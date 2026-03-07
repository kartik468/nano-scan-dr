import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  CarouselComponent,
  type CarouselLabels,
  type CarouselSlide,
} from '../shared/components/carousel/carousel';
import { ContactSectionComponent } from '../features/contact/contact';

@Component({
  selector: 'app-home',
  imports: [CarouselComponent, ContactSectionComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  readonly carouselSlides: CarouselSlide[] = [
    {
      src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&w=1600&q=80',
      alt: 'Radiology technician reviewing X-ray scans',
      width: 1600,
      height: 900,
      headline: 'RFA-1717DIC — 17×17" General Radiography',
      subcopy:
        'Advanced IGZO TFT technology with 3.4 lp/mm spatial resolution and 16-bit ADC for exceptional image clarity. IP68 waterproof protection for demanding clinical environments.',
      ctaLabel: 'View RFA-1717DIC',
      ctaRoute: '/products/rfa-1717dic',
    },
    {
      src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&w=1600&q=80',
      alt: 'Medical imaging equipment in a clinical room',
      width: 1600,
      height: 900,
      headline: 'RFA-1717DIC — 17×17" General Radiography',
      subcopy:
        'Fast 2.5-second image acquisition with stable AED auto-trigger mode. 140μm pixel pitch delivers high-resolution imaging for precise diagnostics.',
      ctaLabel: 'View RFA-1717DIC',
      ctaRoute: '/products/rfa-1717dic',
    },
    {
      src: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&w=1600&q=80',
      alt: 'Clinician examining diagnostic monitor',
      width: 1600,
      height: 900,
      headline: 'RFA-1717DIC — 17×17" General Radiography',
      subcopy:
        'ISO 4090 cassette compatible for seamless system integration. Giga Ethernet connectivity ensures reliable data transfer with 3072×3072 pixel matrix.',
      ctaLabel: 'View RFA-1717DIC',
      ctaRoute: '/products/rfa-1717dic',
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
}
