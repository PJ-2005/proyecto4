import { Routes } from '@angular/router';
import { PedidosComponent } from './components/pedidos/pedidos.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'pedidos', pathMatch: 'full' },
  { path: 'pedidos', component: PedidosComponent }
];
