import { Component, OnInit, OnDestroy, Input, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import {PartnersService} from '../../../services/partners.service';

@Component({
  selector: 'graph-options-widget',
  templateUrl: './graph-options-widget.component.html',
  styleUrls: ['./graph-options-widget.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class GraphOptionsWidgetComponent implements OnInit  {
    Fee = [];
    data: any = "";
    errorMsg: string = "";
    chartOptions;
    chartData = [{
        "key": "",
        "values": [
            [10, 0],
            [20, 8],
            [80, 20],
            [100, 22],
            [250, 30],
            [300, 36],
            [350, 40]
        ]
    }]
    _bgColor: string = 'bg-success';
    _pointColor: string = 'success';
    timeout;

    constructor(private router: Router,
        private http: Http,
        private PartnersService: PartnersService, private changeDetector: ChangeDetectorRef) { }

    ngOnInit() {
        this.getWeeklyInfluencerPro();
    }

    getWeeklyInfluencerPro() {
        this.PartnersService.getWeeklyInfluencerPro()
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
