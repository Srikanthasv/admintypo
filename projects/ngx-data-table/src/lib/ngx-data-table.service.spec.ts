import { TestBed, inject } from '@angular/core/testing';

import { NgxDataTableService } from './ngx-data-table.service';

describe('NgxDataTableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxDataTableService]
    });
  });

  it('should be created', inject([NgxDataTableService], (service: NgxDataTableService) => {
    expect(service).toBeTruthy();
  }));
});
