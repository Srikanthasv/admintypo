import { Injectable,Output,EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthenticationServiceService {

    @Output() getLoggedIn: EventEmitter<any> = new EventEmitter();

 constructor() {
  var obj1 = JSON.parse(localStorage.getItem('currentUser'));
  
 	if(obj1 != 'undefined' && obj1!= null){
 		this.getLoggedIn.emit(true);
   }
   this.getLoggedIn.emit(false);
  } 
}
