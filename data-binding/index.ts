/*
	This component imports all the components inside the current folder
*/

import {Component, View} from 'angular2/angular2';
import {TwoWayDataBinding} from './simple-two-way.ts';
import {OneWayDataBinding} from './simple-one-way.ts';
import {OuterComponentDataBinding1} from './nested-component-binding-one-way/outer.ts';
import {OuterComponentDataBinding2} from './nested-component-binding-two-way/outer.ts';

@Component({
	selector: 'data-binding',
})

@View({
		directives: [TwoWayDataBinding, OneWayDataBinding, OuterComponentDataBinding1, OuterComponentDataBinding2],
		template: `
		<hr />
		<h1>Data binding Examples: </h1>
    	<hr />
	    <twoway-binding-input></twoway-binding-input>
		<oneway-binding-input></oneway-binding-input>
		<outer-component-db-1></outer-component-db-1>
		<outer-component-db-2></outer-component-db-2>
	    `
})
export class DataBinding {
}
