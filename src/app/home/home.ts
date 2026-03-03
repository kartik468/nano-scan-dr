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
import { ContactSectionComponent } from '../features/contact/contact';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, CarouselComponent, ContactSectionComponent, FooterComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  readonly brandName = 'NanoScanDR';

  readonly navLogo: NavLogo = {
    src: '/assets/images/logo.jpeg',
    alt: 'NanoScanDR logo',
    width: 148,
    height: 40,
    href: '#carousel',
  };

  readonly navLinks: NavLink[] = [
    { label: 'Overview', href: '#carousel' },
    { label: 'Contact', href: '#contact' },
  ];

  readonly navToggleLabel = 'Toggle navigation';
  readonly navMenuId = 'main-navigation';

  readonly carouselSlides: CarouselSlide[] = [
    {
      src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&w=1600&q=80',
      alt: 'Radiology technician reviewing X-ray scans',
      width: 1600,
      height: 900,
    },
    {
      src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&w=1600&q=80',
      alt: 'Medical imaging equipment in a clinical room',
      width: 1600,
      height: 900,
    },
    {
      src: 'https://images.unsplash.com/photo-1581091012184-7f24d58f3a4c?auto=format&w=1600&q=80',
      alt: 'Clinician examining diagnostic monitor',
      width: 1600,
      height: 900,
    },
  ];

  readonly carouselHeadline = 'Advanced Flat Panel Detector Technology';
  readonly carouselSubcopy =
    'Capture clear, detailed imaging in demanding environments with a detector engineered for speed, durability, and precision.';
  readonly carouselCtaLabel = 'Contact sales';
  readonly carouselCtaHref = '#contact';
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
    href: '#carousel',
  };

  readonly footerText = '© 2026 NanoScanDR. All rights reserved.';
}
