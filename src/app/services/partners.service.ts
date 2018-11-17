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

export class PartnersService {

    constructor(private http: Http, private router: Router)
    { var currentUser = JSON.parse(localStorage.getItem('currentUser')); }

    getPartnersList() {
        var headers = new Headers();
        headers.append("Content-Type", "application/json");
        let options = new RequestOptions({ headers: headers });
        return this.http.get(Appsettings.IDENTITYENDPOINT + "listOfPartners", options)
            .map((response: Response) => {
                let Data = response.json() && response.json().data;
                if (Data) {
                    return response.json();
                } else {
                    return "";
                }
            });
    }

    getPartnersDetailList() {
        var headers = new Headers();
        headers.append("Content-Type", "application/json");
        let options = new RequestOptions({ headers: headers });
        return this.http.get(Appsettings.IDENTITYENDPOINT + "PartnerDetails", options)
            .map((response: Response) => {
                let Data = response.json() && response.json().DetailListOfPartners;
                if (Data) {
                    return response.json();
                } else {
                    return "";
                }
            });
    }
    getMonthlyFee() {
        var headers = new Headers();
        headers.append("Content-Type", "application/json");
        let options = new RequestOptions({ headers: headers });
        return this.http.get(Appsettings.IDENTITYENDPOINT + "monthlyPartners", options)
            .map((response: Response) => {
                let Data = response.json() && response.json().data;
                if (Data) {
                    return response.json();
                } else {
                    return "";
                }
            });
    }
    getWeeklyFee() {
        var headers = new Headers();
        headers.append("Content-Type", "application/json");
        let options = new RequestOptions({ headers: headers });
        return this.http.get(Appsettings.IDENTITYENDPOINT + "weeklyPartners", options)
            .map((response: Response) => {
                let Data = response.json() && response.json().data;
                if (Data) {
                    return response.json();
                } else {
                    return "";
                }
            });
    }
    getPartnersTodayFee() {
        return this.http.get(Appsettings.IDENTITYENDPOINT + "PartnersSignupFeeOfTheDay")
            .map((response: Response) => {
                let Data = response.json() && response.json().data;
                if (Data) {
                    return response.json();
                } else {
                    return "0";
                }
            });
    }
    getTodayPartnerPro() {
        var headers = new Headers();
        headers.append("Content-Type", "application/json");
        let options = new RequestOptions({ headers: headers });
        return this.http.get(Appsettings.IDENTITYENDPOINT + "todaysPartnersPro", options)
            .map((response: Response) => {
                let Data = response.json() && response.json().data;
                if (Data) {
                    return response.json();
                } else {
                    return "0";
                }
            });
    }
    getWeeklyPartnerPro() {
        return this.http.get(Appsettings.IDENTITYENDPOINT + "weeklyPartnersPro")
            .map((response: Response) => {
                let Data = response.json() && response.json().data;
                if (Data) {
                    return response.json();
                } else {
                    return "0";
                }
            });
    }
    getMonthlyPartnerPro() {
        return this.http.get(Appsettings.IDENTITYENDPOINT + "monthlyPartnersPro")
            .map((response: Response) => {
                let Data = response.json() && response.json().data;
                if (Data) {
                    return response.json();
                } else {
                    return "0";
                }
            });
    }

    getTodayInfluencerPro() {
        return this.http.get(Appsettings.IDENTITYENDPOINT + "todaysPartnersrider_influencerPro")
            .map((response: Response) => {
                let Data = response.json() && response.json().data;
                if (Data) {
                    return response.json();
                } else {
                    return "0";
                }
            });
    }
    getWeeklyInfluencerPro() {
        return this.http.get(Appsettings.IDENTITYENDPOINT + "weeklyPartnersrider_influencerPro")
            .map((response: Response) => {
                let Data = response.json() && response.json().data;
                if (Data) {
                    return response.json();
                } else {
                    return "0";
                }
            });
    }
    getMonthlyInfluencerPro() {
        return this.http.get(Appsettings.IDENTITYENDPOINT + "monthlyPartnersrider_influencerPro")
            .map((response: Response) => {
                let Data = response.json() && response.json().data;
                if (Data) {
                    return response.json();
                } else {
                    return "0";
                }
            });
    }
}
