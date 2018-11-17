import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators,FormsModule, ReactiveFormsModule } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { LoginService } from "../services/login.service";
import {AuthService} from "../auth.service";
import { CustomValidator } from '../services/custom-validator';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  public errorMsg = '';
 
   

  constructor(private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService,
    private http: Http,
    private formBuilder: FormBuilder,private authService:AuthService) {this.errorMsg = ''; }
    
  ngOnInit() {
    this.authService.getLoggedIn.emit(false);

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(6)]],
     
  });
  }
  get email() { return this.f.email.get('emaild'); }
  get password() { return this.f.password.get('password'); }
  get verify() { return this.f.verify.get('verify'); }
 
  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      console.log(this.loginForm.errors);
        return;
    }
    else{
      this.loading = true;
      //this.router.navigate(['/home']);
     let link = ['/condensed/dashboard'];
     var body = JSON.stringify({ "email": this.f.email.value, "password": this.f.password.value, "status":"active", "account_type":"admin" });
      this.loginService.login(body)
        .subscribe(res => {
          this.authService.getLoggedIn.emit(false);
          this.router.navigate(link);
        },
        err => {
          this.errorMsg = "Login Unsuccessful. Invalid Username or Password. Please try again.";
          console.log("error:" + err);
        },
        () => this.router.navigate(link)
        );   

        // (err) => {
        //   console.log('There was an error.');
        //   this.router.navigate(['/login']);
        //   return false
  
        // });
}
}
}