import { Routes } from '@angular/router';
import { PartnerlistComponent } from "./partnerlist/partnerlist.component";

export const PartnersRouts: Routes = [
  {  path: '',
  children: [{
    path: '',
    component: PartnerlistComponent,
    data: {
      title: 'List'
    }
  }]

  }
];
