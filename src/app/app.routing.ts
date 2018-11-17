import { Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {PartnerlistComponent} from './partners/partnerlist/partnerlist.component';
import {RidersComponent} from './riders/riders.component';
import {InfluencersComponent} from './influencers/influencers.component';
import {DqquestionsComponent} from './dqquestions/dqquestions.component';
//Layouts
import { 
  CondensedComponent,
  BlankComponent,
  CorporateLayout,
  SimplyWhiteLayout,
  ExecutiveLayout,
  CasualLayout ,
  BlankCasualComponent,
  BlankCorporateComponent,
  BlankSimplywhiteComponent
} from './@pages/layouts';

//Sample Pages
import { CondensedDashboardComponent} from './dashboard/condensed/dashboard.component';
import { SimplyWhiteDashboardComponent} from './dashboard/simplywhite/dashboard.component';
import { CasualDashboardComponent } from './dashboard/casual/dashboard.component';
import { CorporateDashboardComponent } from './dashboard/corporate/dashboard.component';
import { ExecutiveDashboardComponent } from './dashboard/executive/dashboard.component';
import { CardsComponentPage} from './cards/cards.component';
import { ViewsPageComponent} from './views/views.component';
import { ChartsComponent } from './charts/charts.component';
import { SocialComponent } from './social/social.component';

export const AppRoutes: Routes = 
[
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login',pathMatch: 'full' },
  {
      path: 'condensed',
      component: CondensedComponent,
      children: [{
          path: 'dashboard',
          component: CondensedDashboardComponent
        },
        {
            path: 'partners/partnerlist',
            component: PartnerlistComponent
          },
          {
              path: 'riders',
              component: RidersComponent
          },
          {
              path: 'influencers',
              component: InfluencersComponent
          },
          {
              path: 'dqquestions',
              component: DqquestionsComponent
          }
      ],
  },
];
