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
  cartItems!:Array<any>
  displayedColumns = ['product.image','product.name','quantity', 'price','action'];
   public dataSource = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private activatedRoute:ActivatedRoute ) { }
 
  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.activatedRoute.data
    .subscribe(res=>{
     this.dataSource=res?.data?.cartItems.map((i:any)=>{
      return{
        ...i,action:true
      }
     })
     this.total=res?.data?.price
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
}


