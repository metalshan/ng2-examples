/*
	This is inner component of nested data binding example
*/

import {Component, View, FORM_DIRECTIVES} from 'angular2/angular2';
@Component({
	selector: 'inner-component-db',

})
@View({
	directives: [FORM_DIRECTIVES]
	template: `
	    <h3>Thhis is nested inner</h3>
	    <input type="text" #my-input [(ng-model)]="myValue" />
	    <p>Input value is : {{myValue}}</p>
	    `
})
export class InnerComponentDataBinding {
	myValue: any;
}
