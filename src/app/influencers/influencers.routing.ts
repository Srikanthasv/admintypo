import { Routes } from '@angular/router';
import { InfluencersComponent } from "./influencers.component";

export const InfluencersRouts: Routes = [
  {  path: '',
  children: [{
    path: '',
    component: InfluencersComponent,
    data: {
      title: 'List'
    }
  }]

  }
];
