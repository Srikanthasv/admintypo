
import { Component, OnInit, ViewChild, ViewEncapsulation, ChangeDetectorRef, AfterContentInit, AfterViewInit, Renderer, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import {InfluencersService} from '../services/influencers.service';


@Component({
  selector: 'app-influencers',
  templateUrl: './influencers.component.html',
  styleUrls: ['./influencers.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InfluencersComponent implements OnInit {

    force: any;

    sortby: any;
      sortorder: any;
      pager: any = {};
      pagedItems: any[];
      selectpage: number = 1;
      rowspage: number = 10;
      errorMsg: string = "";
      data: any[];
      public InfluencerList: any = "";
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
          private InfluencersService: InfluencersService,  private changeDetector: ChangeDetectorRef) {
          this.sortby = "first_name";
          this.sortorder = "asc";
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
        this.InfluencersService.getInfluencersDetailList()
        .subscribe(res => {
                // console.log("REsponse:: " + res);
                this.InfluencerList = res;
                this.data = this.InfluencerList.data;
                this.rows = this.InfluencerList.data;            
            },
            err => {
                this.errorMsg = "Influencers not found.";
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
    }