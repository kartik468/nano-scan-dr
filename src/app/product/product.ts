import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  signal,
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { PdfViewerComponent } from '../shared/components/pdf-viewer/pdf-viewer';
import { ProductService } from '../services/product.service';

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

  readonly product = computed(() => {
    const found = this.productService.getById(this.id());
    if (!found) {
      this.router.navigate(['/products']);
      return this.productService.products()[0];
    }
    return found;
  });

  readonly viewerOpen = signal(false);
  readonly activePdf = signal('');

  openPdf(url: string): void {
    this.activePdf.set(url);
    this.viewerOpen.set(true);
  }

  closeViewer(): void {
    this.viewerOpen.set(false);
  }
}
