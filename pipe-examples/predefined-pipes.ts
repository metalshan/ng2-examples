/*
	This contains example of
	in built pipes
*/

import {Component, View} from 'angular2/angular2';
import {DecimalPipe} from './inbuilt-pipes/decimal.ts';
import {CurrencyPipe} from './inbuilt-pipes/currency.ts';
import {LowerUpperCasePipe} from './inbuilt-pipes/lower-upper-case.ts';

@Component({
  selector: 'predefined-pipe',
  
})
@View({
	directives: [DecimalPipe, CurrencyPipe, LowerUpperCasePipe],
	template: `
	    <h2>Predefined Pipes: </h2>
	    <decimal-pipe></decimal-pipe>
	    <currency-pipe></currency-pipe>
	    <case-pipe></case-pipe>
	    `
})
export class PredefinedPipe {
}
