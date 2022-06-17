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
  
    {'image': '../../../assets/1000_F_252680454_05E8u8lQijA3nn4MloY0sDn1tVDn9YWz.jpg'}, 
    {'image': '../../../assets/creative-vector-illustration-big-sale-260nw-1364474708.webp'}, 
    {'image': '../../../assets/cae72ce86998abcadd5051acd91a696b.jpg'},
   
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
