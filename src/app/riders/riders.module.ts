import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RidersRouts } from './riders.routing';
import { CollapseModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap';
//Thirdparty
import {NgsRevealModule} from 'ng-scrollreveal';
import { IsotopeModule } from 'ngx-isotope';
import { SwiperModule, SWIPER_CONFIG, SwiperConfigInterface } from 'ngx-swiper-wrapper';

// Dependant of pg-slider
import { FormsModule } from '@angular/forms'; 
import { pgSliderModule } from '../@pages/components/slider/slider.module';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

import { ModalModule } from 'ngx-bootstrap';
//import { RidersComponent } from "./riders.component";
import { SharedModule } from '../@pages/components/shared.module';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(RidersRouts),
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    NgsRevealModule.forRoot(),
    IsotopeModule,
    SwiperModule,
    FormsModule,
    pgSliderModule,
    ModalModule.forRoot()
  ],
  providers:[ {
    provide: SWIPER_CONFIG,
    useValue: DEFAULT_SWIPER_CONFIG
  }],
  //declarations: [RidersComponent]
})
export class RidersModule { }
