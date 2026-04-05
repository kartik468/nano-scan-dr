import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../services/product.service';
import { I18nService } from '../services/i18n.service';

@Component({
  selector: 'app-products',
  imports: [RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent {
  private readonly productService = inject(ProductService);
  private readonly i18n = inject(I18nService);

  readonly products = this.productService.products;
  readonly heroConfig = computed(() => this.i18n.getProducts().hero);
  readonly cardCta = computed(() => this.i18n.getProducts().cardCta);
}
