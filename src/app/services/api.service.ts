import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { map, Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  cartItems!: Observable<Array<any>>;
  constructor(
    private http: HttpClient,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  //SNACKBAR
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  //GET ALL PRODUCT SERVICE
  getProduct() {
    return this.http.get<any>(`${env.BASE_URL}/products`).pipe(
      map((res: any) => {
        console.log(res, 'this is all products');
        return res;
      })
    );
  }

  //GET SINGLE PRODUCT SERVICE
  getSingleProduct(id: any) {
    return this.http.get<any>(`${env.BASE_URL}/products/${id}`);
  }

  //SIGNUP SERVICE
  signUP(data: any) {
    return this.http.post<any>(`${env.BASE_URL}/users`, data).subscribe(
      (res: any) => {
        console.log(res, 'signup response');
        localStorage.setItem('user_token', res.token);
        localStorage.setItem('user_id', res._id);

        this.router.navigate(['home']).then(() => {
          this.openSnackBar('Logged in succesfully', 'Ok');
        });
      },
      (err: any) => {
        this.openSnackBar(err?.error.message, 'Error');
      }
    );
  }

  //LOGIN SERVICE
  login(data: any) {
    return this.http.post<any>(`${env.BASE_URL}/users/login`, data).subscribe(
      (res) => {
        localStorage.setItem('user_token', res.token);
        localStorage.setItem('user_id', res._id);
        this.router.navigate(['home']).then(() => {
          this.openSnackBar('Logged in succesfully', 'Ok');
        });
      },
      (err) => {
        this.openSnackBar(err?.error.message, 'Error');
      }
    );
  }
}
