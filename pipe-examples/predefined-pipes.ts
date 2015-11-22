/*
	This contains example of
	in built pipes
*/

import {Component, View} from 'angular2/angular2';
import {DecimalPipe} from './inbuilt-pipes/decimal.ts';
import {CurrencyPipe} from './inbuilt-pipes/currency.ts';
import {LowerUpperCasePipe} from './inbuilt-pipes/lower-upper-case.ts';
import {JSONPipe} from './inbuilt-pipes/json.ts';
import {PercentPipe} from './inbuilt-pipes/percent.ts';
import {SlicePipe} from './inbuilt-pipes/slice.ts';

@Component({
  selector: 'predefined-pipe',
  
})
@View({
	directives: [DecimalPipe, CurrencyPipe, LowerUpperCasePipe, JSONPipe, PercentPipe, SlicePipe],
	template: `
    <h2>Predefined Pipes: </h2>
    <decimal-pipe></decimal-pipe>
    <currency-pipe></currency-pipe>
    <case-pipe></case-pipe>
    <json-pipe></json-pipe>
    <percent-pipe></percent-pipe>
    <slice-pipe></slice-pipe>
    `
})
export class PredefinedPipe {
}
