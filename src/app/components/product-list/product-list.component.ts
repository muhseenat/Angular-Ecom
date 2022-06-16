import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  constructor(
    private router: Router,
    public api: ApiService,
    public cartApi: CartService,
    public wishlistApi: WishlistService
  ) {}
  @Input() title!: string;
  @Input() action_to_do!: string;
  @Input() product!: any;
  @Input() remove: boolean = false;
  ngOnInit(): void {}

  goto(id: any) {
    this.router.navigate([`/home/product/${id}`]);
  }
}
