import { Component, OnInit } from '@angular/core';
import { Coneixements } from './coneixements.model';
import { DataService } from '../../data.service';
import { Globals } from '../../globals';
import * as Enumerable from "linq-es2015";


@Component({
  selector: 'app-coneixements',
  templateUrl: './coneixements.component.html',
  styleUrls: ['./coneixements.component.css'],
  providers: [DataService]
})
export class ConeixementsComponent implements OnInit {
  public literal: Coneixements = new Coneixements(); 
  public coneixements: Coneixements[] = new Array<Coneixements>();
  public cultura: string;
  
  constructor(public data: DataService, globals: Globals)
  { 
    this.cultura = globals.cultura;

    data.cargarDades(new Coneixements()).then(
        res => { // Success
          var items = Enumerable.asEnumerable<Coneixements>(JSON.parse(JSON.stringify(res))).ToArray();

          for (var i = 0; i < items.length; i++)  {

            var obj = Object.assign({}, items[i]);

            var obj = new Coneixements();


            obj.cultura = items[i].cultura;
            obj.categoria = items[i].categoria;
            obj.descripcio = items[i].descripcio;
            obj.experiencia = items[i].experiencia;
            obj.temps = items[i].temps;
            obj.nivell = items[i].nivell;
            obj.versio = items[i].versio;
            obj.rowSpan = items[i].rowSpan; 
            obj.td = items[i].td;
            obj.ordre = items[i].ordre;

            if (obj.experiencia != 1) {
              switch (globals.cultura) { 
                case "ca-ES":
                  if (obj.temps == "any") obj.temps += "s";
                  else obj.temps += "os";

                  break;
                case "es-ES":
                  if (obj.temps == "año") obj.temps += "s";
                  else obj.temps += "es";

                  break;
                case "en-GB":                
                  obj.temps += "s";

                  break;
              }
            }

            this.coneixements.push(obj);            
          }        

          globals.load = true;
        }
    );
  }

  ngOnInit() {
  }

}
