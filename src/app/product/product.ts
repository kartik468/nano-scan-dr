import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { PdfViewerComponent } from '../shared/components/pdf-viewer/pdf-viewer';
import { ProductService } from '../services/product.service';
import { I18nService } from '../services/i18n.service';

@Component({
  selector: 'app-product',
  imports: [PdfViewerComponent, RouterLink],
  templateUrl: './product.html',
  styleUrl: './product.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
  // Route param bound via withComponentInputBinding()
  readonly id = input.required<string>();

  private readonly productService = inject(ProductService);
  private readonly router = inject(Router);
  private readonly document = inject(DOCUMENT);
  private readonly i18n = inject(I18nService);

  readonly product = computed(() => {
    const found = this.productService.getById(this.id());
    if (!found) {
      this.router.navigate(['/products']);
      return this.productService.products()[0];
    }
    return found;
  });

  readonly productDetailConfig = computed(() => this.i18n.getProductDetail());

  readonly viewerOpen = signal(false);
  readonly activePdf = signal('');

  openPdf(url: string): void {
    if (this.isMobileDevice()) {
      // Open PDF directly in new tab for mobile devices
      this.document.defaultView?.open(url, '_blank');
    } else {
      // Use modal viewer for desktop devices
      this.activePdf.set(url);
      this.viewerOpen.set(true);
    }
  }

  closeViewer(): void {
    this.viewerOpen.set(false);
  }

  private isMobileDevice(): boolean {
    const userAgent = this.document.defaultView?.navigator.userAgent || '';
    const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return mobileRegex.test(userAgent);
  }
}
