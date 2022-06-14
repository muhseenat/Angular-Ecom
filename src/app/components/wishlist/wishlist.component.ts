import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  action_to_do:string='thumb_down'

  public product:any;
  title:string='MY FAVORITES'
  constructor(private api:ApiService) { }

  ngOnInit(): void {
   this.api.get_wishlist()
   .subscribe((res)=>{
    console.log('this is  wishlist get responce');
    this.product=res;
   })
  }

}
