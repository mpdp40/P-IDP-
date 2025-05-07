import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'listar-productos',
    loadComponent: () => import('./paginas/listar-productos/listar-productos.page').then( m => m.ListarProductosPage)
  },
  {
    path: 'agregar-producto',
    loadComponent: () => import('./paginas/agregar-producto/agregar-producto.page').then( m => m.AgregarProductoPage)
  },
];
