import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CartDataService } from 'src/app/shared/services/cart-data.service';
import { IProduct } from '../../models/iproduct';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styles: [
  ]
})
export class CartViewComponent implements OnInit {

  cartItemsList!: IProduct[];

  constructor(private titleService: Title, private cartDataService: CartDataService) {
    titleService.setTitle('Cart');
  }

  ngOnInit(): void {
    this.cartDataService.latestCartItems.subscribe( (cartItems: IProduct[]) => {
      this.cartItemsList = cartItems;
      console.log('cartItems', cartItems);
    })
  }

}
