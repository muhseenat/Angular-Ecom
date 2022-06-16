import { Component, OnInit } from '@angular/core';
import { WishlistService } from 'src/app/services/wishlist.service';

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
  constructor(
    public api:WishlistService
  ) { }

  ngOnInit(): void {
  }

}
