
import { Component, OnInit, ViewChild, ViewEncapsulation, ChangeDetectorRef, AfterContentInit, AfterViewInit, Renderer, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import {RidersService} from '../services/riders.service';

@Component({
  selector: 'app-riders',
  templateUrl: './riders.component.html',
  styleUrls: ['./riders.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RidersComponent implements OnInit {
    force: any;
  sortby: any;
    sortorder: any;
    pager: any = {};
    pagedItems: any[];
    selectpage: number = 1;
    rowspage: number = 10;
    errorMsg: string = "";
    data: any[];
    public RiderList: any = "";
    public PLForm: FormGroup;
    basic_table_data;
    expandTableData;
    displayFlag: boolean = true;

    @ViewChild('myTable') table: any;

    rows: any[] = [];
    expanded: any = {};
    timeout: any;

    constructor(private fb: FormBuilder,
        private router: Router,
        private http: Http,
        private RidersService: RidersService, private changeDetector: ChangeDetectorRef) {
      }

    onPage(event) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            console.log('paged!', event);
        }, 300);
    }

    ngOnInit() 
    {
        this.getData();
    }

      getData() {
          this.RidersService.getRidersDetailList()
          .subscribe(res => {
            //   console.log("REsponse:: " + res);
              this.RiderList = res;
              this.rows = this.RiderList.data;
             // this.rows = this.sortcodes();            
          },
          err => {
              this.errorMsg = "Riders not found.";
              console.log("error:" + err);
          }
          );
    }

      toggleExpandRow(row) {
          console.log('Toggled Expand Row!', row);
          this.table.rowDetail.toggleExpandRow(row);
      }

      onDetailToggle(event) {
          console.log('Detail Toggled', event);
      }
  //setPage(page: number) {
  //    this.selectpage = Number(page);

  //    if (page < 1 || page > this.pager.totalPages) {
  //        return;
  //    }
  //    this.pager = this.pagerService.getPager(this.RiderList.DetailListOfRiders.length, this.selectpage, this.rowspage);
  //    this.pagedItems = this.RiderList.DetailListOfRiders.slice(this.pager.startIndex, this.pager.endIndex + 1);
  //    this.selectpage = Number(this.pager.currentPage);
  //}
//   sortcodes() {
//       let orderType = this.sortorder
//       let currentField = this.sortby;
//       this.RiderList.data.sort((a: any, b: any) => {
//           if (orderType === 'asc') {
//               if (a[currentField] < b[currentField]) return -1;
//               if (a[currentField] > b[currentField]) return 1;
//               return 0;
//           } else {
//               if (a[currentField] < b[currentField]) return 1;
//               if (a[currentField] > b[currentField]) return -1;
//               return 0;
//           }

//       });
//       this.setPage(1);
//       return this.RiderList.data;
//   }
}
