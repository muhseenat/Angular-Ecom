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
    //we can also take data from wishloisi service
    this.product=res?.data;
   })
  }

}
