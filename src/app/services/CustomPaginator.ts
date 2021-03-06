import {MatPaginatorIntl} from '@angular/material';
import {  Input } from '@angular/core';

export class CustomPaginator extends MatPaginatorIntl {
  itemsPerPageLabel = 'Rows Per Page';
  nextPageLabel     = 'Next';
  previousPageLabel = 'Previous';

@Input() length: number;

constructor(){
  super();
}
  getRangeLabel = function (page, pageSize, length) {
    if (length === 0 || pageSize === 0) {
      return '0 of ' + length;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    // If the start index exceeds the list length, do not try and fix the end index to the end.
    const endIndex = startIndex < length ?
      Math.min(startIndex + pageSize, length) :
      startIndex + pageSize;
    return startIndex + 1 + ' - ' + endIndex + ' of ' + length;
  };

}
