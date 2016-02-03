/*
	This is inner component of nested data binding example
*/

import {Component, View, Input} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';


@Component({
	selector: 'inner-component-db',

})
@View({
	directives: [FORM_DIRECTIVES]
	template: `
	    <h3>Thhis is nested inner</h3>
	    <input type="text" #myInput [(ngModel)]="hisValue" />
	    <p>Input value is : {{hisValue}}</p>
	    `
})
export class InnerComponentDataBinding {
	@Input() hisValue:any;
}
