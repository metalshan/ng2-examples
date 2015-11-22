/*
	This contains example of
	DecimalPipe
*/

import {Component, View} from 'angular2/angular2';
@Component({
  selector: 'decimal-pipe',
  
})
@View({
	template: `
	    <h2>Decimal Pipe Example</h2>
	    <p>pi (no formatting): {{pi}}</p>
	    <p>pi (.5-5): {{pi | number:'.5-5'}}</p>
	    <p>pi (2.10-10): {{pi | number:'2.10-10'}}</p>
	    <p>pi (.3-3): {{pi | number:'.3-3'}}</p>

	    `
})

export class DecimalPipe {
	pi: number = 3.1415927;
}
