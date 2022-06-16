import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  user: any;

  constructor(
    private _snackBar: MatSnackBar,
    private route: Router,
    public cartApi: CartService,
    public wishlistApi: WishlistService
  ) {}
  ngOnInit(): void {}
  logout() {
    confirm('are you teally want to logout');

    this.route.navigate(['login']);
    this.openSnackBar('You are Logged Out', 'Ok');
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
