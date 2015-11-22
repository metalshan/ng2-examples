/*
	This contains example of
	LowerCasePipe
	UpperCasePipe

*/

import {Component, View} from 'angular2/angular2';
@Component({
  selector: 'case-pipe',
  
})
@View({
	template: `
	    <h2>Lower and Upper case Pipe Example</h2>
	    <p>In lowerCase : {{str | lowercase}}</p>
	    <p>In uppercase : {{str | uppercase}}</p>
	    `
})

export class LowerUpperCasePipe {
	str: string = "My name is Paul Shan";
}
