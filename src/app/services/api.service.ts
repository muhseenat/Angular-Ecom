import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getProduct(){
    return this.http.get<any>(`${env.BASE_URL}/products`)
    .pipe(map((res:any)=>{
      console.log(res,'this is all products');
      
      return res;
    }))
  }
}
