import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FullComponent } from './layouts/full/full.component';

export const Approutes: Routes = [
{
    path: '',
    component: FullComponent,
    children: [
        { path: '', redirectTo: '/cv', pathMatch: 'full' },
        { path: 'cv', loadChildren: './cv/cv.module#CVModule' },
        { path: 'component', loadChildren: './component/component.module#ComponentsModule' },
    ]
},
{
    path: '**',
    redirectTo: '/cv' 
}];