import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss'],
})
export class SingleProductComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService,
    private route: Router
  ) {}

  public product: any;
  ngOnInit(): void {
    this.getSingleProduct();

    this.route.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  getSingleProduct(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('this is product id', id);
    this.api.getSingleProduct(id).subscribe((res) => {
      console.log('single product', res);
      this.product = res;
      console.log('this is product', res);
    });
  }
}
