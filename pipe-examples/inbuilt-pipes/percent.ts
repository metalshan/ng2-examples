/*
	This contains example of
	PercentPipe
*/

import {Component, View} from 'angular2/core';
@Component({
  selector: 'percent-pipe',
  
})
@View({
	template: `
	    <h2>Percent Pipe Example</h2>
	    <p>myNum : {{myNum | percent}}</p>
	    <p>myNum (3.2-2) : {{myNum | percent:'3.2-2'}}</p>

	    `
})

export class PercentPipe {
	myNum: number = 0.1415927;
}
