/*
	This is inner component of nested data binding example
*/

import {Component, View, FORM_DIRECTIVES, Input} from 'angular2/core';
@Component({
	selector: 'inner-component-db',

})
@View({
	directives: [FORM_DIRECTIVES]
	template: `
	    <h3>Thhis is nested inner</h3>
	    <input type="text" #my-input [(ng-model)]="hisValue" />
	    <p>Input value is : {{hisValue}}</p>
	    `
})
export class InnerComponentDataBinding {
	@Input() hisValue:any;
}
