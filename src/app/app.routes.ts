import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () => import('./home/home').then((m) => m.HomeComponent),
	},
	{
    path: 'products',
    loadComponent: () =>
      import('./products/products').then((m) => m.ProductsComponent),
  },
  {
    path: 'products/:id',
    loadComponent: () =>
      import('./product/product').then((m) => m.ProductComponent),
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about').then((m) => m.AboutComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./contact-page/contact-page').then(
        (m) => m.ContactPageComponent,
      ),
  },
  // Redirect legacy /product to /products
  { path: 'product', redirectTo: 'products', pathMatch: 'full' as const },
];
