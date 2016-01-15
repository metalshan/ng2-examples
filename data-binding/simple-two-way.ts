/*
	This contains example of
	two way data binding
*/

import {Component, View, FORM_DIRECTIVES} from 'angular2/angular2';
@Component({
	selector: 'twoway-binding-input',

})
@View({
	directives: [FORM_DIRECTIVES]
	template: `
	    <h2>Simple two way binding</h2>
	    <input type="text" #my-input [(ng-model)]="myValue" />
	    <p>Input value is : {{myValue}}</p>
	    <button (click)="changeToRandom()">Change to random</button>

	    `
})
export class TwoWayDataBinding {
	myValue = 'Paul Shan';
	changeToRandom(){
		var aNum = Math.random();
		this.myValue = aNum;
	}
}
