/*
	This contains example of
	one way data binding
*/

import {Component, View, FORM_DIRECTIVES} from 'angular2/core';
@Component({
	selector: 'oneway-binding-input',

})
@View({
	directives: [FORM_DIRECTIVES]
	template: `
	    <h2>Simple one way binding</h2>
	    <input type="text" #my-input [ng-model]="myValue" />
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
