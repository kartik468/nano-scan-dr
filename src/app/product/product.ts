import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  signal,
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {
  NavbarComponent,
  type NavLink,
  type NavLogo,
} from '../shared/components/navbar/navbar';
import {
  FooterComponent,
  type FooterLogo,
} from '../shared/components/footer/footer';
import { PdfViewerComponent } from '../shared/components/pdf-viewer/pdf-viewer';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  imports: [NavbarComponent, FooterComponent, PdfViewerComponent, RouterLink],
  templateUrl: './product.html',
  styleUrl: './product.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
  // Route param bound via withComponentInputBinding()
  readonly id = input.required<string>();

  private readonly productService = inject(ProductService);
  private readonly router = inject(Router);

  readonly product = computed(() => {
    const found = this.productService.getById(this.id());
    if (!found) {
      this.router.navigate(['/products']);
      return this.productService.products()[0];
    }
    return found;
  });

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

  readonly viewerOpen = signal(false);
  readonly activePdf = signal('');

  readonly footerLogo: FooterLogo = {
    src: '/assets/images/logo_without_text.png',
    alt: 'NanoScanDR icon',
    width: 40,
    height: 40,
    route: '/',
  };

  readonly footerText = '© 2026 NanoScanDR. All rights reserved.';

  openPdf(url: string): void {
    this.activePdf.set(url);
    this.viewerOpen.set(true);
  }

  closeViewer(): void {
    this.viewerOpen.set(false);
  }
}
