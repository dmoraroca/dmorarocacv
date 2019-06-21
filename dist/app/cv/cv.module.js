var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CVComponent } from './cv.component';
import { CapcaleraComponent } from './capcalera/capcalera.component';
import { ExperienciaLaboralComponent } from './experiencialaboral/experiencialaboral.component';
import { ConeixementsComponent } from './coneixements/coneixements.component';
import { EducacioComponent } from './educacio/educacio.component';
import { RegladaComponent } from './educacio/reglada/reglada.component';
import { NoRegladaComponent } from './educacio/noreglada/noreglada.component';
import { IdiomesComponent } from './educacio/idiomes/idiomes.component';
import { ClientComponent } from './experiencialaboral/client/client.component';
import { HttpClientModule } from '@angular/common/http';
import { TagsInputModule } from 'ngx-tags-input';
// Import the library
var routes = [{
        path: '',
        data: {
            title: 'Curriculum Vitae',
            urls: [{ title: 'Detall', url: '/cv' }, { title: 'CV' }]
        },
        component: CVComponent
    }];
var CVModule = /** @class */ (function () {
    function CVModule() {
    }
    CVModule = __decorate([
        NgModule({
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
                RouterModule.forChild(routes),
                TagsInputModule
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
    ], CVModule);
    return CVModule;
}());
export { CVModule };
//# sourceMappingURL=cv.module.js.map