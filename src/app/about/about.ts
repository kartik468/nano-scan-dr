import { ChangeDetectionStrategy, Component } from '@angular/core';
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
  selector: 'app-about',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  readonly brandName = 'NanoScanDR';

  readonly navLogo: NavLogo = {
    src: '/assets/images/logo.jpeg',
    alt: 'NanoScanDR logo',
    width: 148,
    height: 40,
    route: '/',
    fragment: 'carousel',
  };

  readonly navLinks: NavLink[] = [
    { label: 'Overview', route: '/', fragment: 'carousel' },
    { label: 'Products', route: '/products' },
    { label: 'About', route: '/about' },
    { label: 'Contact', route: '/contact' },
  ];

  readonly navToggleLabel = 'Toggle navigation';
  readonly navMenuId = 'main-navigation';

  readonly footerLogo: FooterLogo = {
    src: '/assets/images/logo_without_text.png',
    alt: 'NanoScanDR icon',
    width: 40,
    height: 40,
    route: '/',
    fragment: 'carousel',
  };

  readonly footerText = '© 2026 NanoScanDR. All rights reserved.';
}
