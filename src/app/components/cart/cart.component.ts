import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements AfterViewInit, OnInit {
  total!: number;
  cartItems!: Array<any>;
  show: boolean = false;
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
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.activatedRoute.data.subscribe((res) => {
      console.log('this is data', res);

      this.dataSource = res?.data?.cartItems.map((i: any) => {
        return {
          ...i,
          action: true,
        };
      });
      this.show = res?.data?.price > 0 ? true : false;
      this.total = res?.data?.price;
    });
  }

  remove_from_cart(id: string) {
    console.log('this is reove isd', id);
    this.api.remove_from_cart(id).subscribe(
      (res) => {
        this.dataSource = this.dataSource?.filter(
          (i) => i?.product?._id !== id
        );

        console.log('product after filter', res);

        this.openSnackBar('Item removed from the cart', 'Ok');
      },
      (err) => [this.openSnackBar(err.error.message, 'Ok')]
    );
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
