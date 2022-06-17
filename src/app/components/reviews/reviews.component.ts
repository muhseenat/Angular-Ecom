import { Component,Input ,OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  constructor() { }
  panelOpenState = false;
  @Input() reviews:any;
  ngOnInit(): void {
  }

}
