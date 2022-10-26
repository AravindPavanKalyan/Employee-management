import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { CartDataService } from 'src/app/shared/services/cart-data.service';
import { IProduct } from '../../models/iproduct';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styles: [],
})
export class CartViewComponent implements OnInit, OnDestroy {
  cartItemsList!: IProduct[];
  cartItemSubscription!: Subscription;

  constructor(
    private titleService: Title,
    private cartDataService: CartDataService
  ) {
    this.titleService.setTitle('Cart');
  }

  ngOnInit(): void {
    this.cartItemSubscription = this.cartDataService.latestCartItems.subscribe(
      (cartItems: IProduct[]) => {
        this.cartItemsList = cartItems;
        console.log('cartItems', cartItems);
      }
    );
  }

  ngOnDestroy(): void {
    if (this.cartItemSubscription) {
      this.cartItemSubscription.unsubscribe();
    }
  }
}
