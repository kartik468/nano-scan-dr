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
import { ContactSectionComponent } from '../features/contact/contact';

@Component({
  selector: 'app-contact-page',
  imports: [NavbarComponent, ContactSectionComponent, FooterComponent],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactPageComponent {
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
