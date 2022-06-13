import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  category!:Array<string>
  action_to_do:string='thumb_up_off'

  constructor() { }

  ngOnInit(): void {
    this.category=['BEST SELLER','NEW PRODUCTS']
    
  }
}
