import { TestBed, waitForAsync } from '@angular/core/testing';
import { I18nService } from './i18n.service';

describe('I18nService', () => {
  let service: I18nService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [I18nService],
    });
    service = TestBed.inject(I18nService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should load i18n data', waitForAsync(() => {
    // Give the async loading time to complete
    setTimeout(() => {
      expect(service.isLoaded()).toBeTruthy();
      expect(service.getData()).toBeTruthy();
    }, 1000);
  }));

  it('should get text by dotted key', waitForAsync(() => {
    setTimeout(() => {
      const text = service.getText('navbar.toggleLabel');
      expect(text).toBe('Toggle navigation');
    }, 1000);
  }));

  it('should return default value for missing key', waitForAsync(() => {
    setTimeout(() => {
      const text = service.getText('nonexistent.key', 'default');
      expect(text).toBe('default');
    }, 1000);
  }));

  it('should get object by dotted key', waitForAsync(() => {
    setTimeout(() => {
      const navbar = service.getNavbar();
      expect(navbar.toggleLabel).toBe('Toggle navigation');
      expect(navbar.links.length).toBeGreaterThan(0);
    }, 1000);
  }));

  it('should get footer config', waitForAsync(() => {
    setTimeout(() => {
      const footer = service.getFooter();
      expect(footer.copyrightText).toContain('NanoScanDR');
    }, 1000);
  }));

  it('should get home carousel config', waitForAsync(() => {
    setTimeout(() => {
      const home = service.getHome();
      expect(home.carousel.headline).toBeTruthy();
      expect(home.carousel.labels).toBeTruthy();
    }, 1000);
  }));

  it('should get products config', waitForAsync(() => {
    setTimeout(() => {
      const products = service.getProducts();
      expect(products.hero.title).toBe('Our product');
      expect(products.cardCta).toBe('View details');
    }, 1000);
  }));

  it('should get contact page config', waitForAsync(() => {
    setTimeout(() => {
      const contactPage = service.getContactPage();
      expect(contactPage.hero.title).toBe('Talk with NanoScanDR');
    }, 1000);
  }));

  it('should get contact form config with validation messages', waitForAsync(() => {
    setTimeout(() => {
      const contact = service.getContact();
      expect(contact.form.nameLabel).toBe('Name');
      expect(contact.form.nameError).toBe('Name is required.');
      expect(contact.form.successMessage).toBeTruthy();
    }, 1000);
  }));

  it('should get not found config', waitForAsync(() => {
    setTimeout(() => {
      const notFound = service.getNotFound();
      expect(notFound.code).toBe('404');
      expect(notFound.title).toBe('Page not found');
    }, 1000);
  }));

  it('should get product detail config', waitForAsync(() => {
    setTimeout(() => {
      const productDetail = service.getProductDetail();
      expect(productDetail.backLink).toBeTruthy();
      expect(productDetail.downloadLabel).toBe('Download');
    }, 1000);
  }));

  it('should get product data by ID', waitForAsync(() => {
    setTimeout(() => {
      const product = service.getProductData('rfa-1717dic');
      expect(product).toBeTruthy();
      expect(product.id).toBe('rfa-1717dic');
      expect(product.name).toBe('RFA-1717DIC');
    }, 1000);
  }));

  it('should get all products data', waitForAsync(() => {
    setTimeout(() => {
      const products = service.getAllProductsData();
      expect(Array.isArray(products)).toBe(true);
      expect(products.length).toBeGreaterThan(0);
    }, 1000);
  }));
});
