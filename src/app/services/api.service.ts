import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { map, Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  cartItems!:Observable<Array<any>>;
  constructor(private http:HttpClient,
    private _snackBar: MatSnackBar,
    private router:Router
    ) { }

//SNACKBAR 
openSnackBar(message: string, action: string) {
  this._snackBar.open(message, action);
}



  //GET ALL PRODUCT SERVICE
  getProduct(){
    return this.http.get<any>(`${env.BASE_URL}/products`)
    .pipe(map((res:any)=>{
      console.log(res,'this is all products');
      return res;
    }))
  }

  //GET SINGLE PRODUCT SERVICE
  getSingleProduct(id:any){
   return this.http.get<any>(`${env.BASE_URL}/products/${id}`)
  }

  //SIGNUP SERVICE
  signUP(data:any){
   return  this.http.post<any>(`${env.BASE_URL}/users`,data)
   .subscribe((res:any)=>{
    console.log(res,'signup response');
    localStorage.setItem('user_token', res.token);
    localStorage.setItem('user_id', res._id);
  
    this.router.navigate(['home']).then(() => {
     this.openSnackBar('Logged in succesfully', 'Ok');
    });
  },
  (err:any) => {
    this.openSnackBar(err?.error.message, 'Error')
  })}

  //LOGIN SERVICE
  login(data:any){
    return this.http.post<any>(`${env.BASE_URL}/users/login`,data)
    .subscribe(
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

  //ADD TO WISHLIST SERVICE
  add_to_wishlist(id:any){
    let user = localStorage.getItem('user_token');
    if (user) {
    return this.http.put<any>(`${env.BASE_URL}/users/wishlists`,{id})
    .subscribe(
      (res) => {
        // this.cartApi.addtoCart(id).subscribe()
        this.openSnackBar('Item Added to Favorites', 'Ok');
      },
      (err) => {
        this.openSnackBar(err?.error.message, 'Ok');
      }
    );
  } else {
    this.openSnackBar('Please create your account', 'Ok');
   return this.router.navigate(['login']);
  }
  }

  // this.get_wishlist();
  //GET WISHLIST ITEMS
  get_wishlist(){
    return this.http.get<any>(`${env.BASE_URL}/users/wishlists`)
    // .pipe(map((res)=>{

    // }))
  }

  //REMOVE FROM WISHLIST
  remove_from_wishlist(id:any){
    return this.http.delete<any>(`${env.BASE_URL}/users/wishlists?id=${id}`)
    .subscribe(
      (res) => {
        // this.product=this.product.filter((i:any)=>i._id!==id)
        this.openSnackBar('Item Removed from wishlist', 'Ok');
      },
      (err) => {
        this.openSnackBar(err.error.message, 'Error');
      }
    );
  }

  //ADD TO CART 

  add_to_cart(data:any){
    return this.http.post<any>(`${env.BASE_URL}/users/cart`,data)
    .pipe(res=>{
     
      let product={
        _id:data.productId
      }
      // this.cartItems.push(product)
      console.log(this.cartItems,'this is cart items');
      return res
    })
  }

  //GET CART ITEMS
  get_cart(){
    return this.http.get<any>(`${env.BASE_URL}/users/cart`)
    .pipe(map((res:any)=>{
      this.cartItems=res?.cartItems;
      console.log('responce when add to cart',res);
      console.log(this.cartItems,'this is cart Itrms afre sdd');
      
      return res;
    }))
  }

  //REMOVE ITEM FORM CART
remove_from_cart(productId:string){
  return this.http.delete<any>(`${env.BASE_URL}/users/cart?productId=${productId}`)
  .pipe(res=>{
    // this.cartItems=this.cartItems.filter(a=>a.product._id!==productId)
    console.log(this.cartItems,'this is cartItems after remove');
    
    return res;
  })
}













}





