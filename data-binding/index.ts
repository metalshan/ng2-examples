/*
	This component imports all the components inside the current folder
*/

import {Component, View} from 'angular2/angular2';
import {TwoWayDataBinding} from './simple-two-way.ts';
import {OneWayDataBinding} from './simple-one-way.ts';




@Component({
	selector: 'data-binding',
})
@View({
		directives: [TwoWayDataBinding, OneWayDataBinding],
		template: `
		<hr />
		<h1>Data binding Examples: </h1>
    	<hr />
	    <twoway-binding-input></twoway-binding-input>
		<oneway-binding-input></oneway-binding-input>
	    `
})
export class DataBinding {
}
