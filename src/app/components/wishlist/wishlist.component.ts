import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  action_to_do:string='thumb_down'
  remove:boolean=true;
  public product:any;
  title:string='MY FAVORITES'
  constructor(private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    console.log("start of wishlist call");
    
   this.activateRoute.data
   
   .subscribe(res=>{
    console.log("activate data route in widhliat wprkwedd");
    console.log('this is  wishlist get responce',res);
    this.product=res?.data;
   })
  }

}
