import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  signupForm!: FormGroup;
  loginForm!: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private _snackBar: MatSnackBar,
    private api: ApiService
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: ['', 
   [   Validators.required,
       Validators.minLength(3),
       Validators.maxLength(12)]
    ],
      email: ['', 
     [ Validators.required,
      Validators.email,]

    ],
      password: ['', [Validators.required,
          Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]
    ],
      phone: ['',[ Validators.required,
      Validators.pattern('(^\\d{10}$)')]
    ],
    });

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

    console.log('this is formm ',this.signupForm);
    
  }

  

  signUp() {
    this.api.register(this.signupForm.value).subscribe(
      (res) => {
    
        localStorage.setItem('user_token', res.token);
        localStorage.setItem('user_id', res._id);
        this.signupForm.reset();
        this.router.navigate(['home']).then(() => {
         this.openSnackBar('Logged in succesfully', 'Ok');
        });
      },
      (err) => {
        this.openSnackBar(err?.error.message, 'Error');
      }
    );
  }

  // Login Service
  login() {
    this.api.login(this.loginForm.value).subscribe(
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

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
