import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import {PartnersService} from '../../../services/partners.service';

declare var pg: any;

@Component({
  selector: 'progress-tile-flat-widget',
  templateUrl: './progress-tile-flat-widget.component.html',
  styleUrls: ['./progress-tile-flat-widget.component.scss']
})
export class ProgressTileFlatWidgetComponent implements OnInit {
  
    _bgColor: string = 'bg-primary'
    Fee = [];
    data: any = "";
    errorMsg: string = "";
    public MonthlyFee: string = "";
   
  constructor(private router: Router,
      private http: Http,
      private PartnersService: PartnersService) { }

  ngOnInit() {
      this.getMonthlyFee();
  }

  getMonthlyFee() {
      this.PartnersService.getMonthlyFee()
          .subscribe(res => {
              this.data = res;
              this.Fee = this.data.data;
          },
          err => {
              this.errorMsg = "Total Fee is zero.";
              console.log("error:" + err);
          }
          );
  }

  @Input()
  set BgColor(value:string) {
    this._bgColor = value
  }
}
