import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home').then((m) => m.HomeComponent),
  },
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full',
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
    path: 'contact',
    loadComponent: () =>
      import('./contact-page/contact-page').then(
        (m) => m.ContactPageComponent,
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./not-found/not-found').then((m) => m.NotFoundComponent),
  },
];
