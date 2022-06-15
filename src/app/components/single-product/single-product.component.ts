import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss'],
})
export class SingleProductComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService,
    private route: Router,
    private _snackBar: MatSnackBar
  ) {}

  public product: any;
  ngOnInit(): void {
    this.getSingleProduct();
    this.route.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  getSingleProduct(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getSingleProduct(id).subscribe((res) => {
      this.product = res;
    });
  }

  //ADD TO WISHLIST
  add_to_favorites(id: any): void {
    let user = localStorage.getItem('user_token');
    if (user) {
      this.api.add_to_wishlist(id).subscribe(
        (res) => {
          this.openSnackBar('Item Added to Favorites', 'Ok');
        },
        (err) => {
          this.openSnackBar(err?.error.message, 'Ok');
        }
      );
    } else {
      this.openSnackBar('Please create your account', 'Ok');
      this.route.navigate(['/login']);
    }
  }

  //ADD TO CART
  add_to_cart(id: string) {
    let user = localStorage.getItem('user_token');
    if (user) {
      let data = { productId: id, quantity: 1 };
      this.api.add_to_cart(data).subscribe(
        (res) => {
          this.openSnackBar('Item Added to Cart', 'Ok');
        },
        (err) => {
          this.openSnackBar(err.error.message, 'Ok');
        }
      );
    } else {
      this.openSnackBar('Please create your account', 'Ok');
      this.route.navigate(['login']);
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
