/*
	This contains example of
	CurrencyPipe

	This pipe also uses DecimalPipe internally for formatting
*/

import {Component, View} from 'angular2/angular2';
@Component({
  selector: 'currency-pipe',
  
})
@View({
	template: `
	    <h2>Currency Pipe Example</h2>
	    <p>A in USD: {{a | currency:'USD':true}}</p>
    	<p>B in INR: {{b | currency:'INR':false:'4.2-2'}}</p>
	    `
})

export class CurrencyPipe {
	a: number = 0.12345;
  	b: number = 1.09876;
}
