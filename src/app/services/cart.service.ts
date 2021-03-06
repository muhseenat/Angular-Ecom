import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public count!: any;
  public cart: any;
  public user:any;
  constructor(
    private http: HttpClient,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  //SNACKBAR
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  //SETTING THE CART ITEMS
  set_cart(data: any) {
    this.count = data.cartItems.length;
    this.cart = data;
  }

  //RETURN CART ITEMS (TRY FOR TEST)
  getData() {
    return this.cart.cartItems;
  }
  //GET CART ITEMS
  get_cart() {
    const data = this.http.get<any>(`${env.BASE_URL}/users/cart`);
    data.forEach((a) => {
      this.set_cart(a);
    });
    return data;
  }

  //ADD TO CART
  addToCart(id:string,quantity:number) { 
  this.user = localStorage.getItem('user_token');
    if (this.user) {
      let data = { productId: id, quantity};
      return this.http.post<any>(`${env.BASE_URL}/users/cart`, data).subscribe(
        (res) => {
          this.openSnackBar('Item Added to Cart', 'Ok');
          this.get_cart();
        },
        (err) => {
          this.openSnackBar(err.error.message, 'Ok');
        }
      );
    } else {
      this.openSnackBar('Please create your account', 'Ok');
      return this.router.navigate(['login']);
    }
  }
  //REMOVE FROM CART
  removeCart(productId: any) {
    return this.http
      .delete<any>(`${env.BASE_URL}/users/cart?productId=${productId}`)
      .subscribe(
        (res) => {
          this.get_cart();
          this.openSnackBar('Item removed from the cart', 'Ok');
        },
        (err) => {
          this.openSnackBar(err.error.message, 'Ok');
        }
      );
  }

  clear(){
    this.count = 0;
    this.cart = '';
  }
}
