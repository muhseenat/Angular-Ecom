import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  action_to_do:string='thumb_down'


  title:string='MY FAVORITES'
  constructor() { }

  ngOnInit(): void {
  }

}
