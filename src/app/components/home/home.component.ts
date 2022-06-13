import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public product:any;
  category!:Array<string>
  action_to_do:string='thumb_up_off'

  constructor( private api:ApiService) { }

  ngOnInit(): void {
    this.category=['BEST SELLER','NEW PRODUCTS']
    this.api.getProduct()
    .subscribe(res=>{
      console.log(res,'this is response after subscribe');
      console.log(res?.products[0]?.name);
      console.log(res?.products.slice(0,5));
      
      
      this.product=res?.products.slice(0,4);
    })
  }
}
