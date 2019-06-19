import { Component} from '@angular/core';
@Component({
	selector: 'cards',
	templateUrl: 'card.component.html' 
})
export class CardsComponent {
	public presentations = [{
		id: "1",
		title: "AAA"		
	}, {
		id: "2",
		title: "BBB"
	}]
}