import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements AfterViewInit, OnInit {
  public data!: any;
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
    public cartApi: CartService,
  ) {}

  ngOnInit(): void {
    // this.getData();
  }

  //OPTIONAL FOR TABLE SETTING
  getData() {
    this.data = this.cartApi.getData();
    console.log(this.data, 'this is data coming from service');
    this.dataSource = this.data?.cartItems.map((i: any) => {
      return {
        ...i,
        action: true,
      };
    });

  }

  removeCart(id: String) {
    this.cartApi.removeCart(id);
  }


  changePrice(){
    // hyxuDGnkMKzBfx9ePz8t
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }
}
