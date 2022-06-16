import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public product: any;
  public new_product: any;
  category!: Array<string>;
  action_to_do: string = 'thumb_up_off';

  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService,
    private cartApi: CartService,
    private wishlistApi: WishlistService
  ) {}

  ngOnInit(): void {
    this.category = ['BEST SELLER', 'NEW PRODUCTS'];
    this.cartApi.get_cart();
    this.wishlistApi.get_wishlist();

    this.activatedRoute.data.subscribe((res) => {
      this.product = res?.data?.products.slice(0, 4);
      this.new_product = res?.data?.products.slice(5, 9);
    });
  }
}
