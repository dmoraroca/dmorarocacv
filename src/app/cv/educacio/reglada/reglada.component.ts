import { Component, OnInit } from '@angular/core';
import { Reglada } from "./reglada.model";
import { DataService } from "../../../data.service";
import { Globals } from '../../../globals';

@Component({
  selector: 'app-reglada',
  templateUrl: './reglada.component.html',
  styleUrls: ['./reglada.component.css'],
  providers: [DataService]

})
export class RegladaComponent implements OnInit {
  public reglada: Reglada[] = new Array<Reglada>();
  public console = console;

  constructor(public data: DataService, globals: Globals)
  {
      data.cargarDades(new Reglada()).then(
          res => { // Success
            var items = JSON.parse(JSON.stringify(res));            

            for (var i = 0; i < items.length; i++)  {
              var obj: Reglada = Object.assign({}, items[i]);
              
              this.reglada.push(obj);
            }
          }
      );
  }

  ngOnInit() {
  }
}
