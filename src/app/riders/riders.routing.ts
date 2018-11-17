import { Routes } from '@angular/router';
import { RidersComponent } from "./riders.component";

export const RidersRouts: Routes = [
  {  path: '',
  children: [{
    path: '',
    component: RidersComponent,
    data: {
      title: 'List'
    }
  }]

  }
];
