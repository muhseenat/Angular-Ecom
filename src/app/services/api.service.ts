import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

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
  register(data:any){
   return  this.http.post<any>(`${env.BASE_URL}/users`,data)
   .pipe(map((res:any)=>{
    console.log(res,'signup response');
    return res;
   }))
  }


  //LOGIN SERVICE
  login(data:any){
    return this.http.post<any>(`${env.BASE_URL}/users/login`,data)
    .pipe(map((res:any)=>{
      console.log(res,'login responxsmfmkffkkgk');
      return res;
    }))
  }

  //ADD TO WISHLIST SERVICE
  add_to_wishlist(id:any){
    return this.http.put<any>(`${env.BASE_URL}/users/wishlists`,{id})
  }

  //GET WISHLIST ITEMS
  get_wishlist(){
    return this.http.get<any>(`${env.BASE_URL}/users/wishlists`)
  }

  //REMOVE FROM WISHLIST
  remove_from_wishlist(id:any){
    
    return this.http.delete<any>(`${env.BASE_URL}/users/wishlists?id=${id}`)
  }

  //ADD TO CART 

  add_to_cart(data:any){
    return this.http.post<any>(`${env.BASE_URL}/users/cart`,data)
  }

  //GET CART ITEMS
  get_cart(){
    return this.http.get<any>(`${env.BASE_URL}/users/cart`)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
// .pipe(map((res:any)=>{
//   console.log(res,'signup response');
//   // return res;