import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  signupForm!:FormGroup;
  loginForm!:FormGroup;
  constructor(public formBuilder:FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.signupForm=this.formBuilder.group({
      userName:[''],
      email:[''],
      password:['']
    })
    this.loginForm= this.formBuilder.group({
      email:[''],
      password:['']
    })
  }

  signUp(){
   this.http.post<any>("http://localhost:3000/signupUser",this.signupForm.value)
   .subscribe(res=>{
     alert("Succcessfully signup");
     console.log(this.signupForm.value);     
     this.signupForm.reset();
     this.router.navigate(['home']);
   },err=>{
     alert("Error")
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
        this.router.navigate(['home'])
      }else{
        alert("User don't exist,please signup")
      }
    },err=>{
      alert("Something Occur i thin k it is an error")
    })
  }
}


