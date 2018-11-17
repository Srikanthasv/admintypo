import { Component, OnInit, OnDestroy, Input, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import {PartnersService} from '../../../services/partners.service';
declare var pg: any;


@Component({
  selector: 'graph-tile-flat-widget',
  templateUrl: './graph-tile-flat-widget.component.html',
  styleUrls: ['./graph-tile-flat-widget.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class GraphTileFlatWidgetComponent implements OnInit, OnDestroy {
    Fee = [];
    data: any = "";
    errorMsg: string = "";
    chartOptions;
    chartData = [{
        "key": "",
        "values": [
            [100, 0],
            [150, 8],
            [200, 20],
            [250, 22],
            [300, 30],
            [350, 26],
            [400, 10]
        ]
    }]
    _bgColor: string = 'bg-success';
    _pointColor: string = 'success';
    timeout;

  constructor(private router: Router,
      private http: Http,
      private PartnersService: PartnersService, private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
      this.getWeeklyFee();
  }

  getWeeklyFee() {
      this.PartnersService.getWeeklyFee()
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

  ngOnDestroy() {
    clearTimeout(this.timeout)
  }
  ngAfterViewInit() {
    this.timeout = setTimeout(()=>{
      this.chartOptions = {
        chart: {
          type: 'lineChart',
          color: [
            ['#fff']
          ],
          x: function (d) { return d[0]; },
          y: function (d) { return d[1]; },
          tooltip:{
            enabled:false
          },
          useInteractiveGuideline: false,
          clipEdge:false,
          margin: {
            top: 10,
            right: -10,
            bottom: -13,
            left: -10
          },
          showLegend: false,
          showXAxis:false,
          showYAxis:false,
          showLegen:false,
          interactive:false
        }
      }
    });
  }
  @Input()
  set BgColor(value:string){
    this._bgColor = value
    this._pointColor = value.replace('bg-','')
  }
}
