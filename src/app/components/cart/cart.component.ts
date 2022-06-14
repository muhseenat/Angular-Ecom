import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})


export class CartComponent implements AfterViewInit,OnInit {
  
  total!:number;
  count!:any;
  cartItems!:Array<any>
  displayedColumns: string[] = ['No', 'Image','Name','Quantity', 'Price' ,'Remove'];
   public dataSource = new MatTableDataSource<any>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private activatedRoute:ActivatedRoute ) { }
 
  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.activatedRoute.data
    .subscribe(res=>{
     console.log('this is cart items',res);
     this.cartItems=res?.data?.cartItems
     console.log('this is dataSourcw',this.dataSource);
   this.count=res?.data?.cartItems.length
     this.total=res?.data?.price
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  logData(row:any){
    console.log(row);
    
  }
}

export interface PeriodicElement {

    product:{
      _id:string,
      name:string,
      countInStock:number,
      image:Array<string>,
      numReviews:number,
      rating:number
    },
    price:number,
    quantity:number


}


const ELEMENT_DATA: PeriodicElement[] = [

]


