import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  constructor(
    private router: Router,
    public api: ApiService,
    public cartApi:CartService
  ) {}
  @Input() title!: string;
  @Input() action_to_do!: string;
  @Input() product!: any;
  @Input() remove: boolean = false;
  ngOnInit(): void {}

  goto(id: any) {
    this.router.navigate([`/home/product/${id}`]);
  }

  

  

//   //ADD TO CART
//   add_to_cart(id: string) {
//     let user = localStorage.getItem('user_token');
//     if (user) {
//       let data = { productId: id, quantity: 1 };
//       this.cartApi.addtoCart(data).subscribe(
//         (res) => {
//           console.log('this is cart items count look for ir',res);
//           this.openSnackBar('Item Added to Cart', 'Ok');

//         },
//         (err) => {
//           this.openSnackBar(err.error.message, 'Ok');
//         }
//       );
//     } else {
//       this.router.navigate(['login']);
//     }
//   }
//   openSnackBar(message: string, action: string) {
//     this._snackBar.open(message, action);
//   }
}
