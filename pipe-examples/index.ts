/*
	This component imports all the components inside the current folder
*/

import {Component, View} from 'angular2/angular2';
import {DatePipe} from 'pipe-examples/pipe.ts';
import {RemoveSpacesImpl} from 'pipe-examples/custom-removeSpacesImpl.ts';
import {FilterStringLengthImpl} from 'pipe-examples/custom-stringLengthImpl.ts';
import {PredefinedPipe} from './predefined-pipes.ts'


@Component({
	selector: 'pipe-examples',
})
@View({
		directives: [DatePipe, RemoveSpacesImpl, FilterStringLengthImpl, PredefinedPipe],
		template: `
		<hr />
		<h1>Pipe operator Examples: </h1>
    	<hr />
	    <date-pipe></date-pipe>
	    <remove-spaces-impl></remove-spaces-impl>
	    <string-length-impl></string-length-impl>
	    <predefined-pipe></predefined-pipe>
	    `
})
export class PipeExamples {
}
