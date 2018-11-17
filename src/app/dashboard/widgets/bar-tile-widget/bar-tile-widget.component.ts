import { Component, OnInit, OnDestroy, Input, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import {PartnersService} from '../../../services/partners.service';
declare var pg: any;
declare var echarts: any;

@Component({
  selector: 'bar-tile-widget',
  templateUrl: './bar-tile-widget.component.html',
  styleUrls: ['./bar-tile-widget.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class BarTileWidgetComponent implements OnInit {
    Fee = [];
    data: any = "";
    errorMsg: string = "";

    chartOptions;
    chartData = [{
        "key": "",
        "values": [
            [100, 0],
            [150, 20],
            [200, 40],
            [250, 60],
            [300, 70],
            [350, 80],
            [400, 90]
        ]
    }]
    _bgColor: string = 'bg-success';
    _pointColor: string = 'success';
    timeout;

    constructor(private router: Router,
        private http: Http,
        private PartnersService: PartnersService, private changeDetector: ChangeDetectorRef) {
    }

    getWeeklyPartnerPro() {
        this.PartnersService.getWeeklyPartnerPro()
            .subscribe(res => {
                this.data = res;
                this.Fee = this.data.data;
            },
            err => {
                this.errorMsg = "Total Fee is zero.";
                console.log("error:" + err);
            });
    }

    ngOnInit() {
        this.getWeeklyPartnerPro();
    }
    ngOnDestroy() {
        clearTimeout(this.timeout)
    } 

    ngAfterViewInit() {
        this.timeout = setTimeout(() => {
            this.chartOptions = {
                chart: {
                    type: 'lineChart',
                    color: [
                        ['#fff']
                    ],
                    x: function (d) { return d[0]; },
                    y: function (d) { return d[1]; },
                    tooltip: {
                        enabled: false
                    },
                    useInteractiveGuideline: false,
                    clipEdge: false,
                    margin: {
                        top: 10,
                        right: -10,
                        bottom: -13,
                        left: -10
                    },
                    showLegend: false,
                    showXAxis: false,
                    showYAxis: false,
                    showLegen: false,
                    interactive: false
                }
            }
        });
    }
    @Input()
    set BgColor(value: string) {
        this._bgColor = value
        this._pointColor = value.replace('bg-', '')
    }
}