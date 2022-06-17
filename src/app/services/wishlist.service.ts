import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  public wishlist: any;
  public count: number = 0;

  constructor(
    private http: HttpClient,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  //SNACKBAR
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  //SETTING WISHLIST EACH TIME
  set_wishlist(data: any) {
    this.wishlist = data;
    this.count = data.length;
  }

  //GET WISHLIST
  get_wishlist() {
    const data = this.http.get<any>(`${env.BASE_URL}/users/wishlists`);
    console.log('data before loop', data);

    data.forEach((a) => {
      this.set_wishlist(a);
    });
    console.log('data after loop', data);

    return data;
  }

  //ADD TO WISHLIST
  add_to_wishlist(id: any) {
    let user = localStorage.getItem('user_token');
    if (user) {
      return this.http
        .put<any>(`${env.BASE_URL}/users/wishlists`, { id })
        .subscribe(
          (res) => {
            this.openSnackBar('Item Added to Favorites', 'Ok');
            this.get_wishlist();
          },
          (err) => {
            this.openSnackBar(err?.error.message, 'Ok');
          }
        );
    } else {
      this.openSnackBar('Please create your account', 'Ok');
      return this.router.navigate(['login']);
    }
  }

  //REMOVE FROM WISHLIST
  remove_from_wishlist(id: any) {
    return this.http
      .delete<any>(`${env.BASE_URL}/users/wishlists?id=${id}`)
      .subscribe(
        (res) => {
          this.get_wishlist();
          this.openSnackBar('Item Removed from wishlist', 'Ok');
        },
        (err) => {
          this.openSnackBar(err.error.message, 'Error');
        }
      );
  }

clear(){
  this.wishlist=[]
  this.count=0;
}


}
