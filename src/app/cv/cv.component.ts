import {  OnInit, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	
	selector: 'app-cv',
	templateUrl: './cv.component.html',
	styleUrls: ['./cv.component.css']
})
export class CVComponent implements OnInit {
	//@ViewChild('view') vista:ViewsComponent;
	public clase_activa_educacio: boolean = true;
	public clase_activa_experiencia: boolean = true;
	public clase_activa_taula_coneixements: boolean = true;
	

	public Panel_ClickEvent(objecte: string): void {
		switch (objecte) {
			case "educacio": 
				
					this.clase_activa_educacio = !this.clase_activa_educacio;

				break;
			case "experiencia":

				this.clase_activa_experiencia = !this.clase_activa_experiencia;

				break;
			case "taula_coneixements":
				
				this.clase_activa_taula_coneixements = !this.clase_activa_taula_coneixements;
				
				break;
		}		
	}
		
	constructor(public router: Router) { 
		if (this.router.url === '/cv') {  
            this.router.navigate(['/']);
        }
	}
	
	ngOnInit() {
		
  	}
	

	ngAfterViewInit(){}
}