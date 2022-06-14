import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-like-product',
  templateUrl: './like-product.component.html',
  styleUrls: ['./like-product.component.scss']
})
export class LikeProductComponent implements OnInit {
  public product:any;

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.product=res?.products.slice(5,9)

    })
  }

  goto(id:any){
    console.log('this is id ');
    
    this.router.navigate([`/product/${id}`])
  }

}
