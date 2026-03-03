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

interface DownloadCard {
  id: string;
  title: string;
  description: string;
  url: string;
}

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

  readonly downloadCards = computed<DownloadCard[]>(() => {
    const pdfs = this.product().pdfs;
    return [
      {
        id: 'brochure',
        title: 'Product brochure',
        description: 'Quick overview for clinical teams and procurement.',
        url: pdfs.brochure,
      },
      {
        id: 'catalogue',
        title: 'Technical catalogue',
        description: 'Full specifications and detector performance details.',
        url: pdfs.catalogue,
      },
    ];
  });

  readonly viewerOpen = signal(false);
  readonly activePdf = signal('');

  readonly footerLogo: FooterLogo = {
    src: '/assets/images/logo_without_text.png',
    alt: 'NanoScanDR icon',
    width: 40,
    height: 40,
    route: '/',
    fragment: 'carousel',
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
