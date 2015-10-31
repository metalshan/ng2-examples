/*
	This contains example of
	[value]="myValue" 
	#my-input
	(event)="doSomething(myInput)"
*/

import {Component, View} from 'angular2/angular2';
@Component({
  selector: 'input-value',
  
})
@View({
	template: `
	    <h2>Input Value</h2>
	    <input #my-input [value]="myValue" (keyUp)="chasngeMyValue(myInput)" /> <button (click)="resetMyValue()">Reset</button>
	    <p>Input value is : {{myValue}}</p>
	    `
})
export class InputValue {
	myValue = 'Paul Shan';
	chasngeMyValue:function (element) {
		this.myValue = element.value;
	};
	resetMyValue:function () {
		this.myValue = 'Paul Shan';
	}
}
