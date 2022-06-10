import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
  slides = [
    {'image': '../../../assets/images (1).jpg'},
    {'image': '../../../assets/images (2).jpg'}, 
    {'image': '../../../assets/images (3).jpg'}, 
    {'image': '../../../assets/images (4).jpg'},
    {'image': '../../../assets/images (5).jpg'},
    {'image': '../../../assets/images.jpg'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
