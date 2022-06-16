import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

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
    private route: Router
  ) {}

  public product: any;
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
}
