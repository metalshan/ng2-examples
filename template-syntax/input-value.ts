/*
	This contains example of
	[value]="myValue" 
	#myInput
	(event)="doSomething(myInput)"
*/

import {Component, View} from 'angular2/core';
@Component({
  selector: 'input-value',
  
})
@View({
	template: `
	    <h2>Input Value</h2>
	    <input #myInput [value]="myValue" (keyup)="chasngeMyValue(myInput)" /> <button (click)="resetMyValue()">Reset</button>
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
