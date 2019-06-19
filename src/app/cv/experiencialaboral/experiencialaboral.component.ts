import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataService } from '../../data.service';
import { Globals } from '../../globals';
import { ExperienciaLaboral } from './experiencialaboral.model';
import * as Enumerable from "linq-es2015";

interface AutoCompleteModel {
  value: any;
  display: string;
}


@Component({
  selector: 'app-experiencialaboral',
  templateUrl: './experiencialaboral.component.html',
  styleUrls: ['./experiencialaboral.component.scss'],  
  providers: [DataService],
})
export class ExperienciaLaboralComponent implements OnInit {
  public experiencialaboral: ExperienciaLaboral[] = new Array<ExperienciaLaboral>();
  public clase_experiencialaboral_titol:string[] = new Array<string>();
  public clase_experiencialaboral_panell:string[] = new Array<string>();
  public tags:any[] = [];
  public literal: ExperienciaLaboral = new ExperienciaLaboral(); 
  public cultura: string;
  public itemsAsObjects = [{value: 0, display: 'Angular'}, {value: 1, display: 'React'}];
  
  public Panel_ClickEvent_Titol(index): void {
    if (this.clase_experiencialaboral_titol[index].indexOf("noactiu_experiencialaboral_" + index) >= 0) {
      this.clase_experiencialaboral_titol[index] = "actiu_experiencialaboral_" + index;
      this.clase_experiencialaboral_panell[index] = "tancar_experiencialaboral_" + index;
    } 
    else {
      this.clase_experiencialaboral_titol[index] = "noactiu_experiencialaboral_" + index;
      this.clase_experiencialaboral_panell[index] = "obrir_experiencialaboral_" + index;
    }
  }
  

  constructor(public data: DataService, globals: Globals)
  {
    var that = this;
    this.cultura = globals.cultura;

    data.cargarDades(new ExperienciaLaboral()).then (
        res => { // Success
          for (var i = 0; i < res.length; i++)  {                            
            let obj = res[i];

            obj["newMesFinal"] = new Date(obj["MesFinal"]);
          }

          var items = Enumerable.asEnumerable<ExperienciaLaboral>(JSON.parse(JSON.stringify(res))).OrderByDescending(x => x["newMesFinal"]).ToArray();

          for (var i = 0; i < items.length; i++)  {                            
            let obj = items[i];
            
            obj.EsClient = obj.EsClient;
            //obj.MesInicial = new Date(obj.MesInicial);
            //obj.MesFinal = new Date(obj.MesFinal);

            if (obj.Tecnologies) {
              obj.Tags = [];
              obj.Tecnologies.split(',').forEach(
                function (item) {
                  obj.Tags.push({text: item});
                }
              );
            }

            this.experiencialaboral.push(obj);

            console.log(this.experiencialaboral);
          }

          this.experiencialaboral.forEach(function (obj, index)  {
            that.clase_experiencialaboral_titol.push("noactiu_experiencialaboral_" + index);
            that.clase_experiencialaboral_panell.push("obrir_experiencialaboral_" + index);
          });

        }
    );
  }
  
  ngOnInit() {
  }
}
