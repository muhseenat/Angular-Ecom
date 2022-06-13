import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  signupForm!:FormGroup;
  loginForm!:FormGroup;
  constructor(public formBuilder:FormBuilder,private http:HttpClient,
    private router:Router,private _snackBar:MatSnackBar) { }

  ngOnInit(): void {

    this.signupForm=this.formBuilder.group({
      name:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      phone:['',Validators.required]
      
    })
    
    this.loginForm= this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  signUp(){
   this.http.post<any>("http://localhost:3000/api/users",this.signupForm.value)
   .subscribe(res=>{
    console.log(res,'this is response');
    console.log(res.token,'this is token');
 
    localStorage.setItem('user_token',res.token)
    localStorage.setItem('user_id',res._id)
     this.signupForm.reset();
     this.router.navigate(['home']).then(()=>{
      this.openSnackBar("Logged in succesfully", "Ok");
     });
   },err=>{
    console.log(err.message);
    console.log(err.error.message);
    
    this.openSnackBar(err?.error.message,"Error")
   })
  }

  // Login Service
  login(){
    this.http.get<any>('http://localhost:3000/api/users/login')
    .subscribe(res=>{
        this.router.navigate(['home']).then(()=>{
          this.openSnackBar("Logged in succesfully","Ok")
        })
    },err=>{
    this.openSnackBar(err?.error.message,"Error")
    })
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}


