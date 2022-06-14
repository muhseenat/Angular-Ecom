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
  constructor(private router:Router,private api:ApiService, private _snackBar: MatSnackBar,
    ) {}
  @Input() title!: string;
  @Input() action_to_do!: string;
  @Input() product!: any;

  ngOnInit(): void {}

  goto(id:any){
    this.router.navigate([`/product/${id}`])
  }

  add_to_favorites(id:any):void{
   console.log('item is adding to fovorites');
     let user=localStorage.getItem('user_token');
   if(user){
      this.api.add_to_wishlist(id)
      .subscribe((res)=>{
        this.openSnackBar('Item Added to Favorites','Ok')
      },(err)=>{
        console.log(err,'this is errror');
        this.openSnackBar(err?.error.message,'Ok')
      })
   }else{
    console.log('user not found');
    this.openSnackBar('Please create your account','Ok')
    this.router.navigate(['/login']);
   }
   
  }


  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
