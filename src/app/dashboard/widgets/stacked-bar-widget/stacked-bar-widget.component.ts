import { Component, OnInit, OnDestroy, Input, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import {PartnersService} from '../../../services/partners.service';
declare var pg: any;

@Component({
  selector: 'stacked-bar-widget',
  templateUrl: './stacked-bar-widget.component.html',
  styleUrls: ['./stacked-bar-widget.component.scss'],
  encapsulation:ViewEncapsulation.None
})

export class StackedBarWidgetComponent implements OnInit {
    Fee = [];
    data: any = "";
    errorMsg: string = "";

    constructor(private router: Router,
        private http: Http,
        private PartnersService: PartnersService, private changeDetector: ChangeDetectorRef) {}

    ngOnInit() {
        this.getTodayInfluencerPro();
    }

    getTodayInfluencerPro() {
        this.PartnersService.getTodayInfluencerPro()
            .subscribe(res => {
                this.data = res;
                this.Fee = this.data.data;
                console.log("fee:" + JSON.stringify(this.Fee));
            },
            err => {
                this.errorMsg = "Total Fee is zero.";
                console.log("error:" + err);
            });
    }  
}
