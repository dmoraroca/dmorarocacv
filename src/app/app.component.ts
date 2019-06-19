import { Component } from '@angular/core';
import { Globals } from './globals';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    public g: Globals;
    title = 'Curriculum Vitae';

    constructor (globals: Globals) {
      this.g = globals;
      this.g.cultura = "ca-ES";
    }
}
