import { Component, OnInit } from '@angular/core';
import { CartDataService } from 'src/app/shared/services/cart-data.service';
import { IProduct } from '../../models/iproduct';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styles: [],
})
export class ProductsListComponent implements OnInit {
  productList: IProduct[] = [];

  constructor(
    private productService: ProductsService,
    private cartDataService: CartDataService
  ) {
  }

  ngOnInit(): void {
    this.productList = this.productService.getProducts();
    console.log('this.productList', this.productList);
  }

  handleAddToCart(product: any) {
    console.log('product', product);
    this.cartDataService.addToCartItems(product);
  }
}
