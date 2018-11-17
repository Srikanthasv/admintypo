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

@Injectable({providedIn: 'root'})
export class DqquestionsService
{

    constructor(private http: Http, private router: Router)
    { var currentUser = JSON.parse(localStorage.getItem('currentUser')); }



    getDqquest() {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({ headers: headers });
    
    return this.http.get("http://34.220.23.209/api/getDriverQuestions", options)
    .map((response: Response) => {
        let Data = response.json() && response.json().data;
        if (Data) {
            return response.json();
        } else {
            return "";
        }
    });

    }        

    postDqquest(body) {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({ headers: headers });
    
    return this.http.post("http://34.220.23.209/api/setDriverQuestions",body, options)
    .map((response: Response) => {
        let Data = response.json() && response.json().data;
        if (Data) {
            return response.json();
        } else {
            return "";
        }
    });

    }
    

    updateDqquest(body) {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({ headers: headers });
                
    return this.http.post("http://34.220.23.209/api/updateDriverQuestion", body,options)
        .map((response: Response) => {
            let Data = response.json() && response.json().data;
            if (Data) {
                return response.json();
            } else {
                return "";
            }
        });

    }

    deleteDqquest(body) {
    var headers = new Headers();
            headers.append("Content-Type", "application/json");
            let options = new RequestOptions({ headers: headers });
                            
            return this.http.put("http://34.220.23.209/api/DeleteDriverQuestions",body, options)
                .map((response: Response) => {
                    let Data = response.json() && response.json().data;
                    if (Data) {
                        return response.json();
                    } else {
                        return "";
                    }
                });
            }
                            
}