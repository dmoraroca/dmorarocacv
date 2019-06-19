import { Component, OnInit } from '@angular/core';
import { DataService } from "../../data.service";

import { Capcalera } from "./capcalera.model";
import { Globals } from '../../globals';

@Component({
  selector: 'app-capcalera',
  templateUrl: './capcalera.component.html',
  styleUrls: ['./capcalera.component.css'],
  providers: [DataService]
})
export class CapcaleraComponent implements OnInit {
  public capcalera: Capcalera = new Capcalera();
  public literal: Capcalera = new Capcalera();
  public cultura: string;
  
  constructor(public data: DataService, globals: Globals)
  {
    this.cultura = globals.cultura;

    data.cargarDades(new Capcalera()).then(
    res => { // Success
      this.capcalera = Object.assign({}, res.data, this.capcalera);
    }
    );
  }

  ngOnInit() {
  }
}
