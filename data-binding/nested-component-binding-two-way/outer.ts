/*
	This is outer component of nested data binding example
*/

import {Component, View} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';

import {InnerComponentDataBinding} from './inner.ts';

@Component({
	selector: 'outer-component-db-2',

})
@View({
	directives: [FORM_DIRECTIVES, InnerComponentDataBinding]
	template: `
		<h2>Nested Components two way</h2>
	    <h3>This is nested outer</h3>
	    <input type="text" #myInput [(ngModel)]="myValue" />
	    <p>Input value is : {{myValue}}</p>
	    <inner-component-db [(hisValue)]="myValue"></inner-component-db>
	    `
})
export class OuterComponentDataBinding2 {
	myValue = "Paul Shan";
	onHisValueChange(val){
		this.myValue = val;
	}
}
