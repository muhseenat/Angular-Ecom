import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  constructor(private router:Router,private api:ApiService) {}
  @Input() title!: string;
  @Input() action_to_do!: string;
  @Input() product!: any;

  ngOnInit(): void {}

  goto(id:any){
    this.router.navigate([`/product/${id}`])
  }

  add_to_favorites():void{
   console.log('item is adding to fovorites');
   
  }

}
