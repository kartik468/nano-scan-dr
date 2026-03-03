import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  NavbarComponent,
  type NavLink,
  type NavLogo,
} from '../shared/components/navbar/navbar';
import {
  FooterComponent,
  type FooterLogo,
} from '../shared/components/footer/footer';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  imports: [NavbarComponent, FooterComponent, RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent {
  private readonly productService = inject(ProductService);

  readonly products = this.productService.products;

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
