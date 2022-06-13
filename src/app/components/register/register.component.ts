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
      userName:['',Validators.required],
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
   this.http.post<any>("http://localhost:3000/signupUser",this.signupForm.value)
   .subscribe(res=>{
     alert("Succcessfully signup");
     console.log(this.signupForm.value);     
     this.signupForm.reset();
     this.router.navigate(['home']).then(()=>{
      this.openSnackBar("Logged in succesfully", "Ok");
     });
   },err=>{
    this.openSnackBar("Something Went Wrong!!","Error")
   })
  }

  // Login Service
  login(){
    this.http.get<any>('http://localhost:3000/signupUser')
    .subscribe(res=>{
      let userExist=res.find((user:any)=>{
      return  user.email===this.loginForm.value.email && user.password===this.loginForm.value.password
      })
      if(userExist){
        this.router.navigate(['home']).then(()=>{
          this.openSnackBar("Logged in succesfully","Ok")
        })
      }else{
        this.openSnackBar("User doesn't exist,Please signup","Ok")
      }
    },err=>{
    this.openSnackBar("Something Went Wrong!!","Error")
    })
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}


