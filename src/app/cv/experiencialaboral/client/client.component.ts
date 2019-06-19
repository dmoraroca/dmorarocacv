import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { DataService } from '../../../data.service';
import { Globals } from '../../../globals';
import { Client } from './client.model';
import * as Enumerable from "linq-es2015";

export class Tag {
  public text:string = "";

  public constructor(text) {
      this.text = text;
  }
}

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],  
  providers: [DataService]
})
export class ClientComponent implements OnInit {
    public clients: Client[] = [];
    public clase_clients: boolean[] = new Array<boolean>();
    public literal: Client = new Client(); 
    public cultura: string;
    public Console = console;
    @Input() empresa: string;
    @Input() empresaid: string;
    @Input() fromClient: boolean;
    

    public Panel_ClickEvent(pos: number): void {
      this.clase_clients[pos] = !this.clase_clients[pos];
    }

    public close_click(ev) {
      
    }


    constructor(public data: DataService, globals: Globals)
    {
        var that = this;
        this.cultura = globals.cultura;

        data.cargarDades(new Client()).then(
            res => { // O
              this.clients = new Array<Client>();
              
              var items: Client[] = [];
              res.forEach(item => {
                let obj: Client = new Client();

                obj.Id = item["Id"];
                obj.Cultura = item["Cultura"];
                obj.Empresa = item["Empresa"];
                obj.EmpresaId = item["EmpresaId"];
                obj.EsClient = item["EsClient"];
                obj.Empresa = item["Client"];
                obj.Sector = item["Sector"];
                obj.Rol = item["Rol"];
                obj.Descripcio = item["Descripcio"];
                obj.Tecnologies = item["Tecnologies"];
                obj.FromClient = item["FromClient"];
                obj.NomClient = item["Client"];


                if (item["EmpresaId"] == this.empresaid) {
                  items.push(obj);
                }
              });

              items.forEach(
                  function (item) {
                    var obj: Client = Object.assign(item);

                    obj["Tags"] = [];
                    obj.Tecnologies.split(',').forEach(
                      function (item) {
                        obj["Tags"].push({text: item});
                      }
                    );                
                           
                    that.clients.push(obj);
                  }
              );
            }
        );
    }

    ngOnInit(): void {
     
    }
}