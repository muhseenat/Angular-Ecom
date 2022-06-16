import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() deviceXs!: boolean;
  user: any;
  wishlist_count!: number;
  cart_count!: number;
  constructor(private _snackBar: MatSnackBar, private api: ApiService, private route:Router, public cartApi:CartService) {}
  ngOnInit(): void {
    this.user = localStorage.getItem('user_token');
    this.api.get_wishlist().subscribe((res) => {
      console.log('data of wishlist header', res);
      this.wishlist_count = res?.length;
    });
    // this.cartApi.get((res) => {
    //   console.log('data of cart item', res);
    //   this.cart_count = res?.length;
    // });
  }
  logout() {
    confirm('are you teally want to logout');
    localStorage.removeItem('user_token');
    localStorage.removeItem('user_id');
    this.route.navigate(['login']);
    this.openSnackBar('You are Logged Out', 'Ok');
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
