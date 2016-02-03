/*
	This contains implementation  of
	custom pipes
*/

import {Component, View} from 'angular2/core';
import {RemoveSpaces} from './custom-pipes/remove-spaces.ts';


@Component({
  selector: 'remove-spaces-impl',
  
})
@View({
	pipes: [RemoveSpaces],
	template: `
	    <h2>Custom pipe : removeSpaces</h2>
	    <h4> {{sampleString}} => {{sampleString | removeSpaces}}</h4>
	    `
})
export class RemoveSpacesImpl {
	sampleString = "I love angular 2";
}
