import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of,map } from 'rxjs';
import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';

@Injectable({
  providedIn: 'root'
})
export class CartResolver implements Resolve<boolean> {
  constructor(private api:CartService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
  return this.api.getProducts().pipe(map((res:any)=>{
    console.log('this is resolver res',res);
    
   return res;
  }))
  
  }
}
