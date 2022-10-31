import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CartDataService } from 'src/app/shared/services/cart-data.service';
import { IProduct } from '../../models/iproduct';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styles: [],
})
export class CartViewComponent implements OnInit{
  cartItemsList!: Observable<IProduct[]>;

  constructor(
    private cartDataService: CartDataService
  ) {
  }

  ngOnInit(): void {
    // async pipe method
    this.cartItemsList = this.cartDataService.latestCartItems
  }

}
