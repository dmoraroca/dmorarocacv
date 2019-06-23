import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CVComponent } from './cv.component';
import { CapcaleraComponent } from './capcalera/capcalera.component';
import { ExperienciaLaboralComponent } from './experiencialaboral/experiencialaboral.component';
import { ConeixementsComponent } from './coneixements/coneixements.component';
import { EducacioComponent } from './educacio/educacio.component';
import { RegladaComponent } from './educacio/reglada/reglada.component';
import { NoRegladaComponent } from './educacio/noreglada/noreglada.component';
import { IdiomesComponent } from './educacio/idiomes/idiomes.component';
import { ClientComponent } from './experiencialaboral/client/client.component';
import { HttpClientModule } from '@angular/common/http'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


// Import the library

const routes: Routes = [{
  path: '',
  data: {
    title: 'Curriculum Vitae',
    urls: [{ title: 'Detall', url: '/cv' }, { title: 'CV' }]
  },
  component: CVComponent
}];

@NgModule({  
  declarations: [            
    CVComponent,
    ClientComponent,
    CapcaleraComponent,
    EducacioComponent,
    ExperienciaLaboralComponent,
    RegladaComponent,
    NoRegladaComponent, 
    IdiomesComponent,
    EducacioComponent,
    ConeixementsComponent    
  ],
  imports: [ 
    FormsModule,
    CommonModule, 
    HttpClientModule,    
    RouterModule.forChild(routes)
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class CVModule { }