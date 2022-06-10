import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { stringify } from 'querystring';
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
    this.http.get<any>('http://localhost:3000/signupUsers')
    .subscribe(res=>{
      let user=res.find(a:any=>{
        a.email===this.loginForm.value.email
      })
    })
  }
}


