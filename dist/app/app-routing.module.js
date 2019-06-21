import { FullComponent } from './layouts/full/full.component';
export var Approutes = [
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
    }
];
//# sourceMappingURL=app-routing.module.js.map