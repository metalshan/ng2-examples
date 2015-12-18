/*
	This is outer component of nested data binding example
*/

import {Component, View, FORM_DIRECTIVES} from 'angular2/angular2';
import {InnerComponentDataBinding} from './inner.ts';

@Component({
	selector: 'outer-component-db',

})
@View({
	directives: [FORM_DIRECTIVES, InnerComponentDataBinding]
	template: `
	    <h3>This is nested outer</h3>
	    <input type="text" #my-input [(ng-model)]="myValue" />
	    <p>Input value is : {{myValue}}</p>
	    <inner-component-db [myValue]="myValue"></inner-component-db>
	    `
})
export class OuterComponentDataBinding {
	myValue = "Paul Shan";
}
