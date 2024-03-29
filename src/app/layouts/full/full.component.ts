import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar'; 

@Component({
    selector: 'full-layout',
    templateUrl: './full.component.html',
    styleUrls: ['./full.component.scss']
})
export class FullComponent implements OnInit {

    color = 'defaultdark';
    showSettings = true;
    showMinisidebar = false; 
    showDarktheme = false;

	public config: PerfectScrollbarConfigInterface = {};

    constructor(public router: Router) { 
        
    }

    ngOnInit() {
       
    }

}
