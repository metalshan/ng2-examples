/*
	This is outer component of nested data binding example
*/

import {Component, View, FORM_DIRECTIVES} from 'angular2/core';
import {InnerComponentDataBinding} from './inner.ts';

@Component({
	selector: 'outer-component-db-1',

})
@View({
	directives: [FORM_DIRECTIVES, InnerComponentDataBinding]
	template: `
		<h2>Nested Components one way</h2>
	    <h3>This is nested outer</h3>
	    <input type="text" #my-input [(ng-model)]="myValue" />
	    <p>Input value is : {{myValue}}</p>
	    <inner-component-db [his-value]="myValue"></inner-component-db>
	    `
})
export class OuterComponentDataBinding1 {
	myValue = "Paul Shan";
}
