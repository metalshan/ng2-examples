/*
	This is inner component of nested data binding example
*/

import {Component, View, Input, Output, EventEmitter} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';


@Component({
	selector: 'inner-component-db',

})
@View({
	directives: [FORM_DIRECTIVES]
	template: `
	    <h3>Thhis is nested inner</h3>
	    <input type="text" #myInput [value]="hisValue" (keyup)="onHisValueChang(myInput)" />
	    <p>Input value is : {{hisValue}}</p>
	    `
})
export class InnerComponentDataBinding {
	@Input() hisValue:any;
	@Output() hisValueChange = new EventEmitter();
	onHisValueChang(element){
		this.hisValue = element.value;
		this.hisValueChange.next(this.hisValue)
	}
}
