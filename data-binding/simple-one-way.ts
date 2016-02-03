/*
	This contains example of
	one way data binding
*/

import {Component, View} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';


@Component({
	selector: 'oneway-binding-input',

})
@View({
	directives: [FORM_DIRECTIVES]
	template: `
	    <h2>Simple one way binding</h2>
	    <input type="text" #myInput [ngModel]="myValue" />
	    <p>Input value is : {{myValue}}</p>
	    <button (click)="changeToRandom()">Change to random</button>
	    `
})
export class OneWayDataBinding {
	myValue = 'Paul Shan';
	changeToRandom(){
		var aNum = Math.random();
		this.myValue = aNum;
	}
}
