import { Component, OnInit, ViewChild, ViewEncapsulation, ChangeDetectorRef, AfterContentInit, AfterViewInit, Renderer, ElementRef  } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import {PartnersService} from '../../../services/partners.service';

@Component({
  selector: 'table-basic-widget',
  templateUrl: './table-basic-widget.component.html',
  styleUrls: ['./table-basic-widget.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class TableBasicWidgetComponent implements OnInit {
    rows = [];
    Fee = [];
    data: any = "";
    PartnerList: any = "";
    errorMsg: string = "";

    constructor(private router: Router,
        private http: Http,
        private PartnersService: PartnersService, private changeDetector: ChangeDetectorRef) { }

    ngOnInit() {
        this.getData();
        this.getTodaysFee();
  }

  getData() {
      this.PartnersService.getPartnersList()
          .subscribe(res => {
              this.PartnerList = res;
              this.rows = this.PartnerList.data;              
          },
          err => {
              this.errorMsg = "Partners not found.";
              console.log("error:" + err);
          }
          );
    }
      getTodaysFee() {
          this.PartnersService.getPartnersTodayFee()
              .subscribe(res => {
                  this.data = res;
                  console.log("todays " + JSON.stringify(this.data.data));
                  this.Fee = this.data.data;
              },
              err => {
                  this.errorMsg = "Total Fee is zero.";
                  console.log("error:" + err);
              }
              );
      }
}
