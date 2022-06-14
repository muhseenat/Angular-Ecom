import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  constructor(
    private router: Router,
    private api: ApiService,
    private _snackBar: MatSnackBar
  ) {}
  @Input() title!: string;
  @Input() action_to_do!: string;
  @Input() product!: any;
  @Input() remove:boolean=false
  ngOnInit(): void {}

  goto(id: any) {
    this.router.navigate([`/product/${id}`]);
  }

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
      this.router.navigate(['/login']);
    }
  }

  //REMOVING ITEM FROM FAVORITES
  remove_from_favorites(id:any){
    console.log('call going started');
    
    this.api.remove_from_wishlist(id).subscribe(res=>{
      this.openSnackBar("Item Removed from wishlist","Ok")
    },err=>{
      this.openSnackBar(err.error.message,"Error")
    })
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
