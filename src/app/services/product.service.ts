import { Injectable, computed, inject, signal } from '@angular/core';
import { Product } from '../models/product.model';
import { I18nService } from './i18n.service';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly i18n = inject(I18nService);
  private readonly productsSignal = signal<Product[]>([]);

  readonly products = computed(() => this.productsSignal());

  constructor() {
    this.loadProducts();
  }

  private loadProducts(): void {
    // Load products from i18n service
    const allProducts = this.i18n.getAllProductsData();
    this.productsSignal.set(allProducts);
  }

  getById(id: string): Product | undefined {
    return this.products().find((p) => p.id === id);
  }
}
