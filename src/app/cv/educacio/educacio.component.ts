import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educacio',
  templateUrl: './educacio.component.html',
  styleUrls: ['./educacio.component.scss']
})
export class EducacioComponent implements OnInit {
  public clase_noreglada: boolean = true;
	public clase_reglada: boolean = true;
	public clase_idioma: boolean = true;

  public Panel_ClickEvent(objecte: string): void {
		switch (objecte) {
			case "reglada":

				this.clase_reglada = !this.clase_reglada;

				break;
			case "noreglada":
  
				this.clase_noreglada = !this.clase_noreglada;

				break;
			case "idiomes":

				this.clase_idioma = !this.clase_idioma

				break;
		}		
	}

  constructor() { }

  ngOnInit() {
  }

}
