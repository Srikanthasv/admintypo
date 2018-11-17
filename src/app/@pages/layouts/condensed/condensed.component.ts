import { Component, OnInit, OnDestroy, ViewChild, HostListener, AfterViewInit,Input,ViewEncapsulation } from '@angular/core';
import { RootLayout } from '../root/root.component';

@Component({
  selector: 'condensed-layout',
  templateUrl: './condensed.component.html',
  styleUrls: ['./condensed.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CondensedComponent extends RootLayout implements OnInit {
    menuLinks = [
      {
        label:"Dashboard",
        details:"",
        routerLink:"dashboard",
        iconType:"pg",
        iconName:"home",
        //thumbNailClass:"bg-homeactive"
      },
  //    {
  //      label:"Coverage",
  //      iconType:"pg",
  //      iconName:"layouts2",
  //      toggle:"close",
  //      submenu:[
  //        {
  //          label:"Areas",
  //          routerLink:"layouts/areas",
  //          iconType:"letter",
  //          iconName:"as",
  //        },
  //        {
  //          label:"Airports",
  //          routerLink:"layouts/airports",
  //          iconType:"letter",
  //          iconName:"ap",
  //        }
  //      ]
  //  },
  //  {
  //    label:"Fleets",
  //    iconType:"pg",
  //    iconName:"form",
  //    toggle:"close",
  //    submenu:[
  //      {
  //        label:"List",
  //        routerLink:"forms/list",
  //        iconType:"letter",
  //        iconName:"ls",
  //      },
  //      {
  //        label:"Vehicle Types",
  //        routerLink:"forms/vehicletypes",
  //        iconType:"letter",
  //        iconName:"vt",
  //      },
  //      {
  //        label:"Vehicle Colors",
  //        routerLink:"forms/vehiclecolors",
  //        iconType:"letter",
  //        iconName:"vc",
  //      }
  //    ]
  //},
  {
    label:"Riders",
    iconType:"pg",
    iconName:"form",
    toggle:"close",
    submenu:[
      {
        label:"List",
        routerLink:"riders",
        iconType:"letter",
        iconName:"",
        }
      //  ,
      //{
      //  label:"Credits",
      //  routerLink:"layouts/ridercredits",
      //  iconType:"letter",
      //  iconName:"rc",
      //},
      //{
      //  label:"Promo",
      //  routerLink:"layouts/promo",
      //  iconType:"letter",
      //  iconName:"pr",
      //}, {
      //  label:"Rewards",
      //  routerLink:"layouts/rewards",
      //  iconType:"letter",
      //  iconName:"rw",
      //},
      //{
      //  label:"Earning",
      //  routerLink:"layouts/earnings",
      //  iconType:"letter",
      //  iconName:"er",
      //},
      //{
      //  label:"Payments",
      //  routerLink:"layouts/payments",
      //  iconType:"letter",
      //  iconName:"py",
      //}
    ]
},
{
  label:"Influencers",
  iconType:"pg",
  iconName:"tables",
  toggle:"close",
  submenu:[
    {
      label:"List",
      routerLink:"influencers",
      iconType:"letter",
      iconName:"",
      }
    //  ,
    //{
    //  label:"Earning",
    //  routerLink:"layouts/infearnings",
    //  iconType:"letter",
    //  iconName:"ie",
    //},
    //{
    //  label:"Payments",
    //  routerLink:"layouts/infpayments",
    //  iconType:"letter",
    //  iconName:"ip",
    //}
  ]
},
{
  label:"Partners",
  iconType:"pg",
  iconName:"grid",
  toggle:"close",
  submenu:[
    {
      label:"List",
      routerLink:"partners/partnerlist",
      iconType:"letter",
      iconName:"",
      }
    //  ,
    //{
    //  label:"Documents",
    //  routerLink:"layouts/docs",
    //  iconType:"letter",
    //  iconName:"ds",
    //},
    //{
    //  label:"Earning",
    //  routerLink:"layouts/partearnings",
    //  iconType:"letter",
    //  iconName:"er",
    //},
    //{
    //  label:"Payments",
    //  routerLink:"layouts/partpayments",
    //  iconType:"letter",
    //  iconName:"py",
    //}
  ]
},
//{
//  label:"Trips",
//  iconType:"pg",
//  iconName:"social",
//  toggle:"close",
//  submenu:[
//    {
//      label:"List",
//      routerLink:"layouts/triplist",
//      iconType:"letter",
//      iconName:"tl",
//    }
//  ]
//},
//{
//  label:"Reports",
//  routerLink:"reports",
//  iconType:"pg",
//  iconName:"grid"
//},
//{
//  label:"Resources",
//  routerLink:"resouorces",
//  iconType:"pg",
//  iconName:"ui"
//},
{
  label:"Settings",
  iconType:"pg",
  iconName:"bag",
  toggle:"close",
  submenu: [
      {
          label: "Qualifying Questions",
          routerLink: "dqquestions",
          iconType: "letter",
          iconName: "",
      }
    //{
    //  label:"Admin",
    //  routerLink:"tables/admin",
    //  iconType:"letter",
    //  iconName:"ad",
    //},
    //{
    //  label:"Settings",
    //  routerLink:"layouts/settings",
    //  iconType:"letter",
    //  iconName:"st",
    //},
    //{
    //  label:"Utilities",
    //  routerLink:"layouts/utilities",
    //  iconType:"letter",
    //  iconName:"ut",
    //}
  ]
},
    
  ];

    ngOnInit() {
    }
      
}
