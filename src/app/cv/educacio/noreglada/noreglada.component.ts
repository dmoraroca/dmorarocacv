import { Component, OnInit } from '@angular/core';
import { NoReglada } from './noreglada.model';
import { DataService } from '../../../data.service';
import { Globals } from '../../../globals';
import * as Enumerable from "linq-es2015";

@Component({
  selector: 'app-noreglada',
  templateUrl: './noreglada.component.html',
  styleUrls: ['./noreglada.component.css'],
  providers: [DataService]
})
export class NoRegladaComponent implements OnInit {

  public noreglada: NoReglada[] = new Array<NoReglada>();
 
  constructor(public data: DataService, globals: Globals)
  {

    data.cargarDades(new NoReglada()).then (
        res => { // Success
          var items = Enumerable.asEnumerable<NoReglada>(JSON.parse(JSON.stringify(res))).OrderByDescending(x => x["Any"]).ToArray();

          for (var i = 0; i < items.length; i++)  {
            var obj: NoReglada = Object.assign({}, items[i]);

            switch (globals.cultura) {
              case "ca-ES":
                obj.LiteralHores = "hora";
                if (obj.Hores > 1) obj.LiteralHores = "hores";
                break;
              case "es-ES":
                obj.LiteralHores = "hora";
                if (obj.Hores > 1) obj.LiteralHores = "horas";
                break;
              case "en-GB":
                obj.LiteralHores = "hour";
                if (obj.Hores > 1) obj.LiteralHores = "hours";
                break;
            }

            

            this.noreglada.push(obj);
          }

        }
    );
  }

  ngOnInit() {
  }

}
