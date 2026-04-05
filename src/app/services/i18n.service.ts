import { Injectable, signal } from '@angular/core';

interface I18nData {
  navbar: {
    toggleLabel: string;
    menuId: string;
    links: Array<{
      label: string;
      route?: string;
      exact?: boolean;
    }>;
  };
  footer: {
    copyrightText: string;
  };
  home: {
    carousel: {
      headline: string;
      subcopy: string;
      ctaLabel: string;
      ctaRoute: string;
      labels: {
        region: string;
        previous: string;
        next: string;
        slidePrefix: string;
      };
      autoAdvanceMs: number;
      slides: Array<{
        src: string;
        alt: string;
        width: number;
        height: number;
        headline: string;
        subcopy: string;
        ctaLabel: string;
        ctaRoute: string;
      }>;
    };
  };
  products: {
    pageHeader: {
      eyebrow: string;
      title: string;
      lead: string;
    };
    cardCta: string;
  };
  productDetail: {
    backLink: string;
    downloadLabel: string;
    closeLabel: string;
    noPdfMessage: string;
    getBrochureButton: string;
    viewBrochureButton: string;
  };
  contactPage: {
    pageHeader: {
      eyebrow: string;
      title: string;
      lead: string;
    };
  };
  contact: {
    title: string;
    intro: string;
    form: {
      nameLabel: string;
      nameError: string;
      emailLabel: string;
      emailErrorRequired: string;
      emailErrorInvalid: string;
      messageLabel: string;
      messageError: string;
      submitButton: string;
      successMessage: string;
    };
    contactDetails: Array<{
      label: string;
      value?: string;
      lines?: string[];
      href?: string;
    }>;
  };
  notFound: {
    code: string;
    title: string;
    description: string;
    ctaLabel: string;
    ctaRoute: string;
  };
  pdf: {
    downloadLabel: string;
    closeLabel: string;
    noSelectionMessage: string;
  };
  products_data: Record<string, any>;
  [key: string]: any;
}

@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly data = signal<I18nData | null>(null);
  private readonly loaded = signal(false);

  constructor() {
    this.loadLanguage('en');
  }

  private async loadLanguage(lang: string): Promise<void> {
    try {
      const response = await fetch(`./assets/i18n/${lang}.json`);
      if (!response.ok) {
        throw new Error(`Failed to load language file: ${response.statusText}`);
      }
      const i18nData = (await response.json()) as I18nData;
      this.data.set(i18nData);
      this.loaded.set(true);
    } catch (error) {
      console.error(`Error loading i18n file for language "${lang}":`, error);
      this.loaded.set(false);
    }
  }

  /**
   * Get all i18n data
   */
  getData(): I18nData | null {
    return this.data();
  }

  /**
   * Check if data is loaded
   */
  isLoaded(): boolean {
    return this.loaded();
  }

  /**
   * Get text by dotted key path (e.g., 'navbar.toggleLabel')
   */
  getText(key: string, defaultValue?: string): string {
    const data = this.data();
    if (!data) {
      return defaultValue || key;
    }

    const keys = key.split('.');
    let value: any = data;

    for (const k of keys) {
      value = value?.[k];
    }

    return typeof value === 'string' ? value : defaultValue || key;
  }

  /**
   * Get nested object by dotted key path (e.g., 'products.pageHeader')
   */
  getObject<T = any>(key: string, defaultValue?: T): T {
    const data = this.data();
    if (!data) {
      return defaultValue as T;
    }

    const keys = key.split('.');
    let value: any = data;

    for (const k of keys) {
      value = value?.[k];
    }

    return value ?? defaultValue;
  }

  /**
   * Get typed navbar config from en.json
   */
  getNavbar() {
    return this.getObject<I18nData['navbar']>('navbar', {} as I18nData['navbar']);
  }

  /**
   * Get typed footer config from en.json
   */
  getFooter() {
    return this.getObject<I18nData['footer']>('footer', {} as I18nData['footer']);
  }

  /**
   * Get typed home config from en.json
   */
  getHome() {
    return this.getObject<I18nData['home']>('home', {} as I18nData['home']);
  }

  /**
   * Get typed products config from en.json
   */
  getProducts() {
    return this.getObject<I18nData['products']>('products', {} as I18nData['products']);
  }

  /**
   * Get typed contact page config from en.json
   */
  getContactPage() {
    return this.getObject<I18nData['contactPage']>('contactPage', {} as I18nData['contactPage']);
  }

  /**
   * Get typed contact form config from en.json
   */
  getContact() {
    return this.getObject<I18nData['contact']>('contact', {} as I18nData['contact']);
  }

  /**
   * Get typed not found config from en.json
   */
  getNotFound() {
    return this.getObject<I18nData['notFound']>('notFound', {} as I18nData['notFound']);
  }

  /**
   * Get typed product detail config from en.json
   */
  getProductDetail() {
    return this.getObject<I18nData['productDetail']>(
      'productDetail',
      {} as I18nData['productDetail'],
    );
  }

  /**
   * Get product data by ID
   */
  getProductData(productId: string): any {
    const productsData = this.getObject<Record<string, any>>('products_data', {});
    return productsData[productId] || null;
  }

  /**
   * Get all products data
   */
  getAllProductsData(): any[] {
    const productsData = this.getObject('products_data', {});
    return Object.values(productsData);
  }
}
