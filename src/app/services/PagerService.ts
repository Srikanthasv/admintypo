//import * as _ from 'underscore';

export class PagerService {
  /*getPager(totalItems: number, currentPage: number, pageSize: number)
  {    
    let totalPages: number = Math.ceil(totalItems / pageSize);
    let startPage: number, endPage: number;
    if (totalPages <= 10) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }
    let startIndex: number = (currentPage - 1) * pageSize;
    let endIndex: number = Math.min(Number(startIndex) + Number(pageSize) - 1, Number(totalItems) - 1);
    if (startIndex > totalItems)
    {      
      currentPage = Math.floor(currentPage / pageSize);
      if (currentPage === 0) {
        currentPage = 1;
        if (startPage === endPage) {
          currentPage = 1;
          startPage = 1;
          endPage = 1;
        }
        startIndex = 0;
        endIndex = Math.min(Number(startIndex) + Number(pageSize) - 1, Number(totalItems) - 1);
      } else {
        startIndex = (currentPage - 1) * pageSize;
      }      
    }
    let pages = _.range(startPage, endPage + 1);
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
  }*/
}
