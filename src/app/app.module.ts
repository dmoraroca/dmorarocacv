// import * as $ from 'jquery';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {  RouterModule } from '@angular/router';



import { FullComponent } from './layouts/full/full.component';

import { NavigationComponent } from './shared/header-navigation/navigation.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

  import { Approutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './shared/spinner.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CVRoutingModule } from './cv/cv-routing.module';

import { Globals } from './globals'



const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 2,
  wheelPropagation: true,
};



@NgModule({
  declarations: [
    AppComponent,    
    SpinnerComponent,
    FullComponent,
    NavigationComponent,
    BreadcrumbComponent,  	
    SidebarComponent
  ],
  imports: [
    CVRoutingModule,    
    BrowserModule,
    BrowserAnimationsModule,   
    FormsModule,
    HttpModule,
    RouterModule.forRoot(Approutes, { useHash: false }),
    NgbModule.forRoot(),
    PerfectScrollbarModule
  ],
  providers: [
    Globals,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
    }
  ],
  bootstrap: [        
    AppComponent    
  ]

})
export class AppModule { 

}
