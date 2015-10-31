/*
	This component imports all the components inside the current folder
*/

import {Component, View} from 'angular2/angular2';
import {DataPrint} from 'template-syntax/data-printing.ts';
import {DataOperations} from 'template-syntax/data-operations.ts';
import {InputValue} from 'template-syntax/input-value.ts';
import {AttributeClass} from 'template-syntax/attribute-class.ts';

@Component({
	selector: 'template-syntax',
})
@View({
		directives: [DataPrint, DataOperations, InputValue, AttributeClass],
		template: `
	    <data-print></data-print>
	    <data-operations></data-operations>
	    <input-value></input-value>
	    <attr-class></attr-class>
	    `
})
export class TemplateSyntax {
}
