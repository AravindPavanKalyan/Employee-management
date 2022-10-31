import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/guards/auth.guard';
import { CartViewComponent } from './components/cart-view/cart-view.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsListComponent } from './components/products-list/products-list.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsListComponent,
    canActivate: [AuthGuard], data: { animation: 'productListPage', title: 'Products' }
  },
  { path: 'cart', component: CartViewComponent, data: { title: 'Cart' } },
  { path: ':id', component: ProductDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
