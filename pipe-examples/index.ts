/*
	This component imports all the components inside the current folder
*/

import {Component, View} from 'angular2/angular2';
import {DatePipe} from 'pipe-examples/pipe.ts';


@Component({
	selector: 'pipe-examples',
})
@View({
		directives: [DatePipe],
		template: `
		<h1>Pipe operator Examples: </h1>
    	<hr />
	    <date-pipe></date-pipe>

	    `
})
export class PipeExamples {
}
