import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss'],
})
export class SingleProductComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    public api: ApiService,
    public cartApi: CartService,
    private route: Router,
    public wishlistApi:WishlistService
  ) {}

  public product: any;
  public quantity:number=1
  ngOnInit(): void {
    this.getSingleProduct();
    this.route.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  getSingleProduct(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getSingleProduct(id).subscribe((res) => {
      this.product = res;
    });
  }

  change(argu:any){
    console.log('function calling');
    
    if(this.quantity>=1){
      console.log('this happening');
      
      this.quantity=argu?this.quantity+1:this.quantity-1
      console.log(this.quantity);
      
    }
  }
}
