import { Routes } from '@angular/router';
import { DqquestionsComponent } from "./dqquestions.component";

export const DqquestionsRouts: Routes = [
  {  path: '',
  children: [{
    path: '',
    component: DqquestionsComponent,
    data: {
      title: 'Qualifying Questions'
    }
  }]

  }
];
