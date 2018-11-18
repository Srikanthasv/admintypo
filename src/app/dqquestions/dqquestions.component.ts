import { Component, OnInit, ViewChild, ViewEncapsulation, ChangeDetectorRef, AfterContentInit, AfterViewInit, Renderer, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { DqquestionsService } from '../services/dqquestions.service';
import { AuthService } from "../auth.service";

@Component({
    selector: 'app-dqquestions',
    templateUrl: './dqquestions.component.html',
    styleUrls: ['./dqquestions.component.scss']
})
export class DqquestionsComponent implements OnInit {
    data: any[];
    public dqForm: FormGroup;
    public Qualify: any = "";
    public PLForm: FormGroup;
    errorMsg: string = "";
    basic_table_data;
    expandTableData;
    displayFlag: boolean = true;
    loginForm: FormGroup;
    submitted = false;
    id:any=0;

    @ViewChild('myTable') table: any;

    rows: any[] = [];
    expanded: any = {};
    timeout: any;
    comment: any;
    yes: boolean = true;
    no: boolean = false;
    answer: any = 1;
    model = { options: '1' };
    radioItems = [1, 0];

    constructor(private fb: FormBuilder,
        private router: Router,
        private http: Http,
        private DqquestionsService: DqquestionsService, private changeDetector: ChangeDetectorRef) {
    }


    ngOnInit() {
        this.dqForm = this.fb.group({
            'comment': [null, Validators.compose([Validators.required])],
            'yes': [null],
            'no': [null]
        });

        this.getData();
    }

    getData() {
        this.DqquestionsService.getDqquest()
            .subscribe(res => {
                this.Qualify = res;
                this.rows = this.Qualify.data;
            }
            );
    }
    cleardq() {
        this.comment = "";
        this.model = { options: '1' };
    }


    toggleExpandRow(row) {
        console.log('Toggled Expand Row!', row);
        this.table.rowDetail.toggleExpandRow(row);
    }

    onDetailToggle(event) {
        console.log('Detail Toggled', event);
    }

    onSubmit(value) {
        this.submitted = true;

        // stop here if form is invalid
        //if (this.dqForm.invalid) {
        //    console.log("here");
        //    console.log(this.dqForm.errors);
        //    return;
        //}
        //else {
        //if (this.no.checked == "checked")
        //    this.answer = "0";

        if (this.dqForm.valid) {
            if(this.id ===0){
            let link = ['/dqquestions'];
            var body = JSON.stringify({ "question": this.comment, "answer": this.model.options });
            //console.log("body" + body);
            this.DqquestionsService.postDqquest(body)
                .subscribe(res => {
                },
                    err => {
                        err = err
                        console.log("Error" + err);
                        this.getData();
                        this.dqForm.reset();
                        this.model = { options: '1' };
                    }
                );
                }else{
                    //update
                    var body = JSON.stringify({ "id": this.id,"question": this.comment, "answer": this.model.options });
                  // alert(body)
                    this.DqquestionsService.updateDqquest(body)
                    .subscribe(res => {
                        this.getData();
                    },
                        err => {
                            err = err
                            console.log("Error" + err);
                            this.getData();
                            this.dqForm.reset();
                            this.model = { options: '1' };
                        }
                    );
                }

        }
        //}
    }
    deleteqn(id) {
        var body = JSON.stringify({ "status": 0, "id": id });

        this.DqquestionsService.deleteDqquest(body)
            .subscribe(res => {
                this.getData();
            },
                err => {
                    err = err
                    console.log("Error" + err);
                    this.getData();
                    this.dqForm.reset();
                    this.model = { options: '1' };
                }
            );
    }
    
    editqn(row) {
        this.comment = row.question;
        this.model = { options: row.answer+'' };
        this.id=row.id;
    }
}