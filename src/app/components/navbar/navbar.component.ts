import { Component, Input, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  implements OnInit {
@Input() deviceXs!:boolean
  user:any
  constructor(private _snackBar:MatSnackBar){}
 ngOnInit(): void {
  this.user=localStorage.getItem('user_token')
 console.log(this.user,'this is usser');
 
}
logout(){
  confirm("are you teally want to logout");
  localStorage.removeItem('user_token');
  localStorage.removeItem('user_id');
  this.openSnackBar("You are Logged Out",'Ok')
}
openSnackBar(message: string, action: string) {
  this._snackBar.open(message, action);
}
}
