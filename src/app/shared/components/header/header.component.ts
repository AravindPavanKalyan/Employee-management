import { Component, OnInit } from '@angular/core';
import { CartDataService } from '../../services/cart-data.service';
import { NavigationHelper } from '../../utils/navigation-helper';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartItemsCount: number = 0;

  constructor(public navigationHelper: NavigationHelper, private cartDataService: CartDataService) { }

  ngOnInit(): void {
    this.cartDataService.latestCartItems.subscribe( (cartItems) => {
      this.cartItemsCount = cartItems.length;
      console.log('cartItems', cartItems);
    })
  }

}
