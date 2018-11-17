import { Injectable, Inject } from '@angular/core';
import { Headers, Http, Response, URLSearchParams, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';//new line
import 'rxjs/add/observable/throw';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule, JsonpModule } from '@angular/http';
// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { Appsettings } from './AppSettings';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public fname: string;
  public lname: string;

  constructor(private http: Http, private router: Router) 
  {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.fname = currentUser && currentUser.fname;
    this.lname = currentUser && currentUser.lname;
  }


  login(body) {
    var headers = new Headers();
    //headers.append('Authorization','Basic QWRtaW5fdGVqb246U29mdDE2ODU1');
    headers.append('Content-Type', 'Content-Type : application/json');
    return this.http.post(Appsettings.IDENTITYENDPOINT + "login", body,{ headers: headers })
      .map((response: Response) => {
        let token = response.json() && response.json().first_name && response.json().last_name;
        if (token) {
          localStorage.setItem('currentUser', JSON.stringify({ firstName: this.fname, lastName: this.lname }));
          return true;
        } else {
          return false;
        }
      });
  }
  logout(): void {
    this.lname = null;
    this.fname = null;
    localStorage.removeItem('currentUser');
  }
}
