import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public product:any;
  public new_product:any;
  category!:Array<string>
  action_to_do:string='thumb_up_off'

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.category=['BEST SELLER','NEW PRODUCTS']
    this.activatedRoute.data
    .subscribe(res=>{
      console.log(res,'this is response after subscribe');
      console.log(res?.data?.products[0]?.name);
      console.log(res?.data?.products.slice(0,5));
      this.product=res?.data?.products.slice(0,4);
      this.new_product=res?.data?.products.slice(5,9)
    })
  }
}
