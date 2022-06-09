import { Component, OnInit } from '@angular/core';
// import { MatCarouselComponent } from '@ngmodule/material-carousel';
// import { MatCarousel } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
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
