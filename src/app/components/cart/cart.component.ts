import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements AfterViewInit, OnInit {
  total!: number;
  public grandTotal:number=0;
  cartItems!: Array<any>;
  show: boolean = false;
  public data!:any;
  displayedColumns = [
    'product.image',
    'product.name',
    'quantity',
    'price',
    'action',
  ];
  public dataSource: Array<any> = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService,
    public cartApi:CartService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getData();
  }
  getData() {

   this.data= this.cartApi.getData()
console.log(this.data,'this is data coming from service');

  

      this.dataSource = this.data?.cartItems.map((i: any) => {
        return {
          ...i,
          action: true,
        };
      });
      this.show = this.data?.cartItems.length? true : false;
      this.total = this.data?.price;
  //  this.grandTotal=this.api.getTotalPrice()
    }
  
   removeCart(id:String){

     this.cartApi.removeCart(id)

     this.dataSource?.forEach((i) => {
              if (i?.product?._id == id) {
                this.total = this.total - i.quantity * i.price;
              }
            });
            // this.dataSource = this.dataSource.filter((i) => i?.product?._id !== id);
  
 
   }
  // remove_from_cart(id: string) {
  //   console.log('this is reove isd', id);
  //   this.cartApi.removeCart(id).subscribe(
  //     (res) => {
  //       console.log('this is the data after remove from api',res);
        
  //       this.dataSource?.map((i) => {
  //         if (i?.product?._id == id) {
  //           this.total = this.total - i.quantity * i.price;
  //         }
  //       });
  //       this.dataSource = this.dataSource.filter((i) => i?.product?._id !== id);
  //       this.openSnackBar('Item removed from the cart', 'Ok');
  //     },
  //     (err) => [this.openSnackBar(err.error.message, 'Ok')]
  //   );
  // }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }


}
