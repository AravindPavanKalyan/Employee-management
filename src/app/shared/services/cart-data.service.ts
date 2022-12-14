import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take } from 'rxjs';
import { IProduct } from 'src/app/products/models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class CartDataService {
  // Subject: A Subject in RxJS is a sort of bridge or proxy that is available in
  // some implementations of ReactiveX that acts both as an observer and as an Observable.

  // step1: have the default cart items
  private defaultCartItems: IProduct[] = [
    {
      id: 2,
      name: 'Cheese',
      category: 'Diary',
      price: '$6.38',
    },
  ];

  // Step 2: Create an observable. This should also act as observer.
  // It's Subject. Because the subject should have default cart items, we will choose BehaviourSubject
  // Let's create an object for BehaviourSubject class with default cart items
  private cartItems = new BehaviorSubject(this.defaultCartItems);

  // Step 3: We will make the cartItems as observable, so that any component can subscribe to it.
  latestCartItems: Observable<IProduct[]> = this.cartItems.asObservable();

  constructor() {}

  addToCartItems(product: IProduct) {
    //we should connect with the rest api b/e and add the above product --- and implement relevant logic here
    console.log('product in cartdata', product);
    // let's work adding this product to existing cart items
    this.latestCartItems
      .pipe(take(1))
      .subscribe((existingCartItems: IProduct[]): void => {
        console.log(existingCartItems);
        const updatedCartItems = [...existingCartItems, product];
        this.cartItems.next(updatedCartItems);
      });
  }
}
