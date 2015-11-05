/*
	This contains example of
	(event)
	#myRef
*/

import {Component, View} from 'angular2/angular2';
@Component({
  selector: 'event-change',
  
})
@View({
	template: `
	    <h2>Events</h2>
	   	<button (click)="shout()">Laugh</button>
	   	<br />
	   	<input #my-input />
	   	<button (click)="displayInputValue(myInput)">What's in the input?</button>
	    `
})
export class EventsAndChange {
	shout:function () {
		alert("haa haa haa haa");
	}
	displayInputValue:function (element) {
		//element id the dom element.
		var textInInput = element.value;
		if (!textInInput)
			alert("Please insert text in the input box");
		else
			alert("text is: " + textInInput);
	}
}
