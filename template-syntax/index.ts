/*
	This component imports all the components inside the current folder
*/

import {Component, View} from 'angular2/angular2';
import {DataPrint} from 'template-syntax/data-printing.ts';
import {DataOperations} from 'template-syntax/data-operations.ts';
import {InputValue} from 'template-syntax/input-value.ts';
import {AttributeClass} from 'template-syntax/attribute-class.ts';
import {EventsAndChange} from 'template-syntax/event-and-change.ts';
import {ForAndIf} from 'template-syntax/if-for.ts';
import {SwitchTemplates} from 'template-syntax/ng-switch.ts';
import {PipeExample} from 'template-syntax/pipe.ts';
import {ElvisExample} from 'template-syntax/elvis-operator.ts';



@Component({
	selector: 'template-syntax',
})
@View({
		directives: [DataPrint, DataOperations, InputValue, AttributeClass, EventsAndChange, ForAndIf, SwitchTemplates, PipeExample, ElvisExample],
		template: `
	    <data-print></data-print>
	    <data-operations></data-operations>
	    <event-change></event-change>
	    <input-value></input-value>
	    <attr-class></attr-class>
	    <if-for></if-for>
	    <eg-switch></eg-switch>
	    <eg-pipe></eg-pipe>
	    <eg-elvis></eg-elvis>

	    `
})
export class TemplateSyntax {
}
