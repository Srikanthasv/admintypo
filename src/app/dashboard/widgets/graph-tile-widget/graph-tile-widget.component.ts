import { Component, OnInit, OnDestroy, Input, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import {PartnersService} from '../../../services/partners.service';
declare let d3: any;
declare var pg: any;

@Component({
  selector: 'graph-tile-widget',
  templateUrl: './graph-tile-widget.component.html',
  styleUrls: ['./graph-tile-widget.component.scss'],
  encapsulation:ViewEncapsulation.None
})

export class GraphTileWidgetComponent implements OnInit, OnDestroy {
    Fee = [];
    data: any = "";
    errorMsg: string = "";
  
    constructor(private router: Router,
      private http: Http,
      private PartnersService: PartnersService, private changeDetector: ChangeDetectorRef) {
    
  }

  ngOnInit() {
      this.getTodayPartnerPro();
  }

  getTodayPartnerPro() {
      this.PartnersService.getTodayPartnerPro()
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

  ngOnDestroy() {
    //this.service.unsubscribe()
    //clearTimeout(this.timeout)
  }

}