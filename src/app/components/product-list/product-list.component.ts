import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  
  
  constructor() { }
  @Input() title!:string
 @Input() action_to_do!:string

  ngOnInit(): void {
  }

}
