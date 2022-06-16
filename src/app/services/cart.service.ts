import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { map, Observable ,Subject} from 'rxjs';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItems:any=[];
  public cartProducts= new Subject<any>();



  constructor(private http:HttpClient,
    private router:Router,
    private _snackBar: MatSnackBar,
    
    ) { } 

    //SNACKBAR
    openSnackBar(message: string, action: string) {
      this._snackBar.open(message, action);
    }

  getProducts(){
   return this.cartProducts.asObservable();
  }



   //GET CART ITEMS
   get_cart(){
    console.log('Get cart is calling.....');
    return this.http.get<any>(`${env.BASE_URL}/users/cart`)
    .pipe(map((res:any)=>{
      console.log('responce when add to cart',res);
      this.cartItems.push(...res?.cartItems);
      this.cartProducts.next(res?.cartItems)
      console.log(this.cartItems,'this is cart Itrms afre sdd');
      console.log(this.cartProducts,'this is cart Itrms observable');
      return res;
    }))
  }

  //ADD TO CART OBSERVABLE
  // addtoCart(data:any){
  //   console.log('calling add to cart in cart service');
  //   return this.http.post<any>(`${env.BASE_URL}/users/cart`,data)
  //   .pipe(res=>{
  //     let product={
  //       product:{
  //         _id:data.productId

  //       }
  //     }
  //     console.log('this product',product);
      
  //     this.cartItems.push(product)
  //     console.log(this.cartItems,'this is after add and push   2');

  //     this.cartProducts.next(this.cartItems)
  //     console.log(this.cartProducts,'this is cart Itrms observable  2');
  //     this.getTotalPrice()
  //     console.log('this is cart ittem observable',this.cartItems);
  //     console.log(this.cartItems,'this is cart items');
  //     return res
  //   })  
  // }

//ADD TO CART
addToCart(id:any){
  let user = localStorage.getItem('user_token');
  if (user) {
    let data = { productId: id, quantity: 1 };
    return this.http.post<any>(`${env.BASE_URL}/users/cart`,data)
    .subscribe(
      (res) => {
        let product={
          product:{
            _id:data.productId
  
          }
        }
        console.log('this product',product);
        
        this.cartItems.push(product)
        console.log('this is cart items count look for ir',res);
        this.openSnackBar('Item Added to Cart', 'Ok');
        this.cartProducts.next(this.cartItems)
        console.log(this.cartProducts,'this is cart Itrms observable  2');
        this.getTotalPrice()
      },
      (err) => {
        this.openSnackBar(err.error.message, 'Ok');
      }
    );
  } else {
   return this.router.navigate(['login']);
  }

}







//FUNCTION FOR GETTING GRAND TOTAL
getTotalPrice(){
  console.log('get add product called');
  let grandTotal=0;
  this.cartItems.map((a:any)=>{
  grandTotal+=(a?.price*a?.quantity)
  })
  console.log(grandTotal,'this is grand total');
  return grandTotal;
  }

  removeCart(productId:any){
  return this.http.delete<any>(`${env.BASE_URL}/users/cart?productId=${productId}`)
  .pipe(res=>{
    console.log('this is items when removing started',res,productId);
    // this.cartItems.map((a:any,index:any)=>{
    //       if(productId===a?.product._id){
    //         this.cartItems.splice(index,1)
          
    //       }
    //     })
    this.cartItems= this.cartItems.filter((a:any)=>a.product._id!==productId)
   
  console.log('cart items after removal',this.cartItems);
  
    return res;
  })


}
}
