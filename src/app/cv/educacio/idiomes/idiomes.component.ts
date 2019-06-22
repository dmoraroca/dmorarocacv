import { Component, OnInit } from '@angular/core';
import { Idiomes } from './idiomes.model';
import { DataService } from '../../../data.service';
import { Globals } from '../../../globals';

@Component({
  selector: 'app-idiomes',
  templateUrl: './idiomes.component.html',
  styleUrls: ['./idiomes.component.css'],
  providers: [DataService]
})
export class IdiomesComponent implements OnInit {  
  public idiomes: Idiomes[] = new Array<Idiomes>();
  public literal: Idiomes = new Idiomes(); 
  public cultura: string;
  
  constructor(public data: DataService, globals: Globals)
  { 
    this.cultura = globals.cultura;
    
    data.cargarDades(new Idiomes()).then (
        res => { // Success
          var items = JSON.parse(JSON.stringify(res));

          for (var i = 0; i < items.length; i++)  {
            var obj = Object.assign({}, items[i]);

            this.idiomes.push(obj);
          }
        }
    );
  }

  ngOnInit() {
  }

}
